import React from "react";
import RestaurantButton from "./RestaurantButton";

const Order = (props) => {
  return (
    <li>
      {props.orderType} : {props.orders}
      <RestaurantButton onClick={props.orderOne} />
    </li>
  );
};

export default Order;
