import styled from 'styled-components';
import photo from '../../../assets/images/photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';
import { font } from '../../../styles/Common';
export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={'center'} justify={'space-between'} margin='50px 50px'>
                <StyledTextMain>
                <SmallText>Hi There</SmallText>
                <Name>I am <span>Svetlana</span></Name>
                <MainTitle>A web developer</MainTitle>
                </StyledTextMain>
                <PhotoWrapper><Photo src={photo} alt=''/></PhotoWrapper>
                
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledTextMain =styled.div`
    
`

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;
    

    &::before {
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
        }
    }
`



const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`
const MainTitle = styled.h1`
    margin: 0;
    ${font({weight: 400, Fmax: 27, Fmin: 20})}
`

const Name = styled.h2`
${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;

        white-space: nowrap;

        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};


            position: absolute;
            bottom: 0;
            z-index: -1;

        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`
const SmallText = styled.h2`
    font-weight: 400;
    font-size: 14px;
    margin: 0;
`