import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction ={'column'} align='center'>
                <Name>Andrey</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height='21' width='21' vieBox='0 0 21px 21px' iconId={'instagram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'telegram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'vk'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'linkedin'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                    <Copyright>
                        @ 2024
                    </Copyright>
                    </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #323285;
    min-height: 20vh;
`
const Name = styled.span`
    
`
const SocialItem = styled.li`
    display:flex;
`
const SocialList = styled.ul`
    
`
const SocialLink = styled.a`
    
`
const Copyright = styled.small`
    
`