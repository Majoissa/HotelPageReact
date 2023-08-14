import React from "react";
import TableHeader from "./TableHeader";
import ClientData from "./ClientData";

const SearchResults = (props) => {
  return (
    <table class="table">
      <thead class="thead-dark">
        <TableHeader
          theader={[
            "Id",
            "First name",
            "Surname",
            "E-mail",
            "Room-id",
            "Check-in date",
            "Check-out date",
            "Number of nights",
          ]}
        />
      </thead>
      <ClientData clients={props.bookings} />
    </table>
  );
};

export default SearchResults;
