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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline_esm_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/EllipsisVerticalIcon */ \"./node_modules/@heroicons/react/24/outline/esm/EllipsisVerticalIcon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews */ \"./components/activitiesComponents/reviews.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CommunityTabData = (param)=>{\n    let { data } = param;\n    _s();\n    const [star, setStar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array(4).fill(\"\"));\n    const [openReview, setOpenReview] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [openReviewIndex, setOpenReviewIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const communitySampleData = [\n        {\n            name: \"Sheri Warner\",\n            content: \"You've heard this before — the rate of technological change is accelerating. It's unpredictable and unprecedented. As the World Economic Forum acknowledged in its Future of Jobs report, we’re entering a fourth industrial revolution:\",\n            likes: \"78\",\n            reviews: Array(20).fill(\"\")\n        },\n        {\n            name: \"Dynamite Warner\",\n            content: \"You've heard this before — the rate of technological change is accelerating. It's unpredictable and unprecedented. As the World Economic Forum acknowledged in its Future of Jobs report, we’re entering a fourth industrial revolution:\",\n            likes: \"78\",\n            reviews: Array(1).fill(\"\")\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-4\",\n        children: communitySampleData.map((x, i)=>{\n            var _x_reviews;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card_content px-2 py-1 my-3 shadow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"title flex items-center justify-between mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                src: \"/assets/bg/te.jpg\",\n                                                width: 40,\n                                                height: 40,\n                                                alt: \"brand_logo \",\n                                                className: \"mr-2 max-sm:hidden rounded-full max-h-[40px] max-w-[40px]\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                        className: \"font-bold text-[18px]\",\n                                                        children: x.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"stars flex items-center\",\n                                                        children: [\n                                                            star.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                                    src: \"/assets/icons/filledStar.svg\",\n                                                                    height: 16,\n                                                                    width: 16,\n                                                                    alt: \"icon\",\n                                                                    className: \"\"\n                                                                }, i, false, {\n                                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                                    lineNumber: 49,\n                                                                    columnNumber: 23\n                                                                }, undefined)),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                                src: \"/assets/icons/emptyStar.svg\",\n                                                                height: 16,\n                                                                width: 16,\n                                                                alt: \"icon\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                                lineNumber: 58,\n                                                                columnNumber: 21\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"3d\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"overflow-ellipsis\",\n                                children: x.content\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between my-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        src: \"/assets/icons/like.svg\",\n                                                        width: 24,\n                                                        height: 24,\n                                                        alt: \"like\",\n                                                        className: \"mr-1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-[16px]\",\n                                                        children: \"34\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center ml-4 cursor-pointer\",\n                                                onClick: ()=>{\n                                                    setOpenReview(true), setOpenReviewIndex(openReviewIndex === i ? null : i);\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                        src: \"/assets/icons/comment.svg\",\n                                                        width: 24,\n                                                        height: 24,\n                                                        alt: \"comment\",\n                                                        className: \"mr-1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-[16px]\",\n                                                        children: (_x_reviews = x.reviews) === null || _x_reviews === void 0 ? void 0 : _x_reviews.length\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"right-3 top-3 cursor-pointer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            width: 20,\n                                            height: 20\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, i, true, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    openReview && openReviewIndex === i && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reviews__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        setOpenReview: setOpenReview,\n                        reviewsData: x.reviews\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/activitiesComponents/communityTab.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CommunityTabData, \"ntAKTOWkrM04kAgWiI1cMB8Ft6w=\");\n_c = CommunityTabData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommunityTabData);\nvar _c;\n$RefreshReg$(_c, \"CommunityTabData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FjdGl2aXRpZXNDb21wb25lbnRzL2NvbW11bml0eVRhYi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFNTTtBQUNKO0FBQ0Q7QUFFaEMsTUFBTUksbUJBQThDO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUMzRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQVFNLE1BQU0sR0FBR0MsSUFBSSxDQUFDO0lBQ3RELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNVLGlCQUFpQkMsbUJBQW1CLEdBQUdYLCtDQUFRQSxDQUFnQjtJQUN0RSxNQUFNWSxzQkFBc0I7UUFDMUI7WUFDRUMsTUFBTTtZQUNOQyxTQUNFO1lBQ0ZDLE9BQU87WUFDUEMsU0FBU1YsTUFBTSxJQUFJQyxJQUFJLENBQUM7UUFDMUI7UUFDQTtZQUNFTSxNQUFNO1lBQ05DLFNBQ0U7WUFDRkMsT0FBTztZQUNQQyxTQUFTVixNQUFNLEdBQUdDLElBQUksQ0FBQztRQUN6QjtLQUNEO0lBQ0QscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7a0JBQ1pOLG9CQUFvQk8sR0FBRyxDQUFDLENBQUNDLEdBQUdDO2dCQWtFV0Q7aUNBakV0Qzs7a0NBQ0UsOERBQUNIO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNwQixtREFBS0E7Z0RBQ0p3QixLQUFLO2dEQUNMQyxPQUFPO2dEQUNQQyxRQUFRO2dEQUNSQyxLQUFJO2dEQUNKUCxXQUFVOzs7Ozs7MERBRVosOERBQUNEOztrRUFDQyw4REFBQ1M7d0RBQUdSLFdBQVU7a0VBQXlCRSxFQUFFUCxJQUFJOzs7Ozs7a0VBQzdDLDhEQUFDSTt3REFBSUMsV0FBVTs7NERBQ1pkLEtBQUtlLEdBQUcsQ0FBQyxDQUFDUSxHQUFRTixrQkFDakIsOERBQUN2QixtREFBS0E7b0VBRUp3QixLQUFLO29FQUNMRSxRQUFRO29FQUNSRCxPQUFPO29FQUNQRSxLQUFJO29FQUNKUCxXQUFVO21FQUxMRzs7Ozs7MEVBUVQsOERBQUN2QixtREFBS0E7Z0VBQ0p3QixLQUFLO2dFQUNMRSxRQUFRO2dFQUNSRCxPQUFPO2dFQUNQRSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBTVosOERBQUNHO2tEQUFFOzs7Ozs7Ozs7Ozs7MENBR0wsOERBQUNDO2dDQUFHWCxXQUFVOzBDQUFxQkUsRUFBRU4sT0FBTzs7Ozs7OzBDQUU1Qyw4REFBQ0c7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ3BCLG1EQUFLQTt3REFDSndCLEtBQUs7d0RBQ0xDLE9BQU87d0RBQ1BDLFFBQVE7d0RBQ1JDLEtBQUk7d0RBQ0pQLFdBQVU7Ozs7OztrRUFFWiw4REFBQ1U7d0RBQUVWLFdBQVU7a0VBQWM7Ozs7Ozs7Ozs7OzswREFFN0IsOERBQUNEO2dEQUNDQyxXQUFVO2dEQUNWWSxTQUFTO29EQUNQckIsY0FBYyxPQUNaRSxtQkFBbUJELG9CQUFvQlcsSUFBSSxPQUFPQTtnREFDdEQ7O2tFQUVBLDhEQUFDdkIsbURBQUtBO3dEQUNKd0IsS0FBSzt3REFDTEMsT0FBTzt3REFDUEMsUUFBUTt3REFDUkMsS0FBSTt3REFDSlAsV0FBVTs7Ozs7O2tFQUVaLDhEQUFDVTt3REFBRVYsV0FBVTttRUFBZUUsYUFBQUEsRUFBRUosT0FBTyxjQUFUSSxpQ0FBQUEsV0FBV1csTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUdqRCw4REFBQ2Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNuQiw0RkFBb0JBOzRDQUFDd0IsT0FBTzs0Q0FBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQXBFVUg7Ozs7O29CQXlFeERiLGNBQWNFLG9CQUFvQlcsbUJBQ2pDLDhEQUFDcEIsZ0RBQU9BO3dCQUFDUSxlQUFlQTt3QkFBZXVCLGFBQWFaLEVBQUVKLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FBTXpFO0dBeEdNZDtLQUFBQTtBQTBHTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWN0aXZpdGllc0NvbXBvbmVudHMvY29tbXVuaXR5VGFiLnRzeD9lY2NkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJJY29uLFxuICBDbG9ja0ljb24sXG4gIEVsbGlwc2lzVmVydGljYWxJY29uLFxuICBNYXBQaW5JY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJldmlld3MgZnJvbSBcIi4vcmV2aWV3c1wiO1xuXG5jb25zdCBDb21tdW5pdHlUYWJEYXRhOiBSZWFjdC5GQzx7IGRhdGE6IGFueVtdIH0+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtzdGFyLCBzZXRTdGFyXSA9IHVzZVN0YXRlPGFueVtdPihBcnJheSg0KS5maWxsKFwiXCIpKTtcbiAgY29uc3QgW29wZW5SZXZpZXcsIHNldE9wZW5SZXZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3BlblJldmlld0luZGV4LCBzZXRPcGVuUmV2aWV3SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGNvbW11bml0eVNhbXBsZURhdGEgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJTaGVyaSBXYXJuZXJcIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwiWW91J3ZlIGhlYXJkIHRoaXMgYmVmb3JlIOKAlCB0aGUgcmF0ZSBvZiB0ZWNobm9sb2dpY2FsIGNoYW5nZSBpcyBhY2NlbGVyYXRpbmcuIEl0J3MgdW5wcmVkaWN0YWJsZSBhbmQgdW5wcmVjZWRlbnRlZC4gQXMgdGhlIFdvcmxkIEVjb25vbWljIEZvcnVtIGFja25vd2xlZGdlZCBpbiBpdHMgRnV0dXJlIG9mIEpvYnMgcmVwb3J0LCB3ZeKAmXJlIGVudGVyaW5nIGEgZm91cnRoIGluZHVzdHJpYWwgcmV2b2x1dGlvbjpcIixcbiAgICAgIGxpa2VzOiBcIjc4XCIsXG4gICAgICByZXZpZXdzOiBBcnJheSgyMCkuZmlsbChcIlwiKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRHluYW1pdGUgV2FybmVyXCIsXG4gICAgICBjb250ZW50OlxuICAgICAgICBcIllvdSd2ZSBoZWFyZCB0aGlzIGJlZm9yZSDigJQgdGhlIHJhdGUgb2YgdGVjaG5vbG9naWNhbCBjaGFuZ2UgaXMgYWNjZWxlcmF0aW5nLiBJdCdzIHVucHJlZGljdGFibGUgYW5kIHVucHJlY2VkZW50ZWQuIEFzIHRoZSBXb3JsZCBFY29ub21pYyBGb3J1bSBhY2tub3dsZWRnZWQgaW4gaXRzIEZ1dHVyZSBvZiBKb2JzIHJlcG9ydCwgd2XigJlyZSBlbnRlcmluZyBhIGZvdXJ0aCBpbmR1c3RyaWFsIHJldm9sdXRpb246XCIsXG4gICAgICBsaWtlczogXCI3OFwiLFxuICAgICAgcmV2aWV3czogQXJyYXkoMSkuZmlsbChcIlwiKSxcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNFwiPlxuICAgICAge2NvbW11bml0eVNhbXBsZURhdGEubWFwKCh4LCBpKSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX2NvbnRlbnQgcHgtMiBweS0xIG15LTMgc2hhZG93XCIga2V5PXtpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtcIi9hc3NldHMvYmcvdGUuanBnXCJ9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiYnJhbmRfbG9nbyBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBtYXgtc206aGlkZGVuIHJvdW5kZWQtZnVsbCBtYXgtaC1bNDBweF0gbWF4LXctWzQwcHhdXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtWzE4cHhdXCI+e3gubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFycyBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7c3Rhci5tYXAoKF86IGFueSwgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2Fzc2V0cy9pY29ucy9maWxsZWRTdGFyLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9hc3NldHMvaWNvbnMvZW1wdHlTdGFyLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTZ9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImljb25cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxwPjNkPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJvdmVyZmxvdy1lbGxpcHNpc1wiPnt4LmNvbnRlbnR9PC9oNT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBteS0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9hc3NldHMvaWNvbnMvbGlrZS5zdmdcIn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTZweF1cIj4zNDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtbC00IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0T3BlblJldmlldyh0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuUmV2aWV3SW5kZXgob3BlblJldmlld0luZGV4ID09PSBpID8gbnVsbCA6IGkpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9hc3NldHMvaWNvbnMvY29tbWVudC5zdmdcIn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjb21tZW50XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTZweF1cIj57eC5yZXZpZXdzPy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC0zIHRvcC0zIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgPEVsbGlwc2lzVmVydGljYWxJY29uIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtvcGVuUmV2aWV3ICYmIG9wZW5SZXZpZXdJbmRleCA9PT0gaSAmJiAoXG4gICAgICAgICAgICA8UmV2aWV3cyBzZXRPcGVuUmV2aWV3PXtzZXRPcGVuUmV2aWV3fSByZXZpZXdzRGF0YT17eC5yZXZpZXdzfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tdW5pdHlUYWJEYXRhO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiRWxsaXBzaXNWZXJ0aWNhbEljb24iLCJ1c2VTdGF0ZSIsIlJldmlld3MiLCJDb21tdW5pdHlUYWJEYXRhIiwiZGF0YSIsInN0YXIiLCJzZXRTdGFyIiwiQXJyYXkiLCJmaWxsIiwib3BlblJldmlldyIsInNldE9wZW5SZXZpZXciLCJvcGVuUmV2aWV3SW5kZXgiLCJzZXRPcGVuUmV2aWV3SW5kZXgiLCJjb21tdW5pdHlTYW1wbGVEYXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaWtlcyIsInJldmlld3MiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ4IiwiaSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDQiLCJfIiwicCIsImg1Iiwib25DbGljayIsImxlbmd0aCIsInJldmlld3NEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/activitiesComponents/communityTab.tsx\n"));

/***/ })

});