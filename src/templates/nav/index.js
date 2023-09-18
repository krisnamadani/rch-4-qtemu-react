import React from "react";
import Title from "../../molecules/title";
import Menu from "../../organisms/menu";

export default function Nav(props) {
    return (
        <nav className="bg-gray-700 flex p-4">
            <Title />
            <Menu />
        </nav>
    );
}