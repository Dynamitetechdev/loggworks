"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/activity",{

/***/ "./components/general/tabSwitchCategory/tabNav.tsx":
/*!*********************************************************!*\
  !*** ./components/general/tabSwitchCategory/tabNav.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TabNav = (param)=>{\n    let { options, activeTab, handleActive, setSelectedOptions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"tab\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex items-center text-center bg-lightWhite  p-1 rounded cursor-pointer text-[15px]\",\n            children: options.map((x, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"w-1/2 rounded  py-[7px] capitalize \".concat(activeTab === x && \"bg-white text-green font-bold\", \" \"),\n                    onClick: ()=>{\n                        handleActive(x);\n                        setSelectedOptions(x.toLowerCase() === \"bookings\" ? \"current\" : x.toLowerCase() === \"review\" && \"reviews\");\n                    },\n                    children: x\n                }, i, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/tabSwitchCategory/tabNav.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/tabSwitchCategory/tabNav.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/tabSwitchCategory/tabNav.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TabNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabNav);\nvar _c;\n$RefreshReg$(_c, \"TabNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dlbmVyYWwvdGFiU3dpdGNoQ2F0ZWdvcnkvdGFiTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTUEsU0FLRDtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLGtCQUFrQixFQUFFO0lBQzVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFHRCxXQUFVO3NCQUNYTCxRQUFRTyxHQUFHLENBQUMsQ0FBQ0MsR0FBUUMsa0JBQ3BCLDhEQUFDQztvQkFDQ0wsV0FBVyxzQ0FFVixPQURDSixjQUFjTyxLQUFLLGlDQUNwQjtvQkFFREcsU0FBUzt3QkFDUFQsYUFBYU07d0JBQ2JMLG1CQUNFSyxFQUFFSSxXQUFXLE9BQU8sYUFDaEIsWUFDQUosRUFBRUksV0FBVyxPQUFPLFlBQVk7b0JBRXhDOzhCQUVDSjttQkFWSUM7Ozs7Ozs7Ozs7Ozs7OztBQWdCakI7S0E5Qk1WO0FBZ0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2VuZXJhbC90YWJTd2l0Y2hDYXRlZ29yeS90YWJOYXYudHN4P2FlODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRhYk5hdjogUmVhY3QuRkM8e1xuICBvcHRpb25zOiBhbnk7XG4gIGFjdGl2ZVRhYjogc3RyaW5nO1xuICBoYW5kbGVBY3RpdmU6IGFueTtcbiAgc2V0U2VsZWN0ZWRPcHRpb25zPzogYW55O1xufT4gPSAoeyBvcHRpb25zLCBhY3RpdmVUYWIsIGhhbmRsZUFjdGl2ZSwgc2V0U2VsZWN0ZWRPcHRpb25zIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYlwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGJnLWxpZ2h0V2hpdGUgIHAtMSByb3VuZGVkIGN1cnNvci1wb2ludGVyIHRleHQtWzE1cHhdXCI+XG4gICAgICAgIHtvcHRpb25zLm1hcCgoeDogYW55LCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMS8yIHJvdW5kZWQgIHB5LVs3cHhdIGNhcGl0YWxpemUgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSB4ICYmIFwiYmctd2hpdGUgdGV4dC1ncmVlbiBmb250LWJvbGRcIlxuICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVBY3RpdmUoeCk7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkT3B0aW9ucyhcbiAgICAgICAgICAgICAgICB4LnRvTG93ZXJDYXNlKCkgPT09IFwiYm9va2luZ3NcIlxuICAgICAgICAgICAgICAgICAgPyBcImN1cnJlbnRcIlxuICAgICAgICAgICAgICAgICAgOiB4LnRvTG93ZXJDYXNlKCkgPT09IFwicmV2aWV3XCIgJiYgXCJyZXZpZXdzXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3h9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFiTmF2O1xuIl0sIm5hbWVzIjpbIlRhYk5hdiIsIm9wdGlvbnMiLCJhY3RpdmVUYWIiLCJoYW5kbGVBY3RpdmUiLCJzZXRTZWxlY3RlZE9wdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsIngiLCJpIiwibGkiLCJvbkNsaWNrIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/general/tabSwitchCategory/tabNav.tsx\n"));

/***/ })

});