import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

export const Skill = () => {
    return (
        <StyledSkill>
                    <Icon iconId={'code'}/>
                    <SkillTitle>html5</SkillTitle>
                    <SkillText>I can do it</SkillText>
                </StyledSkill>
    );
};
const StyledSkill = styled.div`
    

`

const SkillTitle = styled.h3`
    
`

const SkillText = styled.p`
    
`