const categoryModel = require('../../Models/Category/Category.Model')

const categoryCreate = async (req,res) =>{
    try{
        // console.log(...req.body.credentials);
        //save db
        const newCategory = await categoryModel.create({...req.body})
        
        return res.status(201).json({
            status:"success"
        })

    }catch(error){
        return res.status(500).json({

            message:req.body.categoryName,
            error:error.message
        })
    }
}

const categoryGetAll = async (req,res)=>{
    try{
        //find isActive categories 
        const categories = await categoryModel.find({isActive: true})
        
        if(!categories){
            return res.status(404).json({
                message:"Categories are not found"
            })
        }
        return res.status(200).json({
            data:categories,
            message:"success"
        })
    }catch(error){
        return res.status(404).json({
            message:"Categories are not found"
        })
    }
}

module.exports= {
    categoryGetAll,
    categoryCreate,
}