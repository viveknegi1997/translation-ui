import React from 'react';

function ImageCard(props) {

    return (
        <div className="imageCardDivStyle">
            <img className="imageCardImgStyle" alt="imagerendering" src={props.imgUrl}></img>
        </div>
    );
}

export default ImageCard;
