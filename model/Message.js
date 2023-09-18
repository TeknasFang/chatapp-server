const { default: mongoose, Schema } = require("mongoose");

const messageSchema = new Schema(
    {
        message: {
            type: String,
            required: true
        },
        users: {
            type: Array,
            required: true
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        readers: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    })

module.exports = mongoose.model('Message', messageSchema)
