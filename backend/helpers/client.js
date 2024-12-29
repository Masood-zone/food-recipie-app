const prisma = require("../utils/prismaUtil");

const signUp = async (data) => {
  const client = await prisma.client.create({
    data,
  });
  return client;
};

const getClients = async () => {
  const clients = await prisma.client.findMany({});
  return clients;
};

const getClientById = async (id) => {
  const client = await prisma.client.findUnique({
    where: { id },
  });
  return client;
};

const editClient = async (id, data) => {
  console.log(id, data, "xxxxxxx");
  const client = await prisma.client.update({
    where: { id },
    data,
  });
  console.log("return status", client);
  return client;
};

const removeClient = async (id) => {
  const client = await prisma.client.delete({
    where: { id },
  });
  return client;
};

const login = async (email) => {
  const client = await prisma.client.findUnique({
    where: {
      email,
    },
    select: {
      role: true,
      id: true,
      email: true,
      password: true,
    },
  });
  return client;
};

module.exports = {
  signUp,
  getClients,
  getClientById,
  editClient,
  removeClient,
  login,
};
