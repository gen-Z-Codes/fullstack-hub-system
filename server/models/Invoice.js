const { Schema, model, Types } = require("mongoose");

const invoiceSchema = new Schema({});

const Invoice = model("Invoice", invoiceSchema);
