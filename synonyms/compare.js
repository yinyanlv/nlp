let synonyms = require("node-synonyms");

let sen1 = "移动互联网";

let sen2 = "互联网";

synonyms.compare(sen1, sen2)
  .then(function(similarity){
    console.log(similarity);
  });