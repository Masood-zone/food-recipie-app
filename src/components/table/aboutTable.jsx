import React from "react";

function AboutTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th className="text-lg">Name</th>
            <th className="text-lg">Index Number</th>
            <th className="text-lg">Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <tr key={member.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={member.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{member.name}</div>
                    <span className="badge badge-ghost badge-sm">
                      {member.position}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div>{member.index_number}</div>
              </td>
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
