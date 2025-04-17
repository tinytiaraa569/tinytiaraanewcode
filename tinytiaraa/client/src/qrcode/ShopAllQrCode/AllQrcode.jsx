import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import QRCodeStyling from "qr-code-styling";
import axios from "axios";
import { imgdburl, server } from "@/server";
import logo from "./logo.png";
import { Link, useLocation } from "react-router-dom";
import swal from "sweetalert"; // Import SweetAlert
import QrDataAnalytics from "./QrDataAnalytics";



const qrCodeOptions = {
  width: 150,
  height: 150,
  type: "svg",
  dotsOptions: { color: "#000", type: "rounded" },
  backgroundOptions: { color: "#fff" },
  imageOptions: { crossOrigin: "anonymous", margin: 0, hideBackgroundDots: true, imageSize: 0.5 },
};

const AllQrcode = () => {
  const [categories, setCategories] = useState([]);
  const [qrData, setQrData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [qrCodeId, setQrCodeId] = useState(null); // Store the QR Code ID for updating
  const [redirectUrl, setRedirectUrl] = useState("");
  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${server}/get-allcategories`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchQrCodes = async () => {
      try {
        const response = await axios.get(`${server}/get-all-qrcodes`);
        setQrData(response.data);
      } catch (error) {
        console.error("Error fetching QR codes:", error);
      }
    };

    fetchCategories();
    fetchQrCodes();
  }, []);


  const generateQRCodeImage = async (categoryId, qrUrl) => {
    const fullUrl = `https://www.tinytiaraa.com/qrcode/${categoryId}`;
    
    const qrCode = new QRCodeStyling({ ...qrCodeOptions, data: qrUrl, image: logo });
    return await qrCode.getRawData("svg");
  };


  const handleSaveOrUpdateQRCode = async () => {
    if (!selectedCategory || !redirectUrl) return;
  
    const fullUrl = `https://www.tinytiaraa.com/qrcode/${selectedCategory}`;
    setQrUrl(fullUrl);
  
    const svgBlob = await generateQRCodeImage(selectedCategory, qrUrl);
    const reader = new FileReader();
    reader.readAsDataURL(svgBlob);
    reader.onloadend = async () => {
      const qrBase64 = reader.result;
  
      try {
        if (editMode) {
          await axios.put(`${server}/update-qrcode/${qrCodeId}`, {
            categoryId: editingCategoryId,
            url: fullUrl,
            redirectUrl, // Save the user-provided redirect URL
          });
  
          setQrData((prevData) =>
            prevData.map((item) =>
              item.categoryId._id === editingCategoryId
                ? { ...item, url: fullUrl, redirectUrl, qrImage: { url: qrBase64 } }
                : item
            )
          );
        } else {
          await axios.post(`${server}/save-qrcode`, {
            categoryId: selectedCategory,
            url: fullUrl,
            redirectUrl, // Save user input redirect URL
            qrImageBase64: qrBase64,
          });
  
          setQrData([
            ...qrData,
            {
              categoryId: {
                _id: selectedCategory,
                title: categories.find((c) => c._id === selectedCategory)?.title,
              },
              url: fullUrl,
              redirectUrl, // Store user-provided redirect URL
              qrImage: { url: qrBase64 },
            },
          ]);
        }
      } catch (error) {
        console.error("Error saving QR code:", error);
      }
    };
  
    setOpenDialog(false);
    setEditMode(false);
  };


 
  const handleEditQRCode = (categoryId, id, existingRedirectUrl) => {
    const fullUrl = `https://www.tinytiaraa.com/qrcode/${categoryId}`;
  
    setSelectedCategory(categoryId);
    setQrCodeId(id);
    setQrUrl(fullUrl);
    setRedirectUrl(existingRedirectUrl || ""); // Pre-fill redirect URL field
    setEditingCategoryId(categoryId);
    setEditMode(true);
    setOpenDialog(true);
  };
  


  // const downloadQRCode = async (categoryId ,categoryName) => {
  //   const qrItem = qrData.find(item => item.categoryId._id === categoryId);
  //   if (!qrItem || !qrItem.qrImage?.url) return;
  
  //   const response = await fetch(qrItem.qrImage.url);
  //   const blob = await response.blob();
  
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = `qrcode-${categoryName.replace(/\s+/g, "_")}.svg`;
  
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

    const downloadQRCode = async (categoryId, categoryName) => {
      const qrItem = qrData.find(item => item.categoryId._id === categoryId);
      if (!qrItem || !qrItem.qrImage?.url) {
          console.error("Error: QR code URL not found");
          return;
      }

      const imageUrl = `${imgdburl}${qrItem.qrImage.url}`; // Ensure a full URL
      console.log("Downloading from:", imageUrl); // Debugging

      try {
          const response = await fetch(imageUrl);
          if (!response.ok) {
              console.error("Error fetching QR code:", response.statusText);
              return;
          }

          const blob = await response.blob();
          const fileName = `qrcode-${categoryName.replace(/\s+/g, "_")}.svg`;

          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = fileName;

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      } catch (error) {
          console.error("Error downloading QR code:", error);
      }
  };


      const location = useLocation();
  
      // Get the last segment of the URL (e.g., "dashboard" or "overview")
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const currentPage = pathSegments[pathSegments.length - 1];
    
      // You can map the path segment to a more readable name
      const breadcrumbText = currentPage.charAt(0).toUpperCase() + currentPage.slice(1); // Capitalize first letter



const deleteQRCode = async (qrId) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you won't be able to recover this QR code!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then(async (willDelete) => {
    if (willDelete) {
      try {
        const response = await fetch(`${server}/delete-qrcode/${qrId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to delete QR code");

        swal("Deleted!", "Your QR code has been deleted.", "success");

        // Remove from state (Assuming you're using React state)
        setQrData(qrData.filter((qr) => qr._id !== qrId));

      } catch (error) {
        console.error("Error deleting QR code:", error);
        swal("Error!", "Failed to delete QR code.", "error");
      }
    }
  });
};

  
  return (
    <div className="bg-[#f9f9f9] w-full flex justify-center !font-poppins">

   
    <Box p={4} bgcolor="#f9f9f9">
    
       <h2 className='text-[24px] font-[500]'>Manage QrCodes</h2>
          <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4 mt-1">
            <ol className="flex space-x-2">
              <li>
                <Link to={"/dashboard"} className="hover:text-blue-500">Home</Link>
              </li>
              <li>&gt;</li> 
              <li>
                <span className="text-gray-400">{breadcrumbText}</span>
              </li>
            </ol>
          </nav>

      <Button variant="contained" color="primary" onClick={() => {
        setEditMode(false);
        setSelectedCategory("");
        setRedirectUrl("");
        setOpenDialog(true);
      }}>
        Add QR Code
      </Button>


     
     


      {/* Add/Edit QR Code Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{editMode ? "Edit QR Code" : "Add QR Code"}</DialogTitle>
        <DialogContent>
          <Select
            fullWidth
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            displayEmpty
            sx={{ mt: 2 }}
            disabled={editMode}
          >
            <MenuItem value="" disabled>Select Category</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category._id} value={category._id} disabled={qrData.some(qr => qr.categoryId._id === category._id)}>
                {category.title}
              </MenuItem>
            ))}
          </Select>

          {/* Redirect URL Input */}
    <TextField
      fullWidth
      label="Redirect URL"
      variant="outlined"
      size="small"
      value={redirectUrl}
      onChange={(e) => setRedirectUrl(e.target.value)}
      sx={{ mt: 2 }}
    />
           <TextField
            fullWidth
            label="QR Code URL (Auto-Generated)"
            variant="outlined"
            size="small"
            value={qrUrl}
            disabled
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSaveOrUpdateQRCode}>
            {editMode ? "Update QR Code" : "Generate QR Code"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* QR Code Table */}
      <TableContainer component={Paper} sx={{ mt: 5, p: 2, borderRadius: "8px", boxShadow: 2 }}>
        <Typography variant="h5" mb={2} fontWeight={600} textAlign="center">
          QR Code Records
        </Typography>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Category</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>QR Code</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>QR redirect URL</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {qrData.map((qr) => (
              <TableRow key={qr.categoryId._id}>
                <TableCell>{qr.categoryId.title}</TableCell>
                <TableCell><img src={`${imgdburl}${qr.qrImage?.url}`} alt="QR Code" width={100} /></TableCell>
                <TableCell>{qr.redirectUrl}</TableCell> 
                <TableCell>
                  <Button variant="contained" color="secondary" size="small" onClick={() => downloadQRCode(qr.categoryId._id,qr.categoryId.title)}>Download</Button>
                  <Button variant="contained" color="primary" size="small" sx={{ ml: 1 }} onClick={() => handleEditQRCode(qr.categoryId._id,qr._id, qr.redirectUrl)}>Edit</Button>
                  <Button 
                  variant="contained" 
                  color="error" 
                  size="small" 
                  sx={{ ml: 1 }} 
                  onClick={() => deleteQRCode(qr._id)}
                >
                  Delete
                </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="my-8 shadow-lg ">

      <QrDataAnalytics />
      </div>
    
    </Box>


    
    </div>
  );
};

export default AllQrcode;
