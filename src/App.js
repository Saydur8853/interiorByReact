import React from "react";

/////// CSS IMPORT HERE//////
import "./App.css";
import "./components/navbar/Nav.css"
import "./components/banner/Banner.css"
import "./components/plancard/Plancard.css"
import "./components/Testimonial_area/Testimonial_area.css"

/////// COMPONENTS IMPORT HERE//////
import Banner from "./components/banner/Banner";
import Nav from "./components/navbar/Nav";
import Services from "./components/Services";
import About from "./components/ourWorks/works";
import QueryArea from "./components/query_area/Query_area";
import Contact from "./components/Contact";
import Plancard from "./components/plancard/Plancard";
import ProgressBar from "./components/creativ/ProgressBar"
import Testimonials  from "./components/Testimonial_area/Testimonial_area"
import Instagram from './components/instagram_area/Instagram'

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

      <div className= "Testimonials_Container">
        <Testimonials />
      </div>

      <Instagram/>

      
      
      <QueryArea/>
      <Contact />
      

    </div>
  );
}

export default App;
