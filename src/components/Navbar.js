import React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'



const Navbar = () => {

    const liStyle = {
        marginRight: "2rem",
        cursor: "pointer"
    }

    const ulStyle = {
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
        marginBottom: "2rem"
    }

    return (
        <ul style={ulStyle}>
            <li style={liStyle}>
                <Link to="/accent">Accent Page</Link>
            </li>

            <li style={liStyle}>
                <Link to="/auth">Auth Page</Link>
            </li>

            <li style={liStyle}>
                <Link to="/edit">Edit Page</Link>
            </li>

            <li style={liStyle}>
                <Link to="/overhead">OverHead Page</Link>
            </li>

            <li style={liStyle}>
                <Link to="/skan">Skan Page</Link>
            </li>
        </ul>
    );
};


export default Navbar;
