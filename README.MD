# Stryker-Angular-Extra

This repository will provide you with all the details on how to mutation test your `ng new` Angular project with Stryker. The provided `stryker.conf.js` should be enough to test your project with Stryker

## Extra packages
The following extra packages are needed to mutation test Angular project with Stryker, you can add them to your package.json manually under `devDependencies`, Stryker is also provided so you don't need to run `stryker init`.
```javascript
"angular2-template-loader": "^0.6.0",
"awesome-typescript-loader": "^3.0.4",
"css-loader": "^0.26.1",
"html-loader": "^0.4.3",
"null-loader": "^0.1.1",
"raw-loader": "^0.5.1",
"style-loader": "^0.13.1",
"webpack": "2.2.1",
"stryker": "^0.14.1",
"stryker-api": "^0.11.0",
"stryker-jasmine": "^0.7.1",
"stryker-karma-runner": "^0.11.1",
"stryker-typescript": "^0.6.0",
"karma-phantomjs-launcher": "^1.0.4",
"phantomjs-prebuilt": "^2.1.16"
```

Also make sure you update `typescript` to atleast version `2.5.0`, under devDependencies:
```javascript
"typescript": "~2.5.0",
```

## Extra files
There are a few extra files you need in your project so Stryker is able to create the needed bundles to mutation test your project, these files are all provided in this repository. To use them simply clone this repository and copy the files in the project. We tried to avoid conflict with existing files in your project but check possible conflicts before executing the following command.
```bash
cp -r * /location/of/your/angular/project/root
```

## Stryker webpack plugin
The last piece you need it the [stryker-webpack-plugin](https://github.com/Archcry/stryker-webpack), clone it and install it in your project. A useful tool you can use is [install-local](https://www.npmjs.com/package/install-local). The plugin is not officially released by Stryker yet. But this workaround won't be needed when it's officially released by Stryker anyways.

within your Angular project run:
```bash
install-local /path/to/stryker-webpack
```

install-local also supports saving the install in your package.json
```bash
install-local --save /path/to/stryker-webpack
```
Be aware that `npm` might delete packages that are not defined in the package.json when using `npm install`. This includes packages that are defined in the package.json by `install-local`.