import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contact from "./screens/Contact";
import Home from "./screens/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;