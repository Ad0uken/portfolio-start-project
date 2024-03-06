import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction="column" align="center">
                <SectionTitle>Am Available For Freelance</SectionTitle>
                <Button>Hire Me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.div`
    min-height: 30vh;
    background-color: ${theme.colors.secondaryBg};
    text-align:center;
`