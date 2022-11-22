// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
