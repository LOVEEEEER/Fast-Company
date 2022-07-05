import React, { useState } from "react";
import api from "../api";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };
  const renderPhrase = (number) => {
    let name = "человек";
    let userActionText = "тусанет";
    if (number < 5 && number > 1) {
      name += "a";
      userActionText = "тусанут";
    }
    return (
      <span className="badge bg-primary fs-4 m-1">
        {number} {name} {userActionText} с тобой сегодня
      </span>
    );
  };
  const getQualityClass = (color) => {
    let classes = "badge bg-";
    return (classes += color);
  };

  if (!users.length) {
    return (
      <span className="badge bg-danger fs-4 m-1">Никто с тобой не тусанет</span>
    );
  }

  return (
    <>
      {renderPhrase(users.length)}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((quality) => (
                  <span
                    key={quality._id}
                    className={"m-1 " + getQualityClass(quality.color)}
                  >
                    {quality.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
