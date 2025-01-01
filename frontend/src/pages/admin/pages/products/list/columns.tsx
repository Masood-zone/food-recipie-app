import ActionMenu from "@/components/shared/table/action-menu";
import { DataTableColumnHeader } from "@/components/shared/table/column-header";
import { ColumnDef } from "@tanstack/react-table";

export const columns = ({
  handleDelete,
}: {
  handleDelete: (id: number) => void;
}): ColumnDef<ProductsTable>[] => [
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
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "category.type",
    header: "Category",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "price",
    header: "Price(Ghc)",
  },
  {
    accessorKey: "total",
    header: "Total(Ghc)",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <ActionMenu
          id={product.id}
          resourceName="product"
          onDelete={() => handleDelete(product.id)}
        />
      );
    },
  },
];
