import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import axios from "axios";
import "./App.css";
import styled from "styled-components";

const NasaButton = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px 40px;

  border-radius: 5px;
  margin: 5px 10px;
  background: ${props => (props.primary ? "#fff" : "black")};
  color: ${props => (props.primary ? "black" : "#fff")};
  &:hover {
    background: ${props => (props.primary ? "black" : "#fff")};
    color: ${props => (props.primary ? "#fff" : "black")};
  }
`;
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
      <NasaButton as="a" href="https://api.nasa.gov/#apod">
        Website
      </NasaButton>
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
