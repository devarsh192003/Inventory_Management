import "./App.css";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AddProduct from "./pages/addProduct";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addProduct" element={<AddProduct/>} />
      </Routes>
    </>
  );
}

export default App;