import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { foodApi } from "../../../redux/hook";
import { Form } from "../../../components/form";

function CreateCategory() {
  const navigate = useNavigate();

  const [createCategory, { isLoading }] = foodApi.useCreateCategoryMutation();

  const onSubmit = async (data) => {
    const response = await createCategory(data);
    if (!response.error) {
      toast.success("Successful!");
      navigate("/admin/category");
    }
    toast(response.error);
  };
  const category_data = {
    type: {
      label: "Category Type",
      placeholder: "Enter category type",
      type: "text",
    },
    image: {
      label: "Image",
      placeholder: "Upload picture",
      type: "file",
    },
  };

  return (
    <div className="w-[60%] h-auto mx-auto my-10 p-3">
      <h1 className="py-5 text-4xl font-bold">
        Create a Category
        <Link
          to="/admin/category"
          className="pl-10 text-sm font-normal underline"
        >
          Go back
        </Link>
      </h1>
      {/* Form wizard */}
      <Form
        data={category_data}
        onSubmit={onSubmit}
        loading={isLoading}
        title="Create"
      />
    </div>
  );
}

export default CreateCategory;
