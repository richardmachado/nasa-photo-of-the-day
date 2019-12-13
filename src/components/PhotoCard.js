import React from "react";
import styled from 'styled-components';

const  Explanation = styled.p `
    color: white;
    font-size: 24px;
	width: 80%;
    text-align: center; 
    font-style: italic;
`

const Title = styled.h1 `
    color:white;
    background-color: blue;
    text-align: center;
    animation:blinkingText 2s infinite;
}
@keyframes blinkingText{
    0%{     color: #000;    }
    49%{    color: red; }
    50%{    color: orange; }
    99%{    color: transparent;  }
    100%{   color: #000;    }
}
`
const Date = styled.h2`
    color:white
`
const Details= styled.h3`
color: white;
font-size: 6rem;


`

const PhotoCard = (props) => {
    return(
        <div>
            <Title>
                {props.title}
            </Title>
            <Date>
                Today's date: {props.date}
            </Date>
            <img src = {props.url} alt="img"/>
        <div>
            <Details>
                Details
            </Details>
            <Explanation>
            {props.explanation}
            </Explanation>
        </div>
        </div>
    );
};

export default PhotoCard;