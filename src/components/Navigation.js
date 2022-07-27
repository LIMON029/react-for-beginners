import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css"

function Navigation() {
    const [url, setUrl] = useState("/");
    const [lastUrl, setLastUrl] = useState("/");

    function onClick() {
        let temp = window.location.pathname;
        setUrl("/movie/" + temp.split("/")[2]);
    }

    function onClickA() {
        let temp = window.location.pathname;
        if(lastUrl !== "/") {
            setUrl(lastUrl);
        } else {
            setUrl("/movie/" + temp.split("/")[2]);
        }
        setLastUrl("/movie/" + temp.split("/")[2]);
    }
    
    return (
        <div className="nav">
            <Link to="/" onClick={onClick}>Home</Link>
            <Link to={url} onClick={onClickA}>About</Link>
        </div>
    );
}

export default Navigation;