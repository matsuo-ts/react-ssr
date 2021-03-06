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
var httpProxyMiddleware = require('http-proxy-middleware');
var WebpackDevServer = _interopDefault(require('webpack-dev-server'));

var cwd = process.cwd();

var ufs = require('unionfs').ufs;

var memfs = new MemoryFileSystem();
ufs.use(fs).use(memfs);
var development = /*#__PURE__*/(function () {
  var _ref = register.asyncToGenerator( /*#__PURE__*/register.regenerator.mark(function _callee(app) {
    var _yield$getEntry, _yield$getEntry2, entry, entryPages, webpackConfig, compiler, devServerPort;

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
            devServerPort = 8888;
            _context.next = 13;
            return new helpers.promise(function (resolve, reject) {
              var devServer = new WebpackDevServer(compiler, {
                hotOnly: true,
                noInfo: true,
                stats: 'errors-only',
                overlay: false,
                compress: false,
                serveIndex: false,
                after: function after(app, server, compiler) {
                  var memfs = compiler.outputFileSystem;

                  var _loop = function _loop(i) {
                    var page = entryPages[i];
                    var pageId = register.getPageId(page, '_');
                    app.get("/_react-ssr/".concat(pageId, ".css"), function (req, res) {
                      var filename = path$1.join(cwd, register.ssrConfig.distDir, "".concat(pageId, ".css"));
                      var style = memfs.existsSync(filename) ? memfs.readFileSync(filename).toString() : '';
                      res.writeHead(200, {
                        'Content-Type': 'text/css'
                      });
                      res.end(style, 'utf-8');
                    });
                    app.get("/_react-ssr/".concat(pageId, ".js"), function (req, res) {
                      var filename = path$1.join(cwd, register.ssrConfig.distDir, "".concat(pageId, ".js"));
                      var script = memfs.readFileSync(filename).toString();
                      res.status(200).type('.js').send(script);
                    });
                  };

                  for (var i = 0; i < entryPages.length; i++) {
                    _loop(i);
                  }
                }
              });
              devServer.listen(devServerPort, function (err) {
                reject(err);
              });
              var proxyMiddleware = httpProxyMiddleware.createProxyMiddleware({
                target: "http://localhost:".concat(devServerPort),
                changeOrigin: true,
                ws: true,
                logLevel: 'error'
              });
              app.use('/*.css', proxyMiddleware);
              app.use('/*.js', proxyMiddleware);
              app.use('/*.json', proxyMiddleware);
              app.use('/sockjs-node*', proxyMiddleware);
              resolve();
            });

          case 13:
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

exports.default = development;
