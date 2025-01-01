import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export default function CustomersTable({
  data,
  handleDelete,
}: {
  data: CustomersTable[];
  handleDelete: (id: number) => void;
}) {
  return (
    <div className="py-8">
      <DataTable columns={columns({ handleDelete })} data={data} />
    </div>
  );
}
