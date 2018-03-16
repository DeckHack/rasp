module.exports = (function () {
  let moduleArr = [];

  require("fs").readdirSync(__dirname).forEach(function(file) {
    if (!file.includes("index")) {
      moduleArr.push(require(`./${file}`));
    }
  });

  return moduleArr;
})();