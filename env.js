require('dotenv').config();
const databaseUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;

const AWS = require('aws-sdk');
const client = new AWS.SecretsManager();

async function getSecret(secretName) {
  const data = await client.getSecretValue({ SecretId: secretName }).promise();
  if (data.SecretString) {
    return JSON.parse(data.SecretString);
  }
  throw new Error("Secret not found");
}

(async () => {
  const secret = await getSecret('your-secret-name');
  console.log(secret);
})();
