import React from "react";

const BookMark = ({ status, ...rest }) => {
  return (
    <button>
      <i
        className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}
        onClick={() => rest.onToggleBookMark(rest._id)}
      ></i>
    </button>
  );
};

export default BookMark;
