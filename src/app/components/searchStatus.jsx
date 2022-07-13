import React from "react";

const SearchStatus = ({ length }) => {
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

  return renderPhrase(length);
};

export default SearchStatus;
