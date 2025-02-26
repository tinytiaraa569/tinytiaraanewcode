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

  // const generateQRCodeImage = async (url) => {
  //   const qrCode = new QRCodeStyling({ ...qrCodeOptions, data: url, image: logo });
  //   return await qrCode.getRawData("svg");
  // };

  const generateQRCodeImage = async (categoryId, qrUrl) => {
    const fullUrl = `https://tiny-tiaraanew.vercel.app/qrcode/${categoryId}`;
    
    const qrCode = new QRCodeStyling({ ...qrCodeOptions, data: qrUrl, image: logo });
    return await qrCode.getRawData("svg");
  };

  // const handleSaveOrUpdateQRCode = async () => {
  //   if (!selectedCategory || !qrUrl) return;

  //   const svgBlob = await generateQRCodeImage(qrUrl);
  //   const reader = new FileReader();
  //   reader.readAsDataURL(svgBlob);
  //   reader.onloadend = async () => {
  //     const qrBase64 = reader.result;

  //     try {
  //       if (editMode) {
  //         // Update existing QR Code
  //         await axios.put(`${server}/update-qrcode/${qrCodeId}`, {
  //           categoryId: editingCategoryId,
  //           url: qrUrl,
  //         });

  //         setQrData((prevData) =>
  //           prevData.map((item) =>
  //             item.categoryId._id === editingCategoryId ? { ...item, url: qrUrl, qrImage: { url: qrBase64 } } : item
  //           )
  //         );
  //       } else {
  //         // Save new QR Code
  //         await axios.post(`${server}/save-qrcode`, {
  //           categoryId: selectedCategory,
  //           url: qrUrl,
  //           qrImageBase64: qrBase64,
  //         });

  //         setQrData([...qrData, { categoryId: { _id: selectedCategory, title: categories.find(c => c._id === selectedCategory)?.title }, url: qrUrl, qrImage: { url: qrBase64 } }]);
  //       }
  //     } catch (error) {
  //       console.error("Error saving QR code:", error);
  //     }
  //   };

  //   setOpenDialog(false);
  //   setEditMode(false);
  // };


  const handleSaveOrUpdateQRCode = async () => {
    if (!selectedCategory || !redirectUrl) return;
  
    const fullUrl = `https://tiny-tiaraanew.vercel.app/qrcode/${selectedCategory}`;
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


  // const handleEditQRCode = (categoryId, id, url) => {
  //   setSelectedCategory(categoryId);
  //   setQrCodeId(id);
  //   setQrUrl(url);
  //   setEditingCategoryId(categoryId);
  //   setEditMode(true);
  //   setOpenDialog(true);
  // };

  const handleEditQRCode = (categoryId, id, existingRedirectUrl) => {
    const fullUrl = `https://tiny-tiaraanew.vercel.app/qrcode/${categoryId}`;
  
    setSelectedCategory(categoryId);
    setQrCodeId(id);
    setQrUrl(fullUrl);
    setRedirectUrl(existingRedirectUrl || ""); // Pre-fill redirect URL field
    setEditingCategoryId(categoryId);
    setEditMode(true);
    setOpenDialog(true);
  };
  

  // const downloadQRCode = async (categoryId) => {
  //   const qrItem = qrData.find(item => item.categoryId._id === categoryId);
  //   if (!qrItem || !qrItem.qrImage?.url) return;

  //   const response = await fetch(qrItem.qrImage.url);
  //   const blob = await response.blob();

  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = `qrcode-${categoryId}.svg`;

  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };


  const downloadQRCode = async (categoryId) => {
    const qrItem = qrData.find(item => item.categoryId._id === categoryId);
    if (!qrItem || !qrItem.qrImage?.url) return;
  
    const response = await fetch(qrItem.qrImage.url);
    const blob = await response.blob();
  
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `qrcode-${categoryId}.svg`;
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <Box p={4} bgcolor="#f9f9f9">
      <Typography variant="h4" mb={3} fontWeight={600} textAlign="center">
        QR Code Management
      </Typography>

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
                  <Button variant="contained" color="secondary" size="small" onClick={() => downloadQRCode(qr.categoryId._id)}>Download</Button>
                  <Button variant="contained" color="primary" size="small" sx={{ ml: 1 }} onClick={() => handleEditQRCode(qr.categoryId._id,qr._id, qr.redirectUrl)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllQrcode;
