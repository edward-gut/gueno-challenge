"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cuit = cuit;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function cuit(_x, _x2) {
  return _cuit.apply(this, arguments);
}

function _cuit() {
  _cuit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, cuitData, _cuit2, userData, result;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return getCuit(id);

          case 3:
            cuitData = _context3.sent;

            if (!cuitData.data.success) {
              _context3.next = 13;
              break;
            }

            _cuit2 = cuitData.data.data.cuit;
            console.log(_cuit2);
            _context3.next = 9;
            return getUserData(_cuit2);

          case 9:
            userData = _context3.sent;

            if (userData.data.success) {
              result = userData.data;
              result.cuit = _cuit2;
              res.send(result);
            } else {
              res.status(204).send(userData.data.message);
            }

            _context3.next = 14;
            break;

          case 13:
            res.status(204).send(cuitData.data.message);

          case 14:
            return _context3.abrupt("return", res);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _cuit.apply(this, arguments);
}

var getCuit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _axios["default"].get('https://api.gueno.com.ar/challenge/getCuit/' + id);

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.response.data);
            return _context.abrupt("return", _context.t0.response);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function getCuit(_x3) {
    return _ref.apply(this, arguments);
  };
}();

var getUserData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _axios["default"].get('https://api.gueno.com.ar/challenge/getUserData/' + id);

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0.response.data);
            return _context2.abrupt("return", _context2.t0.response);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function getUserData(_x4) {
    return _ref2.apply(this, arguments);
  };
}();