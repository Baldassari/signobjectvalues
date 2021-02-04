// Import stylesheets
import "./style.css";
import * as crypto from "crypto";
import * as keys from "./keys";

const obj = {
  deviceId: "lala",
  clientId: "1859500055663",
  contextId: "dev"
};

const signer = crypto.createSign("RSA-SHA256");
const toSign = JSON.stringify(obj);
signer.update(toSign);

obj.signature = signer.sign(
  { key: keys.privateKey, passphrase: keys.passphrase },
  "base64"
);
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = JSON.stringify(obj, null, 4);
