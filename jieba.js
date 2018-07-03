var nodejieba = require("nodejieba");
var sentence = "我是拖拉机学院手扶拖拉机专业的。不用多久，我就会升职加薪，当上CEO，走上人生巅峰。";

var result;

result = nodejieba.cut(sentence);
console.log(result);
//
// result = nodejieba.cut(sentence, true);
// console.log(result);
//
// result = nodejieba.cutHMM(sentence);
// console.log(result);
//
// result = nodejieba.cutAll(sentence);
// console.log(result);

result = nodejieba.cutForSearch(sentence);
console.log(result);

result = nodejieba.tag(sentence);
console.log(result);

var topN = 5;
result = nodejieba.extract(sentence, topN);
console.log(result);

result = nodejieba.cutSmall("南京市长江大桥", 3);
console.log(result);