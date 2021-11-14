import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "../contact/Contact";
import { NavBar } from "../navBar/NavBar";
import { Main } from "../main/Main";
import { Footer } from "../footer/Footer";
import "../index.css"



function App() {
  return (
    <>
      <Router>
        <div className="flex-parent">
          <div className="flex=child">
          <NavBar />
          <Routes>
            <Route path="/" element={<Main/> } /> 
            <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<>
                <h3>...</h3>
                <h2>Lost? please go to one of the options above.</h2>
            </>} />
          </Routes>
          </div>
          <div className="flex-child">
          <Footer/>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
