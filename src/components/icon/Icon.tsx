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
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip20_1838">
			<rect width="50.000000" height="50.000000" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect width= {props.width || '50'} height={props.height || '50'} viewBox={props.vieBox || '0 0 50 50'} fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip20_1838)">
		<path d="M18.3125 42.0645L27.2623 6.6875L31.4375 7.87244L22.4878 43.3125L18.3125 42.0645Z" fill="#7572D5" fill-opacity="1.000000" fill-rule="evenodd"/>
		<path d="M13.5025 12.6875L16.5625 15.9277L7.99501 25.0001L16.5625 34.0721L13.5025 37.3125L1.875 25.0001L13.5025 12.6875Z" fill="#7572D5" fill-opacity="1.000000" fill-rule="evenodd"/>
		<path d="M36.4976 12.6875L33.4375 15.9277L42.0051 25.0001L33.4375 34.0721L36.4976 37.3125L48.125 25.0001L36.4976 12.6875Z" fill="#7572D5" fill-opacity="1.000000" fill-rule="evenodd"/>
	</g>

            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
            </svg>
    );
};
