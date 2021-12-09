import React from "react";

export default function BottomBar(props){
    const {copyright} = props;

    return(
        <div>
            <p>© {copyright}</p>
        </div>
    )
}