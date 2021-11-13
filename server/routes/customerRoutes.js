const express = require("express");
const {
  addCustomer,
  getAllCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customer");

const customerRoute = express.Router();

customerRoute.route("/").post(addCustomer).get(getAllCustomers);
customerRoute
  .route("/:id")
  .get(getCustomer)
  .patch(updateCustomer)
  .delete(deleteCustomer);

module.exports = customerRoute;
