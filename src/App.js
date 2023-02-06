import axios from "axios";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./Routes/Home";
import Signin from "./Routes/Signin";
import Signup from "./Routes/Signup";



function App() {


  return (
    <div className="text-white">
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup /> }/>
     </Routes>
    </div>
  );
  
}

export default App;

