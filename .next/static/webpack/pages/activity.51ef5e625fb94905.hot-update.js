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

/***/ "./components/activitiesComponents/reviews.tsx":
/*!*****************************************************!*\
  !*** ./components/activitiesComponents/reviews.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/XMarkIcon */ \"./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Reviews = (param)=>{\n    let { setOpenReview, reviewsData } = param;\n    _s();\n    const [star, setStar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array(4).fill(\"\"));\n    console.log(\"reviewsData\", reviewsData.length);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed modal-container z-50 w-full  bg-green top-0 right-0 h-full flex items-center justify-end\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative md:w-[598px] max-sm:pt-0 bg-sideBarColor h-screen shadow dark:bg-gray-700 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex items-center justify-between bg-white py-4 px-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-bold text-[20px]\",\n                                    children: \"Reviews\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"close cursor-pointer\",\n                                    onClick: ()=>setOpenReview(false),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        width: 24,\n                                        height: 24\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-8 h-[850px] overflow-y-scroll pb-36\",\n                            children: reviewsData && reviewsData.length > 0 && reviewsData.map((x, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card_content px-2 py-1 my-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"title flex items-start justify-between\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center mb-3\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                            src: \"/assets/images/client_test.png\",\n                                                            width: 40,\n                                                            height: 40,\n                                                            alt: \"brand_logo\",\n                                                            className: \"mr-2\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                                            lineNumber: 34,\n                                                            columnNumber: 27\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                                    className: \"font-bold text-[18px]\",\n                                                                    children: \"Avigdor Branca\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                                                    lineNumber: 42,\n                                                                    columnNumber: 29\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    children: \"09 Jun 2021 | 9:30 AM\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                                                    lineNumber: 45,\n                                                                    columnNumber: 29\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"text-[14px]\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"stars flex items-center\",\n                                                                        children: [\n                                                                            star.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                                                    src: \"/assets/icons/filledStar.svg\",\n                                                                                    height: 16,\n                                                                                    width: 16,\n                                                                                    alt: \"icon\",\n                                                                                    className: \"\"\n                                                                                }, i, false, {\n                                                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                                                                    lineNumber: 49,\n                                                                                    columnNumber: 35\n                                                                                }, undefined)),\n                                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                                                src: \"/assets/icons/emptyStar.svg\",\n                                                                                height: 16,\n                                                                                width: 16,\n                                                                                alt: \"icon\"\n                                                                            }, void 0, false, {\n                                                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                                                                lineNumber: 58,\n                                                                                columnNumber: 33\n                                                                            }, undefined)\n                                                                        ]\n                                                                    }, void 0, true, {\n                                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                                                        lineNumber: 47,\n                                                                        columnNumber: 31\n                                                                    }, undefined)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                                                    lineNumber: 46,\n                                                                    columnNumber: 29\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                                            lineNumber: 41,\n                                                            columnNumber: 27\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                className: \"font-light pb-3\",\n                                                children: \"I am enjoying these “computer” speakers. They are sinced with my phone. I had Bose speakers and bought these as a replacement. It took me awhile to get the Bluetooth to work with my phone.\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, i, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 19\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/reviews.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Reviews, \"5ILYzi/SkZQEvrbRDVGKgRlJO0g=\");\n_c = Reviews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reviews);\nvar _c;\n$RefreshReg$(_c, \"Reviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FjdGl2aXRpZXNDb21wb25lbnRzL3Jldmlld3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFDekI7QUFDRTtBQUVqQyxNQUFNRyxVQUFnRTtRQUFDLEVBQ3JFQyxhQUFhLEVBQ2JDLFdBQVcsRUFDWjs7SUFDQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQVFNLE1BQU0sR0FBR0MsSUFBSSxDQUFDO0lBQ3REQyxRQUFRQyxHQUFHLENBQUMsZUFBZU4sWUFBWU8sTUFBTTtJQUM3QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBR0QsV0FBVTs4Q0FBd0I7Ozs7Ozs4Q0FDdEMsOERBQUNEO29DQUNDQyxXQUFVO29DQUNWRSxTQUFTLElBQU1aLGNBQWM7OENBRTdCLDRFQUFDSixpRkFBU0E7d0NBQUNpQixPQUFPO3dDQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJbEMsOERBQUNMOzRCQUFJQyxXQUFVO3NDQUNaVCxlQUNDQSxZQUFZTyxNQUFNLEdBQUcsS0FDckJQLFlBQVljLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxrQkFDbEIsOERBQUNSO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUNiLDRFQUFDRDtvREFBSUMsV0FBVTs7c0VBQ2IsOERBQUNiLG1EQUFLQTs0REFDSnFCLEtBQUs7NERBQ0xMLE9BQU87NERBQ1BDLFFBQVE7NERBQ1JLLEtBQUk7NERBQ0pULFdBQVU7Ozs7OztzRUFFWiw4REFBQ0Q7OzhFQUNDLDhEQUFDVztvRUFBR1YsV0FBVTs4RUFBd0I7Ozs7Ozs4RUFHdEMsOERBQUNXOzhFQUFFOzs7Ozs7OEVBQ0gsOERBQUNaO29FQUFJQyxXQUFVOzhFQUNiLDRFQUFDRDt3RUFBSUMsV0FBVTs7NEVBQ1pSLEtBQUthLEdBQUcsQ0FBQyxDQUFDTyxHQUFRTCxrQkFDakIsOERBQUNwQixtREFBS0E7b0ZBRUpxQixLQUFLO29GQUNMSixRQUFRO29GQUNSRCxPQUFPO29GQUNQTSxLQUFJO29GQUNKVCxXQUFVO21GQUxMTzs7Ozs7MEZBUVQsOERBQUNwQixtREFBS0E7Z0ZBQ0pxQixLQUFLO2dGQUNMSixRQUFRO2dGQUNSRCxPQUFPO2dGQUNQTSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQU9oQiw4REFBQ0k7Z0RBQUdiLFdBQVU7MERBQWtCOzs7Ozs7Ozs7Ozs7bUNBdkNjTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEcEU7R0EvRU1sQjtLQUFBQTtBQWlGTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FjdGl2aXRpZXNDb21wb25lbnRzL3Jldmlld3MudHN4P2M5ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgWE1hcmtJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBSZXZpZXdzOiBSZWFjdC5GQzx7IHNldE9wZW5SZXZpZXc6IGFueTsgcmV2aWV3c0RhdGE6IGFueVtdIH0+ID0gKHtcbiAgc2V0T3BlblJldmlldyxcbiAgcmV2aWV3c0RhdGEsXG59KSA9PiB7XG4gIGNvbnN0IFtzdGFyLCBzZXRTdGFyXSA9IHVzZVN0YXRlPGFueVtdPihBcnJheSg0KS5maWxsKFwiXCIpKTtcbiAgY29uc29sZS5sb2coXCJyZXZpZXdzRGF0YVwiLCByZXZpZXdzRGF0YS5sZW5ndGgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgbW9kYWwtY29udGFpbmVyIHotNTAgdy1mdWxsICBiZy1ncmVlbiB0b3AtMCByaWdodC0wIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWQ6dy1bNTk4cHhdIG1heC1zbTpwdC0wIGJnLXNpZGVCYXJDb2xvciBoLXNjcmVlbiBzaGFkb3cgZGFyazpiZy1ncmF5LTcwMCBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZSBweS00IHB4LThcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsyMHB4XVwiPlJldmlld3M8L2gxPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5SZXZpZXcoZmFsc2UpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFhNYXJrSWNvbiB3aWR0aD17MjR9IGhlaWdodD17MjR9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtOCBoLVs4NTBweF0gb3ZlcmZsb3cteS1zY3JvbGwgcGItMzZcIj5cbiAgICAgICAgICAgICAge3Jldmlld3NEYXRhICYmXG4gICAgICAgICAgICAgICAgcmV2aWV3c0RhdGEubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIHJldmlld3NEYXRhLm1hcCgoeCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2NvbnRlbnQgcHgtMiBweS0xIG15LTNcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2Fzc2V0cy9pbWFnZXMvY2xpZW50X3Rlc3QucG5nXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYnJhbmRfbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsxOHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXZpZ2RvciBCcmFuY2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjA5IEp1biAyMDIxIHwgOTozMCBBTTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzE0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJzIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGFyLm1hcCgoXzogYW55LCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvYXNzZXRzL2ljb25zL2ZpbGxlZFN0YXIuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2Fzc2V0cy9pY29ucy9lbXB0eVN0YXIuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1saWdodCBwYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJIGFtIGVuam95aW5nIHRoZXNlIOKAnGNvbXB1dGVy4oCdIHNwZWFrZXJzLiBUaGV5IGFyZSBzaW5jZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggbXkgcGhvbmUuIEkgaGFkIEJvc2Ugc3BlYWtlcnMgYW5kIGJvdWdodCB0aGVzZSBhcyBhXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudC4gSXQgdG9vayBtZSBhd2hpbGUgdG8gZ2V0IHRoZSBCbHVldG9vdGggdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmsgd2l0aCBteSBwaG9uZS5cbiAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzO1xuIl0sIm5hbWVzIjpbIlhNYXJrSWNvbiIsIkltYWdlIiwidXNlU3RhdGUiLCJSZXZpZXdzIiwic2V0T3BlblJldmlldyIsInJldmlld3NEYXRhIiwic3RhciIsInNldFN0YXIiLCJBcnJheSIsImZpbGwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJ4IiwiaSIsInNyYyIsImFsdCIsImg0IiwicCIsIl8iLCJoNSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/activitiesComponents/reviews.tsx\n"));

/***/ })

});