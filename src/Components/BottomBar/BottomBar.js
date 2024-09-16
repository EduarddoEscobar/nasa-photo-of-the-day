import React from "react";
import styled, { keyframes } from 'styled-components';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.primaryColor};
    border-top: 1px solid ${props => props.theme.borderColor};
`
export default function BottomBar(props){
    const {copyright} = props;

    return(
        <StyledDiv>
            <p>© {copyright}</p>
        </StyledDiv>
    )
}