let client = require('./core/client');

var title = "欧洲冠军杯足球赛";

var content = "欧洲冠军联赛是欧洲足球协会联盟主办的年度足球比赛，代表欧洲俱乐部足球最高荣誉和水平，被认为是全世界最高素质、最具影响力以及最高水平的俱乐部赛事，亦是世界上奖金最高的足球赛事和体育赛事之一。";

// 调用文章分类
client.topic(title, content).then(function(result) {
  console.log(JSON.stringify(result));
}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
});