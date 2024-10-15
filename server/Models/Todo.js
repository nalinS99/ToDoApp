const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true // Ensures that task is provided
    }
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
