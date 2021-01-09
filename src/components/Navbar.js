import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logOut } from '../store/authorization/actions';



const Navbar = (props) => {

    const liStyle = {
        marginRight: "2rem",
        cursor: "pointer"
    };

    const ulStyle = {
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
        marginBottom: "2rem"
    };

    const onLogOut = () => {
        localStorage.clear();
        props.logOut();
        //window.location.reload();
        props.history.push('/');
    };


    return (
        <>
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
                <button onClick={() => (onLogOut())}
                >Log Out</button>
            </ul>
        </>
    );
};




const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logOut())
});


export default withRouter(connect(null, mapDispatchToProps)(Navbar));

