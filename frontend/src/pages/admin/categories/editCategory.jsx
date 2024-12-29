import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { foodApi } from "../../../redux/hook";
import { Button } from "../../../components/form";

function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { data } = foodApi.useGetCategoriesQuery();
  const [updateCategory, { isLoading }] = foodApi.useUpdateCategoryMutation();
  const singleCategory = data?.cartegories?.filter(
    (category) => category.id === id
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("type", data.type);

    const response = await updateCategory({ id, formData });
    if (!response.error) {
      toast.success("Recipe updated successfully");
      navigate("/admin/category");
      return;
    }
    console.log(data);
  };

  return (
    <div className="w-[60%] h-auto mx-auto my-10 p-3">
      <h1 className="py-5 text-4xl font-bold">
        Edit Recipe
        <Link
          to="/admin/category"
          className="pl-10 text-sm font-normal underline"
        >
          Go back
        </Link>
      </h1>
      {/*Form */}
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        {/*Image */}
        <div className="my-1">
          <label htmlFor="image">Image</label>
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected recipe "
              className="w-32 h-32 object-cover rounded-md my-3"
            />
          ) : (
            singleCategory[0]?.image && (
              <img
                src={singleCategory[0]?.image}
                alt="Current recipe "
                className="w-32 h-32 object-cover rounded-md my-3"
              />
            )
          )}
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={handleImageChange}
          />
        </div>
        {/*Category Type */}
        <div className="my-1">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            placeholder="Edit type"
            className="border-b w-full border input-bordered rounded-md outline-none bg-transparent text-black my-3 py-4 px-2"
            defaultValue={singleCategory[0]?.type}
            {...register("type", { required: "Category type is required" })}
          />
          {errors.type && <p className="text-red-500">{errors.type.message}</p>}
        </div>
        <Button title="Update" loading={isLoading} />
      </form>
    </div>
  );
}

export default EditCategory;
