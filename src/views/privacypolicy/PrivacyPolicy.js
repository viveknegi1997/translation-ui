import React from "react";
import { Container } from 'react-bootstrap'
import * as Constants from "constants/Constants";

function PrivacyPolicy() {
    return (
        <>
            <div className="wrapper">
                <div className="section base-page vision-page">
                    <Container>
                    {Constants.privacyPolicy.mainText.map((text, key) => <p key={key}>{text}</p>)}
                    </Container>
                </div>
            </div>
        </>
    );
}

export default PrivacyPolicy;
