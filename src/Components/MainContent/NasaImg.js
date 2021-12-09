import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function NasaImg(props){
    const {src, explanation, title} = props
    return(
        <div>
            <img src={src} alt={title}/>
            <p>{explanation}</p>
        </div>
    )
}