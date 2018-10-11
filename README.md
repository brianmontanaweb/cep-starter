# Adobe CEP Scaffolding

This is a basic setup for an Adobe CEP using Angular 6 CLI focused on Photoshop but can be converted for others. Filling out the rest as the project expands.

## Goal

* Scalable template for Adobe CEP projects
* Maintained with current stable Angular
* SCSS and Angular component guidelines for architecting

## Starting

Clone into Mac: `~/Library/Application Support/Adobe/CEP/extensions` or Windows: `C:\Users\<USERNAME>\AppData\Roaming\Adobe\CEP/extensions` to see the extension in the Adobe product

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

## Libraries

## Thank you!

## License
Copyright 2018 Brian Montana

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
