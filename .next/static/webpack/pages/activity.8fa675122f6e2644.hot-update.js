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

/***/ "./components/activitiesComponents/communityTab.tsx":
/*!**********************************************************!*\
  !*** ./components/activitiesComponents/communityTab.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline_esm_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/EllipsisVerticalIcon */ \"./node_modules/@heroicons/react/24/outline/esm/EllipsisVerticalIcon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews */ \"./components/activitiesComponents/reviews.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CommunityTabData = (param)=>{\n    let { data } = param;\n    _s();\n    const [star, setStar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array(4).fill(\"\"));\n    const [openReview, setOpenReview] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [openReviewIndex, setOpenReviewIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const communitySampleData = [\n        {\n            name: \"Sheri Warner\",\n            content: \"You've heard this before — the rate of technological change is accelerating. It's unpredictable and unprecedented. As the World Economic Forum acknowledged in its Future of Jobs report, we’re entering a fourth industrial revolution:\",\n            likes: \"78\",\n            reviews: Array(20).fill(\"\")\n        },\n        {\n            name: \"Dynamite Warner\",\n            content: \"You've heard this before — the rate of technological change is accelerating. It's unpredictable and unprecedented. As the World Economic Forum acknowledged in its Future of Jobs report, we’re entering a fourth industrial revolution:\",\n            likes: \"78\",\n            reviews: Array(1).fill(\"\")\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-4\",\n        children: communitySampleData.map((x, i)=>{\n            var _x_reviews;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card_content px-2 py-1 my-3 shadow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"title flex items-center justify-between mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                src: \"/assets/bg/te.jpg\",\n                                                width: 40,\n                                                height: 40,\n                                                alt: \"brand_logo \",\n                                                className: \"mr-2 max-sm:hidden rounded-full max-h-[40px] max-w-[40px]\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                        className: \"font-bold text-[18px]\",\n                                                        children: x.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"stars flex items-center\",\n                                                        children: [\n                                                            star.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                                    src: \"/assets/icons/filledStar.svg\",\n                                                                    height: 16,\n                                                                    width: 16,\n                                                                    alt: \"icon\",\n                                                                    className: \"\"\n                                                                }, i, false, {\n                                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                                    lineNumber: 49,\n                                                                    columnNumber: 23\n                                                                }, undefined)),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                                src: \"/assets/icons/emptyStar.svg\",\n                                                                height: 16,\n                                                                width: 16,\n                                                                alt: \"icon\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                                lineNumber: 58,\n                                                                columnNumber: 21\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"3d\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"no-wrap\",\n                                    children: x.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between my-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        src: \"/assets/icons/like.svg\",\n                                                        width: 24,\n                                                        height: 24,\n                                                        alt: \"like\",\n                                                        className: \"mr-1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-[16px]\",\n                                                        children: \"34\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center ml-4 cursor-pointer\",\n                                                onClick: ()=>{\n                                                    setOpenReview(true), setOpenReviewIndex(openReviewIndex === i ? null : i);\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        src: \"/assets/icons/comment.svg\",\n                                                        width: 24,\n                                                        height: 24,\n                                                        alt: \"comment\",\n                                                        className: \"mr-1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-[16px]\",\n                                                        children: (_x_reviews = x.reviews) === null || _x_reviews === void 0 ? void 0 : _x_reviews.length\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 101,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"right-3 top-3 cursor-pointer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            width: 20,\n                                            height: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, i, true, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    openReview && openReviewIndex === i && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reviews__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        setOpenReview: setOpenReview,\n                        reviewsData: x.reviews\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CommunityTabData, \"ntAKTOWkrM04kAgWiI1cMB8Ft6w=\");\n_c = CommunityTabData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommunityTabData);\nvar _c;\n$RefreshReg$(_c, \"CommunityTabData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FjdGl2aXRpZXNDb21wb25lbnRzL2NvbW11bml0eVRhYi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFNTTtBQUNKO0FBQ0Q7QUFFaEMsTUFBTUksbUJBQThDO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUMzRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQVFNLE1BQU0sR0FBR0MsSUFBSSxDQUFDO0lBQ3RELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNVLGlCQUFpQkMsbUJBQW1CLEdBQUdYLCtDQUFRQSxDQUFnQjtJQUN0RSxNQUFNWSxzQkFBc0I7UUFDMUI7WUFDRUMsTUFBTTtZQUNOQyxTQUNFO1lBQ0ZDLE9BQU87WUFDUEMsU0FBU1YsTUFBTSxJQUFJQyxJQUFJLENBQUM7UUFDMUI7UUFDQTtZQUNFTSxNQUFNO1lBQ05DLFNBQ0U7WUFDRkMsT0FBTztZQUNQQyxTQUFTVixNQUFNLEdBQUdDLElBQUksQ0FBQztRQUN6QjtLQUNEO0lBQ0QscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7a0JBQ1pOLG9CQUFvQk8sR0FBRyxDQUFDLENBQUNDLEdBQUdDO2dCQW9FV0Q7aUNBbkV0Qzs7a0NBQ0UsOERBQUNIO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNwQixtREFBS0E7Z0RBQ0p3QixLQUFLO2dEQUNMQyxPQUFPO2dEQUNQQyxRQUFRO2dEQUNSQyxLQUFJO2dEQUNKUCxXQUFVOzs7Ozs7MERBRVosOERBQUNEOztrRUFDQyw4REFBQ1M7d0RBQUdSLFdBQVU7a0VBQXlCRSxFQUFFUCxJQUFJOzs7Ozs7a0VBQzdDLDhEQUFDSTt3REFBSUMsV0FBVTs7NERBQ1pkLEtBQUtlLEdBQUcsQ0FBQyxDQUFDUSxHQUFRTixrQkFDakIsOERBQUN2QixtREFBS0E7b0VBRUp3QixLQUFLO29FQUNMRSxRQUFRO29FQUNSRCxPQUFPO29FQUNQRSxLQUFJO29FQUNKUCxXQUFVO21FQUxMRzs7Ozs7MEVBUVQsOERBQUN2QixtREFBS0E7Z0VBQ0p3QixLQUFLO2dFQUNMRSxRQUFRO2dFQUNSRCxPQUFPO2dFQUNQRSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBTVosOERBQUNHO2tEQUFFOzs7Ozs7Ozs7Ozs7MENBRUwsOERBQUNYO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDVztvQ0FBR1gsV0FBVTs4Q0FBV0UsRUFBRU4sT0FBTzs7Ozs7Ozs7Ozs7MENBSXBDLDhEQUFDRztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDcEIsbURBQUtBO3dEQUNKd0IsS0FBSzt3REFDTEMsT0FBTzt3REFDUEMsUUFBUTt3REFDUkMsS0FBSTt3REFDSlAsV0FBVTs7Ozs7O2tFQUVaLDhEQUFDVTt3REFBRVYsV0FBVTtrRUFBYzs7Ozs7Ozs7Ozs7OzBEQUU3Qiw4REFBQ0Q7Z0RBQ0NDLFdBQVU7Z0RBQ1ZZLFNBQVM7b0RBQ1ByQixjQUFjLE9BQ1pFLG1CQUFtQkQsb0JBQW9CVyxJQUFJLE9BQU9BO2dEQUN0RDs7a0VBRUEsOERBQUN2QixtREFBS0E7d0RBQ0p3QixLQUFLO3dEQUNMQyxPQUFPO3dEQUNQQyxRQUFRO3dEQUNSQyxLQUFJO3dEQUNKUCxXQUFVOzs7Ozs7a0VBRVosOERBQUNVO3dEQUFFVixXQUFVO21FQUFlRSxhQUFBQSxFQUFFSixPQUFPLGNBQVRJLGlDQUFBQSxXQUFXVyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBR2pELDhEQUFDZDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ25CLDRGQUFvQkE7NENBQUN3QixPQUFPOzRDQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBdEVVSDs7Ozs7b0JBMkV4RGIsY0FBY0Usb0JBQW9CVyxtQkFDakMsOERBQUNwQixnREFBT0E7d0JBQUNRLGVBQWVBO3dCQUFldUIsYUFBYVosRUFBRUosT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUFNekU7R0ExR01kO0tBQUFBO0FBNEdOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hY3Rpdml0aWVzQ29tcG9uZW50cy9jb21tdW5pdHlUYWIudHN4P2VjY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge1xuICBDYWxlbmRhckljb24sXG4gIENsb2NrSWNvbixcbiAgRWxsaXBzaXNWZXJ0aWNhbEljb24sXG4gIE1hcFBpbkljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmV2aWV3cyBmcm9tIFwiLi9yZXZpZXdzXCI7XG5cbmNvbnN0IENvbW11bml0eVRhYkRhdGE6IFJlYWN0LkZDPHsgZGF0YTogYW55W10gfT4gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgW3N0YXIsIHNldFN0YXJdID0gdXNlU3RhdGU8YW55W10+KEFycmF5KDQpLmZpbGwoXCJcIikpO1xuICBjb25zdCBbb3BlblJldmlldywgc2V0T3BlblJldmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuUmV2aWV3SW5kZXgsIHNldE9wZW5SZXZpZXdJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgY29tbXVuaXR5U2FtcGxlRGF0YSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlNoZXJpIFdhcm5lclwiLFxuICAgICAgY29udGVudDpcbiAgICAgICAgXCJZb3UndmUgaGVhcmQgdGhpcyBiZWZvcmUg4oCUIHRoZSByYXRlIG9mIHRlY2hub2xvZ2ljYWwgY2hhbmdlIGlzIGFjY2VsZXJhdGluZy4gSXQncyB1bnByZWRpY3RhYmxlIGFuZCB1bnByZWNlZGVudGVkLiBBcyB0aGUgV29ybGQgRWNvbm9taWMgRm9ydW0gYWNrbm93bGVkZ2VkIGluIGl0cyBGdXR1cmUgb2YgSm9icyByZXBvcnQsIHdl4oCZcmUgZW50ZXJpbmcgYSBmb3VydGggaW5kdXN0cmlhbCByZXZvbHV0aW9uOlwiLFxuICAgICAgbGlrZXM6IFwiNzhcIixcbiAgICAgIHJldmlld3M6IEFycmF5KDIwKS5maWxsKFwiXCIpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJEeW5hbWl0ZSBXYXJuZXJcIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiWW91J3ZlIGhlYXJkIHRoaXMgYmVmb3JlIOKAlCB0aGUgcmF0ZSBvZiB0ZWNobm9sb2dpY2FsIGNoYW5nZSBpcyBhY2NlbGVyYXRpbmcuIEl0J3MgdW5wcmVkaWN0YWJsZSBhbmQgdW5wcmVjZWRlbnRlZC4gQXMgdGhlIFdvcmxkIEVjb25vbWljIEZvcnVtIGFja25vd2xlZGdlZCBpbiBpdHMgRnV0dXJlIG9mIEpvYnMgcmVwb3J0LCB3ZeKAmXJlIGVudGVyaW5nIGEgZm91cnRoIGluZHVzdHJpYWwgcmV2b2x1dGlvbjpcIixcbiAgICAgIGxpa2VzOiBcIjc4XCIsXG4gICAgICByZXZpZXdzOiBBcnJheSgxKS5maWxsKFwiXCIpLFxuICAgIH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteS00XCI+XG4gICAgICB7Y29tbXVuaXR5U2FtcGxlRGF0YS5tYXAoKHgsIGkpID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfY29udGVudCBweC0yIHB5LTEgbXktMyBzaGFkb3dcIiBrZXk9e2l9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e1wiL2Fzc2V0cy9iZy90ZS5qcGdcIn1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJicmFuZF9sb2dvIFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yIG1heC1zbTpoaWRkZW4gcm91bmRlZC1mdWxsIG1heC1oLVs0MHB4XSBtYXgtdy1bNDBweF1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bMThweF1cIj57eC5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJzIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdGFyLm1hcCgoXzogYW55LCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvYXNzZXRzL2ljb25zL2ZpbGxlZFN0YXIuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2Fzc2V0cy9pY29ucy9lbXB0eVN0YXIuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHA+M2Q8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJuby13cmFwXCI+e3guY29udGVudH08L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG15LTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2Fzc2V0cy9pY29ucy9saWtlLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxpa2VcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0xXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XVwiPjM0PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1sLTQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRPcGVuUmV2aWV3KHRydWUpLFxuICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW5SZXZpZXdJbmRleChvcGVuUmV2aWV3SW5kZXggPT09IGkgPyBudWxsIDogaSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2Fzc2V0cy9pY29ucy9jb21tZW50LnN2Z1wifVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0xXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XVwiPnt4LnJldmlld3M/Lmxlbmd0aH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LTMgdG9wLTMgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8RWxsaXBzaXNWZXJ0aWNhbEljb24gd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge29wZW5SZXZpZXcgJiYgb3BlblJldmlld0luZGV4ID09PSBpICYmIChcbiAgICAgICAgICAgIDxSZXZpZXdzIHNldE9wZW5SZXZpZXc9e3NldE9wZW5SZXZpZXd9IHJldmlld3NEYXRhPXt4LnJldmlld3N9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW11bml0eVRhYkRhdGE7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJFbGxpcHNpc1ZlcnRpY2FsSWNvbiIsInVzZVN0YXRlIiwiUmV2aWV3cyIsIkNvbW11bml0eVRhYkRhdGEiLCJkYXRhIiwic3RhciIsInNldFN0YXIiLCJBcnJheSIsImZpbGwiLCJvcGVuUmV2aWV3Iiwic2V0T3BlblJldmlldyIsIm9wZW5SZXZpZXdJbmRleCIsInNldE9wZW5SZXZpZXdJbmRleCIsImNvbW11bml0eVNhbXBsZURhdGEiLCJuYW1lIiwiY29udGVudCIsImxpa2VzIiwicmV2aWV3cyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIngiLCJpIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoNCIsIl8iLCJwIiwiaDUiLCJvbkNsaWNrIiwibGVuZ3RoIiwicmV2aWV3c0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/activitiesComponents/communityTab.tsx\n"));

/***/ })

});