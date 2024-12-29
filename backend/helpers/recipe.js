const prisma = require("../utils/prismaUtil");

const addFood = async (data) => {

  const food = await prisma.recipe.create({
    data,
  });
  return food;
};

const getFoods = async () => {
  const foods = await prisma.recipe.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return foods;
};

const getSingleFood = async (id) => {
  const food = await prisma.recipe.findFirst({
    where: {
      id,
    },
  });
  return food;
};
const editfood = async (id, data) => {
  const food = await prisma.recipe.update({
    where: { id },
    data,
  });
  return food;
};

const removeFood = async (id) => {
  const food = await prisma.recipe.delete({
    where: { id },
  });
  return food;
};

module.exports = {
  addFood,
  getFoods,
  editfood,
  removeFood,
  getSingleFood,
};
