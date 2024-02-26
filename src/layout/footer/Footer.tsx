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