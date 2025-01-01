import ActionMenu from "@/components/shared/table/action-menu";
import { DataTableColumnHeader } from "@/components/shared/table/column-header";
import { ColumnDef } from "@tanstack/react-table";

export const columns = ({
  handleDelete,
}: {
  handleDelete: (id: number) => void;
}): ColumnDef<CustomersTable>[] => [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const customer = row.original;

      return (
        <ActionMenu
          id={customer.id}
          resourceName="customer"
          onDelete={() => handleDelete(customer.id)}
        />
      );
    },
  },
];
