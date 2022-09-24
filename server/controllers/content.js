const Content = require('../models/content');
const fs = require('fs');

module.exports = class API {

    // Fetch All Posts
    static async fetchAllPosts(req,res) {
        try{
            const content = await Content.find();
            res.status(200).json(content);
        } catch(err) {
            res.status(500).json(err);
        }
    }

    // Fetch Post By ID
    static async fetchPostById(req,res){
        const id = req.params.id;
        try{
            const content = await Content.findById(id);
            res.status(200).json(content);
        } catch(err) {
            res.status(500).json({ message: err.message });
        }
    }

    // Create Post
    static async createPost(req,res){
        const content = req.body;
        const imagename = req.file.filename;
        content.image = imagename;
        Content.findOne({title: content.title}, async (err, result) => {
            if (result) {
                res.status(400).json({ message: "Hewan sudah ada" });
            } else {
                const newContent = new Content(content);
                try{
                    await newContent.save();
                    res.status(201).json({message: 'Konten berhasil dibuat'});
                } catch(err) {
                    res.status(400).json({ message: err.message });
                }
            }
        });
    }

    // Update Post
    static async updatePost(req,res){
        const id = req.params.id;
        let new_image = '';
        if(req.file){
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./uploads/' + req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        } else {
            new_image = req.body.old_image;
        }
        const updatecontent = req.body;
        updatecontent.image = new_image;
        try {
            await Content.findByIdAndUpdate(id, updatecontent);
            res.status(200).json({message: 'Konten berhasil diupdate'});
        } catch (err) {
            res.status(500).json({message: err.message });
        }
    }

    // Delete Post
    static async deletePost(req,res){
        const id = req.params.id;
        try{
            const result = await Content.findByIdAndDelete(id);
            if(result.image != ''){
                try {
                    fs.unlinkSync('./uploads/'+result.image);
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({ message: 'Konten berhasil dihapus!' })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}