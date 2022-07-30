import "./assets/style/App.css";
import About from "./components/About/About";
import  ApartmentDetail  from "./components/ApartmentDetail/ApartmentDetail";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Explore from "./components/Explore/Explore";

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ApartmentDetail />} />
          <Route path="/flat-trade" element={<ApartmentDetail />} />
          <Route path="/home" element={<ApartmentDetail />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
