import React from "react";
import Heading from "./components/Heading";

import Bookings from "./Bookings";
import "./App.css";
import TouristsInfoCards from "./components/TouristsInfoCards";
import Foot from "./components/Foot";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristsInfoCards />
      <Bookings />
      <Restaurant />
      <Foot
        footer={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]}
      />
    </div>
  );
};

export default App;
