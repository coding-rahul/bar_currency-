import './App.css';
import Form from "./components/Form"
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bardata from './components/Bardata';

export const Contextdata = createContext();

function App() {
  const [data, updatedata] = useState("");

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/4eb8268eef5c2c5d27367c0e/latest/USD")
      .then(response => response.json())
      .then(Apidata => updatedata(Apidata.conversion_rates))

  }, []);

  return (
    <>
      <Contextdata.Provider value={data}>
        <h1 className=' text-red-400 text-center text-5xl mt-3'>Welcome to Home Page</h1>
        <div className='grid '>
          <BrowserRouter>
            <Form />
            <Routes>
              <Route exact path="/bar" element={<Bardata />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Contextdata.Provider>
    </>
  )
}

export default App;

