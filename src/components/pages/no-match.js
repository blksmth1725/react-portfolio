import React from "react";
import { Link } from "react-router-dom";

export default function() {
    return (
        <div>
           <h3>We couldn't find that page</h3> 
           <Link to="/">Return to homepage</Link>
        </div>
    );
}