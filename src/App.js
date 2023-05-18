import { Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Magazine from "./components/Magazine";
import Portfolio from "./components/Portfolio";
import Poster from "./components/Poster";
import Novels from "./components/Novels";
import Broachers from "./components/Broachers";
import Billing from "./components/Billing";
import Whatsapp from "./components/Whatsapp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import Paydet from "./components/Paydet";
import Paymentsmethod from "./components/Paymentsmethod";
import Otp from "./components/Otp";
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
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Paydet" element={<Paydet />} />
        <Route path="/Paymentsmethod" element={<Paymentsmethod />} />
        <Route path="/Otp" element={<Otp />} />
      </Routes>
    </div>
  );
}

export default App;
