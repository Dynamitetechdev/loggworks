"use strict";
exports.id = 1766;
exports.ids = [1766];
exports.modules = {

/***/ 8949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5642);
/* harmony import */ var _heroicons_react_24_outline_esm_StarIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(347);
/* harmony import */ var _heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7663);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_outline_esm_StarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__]);
([_heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_outline_esm_StarIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Modal = ({ setModalPopUp, modalPop })=>{
    const [uploadedImages, setUploadedImages] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Array(5).fill({
        imageUrl: ""
    }));
    const handleImageChange = (e, index)=>{
        const files = e.target.files;
        const imageUrl = URL.createObjectURL(files[0]);
        setUploadedImages((prev)=>{
            const prevImages = [
                ...prev
            ];
            prevImages[index] = {
                imageUrl
            };
            return prevImages;
        });
        console.log(imageUrl);
    };
    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const count = [
        "10",
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "1",
        "0"
    ];
    const [select, setSelect] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(-1);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "fixed modal-container z-50 w-full bg-green md:p-4 top-0 left-0 h-full flex items-center max-sm:items-end justify-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " w-full mx-auto flex items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative bg-grey80 md:w-[461px] rounded-lg shadow dark:bg-gray-700 ",
                    children: [
                        activeIndex === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-white flex items-center justify-between mb-2 py-4 px-8",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center  ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    src: `/assets/modal/starMark.svg`,
                                                    width: 32,
                                                    height: 32,
                                                    alt: "",
                                                    className: ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[20px] font-bold",
                                                    children: "Job marked complete"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "max-sm:hidden close cursor-pointer",
                                            onClick: ()=>setModalPopUp(!modalPop),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                width: 24,
                                                height: 24
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "px-8 py-4 bg-white flex flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[16px] font-bold",
                                                    children: "Leave a Review"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Reviews help service professionals serve you better"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "rate flex items-center py-3",
                                            children: [
                                                Array(5).fill("").map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mr-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_StarIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                            width: 24,
                                                            height: 24
                                                        })
                                                    }, i)),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "mx-4",
                                                    children: "0.0"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "upload",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex justify-between my-6 max-sm:w-[130%]",
                                                children: uploadedImages.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "",
                                                        children: x.imageUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "rounded w-[57px] h-[68px] my-2 focus:outline-none bg-grey80  md:mb-0 relative ",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "",
                                                                id: "grid-first-name",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                        src: x.imageUrl,
                                                                        width: 54,
                                                                        height: 67,
                                                                        alt: "",
                                                                        objectFit: "cover",
                                                                        objectPosition: "center",
                                                                        className: "object-center object-cover min-h-[108px] max-h-[108px]"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "absolute w-[24px] h-[24px] rounded-full bg-[#7E57CF] flex justify-center items-center text-white -bottom-2 -right-3",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                            width: 16,
                                                                            height: 16
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "border border-dashed border-[#CCCCCC] rounded w-[57px] h-[68px] my-2 focus:outline-none bg-grey80  md:mb-0 relative ",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "text-gray-700  ",
                                                                id: "grid-first-name",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "absolute top-[20px] left-[17px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                            width: 24,
                                                                            height: 24
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        id: "grid-first-name",
                                                                        type: "file",
                                                                        name: "title",
                                                                        onChange: (e)=>handleImageChange(e, i),
                                                                        hidden: true
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "absolute w-[24px] h-[24px] rounded-full bg-[#7E57CF] flex justify-center items-center text-white -bottom-2 -right-3",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                            width: 16,
                                                                            height: 16
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }, i))
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "writeReview",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "x-3 my-2 md:mb-0 w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "capitalize tracking-wide text-md",
                                                        id: "grid-first-name",
                                                        children: "Write a review"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        className: "appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80 h-[108px]",
                                                        id: "grid-first-name",
                                                        placeholder: ""
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "relative bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded ",
                                            onClick: ()=>setActiveIndex(activeIndex + 1),
                                            children: "Submit Review"
                                        })
                                    ]
                                })
                            ]
                        }),
                        activeIndex === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "h-[605px] max-sm:w-[410px] max-sm:rounded",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-white flex items-center justify-between mb-2 py-4 px-8",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    src: `/assets/modal/starMark.svg`,
                                                    width: 32,
                                                    height: 32,
                                                    alt: "",
                                                    className: ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-[20px] font-bold",
                                                    children: "Job marked complete"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "max-sm:hidden close cursor-pointer",
                                            onClick: ()=>setModalPopUp(!modalPop),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                width: 24,
                                                height: 24
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "px-8 py-4 bg-white flex flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: "How likely would you recommend me?"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex my-4 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                            className: "flex flex-col text-center w-[36px] border rounded",
                                                            children: count.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: `py-[7px] text-[14px] border-b hover:bg-green hover:text-white ${select === i && "bg-green text-white"}`,
                                                                    onClick: ()=>setSelect(i),
                                                                    children: x
                                                                }, i))
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex flex-col justify-between py-2 ml-3 font-bold",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Extremely likely"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: "Least likely"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "relative bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded ",
                                            onClick: ()=>setActiveIndex(activeIndex + 1),
                                            children: "Submit"
                                        })
                                    ]
                                })
                            ]
                        }),
                        activeIndex === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-white w-[410px] md:w-[511px] h-[404px] md:rounded-md rounded-lg shadow dark:bg-gray-700 md:px-8 px-6 py-6 flex flex-col items-center md:justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "max-sm:hidden close cursor-pointer absolute right-6 top-5",
                                        onClick: ()=>setModalPopUp(false),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            width: 24,
                                            height: 24
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: `/assets/modal/starMark.svg`,
                                        width: 80,
                                        height: 80,
                                        alt: "",
                                        className: "md:-mb-20 mt-10"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "font-semibold text-2xl max-sm:my-5 max-sm:mb-16",
                                        children: "Review submitted!"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "relative bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded ",
                                        onClick: ()=>setModalPopUp(!modalPop),
                                        children: "Close"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const SwitchMiniNav = ({ switchOptions, activeSwitchIndex, handleSelectSwitch })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "flex items-center text-center px-1 rounded border-b border-grey cursor-pointer",
            children: switchOptions.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: `w-1/2  py-3 capitalize  ${activeSwitchIndex === i && "border-b-2 border-green text-green font-bold"} `,
                    onClick: ()=>handleSelectSwitch(i, x),
                    children: x
                }, i))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchMiniNav);


/***/ }),

/***/ 8420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const TabNav = ({ options, activeTab, handleActive, setSelectedOptions })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "tab",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "flex items-center text-center bg-lightWhite h-[52px] p-1 rounded cursor-pointer",
            children: options.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: `w-1/2 rounded  py-2.5 capitalize ${activeTab === x && "bg-white text-green font-bold"} `,
                    onClick: ()=>{
                        handleActive(x);
                        setSelectedOptions(x.toLowerCase() === "bookings" ? "current" : x.toLowerCase() === "review" && "reviews");
                    },
                    children: x
                }, i))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabNav);


/***/ })

};
;