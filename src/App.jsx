import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contact from "./screens/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <div>Sidebar</div> */}
        <Routes>
          <Route path="/" exact element={<div>
            <h1>Home</h1>
            <button 
              onClick={() => {
                window.location.href = '/contact';
              }}
            >Contato</button>
          </div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;