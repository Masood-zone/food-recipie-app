import ActionMenu from "@/components/shared/table/action-menu";
import { DataTableColumnHeader } from "@/components/shared/table/column-header";
import { ColumnDef } from "@tanstack/react-table";

export const columns = ({
  handleDelete,
}: {
  handleDelete: (id: number) => void;
}): ColumnDef<CategoriesTable>[] => [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <div className="flex items-center">
          <img
            src={category.image}
            alt="profile"
            className="w-10 h-10 rounded-full bg-background border"
            loading="lazy"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <ActionMenu
          id={category.id}
          resourceName="category"
          onDelete={() => handleDelete(category.id)}
        />
      );
    },
  },
];
