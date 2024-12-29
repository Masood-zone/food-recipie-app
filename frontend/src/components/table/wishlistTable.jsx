import React from "react";
import { close, view } from "../../assets/svgs";
import { Link } from "react-router-dom";

function WishlistTable({ data, handleDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-lg max-sm:text-sm">Item</th>
            <th className="text-lg max-sm:text-sm">Item Name</th>
            <th className="text-lg max-sm:text-sm">Description</th>
            <th className="text-lg max-sm:text-sm">Check Recipie</th>
            <th className="text-lg max-sm:text-sm">Remove</th>
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
                      <div className="font-bold max-sm:font-medium max-sm:text-sm">
                        {data.name}
                      </div>
                    </div>
                  </div>
                </td>
                {/* Description */}
                <td>
                  <p className="text-xs">{data.description}</p>
                </td>
                {/* View recipie */}
                <td>
                  <div>
                    <Link to={`/recipie-item/${data.id}`}>
                      <button className="btn btn-ghost">
                        <img
                          src={view}
                          alt="view-icon"
                          className="max-[599px]:w-10"
                        />
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
                    <img
                      src={close}
                      alt="close-icon"
                      className="max-[399px]:w-10"
                    />
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
