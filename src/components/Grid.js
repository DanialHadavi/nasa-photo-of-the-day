import React from "react";

function Grid(props) {
  return (
    <>
      <div className="card NASA">
        :
        <img
          className="grid-img-top"
          src={props.hdurl}
          alt="view of anticrepuscular Rays over Florida"
          width="420"
          height="315"
        ></img>
        <h1 className="grid-title">{props.title}</h1>
        <p className="grid-date">Date: {props.date}</p>
        <p className="grid-text">Description: {props.explanation}</p>
      </div>
    </>
  );
}
export default Grid;
