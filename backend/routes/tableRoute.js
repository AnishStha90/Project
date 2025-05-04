const {addTable, getAllTables, getTableById, updateTable, deleteTable, addReservationToTable, removeReservationFromTable } = require('../controller/tableController');
  
  const router = require('express').Router();
  
  // Add a new table
  router.post('/addTable', addTable);
  
  // Get all tables
  router.get('/getAllTables', getAllTables);
  
  // Get a specific table by ID
  router.get('/getTable/:id', getTableById);
  
  // Update table information
  router.put('/updateTable/:id', updateTable);
  
  // Delete a table
  router.delete('/deleteTable/:id', deleteTable);
  
  // Add a reservation to a specific table
  router.put('/addReservation/:tableId', addReservationToTable);
  
  // Remove a reservation from a specific table
  router.put('/removeReservation/:tableId', removeReservationFromTable);
  
  module.exports = router;
  