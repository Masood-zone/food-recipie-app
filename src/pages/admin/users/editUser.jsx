import { foodApi } from "../../../redux/hook";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../../../components/button";

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = foodApi.useGetUsersQuery();
  const [updateUser, { isLoading }] = foodApi.useUpdateUserMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const user = data?.clients?.find((user) => user.id === id);

  const onSubmit = async (data) => {
    const updateClientData = {
      username: data.username,
      role: data.role,
      id,
    };
    const response = await updateUser(updateClientData);
    if (!response.error) {
      toast.success("User updated successfully");
      navigate("/admin");
      return;
    }
  };

  return (
    <div className="w-[60%] h-auto mx-auto my-10 p-3">
      <h1 className="py-5 text-4xl font-bold">
        Edit User
        <Link to="/admin" className="pl-10 text-sm font-normal underline">
          Go back
        </Link>
      </h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Edit username"
          className="border-b w-full border input-bordered rounded-md outline-none bg-transparent text-black my-3 py-4 px-2"
          defaultValue={user?.username}
          {...register("username", { required: "Name is required" })}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
        <select
          className="border-b w-full border input-bordered rounded-md outline-none bg-transparent text-black my-3 py-4 px-2"
          defaultValue={user?.role}
          {...register("role", { required: "Role is required" })}
        >
          <option value="Admin">Admin</option>
          <option value="Client">Client</option>
        </select>
        <Button title="Update" loading={isLoading} />
      </form>
    </div>
  );
}

export default EditUser;
