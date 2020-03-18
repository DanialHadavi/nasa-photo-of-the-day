import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import axios from "axios";
import "./App.css";

function App() {
  const [nasa, setNasa] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response);
        setNasa(response.data);
      })
      .catch(error => {
        console.log("there is an error", error);
      });
  }, []);
  return (
    <div className="App">
      <h1>NASA APIs</h1>
      <Grid
        date={nasa.date}
        explanation={nasa.explanation}
        src={nasa.url}
        media_type={nasa.media_type}
        hdurl={nasa.hdurl}
        title={nasa.title}
      />
    </div>
  );
}

export default App;
