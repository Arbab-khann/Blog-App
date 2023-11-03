import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Hollywood from "./Hollywood";
import Fitness from "./Fitness";
import Food from "./Food";
import Technology from "./News";
import Storedata from "./Store";
import Dynamiccompo from "./Dynamiccompo";

function Routecompo() {
  return (
    <div>
      <BrowserRouter>
        {/* <div className="nav">
          <NavLink className="nav-text" to={"/"}>
            Home
          </NavLink>
          <NavLink className="nav-text" to={"/bollywood"}>
            Bollywood
          </NavLink>
          <NavLink className="nav-text" to={"/hollywood"}>
            Hollywood
          </NavLink>
          <NavLink className="nav-text" to={"/fitness"}>
            Fitness
          </NavLink>
          <NavLink className="nav-text" to={"/food"}>
            Food
          </NavLink>
          <NavLink className="nav-text" to={"technology"}>
            Technology
          </NavLink>
        </div> */}
        <hr />
        <Storedata>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/details/:id" element={<Dynamiccompo />} />
          </Routes>
        </Storedata>
      </BrowserRouter>
    </div>
  );
}

export default Routecompo;
