"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resume",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_icons_svgs_namelogo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/icons/svgs/namelogo.svg */ \"./public/icons/svgs/namelogo.svg\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar _this = undefined;\n\n\n\n\n\n\n\nvar Navbar = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    _inherits(Navbar, Component);\n    var _super = _createSuper(Navbar);\n    function Navbar() {\n        _classCallCheck(this, Navbar);\n        return _super.apply(this, arguments);\n    }\n    _createClass(Navbar, [\n        {\n            key: \"render\",\n            value: function render() {\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Navbar),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: [\n                                        \"Shane Woods \\xa0\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"las la-home\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shanewoods/personal-website/components/navbar.js\",\n                                            lineNumber: 15,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shanewoods/personal-website/components/navbar.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/shanewoods/personal-website/components/navbar.js\",\n                                lineNumber: 13,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/shanewoods/personal-website/components/navbar.js\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navitem, {\n                                    text: \"Resume\",\n                                    path: \"resume\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanewoods/personal-website/components/navbar.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Navitem, {\n                                    text: \"Contact\",\n                                    path: \"contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shanewoods/personal-website/components/navbar.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shanewoods/personal-website/components/navbar.js\",\n                            lineNumber: 20,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shanewoods/personal-website/components/navbar.js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return Navbar;\n}(Component);\nvar Navitem = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Navitem),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/\" + props.path,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: props.text\n            }, void 0, false, {\n                fileName: \"/Users/shanewoods/personal-website/components/navbar.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/shanewoods/personal-website/components/navbar.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/shanewoods/personal-website/components/navbar.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_c = Navitem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navitem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDdUI7QUFDbEI7QUFDRjtBQUNBO0FBQzRCO0FBRXhELFVBQVksaUJBb0JUOzs7O2FBcEJHTSxNQUFNOzs7Ozs7WUFDUkMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7OEJBQ1AsOERBQUNDLEtBQUc7b0JBQUNDLFNBQVMsRUFBRVIseUVBQWE7O3NDQUUzQiw4REFBQ1MsS0FBRzs0QkFBQ0QsU0FBUyxFQUFFUix1RUFBVztzQ0FDekIsNEVBQUNHLGtEQUFJO2dDQUFDUSxJQUFJLEVBQUMsR0FBRzswQ0FDWiw0RUFBQ0MsR0FBQzs7d0NBQUMsa0JBQ0s7c0RBQUEsOERBQUNDLEdBQUM7NENBQUNMLFNBQVMsRUFBQyxhQUFhOzs7OztnREFBSzs7Ozs7O3dDQUNuQzs7Ozs7b0NBQ0M7Ozs7O2dDQUVIO3NDQUNOLDhEQUFDTSxJQUFFOzs4Q0FDRCw4REFBQ0MsT0FBTztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUNDLElBQUksRUFBQyxRQUFROzs7Ozt3Q0FBRzs4Q0FDdkMsOERBQUNGLE9BQU87b0NBQUNDLElBQUksRUFBQyxTQUFTO29DQUFDQyxJQUFJLEVBQUMsU0FBUzs7Ozs7d0NBQUc7Ozs7OztnQ0FDdEM7Ozs7Ozt3QkFDRDthQUNQOzs7O0NBQ0osQ0FsQm9CQyxTQUFTLENBa0I3QjtBQUVELElBQU1ILE9BQU8sR0FBRyxTQUFDSSxLQUFLLEVBQUs7SUFDekIscUJBQ0UsOERBQUNDLElBQUU7UUFBQ1osU0FBUyxFQUFFUiwwRUFBYztrQkFDM0IsNEVBQUNHLGtEQUFJO1lBQUNRLElBQUksRUFBRSxHQUFHLEdBQUdRLEtBQUssQ0FBQ0YsSUFBSTtzQkFDMUIsNEVBQUNMLEdBQUM7MEJBQ0NPLEtBQUssQ0FBQ0gsSUFBSTs7Ozs7cUJBQ1Q7Ozs7O2lCQUNDOzs7OzthQUNOLENBQ0o7Q0FDRjtBQVZLRCxLQUFBQSxPQUFPO0FBWWIsK0RBQWVWLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/NWI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IG5hbWVMb2dvIGZyb20gJy4uL3B1YmxpYy9pY29ucy9zdmdzL25hbWVsb2dvLnN2ZydcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmJhcn0+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgIDxhPlNoYW5lIFdvb2RzXG4gICAgICAgICAgICAgICZuYnNwOzxpIGNsYXNzTmFtZT1cImxhcyBsYS1ob21lXCI+PC9pPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8TmF2aXRlbSB0ZXh0PVwiUmVzdW1lXCIgcGF0aD1cInJlc3VtZVwiIC8+XG4gICAgICAgICAgPE5hdml0ZW0gdGV4dD1cIkNvbnRhY3RcIiBwYXRoPVwiY29udGFjdFwiIC8+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICB9XG59XG5cbmNvbnN0IE5hdml0ZW0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuTmF2aXRlbX0+XG4gICAgICA8TGluayBocmVmPXsnLycgKyBwcm9wcy5wYXRofT5cbiAgICAgICAgPGE+XG4gICAgICAgICAge3Byb3BzLnRleHR9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJJbWFnZSIsIkhlYWQiLCJMaW5rIiwibmFtZUxvZ28iLCJOYXZiYXIiLCJyZW5kZXIiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJsb2dvIiwiaHJlZiIsImEiLCJpIiwidWwiLCJOYXZpdGVtIiwidGV4dCIsInBhdGgiLCJDb21wb25lbnQiLCJwcm9wcyIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});