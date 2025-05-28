const express = require("express");
const Product = require("../model/product");
const router = express.Router();
const SalesOrder = require("../model/salesorder");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const pdf = require('html-pdf-node');


function numberToWords(num) {
    console.log(num ,"num to see in word")
    const belowTwenty = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
        "Seventeen", "Eighteen", "Nineteen"
    ];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const aboveHundred = ["", "Thousand", "Million", "Billion", "Trillion"];

    if (num === 0) return "Zero";

    function helper(num) {
        if (num < 20) return belowTwenty[num];
        if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + belowTwenty[num % 10] : "");
        if (num < 1000) return belowTwenty[Math.floor(num / 100)] + " Hundred" + (num % 100 !== 0 ? " " + helper(num % 100) : "");
        return "";
    }

    let thousandIndex = 0;
    let result = "";

    while (num > 0) {
        const part = num % 1000;
        if (part !== 0) {
            result = helper(part) + (thousandIndex > 0 ? " " + aboveHundred[thousandIndex] : "") + " " + result;
        }
        num = Math.floor(num / 1000);
        thousandIndex++;
    }

    return result.trim();
}

function numberToWordsWithCurrency(num) {
    return numberToWords(num) ;
}


const generateInvoiceTemplate = (order) => {
    const invoiceDate = new Date(order.createdAt).toLocaleDateString();
    console.log(order,"order for email ")
    let grandTotal = 0;
   
    const totalPriceInWords = numberToWordsWithCurrency(order.totalPrice);
    return `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Arial", sans-serif; 
           
        }
        .invoice { 
            border: 1px solid #ccc; 
            padding: 20px 30px;
            margin: 20px;
         }
         .invoicehead{
            text-align: center;
         }
         .invoicehead h4{
            padding-top: 4px;
         }
         .companydetail{
            margin-top: 15px;
            padding: 10px 50px;
            width: 100%;
            border: 1px solid #ccc; 
            font-size: 11px;


         }
         .companydetail p{
            padding: 2px 0;
         }
         .companydetailleft{
            width: 60%;
            display: inline-block;
         }
         .companydetailright{
            width: 35%;
            display: inline-block;
         }

         .receiverdetail{
            margin-top: 20px;
            padding: 10px 50px;
            width: 100%;
            border: 1px solid #ccc;
            font-size: 11px;


         }
         .receiverdetail p{
            padding: 2px 0;
         }
         .bankdetails{
            margin-top: 20px;
            padding: 15px 50px;
            width: 100%;
            border: 1px solid #ccc;
            font-size: 11px;
         }
         .bankdetails p{
            padding: 2px 0;
         }
         .sign{
            margin-top: 20px;
            padding: 10px 50px;
            width: 100%;
            border: 1px solid #ccc;
            font-size: 12px;
         }
         .receiverdetailleft{
            width: 50%;
            display: inline-block;
         }
         .receiverdetailright{
            width: 45%;
            display: inline-block;
         }
         .ordersumtable{
            margin-top: 20px;
            padding: 10px 0px;
            width: 100%;
            font-size: 9px;
         }
         table{
            width: 100%;
            border: 1px solid #ccc;
            border-collapse: collapse;

         }
         th{
            border: 1px solid #ccc;
            padding: 5px;
         }
         td{
            border: 1px solid #ccc;
            padding: 5px;

         }
         .signing{
            height: 100px;
         }
         
    </style>
</head>
<body>

    <div class="invoice">
        <div class="invoicehead">
            <p>SUBJECT TO MUMBAI JURISDICTION</p>
            <h4>TAX  INVOICE</h4>
        </div>


        <div class="companydetail">
            <div class="companydetailleft">
                <p>GSTIN : 27AAKCR3049R1ZL</p>
                <p>RU-BRAMA RETAIL PVT. LTD.</p>
                <p>WICEL ADMINSTRATION BUILDING 2ND FLOOR,</p>
                <p>PLOT NO.2, F - 11 & 12, MIDC CENTRAL ROAD,</p>
                <p>MAROL, ANDHERI (EAST),</p>
                <p>MUMBAI 400093</p>
                <p>Email : care@tinytiaraa.com </p>


                <p style="margin-top: 15px;">PAN : AAKCR3049R</p>

            </div>

            <div class="companydetailright">
                <p>Invoice No : ${order?.orderID}</p>
                <p>Invoice Date : ${invoiceDate}</p>

                <p>Store - Venue (${order?.venue}) </p>

                <p>M.O.T : Hand Picked</p>
                

                
                <p>Place of Supply : </p>
                <p>Tax is Payable on Reverse charges : No</p>

            </div>

        </div>

        <div class="receiverdetail">

            <div class="receiverdetailleft">
                
            <p style="font-weight: 600;">Detail of Consignee </p>

                <div class="receiverdetailadddresss">
                    <p>To,</p>
                    <p>Dear. ${order?.name}</p>
                    <p>${order?.email},</p>
                    <p>${order?.number} </p>
                    <p>${order?.venue} </p>

                   
                    <p>GSTIN: </p>

                </div>

            </div>

           
            

        </div>

       <div class="ordersumtable" style="overflow: hidden;">
  <table cellpadding="10px" style="font-size: 9px !important;overflow: hidden !important;">
    <thead>
      <tr style="background-color: rgb(238, 238, 238);">
        <th>Sr <br> nos</th>
        <th>Product Name <br>HSN / SAC Code</th>
        <th>Carat</th>
        <th>Gross <br>Wt.</th>
        <th>Net <br>Wt.</th>
        <th>Rate <br>Per Unit</th>
        <th>Taxable <br>Value</th>
        <th>CGST (1.5%) <br>Amt & Rate</th>
        <th>SGST (1.5%) <br>Amt & Rate</th>
        <th>IGST (3%) <br>Amt & Rate</th>
        <th>Amount <br>(Rs)</th>
      </tr>
    </thead>
    <tbody>
      ${order.cart
        .map((item, index) => {
          console.log(item)
          const discountPrice = item?.salesTeamPrice ? parseFloat(item?.salesTeamPrice) :  (item.chainPrice > 0 ? item.discountPrice + item.chainPrice : item.discountPrice);
          const cgst = (discountPrice * 0.015).toFixed(2);
          const sgst = (discountPrice * 0.015).toFixed(2);
          const igst = (discountPrice * 0.03).toFixed(2);
         const taxableValue = +(discountPrice - igst).toFixed(2);
          
          grandTotal += taxableValue;
          return `
            <tr style="text-align: center;">
              <td rowspan="4">${index + 1}</td>
              <td rowspan="${item?.selectedEnamelColor ? 1 : 2}">(${item.skuid}) - ${item.name} ${item.showWithChain ? '& chain': ''}</td>
              <td rowspan="${item?.selectedEnamelColor ? 1 : 2}"></td>
               <td rowspan="4">
                ${item.showWithChain 
                    ? (item.selectedChainSize === '13inch' 
                        ? (parseFloat(item.goldWeight.weight) + 1).toFixed(2)  // Add 1g for 13inch chain
                        : item.selectedChainSize === '18inch' 
                        ? (parseFloat(item.goldWeight.weight) + 2).toFixed(2)  // Add 2g for 18inch chain
                        : parseFloat(item.goldWeight.weight).toFixed(2))        // If no chain, show original weight
                    : parseFloat(item.goldWeight.weight).toFixed(2)               // If showWithChain is false, use original weight
                }
                </td>
              <td rowspan="4">
                ${item.showWithChain 
                    ? (item.selectedChainSize === '13inch' 
                        ? (parseFloat(item.goldWeight.weight) + 1).toFixed(2) 
                        : item.selectedChainSize === '18inch' 
                        ? (parseFloat(item.goldWeight.weight) + 2).toFixed(2) 
                        : parseFloat(item.goldWeight.weight).toFixed(2)) 
                    : parseFloat(item.goldWeight.weight).toFixed(2)
                }
                </td>
              <td rowspan="4">${item.qty}</td>
              <td rowspan="4">${taxableValue}</td>
               ${
                  order?.venue?.toLowerCase().includes("maharashtra")
                    ? `
                  <td rowspan="4">${cgst}</td>
                  <td rowspan="4">${sgst}</td>
                  <td rowspan="4">-</td>
                `
                    : `
                  <td rowspan="4">-</td>
                  <td rowspan="4">-</td>
                  <td rowspan="4">${igst}</td>
                `
                }
              <td rowspan="4">${discountPrice}</td>
            </tr>
            <tr style="text-align: center;">
              ${item?.selectedEnamelColor ? `<td>Enamel (${item.selectedEnamelColor})</td>` : `<td></td>`}
            </tr>
            <tr style="text-align: center;">
              <td>Diamond</td>
              <td>${item.diamondWeight.weight}</td>
            </tr>
            <tr style="text-align: center;">
              <td>HSN CODE: 71081300</td>
            </tr>`;
        })
        .join('')}
    </tbody>
    <tfoot>
      <tr style="text-align: center;">
        <td>Total</td>
        <td></td>
        <td>${order.cart.reduce((acc, item) => acc + parseFloat(item.diamondWeight.weight) || 0, 0).toFixed(2)} ct</td>
        <td>
            ${order.cart.reduce((acc, item) => {
                let additionalWeight = 0;
                if (item.showWithChain) {
                    additionalWeight = item.selectedChainSize === '13inch' ? 1 : 
                                        item.selectedChainSize === '18inch' ? 2 : 0;
                }
                return acc + parseFloat(item.goldWeight.weight) + additionalWeight;
            }, 0).toFixed(2)}
            </td>

            <td>
            ${order.cart.reduce((acc, item) => {
                let additionalWeight = 0;
                if (item.showWithChain) {
                    additionalWeight = item.selectedChainSize === '13inch' ? 1 : 
                                        item.selectedChainSize === '18inch' ? 2 : 0;
                }
                return acc + parseFloat(item.goldWeight.weight) + additionalWeight;
            }, 0).toFixed(2)}
            </td>
        <td></td>
        <td>${grandTotal}</td>
        ${order?.venue?.toLowerCase().includes("maharashtra")
          ? `<td>
              ${order.cart.reduce((acc, item) => acc + parseFloat(
                ((item.salesTeamPrice 
                  ? parseFloat(item.salesTeamPrice) 
                  : (item.chainPrice > 0 
                    ? item.discountPrice + item.chainPrice 
                    : item.discountPrice)) * 0.015
                ).toFixed(2)), 0).toFixed(2)}
            </td>`
          : `<td>-</td>`}

            <td>
            ${order?.venue?.toLowerCase().includes("maharashtra")
              ? order.cart.reduce((acc, item) => acc + parseFloat(
                  (
                    (item.salesTeamPrice 
                      ? parseFloat(item.salesTeamPrice) 
                      : (item.chainPrice > 0 
                        ? item.discountPrice + item.chainPrice 
                        : item.discountPrice)
                    ) * 0.015
                  ).toFixed(2)
                ), 0).toFixed(2)
              : "-"}
          </td>

        <td></td>
        <td>${order.totalPrice}</td>
      </tr>
      <tr>
        <td colspan="8" rowspan="2">Rupees in Words: ${totalPriceInWords.toUpperCase()}.</td>
        <td colspan="2">Coupon Discount</td>
        <td>Rs. ${order?.couponDiscount || 0}</td>
      </tr>
      
      <tr style="text-align: center;">
        <td colspan="2">Total Amount Payable</td>
        <td>Rs. ${order.totalPrice}</td>
      </tr>
    </tfoot>
  </table>
</div>

        <div class="bankdetails">
            <p style="margin-top: 6px;">Remark : PAYMENT MODE - ${order?.paymentMethod?.toUpperCase()}  </p>
        </div>
        <div class="bankdetails">
        <p style="margin-top: 1px;">Return Policy: Returns accepted within 7 days of delivery, with the product in original condition, undamaged.</p>

        <p style="margin-top: 1px;">ID Verification: Delivery may require ID verification. Have your government-issued ID ready.</p>

        <p style="margin-top: 1px;">Refunds: Refunds will be issued to the original payment method after product verification.</p>

        <p style="margin-top: 1px;">Conditions: Returns and refunds depend on receiving the product in its original state with packaging and certifications intact.</p>
        </div>

        <div class="sign">
            <div style="text-align: end;">
                <p style="font-weight: 500;">For RU-BRAMA RETAIL PRIVATE LIMITED</p>
            </div>

            <div class="signing">
                <div style="display: inline-block;width: 35%;vertical-align: sub;">
                    <p style="padding-top: 70px;">Receiver's Sign</p>
                </div>
                <div style="display: inline-block;width: 30%;vertical-align: sub;">
                    <p style="padding-top: 70px;">E&OE.</p>
                </div>
                <div style="display: inline-block;width: 30%;vertical-align: sub;">
                    <p style="padding-top: 70px;">Authorised Signatory</p>
                </div>

            </div>

        </div>

    </div>

    
</body>
</html>
    `;
};




// correct code 
const generateInvoicePDF = async (order) => {
    const invoiceHTML = generateInvoiceTemplate(order);

    return new Promise((resolve, reject) => {
        // Create options for PDF generation
        const options = { format: 'A4' };

        // Convert HTML string into a PDF buffer using html-pdf-node
        const file = { content: invoiceHTML };

        pdf.generatePdf(file, options)
            .then(buffer => {
                // Convert the PDF buffer to Base64
                const base64PDF = buffer.toString('base64');
                resolve(base64PDF);
            })
            .catch(err => reject(err));
    });
};



router.post(
  "/sales-create-order",
  catchAsyncErrors(async (req, res, next) => {
    const { cart, totalPrice, email, name, number, paymentMethod, venue, status } = req.body;

    // Get the current year
    const year = new Date().getFullYear();

    // Count existing orders to determine the next order number
    const orderCount = await SalesOrder.countDocuments();

    // Generate order number (sequentially)
    const orderNumber = orderCount + 1; 

    // Format order number with leading zeros (e.g., TT-2025-001)
    const orderID = `TT-${year}-${String(orderNumber).padStart(3, "0")}`;

    const orderData = {
      orderID, // Generated order ID
      cart,
      totalPrice,
      email,
      name,
      number,
      paymentMethod,
      venue,
      status,
    };

    const order = await SalesOrder.create(orderData);

    for (const cartItem of cart) {
      await updateSalesOrder(cartItem);
    }

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
    async function updateSalesOrder(cartItem) {
      const metalColors = {
          0: "Yellow Gold",
          1: "Rose Gold",
          2: "White Gold",
      };
  
      const product = await Product.findById(cartItem._id);
      if (!product) {
          console.error(`Product with ID ${cartItem._id} not found.`);
          return;
      }
  
      const selectedMetalColor = metalColors[cartItem.selectedColor];
      const selectedEnamelColor = cartItem.selectedEnamelColor;
      const combinationKey = cartItem.selectedCombination;
      
      let updatedFields = {};  
  
      // Normalize Metal Color Key
      const rawMetalColor = selectedMetalColor?.replace(/ /g, '');
      const metalKey = `${rawMetalColor}clrStock`;
  
      // Normalize Enamel Color Key
      const enamelColorKey = selectedEnamelColor?.toLowerCase()?.replace(/_/g, '');
      const enamelStockKey = enamelColorKey ? `${enamelColorKey}${metalKey}` : null;
  
      // Normalize Combination Stock Key
      const formattedCombinationKey = combinationKey?.toLowerCase()?.replace(/\s/g, '');
      console.log(formattedCombinationKey, 'formattedCombinationKey');
      const metalColorMap = {
        "Yellow Gold": "yellowGold",
        "Rose Gold": "roseGold",
        "White Gold": "whiteGold"
      };
    const combinationMetalColor = metalColorMap[selectedMetalColor] ;
      
      // Get Stock Values
      if (!(product.combinationStocks instanceof Map)) {
        console.error("❌ product.combinationStocks is not a Map:", product.combinationStocks);
      }
    
    // Retrieve data from the Map
    const combinationStockData = product.combinationStocks?.get(formattedCombinationKey);
    
    
    // Ensure combinationStockData exists before accessing properties
    const combinationStock = combinationStockData ? combinationStockData[combinationMetalColor] : undefined;
    

      const normalStock = product.stock;
      const metalStock = product.Metalcolorstock?.[metalKey];
      const enamelStock = selectedEnamelColor
          ? product.Enamelcolorstock?.[enamelColorKey]?.[enamelStockKey]
          : null;


     
  
      // Deduct stock in the correct priority order
      if (combinationStock !== undefined && combinationStock >= cartItem.qty) {
       
        if (!product.combinationStocks || !product.combinationStocks.has(formattedCombinationKey)) {
            return;
        }
    
        const stockEntry = product.combinationStocks.get(formattedCombinationKey);
    
        
        if (!stockEntry || !(combinationMetalColor in stockEntry)) {
            return;
        }
    
       
        stockEntry[combinationMetalColor] = Math.max(0, stockEntry[combinationMetalColor] - cartItem.qty);
    
        
        updatedFields[`combinationStocks.${formattedCombinationKey}.${combinationMetalColor}`] = stockEntry[combinationMetalColor];
    
    }
    
      else if (selectedEnamelColor && enamelStock !== undefined && enamelStock >= cartItem.qty) {
          product.Enamelcolorstock[enamelColorKey][enamelStockKey] -= cartItem.qty;
          updatedFields[`Enamelcolorstock.${enamelColorKey}.${enamelStockKey}`] = product.Enamelcolorstock[enamelColorKey][enamelStockKey];
      } 
      else if (metalStock !== undefined && metalStock >= cartItem.qty) {
          product.Metalcolorstock[metalKey] -= cartItem.qty;
          updatedFields[`Metalcolorstock.${metalKey}`] = product.Metalcolorstock[metalKey];
      } 
      else if (normalStock !== undefined && normalStock >= cartItem.qty) {
          product.stock -= cartItem.qty;
          updatedFields.stock = product.stock;
      } 
      else {
          console.warn(`Insufficient stock for product ${cartItem._id}.`);
          return;
      }
  
      // Increment sold_out count
      product.sold_out += cartItem.qty;
      updatedFields.sold_out = product.sold_out;
  
      // Update in database
      await Product.findByIdAndUpdate(cartItem._id, { $set: updatedFields }, { new: true, validateBeforeSave: false });
  
      console.log(`Stock successfully updated for product ${cartItem._id}`);
  }
  
  })
);





//get all orders of a shop 

router.get(
  "/get-all-sales-orders",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const orders = await SalesOrder.find().sort({ createdAt: -1 });

      res.status(200).json({
        success: true,
        orders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

//get single order for a shop

router.get(
  "/sales-order/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const order = await SalesOrder.findById(req.params.id);

      if (!order) {
        return res.status(404).json({
          success: false,
          message: "Order not found",
        });
      }

      res.status(200).json({
        success: true,
        order,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


// Update order status
router.put(
  "/update-sales-order-status/:id",
  catchAsyncErrors(async (req, res, next) => {
    const { status } = req.body;
    const { id } = req.params;

    try {
      const order = await SalesOrder.findById(id);
      if (!order) {
        return res.status(404).json({ success: false, message: "Order not found" });
      }

      order.status = status; // Update status field
      await order.save();

      res.status(200).json({
        success: true,
        message: "Order status updated successfully",
        order,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  })
)


//invoice generator

router.post(
  "/update-sales-invoice/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const order = await SalesOrder.findById(req.params.id);
      console.log(order, "order from backend");

      if (!order) {
        return next(new ErrorHandler("Order not found with this ID", 400));
      }

      if (req.body.status === "Success") {
        const base64PDF = await generateInvoicePDF(order);

        order.invoice = base64PDF; // Store the path of the invoice in the order
        await order.save(); // Save the updated order


        res.status(200).json({
          success: true,
          message: "Invoice updated successfully",
          invoice: order.invoice,
        });
      } else {
        res.status(400).json({ success: false, message: "Invalid status update" });
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);



module.exports = router;
