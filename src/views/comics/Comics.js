import React from "react";
import { Container } from 'react-bootstrap'
import * as Constants from "constants/Constants";

function Comics() {

    return (
        <>
            <div className="wrapper">
                <div className="section base-page vision-page">
                    <Container>
                        <p>{Constants.comicChapters[window.location.hash].detailedDescription}</p>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Comics;
