import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./styles/reset.css";
import "./styles/App.css";
import "./styles/Responsive.css";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import Digital from "./pages/Digital";
import Living from "./pages/Living";
import Fashion from "./pages/Fashion";

import PrivateRoute from "./Route/PrivateRoute";

import db from "./db.json";

function App() {
  const [authentication, setAuthentication] = useState(false);

  const Products = Object.keys(db);

  useEffect(() => {
    console.log("authentication", authentication);
  }, [authentication]);

  return (
    <div className="App">
      <Header
        setAuthentication={setAuthentication}
        authentication={authentication}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Login"
          element={<Login setAuthentication={setAuthentication} />}
        />
        <Route path="/ProductAll" element={<ProductAll />} />
        <Route path="/Digital" element={<Digital />} />
        <Route path="/Living" element={<Living />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route
          path="/:Products/:id"
          element={<PrivateRoute authentication={authentication} />}
        />
        <Route
          path="/:Digital/:id"
          element={<PrivateRoute authentication={authentication} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
