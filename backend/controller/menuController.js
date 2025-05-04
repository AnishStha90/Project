// Import necessary modules
const MenuModel = require('../models/MenuModel'); // Assuming MenuModel is in the 'models' folder
const fs = require('fs'); // File system module to delete images
const mongoose = require('mongoose');

// Add menu item
exports.addMenuItem = async (req, res) => {
    console.log("Request Body:", req.body); // Log the request body to see the actual payload

    if (!req.body.item_description) {
        return res.status(400).json({ error: "Item description is required" });
    }

    let menuItem = new MenuModel({
        item_name: req.body.item_name,
        item_price: req.body.item_price,
        item_description: req.body.item_description,
        item_image: req.file?.path, // Only includes path if a file is uploaded
        category: req.body.category
    });

    try {
        menuItem = await menuItem.save();
        res.status(201).send(menuItem); // Successfully created
    } catch (error) {
        res.status(400).json({ error: "Something went wrong", details: error.message });
    }
};

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
    try {
        const items = await MenuModel.find().populate('category');
        if (!items || items.length === 0) {
            return res.status(404).json({ error: "No menu items found" });
        }
        res.status(200).send(items);
    } catch (error) {
        res.status(500).json({ error: "Error fetching menu items", details: error.message });
    }
};

// Get menu item detail by ID
exports.getMenuItemDetail = async (req, res) => {
    try {
        const item = await MenuModel.findById(req.params.id).populate('category');
        if (!item) {
            return res.status(404).json({ error: "Menu item not found" });
        }
        res.status(200).send(item);
    } catch (error) {
        res.status(500).json({ error: "Error fetching item details", details: error.message });
    }
};

// Get menu items by category
exports.getMenuItemsByCategory = async (req, res) => {
    try {
        const items = await MenuModel.find({ category: req.params.categoryId });
        if (!items || items.length === 0) {
            return res.status(404).json({ error: "No items found for this category" });
        }
        res.status(200).send(items);
    } catch (error) {
        res.status(500).json({ error: "Error fetching menu items by category", details: error.message });
    }
};

// Update menu item
exports.updateMenuItem = async (req, res) => {
    try {
        let itemToUpdate = await MenuModel.findById(req.params.id);
        if (!itemToUpdate) {
            return res.status(404).json({ error: "Menu item not found" });
        }

        // Handle file update (delete old image if necessary)
        if (req.file) {
            if (fs.existsSync(itemToUpdate.item_image)) {
                fs.unlinkSync(itemToUpdate.item_image); // Remove old image
            }
            itemToUpdate.item_image = req.file.path; // Update with new image
        }

        // Update fields
        let { item_name, item_description, item_price, category, rating } = req.body;

        if (item_description && item_description.length < 20) {
            return res.status(400).json({ error: "Item description must be at least 20 characters" });
        }

        itemToUpdate.item_name = item_name || itemToUpdate.item_name;
        itemToUpdate.item_description = item_description || itemToUpdate.item_description;
        itemToUpdate.item_price = item_price || itemToUpdate.item_price;
        itemToUpdate.category = category || itemToUpdate.category;
        itemToUpdate.rating = rating || itemToUpdate.rating;

        // Save updated menu item
        itemToUpdate = await itemToUpdate.save();

        res.status(200).send(itemToUpdate);
    } catch (error) {
        res.status(500).json({ error: "Error updating menu item", details: error.message });
    }
};

// Delete menu item
exports.deleteMenuItem = async (req, res) => {
    try {
        const deletedItem = await MenuModel.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ error: "Menu item not found" });
        }

        // Remove the image file from the file system
        if (fs.existsSync(deletedItem.item_image)) {
            fs.unlinkSync(deletedItem.item_image);
        }

        res.status(200).send({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting menu item", details: error.message });
    }
};

// Get filtered menu items
exports.getFilteredMenuItems = async (req, res) => {
    try {
        let filter = {};
        for (let key in req.body) {
            if (req.body[key].length > 0) {
                if (key === "category") {
                    filter[key] = req.body[key];
                } else {
                    filter[key] = { $lte: req.body[key][1], $gte: req.body[key][0] };
                }
            }
        }

        const items = await MenuModel.find(filter).populate('category');
        if (!items || items.length === 0) {
            return res.status(404).json({ error: 'No menu items found matching the filters' });
        }
        res.status(200).send(items);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching filtered menu items', details: error.message });
    }
};
