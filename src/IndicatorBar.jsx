import React from "react";

export default function IndicatorBar({ blocks = 14, values }) {
  const colors = [
    "bg-gray-200",
    "bg-green-200",
    "bg-green-400",
    "bg-green-700",
  ];
  const valuesSum = values.reduce((a, b) => a + b, 0);
  const zeroPaddingLength = blocks - valuesSum;
  const zeroArray = new Array(zeroPaddingLength).fill(0);
  const paddedValues = [...values, ...zeroArray];
  console.log(paddedValues);
  return (
    <div className="flex h-12 mb-6">
      {paddedValues.map((value, index) => {
        return (
          <div
            style={{ flex: value === 0 ? 1 : value }}
            className={`flex items-center justify-center ${colors[value]} ${
              index === 0 ? "rounded-l-md" : ""
            } ${index === paddedValues.length - 1 ? "rounded-r-md" : ""}
            `}
          >
            {value === 0 ? "" : value}
          </div>
        );
      })}
    </div>
  );
}
