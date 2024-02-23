import React from "react";
import { HashRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import Nav from "./Nav";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
        <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;