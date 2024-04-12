import React from "react";
import { close, view } from "../../assets/svgs";
import { Link } from "react-router-dom";

function WishlistTable({ data, handleDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th className="text-lg">Item</th>
            <th className="text-lg">Item Name</th>
            <th className="text-lg">Description</th>
            <th className="text-lg">Check Recipie</th>
            <th className="text-lg">Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td></td>
              <td></td>
              <td>
                <div className="text-center font-medium">
                  <p className="text-xl">
                    You have nothing in your Wishlist, Care to
                    <Link to="/" className="underline text-purple-500 px-2">
                      add
                    </Link>
                    some?
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            data.map((data) => (
              <tr key={data.id}>
                {/* Food Icon */}
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={data.image} alt="wish-list-icon" />
                    </div>
                  </div>
                </td>
                {/* Title */}
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{data.name}</div>
                      <span className="badge badge-ghost badge-sm">
                        {data.category}
                      </span>
                    </div>
                  </div>
                </td>
                {/* Description */}
                <td>
                  <div>{data.description}</div>
                </td>
                {/* View recipie */}
                <td>
                  <div>
                    <Link to={`/recipie-item/${data.id}`}>
                      <button className="btn btn-ghost">
                        <img src={view} alt="view-icon" className="" />
                      </button>
                    </Link>
                  </div>
                </td>
                {/* Delete recipie */}
                <td>
                  <button
                    className="btn btn-ghost"
                    onClick={() => handleDelete(data.id)}
                  >
                    <img src={close} alt="close-icon" className="" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WishlistTable;
