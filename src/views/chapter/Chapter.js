import React, { useRef, useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload'

import ImageCard from 'components/ImageCard'
import { LoadingChapter,S3, getS3PathFromUrl } from 'utils/Utils'
import * as AwsConfig from "constants/Awsconfig";
import LoadSpinner from 'components/LoadSpinner/LoadSpinner';

function Chapter() {
    const [isLoaded, setIsLoaded] = useState(true);
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
                    setIsLoaded(currentIsLoaded => !currentIsLoaded)
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

                let tempArray = []

                for (let i = 0; i < imageKeys.length; i++) {

                    if (!imageKeys[i].Key.endsWith('/')) {
                        let url = "https://manhuapointin.s3.amazonaws.com/" + imageKeys[i].Key
                        tempArray.push(url)
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

                return <LazyLoad height={400} offset={500} key={key} once placeholder={<LoadingChapter/>}><ImageCard key={key} imgUrl={obj} /></LazyLoad>
            })
            return jsonChapterItems
        }
        else
            return <h1>.</h1>
    }


    return <> {render()}<div>{isLoaded && <LoadSpinner />}</div></>
    
}

export default Chapter;
