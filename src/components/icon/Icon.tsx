import React from 'react';
import styled from 'styled-components';
import iconsSprite from '../../assets/images/icons-sprite.svg'


type IconPropsType ={
    iconId: string
    width?: string
    height?: string
    vieBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
<svg width="50.000000" height="50.000000" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">


            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
            </svg>
    );
};
