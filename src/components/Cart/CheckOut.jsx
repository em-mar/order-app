import React from "react";
import classes from "./CheckOut.module.css";

function CheckOut(props) {
    function confirmHandler(e) {
        e.preventDefault();
    }
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button>Confirm</button>
    </form>
  );
}
export default CheckOut;
