import styled from 'styled-components';
import photo from '../../../assets/images/photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';
export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={'center'} justify={'space-between'}>
            <div>
                <SmallText>Hi There</SmallText>
                <Name>I am Svetlana</Name>
                <MainTitle>A web developer</MainTitle>
                </div>
                <Photo src={photo} alt=''/>
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: ${theme.colors.primaryBg};
    display: flex;
`




const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`

const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
`
const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
`