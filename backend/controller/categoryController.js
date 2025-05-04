const CategoryModel =require('../models/Category')

// add new category

exports.addCategory = async (req, res)=>{
    let categoryExists = await CategoryModel.findOne({category_name:req.body.category_name})
    if(categoryExists){
        return res.status(400).json({error:"Category already exist"})
    }

    let categoryToAdd = await CategoryModel.create({
        category_name:req.body.category_name
    })

    if(!categoryToAdd){
        return res.status(400).json({error: "Something went wrong"})
    }

    res.send(categoryToAdd)
}

//get all categories

exports.getAllCategories =async(req, res) =>{
    let categories =await CategoryModel.find()
    if(!categories){
        return res.status(400).json({error: "Something went wrong"})
    }
    res.send(categories)
}

//get category details
exports.getCategoryDetails =async(req, res) =>{
    let category =await CategoryModel.findById(req.params.id)
    if(!category){
        return res.status(400).json({error: "Something went wrong"})
    }
    res.send(category)
}

// update category
exports.updateCategory =async(req, res) =>{
    let categoryToUpdate =await CategoryModel.findByIdAndUpdate(req.params.id,{
        category_name:req.body.category_name
    },{new:true})
    if(!categoryToUpdate){
        return res.status(400).json({error: "Something went wrong"})
    } 
    res.send(categoryToUpdate)
}

// delete categoey
exports.deleteCategory =async(req, res) =>{
    CategoryModel.findByIdAndDelete(req.params.id)
    .then(deleteCategory => {
        if(!deleteCategory){
            return res.status(400).json({error : "Category not found"})
        }
        res.send({message: " Category deleted sucessfully"})
    })
}