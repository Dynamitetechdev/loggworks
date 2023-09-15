"use strict";
exports.id = 3940;
exports.ids = [3940];
exports.modules = {

/***/ 3940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8923);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_1__]);
_heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const NavHead = ({ activeStep, setActiveStep, title, type })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const goBack = ()=>{
        if (activeStep) {
            if (activeStep != 0) {
                setActiveStep(activeStep - 1);
            }
        } else {
            router.back();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            type === "notab" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "nav_head flex items-center py-3 md:mx-6 mx-3 border-b border-grey80",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "back z-10 md:border border-grey80 w-[40px] h-[40px] flex items-center justify-center",
                        onClick: ()=>goBack(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            width: 20,
                            height: 20
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:w-5/12 w-full md:relative md:left-[26%] max-md:flex max-md:justify-center max-md:-ml-[40px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-start",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "font-bold capitalize md:text-[20px] text-[16px]",
                                children: title
                            })
                        })
                    })
                ]
            }),
            type == "plain" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "nav_head flex items-center md:py-5 py-3 md:mx-6 mx-3 border-b  border-grey80",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center md:w-8/12 w-full justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "font-bold capitalize md:text-[20px] text-[16px]",
                        children: title
                    })
                })
            }),
            type === "notab-size" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "nav_head flex items-center py-3 md:mx-6 mx-3 border-b  border-grey80",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "back z-10 md:border border-grey80 w-[40px] h-[40px] flex items-center justify-center",
                        onClick: ()=>goBack(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ChevronLeftIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            width: 20,
                            height: 20
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center md:w-4/12 w-full justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "font-bold capitalize md:text-[20px] text-[16px]",
                            children: title
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavHead);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;