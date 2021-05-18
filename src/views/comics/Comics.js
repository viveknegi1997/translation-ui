import React, { useEffect, useState } from "react";
import { Col, Row, Container } from 'react-bootstrap'
import * as Constants from "constants/Constants";
import { S3, getS3PathFromUrl } from 'utils/Utils'
import * as AwsConfig from "constants/Awsconfig";


import Button from 'react-bootstrap/Button'
function Comics() {

    const [chapterList, setChapterList] = useState(null);
    useEffect(() => {
        async function loadData() {

            let s3 = S3()
            //console.log(getS3PathFromUrl(window.location.hash))
            let bucketParams = {
                Bucket: AwsConfig.aws.bucket,
                Prefix: getS3PathFromUrl(window.location.hash),
            };
            s3.listObjectsV2(bucketParams, function (err, data) {
                if (err) {
                    console.log("Error", err);
                } else {
                    //console.log("Successs", data.Contents);
                    let chapterSet = new Set()
                    data.Contents.map((obj) => {
                        let splitDir = obj.Key.split("/")
                        if (splitDir.length > 3) {
                            chapterSet.add(splitDir[2])
                        }
                        return ""
                    })
                    setChapterList(Array.from(chapterSet))
                }
            });
        }
        loadData()
    }, [])

    function Variable() {
        try {
            return Constants.comicChapters[window.location.hash].detailedDescription
        } catch (error) {
            return ""
        }
    }


    function render() {
        let jsonChapterItems = []
        //console.log(chapterList)
        if (chapterList) {
            jsonChapterItems = chapterList.map((obj, key) => {
                return <Button className="btn-space" key={key} variant="primary" href={window.location.hash + "/" + obj}>{obj}</Button>
            })
            return jsonChapterItems
        }
        else
            return <h1>.</h1>
    }

    return (
        <>
            <div className="wrapper">
                <div className="section base-page vision-page">
                    <Container>
                        <p>{Variable()}</p>
                        <h3>Chapters</h3>
                    </Container>

                    <Container>
                        <Row>
                            <Col md="auto">
                                {render()}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Comics;
