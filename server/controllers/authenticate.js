require("dotenv").config();

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();

exports.verify_credentials = async (credential) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
  } catch (error) {
    console.log(`Error verifying credentials: ${error}`);
    throw new Error("Error verifying credentials");
  }
};
