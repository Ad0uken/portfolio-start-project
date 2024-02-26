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

`

const Slide = styled.div`
    

`
const Text = styled.div`
    

`
const Name = styled.div`
    

`