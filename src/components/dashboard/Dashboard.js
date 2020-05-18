import React from "react"
import Nav from "./Nav"
import MainContainer from "./MainContainer"
import "./dashboard.css"

const Dashboard = () => {
    
    return(
        <div className="dashboard">
            <Nav />
            <MainContainer />
        </div>
    )
}

export default Dashboard