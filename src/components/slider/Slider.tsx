import React from "react";
import styled from "styled-components";



export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
        <Text>Awesome developer</Text>
        <Name>@Ad0uken</Name>
            </Slide>
        </StyledSlider>
    );
};


const StyledSlider = styled.div`
    border: 1px solid red;
    max-width:500px;
`

const Slide = styled.div`
    
    text-align:center;

`
const Text = styled.b`
    

`
const Name = styled.span`
    

`