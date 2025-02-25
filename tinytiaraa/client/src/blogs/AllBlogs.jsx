import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { imgdburl, server } from '@/server';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { FaEdit, FaTrash } from 'react-icons/fa';
import swal from 'sweetalert';
import {
  Box,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

function AllBlogs() {
  const [BlogData, setBlogData] = useState({
    title: '',
    desc:'',
    bannerimg: '',
    link: '', // New property
    date:''
  });
  const [Blog, setBlog] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const fileInputRefs = {
    bannerimg: useRef(null),
  };

  const handleOpen = () => {
    setBlogData({ bannerimg: "", date: "", title: "", desc: "", link: "" });
    setIsEditing(false);
    setOpen(true);
  };

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(`${server}/get-allblog`);
      setBlog(data.blog);
    } catch (error) {
      console.error('Error fetching Blog:', error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const { name } = e.target;

    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setBlogData((prev) => ({
            ...prev,
            [name]: reader.result,
          }));
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleRemoveImage = (imageField) => {
    setBlogData((prev) => ({ ...prev, [imageField]: '' }));
    if (fileInputRefs[imageField].current) {
      fileInputRefs[imageField].current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await axios.put(`${server}/update-blog/${editId}`, BlogData);
        swal('Success', 'blog updated successfully!', 'success');
      } else {
        await axios.post(`${server}/create-blog`, BlogData);
        swal('Success', 'blog created successfully!', 'success');
      }
      setBlogData({ title: '', bannerimg: '' , link:"" , desc:"" , date:"" });
      setIsEditing(false);
      setEditId(null);
        setOpen(false);

      fetchBlog();
    } catch (error) {
      console.error('Error submitting blog:', error);
      swal('Error', 'Something went wrong. Please try again.', 'error');
    }
  };

  const handleToggleLive = async (id, isLive) => {
    try {
      await axios.put(`${server}/toogle-blog/${id}`);
  
      setBlog((prev) =>
        prev.map((blog) =>
          blog._id === id ? { ...blog, isLive: !isLive } : blog
        )
      );
    } catch (error) {
      console.error('Error toggling blog live status:', error);
    }
  };


  const handleEdit = (blog) => {
      setIsEditing(true);
      setOpen(true)
      setBlogData({
      title: blog.title,
      bannerimg: blog.bannerimg,
      link: blog.link || '', // Include link
      desc:blog.desc,
      date:blog.date ||""
    });
    setEditId(blog._id);

  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${server}/delete-blog/${id}`);
      setBlog((prev) => prev.filter((blog) => blog._id !== id));
      swal('Deleted!', 'blog deleted successfully.', 'success');
    } catch (error) {
      console.error('Error deleting blog:', error);
      swal('Error', 'Failed to delete blog.', 'error');
    }
  };

  const getBannerImageSrc = (bannerimg) => {
    if (!bannerimg) return '';
    if (typeof bannerimg === 'string' && bannerimg.startsWith('data:image/')) {
      return bannerimg;
    }
    if (bannerimg?.url) {
      return `${imgdburl}${bannerimg.url}`;
    }
    return bannerimg;
  };

   const location = useLocation();
  
      // Get the last segment of the URL (e.g., "dashboard" or "overview")
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const currentPage = pathSegments[pathSegments.length - 1];
    
      // You can map the path segment to a more readable name
      const breadcrumbText = currentPage.charAt(0).toUpperCase() + currentPage.slice(1); // Capitalize first letter
  
      useEffect(() => {
          window.scrollTo(0, 0)
        }, [])
  

  return (
    <div className='bg-[#f9f9f9] w-full flex justify-center !font-poppins'>
  <Box p={4} sx={{ width: "90%", backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
    <h2 className='text-[24px] font-[500]'>Manage Blog</h2>
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

    <Button variant="contained" color="primary" onClick={handleOpen}>
      Add Blog
    </Button>

    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
  <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
    {isEditing ? "Edit Blog" : "Add Blog"}
  </DialogTitle>
  <DialogContent>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 3,
        borderRadius: 3,
        boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.15)",
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#333",
          borderBottom: "2px solid #007bff",
          display: "inline-block",
          pb: 1,
          mb: 2,
        }}
      >
        {isEditing ? "Edit Your Blog" : "Create New Blog"}
      </Typography>

      <TextField
        fullWidth
        label="Blog Title"
        name="title"
        value={BlogData.title}
        onChange={handleChange}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Blog Description"
        name="desc"
        value={BlogData.desc}
        onChange={handleChange}
        variant="outlined"
        multiline
        rows={3}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Blog Link (use '/' before links e.g., /shop)"
        name="link"
        value={BlogData.link}
        onChange={handleChange}
        variant="outlined"
        placeholder="Enter the URL"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Blog Date"
        name="date"
        type="date"
        value={BlogData.date}
        onChange={handleChange}
        variant="outlined"
        sx={{ mb: 2 }}
        InputLabelProps={{ shrink: true }}
      />

      {/* Image Upload */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <input
          type="file"
          name="bannerimg"
          ref={fileInputRefs.bannerimg}
          onChange={handleImageChange}
          accept="image/*"
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
          }}
        />
        {BlogData.bannerimg && (
          <Box
            position="relative"
            width={150}
            height={100}
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={getBannerImageSrc(BlogData.bannerimg)}
              alt="Banner Preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 6,
              }}
            />
            <IconButton
              onClick={() => handleRemoveImage("bannerimg")}
              sx={{
                position: "absolute",
                top: -8,
                right: -8,
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                "&:hover": { backgroundColor: "#d32f2f" },
              }}
            >
              <RxCross2 />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Button Group */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            fontWeight: "bold",
            backgroundColor: "#007bff",
            color: "#fff",
            px: 3,
            py: 1,
            "&:hover": { backgroundColor: "#0056b3" },
          }}
        >
          {isEditing ? "Update Blog" : "Create Blog"}
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setOpen(false)}
          sx={{
            fontWeight: "bold",
            borderColor: "#ccc",
            color: "#333",
            px: 3,
            py: 1,
            "&:hover": { borderColor: "#999", backgroundColor: "#f5f5f5" },
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  </DialogContent>
</Dialog>



    <TableContainer component={Paper} sx={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: 2, mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Title</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Description</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Banner</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Live</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Blog.map((blog) => (
            <TableRow key={blog._id} hover>
              <TableCell sx={{ fontWeight: '500', color: '#222' }}>{blog.title}</TableCell>
              <TableCell sx={{ color: '#555' }}>{blog.desc}</TableCell>
              <TableCell>
                <img src={getBannerImageSrc(blog.bannerimg)} alt="Blog Banner" style={{ width: 60, height: 40, borderRadius: 4, border: '1px solid #ddd' }} />
              </TableCell>
              <TableCell>
                <Switch
                    checked={blog.isLive}
                    onChange={() => handleToggleLive(blog._id, blog.isLive)}
                    color="primary"
                />
                </TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => handleEdit(blog)} sx={{ mr: 1 }}>
                  <FaEdit />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDelete(blog._id)}>
                  <FaTrash />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
</div>

   
  );
}

export default AllBlogs;

