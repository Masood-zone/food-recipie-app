const CustomError = require("../utils/customErrorClass");
const httpstatus = require("../utils/httpstatus");
const logger = require("../utils/loggerUtil");

const {
  saveOrder,
  loadOrders,
  loadOrder,
  editOrder,
  removeOrder,
  editOrderStatus,
} = require("../helpers/order");
const { addDelivery } = require("../helpers/delivery");

exports.createOrder = async (req, res, next) => {
  const data = req.body;
  const recipe = data.recipe;
  const orderData = {
    clientId: data.clientId,
    subTotal: data.subTotal,
    deliveryFee: data.deliveryFee,
    orderDetails: { createMany: { data: recipe } },
  };
  try {
    const order = await saveOrder(orderData);

    const orderId = order.id;

    const deliveryData = {
      orderId,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      street_name: data.street_name,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      country: data.country,
      phonenumber: data.phonenumber,
    };
    const delivery = await addDelivery(deliveryData);
    res.status(httpstatus.OK).json({
      order,
      delivery,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(error.message, error.status));
  }
};

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await loadOrders();
    res.status(httpstatus.OK).json({
      orders,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(error.message, error.status));
  }
};
exports.getSingleOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await loadOrder(id);
    res.status(200).json({
      order,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(error.message, error.status));
  }
};

exports.patchOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const order = await editOrder(id, data);
    res.status(200).json({
      order,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(error.message, error.status));
  }
};
exports.patchOrderStatus = async (req, res, next) => {
  try {
    const data = req.body;
    const order = await editOrderStatus(data);
    res.status(200).json({
      order,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(error.message, error.status));
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const { id } = params;
    const order = await removeOrder(id);
    res.status(200).json({
      order,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(error.message, error.status));
  }
};
