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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-phone-input-2/lib/style.css */ \"./node_modules/react-phone-input-2/lib/style.css\");\n/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../testimonial */ \"./components/auth/testimonial.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nlet currentInputIndex;\nconst VerifyForm = (param)=>{\n    let { title, login } = param;\n    var _formData;\n    _s();\n    const [verifyCode, setVerifyCode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Array(5).fill(\"\"));\n    const [editNumber, setEditNumber] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(60);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        FACode: verifyCode.join(\"\")\n    });\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(formData);\n    };\n    const [activeInputIndex, setActiveInputIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const handleOnChange = (event)=>{\n        const { value } = event.target;\n        const newVal = [\n            ...verifyCode\n        ];\n        newVal[currentInputIndex] = value.substring(value.length - 1);\n        if (!value) setActiveInputIndex(currentInputIndex - 1);\n        else setActiveInputIndex(currentInputIndex + 1);\n        setVerifyCode(newVal);\n        setFormData({\n            FACode: newVal.join(\"\")\n        });\n    };\n    console.log(\"activeInputIndex\", activeInputIndex);\n    const handleKeyDown = (e, index)=>{\n        const { key } = e;\n        currentInputIndex = index;\n        if (key === \"Backspace\") setActiveInputIndex(currentInputIndex - 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setTimer((prevTime)=>prevTime === 0 ? 60 : prevTime - 1);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"authForm text-center md:grid grid-cols-7 gap-8 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_testimonial__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right max-sm:flex max-sm:flex-col max-sm:justify-between formInput col-span-4 px-5 md:w-6/12 md:mx-auto md:my-auto \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"max-sm:mt-12 form_header max-sm:text-left text-2xl md:font-bold text-greyDark \",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-sm:mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-pColor my-1\",\n                                    children: \"Enter the verification number sent to\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"user_phone flex justify-between items-center\",\n                                    children: [\n                                        editNumber ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            placeholder: \"\",\n                                            name: \"phoneNumber\",\n                                            value: formData.phoneNumber,\n                                            // onChange={handleOnChange}\n                                            className: \"w-full text-center focus:outline-none pl-6\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-center w-full\",\n                                            children: (_formData = formData) === null || _formData === void 0 ? void 0 : _formData.phoneNumber\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-green cursor-pointer capitalize\",\n                                            onClick: ()=>setEditNumber(!editNumber),\n                                            children: editNumber ? \"done\" : \"edit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between items-center\",\n                                            children: verifyCode.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    ref: index === activeInputIndex ? inputRef : null,\n                                                    className: \"w-[66px] h-[48px] border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-normalGrey focus:border-green focus:text-gray-700 text-gray-400 transition\",\n                                                    type: \"text\",\n                                                    name: \"FACode\",\n                                                    value: verifyCode[index],\n                                                    maxLength: 1,\n                                                    onKeyDown: (e)=>handleKeyDown(e, index),\n                                                    onChange: (e)=>handleOnChange(e),\n                                                    required: true\n                                                }, index, false, {\n                                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 19\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"resendCount\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-right\",\n                                                children: [\n                                                    timer,\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"s\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                        lineNumber: 117,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                lineNumber: 115,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"flex flex-col\",\n                                    children: [\n                                        \"Didn’t get the OTP?\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-green ml-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"\",\n                                                children: \"Resend OTP\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                                lineNumber: 125,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full h-[48px] bg-green  font-bold py-2 px-4 rounded\",\n                                        children: \"Verify OTP\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anuoluwapo/codebase/loggworks/components/auth/verify/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VerifyForm, \"aCsei+wM3viKGUi9I8ySHJ9XsVU=\");\n_c = VerifyForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerifyForm);\nvar _c;\n$RefreshReg$(_c, \"VerifyForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S3JCLFVBQVVYLG1CQUFtQkUsV0FBVztvREFFN0NnQixXQUFVO29EQUNWTyxNQUFLO29EQUNMRSxNQUFLO29EQUNMdEIsT0FBT3JCLFVBQVUsQ0FBQzJCLE1BQU07b0RBQ3hCc0IsV0FBVztvREFDWEMsV0FBVyxDQUFDdEMsSUFBTWMsY0FBY2QsR0FBR2U7b0RBQ25Dd0IsVUFBVSxDQUFDdkMsSUFBTU8sZUFBZVA7b0RBQ2hDd0MsUUFBUTttREFSSHpCOzs7Ozs7Ozs7O3NEQWFYLDhEQUFDTTs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ0s7Z0RBQUdMLFdBQVU7O29EQUNYNUI7a0VBQ0QsOERBQUMrQztrRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS1osOERBQUNDO29DQUFHcEIsV0FBVTs7d0NBQWdCO3NEQUU1Qiw4REFBQ21COzRDQUFLbkIsV0FBVTtzREFDZCw0RUFBQzVDLGtEQUFJQTtnREFBQ2lFLE1BQU07MERBQUk7Ozs7Ozs7Ozs7O3dDQUNWOzs7Ozs7OzhDQUVWLDhEQUFDdEI7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNzQjt3Q0FBT3RCLFdBQVU7a0RBQXdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3hGO0dBekhNdEM7S0FBQUE7QUEySE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL3ZlcmlmeS9pbmRleC50c3g/YmE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBob25lSW5wdXQgZnJvbSBcInJlYWN0LXBob25lLWlucHV0LTJcIjtcbmltcG9ydCBcInJlYWN0LXBob25lLWlucHV0LTIvbGliL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gXCIuLi90ZXN0aW1vbmlhbFwiO1xuXG5pbnRlcmZhY2UgQXV0aEZvcm1Qcm9wIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbG9naW4/OiBib29sZWFuO1xufVxuaW50ZXJmYWNlIEZvcm1EYXRhIHtcbiAgcGhvbmVOdW1iZXI/OiBzdHJpbmc7XG4gIEZBQ29kZTogYW55O1xufVxubGV0IGN1cnJlbnRJbnB1dEluZGV4OiBudW1iZXI7XG5jb25zdCBWZXJpZnlGb3JtOiBSZWFjdC5GQzxBdXRoRm9ybVByb3A+ID0gKHsgdGl0bGUsIGxvZ2luIH0pID0+IHtcbiAgY29uc3QgW3ZlcmlmeUNvZGUsIHNldFZlcmlmeUNvZGVdID0gdXNlU3RhdGU8c3RyaW5nW10+KG5ldyBBcnJheSg1KS5maWxsKFwiXCIpKTtcbiAgY29uc3QgW2VkaXROdW1iZXIsIHNldEVkaXROdW1iZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlPG51bWJlcj4oNjApO1xuXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KHtcbiAgICBGQUNvZGU6IHZlcmlmeUNvZGUuam9pbihcIlwiKSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgW2FjdGl2ZUlucHV0SW5kZXgsIHNldEFjdGl2ZUlucHV0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IG5ld1ZhbCA9IFsuLi52ZXJpZnlDb2RlXTtcbiAgICBuZXdWYWxbY3VycmVudElucHV0SW5kZXhdID0gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmxlbmd0aCAtIDEpO1xuICAgIGlmICghdmFsdWUpIHNldEFjdGl2ZUlucHV0SW5kZXgoY3VycmVudElucHV0SW5kZXggLSAxKTtcbiAgICBlbHNlIHNldEFjdGl2ZUlucHV0SW5kZXgoY3VycmVudElucHV0SW5kZXggKyAxKTtcbiAgICBzZXRWZXJpZnlDb2RlKG5ld1ZhbCk7XG4gICAgc2V0Rm9ybURhdGEoeyBGQUNvZGU6IG5ld1ZhbC5qb2luKFwiXCIpIH0pO1xuICB9O1xuICBjb25zb2xlLmxvZyhcImFjdGl2ZUlucHV0SW5kZXhcIiwgYWN0aXZlSW5wdXRJbmRleCk7XG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoXG4gICAgZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICBpbmRleDogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnN0IHsga2V5IH0gPSBlO1xuICAgIGN1cnJlbnRJbnB1dEluZGV4ID0gaW5kZXg7XG4gICAgaWYgKGtleSA9PT0gXCJCYWNrc3BhY2VcIikgc2V0QWN0aXZlSW5wdXRJbmRleChjdXJyZW50SW5wdXRJbmRleCAtIDEpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VGltZXIoKHByZXZUaW1lKSA9PiAocHJldlRpbWUgPT09IDAgPyA2MCA6IHByZXZUaW1lIC0gMSkpO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoRm9ybSB0ZXh0LWNlbnRlciBtZDpncmlkIGdyaWQtY29scy03IGdhcC04IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPFRlc3RpbW9uaWFsIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgbWF4LXNtOmZsZXggbWF4LXNtOmZsZXgtY29sIG1heC1zbTpqdXN0aWZ5LWJldHdlZW4gZm9ybUlucHV0IGNvbC1zcGFuLTQgcHgtNSBtZDp3LTYvMTIgbWQ6bXgtYXV0byBtZDpteS1hdXRvIFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWF4LXNtOm10LTEyIGZvcm1faGVhZGVyIG1heC1zbTp0ZXh0LWxlZnQgdGV4dC0yeGwgbWQ6Zm9udC1ib2xkIHRleHQtZ3JleURhcmsgXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXNtOm10LTEwXCI+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1wQ29sb3IgbXktMVwiPlxuICAgICAgICAgICAgICBFbnRlciB0aGUgdmVyaWZpY2F0aW9uIG51bWJlciBzZW50IHRvXG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfcGhvbmUgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtlZGl0TnVtYmVyID8gKFxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZU51bWJlcn1cbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBmb2N1czpvdXRsaW5lLW5vbmUgcGwtNlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsXCI+e2Zvcm1EYXRhPy5waG9uZU51bWJlcn08L2gzPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuIGN1cnNvci1wb2ludGVyIGNhcGl0YWxpemVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXROdW1iZXIoIWVkaXROdW1iZXIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2VkaXROdW1iZXIgPyBcImRvbmVcIiA6IFwiZWRpdFwifVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7dmVyaWZ5Q29kZS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbmRleCA9PT0gYWN0aXZlSW5wdXRJbmRleCA/IGlucHV0UmVmIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bNjZweF0gaC1bNDhweF0gYm9yZGVyIHJvdW5kZWQgYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgdGV4dC14bCBzcGluLWJ1dHRvbi1ub25lIGJvcmRlci1ub3JtYWxHcmV5IGZvY3VzOmJvcmRlci1ncmVlbiBmb2N1czp0ZXh0LWdyYXktNzAwIHRleHQtZ3JheS00MDAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkZBQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2ZXJpZnlDb2RlW2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBoYW5kbGVLZXlEb3duKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVPbkNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZW5kQ291bnRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAge3RpbWVyfVxuICAgICAgICAgICAgICAgICAgPHNwYW4+czwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICBEaWRu4oCZdCBnZXQgdGhlIE9UUD9cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbiBtbC0xXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCJcIn0+UmVzZW5kIE9UUDwvTGluaz5cbiAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOm1iLTRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNDhweF0gYmctZ3JlZW4gIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIFZlcmlmeSBPVFBcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZXJpZnlGb3JtO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlRlc3RpbW9uaWFsIiwiY3VycmVudElucHV0SW5kZXgiLCJWZXJpZnlGb3JtIiwidGl0bGUiLCJsb2dpbiIsImZvcm1EYXRhIiwidmVyaWZ5Q29kZSIsInNldFZlcmlmeUNvZGUiLCJBcnJheSIsImZpbGwiLCJlZGl0TnVtYmVyIiwic2V0RWRpdE51bWJlciIsInRpbWVyIiwic2V0VGltZXIiLCJzZXRGb3JtRGF0YSIsIkZBQ29kZSIsImpvaW4iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlSW5wdXRJbmRleCIsInNldEFjdGl2ZUlucHV0SW5kZXgiLCJpbnB1dFJlZiIsImhhbmRsZU9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIm5ld1ZhbCIsInN1YnN0cmluZyIsImxlbmd0aCIsImhhbmRsZUtleURvd24iLCJpbmRleCIsImtleSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJhY3Rpb24iLCJvblN1Ym1pdCIsImgzIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwicGhvbmVOdW1iZXIiLCJvbkNsaWNrIiwibWFwIiwiXyIsInJlZiIsIm1heExlbmd0aCIsIm9uS2V5RG93biIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJzcGFuIiwiaDQiLCJocmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/auth/verify/index.tsx\n"));

/***/ })

});