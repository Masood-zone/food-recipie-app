import { useNavigate } from "react-router-dom";
import { foodApi } from "../../../redux/hook";
import Loader from "../../../components/loader";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

function Users() {
  const navigate = useNavigate();
  const { data, isLoading } = foodApi.useGetUsersQuery();
  const [deleteUser, { isLoading: isDeleting }] =
    foodApi.useDeleteUserMutation();

  const handleDelete = async (id) => {
    await deleteUser(id);
  };

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-5">
        <h1 className="text-2xl font-bold ">Users</h1>
      </div>
      {/* Table */}
      <div className="overflow-x-auto w-full ">
        <table className="table">
          <thead>
            <tr>
              <th className="text-left text-lg">Email</th>
              <th className="text-left text-lg">Role</th>
              <th className="text-left text-lg"></th>
            </tr>
          </thead>
          <Loader loading={isLoading} />
          <tbody>
            {data?.clients?.map((user) => (
              <tr key={user.id} className="hover">
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  <button
                    onClick={() => navigate(`/admin/edit-user/${user.id}`)}
                    className="btn btn-ghost text-green-600"
                  >
                    <BiEdit fontSize={25} />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
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
export default Users;
