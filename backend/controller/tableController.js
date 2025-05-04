const Table = require('../models/tableModel');

// Create a new table
exports.addTable = async (req, res) => {
    try {
        const { number, capacity, location } = req.body;

        // Check if all necessary fields are provided
        if (!number || !capacity || !location) {
            return res.status(400).json({ error: 'All fields (number, capacity, location) are required' });
        }

        // Check if a table with this number already exists
        const existingTable = await Table.findOne({ number });
        if (existingTable) {
            return res.status(400).json({ error: 'Table number already exists' });
        }

        // Create and save the new table
        const table = new Table({ number, capacity, location });
        const savedTable = await table.save();
        res.status(201).json(savedTable);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all tables (optionally populate reservations)
exports.getAllTables = async (req, res) => {
    try {
        const tables = await Table.find().populate('reservations');
        res.json(tables);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a table by ID
exports.getTableById = async (req, res) => {
    try {
        const table = await Table.findById(req.params.id).populate('reservations');
        if (!table) return res.status(404).json({ error: 'Table not found' });
        res.json(table);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update table info by ID
exports.updateTable = async (req, res) => {
    try {
        const { location, number, capacity } = req.body;

        if (!location || !number || !capacity) {
            return res.status(400).json({ error: 'All fields (number, capacity, location) are required' });
        }

        // Find and update the table by ID
        const updatedTable = await Table.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTable) return res.status(404).json({ error: 'Table not found' });
        res.json(updatedTable);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a table by ID
exports.deleteTable = async (req, res) => {
    try {
        const deletedTable = await Table.findByIdAndDelete(req.params.id);
        if (!deletedTable) return res.status(404).json({ error: 'Table not found' });
        res.json({ message: 'Table deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a reservation to a table
exports.addReservationToTable = async (req, res) => {
    try {
        const table = await Table.findById(req.params.id);
        if (!table) return res.status(404).json({ error: 'Table not found' });

        // Ensure reservationId is provided
        if (!req.body.reservationId) {
            return res.status(400).json({ error: 'Reservation ID is required' });
        }

        // Add reservationId to the table's reservations array
        table.reservations.push(req.body.reservationId);
        await table.save();

        res.json({ message: 'Reservation added to table', table });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Remove a reservation from a table
exports.removeReservationFromTable = async (req, res) => {
    try {
        const table = await Table.findById(req.params.id);
        if (!table) return res.status(404).json({ error: 'Table not found' });

        // Ensure reservationId is provided
        if (!req.body.reservationId) {
            return res.status(400).json({ error: 'Reservation ID is required' });
        }

        // Remove reservationId from the table's reservations array
        table.reservations.pull(req.body.reservationId);
        await table.save();

        res.json({ message: 'Reservation removed from table', table });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
