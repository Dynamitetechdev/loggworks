"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/verify",{

/***/ "./components/general/alert/alert.tsx":
/*!********************************************!*\
  !*** ./components/general/alert/alert.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Alert = (param)=>{\n    let { setIsSent } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"alert absolute -bottom-[25%] center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inline-flex items-center justify-between w-[280px] h-[24px] bg-[#D1FADF] border border-[#92DA6C] py-[14px] px-[20px] rounded\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/assets/icons/alert_check.png\",\n                    width: 20,\n                    height: 20,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/alert/alert.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red text-[16px]\",\n                    children: \"OTP successfully sent\"\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/alert/alert.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/assets/icons/alert_close.svg\",\n                    width: 24,\n                    height: 24,\n                    alt: \"\",\n                    onClick: ()=>setIsSent(false)\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/alert/alert.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/alert/alert.tsx\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/alert/alert.tsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Alert;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Alert);\nvar _c;\n$RefreshReg$(_c, \"Alert\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dlbmVyYWwvYWxlcnQvYWxlcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxRQUE0QztRQUFDLEVBQUVDLFNBQVMsRUFBRTtJQUM1RCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNKLG1EQUFLQTtvQkFBQ0ssS0FBSztvQkFBaUNDLE9BQU87b0JBQUlDLFFBQVE7b0JBQUlDLEtBQUk7Ozs7Ozs4QkFDeEUsOERBQUNDO29CQUFFTCxXQUFVOzhCQUF1Qjs7Ozs7OzhCQUNwQyw4REFBQ0osbURBQUtBO29CQUFDSyxLQUFLO29CQUFpQ0MsT0FBTztvQkFBSUMsUUFBUTtvQkFBSUMsS0FBSTtvQkFBR0UsU0FBUyxJQUFJUixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsSDtLQVZNRDtBQVlOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2VuZXJhbC9hbGVydC9hbGVydC50c3g/NTAwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuY29uc3QgQWxlcnQ6IFJlYWN0LkZDPHsgc2V0SXNTZW50OiAoKSA9PiB2b2lkfT4gPSAoeyBzZXRJc1NlbnQgfSkgPT4ge1xuICAgIHJldHVybiAoIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFic29sdXRlIC1ib3R0b20tWzI1JV0gY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1bMjgwcHhdIGgtWzI0cHhdIGJnLVsjRDFGQURGXSBib3JkZXIgYm9yZGVyLVsjOTJEQTZDXSBweS1bMTRweF0gcHgtWzIwcHhdIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXsnL2Fzc2V0cy9pY29ucy9hbGVydF9jaGVjay5wbmcnfSB3aWR0aD17MjB9IGhlaWdodD17MjB9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQgdGV4dC1bMTZweF1cIj5PVFAgc3VjY2Vzc2Z1bGx5IHNlbnQ8L3A+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Jy9hc3NldHMvaWNvbnMvYWxlcnRfY2xvc2Uuc3ZnJ30gd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSBhbHQ9XCJcIiBvbkNsaWNrPXsoKT0+c2V0SXNTZW50KGZhbHNlKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7Il0sIm5hbWVzIjpbIkltYWdlIiwiQWxlcnQiLCJzZXRJc1NlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/general/alert/alert.tsx\n"));

/***/ })

});