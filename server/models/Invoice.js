const { Schema, model, Types } = require("mongoose");

const invoiceSchema = new Schema(
  {
    receipient: {
      type: Types.ObjectId,
      ref: "Customer",
      required: [true, "provide receipient"],
    },
    paymentOption: {
      type: String,
      enum: ["Mobile Money", "Bank Card", "Bank Cheque", "Offline"],
      default: "Offline",
      required: true,
    },
  },
  { timestamps: true }
);

const Invoice = model("Invoice", invoiceSchema);
