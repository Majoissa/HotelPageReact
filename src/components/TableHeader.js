import React from "react";

const TableHeader = (props) => {
  return (
    <tr>
      {props.theader.map((item, index) => (
        <th key={index}>{item}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
