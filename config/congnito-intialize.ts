const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
    UserPoolId: process.env.userPoolid, // Your user pool id here
    ClientId: process.env.clientId // Your client id here
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

export default userPool

export const pool_region = process.env.awsRegion;