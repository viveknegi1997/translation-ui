import React from "react";
import { Container } from 'react-bootstrap'
import * as Constants from "constants/Constants";

function ContactUs() {
    return (
        <>
            <div className="wrapper">
                <div className="section base-page vision-page">
                    <Container>
                    {Constants.contactUsData.mainText.map((text, key) => <p key={key}>{text}</p>)}
                    </Container>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
