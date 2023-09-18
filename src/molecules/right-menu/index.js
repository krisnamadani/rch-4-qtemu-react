import React from "react";
import Link from "../../atoms/link";

export default function RightMenu(props) {
    return (
        <div className="right-menu">
            <Link className="text-gray-400 mx-2" href="#login">Login</Link>
        </div>
    );
}