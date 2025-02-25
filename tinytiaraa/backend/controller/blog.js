const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const ErrorHandler = require('../utils/Errorhandler');
const crypto = require('crypto');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Blog = require('../model/blog');

// Function to generate a random string for public_id
const generateRandomString = (length) => {
    return crypto.randomBytes(length).toString('hex').slice(0, length);
};

router.post('/create-blog', catchAsyncErrors(async (req, res, next) => {
    const { title, bannerimg , desc ,date,link} = req.body;

    // Check if title is provided
    if (!title) {
        return next(new ErrorHandler('Title is required', 400));
    }
    
    // Helper function to process base64 images
    const processBase64Image = (imagePath) => {
        if (typeof imagePath === "string" && imagePath.startsWith("data:")) {
            const matches = imagePath.match(/^data:(.+);base64,(.+)$/);
            if (!matches) {
                console.error('Invalid base64 format:', imagePath);
                return null;
            }
            const mimeType = matches[1];
            const base64Data = matches[2];
            const extension = mimeType.split('/')[1];
            const uniqueId = generateRandomString(20);
            const localImagePath = path.join(__dirname, '../uploads/images/popup', `${uniqueId}.${extension}`);

            fs.writeFileSync(localImagePath, Buffer.from(base64Data, 'base64'));
            return {
                public_id: `categories/${uniqueId}`,
                url: `/uploads/images/popup/${uniqueId}.${extension}`
            };
        } else {
            return { url: imagePath };
        }
    };

    // Process the images if provided
    const processedBannerImg = bannerimg ? processBase64Image(bannerimg.url || bannerimg.path || bannerimg) : null;
  
    // Fetch the current categories to determine the next order value
  

    // Create a new category
    const blog = new Blog({
        title,
        bannerimg: processedBannerImg || {},
        link,
        desc,
        date
    });

    await blog.save();

    res.status(201).json({
        success: true,
        message: 'blog created successfully',
        blog
    });
}));

router.get('/get-allblog', catchAsyncErrors(async (req, res, next) => {
    try {
        // Fetch all categories from the database
        const blog = await Blog.find();

        // Respond with the categories data
        res.status(200).json({
            success: true,
            blog
        });
    } catch (error) {
        // Log the error and pass it to the next middleware for error handling
        console.error('Error fetching categories:', error);
        return next(new ErrorHandler('Internal server error', 500));
    }
}));

router.get('/get-blog/:blogId', catchAsyncErrors(async (req, res, next) => {
  const { blogId } = req.params;

  try {
      // Find the blog by its ID
      const blog = await Blog.findById(blogId);

      if (!blog) {
          return res.status(404).json({ message: 'Blog not found' });
      }

      // Respond with the blog data
      res.status(200).json({
          success: true,
          blog
      });
  } catch (error) {
      // Handle errors and pass them to the error handler
      console.error('Error fetching blog:', error);
      return next(new ErrorHandler('Internal server error', 500));
  }
}));



  router.put('/update-blog/:blogId', catchAsyncErrors(async (req, res, next) => {
    const { blogId } = req.params;
    const { title, bannerimg ,link , desc ,date } = req.body; // Include `order` in the request body

  
    try {
      // Find the category by its ID
      const blog = await Blog.findById(blogId);
  
      if (!blog) {
        return res.status(404).json({ message: 'blog not found' });
      }
  
    
  
      // Helper function to process base64 images, if needed
      const processBase64Image = (imagePath) => {
        if (typeof imagePath === "string" && imagePath.startsWith("data:")) {
          const matches = imagePath.match(/^data:(.+);base64,(.+)$/);
          if (!matches) {
            console.error('Invalid base64 format:', imagePath);
            return null;
          }
          const mimeType = matches[1];
          const base64Data = matches[2];
          const extension = mimeType.split('/')[1];
          const uniqueId = generateRandomString(20);
          const localImagePath = path.join(__dirname, '../uploads/images/popup', `${uniqueId}.${extension}`);
  
          fs.writeFileSync(localImagePath, Buffer.from(base64Data, 'base64'));
          return {
            public_id: `popup/${uniqueId}`,
            url: `/uploads/images/popup/${uniqueId}.${extension}`
          };
        } else {
          return { url: imagePath };
        }
      };
  
      // Process and update images if provided
      if (bannerimg) {
        blog.bannerimg = processBase64Image(bannerimg.url || bannerimg.path || bannerimg) || blog.bannerimg;
      }

      // If title is provided, update the title
      if (title) {
        blog.title = title;
      }

      if(link){
        blog.link= link
      }

      if(desc){
        blog.desc = desc
      }

      if(date){
        blog.date = date
      }
      
  
      // Save the updated blog
      await blog.save();

  
      res.status(200).json({
        success: true,
        message: 'popup updated successfully',
        blog
      });
    } catch (error) {
      console.error('Error updating category:', error);
      return next(new ErrorHandler('Internal server error', 500));
    }
  }));

  router.put('/toogle-blog/:blogId', catchAsyncErrors(async (req, res, next) => {
    const { blogId } = req.params;
  
    try {
      // Find the blog by ID
      const blog = await Blog.findById(blogId);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      // Toggle the live status (allow multiple to be live)
      blog.isLive = !blog.isLive;
      await blog.save();
  
      res.status(200).json({ message: 'Blog live status updated', blog });
    } catch (error) {
      console.error('Error toggling live status:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }));
  


router.delete('/delete-blog/:blogId', catchAsyncErrors(async (req, res, next) => {
  const { blogId } = req.params;  // Get popup ID from request params

  try {
    // Find the popup by ID and delete it
    const blog = await Blog.findByIdAndDelete(blogId);
    if (!blog) {
      return res.status(404).json({ message: 'blog not found' });
    }

    res.status(200).json({ message: 'blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Server error' });
  }
}));
  

module.exports = router;
