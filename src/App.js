import About from "./components/About/About";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Title from "./components/Title/Title";
import Testimonials from "./components/Testimonial/Testimonials";
import Members from "./components/Members/Members";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <Title subTitle='Gallery' title='Some Glimpse'/>
        <Gallery/>
        <About/>
        <Title subTitle='Members' title='Executive Board 2023/20204'/>
        <Members/>
        <Title subTitle='Testimonials' title='What Student Saya'/>
      <Testimonials/>
      </div>

     
    </div>
  );
}

export default App;
