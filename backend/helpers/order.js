const prisma = require("../utils/prismaUtil");

const saveOrder = async (data) => {
  const order = await prisma.order.create({
    data,
  });
  return order;
};

const loadOrders = async () => {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      orderDetails: true,
      delivery: true,
      client: true,
    },
  });
  return orders;
};

const loadOrder = async (id) => {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
    include: {
      orderDetails: {
        include: {
          recipe: true,
        },
      },
      delivery: true,
      client: true,
    },
  });
  return order;
};

const editOrder = async (id, data) => {
  const order = await prisma.order.update({
    where: {
      id,
    },
    data,
  });
  return order;
};
const editOrderStatus = async (data) => {
  const { ids, status } = data;

  const order = await prisma.order.updateMany({
    where: {
      id: {
        in: ids,
      },
    },
    data: {
      status,
    },
  });
  return order;
};

const removeOrder = async (id) => {
  const order = await prisma.order.delete({
    where: {
      id,
    },
  });
  return order;
};
module.exports = {
  saveOrder,
  loadOrders,
  loadOrder,
  editOrder,
  removeOrder,
  editOrderStatus,
};
