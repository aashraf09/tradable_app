import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Creators from "./pages/creators/Creators";
import Copiers from "./pages/copiers/Copiers";
import LiveChart from "./pages/live-chart/LiveChart";
import Pricing from "./pages/pricing/Pricing";
import ContentHub from "./pages/content-hub/ContentHub";
import Docs from "./pages/docs/Docs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/creators" element={<Creators />}></Route>
        <Route path="/copiers" element={<Copiers />}></Route>
        <Route path="/live-charts" element={<LiveChart />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/content-hub" element={<ContentHub />}></Route>
        <Route path="/docs" element={<Docs />}></Route>
        <Route path="" element={<p>Not Found</p>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
