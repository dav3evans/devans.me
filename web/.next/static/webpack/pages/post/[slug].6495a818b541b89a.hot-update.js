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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar Post = function(param1) {\n    var post = param1.post;\n    var _this1 = _this;\n    var _title = post.title, title = _title === void 0 ? \"Missing title\" : _title, _name = post.name, name = _name === void 0 ? \"Missing name\" : _name, categories = post.categories;\n    console.log(categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map(function(param, idx) {\n                        var category = param.title, description = param.description;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                category,\n                                \"-\",\n                                description,\n                                \" title \",\n                                title,\n                                category,\n                                idx\n                            ]\n                        }, category, true, {\n                            fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                            lineNumber: 14,\n                            columnNumber: 67\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsaUJBQVk7UUFBVkMsSUFBSSxVQUFKQSxJQUFJOztJQUNqQixhQUF1RUEsSUFBSSxDQUFuRUMsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLGVBQWUsbUJBQXdDRCxJQUFJLENBQTFDRSxJQUFJLEVBQUpBLElBQUksc0JBQUcsY0FBYyxVQUFFQyxVQUFVLEdBQUtILElBQUksQ0FBbkJHLFVBQVU7SUFDbEVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLENBQUMsQ0FBQztJQUN4QixxQkFDRSw4REFBQ0csU0FBTzs7MEJBQ04sOERBQUNDLElBQUU7MEJBQUVOLEtBQUs7Ozs7O3FCQUFNOzBCQUNoQiw4REFBQ08sTUFBSTs7b0JBQUMsS0FBRztvQkFBQ04sSUFBSTs7Ozs7O3FCQUFRO1lBQ3JCQyxVQUFVLGtCQUNULDhEQUFDTSxJQUFFOztvQkFBQyxXQUVGO29CQUFDTixVQUFVLENBQUNPLEdBQUcsQ0FBQyxnQkFBZ0NDLEdBQUc7NEJBQWpDVixRQUFjLFNBQWRBLEtBQUssRUFBV1ksV0FBVyxTQUFYQSxXQUFXOzZDQUFXLDhEQUFDQyxJQUFFOztnQ0FBaUJGLFFBQVE7Z0NBQUMsR0FBQztnQ0FBQ0MsV0FBVztnQ0FBQyxTQUFPO2dDQUFDWixLQUFLO2dDQUFFVyxRQUFRO2dDQUFFRCxHQUFHOzsyQkFBOURDLFFBQVE7Ozs7a0NBQTREO3FCQUFBLENBQUM7Ozs7OztxQkFDbkk7Ozs7OzthQUVDLENBQ1g7Q0FDRjtBQWZLYixLQUFBQSxJQUFJOztBQWdEViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncm9xIGZyb20gJ2dyb3EnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnXG5cbmNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsIG5hbWUgPSAnTWlzc2luZyBuYW1lJywgY2F0ZWdvcmllcyB9ID0gcG9zdFxuICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgIDxzcGFuPkJ5IHtuYW1lfTwvc3Bhbj5cbiAgICAgIHtjYXRlZ29yaWVzICYmIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgIFBvc3RlZCBpblxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoe3RpdGxlOmNhdGVnb3J5LCBkZXNjcmlwdGlvbn0sIGlkeCkgPT4gPGxpIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX0te2Rlc2NyaXB0aW9ufSB0aXRsZSB7dGl0bGV9e2NhdGVnb3J5fXtpZHh9PC9saT4pfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnt0aXRsZSwgZGVzY3JpcHRpb24sIF9pZH1cbn1gXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHtwYXJhbXM6IHtzbHVnfX0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuXG4gIC8vIHt0aXRsZSwgXCJuYW1lXCI6IGF1dGhvci0+bmFtZX0gdGhpcyBpcyBhIEdST1EgcHJvamVjdGlvblxuICBcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXNcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdCIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJjb25zb2xlIiwibG9nIiwiYXJ0aWNsZSIsImgxIiwic3BhbiIsInVsIiwibWFwIiwiaWR4IiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

});