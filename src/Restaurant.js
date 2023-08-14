import React, { useState } from "react";
import RestaurantButton from "./components/RestaurantButton";
import Order from "./components/Order";

const Restaurant = () => {
  const [pizzaOrders, setPizzaOrders] = useState(0);
  const [saladOrders, setSaladOrders] = useState(0);
  const [cakeOrders, setCakeOrders] = useState(0);

  const orderPizza = () => {
    setPizzaOrders(pizzaOrders + 1);
  };

  const orderSalad = () => {
    setSaladOrders(saladOrders + 1);
  };

  const orderCake = () => {
    setCakeOrders(cakeOrders + 1);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" orders={pizzaOrders} orderOne={orderPizza} />
        <Order orderType="Salads" orders={saladOrders} orderOne={orderSalad} />
        <Order
          orderType="Chocolate cake"
          orders={cakeOrders}
          orderOne={orderCake}
        />
      </ul>
    </div>
  );
};

export default Restaurant;
