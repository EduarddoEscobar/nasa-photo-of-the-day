import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`

`;

const StyledDiv = styled.div`
    background-color: ${props => props.theme.primaryColor};
    padding: 4% 2%;
    img{
        width: 50%;
    }
    p{
        font-size: 1.6rem;
    }

    @media (max-width: ${props => props.theme.breakPointTablet}){
        display: flex;
        img{
        width: 70%;
        }

        p{
            font-size: 1.2rem;
        }
    }

    @media (max-width: ${props => props.theme.breakPointMobile}){
        display: block;
        img{
            width: 75%;
        }
    }
`
export default function NasaImg(props){
    const {src, explanation, title} = props
    return(
        <StyledDiv>
            <img src={src} alt={title}/>
            <p>{explanation}</p>
        </StyledDiv>
    )
}