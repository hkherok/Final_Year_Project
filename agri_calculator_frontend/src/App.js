import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/user/profile/Profile";
import Signin from "./component/signin/Signin";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/signin" exact element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
