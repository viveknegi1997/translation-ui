import React from "react";
import { Container } from 'react-bootstrap'
import * as Constants from "constants/Constants";
import Button from 'react-bootstrap/Button'
function ContactUs() {
    return (
        <>
            <div className="wrapper">
                <div className="section base-page vision-page">
                    <Container>
                    {Constants.contactUsData.mainText.map((text, key) => <p key={key}>{text}</p>)}
                    <Button className="btn-space" variant="primary" href="https://discord.gg/PyGgRZxA3K">Join Discord</Button>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
