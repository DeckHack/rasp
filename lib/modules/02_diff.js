const file = require('../utils/file');
const diff = require('deep-diff').diff;

module.exports = function (data) {
  return new Promise(function (resolve, reject) {
    if (!file.checkData()) {
      data['initial'] = true;

      resolve(data);
    }

    const oldData = file.readData();
    data['diff'] = diff(oldData, data.data);

    resolve(data);
  })
}