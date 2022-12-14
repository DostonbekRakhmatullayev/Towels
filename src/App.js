import { Routes, Route } from "react-router-dom";

import "./App.scss";

//page
import Home from "./Page/Home";
import Contact from "./Page/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
