import React from "react";
const Qualitie = ({ color, name, _id }) => {
  const getQualityClass = (color) => {
    let classes = "badge bg-";
    return (classes += color);
  };
  return (
    <span key={_id} className={"m-1 " + getQualityClass(color)}>
      {name}
    </span>
  );
};

export default Qualitie;
