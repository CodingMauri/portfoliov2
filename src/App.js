import "./App.css";
import { Hero } from "./Components/Hero";
import { Projects } from "./Components/Projects";
import { About } from "./Components/About";
import projects from "./data";
function App() {
  return (
    <div className="w-full h-screen bg-[#141414]">
      <Hero />
      <About />



      <h1 className = "text-white font-banner text-4xl bg-[#141414]  pt-10 pl-10 "> My Works </h1>
      {projects.map((project, index) => {
        return (
        
          

            <Projects
              key={project.id}
              project={project}
              isLeft={index % 2 == 0} //Alternates left right based on index
            />
        
        );
      })}
    </div>
  );
}

export default App;
