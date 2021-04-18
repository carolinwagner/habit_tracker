import React from "react";

export default function IndicatorBar(props) {
  const colors = [
    "bg-gray-200",
    "bg-green-200",
    "bg-green-400",
    "bg-green-700",
  ];
  return (
    <div className="flex h-12 mb-6">
      {props.values.map((value, index) => {
        return (
          <div
            style={{ flex: 1 }}
            className={`flex items-center justify-center ${colors[value]} ${
              index === 0 ? "rounded-l-md" : ""
            } ${index === props.values.length - 1 ? "rounded-r-md" : ""}
            `}
          >
            {value}
          </div>
        );
      })}
      {/* <div
        style={{ flex: 2 }}
        className="flex items-center justify-center bg-green-400"
      >
        2
      </div>
      <div
        style={{ flex: 5 }}
        className="flex items-center justify-center bg-green-700"
      >
        5
      </div>
      <div
        style={{ flex: 1 }}
        className="flex items-center justify-center bg-green-400 rounded-r-md"
      >
        1
      </div> */}
    </div>
  );
}
