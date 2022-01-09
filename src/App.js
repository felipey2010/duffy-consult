import { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <Navbar page={page} setPage={setPage} />
      <div className="main-page">
        {page === 0 && <Home />}
        {page === 1 && <About />}
        {page === 2 && <Service />}
        {page === 3 && <Resume />}
        {page === 4 && <Portfolio />}
        {page === 5 && <Contact />}
      </div>
    </div>
  );
}

export default App;
