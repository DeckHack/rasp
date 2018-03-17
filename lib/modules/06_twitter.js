const config = require('../../config.json');
const twitter = require('../utils/twitter');

module.exports = function (data) {
  return new Promise(function (resolve, reject) {
    if (config.twitter.enabled) {
      if (data.diff !== undefined) {
        twitter.sendTweet(data.timestamp);
        resolve(data);
      } else {
        resolve(data);
      }
    } else {
      resolve(data);
    }
  })
}