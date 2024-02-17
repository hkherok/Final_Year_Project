import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./component/home/Home"
import Navbar from "./component/Navbar/Navbar"
import Footer from "./component/Footer/Footer"
import Profile from "./component/user/profile/Profile"
import Signin from "./component/signin/Signin"
import Signup from "./component/signup/Signup"
import Blog from "./component/blog/Blog"
import Contact from "./component/contact/Contact"
import Desease from "./component/desease/Desease"
import Attention from "./component/Attention/Attention"
import Dashboard from "./component/user/dashboard/Dashboard"
import Calculation from "./component/calculation/Calculation"
import ErrorPage from "./component/ErrorPage"
import History from "./component/history/History"
import Weather from "./component/weather/Weather"



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/Dashboard" exact element={<Dashboard />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/history" exact element={<History />} />
          <Route path="/desease" exact element={<Desease />} />
          <Route path="/weather" exact element={<Weather />} />
          <Route path="/attention" exact element={<Attention />} />
          <Route path="/calculation" exact element={<Calculation />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" exact element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
