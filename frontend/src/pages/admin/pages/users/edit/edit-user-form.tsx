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
import { useUpdateAdmin } from "@/pages/admin/services/queries/users/queries";
import { ButtonLoader } from "@/components/shared/button/button-loader";

const schema = z.object({
  username: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
  password: z.string().nonempty("Password is required").optional(),
  role: z.string().optional(),
});

export default function EditUserForm({ user }: { user: UpdateAdmin }) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: user,
  });

  const { mutateAsync: updateUser, isPending } = useUpdateAdmin();
  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await updateUser({ id: user.id, ...data });
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
              <FormDescription>Enter user email address</FormDescription>
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
              <FormDescription>Enter user username</FormDescription>
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
                <Input type="text" value="ADMIN" disabled />
              </FormControl>
              <FormDescription>Role is set to ADMIN</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonLoader type="submit" isLoading={isPending}>
          Update User
        </ButtonLoader>
      </form>
    </Form>
  );
}
