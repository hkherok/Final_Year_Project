import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Profile from "./component/user/profile/Profile";
import Signin from "./component/signin/Signin";
import Blog from "./component/blog/Blog";
import Desease from "./component/desease/Desease";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/desease" exact element={<Desease />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
