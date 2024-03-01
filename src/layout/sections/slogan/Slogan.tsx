import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";

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
    background-color: ${theme.colors.secondaryBg};
    text-align:center;
`