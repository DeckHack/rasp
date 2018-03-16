const modules = require('./modules')

module.exports = {
  run: function () {
    return modules.reduce((promiseChain, currentPromise) => {
      return promiseChain.then((chainedResult) => {
        return currentPromise(chainedResult)
          .then((res) => res)
      })
    }, Promise.resolve());
  }
}