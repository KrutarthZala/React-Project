import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Match from "./Match";
import MatchDetails from "./MatchDetails";
import AddMatch from "./AddMatch";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/match" element={<Match />}></Route>
          <Route path="/matchdetails/:id" element={<MatchDetails />}></Route>
          <Route path="/addmatch" element={<AddMatch />}></Route>
          <Route path="/matchdetails/edit/:id" element={<AddMatch />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
