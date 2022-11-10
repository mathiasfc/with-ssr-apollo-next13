"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/[productSlug]",{

/***/ "./pages/products/[productSlug].js":
/*!*****************************************!*\
  !*** ./pages/products/[productSlug].js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/apolloClient */ \"./lib/apolloClient.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductPage = (param)=>{\n    let { product  } = param;\n    var ref, ref1, ref2, ref3;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { productSlug , shopId  } = router.query;\n    //   const { loading, error, data } = useQuery(PRODUCT_BY_SLUG, {\n    //     variables: {\n    //       productSlug,\n    //       shopId,\n    //     },\n    //   });\n    // client side\n    //   const loadedProduct = data?.catalogItemProductBySlug?.product;\n    // server side\n    const loadedProduct = product;\n    const title = loadedProduct === null || loadedProduct === void 0 ? void 0 : loadedProduct.title;\n    const price = loadedProduct === null || loadedProduct === void 0 ? void 0 : (ref = loadedProduct.pricing) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.displayPrice;\n    console.log(loadedProduct);\n    //   if (error) return <div>Error</div>;\n    //   if (loading) return <div>Loading</div>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_4__.NextSeo, {\n                title: \"\".concat(title, \" - \").concat(price),\n                description: \"Descri\\xe7\\xe3o do produto\",\n                canonical: \"https://poc-next-13.vercel.app/\",\n                openGraph: {\n                    type: \"website\",\n                    locale: \"pt_BR\",\n                    url: \"https://poc-next-13.vercel.app/products/\".concat(loadedProduct.slug),\n                    site_name: \"Poc Next 13\",\n                    id: loadedProduct === null || loadedProduct === void 0 ? void 0 : loadedProduct._id,\n                    title,\n                    description: \"Descri\\xe7\\xe3o do Produto\",\n                    images: [\n                        {\n                            url: loadedProduct === null || loadedProduct === void 0 ? void 0 : (ref2 = loadedProduct.imageUrls) === null || ref2 === void 0 ? void 0 : ref2[0],\n                            width: 800,\n                            height: 600,\n                            alt: title\n                        }\n                    ]\n                }\n            }, void 0, false, {\n                fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/products/[productSlug].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-page-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: [\n                            \"shopId: \",\n                            shopId\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/products/[productSlug].js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: loadedProduct === null || loadedProduct === void 0 ? void 0 : (ref3 = loadedProduct.imageUrls) === null || ref3 === void 0 ? void 0 : ref3[0],\n                        alt: \"Picture of the product\",\n                        width: 180,\n                        height: 180,\n                        objectFit: \"contain\"\n                    }, void 0, false, {\n                        fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/products/[productSlug].js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/products/[productSlug].js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: price\n                    }, void 0, false, {\n                        fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/products/[productSlug].js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/products/[productSlug].js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProductPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\nvar _c;\n$RefreshReg$(_c, \"ProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bcHJvZHVjdFNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwRTtBQUVsQztBQUNUO0FBQ1c7QUFDUDtBQUVuQyxNQUFNSyxjQUFjLFNBQWlCO1FBQWhCLEVBQUVDLFFBQU8sRUFBRTtRQWtCaEJDLFdBdUJHQSxNQWFKQTs7SUFyRGIsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVEsWUFBVyxFQUFFQyxPQUFNLEVBQUUsR0FBR0YsT0FBT0csS0FBSztJQUU1QyxpRUFBaUU7SUFDakUsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFFBQVE7SUFFUixjQUFjO0lBQ2QsbUVBQW1FO0lBRW5FLGNBQWM7SUFDZCxNQUFNSixnQkFBZ0JEO0lBRXRCLE1BQU1NLFFBQVFMLDBCQUFBQSwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBZUssS0FBSztJQUNsQyxNQUFNQyxRQUFRTiwwQkFBQUEsMkJBQUFBLEtBQUFBLElBQUFBLENBQUFBLE1BQUFBLGNBQWVPLE9BQU8sY0FBdEJQLGlCQUFBQSxLQUFBQSxJQUFBQSxRQUFBQSxHQUF3QixDQUFDLEVBQUUsZ0NBQTNCQSxLQUFBQSxTQUE2QlEsWUFBUDtJQUVwQ0MsUUFBUUMsR0FBRyxDQUFDVjtJQUVaLHdDQUF3QztJQUN4Qyw0Q0FBNEM7SUFFNUMscUJBQ0U7OzBCQUNFLDhEQUFDSCw2Q0FBT0E7Z0JBQ05RLE9BQU8sR0FBY0MsT0FBWEQsT0FBTSxPQUFXLE9BQU5DO2dCQUNyQkssYUFBWTtnQkFDWkMsV0FBVTtnQkFDVkMsV0FBVztvQkFDVEMsTUFBTTtvQkFDTkMsUUFBUTtvQkFDUkMsS0FBSywyQ0FBOEQsT0FBbkJoQixjQUFjaUIsSUFBSTtvQkFDbEVDLFdBQVc7b0JBQ1hDLElBQUluQiwwQkFBQUEsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWVvQixHQUFHO29CQUN0QmY7b0JBQ0FNLGFBQWE7b0JBQ2JVLFFBQVE7d0JBQ047NEJBQ0VMLEtBQUtoQiwwQkFBQUEsMkJBQUFBLEtBQUFBLElBQUFBLENBQUFBLE9BQUFBLGNBQWVzQixTQUFTLGNBQXhCdEIsa0JBQUFBLEtBQUFBLElBQUFBLElBQTBCLENBQUMsRUFBRTs0QkFDbEN1QixPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxLQUFLcEI7d0JBQ1A7cUJBQ0Q7Z0JBQ0g7Ozs7OzswQkFHRiw4REFBQ3FCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7OzRCQUFHOzRCQUFTekI7Ozs7Ozs7a0NBRWIsOERBQUNSLG1EQUFLQTt3QkFDSmtDLEtBQUs3QiwwQkFBQUEsMkJBQUFBLEtBQUFBLElBQUFBLENBQUFBLE9BQUFBLGNBQWVzQixTQUFTLGNBQXhCdEIsa0JBQUFBLEtBQUFBLElBQUFBLElBQTBCLENBQUMsRUFBRTt3QkFDbEN5QixLQUFJO3dCQUNKRixPQUFPO3dCQUNQQyxRQUFRO3dCQUNSTSxXQUFVOzs7Ozs7a0NBR1osOERBQUNDO2tDQUFJMUI7Ozs7OztrQ0FDTCw4REFBQzBCO2tDQUFJekI7Ozs7Ozs7Ozs7Ozs7O0FBSWI7R0FsRU1SOztRQUNXSixrREFBU0E7OztLQURwQkk7O0FBd0ZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzL1twcm9kdWN0U2x1Z10uanM/NDc5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvLCBhZGRBcG9sbG9TdGF0ZSB9IGZyb20gXCIuLi8uLi9saWIvYXBvbGxvQ2xpZW50XCI7XG5pbXBvcnQgeyBQUk9EVUNUX0JZX1NMVUcgfSBmcm9tIFwiLi4vLi4vZ3JhcGhxbC9xdWVyaWVzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcblxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoeyBwcm9kdWN0IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcHJvZHVjdFNsdWcsIHNob3BJZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIC8vICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoUFJPRFVDVF9CWV9TTFVHLCB7XG4gIC8vICAgICB2YXJpYWJsZXM6IHtcbiAgLy8gICAgICAgcHJvZHVjdFNsdWcsXG4gIC8vICAgICAgIHNob3BJZCxcbiAgLy8gICAgIH0sXG4gIC8vICAgfSk7XG5cbiAgLy8gY2xpZW50IHNpZGVcbiAgLy8gICBjb25zdCBsb2FkZWRQcm9kdWN0ID0gZGF0YT8uY2F0YWxvZ0l0ZW1Qcm9kdWN0QnlTbHVnPy5wcm9kdWN0O1xuXG4gIC8vIHNlcnZlciBzaWRlXG4gIGNvbnN0IGxvYWRlZFByb2R1Y3QgPSBwcm9kdWN0O1xuXG4gIGNvbnN0IHRpdGxlID0gbG9hZGVkUHJvZHVjdD8udGl0bGU7XG4gIGNvbnN0IHByaWNlID0gbG9hZGVkUHJvZHVjdD8ucHJpY2luZz8uWzBdPy5kaXNwbGF5UHJpY2U7XG5cbiAgY29uc29sZS5sb2cobG9hZGVkUHJvZHVjdCk7XG5cbiAgLy8gICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yPC9kaXY+O1xuICAvLyAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOZXh0U2VvXG4gICAgICAgIHRpdGxlPXtgJHt0aXRsZX0gLSAke3ByaWNlfWB9XG4gICAgICAgIGRlc2NyaXB0aW9uPVwiRGVzY3Jpw6fDo28gZG8gcHJvZHV0b1wiXG4gICAgICAgIGNhbm9uaWNhbD1cImh0dHBzOi8vcG9jLW5leHQtMTMudmVyY2VsLmFwcC9cIlxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgICAgICAgICBsb2NhbGU6IFwicHRfQlJcIixcbiAgICAgICAgICB1cmw6IGBodHRwczovL3BvYy1uZXh0LTEzLnZlcmNlbC5hcHAvcHJvZHVjdHMvJHtsb2FkZWRQcm9kdWN0LnNsdWd9YCxcbiAgICAgICAgICBzaXRlX25hbWU6IFwiUG9jIE5leHQgMTNcIixcbiAgICAgICAgICBpZDogbG9hZGVkUHJvZHVjdD8uX2lkLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyacOnw6NvIGRvIFByb2R1dG9cIixcbiAgICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXJsOiBsb2FkZWRQcm9kdWN0Py5pbWFnZVVybHM/LlswXSxcbiAgICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgIGFsdDogdGl0bGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGg0PnNob3BJZDoge3Nob3BJZH08L2g0PlxuXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17bG9hZGVkUHJvZHVjdD8uaW1hZ2VVcmxzPy5bMF19XG4gICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgcHJvZHVjdFwiXG4gICAgICAgICAgd2lkdGg9ezE4MH1cbiAgICAgICAgICBoZWlnaHQ9ezE4MH1cbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxoMj57cHJpY2V9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lIG9uIHNlcnZlci1zaWRlLlxuLy8gSXQgbWF5IGJlIGNhbGxlZCBhZ2Fpbiwgb24gYSBzZXJ2ZXJsZXNzIGZ1bmN0aW9uLCBpZlxuLy8gcmV2YWxpZGF0aW9uIGlzIGVuYWJsZWQgYW5kIGEgbmV3IHJlcXVlc3QgY29tZXMgaW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XG4gIGNvbnN0IHsgcHJvZHVjdFNsdWcsIHNob3BJZCB9ID0gcXVlcnk7XG5cbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogUFJPRFVDVF9CWV9TTFVHLFxuICAgIHZhcmlhYmxlczogeyBwcm9kdWN0U2x1Zywgc2hvcElkIH0sXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3Q6IGRhdGE/LmNhdGFsb2dJdGVtUHJvZHVjdEJ5U2x1Zz8ucHJvZHVjdCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZTtcbiJdLCJuYW1lcyI6WyJhZGRBcG9sbG9TdGF0ZSIsInVzZVJvdXRlciIsIkltYWdlIiwidXNlUXVlcnkiLCJOZXh0U2VvIiwiUHJvZHVjdFBhZ2UiLCJwcm9kdWN0IiwibG9hZGVkUHJvZHVjdCIsInJvdXRlciIsInByb2R1Y3RTbHVnIiwic2hvcElkIiwicXVlcnkiLCJ0aXRsZSIsInByaWNlIiwicHJpY2luZyIsImRpc3BsYXlQcmljZSIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmlwdGlvbiIsImNhbm9uaWNhbCIsIm9wZW5HcmFwaCIsInR5cGUiLCJsb2NhbGUiLCJ1cmwiLCJzbHVnIiwic2l0ZV9uYW1lIiwiaWQiLCJfaWQiLCJpbWFnZXMiLCJpbWFnZVVybHMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImRpdiIsImNsYXNzTmFtZSIsImg0Iiwic3JjIiwib2JqZWN0Rml0IiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[productSlug].js\n"));

/***/ })

});