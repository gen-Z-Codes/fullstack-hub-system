const express = require("express");
const {
  getAllInvoice,
  getInvoice,
  addInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoice");

const invoiceRoute = express.Router();

invoiceRoute.route("/").get(getAllInvoice).post(addInvoice);
invoiceRoute.route("/:id").get(getInvoice).patch(updateInvoice).delete(deleteInvoice);

module.exports = invoiceRoute;
