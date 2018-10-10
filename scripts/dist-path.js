const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

let distArray = [process.env.HOME, 'Library', 'Application Support', 'Adobe', 'CEP', 'extensions/'];
let distPath;
// Check platform
// Determine how to build the path for dist, based on a generic ignored file
if (process.platform === 'win32') {
  distArray = [process.env.APPDATA, 'Adobe', 'CEP', 'extensions\\'];
  distPath = path.win32.join(...distArray);
} else {
  distPath = path.join(...distArray);
}

if (fs.readdirSync(distPath)) {
  if (process.platform !== 'win32') {
    distPath = distPath.replace(' ', '\\ ')
  }
  exec(`ng build --output-path ${distPath}com.cep-starter`,
    function (execErr, stdout, stderr) {
      if (execErr) throw execErr;
      console.log(stdout);
    });
} else {
  console.error(`Couldn't write to directory, it doesn't exist`);
}
