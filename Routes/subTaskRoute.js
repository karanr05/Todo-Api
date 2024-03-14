const express = require("express");
const router = express.Router();
const taskData = require('../Models/taskModel');
const subTaskData = require('../Models/subTaskModel');

// CREATE Subtask
router.post('/subtask', async (req, res) => {
    try {
        // Fetch the created task data from taskRoute using its API
        const taskResponse = await fetch('http://localhost:3000/api/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!taskResponse.ok) {
            throw new Error('Failed to fetch task data');
        }

        // const taskData = await taskResponse.json();
        // const taskId = taskData.id; // Assuming the task ID is returned in the response

        // Create the subtask using the fetched task ID
        let subtask = new subTaskData({
            // id: req.body.id,
            task_id: req.body.task_id, // Use the fetched task ID here
            status: req.body.status,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            deleted_at: req.body.deleted_at
        });

        const subtaskDataToSave = await subtask.save();
        res.status(200).json(subtaskDataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/subtask', async (req, res) => {
    try {
        // Fetch all subtasks from the database
        const subtasks = await taskData.find();
        
        // Send the fetched subtasks as a JSON response
        res.status(200).json(subtasks);
    } catch (error) {
        // If an error occurs, send a 500 (Internal Server Error) response
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
