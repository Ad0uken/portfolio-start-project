import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';

const workItems = ['All','Landing Page','React','Spa']

export const Works = () => {
    return (
        <StyledWorks>
                <SectionTitle>My Works</SectionTitle>

                <Menu menuItems={workItems}/>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #deefff;
`