"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __N_SSG = true;\nfunction Post(param) {\n    var post = param.post;\n    var _this = this;\n    var _title = post.title, title = _title === void 0 ? \"Missing title\" : _title, _name = post.name, name = _name === void 0 ? \"Missing name\" : _name, categories = post.categories, authorImage = post.authorImage;\n    console.log(categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map(function(category) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                            lineNumber: 43,\n                            columnNumber: 39\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url()\n                }, void 0, false, {\n                    fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n};\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBZ0NlLFNBQVNBLElBQUksQ0FBQyxLQUFNLEVBQUU7UUFBUixJQUFLLEdBQUwsS0FBTSxDQUFMQyxJQUFJOztJQUNoQyxhQUFvRkEsSUFBSSxDQUFoRkMsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLGVBQWUsbUJBQXFERCxJQUFJLENBQXZERSxJQUFJLEVBQUpBLElBQUksc0JBQUcsY0FBYyxVQUFFQyxVQUFVLEdBQWtCSCxJQUFJLENBQWhDRyxVQUFVLEVBQUVDLFdBQVcsR0FBS0osSUFBSSxDQUFwQkksV0FBVztJQUMvRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFVBQVUsQ0FBQyxDQUFDO0lBQ3hCLHFCQUNFLDhEQUFDSSxTQUFPOzswQkFDTiw4REFBQ0MsSUFBRTswQkFBRVAsS0FBSzs7Ozs7b0JBQU07MEJBQ2hCLDhEQUFDUSxNQUFJOztvQkFBQyxLQUFHO29CQUFDUCxJQUFJOzs7Ozs7b0JBQVE7WUFDckJDLFVBQVUsa0JBQ1QsOERBQUNPLElBQUU7O29CQUFDLFdBRUY7b0JBQUNQLFVBQVUsQ0FBQ1EsR0FBRyxDQUFDQyxTQUFBQSxRQUFROzZDQUFJLDhEQUFDQyxJQUFFO3NDQUFpQkQsUUFBUTsyQkFBbkJBLFFBQVE7Ozs7aUNBQWlCO3FCQUFBLENBQUM7Ozs7OztvQkFDNUQ7WUFFTlIsV0FBVyxrQkFDViw4REFBQ1UsS0FBRzswQkFDRiw0RUFBQ0MsS0FBRztvQkFDRkMsR0FBRyxFQUFFQyxNQUFNLENBQUNiLFdBQVcsQ0FBQyxDQUNyQmMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUNUQyxHQUFHLEVBQUU7Ozs7O3dCQUNSOzs7OztvQkFDRTs7Ozs7O1lBRUEsQ0FDWDtDQUNGO0FBeEJ1QnBCLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50J1xuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICB0aXRsZSxcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZVxufWBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoe3BhcmFtczoge3NsdWd9fSkpLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIFxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtc1xuICBjb25zdCBwb3N0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtwb3N0fSkge1xuICBjb25zdCB7IHRpdGxlID0gJ01pc3NpbmcgdGl0bGUnLCBuYW1lID0gJ01pc3NpbmcgbmFtZScsIGNhdGVnb3JpZXMsIGF1dGhvckltYWdlIH0gPSBwb3N0XG4gIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxuICAgICAge2NhdGVnb3JpZXMgJiYgKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgUG9zdGVkIGluXG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT4pfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICAgIHthdXRob3JJbWFnZSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpXG4gICAgICAgICAgICAgIC53aWR0aCg1MClcbiAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2FydGljbGU+XG4gIClcbn0iXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiYXJ0aWNsZSIsImgxIiwic3BhbiIsInVsIiwibWFwIiwiY2F0ZWdvcnkiLCJsaSIsImRpdiIsImltZyIsInNyYyIsInVybEZvciIsIndpZHRoIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

});