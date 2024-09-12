import "./SearchBar.css";
import { Link } from "react-router-dom";

function SearchBar(){
    return(
        <>
            <div className="search-wrapper">
                <div className="search-bar-container">
                    <div className="back-arrow">
                        <span>X</span>
                    </div>
                    <div className="messages">
                        <span>A</span>
                    </div>
                    <div className="search-area">
                        <span>Search</span>
                    </div>
                    <div className="notifications">
                        <span>N</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar;