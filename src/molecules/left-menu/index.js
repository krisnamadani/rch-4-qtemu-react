import React from "react";
import Link from "../../atoms/link";

export default function LeftMenu(props) {
    return (
        <div className="left-menu">
            <Link className="text-gray-400 mx-2" href="#create-meetup">Create Meetup</Link>
            <Link className="text-gray-400 mx-2" href="#explore">Explore</Link>
        </div>
    );
}