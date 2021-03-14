import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./style.css";

export default function MovieForm() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  /**il faut une route différente, cf route du back */
  const submitReview = () => {
    Axios.post("http://localhost:3001/");
  };

  return (
    <div>
      <p>Movie form</p>
      <div className="movieForm">
        <label>Movie Name:</label>
        <input
          type="text"
          name="movieName"
          onChange={e => {
            setMovieName(e.target.value);
          }}
          placeholder="type a name"
        />
        <label>Movie review:</label>
        <input
          type="text"
          name="review"
          onChange={e => {
            setReview(e.target.value);
          }}
          placeholder="type a review"
        />
      </div>
      <div className="buttonForm">
        <button onClick={submitReview}>Submit</button>
      </div>
    </div>
  );
}
