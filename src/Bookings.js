import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={(searchVal) => console.info("TO DO!", searchVal)} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
