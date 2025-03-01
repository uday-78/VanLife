import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import VanList from "./Pages/Vans/VanList";
import VanDetails from "./Pages/Vans/VanDetails";
import Layout from "./components/Layout";
import DashBoard from "./Pages/Host/DashBoard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import "./server";
import HostVans from "./components/HostVans";
import HostVanDetail from "./components/HostVanDetail";
import HostVanDetail_Description from "./components/HostVanDetail_Description";
import HostVanDetail_Photos from "./components/HostVanDetail_Photos";
import HostVanDetail_Pricing from "./components/HostVanDetail_Pricing";
import NotFound from "./components/NotFound";


const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="vans" element={<VanList />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
            <Route index element={<HostVanDetail_Description/>}/>
            <Route path="pricing" element={<HostVanDetail_Pricing/>}/>
            <Route path="photo" element={<HostVanDetail_Photos/>}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);
