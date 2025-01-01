export function NoProductsHero() {
  //   const { setSelectedCategory } = useShopStore();

  return (
    <div className="bg-primary-foreground py-12 px-4 sm:px-6 lg:px-8 rounded-lg mb-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          No products found in this category
        </h2>
        <p className="mt-4 text-xl">
          We couldn't find any products in the selected category. Don't worry,
          we have plenty of other delicious options!
        </p>
        {/* <div className="mt-8">
          <Button onClick={() => setSelectedCategory(null)} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View All Products
          </Button>
        </div> */}
      </div>
    </div>
  );
}
