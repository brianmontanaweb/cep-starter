const fs = require('fs');
const exec = require('child_process').exec;
// Check platform
// Determine how to build the path for dist, based on a generic ignored file
if(process.platform === 'win32') {
    process.env.npm_package_config_distPath = process.env.APPDATA + '\\Adobe\\CEP\\extensions\\com.cep-starter';
  }

  if(!fs.existsSync(process.env.npm_package_config_distPath)) {
    console.error('Directory doesn\'t exist!');
  }

exec(`ng build --output-path ${process.env.npm_package_config_distPath}`,
  function(err, stdout, stderr) {
    if (err) {
      throw err;
    } else {
      console.log(stdout);
    }
  });
