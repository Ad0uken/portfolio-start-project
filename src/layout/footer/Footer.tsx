import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';


export const Footer = () => {
    return (
        <StyledFooter>
                <Name>Andrey</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'instagram'}/>
                            <Icon iconId={'telegram'}/>
                            <Icon iconId={'vk'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                    <Copyright>
                        @ 2024
                    </Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`
const Name = styled.span`
    
`
const SocialItem = styled.li`
    
`
const SocialList = styled.ul`
    
`
const SocialLink = styled.a`
    
`
const Copyright = styled.small`
    
`