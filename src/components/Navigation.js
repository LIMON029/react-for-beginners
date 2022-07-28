import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/Navigation.css"

function Navigation() {
    const [url, setUrl] = useState("/");
    const [lastUrl, setLastUrl] = useState("/");
    let location = useLocation().pathname;
    let navigate = useNavigate();

    useEffect(() => {
        if(location !== "/") {
            setUrl(lastUrl);
            setLastUrl(location);
        } else {
            setUrl(lastUrl);
        }
    }, [location])
    
    return (
        <div className="nav">
            <Link to="/" className="nav_btn nav_home">Home</Link>
            <hr className="divisionLine" />
            <p className="nav_btn nav_last" onClick={() => {navigate(url);}}>Last</p>
        </div>
    );
}

export default Navigation;