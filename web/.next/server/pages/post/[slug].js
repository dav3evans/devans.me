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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_4__]);\n_portabletext_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"authorImage\": author->image,\n  \"categories\": categories[]->title,\n  body\n}`;\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            if (!value?.asset?._ref) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined);\n        },\n        code: ({ value  })=>{\n            if (value) {\n                console.log(\"VALUE\", value);\n            }\n        }\n    }\n};\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })\n        ),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\nconst Post = ({ post  })=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , body =[]  } = post;\n    console.log(categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                            lineNumber: 72,\n                            columnNumber: 39\n                        }, undefined)\n                    )\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url(),\n                    alt: `${name}'s picture`\n                }, void 0, false, {\n                    fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_4__.PortableText, {\n                value: body,\n                components: ptComponents\n            }, void 0, false, {\n                fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/devans/Sites/devans.me/web/pages/post/[slug].js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVYLE1BQU0sQ0FBQ2tDLFdBQVcsQ0FBQyxDQUNyQnRCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FDVCtCLEdBQUcsRUFBRTtvQkFDTmxDLEdBQUcsRUFBRSxDQUFDLEVBQUV1QixJQUFJLENBQUMsVUFBVSxDQUFDOzs7Ozs2QkFDMUI7Ozs7O3lCQUNFOzBCQUVGLDhEQUFDbEMsNkRBQVk7Z0JBQ2pCTyxLQUFLLEVBQUU4QixJQUFJO2dCQUNYUyxVQUFVLEVBQUV6QyxZQUFZOzs7Ozt5QkFDeEI7Ozs7OztpQkFDTSxDQUNYO0NBQ0Y7QUFFRCxpRUFBZTJCLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQge1BvcnRhYmxlVGV4dH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCdcblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gIGJvZHlcbn1gXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IHB0Q29tcG9uZW50cyA9IHtcbiAgdHlwZXM6IHtcbiAgICBpbWFnZTogKHsgdmFsdWUgfSkgPT4ge1xuICAgICAgaWYgKCF2YWx1ZT8uYXNzZXQ/Ll9yZWYpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCAnICd9XG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIHNyYz17dXJsRm9yKHZhbHVlKS53aWR0aCgzMjApLmhlaWdodCgyNDApLmZpdCgnbWF4JykuYXV0bygnZm9ybWF0Jyl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSxcbiAgICBjb2RlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ZBTFVFJywgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgY2xpZW50LmZldGNoKFxuICAgIGAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gIClcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7cGFyYW1zOiB7c2x1Z319KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucGFyYW1zXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsIG5hbWUgPSAnTWlzc2luZyBuYW1lJywgY2F0ZWdvcmllcywgYXV0aG9ySW1hZ2UsIGJvZHkgPSBbXSB9ID0gcG9zdFxuICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgIDxzcGFuPkJ5IHtuYW1lfTwvc3Bhbj5cbiAgICAgIHtjYXRlZ29yaWVzICYmIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgIFBvc3RlZCBpblxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+KX1cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgICB7YXV0aG9ySW1hZ2UgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKVxuICAgICAgICAgICAgICAud2lkdGgoNTApXG4gICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgICAgICAgIDxQb3J0YWJsZVRleHRcbiAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgIGNvbXBvbmVudHM9e3B0Q29tcG9uZW50c31cbiAgICAgIC8+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sIm5hbWVzIjpbImdyb3EiLCJjbGllbnQiLCJpbWFnZVVybEJ1aWxkZXIiLCJQb3J0YWJsZVRleHQiLCJxdWVyeSIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwicHRDb21wb25lbnRzIiwidHlwZXMiLCJ2YWx1ZSIsImFzc2V0IiwiX3JlZiIsImltZyIsImFsdCIsImxvYWRpbmciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZpdCIsImF1dG8iLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsIm1hcCIsInNsdWciLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInBvc3QiLCJwcm9wcyIsIlBvc3QiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJib2R5IiwiYXJ0aWNsZSIsImgxIiwic3BhbiIsInVsIiwiY2F0ZWdvcnkiLCJsaSIsImRpdiIsInVybCIsImNvbXBvbmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

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

/***/ }),

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@portabletext/react");;

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