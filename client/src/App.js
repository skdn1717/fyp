import React from "react";
import './App.css'
import Explorer from "./explorer";
import TopBar from "./topbar";
import RouteSet from "./route";
import Flow from "./flow";
import { useState } from 'react';

function MyComponent() {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
    <div className="container">
    <TopBar />
    <div className="bar">
    <div className="sidebar">
    <Explorer setShowDetails={setShowDetails}/>
    </div>
    <div className="content">
      {showDetails && (
        <>
        <RouteSet />
        <Flow />
        <div className="div-59">SAVE</div>
        </>
      )}
    </div>
    </div>
    </div>
    </>
  );
}

export default MyComponent;
