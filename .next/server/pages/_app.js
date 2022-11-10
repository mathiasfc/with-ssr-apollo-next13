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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/apolloClient.js":
/*!*****************************!*\
  !*** ./lib/apolloClient.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APOLLO_STATE_PROP_NAME\": () => (/* binding */ APOLLO_STATE_PROP_NAME),\n/* harmony export */   \"addApolloState\": () => (/* binding */ addApolloState),\n/* harmony export */   \"initializeApollo\": () => (/* binding */ initializeApollo),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/error */ \"@apollo/client/link/error\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEqual */ \"lodash/isEqual\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst APOLLO_STATE_PROP_NAME = \"__APOLLO_STATE__\";\nlet apolloClient;\nconst errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__.onError)(({ graphQLErrors , networkError  })=>{\n    if (graphQLErrors) graphQLErrors.forEach(({ message , locations , path  })=>console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));\n    if (networkError) console.log(`[Network error]: ${networkError}`);\n});\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n    uri: \"http://localhost:3000/graphql\",\n    credentials: \"same-origin\"\n});\nfunction createApolloClient() {\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        ssrMode: \"undefined\" === \"undefined\",\n        link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.from)([\n            errorLink,\n            httpLink\n        ]),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({\n            typePolicies: {\n                Query: {\n                    fields: {\n                        allPosts: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__.concatPagination)()\n                    }\n                }\n            }\n        })\n    });\n}\nfunction initializeApollo(initialState = null) {\n    const _apolloClient = apolloClient ?? createApolloClient();\n    // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n    // gets hydrated here\n    if (initialState) {\n        // Get existing cache, loaded during client side data fetching\n        const existingCache = _apolloClient.extract();\n        // Merge the initialState from getStaticProps/getServerSideProps in the existing cache\n        const data = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(existingCache, initialState, {\n            // combine arrays using object equality (like in sets)\n            arrayMerge: (destinationArray, sourceArray)=>[\n                    ...sourceArray,\n                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(d, s)))\n                ]\n        });\n        // Restore the cache with the merged data\n        _apolloClient.cache.restore(data);\n    }\n    // For SSG and SSR always create a new Apollo Client\n    if (true) return _apolloClient;\n    // Create the Apollo Client once in the client\n    if (!apolloClient) apolloClient = _apolloClient;\n    return _apolloClient;\n}\nfunction addApolloState(client, pageProps) {\n    if (pageProps?.props) {\n        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();\n    }\n    return pageProps;\n}\nfunction useApollo(pageProps) {\n    const state = pageProps[APOLLO_STATE_PROP_NAME];\n    // const state = null;\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(state), [\n        state\n    ]);\n    return store;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBvbGxvQ2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDNkM7QUFDekI7QUFDUTtBQUM5QjtBQUNPO0FBRTlCLE1BQU1TLHlCQUF5QixtQkFBbUI7QUFFekQsSUFBSUM7QUFFSixNQUFNQyxZQUFZTixrRUFBT0EsQ0FBQyxDQUFDLEVBQUVPLGNBQWEsRUFBRUMsYUFBWSxFQUFFLEdBQUs7SUFDN0QsSUFBSUQsZUFDRkEsY0FBY0UsT0FBTyxDQUFDLENBQUMsRUFBRUMsUUFBTyxFQUFFQyxVQUFTLEVBQUVDLEtBQUksRUFBRSxHQUNqREMsUUFBUUMsR0FBRyxDQUNULENBQUMsMEJBQTBCLEVBQUVKLFFBQVEsWUFBWSxFQUFFQyxVQUFVLFFBQVEsRUFBRUMsS0FBSyxDQUFDO0lBR25GLElBQUlKLGNBQWNLLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFTixhQUFhLENBQUM7QUFDbEU7QUFFQSxNQUFNTyxXQUFXLElBQUlsQixvREFBUUEsQ0FBQztJQUM1Qm1CLEtBQUs7SUFDTEMsYUFBYTtBQUNmO0FBRUEsU0FBU0MscUJBQXFCO0lBQzVCLE9BQU8sSUFBSXRCLHdEQUFZQSxDQUFDO1FBQ3RCdUIsU0FBUyxnQkFBa0I7UUFDM0JDLE1BQU1yQixvREFBSUEsQ0FBQztZQUFDTztZQUFXUztTQUFTO1FBQ2hDTSxPQUFPLElBQUl2Qix5REFBYUEsQ0FBQztZQUN2QndCLGNBQWM7Z0JBQ1pDLE9BQU87b0JBQ0xDLFFBQVE7d0JBQ05DLFVBQVV4QiwwRUFBZ0JBO29CQUM1QjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtBQUNGO0FBRU8sU0FBU3lCLGlCQUFpQkMsZUFBZSxJQUFJLEVBQUU7SUFDcEQsTUFBTUMsZ0JBQWdCdkIsZ0JBQWdCYTtJQUV0QywyRkFBMkY7SUFDM0YscUJBQXFCO0lBQ3JCLElBQUlTLGNBQWM7UUFDaEIsOERBQThEO1FBQzlELE1BQU1FLGdCQUFnQkQsY0FBY0UsT0FBTztRQUUzQyxzRkFBc0Y7UUFDdEYsTUFBTUMsT0FBTzdCLGdEQUFLQSxDQUFDMkIsZUFBZUYsY0FBYztZQUM5QyxzREFBc0Q7WUFDdERLLFlBQVksQ0FBQ0Msa0JBQWtCQyxjQUFnQjt1QkFDMUNBO3VCQUNBRCxpQkFBaUJFLE1BQU0sQ0FBQyxDQUFDQyxJQUMxQkYsWUFBWUcsS0FBSyxDQUFDLENBQUNDLElBQU0sQ0FBQ25DLHFEQUFPQSxDQUFDaUMsR0FBR0U7aUJBRXhDO1FBQ0g7UUFFQSx5Q0FBeUM7UUFDekNWLGNBQWNQLEtBQUssQ0FBQ2tCLE9BQU8sQ0FBQ1I7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFJLElBQTZCLEVBQUUsT0FBT0g7SUFDMUMsOENBQThDO0lBQzlDLElBQUksQ0FBQ3ZCLGNBQWNBLGVBQWV1QjtJQUVsQyxPQUFPQTtBQUNULENBQUM7QUFFTSxTQUFTWSxlQUFlQyxNQUFNLEVBQUVDLFNBQVMsRUFBRTtJQUNoRCxJQUFJQSxXQUFXQyxPQUFPO1FBQ3BCRCxVQUFVQyxLQUFLLENBQUN2Qyx1QkFBdUIsR0FBR3FDLE9BQU9wQixLQUFLLENBQUNTLE9BQU87SUFDaEUsQ0FBQztJQUVELE9BQU9ZO0FBQ1QsQ0FBQztBQUVNLFNBQVNFLFVBQVVGLFNBQVMsRUFBRTtJQUNuQyxNQUFNRyxRQUFRSCxTQUFTLENBQUN0Qyx1QkFBdUI7SUFDL0Msc0JBQXNCO0lBQ3RCLE1BQU0wQyxRQUFRbkQsOENBQU9BLENBQUMsSUFBTStCLGlCQUFpQm1CLFFBQVE7UUFBQ0E7S0FBTTtJQUM1RCxPQUFPQztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LTEzLXdpdGgtYXBvbGxvLWFuZC1wYWdlcy8uL2xpYi9hcG9sbG9DbGllbnQuanM/NDRiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlLCBmcm9tIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L2xpbmsvZXJyb3JcIjtcbmltcG9ydCB7IGNvbmNhdFBhZ2luYXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcImRlZXBtZXJnZVwiO1xuaW1wb3J0IGlzRXF1YWwgZnJvbSBcImxvZGFzaC9pc0VxdWFsXCI7XG5cbmV4cG9ydCBjb25zdCBBUE9MTE9fU1RBVEVfUFJPUF9OQU1FID0gXCJfX0FQT0xMT19TVEFURV9fXCI7XG5cbmxldCBhcG9sbG9DbGllbnQ7XG5cbmNvbnN0IGVycm9yTGluayA9IG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcbiAgaWYgKGdyYXBoUUxFcnJvcnMpXG4gICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gXG4gICAgICApXG4gICAgKTtcbiAgaWYgKG5ldHdvcmtFcnJvcikgY29uc29sZS5sb2coYFtOZXR3b3JrIGVycm9yXTogJHtuZXR3b3JrRXJyb3J9YCk7XG59KTtcblxuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICB1cmk6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2dyYXBocWxcIiwgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcbiAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIiwgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgIG9yIGBoZWFkZXJzYFxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIsXG4gICAgbGluazogZnJvbShbZXJyb3JMaW5rLCBodHRwTGlua10pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICB0eXBlUG9saWNpZXM6IHtcbiAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIGFsbFBvc3RzOiBjb25jYXRQYWdpbmF0aW9uKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KCk7XG5cbiAgLy8gSWYgeW91ciBwYWdlIGhhcyBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyB0aGF0IHVzZSBBcG9sbG8gQ2xpZW50LCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAvLyBnZXRzIGh5ZHJhdGVkIGhlcmVcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIEdldCBleGlzdGluZyBjYWNoZSwgbG9hZGVkIGR1cmluZyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpO1xuXG4gICAgLy8gTWVyZ2UgdGhlIGluaXRpYWxTdGF0ZSBmcm9tIGdldFN0YXRpY1Byb3BzL2dldFNlcnZlclNpZGVQcm9wcyBpbiB0aGUgZXhpc3RpbmcgY2FjaGVcbiAgICBjb25zdCBkYXRhID0gbWVyZ2UoZXhpc3RpbmdDYWNoZSwgaW5pdGlhbFN0YXRlLCB7XG4gICAgICAvLyBjb21iaW5lIGFycmF5cyB1c2luZyBvYmplY3QgZXF1YWxpdHkgKGxpa2UgaW4gc2V0cylcbiAgICAgIGFycmF5TWVyZ2U6IChkZXN0aW5hdGlvbkFycmF5LCBzb3VyY2VBcnJheSkgPT4gW1xuICAgICAgICAuLi5zb3VyY2VBcnJheSxcbiAgICAgICAgLi4uZGVzdGluYXRpb25BcnJheS5maWx0ZXIoKGQpID0+XG4gICAgICAgICAgc291cmNlQXJyYXkuZXZlcnkoKHMpID0+ICFpc0VxdWFsKGQsIHMpKVxuICAgICAgICApLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIC8vIFJlc3RvcmUgdGhlIGNhY2hlIHdpdGggdGhlIG1lcmdlZCBkYXRhXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGRhdGEpO1xuICB9XG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXBvbGxvU3RhdGUoY2xpZW50LCBwYWdlUHJvcHMpIHtcbiAgaWYgKHBhZ2VQcm9wcz8ucHJvcHMpIHtcbiAgICBwYWdlUHJvcHMucHJvcHNbQVBPTExPX1NUQVRFX1BST1BfTkFNRV0gPSBjbGllbnQuY2FjaGUuZXh0cmFjdCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhZ2VQcm9wcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhwYWdlUHJvcHMpIHtcbiAgY29uc3Qgc3RhdGUgPSBwYWdlUHJvcHNbQVBPTExPX1NUQVRFX1BST1BfTkFNRV1cbiAgLy8gY29uc3Qgc3RhdGUgPSBudWxsO1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhzdGF0ZSksIFtzdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59XG4iXSwibmFtZXMiOlsidXNlTWVtbyIsIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsImZyb20iLCJvbkVycm9yIiwiY29uY2F0UGFnaW5hdGlvbiIsIm1lcmdlIiwiaXNFcXVhbCIsIkFQT0xMT19TVEFURV9QUk9QX05BTUUiLCJhcG9sbG9DbGllbnQiLCJlcnJvckxpbmsiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJsb2NhdGlvbnMiLCJwYXRoIiwiY29uc29sZSIsImxvZyIsImh0dHBMaW5rIiwidXJpIiwiY3JlZGVudGlhbHMiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsImNhY2hlIiwidHlwZVBvbGljaWVzIiwiUXVlcnkiLCJmaWVsZHMiLCJhbGxQb3N0cyIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJkYXRhIiwiYXJyYXlNZXJnZSIsImRlc3RpbmF0aW9uQXJyYXkiLCJzb3VyY2VBcnJheSIsImZpbHRlciIsImQiLCJldmVyeSIsInMiLCJyZXN0b3JlIiwiYWRkQXBvbGxvU3RhdGUiLCJjbGllbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyIsInVzZUFwb2xsbyIsInN0YXRlIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/apolloClient.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/apolloClient */ \"./lib/apolloClient.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const apolloClient = (0,_lib_apolloClient__WEBPACK_IMPORTED_MODULE_2__.useApollo)(pageProps);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: apolloClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/unbox/Documents/github/poc-next-13/next-13-with-apollo-and-pages/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDQTtBQUNqQjtBQUVoQixTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQsTUFBTUMsZUFBZUosNERBQVNBLENBQUNHO0lBRS9CLHFCQUNFLDhEQUFDSiwwREFBY0E7UUFBQ00sUUFBUUQ7a0JBQ3RCLDRFQUFDRjtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LTEzLXdpdGgtYXBvbGxvLWFuZC1wYWdlcy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlQXBvbGxvIH0gZnJvbSBcIi4uL2xpYi9hcG9sbG9DbGllbnRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMpO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFwb2xsb1Byb3ZpZGVyIiwidXNlQXBvbGxvIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXBvbGxvQ2xpZW50IiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("deepmerge");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();