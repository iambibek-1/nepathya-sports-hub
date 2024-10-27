import About from "./components/About/About";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <Title subTitle='Gallery' title='Some Glimpse'/>
        <Gallery/>
        <About/>
      </div>

     
    </div>
  );
}

export default App;
