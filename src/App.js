import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Signup from "./Component/Signup";
import Login from "./Component/Login"
function App() {
  return (
    <>
      <main className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
