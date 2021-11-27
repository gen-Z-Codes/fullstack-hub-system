const Customer = require("../models/Customer");
const Invoice = require("../models/Invoice");
const { StatusCodes } = require("http-status-codes");

// Add an invoice - create an invoice
const addInvoice = async (req, res) => {
  req.body.createdBy = req.user.userId;
  console.log(req.body);
  console.log(req.body.customePhoneNumber);
  try {
    const validCustomer = await Customer.findOne({
      phoneNumber: req.body.customerPhoneNumber,
    });

    console.log(validCustomer);

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
  if (Object.keys(req.query).length === 0) {
    const invoices = await Invoice.find({ createdBy: req.user.userId }).sort(
      "createdAt"
    );

    res
      .status(StatusCodes.OK)
      .json({ Invoices: invoices, count: invoices.length });
  } else {
    if (req.query.id) {
      const invoices = await Invoice.find({ createdBy: req.user.userId }).sort(
        "createdAt"
      );
      // Get invoices with provided ids
      const ids = req.query.id;
      const result = [];

      ids.forEach((id) => {
        for (let i = 0; i < invoices.length; i++) {
          if (invoices[i]._id == id) {
            result.push(invoices[i]);
          }
        }
      });
      res.status(StatusCodes.OK).json({ invoices: result });
    } else if (req.query.dueDate) {
      // Get invoices with provided due date
      let dueDate = `${req.query.dueDate}T00:00:00.000Z`;

      const dateInvoices = await Invoice.find({
        dueDate: new Date(dueDate),
        createdBy: req.user.userId,
      });
      if (!invoices) {
        throw new Error(`No invoices with due date: ${dueDate}`);
      }
      res.status(StatusCodes.OK).json({ invoices: dateInvoices });
    }
  }
};

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
