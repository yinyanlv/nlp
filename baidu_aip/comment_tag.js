let client = require('./core/client');

var text = "三星电脑电池不给力";

// 调用评论观点抽取
client.commentTag(text).then(function(result) {
  console.log(JSON.stringify(result));
}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
});

// 如果有可选参数
var options = {};
options["type"] = "13";

// 带参数调用评论观点抽取
client.commentTag(text, options).then(function(result) {
  console.log(JSON.stringify(result));
}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
});