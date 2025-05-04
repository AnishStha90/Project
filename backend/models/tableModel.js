const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    tableNumber :{
        type: String,
        require: true
    },
    tableCapacity:{
        type:String,
        require: true
    },
    location: {
        type: String,
        default: 'Main Hall',
      },
    reservations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reservation"
        }
    ]
},{timestamps: true})

module.exports = mongoose.model("Table", tableSchema)