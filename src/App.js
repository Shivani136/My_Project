import logo from './logo.svg';
// import './App.css';
import About from './Component/About';
import Navbar from "./Component/Navbar";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
 //import Skills from "./Component/Skills";
//import Testimonials from "./Component/Testimonials";

function App() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
      <About />
     <Projects />
       {/* <Skills />
       <Testimonials />  */}
      <Contact />
      <h1>This is demo</h1>
    </main>
  );
}

export default App;


  // <div className="App">
    //   <h1>shivu</h1>
    //   <About />
    // </div>