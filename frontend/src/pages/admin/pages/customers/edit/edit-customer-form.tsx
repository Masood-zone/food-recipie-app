import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ButtonLoader } from "@/components/shared/button/button-loader";
import { useUpdateCustomer } from "@/pages/admin/services/queries/customers/queries";

const schema = z.object({
  username: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
  password: z.string().nonempty("Password is required").optional(),
  role: z.string().optional(),
});

export default function EditCustomerForm({
  customer,
}: {
  customer: UpdateUser;
}) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: customer,
  });

  const { mutateAsync: updateCustomer, isPending } = useUpdateCustomer();
  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await updateCustomer({ id: customer.id, ...data });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter email" {...field} />
              </FormControl>
              <FormDescription>Enter customer email address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter username" {...field} />
              </FormControl>
              <FormDescription>Enter customer username</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonLoader type="submit" isLoading={isPending}>
          Update Customer
        </ButtonLoader>
      </form>
    </Form>
  );
}
