import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { AboutMe } from "./components/AboutMe";
import { MyWork } from "./components/MyWork";
import { ContactMe } from "./components/ContactMe";
import "./App.css";

function App() {
  return (
    <main>
      <Navbar />
      <Banner />
      <AboutMe />
      <MyWork />
      <ContactMe />
    </main>
  );
}

export default App;
