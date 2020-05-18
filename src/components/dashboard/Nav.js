import React, {useState} from "react"
import "./dashboard.css"

const Nav = () => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (event) => {
        console.log(event.target.value);
        setUserInput(event.target.value)
      };

    return(
        <div className="Nav">
            <p className="nav-header" >Facebook Explorer</p>

            <form className="master-search-container">
                <div className="master-search-field-container" >
                    <h5>Master search</h5>
                    <input className="master-search" type="text" value={userInput} onChange={handleChange} />
                </div>
                <br/>

                <input className="nav-checkbox" type="checkbox" />
                <p>Filter by date:</p>
                <input className="nav-checkbox" type="checkbox" />
                <p>Filter by length:</p>
                <input className="nav-checkbox" type="checkbox" />
                <p>Filter by sub-category:</p>
            </form>

        </div>
    )
}

export default Nav;