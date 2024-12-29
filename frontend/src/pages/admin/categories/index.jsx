import React from "react";
import {
  MdDelete,
  MdDeleteForever,
  MdModeEditOutline,
  MdOutlineFastfood,
} from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { foodApi } from "../../../redux/hook";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";
import { BiEdit } from "react-icons/bi";

function Categories() {
  const navigate = useNavigate();
  const { data, isLoading } = foodApi.useGetCategoriesQuery();
  const [deleteCategory] = foodApi.useDeleteCategoryMutation();

  const handleDelete = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      toast.error("Category deleted successfully");
    } catch (error) {
      toast.error("Failed to delete category:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between py-5 px-4">
        <h1 className="text-2xl font-bold ">Food Categories</h1>
        <Link
          to="/admin/create-category"
          className="text-lg text-[#F43F5E] hover:underline flex items-center gap-2"
        >
          Create Food Category
          <MdOutlineFastfood />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th className="text-lg">Image</th>
              <th className="text-lg">Type</th>
              <th className="text-lg">Edit</th>
              <th className="text-lg">Delete</th>
            </tr>
          </thead>
          {/* Table Body */}
          <Loader loading={isLoading} />
          <tbody>
            {data?.cartegories?.map((category) => (
              <tr key={category.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle bg-slate-200 w-12 h-12">
                        <img src={category.image} alt="category-icon" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{category.type}</p>
                </td>
                <th>
                  <button
                    className="btn btn-ghost text-green-600"
                    onClick={() =>
                      navigate(`/admin/edit-category/${category.id}`)
                    }
                  >
                    <BiEdit fontSize={25} />
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-ghost text-red-600"
                    onClick={() => handleDelete(category.id)}
                  >
                    <MdDeleteForever fontSize={25} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Categories;
