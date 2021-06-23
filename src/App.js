import React from "react";

/////// CSS IMPORT HERE//////
import "./App.css";
import "./components/navbar/Nav.css"
import "./components/banner/Banner.css"
import "./components/plancard/Plancard.css"

/////// COMPONENTS IMPORT HERE//////
import Banner from "./components/banner/Banner";
import Nav from "./components/navbar/Nav";
import Services from "./components/Services";
import About from "./components/ourWorks/works";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Plancard from "./components/plancard/Plancard";
import ProgressBar from "./components/creativ/ProgressBar"
// import Carousel from "./components/Carousel/CarouselContainer"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <div>
      

      <Router>
       <Nav />
       
       <section>
        <Routes>
          <Route exact path="/home" element={<About/>}/>

        <Route path="/Services" element={<Services/>}/>
        </Routes>
        </section>
      </Router>


      <Banner />
      <Plancard/>
      
      {/* <Services /> */}
      <About />
      <ProgressBar/>
      {/* <Carousel/> */}

      
      
      <Prices />
      <Contact />
      

    </div>
  );
}

export default App;
