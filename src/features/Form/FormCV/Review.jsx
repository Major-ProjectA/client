import React from "react";

function Review(values) {
  return (
    <div style={{ textAlign: "left" }}>
      <p>
        <b>Name:</b> {values.firstname}
      </p>
      <p>
        <b>Surname:</b> {values.lastname}
      </p>
      <p>
        <b>Email:</b> {values.email}
      </p>
      <p>
        <b>Phone:</b> {values.phone}
      </p>
    </div>
  );
}

export default Review;