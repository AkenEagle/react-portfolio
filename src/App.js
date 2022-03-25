import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { AboutMe } from "./components/AboutMe";
import { MyWork } from "./components/MyWork";
import "./App.css";

function App() {
  return (
    <main>
      <Navbar />
      <Banner />
      <AboutMe />
      <MyWork />
    </main>
  );
}

export default App;
