"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/message",{

/***/ "./components/general/sideBar.tsx":
/*!****************************************!*\
  !*** ./components/general/sideBar.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/CalendarIcon */ \"./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/HomeIcon */ \"./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/ChatBubbleOvalLeftEllipsisIcon */ \"./node_modules/@heroicons/react/24/outline/esm/ChatBubbleOvalLeftEllipsisIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/ListBulletIcon */ \"./node_modules/@heroicons/react/24/outline/esm/ListBulletIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_UserIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/UserIcon */ \"./node_modules/@heroicons/react/24/outline/esm/UserIcon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_UserCircleIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/UserCircleIcon */ \"./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst SideBar = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const allIcons = {\n        CalendarIcon: _heroicons_react_24_outline_esm_CalendarIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        HomeIcon: _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        ChatBubbleOvalLeftEllipsisIcon: _heroicons_react_24_outline_esm_ChatBubbleOvalLeftEllipsisIcon__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        ListBulletIcon: _heroicons_react_24_outline_esm_ListBulletIcon__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        UserIcon: _heroicons_react_24_outline_esm_UserIcon__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        UserCircleIcon: _heroicons_react_24_outline_esm_UserCircleIcon__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    };\n    const sideNav = [\n        {\n            id: 1,\n            title: \"home\",\n            icon: \"HomeIcon\",\n            route: \"/\"\n        },\n        {\n            id: 2,\n            title: \"bookings\",\n            icon: \"CalendarIcon\",\n            route: \"/bookings\"\n        },\n        {\n            id: 3,\n            title: \"messages\",\n            icon: \"ChatBubbleOvalLeftEllipsisIcon\",\n            route: \"/message\"\n        },\n        {\n            id: 4,\n            title: \"activities\",\n            icon: \"ListBulletIcon\",\n            route: \"/activity\"\n        },\n        {\n            id: 4,\n            title: \"account\",\n            icon: \"UserCircleIcon\",\n            route: \"/account\"\n        }\n    ];\n    const mobileNav = [\n        {\n            id: 1,\n            title: \"home\",\n            icon: \"HomeIcon\",\n            route: \"/\"\n        },\n        {\n            id: 1,\n            title: \"booking\",\n            icon: \"CalendarIcon\",\n            route: \"/bookings\"\n        },\n        {\n            id: 3,\n            title: \"messages\",\n            icon: \"ChatBubbleOvalLeftEllipsisIcon\",\n            route: \"/message\"\n        },\n        {\n            id: 4,\n            title: \"activities\",\n            icon: \"ListBulletIcon\",\n            route: \"/activity\"\n        },\n        {\n            id: 4,\n            title: \"Account\",\n            icon: \"UserIcon\",\n            route: \"/account\"\n        }\n    ];\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleActive = (index)=>{\n        setActiveIndex(index);\n        setActiveIndexInLocalStorage(index);\n    };\n    const [openAdminNav, setOpenAdminNav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const setActiveIndexInLocalStorage = (index)=>{\n        if (index !== null) {\n            sessionStorage.setItem(\"activeIndex\", index.toString());\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const storedIndex = sessionStorage.getItem(\"activeIndex\");\n        if (storedIndex !== null) {\n            const parsedIndex = parseInt(storedIndex, 10);\n            if (!isNaN(parsedIndex)) {\n                setActiveIndex(parsedIndex);\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sidebar max-md:fixed max-md:z-50 w-full max-md:bottom-0 md:fixed  bg-sideBarColor md:h-screen max-md:px-3  md:max-w-[221px] min-lg:text-[14px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-md:hidden logo pl-7 pt-7\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/assets/images/Logo-green.png\",\n                                width: 125,\n                                height: 20,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mobile_nav md:hidden side_nav md:mt-14 md:w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"max-md:flex max-sm:justify-between max-md:justify-center  max-sm:mx-0\",\n                            children: mobileNav.map((nav, index)=>{\n                                const Icon = allIcons[nav.icon];\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: nav.route,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex max-md:flex-col items-center md:my-4 py-2  cursor-pointer md:pl-7  \".concat(activeIndex === index && \"md:bg-lightWhite text-green\"),\n                                        onClick: ()=>handleActive(index),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon w-[20px] h-[20px] max-md:ml-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {}, void 0, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                    lineNumber: 147,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                lineNumber: 146,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"capitalize ml-2 max-md:text-[14px]\",\n                                                children: nav.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                lineNumber: 149,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, \"nav--\".concat(index), false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 19\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                            lineNumber: 135,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"side_nav md:mt-14 ml-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"max-md:hidden max-md:flex max-sm:justify-between max-md:justify-center  max-sm:mx-0 pr-5\",\n                            children: sideNav.map((nav, index)=>{\n                                const Icon = allIcons[nav.icon];\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: nav.route,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex max-md:flex-col max-md:mx-4 items-center  md:my-4 py-2  cursor-pointer md:pl-5 font-[500]  \".concat(router.pathname === nav.route && \"bg-lightWhite text-green\"),\n                                        onClick: ()=>handleActive(index),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon w-[24px] h-[24px] max-md:ml-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {}, void 0, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                    lineNumber: 174,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                lineNumber: 173,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"capitalize ml-2 max-md:text-[14px]\",\n                                                children: nav.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                                lineNumber: 176,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                        lineNumber: 166,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, \"nav--\".concat(index), false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                                    lineNumber: 165,\n                                    columnNumber: 19\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n                lineNumber: 122,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/general/sideBar.tsx\",\n            lineNumber: 121,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(SideBar, \"L0Ry3qVV+fwIGmY11GD1plSjVSo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7MERBRTVCLDhEQUFDWTtnREFBSUMsV0FBVTswREFDYiw0RUFBQ1M7Ozs7Ozs7Ozs7MERBRUgsOERBQUNHO2dEQUFFWixXQUFVOzBEQUNWUSxJQUFJNUIsS0FBSzs7Ozs7Ozs7Ozs7O21DQVhZLFFBQWMsT0FBTk87Ozs7OzRCQWdCeEM7Ozs7Ozs7Ozs7O2tDQUlKLDhEQUFDWTt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ007NEJBQUdOLFdBQVU7c0NBQ1h0QixRQUFRNkIsR0FBRyxDQUFDLENBQUNDLEtBQUtyQjtnQ0FDakIsTUFBTXNCLE9BQU9oQyxRQUFRLENBQUMrQixJQUFJM0IsSUFBSSxDQUFDO2dDQUUvQixxQkFDRSw4REFBQ1Ysa0RBQUlBO29DQUFDOEIsTUFBTU8sSUFBSTFCLEtBQUs7OENBQ25CLDRFQUFDNEI7d0NBQ0NWLFdBQVcsbUdBR1YsT0FGQ3hCLE9BQU9xQyxRQUFRLEtBQUtMLElBQUkxQixLQUFLLElBQzdCO3dDQUVGNkIsU0FBUyxJQUFNekIsYUFBYUM7OzBEQUU1Qiw4REFBQ1k7Z0RBQUlDLFdBQVU7MERBQ2IsNEVBQUNTOzs7Ozs7Ozs7OzBEQUVILDhEQUFDRztnREFBRVosV0FBVTswREFDVlEsSUFBSTVCLEtBQUs7Ozs7Ozs7Ozs7OzttQ0FaWSxRQUFjLE9BQU5POzs7Ozs0QkFpQnhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kO0dBL0tNWjs7UUFDV0Qsa0RBQVNBOzs7S0FEcEJDO0FBaUxOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2VuZXJhbC9zaWRlQmFyLnRzeD8xNTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJJY29uLFxuICBIb21lSWNvbixcbiAgQ2hhdEJ1YmJsZU92YWxMZWZ0RWxsaXBzaXNJY29uLFxuICBMaXN0QnVsbGV0SWNvbixcbiAgVXNlckljb24sXG4gIFVzZXJDaXJjbGVJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuY29uc3QgU2lkZUJhciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGludGVyZmFjZSBBbGxJY29ucyB7XG4gICAgW2ljb25OYW1lOiBzdHJpbmddOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT47XG4gIH1cbiAgY29uc3QgYWxsSWNvbnM6IEFsbEljb25zID0ge1xuICAgIENhbGVuZGFySWNvbixcbiAgICBIb21lSWNvbixcbiAgICBDaGF0QnViYmxlT3ZhbExlZnRFbGxpcHNpc0ljb24sXG4gICAgTGlzdEJ1bGxldEljb24sXG4gICAgVXNlckljb24sXG4gICAgVXNlckNpcmNsZUljb24sXG4gIH07XG5cbiAgY29uc3Qgc2lkZU5hdiA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiBcImhvbWVcIixcbiAgICAgIGljb246IFwiSG9tZUljb25cIixcbiAgICAgIHJvdXRlOiBcIi9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGl0bGU6IFwiYm9va2luZ3NcIixcbiAgICAgIGljb246IFwiQ2FsZW5kYXJJY29uXCIsXG4gICAgICByb3V0ZTogXCIvYm9va2luZ3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgdGl0bGU6IFwibWVzc2FnZXNcIixcbiAgICAgIGljb246IFwiQ2hhdEJ1YmJsZU92YWxMZWZ0RWxsaXBzaXNJY29uXCIsXG4gICAgICByb3V0ZTogXCIvbWVzc2FnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICB0aXRsZTogXCJhY3Rpdml0aWVzXCIsXG4gICAgICBpY29uOiBcIkxpc3RCdWxsZXRJY29uXCIsXG4gICAgICByb3V0ZTogXCIvYWN0aXZpdHlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgdGl0bGU6IFwiYWNjb3VudFwiLFxuICAgICAgaWNvbjogXCJVc2VyQ2lyY2xlSWNvblwiLFxuICAgICAgcm91dGU6IFwiL2FjY291bnRcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IG1vYmlsZU5hdiA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiBcImhvbWVcIixcbiAgICAgIGljb246IFwiSG9tZUljb25cIixcbiAgICAgIHJvdXRlOiBcIi9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6IFwiYm9va2luZ1wiLFxuICAgICAgaWNvbjogXCJDYWxlbmRhckljb25cIixcbiAgICAgIHJvdXRlOiBcIi9ib29raW5nc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICB0aXRsZTogXCJtZXNzYWdlc1wiLFxuICAgICAgaWNvbjogXCJDaGF0QnViYmxlT3ZhbExlZnRFbGxpcHNpc0ljb25cIixcbiAgICAgIHJvdXRlOiBcIi9tZXNzYWdlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIHRpdGxlOiBcImFjdGl2aXRpZXNcIixcbiAgICAgIGljb246IFwiTGlzdEJ1bGxldEljb25cIixcbiAgICAgIHJvdXRlOiBcIi9hY3Rpdml0eVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICB0aXRsZTogXCJBY2NvdW50XCIsXG4gICAgICBpY29uOiBcIlVzZXJJY29uXCIsXG4gICAgICByb3V0ZTogXCIvYWNjb3VudFwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVBY3RpdmUgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldEFjdGl2ZUluZGV4KGluZGV4KTtcbiAgICBzZXRBY3RpdmVJbmRleEluTG9jYWxTdG9yYWdlKGluZGV4KTtcbiAgfTtcblxuICBjb25zdCBbb3BlbkFkbWluTmF2LCBzZXRPcGVuQWRtaW5OYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNldEFjdGl2ZUluZGV4SW5Mb2NhbFN0b3JhZ2UgPSAoaW5kZXg6IG51bWJlciB8IG51bGwpID0+IHtcbiAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVJbmRleFwiLCBpbmRleC50b1N0cmluZygpKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRJbmRleCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJhY3RpdmVJbmRleFwiKTtcbiAgICBpZiAoc3RvcmVkSW5kZXggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEluZGV4ID0gcGFyc2VJbnQoc3RvcmVkSW5kZXgsIDEwKTtcbiAgICAgIGlmICghaXNOYU4ocGFyc2VkSW5kZXgpKSB7XG4gICAgICAgIHNldEFjdGl2ZUluZGV4KHBhcnNlZEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXIgbWF4LW1kOmZpeGVkIG1heC1tZDp6LTUwIHctZnVsbCBtYXgtbWQ6Ym90dG9tLTAgbWQ6Zml4ZWQgIGJnLXNpZGVCYXJDb2xvciBtZDpoLXNjcmVlbiBtYXgtbWQ6cHgtMyAgbWQ6bWF4LXctWzIyMXB4XSBtaW4tbGc6dGV4dC1bMTRweF1cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtbWQ6aGlkZGVuIGxvZ28gcGwtNyBwdC03XCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17XCIvYXNzZXRzL2ltYWdlcy9Mb2dvLWdyZWVuLnBuZ1wifVxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMjV9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGVfbmF2IG1kOmhpZGRlbiBzaWRlX25hdiBtZDptdC0xNCBtZDp3LWZ1bGxcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYXgtbWQ6ZmxleCBtYXgtc206anVzdGlmeS1iZXR3ZWVuIG1heC1tZDpqdXN0aWZ5LWNlbnRlciAgbWF4LXNtOm14LTBcIj5cbiAgICAgICAgICAgICAge21vYmlsZU5hdi5tYXAoKG5hdiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBJY29uID0gYWxsSWNvbnNbbmF2Lmljb25dO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtuYXYucm91dGV9IGtleT17YG5hdi0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBtYXgtbWQ6ZmxleC1jb2wgaXRlbXMtY2VudGVyIG1kOm15LTQgcHktMiAgY3Vyc29yLXBvaW50ZXIgbWQ6cGwtNyAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID09PSBpbmRleCAmJiBcIm1kOmJnLWxpZ2h0V2hpdGUgdGV4dC1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWN0aXZlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiB3LVsyMHB4XSBoLVsyMHB4XSBtYXgtbWQ6bWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXBpdGFsaXplIG1sLTIgbWF4LW1kOnRleHQtWzE0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmF2LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVfbmF2IG1kOm10LTE0IG1sLTNcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYXgtbWQ6aGlkZGVuIG1heC1tZDpmbGV4IG1heC1zbTpqdXN0aWZ5LWJldHdlZW4gbWF4LW1kOmp1c3RpZnktY2VudGVyICBtYXgtc206bXgtMCBwci01XCI+XG4gICAgICAgICAgICAgIHtzaWRlTmF2Lm1hcCgobmF2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IEljb24gPSBhbGxJY29uc1tuYXYuaWNvbl07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bmF2LnJvdXRlfSBrZXk9e2BuYXYtLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggbWF4LW1kOmZsZXgtY29sIG1heC1tZDpteC00IGl0ZW1zLWNlbnRlciAgbWQ6bXktNCBweS0yICBjdXJzb3ItcG9pbnRlciBtZDpwbC01IGZvbnQtWzUwMF0gICR7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IG5hdi5yb3V0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1saWdodFdoaXRlIHRleHQtZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFjdGl2ZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gdy1bMjRweF0gaC1bMjRweF0gbWF4LW1kOm1sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZSBtbC0yIG1heC1tZDp0ZXh0LVsxNHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge25hdi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkNhbGVuZGFySWNvbiIsIkhvbWVJY29uIiwiQ2hhdEJ1YmJsZU92YWxMZWZ0RWxsaXBzaXNJY29uIiwiTGlzdEJ1bGxldEljb24iLCJVc2VySWNvbiIsIlVzZXJDaXJjbGVJY29uIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiU2lkZUJhciIsInJvdXRlciIsImFsbEljb25zIiwic2lkZU5hdiIsImlkIiwidGl0bGUiLCJpY29uIiwicm91dGUiLCJtb2JpbGVOYXYiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiaGFuZGxlQWN0aXZlIiwiaW5kZXgiLCJzZXRBY3RpdmVJbmRleEluTG9jYWxTdG9yYWdlIiwib3BlbkFkbWluTmF2Iiwic2V0T3BlbkFkbWluTmF2Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwidG9TdHJpbmciLCJzdG9yZWRJbmRleCIsImdldEl0ZW0iLCJwYXJzZWRJbmRleCIsInBhcnNlSW50IiwiaXNOYU4iLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ1bCIsIm1hcCIsIm5hdiIsIkljb24iLCJsaSIsIm9uQ2xpY2siLCJwIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/general/sideBar.tsx\n"));

/***/ })

});