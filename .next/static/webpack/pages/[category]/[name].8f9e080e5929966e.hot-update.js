"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[category]/[name]",{

/***/ "./components/detailComponent/banner.tsx":
/*!***********************************************!*\
  !*** ./components/detailComponent/banner.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_24_outline_esm_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/EllipsisVerticalIcon */ \"./node_modules/@heroicons/react/24/outline/esm/EllipsisVerticalIcon.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Banner = ()=>{\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const slideImages = [\n        \"/assets/bg/te.jpg\",\n        \"/assets/images/promotions/01.png\"\n    ];\n    const handleSlideChange = (index)=>{\n        setActiveSlide(index);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const nextSlide = (activeSlide + 1) % slideImages.length;\n            setActiveSlide(nextSlide);\n        }, 3000); // Change slide every 2 seconds\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        activeSlide,\n        slideImages.length\n    ]);\n    const [onWishlist, setOnwishList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"banner\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"banner_img md:mt-5 relative flex flex-col items-center h-[228px] max-sm:h-[170px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"z-50 absolute right-4 top-3 flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"wishlist cursor-pointer rounded-full flex items-center justify-center\",\n                            onClick: ()=>setOnwishList(!onWishlist),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: onWishlist ? \"/assets/icons/wishlist_filled.svg\" : \"/assets/icons/wishlist.svg\",\n                                width: 20,\n                                height: 20,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"option ml-3 relative\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-[32px] h-[32px] bg-[#2E2E2E] cursor-pointer rounded-full flex items-center justify-center text-white\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_EllipsisVerticalIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    width: 20,\n                                    height: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-full h-[228px] overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"transition-transform duration-500 ease-in-out transform\",\n                        style: {\n                            transform: \"translateX(-\".concat(activeSlide * 980, \"px)\")\n                        },\n                        children: slideImages.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full max-sm:h-[146px] max-h-[228px] h-[228px] absolute\",\n                                style: {\n                                    left: \"\".concat(index * 980, \"px\")\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: image,\n                                    layout: \"fill\",\n                                    objectFit: \"contain\",\n                                    objectPosition: \"center\",\n                                    alt: \"slide-\".concat(index),\n                                    className: \"object-center md:rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"banner_nav flex items-center md:-m-10 -m-28 z-50\",\n                    children: slideImages.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleSlideChange(index),\n                            className: \"w-[10px] h-[10px] md:w-3 md:h-3 mx-1 rounded-full \".concat(activeSlide === index ? \"bg-green\" : \"bg-grey80\")\n                        }, index, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/detailComponent/banner.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Banner, \"+Hh+LNSBM+7sKP/iyDTQoI6EYMc=\");\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2RldGFpbENvbXBvbmVudC9iYW5uZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFFb0I7QUFFZ0I7QUFFbkUsTUFBTUssU0FBUzs7SUFDYixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFDL0MsTUFBTU0sY0FBYztRQUNsQjtRQUNBO0tBRUQ7SUFFRCxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekJILGVBQWVHO0lBQ2pCO0lBRUFQLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsV0FBV0MsWUFBWTtZQUMzQixNQUFNQyxZQUFZLENBQUNQLGNBQWMsS0FBS0UsWUFBWU0sTUFBTTtZQUN4RFAsZUFBZU07UUFDakIsR0FBRyxPQUFPLCtCQUErQjtRQUV6QyxPQUFPO1lBQ0xFLGNBQWNKO1FBQ2hCO0lBQ0YsR0FBRztRQUFDTDtRQUFhRSxZQUFZTSxNQUFNO0tBQUM7SUFDcEMsTUFBTSxDQUFDRSxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBQzdDLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQ0NDLFdBQVU7NEJBQ1ZDLFNBQVMsSUFBTUgsY0FBYyxDQUFDRDtzQ0FFOUIsNEVBQUNoQixtREFBS0E7Z0NBQ0pxQixLQUNFTCxhQUNJLHNDQUNBO2dDQUVOTSxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFJOzs7Ozs7Ozs7OztzQ0FJUiw4REFBQ047NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUNDQyxXQUFVOzBDQUdWLDRFQUFDZiw0RkFBb0JBO29DQUFDa0IsT0FBTztvQ0FBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkF3Qi9DLDhEQUFDTDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQ0NDLFdBQVU7d0JBQ1ZNLE9BQU87NEJBQ0xDLFdBQVcsZUFBaUMsT0FBbEJwQixjQUFjLEtBQUk7d0JBQzlDO2tDQUVDRSxZQUFZbUIsR0FBRyxDQUFDLENBQUNDLE9BQU9sQixzQkFDdkIsOERBQUNRO2dDQUVDQyxXQUFVO2dDQUNWTSxPQUFPO29DQUFFSSxNQUFNLEdBQWUsT0FBWm5CLFFBQVEsS0FBSTtnQ0FBSTswQ0FFbEMsNEVBQUNWLG1EQUFLQTtvQ0FDSnFCLEtBQUtPO29DQUNMRSxRQUFPO29DQUNQQyxXQUFVO29DQUNWQyxnQkFBZTtvQ0FDZlIsS0FBSyxTQUFlLE9BQU5kO29DQUNkUyxXQUFVOzs7Ozs7K0JBVlBUOzs7Ozs7Ozs7Ozs7Ozs7OEJBZ0JiLDhEQUFDUTtvQkFBSUMsV0FBVTs4QkFDWlgsWUFBWW1CLEdBQUcsQ0FBQyxDQUFDTSxHQUFHdkIsc0JBQ25CLDhEQUFDd0I7NEJBRUNkLFNBQVMsSUFBTVgsa0JBQWtCQzs0QkFDakNTLFdBQVcscURBRVYsT0FEQ2IsZ0JBQWdCSSxRQUFRLGFBQWE7MkJBSGxDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV25CO0dBL0dNTDtLQUFBQTtBQWlITiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RldGFpbENvbXBvbmVudC9iYW5uZXIudHN4P2QwN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEVsbGlwc2lzVmVydGljYWxJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVTbGlkZSwgc2V0QWN0aXZlU2xpZGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHNsaWRlSW1hZ2VzID0gW1xuICAgIFwiL2Fzc2V0cy9iZy90ZS5qcGdcIixcbiAgICBcIi9hc3NldHMvaW1hZ2VzL3Byb21vdGlvbnMvMDEucG5nXCIsXG4gICAgLy8gXCIvYXNzZXRzL2ltYWdlcy9kZXRhaWxzL21haW4ucG5nXCIsXG4gIF07XG5cbiAgY29uc3QgaGFuZGxlU2xpZGVDaGFuZ2UgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldEFjdGl2ZVNsaWRlKGluZGV4KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgbmV4dFNsaWRlID0gKGFjdGl2ZVNsaWRlICsgMSkgJSBzbGlkZUltYWdlcy5sZW5ndGg7XG4gICAgICBzZXRBY3RpdmVTbGlkZShuZXh0U2xpZGUpO1xuICAgIH0sIDMwMDApOyAvLyBDaGFuZ2Ugc2xpZGUgZXZlcnkgMiBzZWNvbmRzXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW2FjdGl2ZVNsaWRlLCBzbGlkZUltYWdlcy5sZW5ndGhdKTtcbiAgY29uc3QgW29uV2lzaGxpc3QsIHNldE9ud2lzaExpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lcl9pbWcgbWQ6bXQtNSByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoLVsyMjhweF0gbWF4LXNtOmgtWzE3MHB4XVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgYWJzb2x1dGUgcmlnaHQtNCB0b3AtMyBmbGV4XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lzaGxpc3QgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9ud2lzaExpc3QoIW9uV2lzaGxpc3QpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgIG9uV2lzaGxpc3RcbiAgICAgICAgICAgICAgICAgID8gXCIvYXNzZXRzL2ljb25zL3dpc2hsaXN0X2ZpbGxlZC5zdmdcIlxuICAgICAgICAgICAgICAgICAgOiBcIi9hc3NldHMvaWNvbnMvd2lzaGxpc3Quc3ZnXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24gbWwtMyByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVszMnB4XSBoLVszMnB4XSBiZy1bIzJFMkUyRV0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBzZXRDbGlja09wdGlvbighY2xpY2tPcHRpb24pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RWxsaXBzaXNWZXJ0aWNhbEljb24gd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiB7Y2xpY2tPcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zIGFic29sdXRlIHctWzE4OXB4XSByaWdodC0zIHRvcC0xMiBzaGFkb3cgc2hhZG93LWItMTAgei0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmctZ3JleTgwIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMyBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LVtyZWRdIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2xpY2tPcHRpb24oIWNsaWNrT3B0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0IEpvYiBQb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMyBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LVtyZWRdIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2xpY2tPcHRpb24oIWNsaWNrT3B0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgSm9iIFBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKX0gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtWzIyOHB4XSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7YWN0aXZlU2xpZGUgKiA5ODB9cHgpYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NsaWRlSW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtc206aC1bMTQ2cHhdIG1heC1oLVsyMjhweF0gaC1bMjI4cHhdIGFic29sdXRlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBgJHtpbmRleCAqIDk4MH1weGAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBhbHQ9e2BzbGlkZS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY2VudGVyIG1kOnJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lcl9uYXYgZmxleCBpdGVtcy1jZW50ZXIgbWQ6LW0tMTAgLW0tMjggei01MFwiPlxuICAgICAgICAgIHtzbGlkZUltYWdlcy5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNsaWRlQ2hhbmdlKGluZGV4KX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1bMTBweF0gaC1bMTBweF0gbWQ6dy0zIG1kOmgtMyBteC0xIHJvdW5kZWQtZnVsbCAke1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlID09PSBpbmRleCA/IFwiYmctZ3JlZW5cIiA6IFwiYmctZ3JleTgwXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRWxsaXBzaXNWZXJ0aWNhbEljb24iLCJCYW5uZXIiLCJhY3RpdmVTbGlkZSIsInNldEFjdGl2ZVNsaWRlIiwic2xpZGVJbWFnZXMiLCJoYW5kbGVTbGlkZUNoYW5nZSIsImluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5leHRTbGlkZSIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJvbldpc2hsaXN0Iiwic2V0T253aXNoTGlzdCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInN0eWxlIiwidHJhbnNmb3JtIiwibWFwIiwiaW1hZ2UiLCJsZWZ0IiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJfIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/detailComponent/banner.tsx\n"));

/***/ })

});