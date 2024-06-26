import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction ={'column'} align={'center'}>
                <Name>Andrey</Name>
                
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <ImgM>
                            <Icon height={'21px'} width={'21px'} viewBox="0 0 21px 21px" iconId={'instagram'}/>
                            </ImgM>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <ImgM>
                            <Icon height={'21px'} width={'21px'} viewBox="0 0 21px 21px" iconId={'telegram'}/>
                            </ImgM>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <ImgM>
                            <Icon height={'21px'} width={'21px'} viewBox="0 0 21px 21px" iconId={'vk'}/>
                            </ImgM>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <ImgM>
                            <Icon height={'21px'} width={'21px'} viewBox="0 0 21px 21px" iconId={'linkedin'}/>
                            </ImgM>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                
                    <Copyright>
                        @ 2024 no Copyright Reserved
                    </Copyright>
                    </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;
`
const SocialItem = styled.li`
    display:flex;
    gap: 30px;
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin:30px 0;

`
const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};



    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);

    }
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`

const ImgM = styled.svg`
width: 21px;
height: 21px;
display: flex;
align-items: center;
    
`