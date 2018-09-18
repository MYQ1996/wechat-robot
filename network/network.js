const request = require('request');

exports.nodeAjax = function (url, methods, requestData, callback) {
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "Content-Type": "application/json",
        },
        body: requestData
    }, function (error, response, body) {
        callback(body)
        if (!error && response.statusCode == 200) {}
    });
}