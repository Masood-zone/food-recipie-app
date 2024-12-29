const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Seed Users
  const user = await prisma.client.create({
    data: {
      username: "JohnDoe",
      email: "johndoe@example.com",
      password: "password123",
      role: "Admin",
    },
  });

  // Seed Categories
  const category = await prisma.category.create({
    data: {
      type: "Desserts",
      image: "desserts.png",
    },
  });

  // Seed Recipes
  const recipe = await prisma.recipe.create({
    data: {
      title: "Chocolate Cake",
      description: "A rich and moist chocolate cake.",
      quantity: 1,
      total: 10.0,
      price: 10.0,
      categoryId: category.id,
    },
  });

  // Seed Orders
  const order = await prisma.order.create({
    data: {
      subTotal: 10.0,
      deliveryFee: 2.0,
      clientId: user.id,
      status: "CREATED",
      orderDetails: {
        create: [
          {
            recipeId: recipe.id,
            quantity: 1,
            price: 10.0,
          },
        ],
      },
    },
  });

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
