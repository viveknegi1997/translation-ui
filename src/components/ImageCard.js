import React from 'react';

function ImageCard(props) {
    console.log(props)
    return (
        <div className="imageCardDivStyle">
            <img className="imageCardImgStyle" src={props.imgUrl}></img>
        </div>
    );
}

export default ImageCard;
