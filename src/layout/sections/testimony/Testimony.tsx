import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import styled from 'styled-components';
import { Slider } from '../../../components/slider/Slider';


export const Testimony = () => {
return (
    <StyledTestimony>
        <SectionTitle>Testimony</SectionTitle>
        <Icon iconId={'quote'}/>
        <Slider />
    </StyledTestimony>
);
};


const StyledTestimony = styled.section`
    min-height: 100vh;
    background-color: #5151c9;
`