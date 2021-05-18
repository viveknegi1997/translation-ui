import React, { useRef, useEffect, useState } from 'react';
import ImageCard from 'components/ImageCard'
import { S3, getImageFromS3data, getS3PathFromUrl } from 'utils/Utils'
import * as AwsConfig from "constants/Awsconfig";
function Chapter() {

    const [imageKeys, setImageKeys] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const initialRender = useRef(true);
    useEffect(() => {
        async function loadData() {

            let s3 = S3()

            let bucketParams = {
                Bucket: AwsConfig.aws.bucket,
                Prefix: getS3PathFromUrl(window.location.hash),
            };
            s3.listObjects(bucketParams, function (err, data) {
                if (err) {
                    console.log("Error", err);
                } else {
                    //console.log("Success", data.Contents);
                    setImageKeys(data.Contents)

                }
            });
        }
        loadData()
    }, [])

    //console.log(getS3PathFromUrl(window.location.hash))

    useEffect(() => {
        //console.log("image keys le" + imageKeys?.length)
        async function loadData() {
            if (initialRender.current) {
                initialRender.current = false;

            }
            else {
                let s3 = S3()

                let tempArray = []

                for (let i = 0; i < imageKeys.length; i++) {

                    if (!imageKeys[i].Key.endsWith('/')) {
                        await s3.getObject(
                            { Bucket: AwsConfig.aws.bucket, Key: imageKeys[i].Key },
                            function (error, data) {
                                if (error == null) {
                                    tempArray.push(getImageFromS3data(data.Body))
                                }
                            }
                        ).promise()
                    }
                }
                setImageUrl(tempArray)
            }
        }
        loadData();
    }
        , [imageKeys])




    function render() {
        let jsonChapterItems = []

        if (imageUrl) {
            jsonChapterItems = imageUrl.map((obj, key) => {
                return <ImageCard key={key} imgUrl={obj} />
            })
            return jsonChapterItems
        }
        else
            return <h1>.</h1>
    }


    return <div>
        {render()}
    </div>
}

export default Chapter;
