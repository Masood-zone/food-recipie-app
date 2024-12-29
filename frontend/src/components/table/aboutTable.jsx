import React from "react";

function AboutTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="hidden max-sm:text-sm max-sm:block">Profile</th>
            <th className="text-lg max-sm:text-sm">Name</th>
            <th className="text-lg max-sm:text-sm">Index Number</th>
            <th className="text-lg max-sm:text-sm">Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <tr key={member.id}>
              {/* Profile mobile*/}
              <td className="hidden max-sm:block">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={member.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              {/* Name and profile  */}
              <td className="pl-0">
                <div className="flex items-center gap-3">
                  <div className="avatar max-sm:hidden">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={member.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="font-bold max-sm:font-medium max-sm:text-xs ">
                      {member.name}
                    </p>
                    <span className="badge badge-ghost badge-sm max-sm:my-1">
                      {member.position}
                    </span>
                  </div>
                </div>
              </td>
              {/* Index Number */}
              <td>
                <div>{member.index_number}</div>
              </td>
              {/* Phone Number */}
              <td>
                <div>{member.gender}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AboutTable;
