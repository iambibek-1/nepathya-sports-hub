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

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <Title subTitle="Gallery" title="Some Glimpse" />
        <Gallery />
        <About />
        <Title subTitle="Members" title="Executive Board 2023/2024" />
        <Members />
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Lets get connected" />
        <Contact />
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
