let client = require('./core/client');

var text = "百度是一家高科技公司";

// 调用词法分析
client.lexer(text).then(function(result) {
  console.log(JSON.stringify(result));
}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
});