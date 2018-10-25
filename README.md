# Adobe CEP Scaffolding

This is a basic setup for an Adobe CEP using Angular 6 CLI focused on Photoshop but can be converted for others. Filling out the rest as the project expands.

## Goal

* Scalable template for Adobe CEP projects
* Maintained with current stable Angular
* SCSS and Angular component guidelines for architecting

## Starting

Install [ZXPSignCmd](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ZXPSignCMD/4.0.7/osx10/ZXPSignCmd.dmg) to `/user/local/bin` on Mac to sign the extension for distribution

Clone repo to:

* If the directory doesn't exist create it!
* Mac: `~/Library/Application Support/Adobe/CEP/extensions` or `/Library/Application Support/Adobe/CEP/extensions`
* Windows: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions`

Mac: `defaults write com.adobe.CSXS.9 PlayerDebugMode 1` into terminal

### Setup Browser
1. Install dependencies: `npm i`
2. Start local server: `npm start`

### Setup Extension
1. Install dependencies: `npm i`
2. Start local server: `npm run build`

## Architecture
```
client/                         compiled Angular app from src/
CSXS/                           manifest for Adobe CEP extensions
e2e/                            end-to-end tests
host/                           jsx files for interfacing with Adobe products
src/                            Angular source code
|- app/                         app components
|  |- common/                   common components used across app
|  |- core/                     singleton services and single-use services
|  |- app.component.*           component
|  |- app.module.ts             module definition
|  |- app-routing.module.ts     routes
|- assets/                      media assets
|- environments/                values for build environments
|- styles/                      styles used across app
|  |- base/                     base styles for elements
|  |- components/               styles for common components
|  |- settings/                 variables used in the styles
|  |- tools/                    functions, helpers, mixins for extending SCSS
|  |- utility/                  single style classes built from a set layout measurements
|  |- vendor/                   libraries from third party sources
|  |- README.md                 context related SCSS/CSS info
|  |- styles.scss               used to import various SCSS files
|- CSInterface.js               required for Adobe CEP
|- README.md                    context related to the Angular app
README.md                       context related to entire app integration
```

## Tasks
* `npm start` builds the web app to `http://localhost:4200`
* `npm run extendscript` compiles the `index.js` file to `index.jsx`
* `npm run build` will compile the Angular app and distribute into `client`
* `npm run build:watch` will pass the `--watch` argument for your files and automatically compile, you still need to close the extension and open it again

## Libraries
@angular/CLI
extendscriptr

## Thank you!
Thanks to my wonderful team!

## License
Copyright 2018 Brian Montana

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
