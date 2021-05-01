import React from "react";

export default function IndicatorBar({ blocks = 14, values, id }) {
  const colors = [
    "bg-gray-200",
    "bg-green-200",
    "bg-green-400",
    "bg-green-700",
  ];
  const zeroPaddingLength = blocks - values.length;
  const zeroArray = new Array(zeroPaddingLength).fill(0);
  const paddedValues = [...values, ...zeroArray];
  return (
    <div className="flex h-12 mb-6">
      {paddedValues.map((value, index) => {
        return (
          <div
            key={`bar${index}${value}${id}`}
            style={{ flex: 1 }}
            className={`flex items-center justify-center ${colors[value]} ${
              index === 0 ? "rounded-l-md" : ""
            } ${index === paddedValues.length - 1 ? "rounded-r-md" : ""}
            `}
          >
            {value === 0 ? "" : 1}
          </div>
        );
      })}
    </div>
  );
}
