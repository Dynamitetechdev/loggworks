"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/verify",{

/***/ "./components/auth/verify/index.tsx":
/*!******************************************!*\
  !*** ./components/auth/verify/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-phone-input-2/lib/style.css */ \"./node_modules/react-phone-input-2/lib/style.css\");\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../testimonial */ \"./components/auth/testimonial.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst VerifyForm = (param)=>{\n    let { title, login } = param;\n    var _formData;\n    _s();\n    let currentInputIndex;\n    const [verifyCode, setVerifyCode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Array(5).fill(\"\"));\n    const [editNumber, setEditNumber] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(60);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        phoneNumber: \"+44 7911 123456\",\n        FACode: verifyCode.join(\"\")\n    });\n    const handleOnChange = (event)=>{\n        setFormData((prevData)=>({\n                ...prevData,\n                [event.target.name]: event.target.value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(formData);\n    };\n    const [activeInputIndex, setActiveInputIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const handleKeyDown = (e, index)=>{\n        const { key } = e;\n        currentInputIndex = index;\n        if (key === \"Backspace\") setActiveInputIndex(currentInputIndex - 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setTimer((prevTime)=>prevTime === 0 ? 60 : prevTime - 1);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"authForm text-center md:grid grid-cols-7 gap-8 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_testimonial__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right max-sm:flex max-sm:flex-col max-sm:justify-between formInput col-span-4 px-5 md:w-6/12 md:mx-auto md:my-auto \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"max-sm:mt-12 form_header max-sm:text-left text-2xl md:font-bold text-greyDark \",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-sm:mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-pColor my-1\",\n                                    children: \"Enter the verification number sent to\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"user_phone flex justify-between items-center\",\n                                    children: [\n                                        editNumber ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"\",\n                                            name: \"phoneNumber\",\n                                            value: formData.phoneNumber,\n                                            onChange: handleOnChange,\n                                            className: \"w-full text-center focus:outline-none pl-6\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-center w-full\",\n                                            children: (_formData = formData) === null || _formData === void 0 ? void 0 : _formData.phoneNumber\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-green cursor-pointer capitalize\",\n                                            onClick: ()=>setEditNumber(!editNumber),\n                                            children: editNumber ? \"done\" : \"edit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between items-center\",\n                                            children: verifyCode.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    ref: index === activeInputIndex ? inputRef : null,\n                                                    className: \"w-[66px] h-[48px] border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-normalGrey focus:border-gray-700 focus:text-gray-700 text-gray-400 transition\",\n                                                    type: \"text\",\n                                                    name: \"FACode\",\n                                                    value: verifyCode[index],\n                                                    maxLength: 1,\n                                                    onKeyDown: (e)=>handleKeyDown(e, index),\n                                                    onChange: handleOnChange,\n                                                    required: true\n                                                }, index, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 19\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"resendCount\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-right\",\n                                                children: [\n                                                    timer,\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"s\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                        lineNumber: 116,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                lineNumber: 114,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"flex flex-col\",\n                                    children: [\n                                        \"Don’t have an account?\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-green ml-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/signup\",\n                                                children: \"Sign Up\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                lineNumber: 124,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full h-[48px] bg-green  font-bold py-2 px-4 rounded\",\n                                        children: \"Verify OTP\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VerifyForm, \"uGVMb9cuAc0gtzZS7IfD5+GGRQw=\");\n_c = VerifyForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerifyForm);\nvar _c;\n$RefreshReg$(_c, \"VerifyForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUTttREFSSHZCOzs7Ozs7Ozs7O3NEQWFYLDhEQUFDTTs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ0s7Z0RBQUdMLFdBQVU7O29EQUNYNUI7a0VBQ0QsOERBQUM2QztrRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS1osOERBQUNDO29DQUFHbEIsV0FBVTs7d0NBQWdCO3dDQUNMO3NEQUN2Qiw4REFBQ2lCOzRDQUFLakIsV0FBVTtzREFDZCw0RUFBQzVDLGtEQUFJQTtnREFBQytELE1BQU07MERBQVc7Ozs7Ozs7Ozs7O3dDQUNqQjs7Ozs7Ozs4Q0FFViw4REFBQ3BCO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDb0I7d0NBQU9wQixXQUFVO2tEQUF3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN4RjtHQXpITXZDO0tBQUFBO0FBMkhOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC92ZXJpZnkvaW5kZXgudHN4P2JhNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQaG9uZUlucHV0IGZyb20gXCJyZWFjdC1waG9uZS1pbnB1dC0yXCI7XG5pbXBvcnQgXCJyZWFjdC1waG9uZS1pbnB1dC0yL2xpYi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUZXN0aW1vbmlhbCBmcm9tIFwiLi4vdGVzdGltb25pYWxcIjtcblxuaW50ZXJmYWNlIEF1dGhGb3JtUHJvcCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxvZ2luPzogYm9vbGVhbjtcbn1cbmludGVyZmFjZSBGb3JtRGF0YSB7XG4gIHBob25lTnVtYmVyPzogc3RyaW5nO1xuICBGQUNvZGU6IGFueTtcbn1cbmNvbnN0IFZlcmlmeUZvcm06IFJlYWN0LkZDPEF1dGhGb3JtUHJvcD4gPSAoeyB0aXRsZSwgbG9naW4gfSkgPT4ge1xuICBsZXQgY3VycmVudElucHV0SW5kZXg6IG51bWJlcjtcblxuICBjb25zdCBbdmVyaWZ5Q29kZSwgc2V0VmVyaWZ5Q29kZV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4obmV3IEFycmF5KDUpLmZpbGwoXCJcIikpO1xuICBjb25zdCBbZWRpdE51bWJlciwgc2V0RWRpdE51bWJlcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGU8bnVtYmVyPig2MCk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHtcbiAgICBwaG9uZU51bWJlcjogXCIrNDQgNzkxMSAxMjM0NTZcIixcbiAgICBGQUNvZGU6IHZlcmlmeUNvZGUuam9pbihcIlwiKSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgIHNldEZvcm1EYXRhKChwcmV2RGF0YTogRm9ybURhdGEpID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgW2FjdGl2ZUlucHV0SW5kZXgsIHNldEFjdGl2ZUlucHV0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKFxuICAgIGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgaW5kZXg6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCB7IGtleSB9ID0gZTtcbiAgICBjdXJyZW50SW5wdXRJbmRleCA9IGluZGV4O1xuICAgIGlmIChrZXkgPT09IFwiQmFja3NwYWNlXCIpIHNldEFjdGl2ZUlucHV0SW5kZXgoY3VycmVudElucHV0SW5kZXggLSAxKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VGltZXIoKHByZXZUaW1lKSA9PiAocHJldlRpbWUgPT09IDAgPyA2MCA6IHByZXZUaW1lIC0gMSkpO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoRm9ybSB0ZXh0LWNlbnRlciBtZDpncmlkIGdyaWQtY29scy03IGdhcC04IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPFRlc3RpbW9uaWFsIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgbWF4LXNtOmZsZXggbWF4LXNtOmZsZXgtY29sIG1heC1zbTpqdXN0aWZ5LWJldHdlZW4gZm9ybUlucHV0IGNvbC1zcGFuLTQgcHgtNSBtZDp3LTYvMTIgbWQ6bXgtYXV0byBtZDpteS1hdXRvIFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWF4LXNtOm10LTEyIGZvcm1faGVhZGVyIG1heC1zbTp0ZXh0LWxlZnQgdGV4dC0yeGwgbWQ6Zm9udC1ib2xkIHRleHQtZ3JleURhcmsgXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXNtOm10LTEwXCI+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1wQ29sb3IgbXktMVwiPlxuICAgICAgICAgICAgICBFbnRlciB0aGUgdmVyaWZpY2F0aW9uIG51bWJlciBzZW50IHRvXG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfcGhvbmUgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtlZGl0TnVtYmVyID8gKFxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZU51bWJlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBmb2N1czpvdXRsaW5lLW5vbmUgcGwtNlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsXCI+e2Zvcm1EYXRhPy5waG9uZU51bWJlcn08L2gzPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuIGN1cnNvci1wb2ludGVyIGNhcGl0YWxpemVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXROdW1iZXIoIWVkaXROdW1iZXIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2VkaXROdW1iZXIgPyBcImRvbmVcIiA6IFwiZWRpdFwifVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7dmVyaWZ5Q29kZS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbmRleCA9PT0gYWN0aXZlSW5wdXRJbmRleCA/IGlucHV0UmVmIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNjZweF0gaC1bNDhweF0gYm9yZGVyIHJvdW5kZWQgYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgdGV4dC14bCBzcGluLWJ1dHRvbi1ub25lIGJvcmRlci1ub3JtYWxHcmV5IGZvY3VzOmJvcmRlci1ncmF5LTcwMCBmb2N1czp0ZXh0LWdyYXktNzAwIHRleHQtZ3JheS00MDAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkZBQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2ZXJpZnlDb2RlW2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBoYW5kbGVLZXlEb3duKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNlbmRDb3VudFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICB7dGltZXJ9XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5zPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbiBtbC0xXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvc2lnbnVwXCJ9PlNpZ24gVXA8L0xpbms+XG4gICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDptYi00XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGgtWzQ4cHhdIGJnLWdyZWVuICBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICBWZXJpZnkgT1RQXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5Rm9ybTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJUZXN0aW1vbmlhbCIsIlZlcmlmeUZvcm0iLCJ0aXRsZSIsImxvZ2luIiwiZm9ybURhdGEiLCJjdXJyZW50SW5wdXRJbmRleCIsInZlcmlmeUNvZGUiLCJzZXRWZXJpZnlDb2RlIiwiQXJyYXkiLCJmaWxsIiwiZWRpdE51bWJlciIsInNldEVkaXROdW1iZXIiLCJ0aW1lciIsInNldFRpbWVyIiwic2V0Rm9ybURhdGEiLCJwaG9uZU51bWJlciIsIkZBQ29kZSIsImpvaW4iLCJoYW5kbGVPbkNoYW5nZSIsImV2ZW50IiwicHJldkRhdGEiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlSW5wdXRJbmRleCIsInNldEFjdGl2ZUlucHV0SW5kZXgiLCJpbnB1dFJlZiIsImhhbmRsZUtleURvd24iLCJpbmRleCIsImtleSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJhY3Rpb24iLCJvblN1Ym1pdCIsImgzIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJtYXAiLCJfIiwicmVmIiwibWF4TGVuZ3RoIiwib25LZXlEb3duIiwicmVxdWlyZWQiLCJzcGFuIiwiaDQiLCJocmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/auth/verify/index.tsx\n"));

/***/ })

});