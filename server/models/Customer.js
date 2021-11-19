const { Schema, model, Types } = require("mongoose");

const CustomerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide customer's first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide customer's first name"],
    },
    organization: {
      type: String,
      required: [true, "Please pprovide customer's organization"]
    },
    gender:{
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    date_of_birth:{
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide valid email",
      ],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide phone number"],
      unique: true,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "Provide user"],
    },
  },
  { timestamps: true }
);

const Customer = model("Customer", CustomerSchema);

module.exports = Customer;
