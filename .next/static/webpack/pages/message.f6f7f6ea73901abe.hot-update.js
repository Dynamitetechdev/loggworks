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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_outline_esm_EyeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/EyeIcon */ \"./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst QuoteMessage = (param)=>{\n    let { quoteRequest, setQuoteRequest } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"quote\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"img max-w-[288px] min-w-[288px] max-h-[104px] relative flex justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"bg-[#ccc] text-sm flex items-center absolute px-3 py-1 rounded-md text-white cursor-pointer\",\n                            href: \"/message/quote/1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_EyeIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"ml-1\",\n                                    children: \"View quote\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/assets/images/test_quote.png\",\n                            width: 288,\n                            height: 104,\n                            alt: \"profile\",\n                            className: \"object-fit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                !quoteRequest && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"button mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-white text-dark w-[140px] text-[14px] py-[8px] px-4 rounded mr-2\",\n                            onClick: ()=>setQuoteRequest(\"decline\"),\n                            children: \"Decline\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/message/quote/1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-green text-white w-[140px] text-[14px] py-[8px] px-4 rounded\",\n                                onClick: ()=>setQuoteRequest(\"paid\"),\n                                children: \"Accept\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined),\n                quoteRequest && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"acceptRequest\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#FDE8E7] w-full text-[14px] text-[#F02D16] py-[8px] px-4 rounded mt-2 capitalize\",\n                        children: quoteRequest\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = QuoteMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuoteMessage);\nvar _c;\n$RefreshReg$(_c, \"QuoteMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lc3NhZ2VDb21wb25lbnRzL3F1b3RlTWVzc2FnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNEO0FBQ3ZCO0FBQ0Y7QUFFN0IsTUFBTUcsZUFHRDtRQUFDLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTCxrREFBSUE7NEJBQ0hLLFdBQVU7NEJBQ1ZDLE1BQU87OzhDQUVQLDhEQUFDUiwrRUFBT0E7b0NBQUNTLE9BQU87b0NBQUlDLFFBQVE7Ozs7Ozs4Q0FDNUIsOERBQUNDO29DQUFFSixXQUFVOzhDQUFPOzs7Ozs7Ozs7Ozs7c0NBRXRCLDhEQUFDTixtREFBS0E7NEJBQ0pXLEtBQUs7NEJBQ0xILE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JHLEtBQUk7NEJBQ0pOLFdBQVU7Ozs7Ozs7Ozs7OztnQkFHYixDQUFDSCw4QkFDQSw4REFBQ0U7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTzs0QkFDQ1AsV0FBVTs0QkFDVlEsU0FBUyxJQUFNVixnQkFBZ0I7c0NBQ2hDOzs7Ozs7c0NBR0QsOERBQUNILGtEQUFJQTs0QkFBQ00sTUFBTztzQ0FDWCw0RUFBQ007Z0NBQ0NQLFdBQVU7Z0NBQ1ZRLFNBQVMsSUFBTVYsZ0JBQWdCOzBDQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBT05ELDhCQUNDLDhEQUFDRTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ087d0JBQU9QLFdBQVU7a0NBQ2ZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Y7S0FwRE1EO0FBc0ROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVzc2FnZUNvbXBvbmVudHMvcXVvdGVNZXNzYWdlLnRzeD84ZTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV5ZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgUXVvdGVNZXNzYWdlOiBSZWFjdC5GQzx7XG4gIHF1b3RlUmVxdWVzdDogYW55O1xuICBzZXRRdW90ZVJlcXVlc3Q6IGFueTtcbn0+ID0gKHsgcXVvdGVSZXF1ZXN0LCBzZXRRdW90ZVJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZyBtYXgtdy1bMjg4cHhdIG1pbi13LVsyODhweF0gbWF4LWgtWzEwNHB4XSByZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI2NjY10gdGV4dC1zbSBmbGV4IGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBweC0zIHB5LTEgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIGhyZWY9e2AvbWVzc2FnZS9xdW90ZS8xYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RXllSWNvbiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0xXCI+VmlldyBxdW90ZTwvcD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e1wiL2Fzc2V0cy9pbWFnZXMvdGVzdF9xdW90ZS5wbmdcIn1cbiAgICAgICAgICAgIHdpZHRoPXsyODh9XG4gICAgICAgICAgICBoZWlnaHQ9ezEwNH1cbiAgICAgICAgICAgIGFsdD1cInByb2ZpbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWZpdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshcXVvdGVSZXF1ZXN0ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBtdC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtZGFyayB3LVsxNDBweF0gdGV4dC1bMTRweF0gcHktWzhweF0gcHgtNCByb3VuZGVkIG1yLTJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRdW90ZVJlcXVlc3QoXCJkZWNsaW5lXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEZWNsaW5lXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbWVzc2FnZS9xdW90ZS8xYH0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbiB0ZXh0LXdoaXRlIHctWzE0MHB4XSB0ZXh0LVsxNHB4XSBweS1bOHB4XSBweC00IHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1b3RlUmVxdWVzdChcInBhaWRcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBY2NlcHRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge3F1b3RlUmVxdWVzdCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NlcHRSZXF1ZXN0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLVsjRkRFOEU3XSB3LWZ1bGwgdGV4dC1bMTRweF0gdGV4dC1bI0YwMkQxNl0gcHktWzhweF0gcHgtNCByb3VuZGVkIG10LTIgY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICB7cXVvdGVSZXF1ZXN0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1b3RlTWVzc2FnZTtcbiJdLCJuYW1lcyI6WyJFeWVJY29uIiwiSW1hZ2UiLCJMaW5rIiwiUXVvdGVNZXNzYWdlIiwicXVvdGVSZXF1ZXN0Iiwic2V0UXVvdGVSZXF1ZXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsIndpZHRoIiwiaGVpZ2h0IiwicCIsInNyYyIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/messageComponents/quoteMessage.tsx\n"));

/***/ })

});