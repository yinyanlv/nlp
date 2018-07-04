let client = require('./core/client');

var word1 = "北京";

var word2 = "上海";

// 调用词义相似度
client.wordSimEmbedding(word1, word2).then(function(result) {
  console.log(JSON.stringify(result));
}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
});

// 如果有可选参数
var options = {};
options["mode"] = "0";

// 带参数调用词义相似度
client.wordSimEmbedding(word1, word2, options).then(function(result) {
  console.log(JSON.stringify(result));
}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
});