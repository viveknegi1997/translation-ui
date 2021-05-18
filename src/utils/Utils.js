import * as AwsConfig from "constants/Awsconfig";

export const getImageFromS3data = function getImage(data) {
    var str = data.reduce(function (a, b) { return a + String.fromCharCode(b) }, '');
    return "data:image/jpeg;base64," + btoa(str).replace(/.{76}(?=.)/g, '$&\n');
}

export const getS3PathFromUrl = (url) => {
    return url.substring(2)
}

export const S3 = () => {
    let AWS = require('aws-sdk');
    AWS.config.update(
        {
            accessKeyId: AwsConfig.aws.accessKeyId,
            secretAccessKey: AwsConfig.aws.secretAccessKey,
        }
    );
    let s3 = new AWS.S3();
    return s3
}

