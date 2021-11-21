const { Schema, model, Types } = require("mongoose");

const invoiceSchema = new Schema(
  {
    product: {
      type: String,
      required: [true, "Provide producct/service you want payment for"],
    },
    quantity: {
      type: Number,
      required: [true, "Provide quantity of product for payment"],
      default: 1,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    paymentOption: {
      type: String,
      enum: ["Mobile Money", "Bank Card", "Bank Cheque", "Offline"],
      default: "Offline",
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    customerPhoneNumber: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Invoice = model("Invoice", invoiceSchema);

module.exports = Invoice;
