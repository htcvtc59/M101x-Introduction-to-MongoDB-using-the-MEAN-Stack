var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    profile: {
        username: {
            type: String,
            require: true,
            lowercase: true
        },
        priture: {
            type: String,
            require: true,
            match: /^http:\/\//i
        }
    },
    data: {
        oauth: {
            type: String,
            require: true
        },
        cart: [{
            product: {
                type: mongoose.Schema.Types.ObjectId
            },
            quantity: {
                type: Number,
                default: 1,
                min: 1
            }
        }]
    }
});