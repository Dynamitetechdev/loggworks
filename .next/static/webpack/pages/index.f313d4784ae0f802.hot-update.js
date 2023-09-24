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

/***/ "./components/general/sideBar.tsx":
/*!****************************************!*\
  !*** ./components/general/sideBar.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/CalendarIcon */ \"./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/HomeIcon */ \"./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/ChatBubbleOvalLeftEllipsisIcon */ \"./node_modules/@heroicons/react/24/outline/esm/ChatBubbleOvalLeftEllipsisIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/ListBulletIcon */ \"./node_modules/@heroicons/react/24/outline/esm/ListBulletIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_UserIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/UserIcon */ \"./node_modules/@heroicons/react/24/outline/esm/UserIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_UserCircleIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/UserCircleIcon */ \"./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst SideBar = ()=>{\n    _s();\n    const allIcons = {\n        CalendarIcon: _heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        HomeIcon: _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        ChatBubbleOvalLeftEllipsisIcon: _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        ListBulletIcon: _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        UserIcon: _heroicons_react_24_outline_esm_UserIcon__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        UserCircleIcon: _heroicons_react_24_outline_esm_UserCircleIcon__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    };\n    const sideNav = [\n        {\n            id: 1,\n            title: \"home\",\n            icon: \"HomeIcon\",\n            route: \"/\"\n        },\n        {\n            id: 2,\n            title: \"bookings\",\n            icon: \"CalendarIcon\",\n            route: \"/bookings\"\n        },\n        {\n            id: 3,\n            title: \"messages\",\n            icon: \"ChatBubbleOvalLeftEllipsisIcon\",\n            route: \"/message\"\n        },\n        {\n            id: 4,\n            title: \"activities\",\n            icon: \"ListBulletIcon\",\n            route: \"/activity\"\n        },\n        {\n            id: 4,\n            title: \"account\",\n            icon: \"UserCircleIcon\",\n            route: \"/account\"\n        }\n    ];\n    const mobileNav = [\n        {\n            id: 1,\n            title: \"home\",\n            icon: \"HomeIcon\",\n            route: \"/\"\n        },\n        {\n            id: 1,\n            title: \"booking\",\n            icon: \"CalendarIcon\",\n            route: \"/bookings\"\n        },\n        {\n            id: 3,\n            title: \"messages\",\n            icon: \"ChatBubbleOvalLeftEllipsisIcon\",\n            route: \"/message\"\n        },\n        {\n            id: 4,\n            title: \"activities\",\n            icon: \"ListBulletIcon\",\n            route: \"/activity\"\n        },\n        {\n            id: 4,\n            title: \"Account\",\n            icon: \"UserIcon\",\n            route: \"/account\"\n        }\n    ];\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleActive = (index)=>{\n        setActiveIndex(index);\n        setActiveIndexInLocalStorage(index);\n    };\n    const [openAdminNav, setOpenAdminNav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const setActiveIndexInLocalStorage = (index)=>{\n        if (index !== null) {\n            localStorage.setItem(\"activeIndex\", index.toString());\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const storedIndex = localStorage.getItem(\"activeIndex\");\n        if (storedIndex !== null) {\n            const parsedIndex = parseInt(storedIndex, 10);\n            if (!isNaN(parsedIndex)) {\n                setActiveIndex(parsedIndex);\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative md:col-span-2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidebar max-md:fixed max-md:z-50 w-full max-md:bottom-0 md:fixed  bg-sideBarColor md:h-screen max-md:px-3  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-md:hidden logo pl-7 pt-7\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/assets/images/Logo-green.png\",\n                                width: 125,\n                                height: 20,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mobile_nav md:hidden side_nav md:mt-14 md:w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"max-md:flex max-sm:justify-between max-md:justify-center  max-sm:mx-0\",\n                            children: mobileNav.map((nav, index)=>{\n                                const Icon = allIcons[nav.icon];\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: nav.route,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex max-md:flex-col items-center md:my-4 py-2  cursor-pointer md:pl-7  \".concat(activeIndex === index && \"md:bg-lightWhite text-green\"),\n                                        onClick: ()=>handleActive(index),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon w-[20px] h-[20px] max-md:ml-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {}, void 0, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                    lineNumber: 144,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                lineNumber: 143,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"capitalize ml-2 max-md:text-[14px]\",\n                                                children: nav.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                lineNumber: 146,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, \"nav--\".concat(index), false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 19\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"side_nav md:mt-14 md:w-2/12  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"max-md:hidden max-md:flex max-sm:justify-between max-md:justify-center  max-sm:mx-0 pr-5\",\n                            children: sideNav.map((nav, index)=>{\n                                const Icon = allIcons[nav.icon];\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: nav.route,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex max-md:flex-col max-md:mx-4 items-center  md:my-4 py-2  cursor-pointer md:pl-7 font-[500]  \".concat(activeIndex === index && \"bg-lightWhite text-green\"),\n                                        onClick: ()=>handleActive(index),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon w-[24px] h-[24px] max-md:ml-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {}, void 0, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                    lineNumber: 169,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                lineNumber: 168,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"capitalize ml-2 max-md:text-[14px]\",\n                                                children: nav.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                lineNumber: 171,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                        lineNumber: 162,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, \"nav--\".concat(index), false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                    lineNumber: 161,\n                                    columnNumber: 19\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                            lineNumber: 157,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n            lineNumber: 118,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(SideBar, \"Pjz88WDhX9BgSyydg9s9Ih6z660=\");\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yiw0RUFBQ1M7Ozs7Ozs7Ozs7MERBRUgsOERBQUNHO2dEQUFFWixXQUFVOzBEQUNWUSxJQUFJNUIsS0FBSzs7Ozs7Ozs7Ozs7O21DQVhZLFFBQWMsT0FBTk87Ozs7OzRCQWdCeEM7Ozs7Ozs7Ozs7O2tDQUlKLDhEQUFDWTt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ007NEJBQUdOLFdBQVU7c0NBQ1h0QixRQUFRNkIsR0FBRyxDQUFDLENBQUNDLEtBQUtyQjtnQ0FDakIsTUFBTXNCLE9BQU9oQyxRQUFRLENBQUMrQixJQUFJM0IsSUFBSSxDQUFDO2dDQUMvQixxQkFDRSw4REFBQ1Isa0RBQUlBO29DQUFDNEIsTUFBTU8sSUFBSTFCLEtBQUs7OENBQ25CLDRFQUFDNEI7d0NBQ0NWLFdBQVcsbUdBRVYsT0FEQ2hCLGdCQUFnQkcsU0FBUzt3Q0FFM0J3QixTQUFTLElBQU16QixhQUFhQzs7MERBRTVCLDhEQUFDWTtnREFBSUMsV0FBVTswREFDYiw0RUFBQ1M7Ozs7Ozs7Ozs7MERBRUgsOERBQUNHO2dEQUFFWixXQUFVOzBEQUNWUSxJQUFJNUIsS0FBSzs7Ozs7Ozs7Ozs7O21DQVhZLFFBQWMsT0FBTk87Ozs7OzRCQWdCeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Q7R0E1S01YO0tBQUFBO0FBOEtOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2VuZXJhbC9zaWRlQmFyLnRzeD8xNTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJJY29uLFxuICBIb21lSWNvbixcbiAgQ2hhdEJ1YmJsZU92YWxMZWZ0RWxsaXBzaXNJY29uLFxuICBMaXN0QnVsbGV0SWNvbixcbiAgVXNlckljb24sXG4gIFVzZXJDaXJjbGVJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTaWRlQmFyID0gKCkgPT4ge1xuICBpbnRlcmZhY2UgQWxsSWNvbnMge1xuICAgIFtpY29uTmFtZTogc3RyaW5nXTogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+O1xuICB9XG4gIGNvbnN0IGFsbEljb25zOiBBbGxJY29ucyA9IHtcbiAgICBDYWxlbmRhckljb24sXG4gICAgSG9tZUljb24sXG4gICAgQ2hhdEJ1YmJsZU92YWxMZWZ0RWxsaXBzaXNJY29uLFxuICAgIExpc3RCdWxsZXRJY29uLFxuICAgIFVzZXJJY29uLFxuICAgIFVzZXJDaXJjbGVJY29uLFxuICB9O1xuXG4gIGNvbnN0IHNpZGVOYXYgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXRsZTogXCJob21lXCIsXG4gICAgICBpY29uOiBcIkhvbWVJY29uXCIsXG4gICAgICByb3V0ZTogXCIvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHRpdGxlOiBcImJvb2tpbmdzXCIsXG4gICAgICBpY29uOiBcIkNhbGVuZGFySWNvblwiLFxuICAgICAgcm91dGU6IFwiL2Jvb2tpbmdzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIHRpdGxlOiBcIm1lc3NhZ2VzXCIsXG4gICAgICBpY29uOiBcIkNoYXRCdWJibGVPdmFsTGVmdEVsbGlwc2lzSWNvblwiLFxuICAgICAgcm91dGU6IFwiL21lc3NhZ2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgdGl0bGU6IFwiYWN0aXZpdGllc1wiLFxuICAgICAgaWNvbjogXCJMaXN0QnVsbGV0SWNvblwiLFxuICAgICAgcm91dGU6IFwiL2FjdGl2aXR5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHRpdGxlOiBcImFjY291bnRcIixcbiAgICAgIGljb246IFwiVXNlckNpcmNsZUljb25cIixcbiAgICAgIHJvdXRlOiBcIi9hY2NvdW50XCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBtb2JpbGVOYXYgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXRsZTogXCJob21lXCIsXG4gICAgICBpY29uOiBcIkhvbWVJY29uXCIsXG4gICAgICByb3V0ZTogXCIvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiBcImJvb2tpbmdcIixcbiAgICAgIGljb246IFwiQ2FsZW5kYXJJY29uXCIsXG4gICAgICByb3V0ZTogXCIvYm9va2luZ3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgdGl0bGU6IFwibWVzc2FnZXNcIixcbiAgICAgIGljb246IFwiQ2hhdEJ1YmJsZU92YWxMZWZ0RWxsaXBzaXNJY29uXCIsXG4gICAgICByb3V0ZTogXCIvbWVzc2FnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICB0aXRsZTogXCJhY3Rpdml0aWVzXCIsXG4gICAgICBpY29uOiBcIkxpc3RCdWxsZXRJY29uXCIsXG4gICAgICByb3V0ZTogXCIvYWN0aXZpdHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgdGl0bGU6IFwiQWNjb3VudFwiLFxuICAgICAgaWNvbjogXCJVc2VySWNvblwiLFxuICAgICAgcm91dGU6IFwiL2FjY291bnRcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQWN0aXZlID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRBY3RpdmVJbmRleChpbmRleCk7XG4gICAgc2V0QWN0aXZlSW5kZXhJbkxvY2FsU3RvcmFnZShpbmRleCk7XG4gIH07XG5cbiAgY29uc3QgW29wZW5BZG1pbk5hdiwgc2V0T3BlbkFkbWluTmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzZXRBY3RpdmVJbmRleEluTG9jYWxTdG9yYWdlID0gKGluZGV4OiBudW1iZXIgfCBudWxsKSA9PiB7XG4gICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjdGl2ZUluZGV4XCIsIGluZGV4LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZEluZGV4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3RpdmVJbmRleFwiKTtcbiAgICBpZiAoc3RvcmVkSW5kZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEluZGV4ID0gcGFyc2VJbnQoc3RvcmVkSW5kZXgsIDEwKTtcbiAgICAgIGlmICghaXNOYU4ocGFyc2VkSW5kZXgpKSB7XG4gICAgICAgIHNldEFjdGl2ZUluZGV4KHBhcnNlZEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1kOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyIG1heC1tZDpmaXhlZCBtYXgtbWQ6ei01MCB3LWZ1bGwgbWF4LW1kOmJvdHRvbS0wIG1kOmZpeGVkICBiZy1zaWRlQmFyQ29sb3IgbWQ6aC1zY3JlZW4gbWF4LW1kOnB4LTMgIFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1tZDpoaWRkZW4gbG9nbyBwbC03IHB0LTdcIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9hc3NldHMvaW1hZ2VzL0xvZ28tZ3JlZW4ucG5nXCJ9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezEyNX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZV9uYXYgbWQ6aGlkZGVuIHNpZGVfbmF2IG1kOm10LTE0IG1kOnctZnVsbFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1heC1tZDpmbGV4IG1heC1zbTpqdXN0aWZ5LWJldHdlZW4gbWF4LW1kOmp1c3RpZnktY2VudGVyICBtYXgtc206bXgtMFwiPlxuICAgICAgICAgICAgICB7bW9iaWxlTmF2Lm1hcCgobmF2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IEljb24gPSBhbGxJY29uc1tuYXYuaWNvbl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e25hdi5yb3V0ZX0ga2V5PXtgbmF2LS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IG1heC1tZDpmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWQ6bXktNCBweS0yICBjdXJzb3ItcG9pbnRlciBtZDpwbC03ICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPT09IGluZGV4ICYmIFwibWQ6YmctbGlnaHRXaGl0ZSB0ZXh0LWdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBY3RpdmUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHctWzIwcHhdIGgtWzIwcHhdIG1heC1tZDptbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgbWwtMiBtYXgtbWQ6dGV4dC1bMTRweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYXYudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZV9uYXYgbWQ6bXQtMTQgbWQ6dy0yLzEyICBcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYXgtbWQ6aGlkZGVuIG1heC1tZDpmbGV4IG1heC1zbTpqdXN0aWZ5LWJldHdlZW4gbWF4LW1kOmp1c3RpZnktY2VudGVyICBtYXgtc206bXgtMCBwci01XCI+XG4gICAgICAgICAgICAgIHtzaWRlTmF2Lm1hcCgobmF2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IEljb24gPSBhbGxJY29uc1tuYXYuaWNvbl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e25hdi5yb3V0ZX0ga2V5PXtgbmF2LS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IG1heC1tZDpmbGV4LWNvbCBtYXgtbWQ6bXgtNCBpdGVtcy1jZW50ZXIgIG1kOm15LTQgcHktMiAgY3Vyc29yLXBvaW50ZXIgbWQ6cGwtNyBmb250LVs1MDBdICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPT09IGluZGV4ICYmIFwiYmctbGlnaHRXaGl0ZSB0ZXh0LWdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBY3RpdmUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIHctWzI0cHhdIGgtWzI0cHhdIG1heC1tZDptbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgbWwtMiBtYXgtbWQ6dGV4dC1bMTRweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYXYudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJDYWxlbmRhckljb24iLCJIb21lSWNvbiIsIkNoYXRCdWJibGVPdmFsTGVmdEVsbGlwc2lzSWNvbiIsIkxpc3RCdWxsZXRJY29uIiwiVXNlckljb24iLCJVc2VyQ2lyY2xlSWNvbiIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGVCYXIiLCJhbGxJY29ucyIsInNpZGVOYXYiLCJpZCIsInRpdGxlIiwiaWNvbiIsInJvdXRlIiwibW9iaWxlTmF2IiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImhhbmRsZUFjdGl2ZSIsImluZGV4Iiwic2V0QWN0aXZlSW5kZXhJbkxvY2FsU3RvcmFnZSIsIm9wZW5BZG1pbk5hdiIsInNldE9wZW5BZG1pbk5hdiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b1N0cmluZyIsInN0b3JlZEluZGV4IiwiZ2V0SXRlbSIsInBhcnNlZEluZGV4IiwicGFyc2VJbnQiLCJpc05hTiIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInVsIiwibWFwIiwibmF2IiwiSWNvbiIsImxpIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/general/sideBar.tsx\n"));

/***/ })

});