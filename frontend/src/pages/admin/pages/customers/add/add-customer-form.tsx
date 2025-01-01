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
import { useCreateCustomer } from "@/pages/admin/services/queries/customers/queries";
import { ButtonLoader } from "@/components/shared/button/button-loader";
import { PasswordInput } from "@/pages/auth/forms/password-input";

const schema = z.object({
  username: z.string().nonempty("Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().nonempty("Password is required"),
  role: z.string().optional(),
});

export default function AddCustomerForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const { mutateAsync: addCustomer, isPending } = useCreateCustomer();

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await addCustomer({
        ...data,
        role: "USER",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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
        <FormField
          control={form.control}
          name="role"
          render={() => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input type="text" value="CUSTOMER" disabled />
              </FormControl>
              <FormDescription>Role is set to Customer</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Enter password" {...field} />
              </FormControl>
              <FormDescription>Enter password for customer</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonLoader type="submit" isLoading={isPending}>
          Create Customer
        </ButtonLoader>
      </form>
    </Form>
  );
}
