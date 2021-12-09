import React from 'react';

export default function TopBar(props){
    const {title, date} = props;

    return(
        <div className="topbar">
            <h1>{title}</h1>
            <h2>{date}</h2>
        </div>
    );
}