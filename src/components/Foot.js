import React from "react";

const Foot = (props) => {
  return (
    <footer>
      <ul>
        {props.footer.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Foot;
