const mongoose = require('mongoose')

const schema1 = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Email: { 
            type: String,
            required: true
        },
        College: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model("CBIT1", schema1);