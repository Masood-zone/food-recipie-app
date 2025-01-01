import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export default function UsersTable({
  data,
  handleDelete,
}: {
  data: UsersTable[];
  handleDelete: (id: number) => void;
}) {
  return (
    <div className="py-8">
      <DataTable columns={columns({ handleDelete })} data={data} />
    </div>
  );
}
