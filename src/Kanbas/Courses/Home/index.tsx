
import React from "react";
import ModuleList from "../Modules/List";
import SideBar from "./SideBar";

function Home() {
  return (
<div className="d-flex">
    <div className="container">
      <div className="row">
        <div className="col-xl-9">
          <h2>Home</h2>
          <ModuleList />
        </div>
        <div className="col-xl-3">
          <SideBar />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;



