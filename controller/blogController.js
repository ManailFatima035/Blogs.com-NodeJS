const express = require ('express');
const blog = require('../model/blogs');

const blogIndex = (req,res) => {
    res.render('index' , {title: 'Index Page'});
}

const blogCreateGet = (req,res) => {
    blog.find()
    .then((result) => {
        res.render('index' , {title:'Blogs', arr:result})
    })
    .catch((err) => console.log(err));

    }

const blogCreatePost = (req, res) => {

    const blog = new Blog(req.body);
    
    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    }) 
    .catch((err) => console.log(err))
}

const blogDetails = (req, res) => {
    const id = req.params.id;
    blog.findById(id)
    .then((result) => {
        res.render('details' , {title: 'Details page' , blog: result})

    })
}

const blogUpdate = async(req,res) => {    
    try {
        const id =req.params.id;
    const updatedBlog = await blog.findByIdAndUpdate( id, {
         title : req.body.title,
         snippet : req.body.snippet, 
         author : req.body.author,
         body : req.body.body
    },
        {new: true});
        if(!updatedBlog){
            return res.status(404).json({message: 'Blog post not found!'})
        }
        res.json(updatedBlog);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }}

const blogDelete = (req,res)=>{
    const id = req.params.id;
    blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect : '/blogs'})
    })
    .catch((err) => console.log(err))
}

module.exports = {
    blogIndex,
    blogDelete,
    blogUpdate,
    blogCreatePost,
    blogCreateGet,
    blogDetails
}