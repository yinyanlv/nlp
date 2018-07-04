let AipNlpClient = require('baidu-aip-sdk').nlp;

let APP_ID = '11482469';
let API_KEY = 'Ib4C3tc3SECfHjjyged4lTYC';
let SECRET_KEY = 'leQDKmblpuyRH9vmA9W3W1l3FUbFn65B';

let client = new AipNlpClient(APP_ID, API_KEY, SECRET_KEY);

module.exports = client;