const express = require("express");
const router = express.Router();
const taskData = require('../Models/taskModel');

//CREATE 
router.post('/task', async(req,res) => {
    
    let data = new taskData({
        title: req.body.title,
        description : req.body.description,
        due_date : req.body.due_date
    });
    
    try {
        const dataToSave = await data.save();
            res.status(200).json({ id: dataToSave._id, ...dataToSave._doc});
    } catch (error) {
        res.status(400).json({message : error.message});
    }
});

//READ 
router.get('/tasks', async (req,res) => {
    try {
        const data = await taskData.find();
        res.json(data);
    } 
    catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/tasks/:id', async (req,res) => {
    try {
        const data = await taskData.findById(req.params.id);
        res.json(data);
    } 
    catch (error) {
        res.status(500).json({message: error.message});
    }
});

//UPDATE
router.put('/tasks/:id', async (req,res) => {
    try {
        const result = await taskData.findByIdAndUpdate(
            req.params.id, req.body,
            {
                new : true
            }
        )
        res.json(result);
    } 
    catch (error) {
        res.status(500).json({message: error.message});
    }
});

//DELETE 
router.delete('/tasks/:id', async (req,res) => {
try {
    const result = await taskData.findByIdAndDelete(req.params.id, { deletedAt: Date.now() }, { new: true });
    res.send('Data deleted successfully');
} 
catch (error) {
    res.status(500).json({message: error.message});
}
});

module.exports = router;