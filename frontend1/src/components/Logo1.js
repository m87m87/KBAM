import React from "react";
import { Link } from 'react-router-dom';
import buddhist from '../buddhist.svg'

function LogoComponent() {
    return (
        <div className="logo1">
            <Link to="/">
            <img src={buddhist} alt="logo?" />
            </Link>
        </div>
    );
}

export default LogoComponent;