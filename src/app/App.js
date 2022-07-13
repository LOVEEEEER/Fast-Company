import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (id) => {
    const indexOfChangedBookMarkUser = users.findIndex(
      (user) => user._id === id
    );
    users[indexOfChangedBookMarkUser].bookmark =
      !users[indexOfChangedBookMarkUser].bookmark;
    setUsers([...users]);
  };
  if (!users.length) {
    return (
      <span className="badge bg-danger fs-4 m-1">Никто с тобой не тусанет</span>
    );
  }
  return (
    <div>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
      />
    </div>
  );
};

export default App;
