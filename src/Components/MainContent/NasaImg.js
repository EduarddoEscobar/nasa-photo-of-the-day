import React from 'react';
import Explanation from './Explanation';

export default function NasaImg(props){
    const {src, explanation, title} = props
    return(
        <div>
            <img src={src} alt={title}/>
            <Explanation explanation={explanation} />
        </div>
    )
}