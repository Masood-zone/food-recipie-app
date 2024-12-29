const prisma = require("../utils/prismaUtil");

const addDelivery = async (data) => {
  const delivery = await prisma.delivery.create({
    data,
  });
  return delivery;
};

const getDeliveries = async (data) => {
  const deliveries = await prisma.delivery.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return deliveries;
};

const getDeliveryByClientId = async (id) => {
  const order = await prisma.delivery.findFirst({
    where: {
      clientId: id,
    },
  });
  const delivery = await prisma.delivery.findFirst({
    where: {
      orderId: order.id,
    },
  });
  return { order, delivery };
};

const getSingleDelivery = async (id) => {
  const delivery = await prisma.delivery.findUnique({
    where: {
      id,
    },
  });
  return delivery;
};

const editDelivery = async (id, data) => {
  const delivery = await prisma.delivery.update({
    where: {
      id,
    },
    data,
  });
  return delivery;
};

const removeDelivery = async (id) => {
  const delivery = await prisma.delivery.delete({
    where: {
      id,
    },
  });
  return delivery;
};
module.exports = {
  addDelivery,
  getDeliveries,
  getDeliveryByClientId,
  getSingleDelivery,
  editDelivery,
  removeDelivery,
};
