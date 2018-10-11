const fs = require('fs-extra');
const path = require('path');
const exec = require('child_process').exec;
const projectName = 'com.cep-starter';
// The path could be a default with the
let distArray = [process.env.HOME, 'Library', 'Application Support', 'Adobe', 'CEP', 'extensions/'];
let distPath;

if (process.platform === 'win32') {
  distArray = [process.env.APPDATA, 'Adobe', 'CEP', 'extensions\\'];
  distPath = path.win32.join(...distArray);
} else {
  distPath = path.join(...distArray);
}

if (fs.readdirSync(distPath)) {
  exec(`ng build --output-path ${distPath.replace(' ', '\\ ') + projectName}/client`,
    function (execErr, stdout, stderr) {
      if (execErr) throw execErr;
      let distPathApp = 'app';
      fs.readdirSync(distPathApp).forEach(item => {
        if(item !== 'client') {
          fs.copy(path.join(distPathApp, item), path.join(distPath, projectName, item))
            .then(() => console.log(`Successfully copied ${item}!`));
        }
      })
    });
} else {
  console.error(`Couldn't write to directory, it doesn't exist`);
}
