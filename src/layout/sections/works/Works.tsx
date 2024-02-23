import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import socialImg from '../../../assets/images/proj1.webp'
import timerImg from '../../../assets/images/proj2.webp'
import { Work } from './work/Work';

const workItems = ['All','Landing Page','React','Spa']

export const Works = () => {
    return (
        <StyledWorks>
                <SectionTitle>My Works</SectionTitle>
                <Menu menuItems={workItems}/>
                <FlexWrapper justify='space-around'>
                    <Work title={'Social Network'} text={'some text'} src={socialImg}/>
                    <Work title={'Timer'} text={'some text 2'} src={timerImg}/>
                </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #deefff;
`