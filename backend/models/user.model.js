const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);
User.createIndexes();
module.exports = User;