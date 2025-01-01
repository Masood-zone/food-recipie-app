import { useFetchAllProductsQuery } from "../../services/queries/products/queries";

export default function Products() {
  const {
    data: products,
    isPending,
    error,
    isError,
  } = useFetchAllProductsQuery();
  console.log(products);

  return <section>Products</section>;
}
