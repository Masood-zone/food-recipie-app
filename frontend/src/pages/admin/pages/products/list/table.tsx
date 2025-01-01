import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export default function ProductTable({
  data,
  handleDelete,
}: {
  data: ProductsTable[];
  handleDelete: (id: number) => void;
}) {
  return (
    <div className="p-5">
      <DataTable columns={columns({ handleDelete })} data={data} />
    </div>
  );
}
