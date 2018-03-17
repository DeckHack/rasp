const file = require('../utils/file');

module.exports = function (data) {
  return new Promise(function (resolve, reject) {
    if (typeof data.timestamp == "undefined" || typeof data.diff == "undefined") {
      resolve(data);
    } else {
      let assets = [];

      Object.keys(data.data.assets).forEach(function (asset) {
        if (!asset.includes('emoji')) {
          assets.push(data.data.assets[asset]);
        }
      })

      file.createAssetFolder(data.timestamp);

      assets.forEach(function (asset) {
        let assetPath = asset.split('/');
        let assetName = assetPath[assetPath.length - 1];
    
        file.downloadAsset(asset, data.timestamp, assetName);
      });

      resolve(data);
    }
  })
}