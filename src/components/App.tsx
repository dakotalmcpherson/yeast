import Navbar from "./Navbar";
import Events from "./Events";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
