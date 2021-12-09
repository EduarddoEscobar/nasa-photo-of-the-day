import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import NasaImg from "./Components/MainContent/NasaImg";
import BottomBar from "./Components/BottomBar/BottomBar"

function App() {

  
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=s23R5BwJsscL0lsGKi26O6daK0t537QRXwQJwTHZ`)
      .then(res => {
        setNasaData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      {nasaData ?
        <>
          <TopBar title={nasaData.title} date={nasaData.date} />
          <NasaImg title={nasaData.title} src={nasaData.hdurl} explanation={nasaData.explanation}/>
          <BottomBar copyright={nasaData.copyright}/>
        </> :
        <>
          <h1>Waiting for the data to come through</h1>
        </>
      }
    </div>
  );
}

export default App;
