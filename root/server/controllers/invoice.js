const Customer = require("../models/Customer");
const Invoice = require("../models/Invoice");
const { StatusCodes } = require("http-status-codes");

// Add an invoice - create an invoice
const addInvoice = async (req, res) => {
  try {
    const validCustomer = await Customer.findOne({
      phoneNumber: req.body.phoneNumber,
    });

    if (!validCustomer) {
      res
        .status(StatusCodes.NOT_IMPLEMENTED)
        .json({ error: "Customer does not exist" });
    }
    if (
      !(validCustomer.email !== req.body.email) &&
      !(
        validCustomer.firstName !== req.body.customerName.split(" ")[0] &&
        validCustomer.lastName !== req.body.customerName.split(" ")[1]
      )
    ) {
      res
        .status(StatusCodes.NOT_IMPLEMENTED)
        .json({ error: "Details provided are not valid" });
    } else {
      const newInvoice = await Invoice.create({ ...req.body });
      res.status(StatusCodes.CREATED).json({ Invoice: newInvoice });
    }
  } catch (error) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: error });
  }
};

// get all invoices
const getAllInvoice = async (req, res) => {
  const invoices = await Invoice.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res
    .status(StatusCodes.OK)
    .json({ Invoices: invoices, count: invoices.length });
};

// get all invoices according to criteria

// get invoices per id
const getAllInvoicesById = async (req, res) => {
  const {
    user: { userId },
    params: { ids: invoiceIds },
  } = req;
  const ids = invoiceIds.split("&");
  let invoices = {};
  ids.forEach((id) => {
    const invoice = await Invoice.findById({ _id: id, createdBy: userId });
    if (!invoice) {
      throw new Error(`No invoice with id: ${invoiceId}.`);
    }
    invoices = { ...invoice };
  });
  if (!invoices) {
    throw new Error(`No invoices exist with provided ids`);
  }
  res.status(StatusCodes.OK).json({ invoices });
};

// get invoices per due date



// get invoices per created date

// get an invoice
const getInvoice = async (req, res) => {
  const {
    user: { userId },
    params: { id: invoiceId },
  } = req;

  const invoice = await Invoice.findById({ _id: invoiceId, createdBy: userId });
  if (!invoice) {
    throw new Error(`No invoice with id: ${invoiceId}.`);
  }
  res.status(StatusCodes.OK).json({ invoice });
};

// update an invoice
const updateInvoice = async (req, res) => {
  const {
    body: {
      product,
      quantity,
      unitPrice,
      paymentOption,
      dueDate,
      customerName,
      customerEmail,
      customerPhoneNumber,
    },
    user: { userId },
    params: { id: invoiceId },
  } = req;

  if (
    product == "" ||
    quantity == 0 ||
    unitPrice == 0 ||
    paymentOption == "" ||
    dueDate == "" ||
    customerName == "" ||
    customerEmail == "" ||
    customerPhoneNumber == ""
  ) {
    throw new Error("Fields cannot be empty");
  }
  const invoice = await Invoice.findByIdAndUpdate(
    {
      _id: invoiceId,
      createdBy: userId,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!invoice) {
    throw new Error(`No invoice with id: ${invoiceId}.`);
  }
  res.status(StatusCodes.OK).json({ updatedInvoice: invoice });
};

// delete an invoice
const deleteInvoice = async (req, res) => {
  const {
    user: { userId },
    params: { id: invoiceId },
  } = req;
  const invoice = await Invoice.findOneAndRemove({
    _id: invoiceId,
    createdBy: userId,
  });
  if (!invoice) {
    throw new Error(`No invoice with id: ${invoiceId}.`);
  }
  res
    .status(StatusCodes.OK)
    .json({ deletedInvoice: invoice, message: "Invoice deleted." });
};

module.exports = {
  addInvoice,
  getAllInvoice,
  getInvoice,
  updateInvoice,
  deleteInvoice,
};
