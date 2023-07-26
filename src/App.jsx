import "./App.css";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Services } from "./Pages/Services";
import { Products } from "./Pages/Products";
import { SignUp } from "./Pages/SignUp";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
