import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
