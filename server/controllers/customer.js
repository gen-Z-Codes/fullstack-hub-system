const Customer = require("../models/Customer");
const { StatusCodes } = require("http-status-codes");

// create a customer (add a new customer)
const addCustomer = async (req, res) => {
  req.body.createdBy = req.user.userId;
  try {
    const newCustomer = await Customer.create({ ...req.body });
    res.status(StatusCodes.CREATED).json({ customer: { newCustomer } });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: error });
  }
};

// get all customers
const getAllCustomers = async (req, res) => {
  const customers = await Customer.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ customers, count: customers.length });
};

// get a customer by id
const getCustomer = async (req, res) => {
  const {
    user: { userId },
    params: { id: customerId },
  } = req;

  const customer = await Customer.findOne({
    _id: customerId,
    createdBy: userId,
  });
  if (!customer) {
    throw new Error(`No customer with id: ${customerId}`);
  }
  res.status(StatusCodes.OK).json({ customer });
};

// update customer details by id
const updateCustomer = async (req, res) => {
  const {
    body: { firstName, lastName, email, phoneNumber },
    user: { userId },
    params: { id: customerId },
  } = req;

  if (firstName == "" || lastName == "" || email == "" || phoneNumber == "") {
    throw new Error("Fields cannot be empty");
  }
  const customer = await Customer.findByIdAndUpdate(
    {
      _id: customerId,
      createdBy: userId,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!customer) {
    throw new Error(`No customer with id: ${customerId}`);
  }
  res.status(StatusCodes.OK).json({ customer });
};

// delete customer per id
const deleteCustomer = async (req, res) => {
  const {
    user: { userId },
    params: { id: customerId },
  } = req;

  const customer = await Customer.findOneAndRemove({
    _id: customerId,
    createdBy: userId,
  });
  if (!customer) {
    throw new Error(`No customer with id: ${customerId}`);
  }
  res.status(StatusCodes.OK).send("Customer deleted.");
};

module.exports = {
  addCustomer,
  getAllCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
