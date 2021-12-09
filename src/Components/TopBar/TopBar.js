import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.primaryColor};
    border: 2px solid ${props => props.theme.borderColor};

`
export default function TopBar(props){
    const {title, date} = props;

    return(
        <StyledDiv>
            <h1>{title}</h1>
            <h2>{date}</h2>
        </StyledDiv>
    );
}