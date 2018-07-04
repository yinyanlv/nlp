let synonyms = require("node-synonyms");

let sen1 = "移动互联网";

synonyms.seg(sen1, true, true)
  .then(function(words){
    console.log(words);
  });
