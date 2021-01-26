// Import stylesheets
import "./style.css";
import * as crypto from "crypto";

const pem = `
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDeQJczjZ6NGoRJ
EFr2Ai7VSjyeVli0lWqk8yzCdIecK3GmDKJHmEIIRhZ2lB/KJN9K2Hsri9CHndxA
LbF89asudpqFFkmQV5qe2U5ze1PfXh1nw+JUUhQYCrUkh7l3wmjGKnczErYPbIoQ
2Aac5JeNshBPdlezgl14iTGAHFRBn/K193d/YLFGzyQPUrSwWhLZTGk83VTGSXtW
OrJlL9HnRWGcacexCDg5LCVNHLdJsXGkjDD6mrE1FAuxXCrCgaFbGJshD715ixlB
s584+8IFgI4CBHLxbFMaBw1BDu6eWPMRbF+z/b5DSt0ktISMjrslYIP2X/TQanX+
LaF2qj2ZAgMBAAECggEABmjSc3goFGWpXvoLxYB2nUwQx3gyArM0aiFhLxJxPr25
/1Hp9Cqd7OMojq7i48+AaQYpNy5HC0IwMeGfdr0W/LYK6r+jy3fbS610p7vsxUpP
isiJZGkhjzfv1Wfcn2mJ3/0lhuGJQpScvrOcLTYicMGr2r7M9K5Tx8AdH1axz1qh
veuIaTxDLsE6y2RM2YoTN5jI+pK/D0iGhZvucBSi9TNi9W9gC23hGeRWjaUeVI0K
WNaDHhwITwr/PvpOogAZ7eFVYHSigQlKxbcyTZVvgZSCUK6NSUGOClDFV0WIJ7hj
OX8ST+MS+ggAJ6WomfjKjHMW0eUQ57sLv1UzBSak6QKBgQD5ESm3oMDg2MRhau7S
9Bt1M7gTNL5yLBse2IqmBMyO+zIKPygVmUlBLbVX99ChitSZBXVLyQ00PFUFPGub
dB2oKFyblF/LRKKOKcXPM94W6rcka56BwZ0ixtQAGyEUN3nignn3YZXTi1xYMHRd
BW/m4O/AnJkf8B4lQ/NwMdj49wKBgQDkcFjybHv/sxDH+dibUr1LVnn7GK7IUi2T
McZBeJ+IBgkGhmNbkR6FTEj1sxKoWNGeH6Z6X/3a0/91zMWKHhIr2+Ag5hUh7fXX
5HZX5+TnG1OV2owkrwSmucKss8Mg7996fux5QjwvYJHYtbK2EiyTFVpgnCmZ+6pj
XkOgSkfp7wKBgBUP1H1IxMa+zeyHBGcmaWQB2aEWJry06h4zpZXgdgPpThP7v0IE
UmOGn/0uYaAng07lXUPpXop6R55Hu7nLme5sa1hkta0UwsJO2gFpm3BIrPARgbfr
TYRxV+AiayuwfUggTHwU7nyTHl3+yvhKy2m0v9GD7Jb80S/JjT6BmJ2FAoGBAJOQ
m3SmbYdkxd9YXvse/JbRGuUAMc/HfhdKnPYoFG3K8EOdxksdOGkFOVA2SEQlc+tA
KMt+fL7CGZCgIa8x860PUP4PgvEzBY9bzrLEYtKDjYAM+GCuCkQlVUM4sEDzkxpP
KTS/e59jM3OZFAOXQ+ITdhlYZ2tH7e5Yszi1IzVTAoGAf5QPUhJZkYouQF7/2L9H
dIF33X74IHkBTAjrEqzq7RSHtULiBID8nCxoHcOijtS6CMtmtUcqZHIsBVPe0zsz
6tpD0YBe0mYQ56DRX79TGnKb19wwWERvTGRmbUqbpfLJpXdBA7J8PM9MFoQHPa7p
eEnBDzcHGb60NnYmuWIqLB4=
-----END PRIVATE KEY-----
	`;

const passphrase = "";

const obj = {
  transactionId: "7dde9e0b-6adc-418f-875c-8aeb5c178c7a",
  clientId: "1859500055664",
  deviceId: "lalalae"
};
const signer = crypto.createSign("RSA-SHA256");
const toSign = JSON.stringify(obj);
signer.update(toSign);

obj.signature = signer.sign({ key: pem, passphrase: passphrase }, "base64");
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = JSON.stringify(obj, null, 4);
