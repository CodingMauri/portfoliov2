import './App.css';
import About from './Components/About';
import {Hero} from "./Components/Hero"
import Nav from './Components/Nav';
function App() {
  return (
    <div className="w-full h-screen bg-[#141414]">
      <Nav />
      <Hero />
      <About />

    </div>
  );
}

export default App;
