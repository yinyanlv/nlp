let synonyms = require("node-synonyms");

let sen1 = "移动互联网";

synonyms.nearby(sen1)
  .then(function(results){
    console.log(results);
  });
