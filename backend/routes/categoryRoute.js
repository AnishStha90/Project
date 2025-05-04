const {addCategory, getAllCategories, getCategoryDetails, updateCategory, deleteCategory } = require('../controller/categoryController');
  
  const router = require('express').Router();
  
  // Add a new category
  router.post('/addCategory', addCategory);
  
  // Get all categories
  router.get('/getAllCategories', getAllCategories);
  
  // Get category details by ID
  router.get('/getCategory/:id', getCategoryDetails);
  
  // Update category by ID
  router.put('/updateCategory/:id', updateCategory);
  
  // Delete category by ID
  router.delete('/deleteCategory/:id', deleteCategory);
  
  module.exports = router;
  