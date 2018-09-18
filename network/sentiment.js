// 情感分析

const network = require('./network');

let url = 'https://aip.baidubce.com/rpc/2.0/nlp/v1/sentiment_classify?charset=UTF-8&access_token=24.5b8fd9e565ec425ff1afcfdee289839a.2592000.1539841362.282335-14220927';
exports.analysis = (text,sentback) => {
    var requestData = {
        "text": text
    };
    network.nodeAjax(url, "POST", requestData, callback = (res) => {
       let emotional = "表示分类的置信度:" + toPercent(res.items[0].confidence) + '\n' + "表示属于积极类别的概率" + toPercent(res.items[0].positive_prob) + '\n' + "表示属于消极类别的概率" + toPercent(res.items[0].negative_prob) + '\n' + sentimentData(res.items[0].sentiment);
       sentback(emotional)
    })
}

let sentimentData=(params)=> {
    let title = ""
    switch (params) {
        case 0:
            title = "负向"
            break;
        case 1:
            title = "中性"
            break;
        case 2:
            title = "正向"
            break;
        default:
            break;
    }
    return "表示情感极性分类结果:" + title
}

let toPercent=(point)=> {
    var str = Number(point * 100).toFixed(2);
    str += "%";
    return str;
}