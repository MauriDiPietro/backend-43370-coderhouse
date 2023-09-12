import AWS from 'aws-sdk';
import 'dotenv/config';

const creds = AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const sns = new AWS.SNS(creds);

export default sns;