import { Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Magazine from "./components/Magazine";
import Portfolio from "./components/Portfolio";
import Poster from "./components/Poster";
import Novels from "./components/Novels";
import Broachers from "./components/Broachers";
import Billing from "./components/Billing";
import Whatsapp from "./components/Whatsapp";
import Login from "./components/Login";
import Logout from "./components/Logout";
function App() {
  return (
    <div>
      <Login />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/Whatsapp" element={<Whatsapp />} />
        <Route path="/Magazine" element={<Magazine />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Poster" element={<Poster />} />
        <Route path="/Novels" element={<Novels />} />
        <Route path="/Broachers" element={<Broachers />} />
        <Route path="/Login" element={<Login />} />
        <Route path={"/Logout"} element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
