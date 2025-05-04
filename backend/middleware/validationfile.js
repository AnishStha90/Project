const { check, validationResult } = require('express-validator')

exports.addMenuItemCheckCheck = [
    check('item_name', "item name is required").notEmpty()
        .isLength({ min: 3 }).withMessage("item must be at least 3 characters")
]

exports.validationScript = (req, res, next) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next()
}

exports.addMenuItemCheck = [
    check('item_name', "Item name is required").notEmpty()
        .isLength({ min: 3 }).withMessage("Item name must be at least 3 characters"),
    check('item_description', "Item description is required").notEmpty()
        .isLength({ min: 20 }).withMessage("Item description must be at least 20 characters"),
    check('item_price', "Item price is required").notEmpty()
        .isNumeric().withMessage("Item price must be a number"),
    check('category', "Category is required").notEmpty()
        .isMongoId().withMessage("Invalid Category")
];

exports.updateMenuItemCheck = [
    check('item_name').optional()
        .isLength({ min: 3 }).withMessage("item name must be at least 3 characters"),
    check('item_description').optional()
        .isLength({ min: 20 }).withMessage("item description must be at least 20 characters"),
    check('item_price').optional()
        .isNumeric().withMessage("item price must be a number"),
    check('category').optional()
        .isMongoId().withMessage("Invalid Category")
]