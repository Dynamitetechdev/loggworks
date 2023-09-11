exports.id = 1594;
exports.ids = [1594];
exports.modules = {

/***/ 1594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4463);
/* harmony import */ var react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_style_css__WEBPACK_IMPORTED_MODULE_4__);





const ResetForm = ({ title, newPassword, sub })=>{
    const [numberReactInput, setNumberReactInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        email: "",
        newPassword: "",
        confirmPassword: ""
    });
    const handleOnChange = (event)=>{
        setFormData((prevData)=>({
                ...prevData,
                [event.target.name]: event.target.value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    };
    console.log(numberReactInput);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "authForm text-center h-screen",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "right flex flex-col formInput px-5 md:w-3/12 md:mx-auto md:my-auto ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "logo mx-auto my-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "/assets/images/Logo-green.png",
                        width: 197,
                        height: 32,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "max-sm:mt-12 max-sm:text-center form_header max-sm:text-left text-2xl font-bold text-greyDark md:my-5",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-center text-greyDark",
                    children: sub
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-sm:mt-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        action: "",
                        onSubmit: handleSubmit,
                        children: !newPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "md:mb-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "password mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-700 text-sm font-bold mb-1 text-left",
                                            id: "email",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Email"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]",
                                                id: "email",
                                                type: "email",
                                                name: "email",
                                                value: formData.email,
                                                onChange: handleOnChange
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "mb-10 w-full h-[48px] bg-green  font-bold py-2 px-4 rounded",
                                    children: newPassword ? "Reset password" : "Send reset link"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/login",
                                    className: "text-center underline text-green",
                                    children: "Back to login"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "md:my-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "password mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-700 text-sm font-bold mb-1 text-left",
                                            id: "newPassword",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "New password"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]",
                                                id: "newPassword",
                                                type: "text",
                                                name: "newPassword",
                                                value: formData.newPassword,
                                                onChange: handleOnChange
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "password mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block text-gray-700 text-sm font-bold mb-1 text-left",
                                            id: "confirmPassword",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "New password"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]",
                                                id: "confirmPassword",
                                                type: "text",
                                                name: "confirmPassword",
                                                value: formData.confirmPassword,
                                                onChange: handleOnChange
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "w-full h-[48px] bg-green  font-bold py-2 px-4 rounded",
                                    children: newPassword ? "Reset password" : "Send reset link"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "absolute bottom-5 left-1/2 transform -translate-x-1/2",
                    children: "Privacy policy"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetForm);


/***/ }),

/***/ 4463:
/***/ (() => {



/***/ })

};
;