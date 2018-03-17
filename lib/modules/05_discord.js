const config = require('../../config.json');
const discord = require('../utils/discord');

module.exports = function (data) {
  return new Promise(function (resolve, reject) {
    if (config.discord.enabled) {
      if (data.initial) {
        discord.initialDataMessage();
        resolve(data);
      } else if (data.diff) {
        discord.changedDataMessage(data.timestamp);
        resolve(data);
      } else {
        resolve(data);
      }
    } else {
      resolve(data);
    }
  })
}