let client = require('./core/client');

var text = "苹果是一家伟大的公司";

// 调用情感倾向分析
client.sentimentClassify(text).then(function(result) {
  console.log(JSON.stringify(result));
}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
});