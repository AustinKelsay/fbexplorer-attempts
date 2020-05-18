import React from "react";
import Sidebar from "./Sidebar"
import DataContainer from "./DataContainer";
import "./dashboard.css"

const MainContainer = () => {
    
    return(
        <div className="main-container">
            <Sidebar />
            <DataContainer />
        </div>
    )
}

export default MainContainer;