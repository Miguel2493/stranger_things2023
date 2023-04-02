import { Route, Routes } from "react-router-dom";
import { React } from "react";
import logo from './logo.svg';
import './App.css';
import { CreateUser, Posts, Home } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/users/register" element={<CreateUser />}></Route>
      </Routes>
    </div>


  );
}

export default App;
