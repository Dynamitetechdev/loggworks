"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reset/reset-password",{

/***/ "./components/reset/form.tsx":
/*!***********************************!*\
  !*** ./components/reset/form.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-phone-input-2/lib/style.css */ \"./node_modules/react-phone-input-2/lib/style.css\");\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ResetForm = (param)=>{\n    let { title, newPassword } = param;\n    _s();\n    const [numberReactInput, setNumberReactInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        email: \"\",\n        newPassword: \"\",\n        confirmPassword: \"\"\n    });\n    const handleOnChange = (event)=>{\n        setFormData((prevData)=>({\n                ...prevData,\n                [event.target.name]: event.target.value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(formData);\n    };\n    console.log(numberReactInput);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"authForm text-center h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"right flex flex-col formInput px-5 md:w-3/12 md:mx-auto md:my-auto \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo mx-auto my-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/assets/images/Logo-green.png\",\n                        width: 197,\n                        height: 32,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"max-sm:mt-12 max-sm:text-center form_header max-sm:text-left text-2xl font-bold text-greyDark md:my-5\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center text-greyDark\",\n                    children: \"Please enter your email address and we will send you a password reset link\"\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-sm:mt-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            onSubmit: handleSubmit,\n                            className: \"mb-10\",\n                            children: !newPassword ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"password mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"block text-gray-700 text-sm font-bold mb-1 text-left\",\n                                                id: \"email\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Email\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"relative\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]\",\n                                                    id: \"email\",\n                                                    type: \"email\",\n                                                    name: \"email\",\n                                                    value: formData.email,\n                                                    onChange: handleOnChange\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full h-[48px] bg-green  font-bold py-2 px-4 rounded\",\n                                        children: newPassword ? \"Reset password\" : \"Send reset link\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"password mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"block text-gray-700 text-sm font-bold mb-1 text-left\",\n                                                id: \"newPassword\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"New password\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"relative\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]\",\n                                                    id: \"newPassword\",\n                                                    type: \"text\",\n                                                    name: \"newPassword\",\n                                                    value: formData.newPassword,\n                                                    onChange: handleOnChange\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"password mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"block text-gray-700 text-sm font-bold mb-1 text-left\",\n                                                id: \"confirmPassword\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"New password\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"relative\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]\",\n                                                    id: \"confirmPassword\",\n                                                    type: \"text\",\n                                                    name: \"confirmPassword\",\n                                                    value: formData.confirmPassword,\n                                                    onChange: handleOnChange\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                                lineNumber: 111,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full h-[48px] bg-green  font-bold py-2 px-4 rounded\",\n                                        children: newPassword ? \"Reset password\" : \"Send reset link\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/login\",\n                            className: \"text-center underline text-green\",\n                            children: \"Back to login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"absolute bottom-5 left-1/2 transform -translate-x-1/2\",\n                    children: \"Privacy policy\"\n                }, void 0, false, {\n                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/reset/form.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ResetForm, \"smJpJs8y9cILRKDmhvfo5TRigeE=\");\n_c = ResetForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetForm);\nvar _c;\n$RefreshReg$(_c, \"ResetForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S3JFLDhEQUFDTTtvQkFBRU4sV0FBVTs4QkFBd0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdFO0dBN0hNckI7S0FBQUE7QUErSE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXNldC9mb3JtLnRzeD8yZjUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQaG9uZUlucHV0IGZyb20gXCJyZWFjdC1waG9uZS1pbnB1dC0yXCI7XG5pbXBvcnQgXCJyZWFjdC1waG9uZS1pbnB1dC0yL2xpYi9zdHlsZS5jc3NcIjtcblxuaW50ZXJmYWNlIEF1dGhGb3JtUHJvcCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG5ld1Bhc3N3b3JkPzogYm9vbGVhbjtcbn1cbmludGVyZmFjZSBGb3JtRGF0YSB7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBuZXdQYXNzd29yZD86IHN0cmluZztcbiAgY29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xufVxuY29uc3QgUmVzZXRGb3JtOiBSZWFjdC5GQzxBdXRoRm9ybVByb3A+ID0gKHsgdGl0bGUsIG5ld1Bhc3N3b3JkIH0pID0+IHtcbiAgY29uc3QgW251bWJlclJlYWN0SW5wdXQsIHNldE51bWJlclJlYWN0SW5wdXRdID0gdXNlU3RhdGU8YW55PihudWxsKTtcblxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlPEZvcm1EYXRhPih7XG4gICAgZW1haWw6IFwiXCIsXG4gICAgbmV3UGFzc3dvcmQ6IFwiXCIsXG4gICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhOiBGb3JtRGF0YSkgPT4gKHtcbiAgICAgIC4uLnByZXZEYXRhLFxuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhudW1iZXJSZWFjdElucHV0KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhGb3JtIHRleHQtY2VudGVyIGgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggZmxleC1jb2wgZm9ybUlucHV0IHB4LTUgbWQ6dy0zLzEyIG1kOm14LWF1dG8gbWQ6bXktYXV0byBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIG14LWF1dG8gbXktMTBcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17XCIvYXNzZXRzL2ltYWdlcy9Mb2dvLWdyZWVuLnBuZ1wifVxuICAgICAgICAgICAgd2lkdGg9ezE5N31cbiAgICAgICAgICAgIGhlaWdodD17MzJ9XG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWF4LXNtOm10LTEyIG1heC1zbTp0ZXh0LWNlbnRlciBmb3JtX2hlYWRlciBtYXgtc206dGV4dC1sZWZ0IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyZXlEYXJrIG1kOm15LTVcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JleURhcmtcIj5cbiAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzIGFuZCB3ZSB3aWxsIHNlbmQgeW91IGEgcGFzc3dvcmQgcmVzZXRcbiAgICAgICAgICBsaW5rXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1zbTptdC0xMFwiPlxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgICAgICB7IW5ld1Bhc3N3b3JkID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOm1iLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTEgdGV4dC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmV5IHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGgtWzQ4cHhdXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNDhweF0gYmctZ3JlZW4gIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAge25ld1Bhc3N3b3JkID8gXCJSZXNldCBwYXNzd29yZFwiIDogXCJTZW5kIHJlc2V0IGxpbmtcIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOm1iLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTEgdGV4dC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPk5ldyBwYXNzd29yZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JleSByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBoLVs0OHB4XVwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5ld1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMSB0ZXh0LWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPk5ldyBwYXNzd29yZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JleSByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBoLVs0OHB4XVwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuY29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNDhweF0gYmctZ3JlZW4gIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAge25ld1Bhc3N3b3JkID8gXCJSZXNldCBwYXNzd29yZFwiIDogXCJTZW5kIHJlc2V0IGxpbmtcIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2xvZ2luXCJ9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHVuZGVybGluZSB0ZXh0LWdyZWVuXCI+XG4gICAgICAgICAgICBCYWNrIHRvIGxvZ2luXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNSBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMlwiPlxuICAgICAgICAgIFByaXZhY3kgcG9saWN5XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRGb3JtO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZVN0YXRlIiwiUmVzZXRGb3JtIiwidGl0bGUiLCJuZXdQYXNzd29yZCIsIm51bWJlclJlYWN0SW5wdXQiLCJzZXROdW1iZXJSZWFjdElucHV0IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwiY29uZmlybVBhc3N3b3JkIiwiaGFuZGxlT25DaGFuZ2UiLCJldmVudCIsInByZXZEYXRhIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJwIiwiZm9ybSIsImFjdGlvbiIsIm9uU3VibWl0IiwibGFiZWwiLCJpZCIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/reset/form.tsx\n"));

/***/ })

});