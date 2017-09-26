On-going Seed
===================
On-going seed project.

# Release 01
This first seed includes:

 1. Webpack - the simplest way to use webpack.
 2. typescript loader
 3. css & scss loaders

Loaders are those things that transfer our code from one thing to another.

# Useful Links

> those are useful links:

What is webpack
  - [Webpack 2 Official Site](https://webpack.js.org/)

Installation & Getting Started
  - [Getting Started Guide](https://webpack.js.org/guides/getting-started/)

Webpack Loaders
  - [CSS Loader](https://webpack.js.org/guides/asset-management/)
  - [Sass/SCSS Loader](https://webpack.js.org/loaders/sass-loader/)

I've just created a release branch. In addition I want to create a release.
You can find what is a release [here](https://help.github.com/articles/creating-releases/)

Release 02
==========
In this release I want to copy the ***index.html*** file from the *src* directory to the *dist* directory
For this reason we use: [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

A good explanation Video by Mirko Nasato of how to use this loader can be found [here](https://www.youtube.com/watch?v=lPhZW8ZyUA4&list=PLgGUMhSgtxJyIQ4vI3BzlCzZLHL79Ew6p&index=5) and also in Stack-Overflow [here](https://stackoverflow.com/questions/32155154/webpack-config-how-to-just-copy-the-index-html-to-the-dist-folder/34925111)

Release 03
=========
In this release I am upgrading the current code:

 1. Importing a *Person* Object in index.ts from module.ts file to see that typescript is working.
 2. adding a watch script in webpack.config.js
 3. adding resolve extentions in webpack.config.js

Release 04
==========

 1. adding the files in folder  ./dist to .gitignore.
 2. Creating one css bundle for all our css/scss files.
	 1. we are using *extract-text-webpack-plugin*
	 2. replacing the rules in webpack.config.js
The plugin creates the file in the output directory, in our case ./dist. and insert the *link* tag to the index.html file.

Release 05
==========

 1. Add source map to both javascript & css files.
 2. adding *devtool: 'inline-source-map'* to our webpack.config.js
 3. adding source maps to css by changing the *extract-text-webpack-plugin*

Release 06
==========
**Create multiple bundles**

 1. Change the entry point in the webpack.config.js to include several enty points
 2. change the output to inlcude the [name] prefix.
 3. Adding clean-webpack-plugin to clean the dist folder each time we do the build.
 4. Adding webpack-dev-server, in the webpack.config.js tell the server where to take the files. and add
    a new script to package.json.