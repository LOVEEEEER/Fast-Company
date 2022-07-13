import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
const User = ({ user, onDelete, ...rest }) => {
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((quality) => (
          <Qualitie
            key={quality._id}
            color={quality.color}
            name={quality.name}
            _id={quality._id}
          />
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <BookMark
          status={user.bookmark}
          _id={user._id}
          onToggleBookMark={rest.onToggleBookMark}
        />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(user._id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
