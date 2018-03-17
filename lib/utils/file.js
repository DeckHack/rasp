const fs = require('fs-extra');
const https = require('https');
const path = require('path');
const config = require('../../config.json');

module.exports = {
  checkData: function() {
    if (fs.existsSync(path.resolve(config.data_path, 'data.json'))) {
      return true
    }
    
    return false
  },
  
  writeData: function(data) {
    fs.writeFile(path.resolve(config.data_path, 'data.json'), JSON.stringify(data), function(err) {
      if (err) { return console.log(err) }
    }); 
  },
  
  readData: function() {
    return JSON.parse(fs.readFileSync(path.resolve(config.data_path, 'data.json'), 'utf8'));
  },

  readTemplate: function() {
    return fs.readFileSync(path.resolve(config.template_path, 'template.handlebars'), 'utf8');
  },

  writeOutput: function(data, timestamp) {
    fs.outputFile(path.resolve(config.output_path, `${timestamp}.html`), data, 'UTF-8', function(err) {
      if (err) { return console.log(err) }
    })
  },

  downloadAsset: function(url, timestamp, name) {
    const file = fs.createWriteStream(path.resolve(config.asset_path, timestamp.toString(), name))
    const request = https.get(url, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        file.close(function(err) {
          if (err) { console.log(err) }
        })
      });
    }).on('error', function(err) {
      fs.unlink(dest);
    });
  },

  checkAsset: function(timestamp) {
    if (fs.existsSync(path.resolve(config.asset_path, timestamp + '/'))) {
      return true
    }

    return false
  },

  createAssetFolder: function(timestamp) {
    fs.mkdirs(path.resolve(config.asset_path, timestamp.toString()));
  }
}