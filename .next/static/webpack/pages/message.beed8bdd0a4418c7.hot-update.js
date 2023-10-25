"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/message",{

/***/ "./components/messageComponents/quoteMessage.tsx":
/*!*******************************************************!*\
  !*** ./components/messageComponents/quoteMessage.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_outline_esm_EyeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/EyeIcon */ \"./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst QuoteMessage = (param)=>{\n    let { quoteRequest, setQuoteRequest } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"quote\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"img max-w-[288px] min-w-[288px] max-h-[104px] relative flex justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"bg-[#ccc] text-sm flex items-center absolute px-3 py-1 rounded-md text-white cursor-pointer\",\n                            href: \"/message/quote/1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_EyeIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"ml-1\",\n                                    children: \"View quote\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/assets/images/test_quote.png\",\n                            width: 288,\n                            height: 104,\n                            alt: \"profile\",\n                            className: \"object-fit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                !quoteRequest && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"button mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-white text-dark w-[140px] text-[14px] py-[8px] px-4 rounded mr-2\",\n                            onClick: ()=>setQuoteRequest(\"decline\"),\n                            children: \"Decline\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"#\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green text-white w-[140px] text-[14px] py-[8px] px-4 rounded\",\n                                onClick: ()=>setQuoteRequest(\"paid\"),\n                                children: \"Accept\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined),\n                quoteRequest && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"acceptRequest\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#FDE8E7] w-full text-[14px]  py-[8px] px-4 rounded mt-2 capitalize \".concat(quoteRequest === \"decline\" ? \"text-[#F02D16]\" : \"text-[#2FA500]\"),\n                        children: quoteRequest\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = QuoteMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuoteMessage);\nvar _c;\n$RefreshReg$(_c, \"QuoteMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lc3NhZ2VDb21wb25lbnRzL3F1b3RlTWVzc2FnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNEO0FBQ3ZCO0FBQ0Y7QUFFN0IsTUFBTUcsZUFHRDtRQUFDLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTCxrREFBSUE7NEJBQ0hLLFdBQVU7NEJBQ1ZDLE1BQU87OzhDQUVQLDhEQUFDUiwrRUFBT0E7b0NBQUNTLE9BQU87b0NBQUlDLFFBQVE7Ozs7Ozs4Q0FDNUIsOERBQUNDO29DQUFFSixXQUFVOzhDQUFPOzs7Ozs7Ozs7Ozs7c0NBRXRCLDhEQUFDTixtREFBS0E7NEJBQ0pXLEtBQUs7NEJBQ0xILE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JHLEtBQUk7NEJBQ0pOLFdBQVU7Ozs7Ozs7Ozs7OztnQkFHYixDQUFDSCw4QkFDQSw4REFBQ0U7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTzs0QkFDQ1AsV0FBVTs0QkFDVlEsU0FBUyxJQUFNVixnQkFBZ0I7c0NBQ2hDOzs7Ozs7c0NBSUQsOERBQUNILGtEQUFJQTs0QkFBQ00sTUFBTTtzQ0FDViw0RUFBQ007Z0NBQ0NQLFdBQVU7Z0NBQ1ZRLFNBQVMsSUFBTVYsZ0JBQWdCOzBDQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBT05ELDhCQUNDLDhEQUFDRTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ087d0JBQU9QLFdBQVcsMEVBQTJJLE9BQWpFSCxpQkFBaUIsWUFBWSxtQkFBbUI7a0NBQzFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0tBckRNRDtBQXVETiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lc3NhZ2VDb21wb25lbnRzL3F1b3RlTWVzc2FnZS50c3g/OGUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeWVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFF1b3RlTWVzc2FnZTogUmVhY3QuRkM8e1xuICBxdW90ZVJlcXVlc3Q6IGFueTtcbiAgc2V0UXVvdGVSZXF1ZXN0OiBhbnk7XG59PiA9ICh7IHF1b3RlUmVxdWVzdCwgc2V0UXVvdGVSZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWcgbWF4LXctWzI4OHB4XSBtaW4tdy1bMjg4cHhdIG1heC1oLVsxMDRweF0gcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNjY2NdIHRleHQtc20gZmxleCBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgcHgtMyBweS0xIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBocmVmPXtgL21lc3NhZ2UvcXVvdGUvMWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEV5ZUljb24gd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMVwiPlZpZXcgcXVvdGU8L3A+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtcIi9hc3NldHMvaW1hZ2VzL3Rlc3RfcXVvdGUucG5nXCJ9XG4gICAgICAgICAgICB3aWR0aD17Mjg4fVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDR9XG4gICAgICAgICAgICBhbHQ9XCJwcm9maWxlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1maXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IXF1b3RlUmVxdWVzdCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gbXQtMlwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWRhcmsgdy1bMTQwcHhdIHRleHQtWzE0cHhdIHB5LVs4cHhdIHB4LTQgcm91bmRlZCBtci0yXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVvdGVSZXF1ZXN0KFwiZGVjbGluZVwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGVjbGluZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9tZXNzYWdlL3BheW1lbnQvOWB9PiAqL31cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiI1wifT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuIHRleHQtd2hpdGUgdy1bMTQwcHhdIHRleHQtWzE0cHhdIHB5LVs4cHhdIHB4LTQgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVvdGVSZXF1ZXN0KFwicGFpZFwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFjY2VwdFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7cXVvdGVSZXF1ZXN0ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY2VwdFJlcXVlc3RcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYmctWyNGREU4RTddIHctZnVsbCB0ZXh0LVsxNHB4XSAgcHktWzhweF0gcHgtNCByb3VuZGVkIG10LTIgY2FwaXRhbGl6ZSAke3F1b3RlUmVxdWVzdCA9PT0gXCJkZWNsaW5lXCIgPyBcInRleHQtWyNGMDJEMTZdXCIgOiBcInRleHQtWyMyRkE1MDBdXCJ9YH0+XG4gICAgICAgICAgICAgIHtxdW90ZVJlcXVlc3R9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVNZXNzYWdlO1xuIl0sIm5hbWVzIjpbIkV5ZUljb24iLCJJbWFnZSIsIkxpbmsiLCJRdW90ZU1lc3NhZ2UiLCJxdW90ZVJlcXVlc3QiLCJzZXRRdW90ZVJlcXVlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwid2lkdGgiLCJoZWlnaHQiLCJwIiwic3JjIiwiYWx0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/messageComponents/quoteMessage.tsx\n"));

/***/ })

});