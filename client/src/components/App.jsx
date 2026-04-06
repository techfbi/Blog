import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Nav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
