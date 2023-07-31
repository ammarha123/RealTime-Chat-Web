const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, require: true, minlength: 3, maxlength: 30 },
        email: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 120,
            unique: true,
        },
        password: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 120
        }
    }, 
    {
        timestamps: true,
    }
);

const userModel = mongoose.model("User", userSchema)

module.exports = userModel