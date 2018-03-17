const file = require('../utils/file');
const handlebars = require('../utils/handlebars');

module.exports = function (data) {
  return new Promise(function (resolve, reject) {
    if (data.diff == undefined) {
      resolve(data);
    }

    const template = handlebars.compile(file.readTemplate())
    const result = template({diffs: data.diff})

    file.writeOutput(result, data.timestamp);

    resolve(data);
  })
}