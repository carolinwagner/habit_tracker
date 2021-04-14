import React from "react";

export default function Exercise(props) {
  const classListUnselected =
    "bg-gray-300 p-6 flex items-center rounded-md shadow-xl cursor-pointer mr-4";
  const classListSelected =
    classListUnselected + " border-4 border-green-400 cursor-pointer";

  return (
    <div
      className={props.isSelected ? classListSelected : classListUnselected}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
}
