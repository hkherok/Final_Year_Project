import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Profile from "./component/user/profile/Profile";
import Signin from "./component/signin/Signin";
import Signup from "./component/signup/Signup";
import Blog from "./component/blog/Blog";
import Desease from "./component/desease/Desease";
import Attention from "./component/Attention/Attention";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/desease" exact element={<Desease />} />
          <Route path="/attention" exact element={<Attention />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
