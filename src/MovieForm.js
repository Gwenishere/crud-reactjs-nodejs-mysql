import React from "react";
import "./style.css";

export default function MovieForm() {
  return (
    <div>
      <p>Movie form</p>
      <div className="movieForm">
        <label>Movie Name:</label>
        <input type="text"
        name="movieName"
        placeholder="type a name"/>
        <label>Movie review:</label>
        <input type="text"
        name="review"
        placeholder="type a review"/>
      </div>
      <div className='buttonForm'>
      <button>Submit</button>
      </div>
    </div>
  );
}
