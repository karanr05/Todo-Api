const mongoose = require('mongoose');

const subTaskSchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     unique: true,
    //     required: true
    // },
    task_id: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        enum: [0, 1],
        default: 0 
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: null 
    }
}, { timestamps: true });

module.exports = mongoose.model('SubTask', subTaskSchema);
