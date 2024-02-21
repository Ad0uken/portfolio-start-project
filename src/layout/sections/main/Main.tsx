import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align-items={'center'} justify={'space-around'}>
            <div>
                <span>
                    Hi There
                </span>
                <Name>
                    I am Svetlana
                </Name>
                <MainTitle>A web developer</MainTitle>
                <Photo src={photo} alt=''/>
            </div>
            </FlexWrapper>
            
        </StyledMain>
    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #b91ce0;
`




const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    
`

const Name = styled.h2`
    
`