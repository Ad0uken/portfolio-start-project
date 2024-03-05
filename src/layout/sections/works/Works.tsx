import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './work/tabmenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import socialImg from '../../../assets/images/proj1.webp'
import timerImg from '../../../assets/images/proj2.webp'
import { Work } from './work/Work';
import { Container } from '../../../components/Container';

const workItems = ['All','Landing Page','React','Spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={workItems}/>
                <FlexWrapper justify='space-between'>
                    <Work title={'Social Network'} text={'some text'} src={socialImg}/>
                    <Work title={'Timer'} text={'some text 2'} src={timerImg}/>
                </FlexWrapper>
                </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`