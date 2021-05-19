export const getImageFromS3data = function getImage(data) {
    var str = data.reduce(function (a, b) { return a + String.fromCharCode(b) }, '');
    return "data:image/jpeg;base64," + btoa(str).replace(/.{76}(?=.)/g, '$&\n');
}

export const getS3PathFromUrl = (url) => {
    return url.substring(2)
}

export const S3 = () => {
    let AWS = require('aws-sdk');
    // AWS.config.update(
    //     {
    //         accessKeyId: AwsConfig.aws.accessKeyId,
    //         secretAccessKey: AwsConfig.aws.secretAccessKey,
    //     }
    // );
    AWS.config.region = 'us-east-1'; // Region
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'us-east-1:d6dee8b9-e428-4847-a239-c9c9c7754cb7',
            });
    let s3 = new AWS.S3();
    return s3
}


export const LoadingChapter = ()=>(
 <div className="loading-chapter">
     <h6>Scroll Down To Load image</h6>
 </div>
)
