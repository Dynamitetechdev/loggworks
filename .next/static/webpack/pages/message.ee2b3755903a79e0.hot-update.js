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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_outline_esm_EyeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/EyeIcon */ \"./node_modules/@heroicons/react/24/outline/esm/EyeIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst QuoteMessage = (param)=>{\n    let { quoteRequest, setQuoteRequest } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"quote\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"img max-w-[288px] min-w-[288px] max-h-[104px] relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-[#ccc] text-sm flex items-center absolute px-3 py-1 rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_EyeIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    width: 16,\n                                    height: 16\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                                    lineNumber: 13,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"View quote\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/assets/images/test_quote.png\",\n                            width: 288,\n                            height: 104,\n                            alt: \"profile\",\n                            className: \"object-fit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined),\n                !quoteRequest && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"button mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-white text-dark w-[140px] text-[14px] py-[8px] px-4 rounded mr-2\",\n                            onClick: ()=>setQuoteRequest(\"decline\"),\n                            children: \"Decline\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-green text-white w-[140px] text-[14px] py-[8px] px-4 rounded\",\n                            onClick: ()=>setQuoteRequest(\"paid\"),\n                            children: \"Accept\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, undefined),\n                quoteRequest && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"acceptRequest\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#FDE8E7] w-full text-[14px] text-[#F02D16] py-[8px] px-4 rounded mt-2 capitalize\",\n                        children: quoteRequest\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/messageComponents/quoteMessage.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = QuoteMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuoteMessage);\nvar _c;\n$RefreshReg$(_c, \"QuoteMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lc3NhZ2VDb21wb25lbnRzL3F1b3RlTWVzc2FnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzRDtBQUN2QjtBQUUvQixNQUFNRSxlQUdEO1FBQUMsRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUU7SUFDckMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ04sK0VBQU9BO29DQUFDTyxPQUFPO29DQUFJQyxRQUFROzs7Ozs7OENBQzVCLDhEQUFDQzs4Q0FBRTs7Ozs7Ozs7Ozs7O3NDQUVMLDhEQUFDUixtREFBS0E7NEJBQ0pTLEtBQUs7NEJBQ0xILE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JHLEtBQUk7NEJBQ0pMLFdBQVU7Ozs7Ozs7Ozs7OztnQkFHYixDQUFDSCw4QkFDQSw4REFBQ0U7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTTs0QkFDQ04sV0FBVTs0QkFDVk8sU0FBUyxJQUFNVCxnQkFBZ0I7c0NBQ2hDOzs7Ozs7c0NBR0QsOERBQUNROzRCQUNDTixXQUFVOzRCQUNWTyxTQUFTLElBQU1ULGdCQUFnQjtzQ0FDaEM7Ozs7Ozs7Ozs7OztnQkFNSkQsOEJBQ0MsOERBQUNFO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDTTt3QkFBT04sV0FBVTtrQ0FDZkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZjtLQS9DTUQ7QUFpRE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZXNzYWdlQ29tcG9uZW50cy9xdW90ZU1lc3NhZ2UudHN4PzhlMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXllSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBRdW90ZU1lc3NhZ2U6IFJlYWN0LkZDPHtcbiAgcXVvdGVSZXF1ZXN0OiBhbnk7XG4gIHNldFF1b3RlUmVxdWVzdDogYW55O1xufT4gPSAoeyBxdW90ZVJlcXVlc3QsIHNldFF1b3RlUmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nIG1heC13LVsyODhweF0gbWluLXctWzI4OHB4XSBtYXgtaC1bMTA0cHhdIHJlbGF0aXZlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI2NjY10gdGV4dC1zbSBmbGV4IGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBweC0zIHB5LTEgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgPEV5ZUljb24gd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgICAgPHA+VmlldyBxdW90ZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17XCIvYXNzZXRzL2ltYWdlcy90ZXN0X3F1b3RlLnBuZ1wifVxuICAgICAgICAgICAgd2lkdGg9ezI4OH1cbiAgICAgICAgICAgIGhlaWdodD17MTA0fVxuICAgICAgICAgICAgYWx0PVwicHJvZmlsZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtZml0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyFxdW90ZVJlcXVlc3QgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG10LTJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1kYXJrIHctWzE0MHB4XSB0ZXh0LVsxNHB4XSBweS1bOHB4XSBweC00IHJvdW5kZWQgbXItMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1b3RlUmVxdWVzdChcImRlY2xpbmVcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERlY2xpbmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbiB0ZXh0LXdoaXRlIHctWzE0MHB4XSB0ZXh0LVsxNHB4XSBweS1bOHB4XSBweC00IHJvdW5kZWRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRdW90ZVJlcXVlc3QoXCJwYWlkXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBY2NlcHRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtxdW90ZVJlcXVlc3QgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjZXB0UmVxdWVzdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1bI0ZERThFN10gdy1mdWxsIHRleHQtWzE0cHhdIHRleHQtWyNGMDJEMTZdIHB5LVs4cHhdIHB4LTQgcm91bmRlZCBtdC0yIGNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAge3F1b3RlUmVxdWVzdH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdW90ZU1lc3NhZ2U7XG4iXSwibmFtZXMiOlsiRXllSWNvbiIsIkltYWdlIiwiUXVvdGVNZXNzYWdlIiwicXVvdGVSZXF1ZXN0Iiwic2V0UXVvdGVSZXF1ZXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJwIiwic3JjIiwiYWx0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/messageComponents/quoteMessage.tsx\n"));

/***/ })

});