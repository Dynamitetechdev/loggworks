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

/***/ "./components/postJobComponents/processIndicator.tsx":
/*!***********************************************************!*\
  !*** ./components/postJobComponents/processIndicator.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProcessIndicator = (param)=>{\n    let { activeStep, setActiveStep } = param;\n    const steps = [\n        \"Job details\",\n        \"Location\",\n        \"Budget\",\n        \"Upload images\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: \"relative text-gray-500 \",\n        children: steps.map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \" relative  \".concat(activeStep >= index + 1 ? \"border-dark\" : \"border-grey\", \" \").concat(index === steps.length - 1 ? null : \"pb-10 border-l-2\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-5 flex items-top\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"absolute w-3 h-3 bg-dark rounded-full -left-[7px] \".concat(activeStep >= index ? \"bg-dark\" : \"bg-grey\", \" \").concat(index === steps.length - 1 ? \"-left-[4.5px] top-0\" : \"\")\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-medium -mt-[6px] text-dark \".concat(activeStep >= index ? \"font-semibold\" : \"font-light opacity-9\"),\n                            children: text\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, undefined)\n            }, index, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/processIndicator.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProcessIndicator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessIndicator);\nvar _c;\n$RefreshReg$(_c, \"ProcessIndicator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RKb2JDb21wb25lbnRzL3Byb2Nlc3NJbmRpY2F0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNQSxtQkFHRDtRQUFDLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFO0lBQ2pDLE1BQU1DLFFBQVE7UUFBQztRQUFlO1FBQVk7UUFBVTtLQUFnQjtJQUVwRSxxQkFDRSw4REFBQ0M7UUFBR0MsV0FBVTtrQkFDWEYsTUFBTUcsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ0M7Z0JBRUNKLFdBQVcsY0FFUEcsT0FERlAsY0FBY08sUUFBUSxJQUFJLGdCQUFnQixlQUMzQyxLQUEwRCxPQUF2REEsVUFBVUwsTUFBTU8sTUFBTSxHQUFHLElBQUksT0FBTzswQkFFeEMsNEVBQUNDO29CQUFJTixXQUFVOztzQ0FDYiw4REFBQ087NEJBQ0NQLFdBQVcscURBRVBHLE9BREZQLGNBQWNPLFFBQVEsWUFBWSxXQUNuQyxLQUEyRCxPQUF4REEsVUFBVUwsTUFBTU8sTUFBTSxHQUFHLElBQUksd0JBQXdCOzs7Ozs7c0NBRTNELDhEQUFDRzs0QkFDQ1IsV0FBVyxtQ0FFVixPQURDSixjQUFjTyxRQUFRLGtCQUFrQjtzQ0FHekNEOzs7Ozs7Ozs7Ozs7ZUFoQkFDOzs7Ozs7Ozs7O0FBdUJmO0tBakNNUjtBQW1DTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdEpvYkNvbXBvbmVudHMvcHJvY2Vzc0luZGljYXRvci50c3g/YWFhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9jZXNzSW5kaWNhdG9yOiBSZWFjdC5GQzx7XG4gIGFjdGl2ZVN0ZXA6IG51bWJlcjtcbiAgc2V0QWN0aXZlU3RlcDogYW55O1xufT4gPSAoeyBhY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwIH0pID0+IHtcbiAgY29uc3Qgc3RlcHMgPSBbXCJKb2IgZGV0YWlsc1wiLCBcIkxvY2F0aW9uXCIsIFwiQnVkZ2V0XCIsIFwiVXBsb2FkIGltYWdlc1wiXTtcblxuICByZXR1cm4gKFxuICAgIDxvbCBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LWdyYXktNTAwIFwiPlxuICAgICAge3N0ZXBzLm1hcCgodGV4dCwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBjbGFzc05hbWU9e2AgcmVsYXRpdmUgICR7XG4gICAgICAgICAgICBhY3RpdmVTdGVwID49IGluZGV4ICsgMSA/IFwiYm9yZGVyLWRhcmtcIiA6IFwiYm9yZGVyLWdyZXlcIlxuICAgICAgICAgIH0gJHtpbmRleCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/IG51bGwgOiBcInBiLTEwIGJvcmRlci1sLTJcIn1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC01IGZsZXggaXRlbXMtdG9wXCI+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB3LTMgaC0zIGJnLWRhcmsgcm91bmRlZC1mdWxsIC1sZWZ0LVs3cHhdICR7XG4gICAgICAgICAgICAgICAgYWN0aXZlU3RlcCA+PSBpbmRleCA/IFwiYmctZGFya1wiIDogXCJiZy1ncmV5XCJcbiAgICAgICAgICAgICAgfSAke2luZGV4ID09PSBzdGVwcy5sZW5ndGggLSAxID8gXCItbGVmdC1bNC41cHhdIHRvcC0wXCIgOiBcIlwifWB9XG4gICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtbWVkaXVtIC1tdC1bNnB4XSB0ZXh0LWRhcmsgJHtcbiAgICAgICAgICAgICAgICBhY3RpdmVTdGVwID49IGluZGV4ID8gXCJmb250LXNlbWlib2xkXCIgOiBcImZvbnQtbGlnaHQgb3BhY2l0eS05XCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvb2w+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzSW5kaWNhdG9yO1xuIl0sIm5hbWVzIjpbIlByb2Nlc3NJbmRpY2F0b3IiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInN0ZXBzIiwib2wiLCJjbGFzc05hbWUiLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJsaSIsImxlbmd0aCIsImRpdiIsInNwYW4iLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/postJobComponents/processIndicator.tsx\n"));

/***/ })

});