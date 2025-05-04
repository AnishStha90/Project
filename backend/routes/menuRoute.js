const {addMenuItem, getAllMenuItems, getMenuItemDetail, getMenuItemsByCategory, updateMenuItem, deleteMenuItem, getFilteredMenuItems} = require('../controller/menuController');
  const upload = require('../middleware/fileUplode'); // Adj
  // ust path as needed
  
  const router = require('express').Router();
  
  // Add menu item (with image upload)
  router.post('/addMenuItem', upload.single('item_image'), addMenuItem);
  
  // Get all menu items
  router.get('/getAllMenuItems', getAllMenuItems);
  
  // Get menu item by ID
  router.get('/getMenuItemDetail/:id', getMenuItemDetail);
  
  // Get menu items by category
  router.get('/getMenuItemsByCategory/:categoryId', getMenuItemsByCategory);
  
  // Update menu item (with optional new image)
  router.put('/updateMenuItem/:id', upload.single('item_image'), updateMenuItem);
  
  // Delete menu item
  router.delete('/deleteMenuItem/:id', deleteMenuItem);
  
  // Get filtered menu items
  router.post('/getFilteredMenuItems', getFilteredMenuItems);
  
  module.exports = router;
  