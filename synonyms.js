var synonyms = require("node-synonyms");

let sen1 = "移动互联网";
synonyms.seg(sen1, true, true)
  .then(function(words){
    console.log(words);
  });

// synonyms.vector("股市")
//   .then(function(v){
//     console.log(v);
//   });

synonyms.display("方向盘");

synonyms.nearby("股市")
  .then(function(results){
    console.log(results);
  });

let sen2 = "移动互联网";
let sen3 = "互联网";
synonyms.compare(sen2, sen3)
  .then(function(similarity){
    console.log(similarity);
  });