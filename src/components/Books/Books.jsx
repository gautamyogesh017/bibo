import React from "react";
import book1 from "/src/images/1.jpg";
import "./Books.css";

const Books = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>
            Atomic Habits
            <img src={book1} />
          </h3>
          <h1>$300</h1>
        </div>
      </div>
    </div>
  );
};

export default Books;
