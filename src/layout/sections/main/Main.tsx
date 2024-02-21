import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.webp'
export const Main = () => {
    return (
        <div>
            <div>
                <span>
                    Hi There
                </span>
                <h2>
                    I am Svetlana
                </h2>
                <h1>A web developer</h1>
                <Photo src={photo} alt=''/>
            </div>
        </div>
    );
};
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`