const { default: jwtVerify } = require("jose/jwt/verify");
const keypath = "./testkey.pem";

const testkey = `-----BEGIN PRIVATE KEY-----
MC4CAQAwBQYDK2VwBCIEIHkF/rCBJRoEvzwR2suFG028K/Uu8zWPRsrAhKBzFiAN
-----END PRIVATE KEY-----`;
const subject = 1234;
const expiresIn = 2000;

describe.skip("Token config", () => {});
