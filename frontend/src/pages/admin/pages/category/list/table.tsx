import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export default function CatgoryTable({
  data,
  handleDelete,
}: {
  data: CategoriesTable[];
  handleDelete: (id: number) => void;
}) {
  return (
    <div className="py-8">
      <DataTable columns={columns({ handleDelete })} data={data} />
    </div>
  );
}
