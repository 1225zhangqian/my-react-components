'use strict';
const { series, src, dest } = require('gulp');
const babel = require('gulp-babel');
// const autoprefixer = require("autoprefixer");
// const cssnano = require('cssnano');
// const postcss = require('gulp-postcss');
// const postcssModules = require("postcss-modules")
const base64 = require('gulp-base64');
const sass = require('gulp-sass');
const cssmin = require('gulp-clean-css');
sass.compiler = require('node-sass');
// const through2 = require('through2');
// const concat = require('gulp-concat');
const rename = require('gulp-rename');

function compileStyle() {
  return src('./style/index.scss')
    .pipe(base64())
    .pipe(
      sass({
        outputStyle: 'compressed',
        includePaths: ['node_modules/bootstrap/scss']
      }).on('error', sass.logError)
    )
    .pipe(cssmin())
    .pipe(rename({ basename: 'zq-react-ui', suffix: '.style.min' }))
    .pipe(dest('./es'));
}

// function imagesTask() {
//     return src('../components/**/images/*')
//         .pipe(dest('../es'));
// }

// function cssInjection(content) {
//     return content
//         .replace(/import\s(\')?(\")?\.\/style(\/index)?(\')?(\")?(\;)?/g, '')
//         .replace(/\.module\.scss/g, '.module.css.json')
// }

// function compileModuleStyle() {
//     return src('../es/**/*.module.css')
//         .pipe(postcss([postcssModules({
//             generateScopedName: function (name, filename, css) {
//                 if (name === 'sfx-react-ui-theme') {
//                     return name
//                 } else {
//                     var path = require("path");
//                     var i = css.indexOf("." + name);
//                     var line = css.substr(0, i).split(/[\r\n]/).length;
//                     var file = path.basename(filename, ".css");

//                     return ("_" + file + "_" + line + "_" + name).replace('.module_', '_').replace(/\./g, '_');
//                 }

//             },
//         }), autoprefixer()]))
//         .pipe(cssmin())
//         .pipe(dest('../es'));

// }

function streamTask() {
  // process.env.BABEL_ENV = "esm";
  return (
    src(['./components/**/*.@(js|jsx)', '!./components/**/*.spec.js'])
      .pipe(
        babel({
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false
              }
            ],
            '@babel/preset-react'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true
              }
            ]
          ]
        })
      )
      // .pipe(
      //     through2.obj(function z(file, encoding, next) {
      //         this.push(file.clone());
      //         const content = file.contents.toString(encoding);
      //         file.contents = Buffer.from(cssInjection(content));
      //         this.push(file);
      //         next();
      //     }),
      // )
      .pipe(dest('./es'))
  );
}

// function concatCss() {
//     return src(['./es/**/*.css',])
//         .pipe(concat('react-ui.css'))
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(dest('./es/@zq'))

// }

exports.default = series(compileStyle, streamTask);
