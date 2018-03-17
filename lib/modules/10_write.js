const file = require('../utils/file');

module.exports = function (data) {
  return new Promise(function (resolve, reject) {
    file.writeData(data.data);
    resolve();
  })
}