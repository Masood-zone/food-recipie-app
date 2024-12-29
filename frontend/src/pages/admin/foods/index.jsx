import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/loader";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever, MdOutlineFastfood } from "react-icons/md";
import { foodApi } from "../../../redux/hook";

function Foods() {
  const navigate = useNavigate();
  const { data, isLoading } = foodApi.useGetFoodsQuery();
  const [deleteFood, { isLoading: isDeleting }] =
    foodApi.useDeleteFoodMutation();
  const handleDelete = async (id) => {
    await deleteFood(id);
    // queryClient.invalidateQueries("foods");
  };
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-5">
        <h1 className="text-2xl font-bold">Foods</h1>
        <Link
          to="/admin/create-food"
          className="text-lg text-[#F43F5E] hover:underline flex items-center gap-2"
        >
          Create Food
          <MdOutlineFastfood />
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead>
            <tr>
              <th className="text-left text-lg">Picture</th>
              <th className="text-left text-lg">Name</th>
              <th className="text-left text-lg">Description</th>
              <th className="text-left text-lg">Rating</th>
            </tr>
          </thead>
          <Loader loading={isLoading} />
          <tbody>
            {data?.recipes?.map((food) => (
              <tr key={food.id} className="hover">
                <td className="font-medium">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={food?.image}
                        alt={food?.title}
                        className="w-full"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <p>{food?.title}</p>
                </td>
                <td>{food?.description}</td>
                <td>{food?.rating}</td>
                <td>
                  <button
                    onClick={() => navigate(`/admin/edit-food/${food.id}`)}
                    className="btn btn-ghost text-green-600"
                  >
                    <BiEdit fontSize={25} />
                  </button>
                  <button
                    onClick={() => handleDelete(food.id)}
                    className="btn btn-ghost text-red-600"
                  >
                    {isDeleting ? (
                      "Deleting..."
                    ) : (
                      <MdDeleteForever fontSize={25} />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Foods;
