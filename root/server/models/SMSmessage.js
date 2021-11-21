const{Schema, model, Types} = require("mongoose");

const messageSchema= new Schema(
    {
        recipient:{
            type:Array,
            required:true
        },
        messageHeader:{
            type:String,
            required:true
        },
        messageBody:{
            type:String,
            required:true
        },
        createdBy: {
            type: Types.ObjectId,
            ref: "User",
            required: true,
          },
    },
    { timestamps: true }
);

const smsMessage = model("smsMessage", messageSchema);

