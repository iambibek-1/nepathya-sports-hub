import About from "./components/About/About";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Title from "./components/Title/Title";
import Testimonials from "./components/Testimonial/Testimonials";
import Members from "./components/Members/Members";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Video from "./components/Videoabt/Video";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Loading from "./components/Loading/Loading";

function App() {
  let [playState,setplayState]= useState(false);


  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <Title subTitle="Gallery" title="Some Glimpse" />
          
        <Gallery />
        {/* <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router> */}
       
        
        <About setplayState={setplayState}/>
        <Title subTitle="Members" title="Executive Board 2024/2025" />
        <Members />
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Lets get connected" />
        <Contact />
      </div>
      <hr/>
      <Footer/>
      <Video playState={playState} setplayState={setplayState}/>
    </div>
  );
}

export default App;
