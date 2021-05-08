import React from "react";

export default function Avatar(props) {
  const classListUnselected =
    "box-content rounded-full w-20 h-20 shadow-xl cursor-pointer border-4 border-green-400 border-opacity-0";
  const classListSelected = classListUnselected + " border-opacity-100";

  return (
    <div className="flex p-2 items-center justify-center">
      <img
        src={props.image}
        className={props.isSelected ? classListSelected : classListUnselected}
        onClick={props.onClick}
      />
    </div>
  );
}
