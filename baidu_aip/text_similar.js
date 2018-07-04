let client = require('./core/client');
var text1 = "汽车";

var text2 = "公交车";

// 调用短文本相似度
client.simnet(text1, text2).then(function(result) {
  console.log(JSON.stringify(result));
}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
});

// 如果有可选参数
var options = {};
options["model"] = "CNN";

// 带参数调用短文本相似度
client.simnet(text1, text2, options).then(function(result) {
  console.log(JSON.stringify(result));
}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
});