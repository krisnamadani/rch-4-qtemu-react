import React from 'react';

export default function Link(props) {
    return (
        <a className={props.className} href={props.href}>
        {props.children}
        </a>
    );
}