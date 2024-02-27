import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
                <SectionTitle>Am Available For Freelance</SectionTitle>
                <Button>Hire Me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.div`
    min-height: 30vh;
    background-color: purple;
    text-align:center;
`