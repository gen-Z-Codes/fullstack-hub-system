const {Schema, model} = require('mongoose');

const emailSchema = new Schema(
    {
        recipient:{
            type: Types.ObjectId,
            ref: "Customer",
            required: [true,"Please provide the recipient details"]
        },

        header:{
            type: String,
            required: true
        },

        body:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Email = model("Email",emailSchema);

