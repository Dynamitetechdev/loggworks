"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post-job",{

/***/ "./components/postJobComponents/processIndicator.tsx":
/*!***********************************************************!*\
  !*** ./components/postJobComponents/processIndicator.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProcessIndicator = (param)=>{\n    let { activeStep, setActiveStep } = param;\n    const steps = [\n        \"Job details\",\n        \"Location\",\n        \"Budget\",\n        \"Upload images\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                className: \"max-md:hidden hrelative text-gray-500 \",\n                children: steps.map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \" relative  \".concat(activeStep >= index + 1 ? \"border-dark\" : \"border-grey\", \" \").concat(index === steps.length - 1 ? null : \"pb-10 border-l-2\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-5 flex items-top\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute w-3 h-3 bg-dark rounded-full -left-[7px] \".concat(activeStep >= index ? \"bg-dark\" : \"bg-grey\", \" \").concat(index === steps.length - 1 ? \"-left-[4.57px] top-0\" : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-medium -mt-[6px] text-dark \".concat(activeStep >= index ? \"font-semibold\" : \"font-light opacity-9\"),\n                                    children: text\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                className: \"md:hidden relative text-gray-500 flex items-center mb-10\",\n                children: steps.map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative w-full border-t-2 \".concat(activeStep >= index + 1 ? \"border-dark\" : \"border-grey\", \" \").concat(index === steps.length - 1 ? \"w-10\" : \"w-10\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute w-3 h-3 bg-dark rounded-full -top-[7px] \".concat(activeStep >= index ? \"bg-dark\" : \"bg-grey\", \" \").concat(index === steps.length - 1 ? \"\" : \"\")\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = ProcessIndicator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessIndicator);\nvar _c;\n$RefreshReg$(_c, \"ProcessIndicator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RKb2JDb21wb25lbnRzL3Byb2Nlc3NJbmRpY2F0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNQSxtQkFHRDtRQUFDLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFO0lBQ2pDLE1BQU1DLFFBQVE7UUFBQztRQUFlO1FBQVk7UUFBVTtLQUFnQjtJQUVwRSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUNYRixNQUFNRyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDQzt3QkFFQ0osV0FBVyxjQUVQRyxPQURGUCxjQUFjTyxRQUFRLElBQUksZ0JBQWdCLGVBQzNDLEtBQTBELE9BQXZEQSxVQUFVTCxNQUFNTyxNQUFNLEdBQUcsSUFBSSxPQUFPO2tDQUV4Qyw0RUFBQ0M7NEJBQUlOLFdBQVU7OzhDQUNiLDhEQUFDTztvQ0FDQ1AsV0FBVyxxREFFUEcsT0FERlAsY0FBY08sUUFBUSxZQUFZLFdBQ25DLEtBQTRELE9BQXpEQSxVQUFVTCxNQUFNTyxNQUFNLEdBQUcsSUFBSSx5QkFBeUI7Ozs7Ozs4Q0FFNUQsOERBQUNHO29DQUNDUixXQUFXLG1DQUVWLE9BRENKLGNBQWNPLFFBQVEsa0JBQWtCOzhDQUd6Q0Q7Ozs7Ozs7Ozs7Ozt1QkFoQkFDOzs7Ozs7Ozs7OzBCQXNCWCw4REFBQ0o7Z0JBQUdDLFdBQVU7MEJBQ1hGLE1BQU1HLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNDO3dCQUVDSixXQUFXLDhCQUVQRyxPQURGUCxjQUFjTyxRQUFRLElBQUksZ0JBQWdCLGVBQzNDLEtBQWdELE9BQTdDQSxVQUFVTCxNQUFNTyxNQUFNLEdBQUcsSUFBSSxTQUFTO2tDQUUxQyw0RUFBQ0M7NEJBQUlOLFdBQVU7c0NBQ2IsNEVBQUNPO2dDQUNDUCxXQUFXLG9EQUVQRyxPQURGUCxjQUFjTyxRQUFRLFlBQVksV0FDbkMsS0FBd0MsT0FBckNBLFVBQVVMLE1BQU1PLE1BQU0sR0FBRyxJQUFJLEtBQUs7Ozs7Ozs7Ozs7O3VCQVRyQ0Y7Ozs7Ozs7Ozs7OztBQXdCakI7S0E1RE1SO0FBOEROLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Sm9iQ29tcG9uZW50cy9wcm9jZXNzSW5kaWNhdG9yLnRzeD9hYWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFByb2Nlc3NJbmRpY2F0b3I6IFJlYWN0LkZDPHtcbiAgYWN0aXZlU3RlcDogbnVtYmVyO1xuICBzZXRBY3RpdmVTdGVwOiBhbnk7XG59PiA9ICh7IGFjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXAgfSkgPT4ge1xuICBjb25zdCBzdGVwcyA9IFtcIkpvYiBkZXRhaWxzXCIsIFwiTG9jYXRpb25cIiwgXCJCdWRnZXRcIiwgXCJVcGxvYWQgaW1hZ2VzXCJdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxvbCBjbGFzc05hbWU9XCJtYXgtbWQ6aGlkZGVuIGhyZWxhdGl2ZSB0ZXh0LWdyYXktNTAwIFwiPlxuICAgICAgICB7c3RlcHMubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCByZWxhdGl2ZSAgJHtcbiAgICAgICAgICAgICAgYWN0aXZlU3RlcCA+PSBpbmRleCArIDEgPyBcImJvcmRlci1kYXJrXCIgOiBcImJvcmRlci1ncmV5XCJcbiAgICAgICAgICAgIH0gJHtpbmRleCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/IG51bGwgOiBcInBiLTEwIGJvcmRlci1sLTJcIn1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNSBmbGV4IGl0ZW1zLXRvcFwiPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHctMyBoLTMgYmctZGFyayByb3VuZGVkLWZ1bGwgLWxlZnQtWzdweF0gJHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVN0ZXAgPj0gaW5kZXggPyBcImJnLWRhcmtcIiA6IFwiYmctZ3JleVwiXG4gICAgICAgICAgICAgICAgfSAke2luZGV4ID09PSBzdGVwcy5sZW5ndGggLSAxID8gXCItbGVmdC1bNC41N3B4XSB0b3AtMFwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LW1lZGl1bSAtbXQtWzZweF0gdGV4dC1kYXJrICR7XG4gICAgICAgICAgICAgICAgICBhY3RpdmVTdGVwID49IGluZGV4ID8gXCJmb250LXNlbWlib2xkXCIgOiBcImZvbnQtbGlnaHQgb3BhY2l0eS05XCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L29sPlxuICAgICAgPG9sIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiByZWxhdGl2ZSB0ZXh0LWdyYXktNTAwIGZsZXggaXRlbXMtY2VudGVyIG1iLTEwXCI+XG4gICAgICAgIHtzdGVwcy5tYXAoKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgdy1mdWxsIGJvcmRlci10LTIgJHtcbiAgICAgICAgICAgICAgYWN0aXZlU3RlcCA+PSBpbmRleCArIDEgPyBcImJvcmRlci1kYXJrXCIgOiBcImJvcmRlci1ncmV5XCJcbiAgICAgICAgICAgIH0gJHtpbmRleCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/IFwidy0xMFwiIDogXCJ3LTEwXCJ9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB3LTMgaC0zIGJnLWRhcmsgcm91bmRlZC1mdWxsIC10b3AtWzdweF0gJHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVN0ZXAgPj0gaW5kZXggPyBcImJnLWRhcmtcIiA6IFwiYmctZ3JleVwiXG4gICAgICAgICAgICAgICAgfSAke2luZGV4ID09PSBzdGVwcy5sZW5ndGggLSAxID8gXCJcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgey8qIDxoM1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtbWVkaXVtIHRleHQtZGFyayAke1xuICAgICAgICAgICAgICAgICAgYWN0aXZlU3RlcCA+PSBpbmRleCA/IFwiZm9udC1zZW1pYm9sZFwiIDogXCJmb250LWxpZ2h0IG9wYWNpdHktOVwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9oMz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvb2w+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzSW5kaWNhdG9yO1xuIl0sIm5hbWVzIjpbIlByb2Nlc3NJbmRpY2F0b3IiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInN0ZXBzIiwib2wiLCJjbGFzc05hbWUiLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJsaSIsImxlbmd0aCIsImRpdiIsInNwYW4iLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/postJobComponents/processIndicator.tsx\n"));

/***/ })

});