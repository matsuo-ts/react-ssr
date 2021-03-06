'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var register = require('./register-9eb87bae.js');
var path$1 = _interopDefault(require('path'));
var fse = _interopDefault(require('fs-extra'));
require('react');
require('slash');
require('lz-string');
require('urlsafe-base64');
var fs = _interopDefault(require('fs'));
require('recursive-readdir');
var helpers = require('./helpers-7a4405ee.js');
var MemoryFileSystem = _interopDefault(require('memory-fs'));
var webpack = _interopDefault(require('webpack'));
require('webpack-merge');
require('mini-css-extract-plugin');
require('optimize-css-assets-webpack-plugin');
require('terser-webpack-plugin');

var cwd = process.cwd();

var ufs = require('unionfs').ufs;

var memfs = new MemoryFileSystem();
ufs.use(fs).use(memfs);
var production = /*#__PURE__*/(function () {
  var _ref = register.asyncToGenerator( /*#__PURE__*/register.regenerator.mark(function _callee(app) {
    var _yield$getEntry, _yield$getEntry2, entry, entryPages, webpackConfig, compiler;

    return register.regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fse.removeSync(path$1.join(cwd, register.ssrConfig.distDir));
            _context.next = 3;
            return helpers.getEntry(memfs);

          case 3:
            _yield$getEntry = _context.sent;
            _yield$getEntry2 = helpers.slicedToArray(_yield$getEntry, 2);
            entry = _yield$getEntry2[0];
            entryPages = _yield$getEntry2[1];
            webpackConfig = helpers.configureWebpack(entry);
            compiler = webpack(webpackConfig);
            compiler.inputFileSystem = ufs;
            _context.next = 12;
            return new helpers.promise(function (resolve, reject) {
              compiler.run(function (err, stats) {
                err && reject(err.stack || err);
                stats.hasErrors() && reject(stats.toString());

                var _loop = function _loop(i) {
                  var page = entryPages[i];
                  var pageId = register.getPageId(page, '_');
                  app.use("/_react-ssr/".concat(pageId, ".css"), function (req, res) {
                    var filename = path$1.join(cwd, register.ssrConfig.distDir, "".concat(pageId, ".css"));
                    var style = register.existsSync(filename) ? fs.readFileSync(filename).toString() : '';
                    res.writeHead(200, {
                      'Content-Type': 'text/css'
                    });
                    res.end(style, 'utf-8');
                  });
                  app.use("/_react-ssr/".concat(pageId, ".js"), function (req, res) {
                    var filename = path$1.join(cwd, register.ssrConfig.distDir, "".concat(pageId, ".js"));
                    var script = fs.readFileSync(filename).toString();
                    res.status(200).type('.js').send(script);
                  });
                };

                for (var i = 0; i < entryPages.length; i++) {
                  _loop(i);
                }

                resolve();
              });
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = production;
