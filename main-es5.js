function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-life-control></app-life-control>\n<app-pixel-size-control></app-pixel-size-control>\n<app-life-canvas></app-life-canvas>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/glider-mode-switch/glider-mode-switch.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/glider-mode-switch/glider-mode-switch.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGliderModeSwitchGliderModeSwitchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"gliderMode\">\n    <input type=\"checkbox\" id=\"gliderModeCheckbox\" [value]=\"gliderMode\" (change)=\"onModeChange($event)\" [checked]=\"!gliderMode\">\n    <label class=\"gliderModeLabel\" for=\"gliderModeCheckbox\">\n        <span class=\"gliderModeInner\"></span>\n    </label>\n</div>\n\n<div>\n    <div *ngIf=\"gliderMode\" class=\"gliderDirection\">\n        <label class=\"gliderDirectionLabel\">\n            <input type=\"radio\"\n                    class=\"gliderDirectionRadio\"\n                    name=\"gliderDirection\"\n                    [value]=\"upLeft\"\n                    (change)=\"onDirectionChange($event)\"\n                    [checked]=\"upLeft === gliderDirection\"\n                    >\n            <span class=\"gliderDirectionBox\"></span>\n        </label>\n        <label class=\"gliderDirectionLabel\">\n            <input type=\"radio\"\n                    class=\"gliderDirectionRadio\"\n                    name=\"gliderDirection\"\n                    [value]=\"upRight\"\n                    (change)=\"onDirectionChange($event)\"\n                    [checked]=\"upRight === gliderDirection\"\n                   >\n            <span class=\"gliderDirectionBox\"></span>\n        </label>\n        <label class=\"gliderDirectionLabel\">\n            <input type=\"radio\"\n                    class=\"gliderDirectionRadio\"\n                    name=\"gliderDirection\"\n                    [value]=\"downLeft\"\n                    (change)=\"onDirectionChange($event)\"\n                    [checked]=\"downLeft === gliderDirection\"\n                   >\n            <span class=\"gliderDirectionBox\"></span>\n        </label>\n        <label class=\"gliderDirectionLabel\">\n            <input type=\"radio\"\n                    class=\"gliderDirectionRadio\"\n                    name=\"gliderDirection\"\n                    [value]=\"downRight\"\n                    (change)=\"onDirectionChange($event)\"\n                    [checked]=\"downRight === gliderDirection\"\n                   >\n            <span class=\"gliderDirectionBox\"></span>\n        </label>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/life-canvas/life-canvas.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/life-canvas/life-canvas.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLifeCanvasLifeCanvasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<canvas #canvas id=\"lifeCanvas\" width=\"{{Width}}\" height=\"{{Height}}\" (click)=\"onCanvasClick($event)\">\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/life-control/life-control.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/life-control/life-control.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLifeControlLifeControlComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!lifeStarted && generationsPassed === 0; then showDropdown else showGenerations\"></div>\n<ng-template #showDropdown>\n    <select class=\"lifeStartDropDown\" name=\"role\" [value]=\"selectedOption\" (change)=\"onStartModeChange($event)\">\n        <option *ngFor=\"let option of startOptionKeys\" [ngValue]=\"option\">{{startOptions[option]}}</option>\n    </select>\n</ng-template>\n<ng-template #showGenerations>\n    <h2 class=\"lifeText\">Generations passed {{generationsPassed}}</h2>\n</ng-template>\n\n<form class=\"lifeForm\" (ngSubmit)=\"onStartStop()\" (reset)=\"onReset()\">\n    <ng-container *ngIf=\"lifeStarted; then started else notStarted\"></ng-container>\n    <ng-template #started>\n        <button class=\"lifeControlButton lifeStarted\" type=\"submit\">Stop life simulation</button>\n    </ng-template>\n    <ng-template #notStarted>\n        <ng-container *ngIf=\"generationsPassed === 0; then zeroGenerations else nonZeroGenerations\"></ng-container>\n        <ng-template #zeroGenerations>\n            <button class=\"lifeControlButton\" type=\"submit\">Start life simulation</button>\n        </ng-template>\n        <ng-template #nonZeroGenerations>\n            <button class=\"lifeControlButton\" type=\"submit\">Resume life simulation</button>\n            <button class=\"lifeControlButton\" type=\"reset\">Reset life simulation</button>\n        </ng-template>\n    </ng-template>\n</form>\n\n<app-glider-mode-switch></app-glider-mode-switch>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pixel-size-control/pixel-size-control.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pixel-size-control/pixel-size-control.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPixelSizeControlPixelSizeControlComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input *ngIf=\"Enabled\" type=\"range\" min=\"2\" max=\"50\" step=\"2\" [value]=\"PixelSize\" class=\"lifeSlider\" (change)=\"onSliderValueChange($event)\">\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'AngularLife';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _life_control_life_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./life-control/life-control.component */
    "./src/app/life-control/life-control.component.ts");
    /* harmony import */


    var _glider_mode_switch_glider_mode_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./glider-mode-switch/glider-mode-switch.component */
    "./src/app/glider-mode-switch/glider-mode-switch.component.ts");
    /* harmony import */


    var _life_canvas_life_canvas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./life-canvas/life-canvas.component */
    "./src/app/life-canvas/life-canvas.component.ts");
    /* harmony import */


    var _pixel_size_control_pixel_size_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pixel-size-control/pixel-size-control.component */
    "./src/app/pixel-size-control/pixel-size-control.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _life_control_life_control_component__WEBPACK_IMPORTED_MODULE_6__["LifeControlComponent"], _glider_mode_switch_glider_mode_switch_component__WEBPACK_IMPORTED_MODULE_7__["GliderModeSwitchComponent"], _life_canvas_life_canvas_component__WEBPACK_IMPORTED_MODULE_8__["LifeCanvasComponent"], _pixel_size_control_pixel_size_control_component__WEBPACK_IMPORTED_MODULE_9__["PixelSizeControlComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/game-model/cell.ts":
  /*!************************************!*\
    !*** ./src/app/game-model/cell.ts ***!
    \************************************/

  /*! exports provided: cell, cellData */

  /***/
  function srcAppGameModelCellTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cell", function () {
      return cell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cellData", function () {
      return cellData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var cell = function cell(isAlive) {
      _classCallCheck(this, cell);

      this.neighboursAlive = 0;
      this.isAlive = isAlive;
    };

    var cellData = function cellData() {
      _classCallCheck(this, cellData);
    };
    /***/

  },

  /***/
  "./src/app/game-model/gliderDirection.ts":
  /*!***********************************************!*\
    !*** ./src/app/game-model/gliderDirection.ts ***!
    \***********************************************/

  /*! exports provided: gliderDirection */

  /***/
  function srcAppGameModelGliderDirectionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gliderDirection", function () {
      return gliderDirection;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var gliderDirection;

    (function (gliderDirection) {
      gliderDirection[gliderDirection["UpLeft"] = 0] = "UpLeft";
      gliderDirection[gliderDirection["UpRight"] = 1] = "UpRight";
      gliderDirection[gliderDirection["DownLeft"] = 2] = "DownLeft";
      gliderDirection[gliderDirection["DownRight"] = 3] = "DownRight";
    })(gliderDirection || (gliderDirection = {}));
    /***/

  },

  /***/
  "./src/app/game-model/grid.ts":
  /*!************************************!*\
    !*** ./src/app/game-model/grid.ts ***!
    \************************************/

  /*! exports provided: grid */

  /***/
  function srcAppGameModelGridTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "grid", function () {
      return grid;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cell */
    "./src/app/game-model/cell.ts");
    /* harmony import */


    var _startOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./startOptions */
    "./src/app/game-model/startOptions.ts");

    var grid =
    /*#__PURE__*/
    function () {
      function grid(width, height) {
        _classCallCheck(this, grid);

        this.width = width;
        this.height = height;
        this.cells = new Array(width * height);
        this.cellsNext = new Array(width * height);

        for (var i = 0; i !== height; i++) {
          var row = i * width;

          for (var j = 0; j !== width; j++) {
            this.cells[row + j] = new _cell__WEBPACK_IMPORTED_MODULE_1__["cell"](false);
            this.cellsNext[row + j] = new _cell__WEBPACK_IMPORTED_MODULE_1__["cell"](false);
          }
        }
      }

      _createClass(grid, [{
        key: "calcNextGen",
        value: function calcNextGen() {
          var alive = [];
          var dead = [];

          for (var i = 0; i !== this.cells.length; i++) {
            this.cellsNext[i].neighboursAlive = this.cells[i].neighboursAlive;
          }

          for (var _i = 0; _i !== this.height; _i++) {
            var row = _i * this.width;

            for (var j = 0; j !== this.width; j++) {
              var cell = this.cells[row + j];
              var cellNextGen = this.cellsNext[row + j];
              cellNextGen.isAlive = grid.prepareNextState(cell);

              if (cellNextGen.isAlive !== cell.isAlive) {
                this.updateCellNeighbours(this.cellsNext, _i, j, cellNextGen.isAlive);
                (cellNextGen.isAlive ? alive : dead).push({
                  x: j,
                  y: _i
                });
              }
            }
          }

          var _ref = [this.cellsNext, this.cells];
          this.cells = _ref[0];
          this.cellsNext = _ref[1];
          return [alive, dead];
        }
      }, {
        key: "set",
        value: function set(x, y, isAlive) {
          var cell = this.cells[y * this.width + x];

          if (cell.isAlive !== isAlive) {
            cell.isAlive = isAlive;
            this.updateCellNeighbours(this.cells, y, x, isAlive);
          }
        }
      }, {
        key: "populate",
        value: function populate(options) {
          var probability = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;

          switch (options) {
            case _startOptions__WEBPACK_IMPORTED_MODULE_2__["startOptions"].Random:
              this.populateRandomGrid(probability);
              break;

            case _startOptions__WEBPACK_IMPORTED_MODULE_2__["startOptions"].Blank:
            default:
              break;
          }
        }
      }, {
        key: "populateRandomGrid",
        value: function populateRandomGrid(probability) {
          for (var i = 0; i !== this.height; i++) {
            var row = i * this.width;

            for (var j = 0; j !== this.width; j++) {
              var outcome = Math.random() < probability ? true : false;
              this.cells[row + j].isAlive = outcome;

              if (outcome) {
                this.updateCellNeighbours(this.cells, i, j, outcome);
              }
            }
          }
        }
      }, {
        key: "updateCellNeighbours",
        value: function updateCellNeighbours(cells, row, column, newValue) {
          var upRow = (row === 0 ? this.height - 1 : row - 1) * this.width;
          var downRow = (row === this.height - 1 ? 0 : row + 1) * this.width;
          var left = column === 0 ? this.width - 1 : column - 1;
          var right = column === this.width - 1 ? 0 : column + 1;
          var rowWidth = row * this.width;

          if (newValue) {
            cells[upRow + left].neighboursAlive++;
            cells[upRow + column].neighboursAlive++;
            cells[upRow + right].neighboursAlive++;
            cells[rowWidth + left].neighboursAlive++;
            cells[rowWidth + right].neighboursAlive++;
            cells[downRow + left].neighboursAlive++;
            cells[downRow + column].neighboursAlive++;
            cells[downRow + right].neighboursAlive++;
          } else {
            cells[upRow + left].neighboursAlive--;
            cells[upRow + column].neighboursAlive--;
            cells[upRow + right].neighboursAlive--;
            cells[rowWidth + left].neighboursAlive--;
            cells[rowWidth + right].neighboursAlive--;
            cells[downRow + left].neighboursAlive--;
            cells[downRow + column].neighboursAlive--;
            cells[downRow + right].neighboursAlive--;
          }
        }
      }], [{
        key: "create",
        value: function create(width, height, options) {
          var probability = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
          var newGrid = new grid(width, height);
          newGrid.populate(options, probability);
          return newGrid;
        }
      }, {
        key: "prepareNextState",
        value: function prepareNextState(cell) {
          var nextState = cell.isAlive;

          if (nextState && cell.neighboursAlive < 2) {
            nextState = false;
          } else if (nextState && cell.neighboursAlive > 3) {
            nextState = false;
          } else if (!nextState && cell.neighboursAlive === 3) {
            nextState = true;
          }

          return nextState;
        }
      }]);

      return grid;
    }();
    /***/

  },

  /***/
  "./src/app/game-model/lifeFormHelper.ts":
  /*!**********************************************!*\
    !*** ./src/app/game-model/lifeFormHelper.ts ***!
    \**********************************************/

  /*! exports provided: getGlider */

  /***/
  function srcAppGameModelLifeFormHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getGlider", function () {
      return getGlider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _gliderDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./gliderDirection */
    "./src/app/game-model/gliderDirection.ts");

    function getGlider(direction, grid, x, y) {
      var up = (y === 0 ? grid.height : y) - 1;
      var down = y === grid.height - 1 ? 0 : y + 1;
      var left = (x === 0 ? grid.width : x) - 1;
      var right = x === grid.width - 1 ? 0 : x + 1;

      switch (direction) {
        case _gliderDirection__WEBPACK_IMPORTED_MODULE_1__["gliderDirection"].UpLeft:
          {
            return [[left, up, true], [x, up, true], [right, up, true], [left, y, true], [x, y, false], [right, y, false], [left, down, false], [x, down, true], [right, down, false]];
          }

        case _gliderDirection__WEBPACK_IMPORTED_MODULE_1__["gliderDirection"].UpRight:
          {
            return [[left, up, true], [x, up, true], [right, up, true], [left, y, false], [x, y, false], [right, y, true], [left, down, false], [x, down, true], [right, down, false]];
          }

        case _gliderDirection__WEBPACK_IMPORTED_MODULE_1__["gliderDirection"].DownLeft:
          {
            return [[left, up, false], [x, up, true], [right, up, false], [left, y, true], [x, y, false], [right, y, false], [left, down, true], [x, down, true], [right, down, true]];
          }

        case _gliderDirection__WEBPACK_IMPORTED_MODULE_1__["gliderDirection"].DownRight:
          {
            return [[left, up, false], [x, up, true], [right, up, false], [left, y, false], [x, y, false], [right, y, true], [left, down, true], [x, down, true], [right, down, true]];
          }

        default:
          return [];
      }

      ;
    }
    /***/

  },

  /***/
  "./src/app/game-model/startOptions.ts":
  /*!********************************************!*\
    !*** ./src/app/game-model/startOptions.ts ***!
    \********************************************/

  /*! exports provided: startOptions */

  /***/
  function srcAppGameModelStartOptionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startOptions", function () {
      return startOptions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var startOptions;

    (function (startOptions) {
      startOptions["Blank"] = "Blank";
      startOptions["Random"] = "Random (10% alive)";
    })(startOptions || (startOptions = {}));
    /***/

  },

  /***/
  "./src/app/glider-mode-switch/glider-mode-switch.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/glider-mode-switch/glider-mode-switch.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGliderModeSwitchGliderModeSwitchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host, .gliderModeLabel, .gliderModeInner, .gliderDirection, .gliderDirectionBox {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.gliderModeLabel {\r\n    overflow: hidden;\r\n    max-height: calc(var(--controlPanelHeight) + 4px);\r\n    min-width: -webkit-max-content;\r\n    min-width: -moz-max-content;\r\n    min-width: max-content;\r\n    margin: 0px 2px;\r\n    font-weight: bold;\r\n    border-radius: 20px;\r\n    border: 2px solid var(--niceDarkGreyColor);\r\n}\r\n\r\n.gliderModeLabel, .gliderDirectionLabel {\r\n    cursor: pointer;\r\n}\r\n\r\n.gliderModeInner:before, .gliderDirectionBox {\r\n    background-color: var(--niceLightGreyColor);\r\n}\r\n\r\n.gliderModeInner:after {\r\n    background-color: var(--niceDarkGreyColor);\r\n    color: white;\r\n}\r\n\r\n.gliderMode {\r\n    position: relative;\r\n}\r\n\r\n.gliderMode input#gliderModeCheckbox {\r\n    display: none;\r\n}\r\n\r\n.gliderModeInner {\r\n    width: 130px;\r\n    min-width: 200%;\r\n    margin-left: -100%;\r\n    margin-right: 2px;\r\n    -webkit-transition: margin 0.3s ease-in 0s;\r\n    transition: margin 0.3s ease-in 0s;\r\n    text-align: center;\r\n}\r\n\r\n.gliderModeInner:before, .gliderModeInner:after {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\n.gliderModeInner:before {\r\n    content: \"Pointer mode\";\r\n}\r\n\r\n.gliderModeInner:after {\r\n    content: \"Glider mode\";\r\n}\r\n\r\n#gliderModeCheckbox:checked + .gliderModeLabel .gliderModeInner {\r\n    margin-left: 2px;\r\n}\r\n\r\n.gliderDirection {\r\n    flex-wrap: wrap;\r\n    margin: 2px;\r\n    width: var(--controlPanelHeight);\r\n    height: var(--controlPanelHeight);\r\n    min-width: var(--controlPanelHeight);\r\n    min-height: var(--controlPanelHeight);\r\n}\r\n\r\n.gliderDirectionLabel {\r\n    width: 50%;\r\n    height: 50%;\r\n}\r\n\r\n.gliderDirectionLabel:hover input.gliderDirectionRadio ~ .gliderDirectionBox {\r\n    background-color: darkslategray;\r\n}\r\n\r\n.gliderDirectionLabel input.gliderDirectionRadio:checked ~ .gliderDirectionBox {\r\n    background-color: var(--niceDarkGreyColor);\r\n}\r\n\r\n.gliderDirectionRadio {\r\n    display: none;\r\n}\r\n\r\n.gliderDirectionBox {\r\n    height: 95%;\r\n    width: 95%;\r\n    border: solid;\r\n    border-width: 1px;\r\n    border-color: var(--niceDarkGreyColor);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xpZGVyLW1vZGUtc3dpdGNoL2dsaWRlci1tb2RlLXN3aXRjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBSXBCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaURBQWlEO0lBQ2pELDhCQUFzQjtJQUF0QiwyQkFBc0I7SUFBdEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMENBQWtDO0lBQWxDLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixzQ0FBc0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9nbGlkZXItbW9kZS1zd2l0Y2gvZ2xpZGVyLW1vZGUtc3dpdGNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCwgLmdsaWRlck1vZGVMYWJlbCwgLmdsaWRlck1vZGVJbm5lciwgLmdsaWRlckRpcmVjdGlvbiwgLmdsaWRlckRpcmVjdGlvbkJveCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZ2xpZGVyTW9kZUxhYmVsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKHZhcigtLWNvbnRyb2xQYW5lbEhlaWdodCkgKyA0cHgpO1xyXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIG1hcmdpbjogMHB4IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW5pY2VEYXJrR3JleUNvbG9yKTtcclxufVxyXG5cclxuLmdsaWRlck1vZGVMYWJlbCwgLmdsaWRlckRpcmVjdGlvbkxhYmVsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmdsaWRlck1vZGVJbm5lcjpiZWZvcmUsIC5nbGlkZXJEaXJlY3Rpb25Cb3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmljZUxpZ2h0R3JleUNvbG9yKTtcclxufVxyXG5cclxuLmdsaWRlck1vZGVJbm5lcjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWNlRGFya0dyZXlDb2xvcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5nbGlkZXJNb2RlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdsaWRlck1vZGUgaW5wdXQjZ2xpZGVyTW9kZUNoZWNrYm94IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5nbGlkZXJNb2RlSW5uZXIge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4zcyBlYXNlLWluIDBzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ2xpZGVyTW9kZUlubmVyOmJlZm9yZSwgLmdsaWRlck1vZGVJbm5lcjphZnRlciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5nbGlkZXJNb2RlSW5uZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiUG9pbnRlciBtb2RlXCI7XHJcbn1cclxuXHJcbi5nbGlkZXJNb2RlSW5uZXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJHbGlkZXIgbW9kZVwiO1xyXG59XHJcblxyXG4jZ2xpZGVyTW9kZUNoZWNrYm94OmNoZWNrZWQgKyAuZ2xpZGVyTW9kZUxhYmVsIC5nbGlkZXJNb2RlSW5uZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLmdsaWRlckRpcmVjdGlvbiB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHdpZHRoOiB2YXIoLS1jb250cm9sUGFuZWxIZWlnaHQpO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1jb250cm9sUGFuZWxIZWlnaHQpO1xyXG4gICAgbWluLXdpZHRoOiB2YXIoLS1jb250cm9sUGFuZWxIZWlnaHQpO1xyXG4gICAgbWluLWhlaWdodDogdmFyKC0tY29udHJvbFBhbmVsSGVpZ2h0KTtcclxufVxyXG5cclxuLmdsaWRlckRpcmVjdGlvbkxhYmVsIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuLmdsaWRlckRpcmVjdGlvbkxhYmVsOmhvdmVyIGlucHV0LmdsaWRlckRpcmVjdGlvblJhZGlvIH4gLmdsaWRlckRpcmVjdGlvbkJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG59XHJcblxyXG4uZ2xpZGVyRGlyZWN0aW9uTGFiZWwgaW5wdXQuZ2xpZGVyRGlyZWN0aW9uUmFkaW86Y2hlY2tlZCB+IC5nbGlkZXJEaXJlY3Rpb25Cb3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmljZURhcmtHcmV5Q29sb3IpO1xyXG59XHJcblxyXG4uZ2xpZGVyRGlyZWN0aW9uUmFkaW8ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmdsaWRlckRpcmVjdGlvbkJveCB7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW5pY2VEYXJrR3JleUNvbG9yKTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/glider-mode-switch/glider-mode-switch.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/glider-mode-switch/glider-mode-switch.component.ts ***!
    \********************************************************************/

  /*! exports provided: GliderModeSwitchComponent */

  /***/
  function srcAppGliderModeSwitchGliderModeSwitchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GliderModeSwitchComponent", function () {
      return GliderModeSwitchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _game_model_gliderDirection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../game-model/gliderDirection */
    "./src/app/game-model/gliderDirection.ts");
    /* harmony import */


    var _life_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../life-control.service */
    "./src/app/life-control.service.ts");

    var GliderModeSwitchComponent =
    /*#__PURE__*/
    function () {
      function GliderModeSwitchComponent(lifeControlService) {
        _classCallCheck(this, GliderModeSwitchComponent);

        this.lifeControlService = lifeControlService;
        this.upLeft = _game_model_gliderDirection__WEBPACK_IMPORTED_MODULE_2__["gliderDirection"].UpLeft;
        this.upRight = _game_model_gliderDirection__WEBPACK_IMPORTED_MODULE_2__["gliderDirection"].UpRight;
        this.downLeft = _game_model_gliderDirection__WEBPACK_IMPORTED_MODULE_2__["gliderDirection"].DownLeft;
        this.downRight = _game_model_gliderDirection__WEBPACK_IMPORTED_MODULE_2__["gliderDirection"].DownRight;
        this.gliderDirection = lifeControlService.DefaultGliderDirection;
        this.gliderMode = lifeControlService.DefaultGliderMode;
      }

      _createClass(GliderModeSwitchComponent, [{
        key: "onModeChange",
        value: function onModeChange(event) {
          this.gliderMode = !this.gliderMode;
          this.lifeControlService.changeGliderMode(this.gliderMode, this.gliderDirection);
        }
      }, {
        key: "onDirectionChange",
        value: function onDirectionChange(event) {
          this.gliderDirection = event.target.value;
          this.lifeControlService.changeGliderMode(this.gliderMode, this.gliderDirection);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GliderModeSwitchComponent;
    }();

    GliderModeSwitchComponent.ctorParameters = function () {
      return [{
        type: _life_control_service__WEBPACK_IMPORTED_MODULE_3__["LifeControlService"]
      }];
    };

    GliderModeSwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-glider-mode-switch',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./glider-mode-switch.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/glider-mode-switch/glider-mode-switch.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./glider-mode-switch.component.css */
      "./src/app/glider-mode-switch/glider-mode-switch.component.css")).default]
    })], GliderModeSwitchComponent);
    /***/
  },

  /***/
  "./src/app/life-canvas/life-canvas.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/life-canvas/life-canvas.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLifeCanvasLifeCanvasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "canvas {\r\n    border: 2px solid black;\r\n    background-color: white;\r\n}\r\n\r\n#lifeCanvas {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZS1jYW52YXMvbGlmZS1jYW52YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbGlmZS1jYW52YXMvbGlmZS1jYW52YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbGlmZUNhbnZhcyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/life-canvas/life-canvas.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/life-canvas/life-canvas.component.ts ***!
    \******************************************************/

  /*! exports provided: LifeCanvasComponent */

  /***/
  function srcAppLifeCanvasLifeCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LifeCanvasComponent", function () {
      return LifeCanvasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _game_model_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../game-model/grid */
    "./src/app/game-model/grid.ts");
    /* harmony import */


    var _life_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../life-control.service */
    "./src/app/life-control.service.ts");
    /* harmony import */


    var _game_model_lifeFormHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../game-model/lifeFormHelper */
    "./src/app/game-model/lifeFormHelper.ts");

    var LifeCanvasComponent =
    /*#__PURE__*/
    function () {
      function LifeCanvasComponent(lifeControlService, ref) {
        _classCallCheck(this, LifeCanvasComponent);

        this.lifeControlService = lifeControlService;
        this.ref = ref;
        this.CellPixelSize = 4;
        this.CellBorderSize = 1;
        this.subs = [];
        this.nextFrame = true;
        this.CellPixelSize = lifeControlService.DefaultPixelSize;
        this.StartOptions = lifeControlService.DefaultStartOptions;
        this.onPixelSizeChange = this.onPixelSizeChange.bind(this);
        this.onStartOptionsChange = this.onStartOptionsChange.bind(this);
        this.onLifeStateChanged = this.onLifeStateChanged.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onCanvasClick = this.onCanvasClick.bind(this);
        this.onGliderModeChange = this.onGliderModeChange.bind(this);
        this.subs.push(this.lifeControlService.StartOptions$.subscribe(this.onStartOptionsChange));
        this.subs.push(this.lifeControlService.CellPixelSize$.subscribe(this.onPixelSizeChange));
        this.subs.push(this.lifeControlService.LifeState$.subscribe(this.onLifeStateChanged));
        this.subs.push(this.lifeControlService.Reset$.subscribe(this.onReset));
        this.subs.push(this.lifeControlService.GliderMode$.subscribe(this.onGliderModeChange));
      }

      _createClass(LifeCanvasComponent, [{
        key: "onLifeStateChanged",
        value: function onLifeStateChanged(state) {
          var _this = this;

          if (state) {
            this.interval = setInterval(function () {
              if (_this.nextFrame) {
                var _this$grid$calcNextGe = _this.grid.calcNextGen(),
                    _this$grid$calcNextGe2 = _slicedToArray(_this$grid$calcNextGe, 2),
                    alive = _this$grid$calcNextGe2[0],
                    dead = _this$grid$calcNextGe2[1];

                _this.paint(alive, dead);

                _this.lifeControlService.upCount();
              }
            }, 15);
          } else {
            clearInterval(this.interval);
          }
        }
      }, {
        key: "onPixelSizeChange",
        value: function onPixelSizeChange(pixelSize) {
          this.clear();
          this.updatePixelSize(pixelSize);
          this.onReset();
        }
      }, {
        key: "onStartOptionsChange",
        value: function onStartOptionsChange(startOptions) {
          this.clear();
          this.StartOptions = startOptions;
          this.onReset();
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.grid = _game_model_grid__WEBPACK_IMPORTED_MODULE_2__["grid"].create(this.Cols, this.Rows, this.StartOptions);
          this.renderGrid(this.grid);
        }
      }, {
        key: "onCanvasClick",
        value: function onCanvasClick(event) {
          var _this2 = this;

          if (!event) {
            return;
          }

          var x = Math.floor(event.offsetX / this.CellPixelSize);
          var y = Math.floor(event.offsetY / this.CellPixelSize);
          var alive = [];
          var dead = [];

          if (this.isGliderMode) {
            // Enums in typescript ONE LOVE. Remove the + and switching direciton will stop working.
            var cells = Object(_game_model_lifeFormHelper__WEBPACK_IMPORTED_MODULE_4__["getGlider"])(+this.gliderDirection, this.grid, x, y);
            cells.forEach(function (c) {
              var isAlive = c[2];
              var x = c[0];
              var y = c[1];

              _this2.grid.set(x, y, isAlive);

              (isAlive ? alive : dead).push({
                x: x,
                y: y
              });
            });
          } else {
            var isAlive = this.grid.cells[y * this.grid.width + x].isAlive;
            (isAlive ? dead : alive).push({
              x: x,
              y: y
            });
          }

          this.paint(alive, dead);
        }
      }, {
        key: "onGliderModeChange",
        value: function onGliderModeChange(gliderMode) {
          this.isGliderMode = gliderMode[0];
          this.gliderDirection = gliderMode[1];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.containerWidth = window.outerWidth * .97;
          this.containerHeight = window.outerHeight * .85;
          this.Cols = 2 * Math.floor(this.containerWidth / this.CellPixelSize / 2);
          this.Rows = 2 * Math.floor(this.containerHeight / this.CellPixelSize / 2);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.forEach(function (s) {
            return s.unsubscribe();
          });

          if (this.interval) {
            clearInterval(this.interval);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var canvas = this.canvas.nativeElement;
          this.context = canvas.getContext('2d');
          this.grid = _game_model_grid__WEBPACK_IMPORTED_MODULE_2__["grid"].create(this.Cols, this.Rows, this.StartOptions);
          this.renderGrid(this.grid);
        }
      }, {
        key: "updatePixelSize",
        value: function updatePixelSize(pixelSize) {
          this.CellPixelSize = pixelSize;
          this.Cols = 2 * Math.floor(this.containerWidth / this.CellPixelSize / 2);
          this.Rows = 2 * Math.floor(this.containerHeight / this.CellPixelSize / 2);
          this.ref.detectChanges();
        }
      }, {
        key: "renderGrid",
        value: function renderGrid(grid) {
          var alive = [];
          var dead = [];

          for (var i = 0; i !== grid.height; i++) {
            var row = i * grid.width;

            for (var j = 0; j !== grid.width; j++) {
              var cell = {
                x: j,
                y: i
              };
              (grid.cells[row + j].isAlive ? alive : dead).push(cell);
            }
          }

          this.paint(alive, dead);
        }
      }, {
        key: "paint",
        value: function paint(alive, dead) {
          if (dead) {
            this.context.fillStyle = 'white';
            this.paintCells(dead);
          }

          if (alive) {
            this.context.fillStyle = '#252525';
            this.paintCells(alive);
          }
        }
      }, {
        key: "paintCells",
        value: function paintCells(cells) {
          var size = this.CellPixelSize - this.CellBorderSize;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = cells[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var cell = _step.value;
              var x = cell.x * this.CellPixelSize + this.CellBorderSize;
              var y = cell.y * this.CellPixelSize + this.CellBorderSize;
              this.context.fillRect(x, y, size, size);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.context.clearRect(0, 0, this.Cols * this.CellPixelSize, this.Rows * this.CellPixelSize);
        }
      }, {
        key: "Width",
        get: function get() {
          return this.Cols * this.CellPixelSize;
        }
      }, {
        key: "Height",
        get: function get() {
          return this.Rows * this.CellPixelSize;
        }
      }]);

      return LifeCanvasComponent;
    }();

    LifeCanvasComponent.ctorParameters = function () {
      return [{
        type: _life_control_service__WEBPACK_IMPORTED_MODULE_3__["LifeControlService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', {
      static: false
    })], LifeCanvasComponent.prototype, "canvas", void 0);
    LifeCanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-life-canvas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./life-canvas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/life-canvas/life-canvas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./life-canvas.component.css */
      "./src/app/life-canvas/life-canvas.component.css")).default]
    })], LifeCanvasComponent);
    /***/
  },

  /***/
  "./src/app/life-control.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/life-control.service.ts ***!
    \*****************************************/

  /*! exports provided: LifeControlService */

  /***/
  function srcAppLifeControlServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LifeControlService", function () {
      return LifeControlService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _game_model_startOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./game-model/startOptions */
    "./src/app/game-model/startOptions.ts");
    /* harmony import */


    var _game_model_gliderDirection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./game-model/gliderDirection */
    "./src/app/game-model/gliderDirection.ts");

    var LifeControlService =
    /*#__PURE__*/
    function () {
      function LifeControlService() {
        _classCallCheck(this, LifeControlService);

        this.DefaultStartOptions = _game_model_startOptions__WEBPACK_IMPORTED_MODULE_3__["startOptions"].Random;
        this.DefaultPixelSize = 4;
        this.DefaultGliderDirection = _game_model_gliderDirection__WEBPACK_IMPORTED_MODULE_4__["gliderDirection"].UpRight;
        this.DefaultGliderMode = true;
        this._cellPixelSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._startOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._lifeState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._generationsUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._reset$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._gliderMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([this.DefaultGliderMode, this.DefaultGliderDirection]);
      }

      _createClass(LifeControlService, [{
        key: "changePixelSize",
        value: function changePixelSize(pixelSize) {
          this._cellPixelSize$.next(pixelSize);
        }
      }, {
        key: "startGen",
        value: function startGen() {
          this._lifeState$.next(true);
        }
      }, {
        key: "stopGen",
        value: function stopGen() {
          this._lifeState$.next(false);
        }
      }, {
        key: "changeStartOptions",
        value: function changeStartOptions(startOptions) {
          this._startOptions$.next(startOptions);
        }
      }, {
        key: "upCount",
        value: function upCount() {
          this._generationsUp$.next();
        }
      }, {
        key: "reset",
        value: function reset() {
          this._reset$.next();
        }
      }, {
        key: "changeGliderMode",
        value: function changeGliderMode(gliderMode, direction) {
          this._gliderMode$.next([gliderMode, direction]);
        }
      }, {
        key: "CellPixelSize$",
        get: function get() {
          return this._cellPixelSize$;
        }
      }, {
        key: "StartOptions$",
        get: function get() {
          return this._startOptions$;
        }
      }, {
        key: "LifeState$",
        get: function get() {
          return this._lifeState$;
        }
      }, {
        key: "Reset$",
        get: function get() {
          return this._reset$;
        }
      }, {
        key: "GliderMode$",
        get: function get() {
          return this._gliderMode$;
        }
      }, {
        key: "generationsUp$",
        get: function get() {
          return this._generationsUp$;
        }
      }]);

      return LifeControlService;
    }();

    LifeControlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LifeControlService);
    /***/
  },

  /***/
  "./src/app/life-control/life-control.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/life-control/life-control.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLifeControlLifeControlComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host, .lifeForm {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.lifeForm {\r\n    max-height: calc(var(--controlPanelHeight) + 4px);\r\n    min-width: -webkit-max-content;\r\n    min-width: -moz-max-content;\r\n    min-width: max-content;\r\n}\r\n\r\n:host {\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    height: var(--controlPanelHeight);\r\n    line-height: var(--controlPanelHeight);\r\n    min-width: 600px;\r\n    min-height: var(--controlPanelHeight);\r\n}\r\n\r\n.lifeText {\r\n    margin: 0px;\r\n    font-weight: normal;\r\n    line-height: inherit;\r\n}\r\n\r\n.lifeControlButton {\r\n    color: black;\r\n    margin: 0px 5px;\r\n    line-height: inherit;\r\n    font-size: 14px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    outline: none;\r\n    font-weight: bold;\r\n    border-radius: 20px;\r\n    border: 2px solid var(--niceDarkGreyColor);\r\n    cursor: pointer;\r\n    background-color: var(--niceLightGreyColor);\r\n}\r\n\r\n.lifeControlButton:hover {\r\n    background-color: var(--niceDarkGreyColor);\r\n    color: white;\r\n}\r\n\r\nselect.lifeStartDropDown {\r\n    border: 2px solid var(--niceDarkGreyColor);\r\n    margin: 2px 5px;\r\n    font-size: 14px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n    background-color: var(--niceLightGreyColor);\r\n    height: var(--controlPanelHeight);\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\nselect.lifeStartDropDown option:hover {\r\n    box-shadow: 0 0 10px 100px #1882A8 inset;\r\n}\r\n\r\nselect.lifeStartDropDown::-ms-expand {\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZS1jb250cm9sL2xpZmUtY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBSXBCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsaUNBQWlDO0lBQ2pDLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxlQUFlO0lBQ2YsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsaUJBQWlCO0lBQ2pCLDJDQUEyQztJQUMzQyxpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9saWZlLWNvbnRyb2wvbGlmZS1jb250cm9sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCwgLmxpZmVGb3JtIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5saWZlRm9ybSB7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKHZhcigtLWNvbnRyb2xQYW5lbEhlaWdodCkgKyA0cHgpO1xyXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1jb250cm9sUGFuZWxIZWlnaHQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWNvbnRyb2xQYW5lbEhlaWdodCk7XHJcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgbWluLWhlaWdodDogdmFyKC0tY29udHJvbFBhbmVsSGVpZ2h0KTtcclxufVxyXG5cclxuLmxpZmVUZXh0IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4ubGlmZUNvbnRyb2xCdXR0b24ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1uaWNlRGFya0dyZXlDb2xvcik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uaWNlTGlnaHRHcmV5Q29sb3IpO1xyXG59XHJcblxyXG4ubGlmZUNvbnRyb2xCdXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmljZURhcmtHcmV5Q29sb3IpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5zZWxlY3QubGlmZVN0YXJ0RHJvcERvd24ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbmljZURhcmtHcmV5Q29sb3IpO1xyXG4gICAgbWFyZ2luOiAycHggNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5pY2VMaWdodEdyZXlDb2xvcik7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWNvbnRyb2xQYW5lbEhlaWdodCk7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbnNlbGVjdC5saWZlU3RhcnREcm9wRG93biBvcHRpb246aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMTAwcHggIzE4ODJBOCBpbnNldDtcclxufVxyXG5zZWxlY3QubGlmZVN0YXJ0RHJvcERvd246Oi1tcy1leHBhbmQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/life-control/life-control.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/life-control/life-control.component.ts ***!
    \********************************************************/

  /*! exports provided: LifeControlComponent */

  /***/
  function srcAppLifeControlLifeControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LifeControlComponent", function () {
      return LifeControlComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _life_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../life-control.service */
    "./src/app/life-control.service.ts");
    /* harmony import */


    var _game_model_startOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../game-model/startOptions */
    "./src/app/game-model/startOptions.ts");

    var LifeControlComponent =
    /*#__PURE__*/
    function () {
      function LifeControlComponent(lifeControlService) {
        var _this3 = this;

        _classCallCheck(this, LifeControlComponent);

        this.lifeControlService = lifeControlService;
        this.startOptions = _game_model_startOptions__WEBPACK_IMPORTED_MODULE_3__["startOptions"];
        this.subs = [];
        this.lifeStarted = false;
        this.generationsPassed = 0;
        this.onReset = this.onReset.bind(this);
        this.selectedOption = lifeControlService.DefaultStartOptions;
        this.subs.push(this.lifeControlService.generationsUp$.subscribe(function () {
          _this3.generationsPassed++;
        }));
        this.subs.push(this.lifeControlService.CellPixelSize$.subscribe(this.onReset));
      }

      _createClass(LifeControlComponent, [{
        key: "onStartStop",
        value: function onStartStop() {
          if (this.lifeStarted) {
            this.lifeStarted = false;
            this.lifeControlService.stopGen();
          } else {
            this.lifeStarted = true;
            this.lifeControlService.startGen();
          }
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.lifeStarted = false;
          this.generationsPassed = 0;
          this.lifeControlService.reset();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }, {
        key: "onStartModeChange",
        value: function onStartModeChange(event) {
          this.selectedOption = event.target.value;
          this.lifeControlService.changeStartOptions(this.selectedOption);
        }
      }, {
        key: "startOptionKeys",
        get: function get() {
          return Object.keys(_game_model_startOptions__WEBPACK_IMPORTED_MODULE_3__["startOptions"]);
        }
      }]);

      return LifeControlComponent;
    }();

    LifeControlComponent.ctorParameters = function () {
      return [{
        type: _life_control_service__WEBPACK_IMPORTED_MODULE_2__["LifeControlService"]
      }];
    };

    LifeControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-life-control',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./life-control.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/life-control/life-control.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./life-control.component.css */
      "./src/app/life-control/life-control.component.css")).default]
    })], LifeControlComponent);
    /***/
  },

  /***/
  "./src/app/pixel-size-control/pixel-size-control.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/pixel-size-control/pixel-size-control.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPixelSizeControlPixelSizeControlComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.lifeSlider {\r\n    width: 100%;\r\n    height: 25px;\r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n}\r\n\r\n.lifeSlider:hover {\r\n    opacity: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGl4ZWwtc2l6ZS1jb250cm9sL3BpeGVsLXNpemUtY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBSXBCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BpeGVsLXNpemUtY29udHJvbC9waXhlbC1zaXplLWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5saWZlU2xpZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2QzZDNkMztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5saWZlU2xpZGVyOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pixel-size-control/pixel-size-control.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pixel-size-control/pixel-size-control.component.ts ***!
    \********************************************************************/

  /*! exports provided: PixelSizeControlComponent */

  /***/
  function srcAppPixelSizeControlPixelSizeControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PixelSizeControlComponent", function () {
      return PixelSizeControlComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _life_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../life-control.service */
    "./src/app/life-control.service.ts");

    var PixelSizeControlComponent =
    /*#__PURE__*/
    function () {
      function PixelSizeControlComponent(lifeControlService) {
        var _this4 = this;

        _classCallCheck(this, PixelSizeControlComponent);

        this.lifeControlService = lifeControlService;
        this.Enabled = true;
        this.PixelSize = 4;
        this.subs = [];
        this.subs.push(lifeControlService.LifeState$.subscribe(function (state) {
          if (state) {
            _this4.Enabled = false;
          }
        }));
        this.subs.push(lifeControlService.Reset$.subscribe(function () {
          _this4.Enabled = true;
        }));
      }

      _createClass(PixelSizeControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSliderValueChange",
        value: function onSliderValueChange(event) {
          if (event.target) {
            this.PixelSize = event.target.value;
            this.lifeControlService.changePixelSize(this.PixelSize);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }]);

      return PixelSizeControlComponent;
    }();

    PixelSizeControlComponent.ctorParameters = function () {
      return [{
        type: _life_control_service__WEBPACK_IMPORTED_MODULE_2__["LifeControlService"]
      }];
    };

    PixelSizeControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pixel-size-control',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pixel-size-control.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pixel-size-control/pixel-size-control.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pixel-size-control.component.css */
      "./src/app/pixel-size-control/pixel-size-control.component.css")).default]
    })], PixelSizeControlComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/AngularLife/AngularLife/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map