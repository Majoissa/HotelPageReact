import React from "react";
import moment from "moment";

const ClientData = (props) => {
  return (
    <tbody>
      {props.clients.map((client) => {
        const checkInDate = moment(client.checkInDate);
        const checkOutDate = moment(client.checkOutDate);
        const numberOfNights = checkOutDate.diff(checkInDate, "days");

        return (
          <tr key={client.id}>
            <th scope="row">{client.id}</th>
            <td>{client.firstName}</td>
            <td>{client.surname}</td>
            <td>{client.email}</td>
            <td>{client.roomId}</td>
            <td>{client.checkInDate}</td>
            <td>{client.checkOutDate}</td>
            <td>{numberOfNights}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ClientData;
