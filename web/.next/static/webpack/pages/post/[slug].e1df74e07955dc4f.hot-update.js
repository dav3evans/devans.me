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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar Post = function(param1) {\n    var post = param1.post;\n    var _this1 = _this;\n    var _title = post.title, title = _title === void 0 ? \"Missing title\" : _title, _name = post.name, name = _name === void 0 ? \"Missing name\" : _name, categories = post.categories;\n    console.log(categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map(function(param) {\n                        var category = param.title, description = param.description;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                category,\n                                \"-\",\n                                description,\n                                \" Key \",\n                                key\n                            ]\n                        }, category, true, {\n                            fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                            lineNumber: 14,\n                            columnNumber: 62\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsaUJBQVk7UUFBVkMsSUFBSSxVQUFKQSxJQUFJOztJQUNqQixhQUF1RUEsSUFBSSxDQUFuRUMsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLGVBQWUsbUJBQXdDRCxJQUFJLENBQTFDRSxJQUFJLEVBQUpBLElBQUksc0JBQUcsY0FBYyxVQUFFQyxVQUFVLEdBQUtILElBQUksQ0FBbkJHLFVBQVU7SUFDbEVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLENBQUMsQ0FBQztJQUN4QixxQkFDRSw4REFBQ0csU0FBTzs7MEJBQ04sOERBQUNDLElBQUU7MEJBQUVOLEtBQUs7Ozs7O3FCQUFNOzBCQUNoQiw4REFBQ08sTUFBSTs7b0JBQUMsS0FBRztvQkFBQ04sSUFBSTs7Ozs7O3FCQUFRO1lBQ3JCQyxVQUFVLGtCQUNULDhEQUFDTSxJQUFFOztvQkFBQyxXQUVGO29CQUFDTixVQUFVLENBQUNPLEdBQUcsQ0FBQzs0QkFBRVQsUUFBYyxTQUFkQSxLQUFLLEVBQVdXLFdBQVcsU0FBWEEsV0FBVzs2Q0FBTSw4REFBQ0MsSUFBRTs7Z0NBQWlCRixRQUFRO2dDQUFDLEdBQUM7Z0NBQUNDLFdBQVc7Z0NBQUMsT0FBSztnQ0FBQ0UsR0FBRzs7MkJBQTNDSCxRQUFROzs7O2tDQUF5QztxQkFBQSxDQUFDOzs7Ozs7cUJBQzNHOzs7Ozs7YUFFQyxDQUNYO0NBQ0Y7QUFmS1osS0FBQUEsSUFBSTs7QUFnRFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50J1xuXG5jb25zdCBQb3N0ID0gKHtwb3N0fSkgPT4ge1xuICBjb25zdCB7IHRpdGxlID0gJ01pc3NpbmcgdGl0bGUnLCBuYW1lID0gJ01pc3NpbmcgbmFtZScsIGNhdGVnb3JpZXMgfSA9IHBvc3RcbiAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8c3Bhbj5CeSB7bmFtZX08L3NwYW4+XG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICBQb3N0ZWQgaW5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKHt0aXRsZTpjYXRlZ29yeSwgZGVzY3JpcHRpb259KSA9PiA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fS17ZGVzY3JpcHRpb259IEtleSB7a2V5fTwvbGk+KX1cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gIHRpdGxlLFxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT57dGl0bGUsIGRlc2NyaXB0aW9uLCBfaWR9XG59YFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgY2xpZW50LmZldGNoKFxuICAgIGAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gIClcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7cGFyYW1zOiB7c2x1Z319KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcblxuICAvLyB7dGl0bGUsIFwibmFtZVwiOiBhdXRob3ItPm5hbWV9IHRoaXMgaXMgYSBHUk9RIHByb2plY3Rpb25cbiAgXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucGFyYW1zXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiY29uc29sZSIsImxvZyIsImFydGljbGUiLCJoMSIsInNwYW4iLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJsaSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

});