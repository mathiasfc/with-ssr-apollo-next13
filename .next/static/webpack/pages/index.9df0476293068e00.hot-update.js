"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/apolloClient */ \"./lib/apolloClient.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Product */ \"./components/Product/index.js\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HomePage = (param)=>{\n    let { products  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { shopId  } = router.query;\n    // const { loading, error, data } = useQuery(PRODUCTS, {\n    //   variables: {\n    //     shopId,\n    //   },\n    // });\n    //client\n    // const loadedProducts = data?.catalogItems?.edges;\n    //server\n    const loadedProducts = products;\n    // if (error) return <div>Error</div>;\n    // if (loading) return <div>Loading</div>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_4__.NextSeo, {\n                title: \"POC Next 13\",\n                description: \"\".concat((loadedProducts === null || loadedProducts === void 0 ? void 0 : loadedProducts.length) || 0, \" Carregados\"),\n                canonical: \"https://poc-next-13.vercel.app/\",\n                openGraph: {\n                    type: \"website\",\n                    locale: \"pt_BR\",\n                    url: \"https://poc-next-13.vercel.app/\",\n                    site_name: \"POC Next 13\",\n                    title: \"POC Next 13\",\n                    description: \"\".concat((loadedProducts === null || loadedProducts === void 0 ? void 0 : loadedProducts.length) || 0, \" Carregados\"),\n                    images: [\n                        {\n                            url: \"/favicon.png\",\n                            width: 256,\n                            height: 256,\n                            alt: \"POC Next 13\"\n                        }\n                    ]\n                }\n            }, void 0, false, {\n                fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"shopId: \",\n                            shopId\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"products\",\n                        children: loadedProducts === null || loadedProducts === void 0 ? void 0 : loadedProducts.map((prod)=>{\n                            var ref;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                product: prod === null || prod === void 0 ? void 0 : (ref = prod.node) === null || ref === void 0 ? void 0 : ref.product,\n                                shopId: shopId\n                            }, void 0, false, {\n                                fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = HomePage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF1RTtBQUUvQjtBQUNJO0FBQ0Y7QUFDUDtBQUVuQyxNQUFNSyxXQUFXLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTs7SUFDNUIsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRU8sT0FBTSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFL0Isd0RBQXdEO0lBQ3hELGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsT0FBTztJQUNQLE1BQU07SUFFTixRQUFRO0lBQ1Isb0RBQW9EO0lBRXBELFFBQVE7SUFDUixNQUFNQyxpQkFBaUJKO0lBRXZCLHNDQUFzQztJQUN0QywwQ0FBMEM7SUFFMUMscUJBQ0U7OzBCQUNFLDhEQUFDRiw2Q0FBT0E7Z0JBQ05PLE9BQU07Z0JBQ05DLGFBQWEsR0FBK0IsT0FBNUJGLENBQUFBLDJCQUFBQSw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0JHLE1BQU0sS0FBSSxHQUFFO2dCQUM1Q0MsV0FBVTtnQkFDVkMsV0FBVztvQkFDVEMsTUFBTTtvQkFDTkMsUUFBUTtvQkFDUkMsS0FBSztvQkFDTEMsV0FBVztvQkFDWFIsT0FBTztvQkFDUEMsYUFBYSxHQUErQixPQUE1QkYsQ0FBQUEsMkJBQUFBLDRCQUFBQSxLQUFBQSxJQUFBQSxlQUFnQkcsTUFBTSxLQUFJLEdBQUU7b0JBQzVDTyxRQUFRO3dCQUNOOzRCQUNFRixLQUFLOzRCQUNMRyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxLQUFLO3dCQUNQO3FCQUNEO2dCQUNIOzs7Ozs7MEJBR0YsOERBQUNDOztrQ0FDQyw4REFBQ0M7OzRCQUFHOzRCQUFTakI7Ozs7Ozs7a0NBRWIsOERBQUNnQjt3QkFBSUUsV0FBVTtrQ0FDWmhCLDJCQUFBQSw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0JpQixHQUFHLENBQUMsQ0FBQ0M7Z0NBQ0ZBOzBDQUFsQixxRUFBQzFCLDJEQUFPQTtnQ0FBQzJCLFNBQVNELGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsTUFBQUEsS0FBTUUsSUFBSSxjQUFWRixpQkFBQUEsS0FBQUEsSUFBQUEsSUFBWUMsT0FBRjtnQ0FBV3JCLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zRDtHQXRETUg7O1FBQ1dKLGtEQUFTQTs7O0tBRHBCSTs7QUE0RU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvLCBhZGRBcG9sbG9TdGF0ZSB9IGZyb20gXCIuLi9saWIvYXBvbGxvQ2xpZW50XCI7XG5pbXBvcnQgeyBQUk9EVUNUUyB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoeyBwcm9kdWN0cyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHNob3BJZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIC8vIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFBST0RVQ1RTLCB7XG4gIC8vICAgdmFyaWFibGVzOiB7XG4gIC8vICAgICBzaG9wSWQsXG4gIC8vICAgfSxcbiAgLy8gfSk7XG5cbiAgLy9jbGllbnRcbiAgLy8gY29uc3QgbG9hZGVkUHJvZHVjdHMgPSBkYXRhPy5jYXRhbG9nSXRlbXM/LmVkZ2VzO1xuXG4gIC8vc2VydmVyXG4gIGNvbnN0IGxvYWRlZFByb2R1Y3RzID0gcHJvZHVjdHM7XG5cbiAgLy8gaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvcjwvZGl2PjtcbiAgLy8gaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgdGl0bGU9XCJQT0MgTmV4dCAxM1wiXG4gICAgICAgIGRlc2NyaXB0aW9uPXtgJHtsb2FkZWRQcm9kdWN0cz8ubGVuZ3RoIHx8IDB9IENhcnJlZ2Fkb3NgfVxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL3BvYy1uZXh0LTEzLnZlcmNlbC5hcHAvXCJcbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdHlwZTogXCJ3ZWJzaXRlXCIsXG4gICAgICAgICAgbG9jYWxlOiBcInB0X0JSXCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vcG9jLW5leHQtMTMudmVyY2VsLmFwcC9cIixcbiAgICAgICAgICBzaXRlX25hbWU6IFwiUE9DIE5leHQgMTNcIixcbiAgICAgICAgICB0aXRsZTogXCJQT0MgTmV4dCAxM1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBgJHtsb2FkZWRQcm9kdWN0cz8ubGVuZ3RoIHx8IDB9IENhcnJlZ2Fkb3NgLFxuICAgICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1cmw6IFwiL2Zhdmljb24ucG5nXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiAyNTYsXG4gICAgICAgICAgICAgIGhlaWdodDogMjU2LFxuICAgICAgICAgICAgICBhbHQ6IFwiUE9DIE5leHQgMTNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5zaG9wSWQ6IHtzaG9wSWR9PC9oMz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XG4gICAgICAgICAge2xvYWRlZFByb2R1Y3RzPy5tYXAoKHByb2QpID0+IChcbiAgICAgICAgICAgIDxQcm9kdWN0IHByb2R1Y3Q9e3Byb2Q/Lm5vZGU/LnByb2R1Y3R9IHNob3BJZD17c2hvcElkfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lIG9uIHNlcnZlci1zaWRlLlxuLy8gSXQgbWF5IGJlIGNhbGxlZCBhZ2Fpbiwgb24gYSBzZXJ2ZXJsZXNzIGZ1bmN0aW9uLCBpZlxuLy8gcmV2YWxpZGF0aW9uIGlzIGVuYWJsZWQgYW5kIGEgbmV3IHJlcXVlc3QgY29tZXMgaW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XG4gIGNvbnN0IHsgc2hvcElkIH0gPSBxdWVyeTtcblxuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKCk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcG9sbG9DbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBQUk9EVUNUUyxcbiAgICB2YXJpYWJsZXM6IHsgc2hvcElkIH0sXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3RzOiBkYXRhPy5jYXRhbG9nSXRlbXM/LmVkZ2VzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbImFkZEFwb2xsb1N0YXRlIiwidXNlUm91dGVyIiwiUHJvZHVjdCIsInVzZVF1ZXJ5IiwiTmV4dFNlbyIsIkhvbWVQYWdlIiwicHJvZHVjdHMiLCJyb3V0ZXIiLCJzaG9wSWQiLCJxdWVyeSIsImxvYWRlZFByb2R1Y3RzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsImNhbm9uaWNhbCIsIm9wZW5HcmFwaCIsInR5cGUiLCJsb2NhbGUiLCJ1cmwiLCJzaXRlX25hbWUiLCJpbWFnZXMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImRpdiIsImgzIiwiY2xhc3NOYW1lIiwibWFwIiwicHJvZCIsInByb2R1Y3QiLCJub2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});