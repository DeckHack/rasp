const fs = require('fs-extra');
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
    return JSON.parse(fs.readFileSync(path.resolve(config.data_path, 'data.json'), 'utf8'))
  },

  readTemplate: function() {
    return fs.readFileSync(path.resolve(config.template_path, 'template.handlebars'), 'utf8')
  },

  writeOutput: function(data, timestamp) {
    fs.outputFile(path.resolve(config.output_path, `${timestamp}.html`), data, 'UTF-8', function(err) {
      if (err) { return console.log(err) }
    })
  },
}