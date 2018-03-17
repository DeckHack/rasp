const file = require('../utils/file');
const diff = require('deep-diff').diff;

module.exports = function (data) {
  return new Promise(function (resolve, reject) {
    if (!file.checkData()) {
      data['initial'] = true;

      resolve(data);
    } else {
      const oldData = file.readData();
      data['diff'] = diff(oldData, data.data);
      data['timestamp'] = Math.floor(new Date() / 1000);

      resolve(data);
    }
  })
}