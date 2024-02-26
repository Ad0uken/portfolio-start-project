import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";



export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
            <Slide>
        <Text>Awesome developer</Text>
        <Name>@Ad0uken</Name>
            </Slide>
            </FlexWrapper>
           <Pagination>
                <span></span>
                <span></span>
                <span></span>
           </Pagination>
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
const Pagination = styled.span`
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: #b148b1;
    }
`