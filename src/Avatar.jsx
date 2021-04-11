import React from "react";

export default function Avatar(props) {
  const classListUnselected =
    "rounded-full w-20 h-20 shadow-xl mr-4 cursor-pointer";
  const classListSelected = classListUnselected + " border-4 border-green-400";

  return (
    <img
      src={props.image}
      className={props.isSelected ? classListSelected : classListUnselected}
      onClick={props.onClick}
    />
  );
}
