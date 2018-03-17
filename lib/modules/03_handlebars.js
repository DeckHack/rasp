const file = require('../utils/file');
const handlebars = require('../utils/handlebars');

module.exports = function (data) {
  return new Promise(function (resolve, reject) {
    if (typeof data.diff == "undefined") {
      resolve(data);
    } else {
      const template = handlebars.compile(file.readTemplate())
      const result = template({diffs: data.diff})

      file.writeOutput(result, data.timestamp);

      resolve(data);
    }
  })
}