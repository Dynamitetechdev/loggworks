"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/message/quote/[id]",{

/***/ "./components/postJobComponents/navHead.tsx":
/*!**************************************************!*\
  !*** ./components/postJobComponents/navHead.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/ChevronLeftIcon */ \"./node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst NavHead = (param)=>{\n    let { activeStep, setActiveStep, title, type } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const goBack = ()=>{\n        if (activeStep) {\n            if (activeStep != 0) {\n                setActiveStep(activeStep - 1);\n            }\n        } else {\n            router.back();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            type === \"notab\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav_head flex items-center py-3 md:mx-6 mx-3 border-b border-grey80 xl:-pl-[10%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"back z-10 md:border border-grey80 w-[40px] h-[40px] flex items-center justify-center\",\n                        onClick: ()=>goBack(),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            width: 20,\n                            height: 20\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:w-5/12 w-full md:relative md:left-[26%] max-md:flex max-md:justify-center max-md:-ml-[40px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-bold capitalize md:text-[20px] text-[16px]\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined),\n            type == \"plain\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav_head flex items-center md:py-5 py-3 md:mx-6 mx-3 border-b  border-grey80\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center md:w-8/12 w-full justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold capitalize md:text-[20px] text-[16px]\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined),\n            type === \"notab-size\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav_head flex items-center py-3 md:mx-6 mx-3 border-b  border-grey80\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"back z-10 md:border border-grey80 w-[40px] h-[40px] flex items-center justify-center\",\n                        onClick: ()=>goBack(),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            width: 20,\n                            height: 20\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center md:w-4/12 w-full justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold capitalize md:text-[20px] text-[16px]\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/postJobComponents/navHead.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(NavHead, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = NavHead;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavHead);\nvar _c;\n$RefreshReg$(_c, \"NavHead\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RKb2JDb21wb25lbnRzL25hdkhlYWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdFO0FBRWhDO0FBRXhDLE1BQU1FLFVBS0Q7UUFBQyxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUU7O0lBQzlDLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNTyxTQUFTO1FBQ2IsSUFBSUwsWUFBWTtZQUNkLElBQUlBLGNBQWMsR0FBRztnQkFDbkJDLGNBQWNELGFBQWE7WUFDN0I7UUFDRixPQUFPO1lBQ0xJLE9BQU9FLElBQUk7UUFDYjtJQUNGO0lBRUEscUJBQ0U7O1lBQ0dILFNBQVMseUJBQ1IsOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQ0NDLFdBQVU7d0JBQ1ZDLFNBQVMsSUFBTUo7a0NBRWYsNEVBQUNSLHVGQUFlQTs0QkFBQ2EsT0FBTzs0QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7a0NBR3RDLDhEQUFDSjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNJO2dDQUFHSixXQUFVOzBDQUNYTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9WQyxRQUFRLHlCQUNQLDhEQUFDSTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNJO3dCQUFHSixXQUFVO2tDQUNYTjs7Ozs7Ozs7Ozs7Ozs7OztZQU1SQyxTQUFTLDhCQUNSLDhEQUFDSTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxTQUFTLElBQU1KO2tDQUVmLDRFQUFDUix1RkFBZUE7NEJBQUNhLE9BQU87NEJBQUlDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUd0Qyw4REFBQ0o7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNJOzRCQUFHSixXQUFVO3NDQUNYTjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0dBbEVNSDs7UUFNV0Qsa0RBQVNBOzs7S0FOcEJDO0FBb0VOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdEpvYkNvbXBvbmVudHMvbmF2SGVhZC50c3g/NDAwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGV2cm9uTGVmdEljb24sIFBsdXNJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IE5hdkhlYWQ6IFJlYWN0LkZDPHtcbiAgYWN0aXZlU3RlcDogYW55O1xuICBzZXRBY3RpdmVTdGVwOiBhbnk7XG4gIHRpdGxlOiBzdHJpbmcgfCBhbnk7XG4gIHR5cGU/OiBzdHJpbmc7XG59PiA9ICh7IGFjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXAsIHRpdGxlLCB0eXBlIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGdvQmFjayA9ICgpID0+IHtcbiAgICBpZiAoYWN0aXZlU3RlcCkge1xuICAgICAgaWYgKGFjdGl2ZVN0ZXAgIT0gMCkge1xuICAgICAgICBzZXRBY3RpdmVTdGVwKGFjdGl2ZVN0ZXAgLSAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLmJhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3R5cGUgPT09IFwibm90YWJcIiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2hlYWQgZmxleCBpdGVtcy1jZW50ZXIgcHktMyBtZDpteC02IG14LTMgYm9yZGVyLWIgYm9yZGVyLWdyZXk4MCB4bDotcGwtWzEwJV1cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrIHotMTAgbWQ6Ym9yZGVyIGJvcmRlci1ncmV5ODAgdy1bNDBweF0gaC1bNDBweF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29CYWNrKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctNS8xMiB3LWZ1bGwgbWQ6cmVsYXRpdmUgbWQ6bGVmdC1bMjYlXSBtYXgtbWQ6ZmxleCBtYXgtbWQ6anVzdGlmeS1jZW50ZXIgbWF4LW1kOi1tbC1bNDBweF1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGNhcGl0YWxpemUgbWQ6dGV4dC1bMjBweF0gdGV4dC1bMTZweF1cIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7dHlwZSA9PSBcInBsYWluXCIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9oZWFkIGZsZXggaXRlbXMtY2VudGVyIG1kOnB5LTUgcHktMyBtZDpteC02IG14LTMgYm9yZGVyLWIgIGJvcmRlci1ncmV5ODBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOnctOC8xMiB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgY2FwaXRhbGl6ZSBtZDp0ZXh0LVsyMHB4XSB0ZXh0LVsxNnB4XVwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHt0eXBlID09PSBcIm5vdGFiLXNpemVcIiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2hlYWQgZmxleCBpdGVtcy1jZW50ZXIgcHktMyBtZDpteC02IG14LTMgYm9yZGVyLWIgIGJvcmRlci1ncmV5ODBcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrIHotMTAgbWQ6Ym9yZGVyIGJvcmRlci1ncmV5ODAgdy1bNDBweF0gaC1bNDBweF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29CYWNrKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOnctNC8xMiB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgY2FwaXRhbGl6ZSBtZDp0ZXh0LVsyMHB4XSB0ZXh0LVsxNnB4XVwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZIZWFkO1xuIl0sIm5hbWVzIjpbIkNoZXZyb25MZWZ0SWNvbiIsInVzZVJvdXRlciIsIk5hdkhlYWQiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInRpdGxlIiwidHlwZSIsInJvdXRlciIsImdvQmFjayIsImJhY2siLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/postJobComponents/navHead.tsx\n"));

/***/ })

});