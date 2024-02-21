import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Skill } from './skill/Skill';
import {SectionTitle} from '../../../components/SectionTitle'


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap='wrap'>
                <Skill iconId={'code'} title={'html5'} description={"I can do it"}/>
                <Skill iconId={'css'} title={'css'} description={"I can do it"}/>
                <Skill iconId={'react'} title={'React'} description={"I can do it"}/>
                <Skill iconId={'figma'} title={'figma'} description={"I can do it"}/>
                <Skill iconId={'styled-components'} title={'styled components'} description={"I can do it"}/>
                <Skill iconId={'typescript'} title={'typescript'} description={"I can do it"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #248bc7;
    min-height: 100vh;
`