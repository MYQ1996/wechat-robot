// 情感分析

const network = require('./network');

let url = 'http://openapi.tuling123.com/openapi/api/v2';
exports.chat = (text, sentback) => {
    var requestData = {
        "reqType": 0,
        "perception": {
            "inputText": {
                "text": text
            }
        },
        "userInfo": {
            "apiKey": "a6f7aa99d4564f69ad3954eb69fd5beb",
            "userId": "myq"
        }
    };
    network.nodeAjax(url, "POST", requestData, callback = (res) => {
        sentback(res.results[0].values.text)
    })
}