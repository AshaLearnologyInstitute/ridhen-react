import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  

const[Male,setMale]=useState("Male")
  return (
    <>

      <h1>{Male}</h1>
      <button onClick={()=>setMale("Female")}>change</button>
    </>
  )
}

export default App;

