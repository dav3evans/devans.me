"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"mfgmm5gx\",\n    dataset: \"production\",\n    useCdn: true // `false` if you want to ensure fresh data\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsWUFBWTtBQUM2QjtBQUV6QyxpRUFBZUEscURBQVksQ0FBQztJQUMxQkMsU0FBUyxFQUFFLFVBQVU7SUFDckJDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxNQUFNLEVBQUUsSUFBSSxDQUFDLDJDQUEyQztDQUN6RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vY2xpZW50LmpzPzk3MTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50LmpzXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6ICdtZmdtbTVneCcsIC8vIHlvdSBjYW4gZmluZCB0aGlzIGluIHNhbml0eS5qc29uXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJywgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxuICB1c2VDZG46IHRydWUgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxufSkiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"authorImage\": author->image,\n  \"categories\": categories[]->title\n}`;\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })\n        ),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\nfunction Post({ post  }) {\n    const { title =\"Missing title\" , name =\"Missing name\" , categories , authorImage  } = post;\n    console.log(categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                            lineNumber: 48,\n                            columnNumber: 39\n                        }, this)\n                    )\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url()\n                }, void 0, false, {\n                    fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0I7QUFDUztBQUNjO0FBRS9DLE1BQU1HLEtBQUssR0FBR0gsNkNBQUksQ0FBQzs7Ozs7Q0FLbEIsQ0FBQztBQUVGLFNBQVNJLE1BQU0sQ0FBRUMsTUFBTSxFQUFFO0lBQ3ZCLE9BQU9ILHdEQUFlLENBQUNELCtDQUFNLENBQUMsQ0FBQ0ssS0FBSyxDQUFDRCxNQUFNLENBQUM7Q0FDN0M7QUFFTSxlQUFlRSxjQUFjLEdBQUc7SUFDckMsTUFBTUMsS0FBSyxHQUFHLE1BQU1QLHFEQUFZLENBQzlCLENBQUMsMERBQTBELENBQUMsQ0FDN0Q7SUFFRCxPQUFPO1FBQ0xPLEtBQUssRUFBRUEsS0FBSyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxHQUFLLENBQUM7Z0JBQUNDLE1BQU0sRUFBRTtvQkFBQ0QsSUFBSTtpQkFBQzthQUFDLENBQUM7UUFBQSxDQUFDO1FBQzlDRSxRQUFRLEVBQUUsSUFBSTtLQUNmO0NBQ0Y7QUFFTSxlQUFlQyxjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUU1QyxNQUFNLEVBQUVKLElBQUksRUFBRyxFQUFFLEdBQUUsR0FBR0ksT0FBTyxDQUFDSCxNQUFNO0lBQ3BDLE1BQU1JLElBQUksR0FBRyxNQUFNZixxREFBWSxDQUFDRSxLQUFLLEVBQUU7UUFBRVEsSUFBSTtLQUFFLENBQUM7SUFDaEQsT0FBTztRQUNMTSxLQUFLLEVBQUU7WUFDTEQsSUFBSTtTQUNMO0tBQ0Y7Q0FDRjtBQUVjLFNBQVNFLElBQUksQ0FBQyxFQUFDRixJQUFJLEdBQUMsRUFBRTtJQUNuQyxNQUFNLEVBQUVHLEtBQUssRUFBRyxlQUFlLEdBQUVDLElBQUksRUFBRyxjQUFjLEdBQUVDLFVBQVUsR0FBRUMsV0FBVyxHQUFFLEdBQUdOLElBQUk7SUFDeEZPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxVQUFVLENBQUMsQ0FBQztJQUN4QixxQkFDRSw4REFBQ0ksU0FBTzs7MEJBQ04sOERBQUNDLElBQUU7MEJBQUVQLEtBQUs7Ozs7O29CQUFNOzBCQUNoQiw4REFBQ1EsTUFBSTs7b0JBQUMsS0FBRztvQkFBQ1AsSUFBSTs7Ozs7O29CQUFRO1lBQ3JCQyxVQUFVLGtCQUNULDhEQUFDTyxJQUFFOztvQkFBQyxXQUVGO29CQUFDUCxVQUFVLENBQUNYLEdBQUcsQ0FBQ21CLENBQUFBLFFBQVEsaUJBQUksOERBQUNDLElBQUU7c0NBQWlCRCxRQUFROzJCQUFuQkEsUUFBUTs7OztnQ0FBaUI7b0JBQUEsQ0FBQzs7Ozs7O29CQUM1RDtZQUVOUCxXQUFXLGtCQUNWLDhEQUFDUyxLQUFHOzBCQUNGLDRFQUFDQyxLQUFHO29CQUNGQyxHQUFHLEVBQUU3QixNQUFNLENBQUNrQixXQUFXLENBQUMsQ0FDckJZLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FDVEMsR0FBRyxFQUFFOzs7Ozt3QkFDUjs7Ozs7b0JBQ0U7Ozs7OztZQUVBLENBQ1g7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gIHRpdGxlLFxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlXG59YFxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgY2xpZW50LmZldGNoKFxuICAgIGAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gIClcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7cGFyYW1zOiB7c2x1Z319KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucGFyYW1zXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe3Bvc3R9KSB7XG4gIGNvbnN0IHsgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsIG5hbWUgPSAnTWlzc2luZyBuYW1lJywgY2F0ZWdvcmllcywgYXV0aG9ySW1hZ2UgfSA9IHBvc3RcbiAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8c3Bhbj5CeSB7bmFtZX08L3NwYW4+XG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICBQb3N0ZWQgaW5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gPGxpIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L2xpPil9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgICAge2F1dGhvckltYWdlICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSlcbiAgICAgICAgICAgICAgLndpZHRoKDUwKVxuICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufSJdLCJuYW1lcyI6WyJncm9xIiwiY2xpZW50IiwiaW1hZ2VVcmxCdWlsZGVyIiwicXVlcnkiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsIm1hcCIsInNsdWciLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInBvc3QiLCJwcm9wcyIsIlBvc3QiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiYXJ0aWNsZSIsImgxIiwic3BhbiIsInVsIiwiY2F0ZWdvcnkiLCJsaSIsImRpdiIsImltZyIsInNyYyIsIndpZHRoIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();