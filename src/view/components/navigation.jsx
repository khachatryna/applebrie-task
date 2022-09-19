import React, {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import routs from "../../routing/routs";

function Navigation() {
    const location = useLocation();
    const [activeLocation, setActiveLocation] = useState("")
    useEffect(() => {
        if (location && location.pathname) {

            const path = location.pathname.split("/")
            setActiveLocation(path[1] ? `/${path[1]}` : "/")
        }
    },[location])

    return (
        <nav className="navigation">
            <ul className="navigation-list">
                {
                    routs.map(route => (
                        <li className="navigation-list-item" key={route.id}>
                            <NavLink to={route.path} className={() => `${activeLocation === route.path ? "active" : ""}`}>
                                <div className="icon">{route.icon}</div>
                                {route.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navigation