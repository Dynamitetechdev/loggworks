"use strict";
exports.id = 6910;
exports.ids = [6910];
exports.modules = {

/***/ 6910:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7663);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_1__]);
_heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const GeneralModal = ({ message, setModalPopUp, modalPop, img, optionalMsg })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "fixed modal-container z-50 w-full bg-green md:p-4 top-0 left-0 h-full flex items-center max-sm:items-end justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " w-full max-w-2xl  mx-auto flex items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative bg-white md:w-[511px] h-[374px] md:rounded-md rounded-lg shadow dark:bg-gray-700 md:px-8 px-6 py-6 flex flex-col items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "max-sm:hidden close cursor-pointer absolute right-6 top-5",
                            onClick: ()=>setModalPopUp(false),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                width: 24,
                                height: 24
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: `/assets/modal/${img}.svg`,
                            width: 80,
                            height: 80,
                            alt: "",
                            className: "md:-mb-20 mt-10"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "font-semibold text-2xl max-sm:my-5 max-sm:mb-16",
                            children: message
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "-mt-20 text-[#4B4B4B]",
                            children: optionalMsg
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "relative bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded ",
                            onClick: ()=>setModalPopUp(!modalPop),
                            children: "Close"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;