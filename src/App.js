import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Signup } from "./Pages/Signup";
import { Login } from "./Pages/Login";
import { Forgot } from "./Pages/Forgot";
import { Confirm } from "./Pages/Confirm";
import { Cart } from "./Pages/Cart";
import { Profile } from "./Pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Navbar /> <Sidebar />
                <Home />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route
            path="/cart"
            element={
              <>
                <Navbar /> <Sidebar />
                <Cart />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbar /> <Sidebar />
                <Profile />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
