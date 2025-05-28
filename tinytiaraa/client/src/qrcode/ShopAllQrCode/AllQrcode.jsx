"use client"

import { useEffect, useState } from "react"
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
  FormControl,
  InputLabel,
  Tabs,
  Tab,
} from "@mui/material"
import QRCodeStyling from "qr-code-styling"
import axios from "axios"
import { imgdburl, server } from "@/server"
import logo from "./logo.png"
import { Link, useLocation } from "react-router-dom"
import swal from "sweetalert"
import QrDataAnalytics from "./QrDataAnalytics"

const qrCodeOptions = {
  width: 150,
  height: 150,
  type: "svg",
  dotsOptions: { color: "#000", type: "rounded" },
  backgroundOptions: { color: "#fff" },
  imageOptions: { crossOrigin: "anonymous", margin: 0, hideBackgroundDots: true, imageSize: 0.5 },
}

const AllQrcode = () => {
  const [categories, setCategories] = useState([])
  const [qrData, setQrData] = useState([])
  const [subQrData, setSubQrData] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState("")
  const [qrUrl, setQrUrl] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [editingCategoryId, setEditingCategoryId] = useState(null)
  const [editingSubcategoryId, setEditingSubcategoryId] = useState(null)
  const [qrCodeId, setQrCodeId] = useState(null)
  const [redirectUrl, setRedirectUrl] = useState("")
  const [qrType, setQrType] = useState("category") // "category" or "subcategory"
  const [tabValue, setTabValue] = useState(0)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${server}/get-allcategories`)
        setCategories(response.data.categories)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }

    const fetchQrCodes = async () => {
      try {
        const response = await axios.get(`${server}/get-all-qrcodes`)
        setQrData(response.data)
      } catch (error) {
        console.error("Error fetching QR codes:", error)
      }
    }

    const fetchSubQrCodes = async () => {
      try {
        const response = await axios.get(`${server}/get-all-subcategory-qrcodes`)
        setSubQrData(response.data)
      } catch (error) {
        console.error("Error fetching subcategory QR codes:", error)
      }
    }

    fetchCategories()
    fetchQrCodes()
    fetchSubQrCodes()
  }, [])

  const generateQRCodeImage = async (id, qrUrl) => {
    const qrCode = new QRCodeStyling({ ...qrCodeOptions, data: qrUrl, image: logo })
    return await qrCode.getRawData("svg")
  }

  const handleSaveOrUpdateQRCode = async () => {
    if (qrType === "category" && !selectedCategory) return
    if (qrType === "subcategory" && (!selectedCategory || !selectedSubcategory)) return
    if (!redirectUrl) return

    let fullUrl
    let id

    if (qrType === "category") {
      id = selectedCategory
      fullUrl = `https://www.tinytiaraa.com/qrcode/${selectedCategory}`
    } else {
      id = selectedSubcategory
      fullUrl = `https://www.tinytiaraa.com/qrcode/sub/${selectedSubcategory}`
    }

    setQrUrl(fullUrl)

    const svgBlob = await generateQRCodeImage(id, fullUrl)
    const reader = new FileReader()
    reader.readAsDataURL(svgBlob)
    reader.onloadend = async () => {
      const qrBase64 = reader.result

      try {
        if (editMode) {
          if (qrType === "category") {
            await axios.put(`${server}/update-qrcode/${qrCodeId}`, {
              categoryId: editingCategoryId,
              url: fullUrl,
              redirectUrl,
            })

            setQrData((prevData) =>
              prevData.map((item) =>
                item.categoryId._id === editingCategoryId
                  ? { ...item, url: fullUrl, redirectUrl, qrImage: { url: qrBase64 } }
                  : item,
              ),
            )
          } else {
            await axios.put(`${server}/update-subcategory-qrcode/${qrCodeId}`, {
              subcategoryId: editingSubcategoryId,
              categoryId: selectedCategory,
              url: fullUrl,
              redirectUrl,
            })

            setSubQrData((prevData) =>
              prevData.map((item) =>
                item.subcategoryId._id === editingSubcategoryId
                  ? { ...item, url: fullUrl, redirectUrl, qrImage: { url: qrBase64 } }
                  : item,
              ),
            )
          }
        } else {
          if (qrType === "category") {
            await axios.post(`${server}/save-qrcode`, {
              categoryId: selectedCategory,
              url: fullUrl,
              redirectUrl,
              qrImageBase64: qrBase64,
            })

            setQrData([
              ...qrData,
              {
                categoryId: {
                  _id: selectedCategory,
                  title: categories.find((c) => c._id === selectedCategory)?.title,
                },
                url: fullUrl,
                redirectUrl,
                qrImage: { url: qrBase64 },
              },
            ])
          } else {
            const category = categories.find((c) => c._id === selectedCategory)
            const subcategory = category?.subcategories.find((s) => s._id === selectedSubcategory)

            await axios.post(`${server}/save-subcategory-qrcode`, {
              categoryId: selectedCategory,
              subcategoryId: selectedSubcategory,
              url: fullUrl,
              redirectUrl,
              qrImageBase64: qrBase64,
            })

            setSubQrData([
              ...subQrData,
              {
                categoryId: {
                  _id: selectedCategory,
                  title: category?.title,
                },
                subcategoryId: {
                  _id: selectedSubcategory,
                  name: subcategory?.name,
                },
                url: fullUrl,
                redirectUrl,
                qrImage: { url: qrBase64 },
              },
            ])
          }
        }
      } catch (error) {
        console.error("Error saving QR code:", error)
      }
    }

    setOpenDialog(false)
    setEditMode(false)
  }

  const handleEditQRCode = (categoryId, id, existingRedirectUrl) => {
    const fullUrl = `https://www.tinytiaraa.com/qrcode/${categoryId}`

    setQrType("category")
    setSelectedCategory(categoryId)
    setQrCodeId(id)
    setQrUrl(fullUrl)
    setRedirectUrl(existingRedirectUrl || "")
    setEditingCategoryId(categoryId)
    setEditMode(true)
    setOpenDialog(true)
  }

  const handleEditSubQRCode = (categoryId, subcategoryId, id, existingRedirectUrl) => {
    const fullUrl = `https://www.tinytiaraa.com/qrcode/sub/${subcategoryId}`

    setQrType("subcategory")
    setSelectedCategory(categoryId)
    setSelectedSubcategory(subcategoryId)
    setQrCodeId(id)
    setQrUrl(fullUrl)
    setRedirectUrl(existingRedirectUrl || "")
    setEditingCategoryId(categoryId)
    setEditingSubcategoryId(subcategoryId)
    setEditMode(true)
    setOpenDialog(true)
  }

  const downloadQRCode = async (id, name, isSubcategory = false) => {
    const dataArray = isSubcategory ? subQrData : qrData
    const idField = isSubcategory ? "subcategoryId" : "categoryId"

    const qrItem = dataArray.find((item) => item[idField]._id === id)
    if (!qrItem || !qrItem.qrImage?.url) {
      console.error("Error: QR code URL not found")
      return
    }

    const imageUrl = `${imgdburl}${qrItem.qrImage.url}`
    console.log("Downloading from:", imageUrl)

    try {
      const response = await fetch(imageUrl)
      if (!response.ok) {
        console.error("Error fetching QR code:", response.statusText)
        return
      }

      const blob = await response.blob()
      const fileName = `qrcode-${name.replace(/\s+/g, "_")}.svg`

      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = fileName

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error downloading QR code:", error)
    }
  }

  const location = useLocation()
  const pathSegments = location.pathname.split("/").filter(Boolean)
  const currentPage = pathSegments[pathSegments.length - 1]
  const breadcrumbText = currentPage.charAt(0).toUpperCase() + currentPage.slice(1)

  const deleteQRCode = async (qrId, isSubcategory = false) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you won't be able to recover this QR code!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const endpoint = isSubcategory
            ? `${server}/delete-subcategory-qrcode/${qrId}`
            : `${server}/delete-qrcode/${qrId}`

          const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })

          if (!response.ok) throw new Error("Failed to delete QR code")

          swal("Deleted!", "Your QR code has been deleted.", "success")

          if (isSubcategory) {
            setSubQrData(subQrData.filter((qr) => qr._id !== qrId))
          } else {
            setQrData(qrData.filter((qr) => qr._id !== qrId))
          }
        } catch (error) {
          console.error("Error deleting QR code:", error)
          swal("Error!", "Failed to delete QR code.", "error")
        }
      }
    })
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleAddQRCode = () => {
    setEditMode(false)
    setSelectedCategory("")
    setSelectedSubcategory("")
    setRedirectUrl("")
    setQrType(tabValue === 0 ? "category" : "subcategory")
    setOpenDialog(true)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
    setSelectedSubcategory("")
  }

  console.log(subQrData,"subQrDatasubQrData")
  return (
    <div className="bg-[#f9f9f9] w-full flex justify-center !font-poppins">
      <Box p={4} bgcolor="#f9f9f9" width="100%">
        <h2 className="text-[24px] font-[500]">Manage QrCodes</h2>
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4 mt-1">
          <ol className="flex space-x-2">
            <li>
              <Link to={"/dashboard"} className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>&gt;</li>
            <li>
              <span className="text-gray-400">{breadcrumbText}</span>
            </li>
          </ol>
        </nav>

        <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 2 }}>
          <Tab label="Category QR Codes" />
          <Tab label="Subcategory QR Codes" />
        </Tabs>

        <Button variant="contained" color="primary" onClick={handleAddQRCode}>
          Add {tabValue === 0 ? "Category" : "Subcategory"} QR Code
        </Button>

        {/* Add/Edit QR Code Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>
            {editMode ? "Edit" : "Add"} {qrType === "category" ? "Category" : "Subcategory"} QR Code
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Select Category</InputLabel>
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                label="Select Category"
                disabled={editMode}
              >
                <MenuItem value="" disabled>
                  Select Category
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem
                    key={category._id}
                    value={category._id}
                    disabled={
                      qrType === "category" && qrData.some((qr) => qr.categoryId._id === category._id) && !editMode
                    }
                  >
                    {category.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {qrType === "subcategory" && (
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Select Subcategory</InputLabel>
                <Select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  label="Select Subcategory"
                  disabled={!selectedCategory || editMode}
                >
                  <MenuItem value="" disabled>
                    Select Subcategory
                  </MenuItem>
                  {selectedCategory &&
                    categories
                      .find((cat) => cat._id === selectedCategory)
                      ?.subcategories.map((subcat) => (
                        <MenuItem
                          key={subcat._id}
                          value={subcat._id}
                          disabled={subQrData.some((qr) => qr.subcategoryId._id === subcat._id) && !editMode}
                        >
                          {subcat.name}
                        </MenuItem>
                      ))}
                </Select>
              </FormControl>
            )}

            <TextField
              fullWidth
              label="Redirect URL"
              variant="outlined"
              value={redirectUrl}
              onChange={(e) => setRedirectUrl(e.target.value)}
              sx={{ mt: 2 }}
            />

            <TextField
              fullWidth
              label="QR Code URL (Auto-Generated)"
              variant="outlined"
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

        {/* QR Code Tables */}
        {tabValue === 0 ? (
          <TableContainer component={Paper} sx={{ mt: 5, p: 2, borderRadius: "8px", boxShadow: 2 }}>
            <Typography variant="h5" mb={2} fontWeight={600} textAlign="center">
              Category QR Code Records
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
                    <TableCell>
                      <img src={`${imgdburl}${qr.qrImage?.url}`} alt="QR Code" width={100} />
                    </TableCell>
                    <TableCell>{qr.redirectUrl}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => downloadQRCode(qr.categoryId._id, qr.categoryId.title)}
                      >
                        Download
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ ml: 1 }}
                        onClick={() => handleEditQRCode(qr.categoryId._id, qr._id, qr.redirectUrl)}
                      >
                        Edit
                      </Button>
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
        ) : (
          <TableContainer component={Paper} sx={{ mt: 5, p: 2, borderRadius: "8px", boxShadow: 2 }}>
            <Typography variant="h5" mb={2} fontWeight={600} textAlign="center">
              Subcategory QR Code Records
            </Typography>
            <Table>
              <TableHead sx={{ backgroundColor: "#1976d2" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Category</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Subcategory</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>QR Code</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>QR redirect URL</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subQrData.map((qr,subi) => (
                  <TableRow key={subi}>
                    <TableCell>{qr.categoryId.title}</TableCell>
                    <TableCell>{qr?.subcategoryName}</TableCell>
                    <TableCell>
                      <img src={`${imgdburl}${qr.qrImage?.url}`} alt="QR Code" width={100} />
                    </TableCell>
                    <TableCell>{qr.redirectUrl}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => downloadQRCode(qr?.subcategoryId, qr.subcategoryName, true)}
                      >
                        Download
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ ml: 1 }}
                        onClick={() =>
                          handleEditSubQRCode(qr.categoryId._id, qr.subcategoryId, qr._id, qr.redirectUrl)
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        sx={{ ml: 1 }}
                        onClick={() => deleteQRCode(qr._id, true)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <div className="my-8 shadow-lg">
          <QrDataAnalytics />
        </div>
      </Box>
    </div>
  )
}

export default AllQrcode
