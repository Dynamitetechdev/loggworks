"use strict";
(() => {
var exports = {};
exports.id = 9603;
exports.ids = [9603,660];
exports.modules = {

/***/ 5064:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8198);
/* harmony import */ var private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1105);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/search",
        pathname: "/search",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_search_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1757);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _general_starReview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9049);





const DealsOfTheDay = ()=>{
    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [deals, setDeals] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Array(4).fill(""));
    const handleSlideChange = (index)=>{
        setActiveSlide(index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "deals max-sm:py-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-[20px] font-bold",
                children: "Deals and offers"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "deals md:grid grid-cols-8 gap-4 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden ",
                children: deals.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-md:flex-shrink-0 md:col-span-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "card max-w-lg min-md:w-[374px] bg-white rounded-lg my-5 shadow relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_wishlist__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: "/assets/images/promotions/01.png",
                                        width: 380,
                                        height: 140,
                                        alt: "object-fit",
                                        className: "min-w-[374px]"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "card_content md:p-3 p-2 text-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "title flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            src: "/assets/images/client_test.png",
                                                            width: 24,
                                                            height: 24,
                                                            alt: "brand_logo ",
                                                            className: "mr-2"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "font-bold text-[14px]",
                                                            children: "Elite Carpenters"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center my-1 min-md:text-[14px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_starReview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mx-1",
                                                            children: "5.0"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "(300k)"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "job_category ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "mt-2",
                                                    children: "Job category"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "flex my-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bg-lightWhite px-3 py-1 rounded-full mr-2",
                                                            children: "Power contractors"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bg-lightWhite px-3 py-1 rounded-full mr-2",
                                                            children: "Generator installation"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-between mb-3 min-md:text-[14px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: "Get 20% off 5 weeks booking"
                                                }),
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                    className: "text-timerColor font-bold",
                                                    children: [
                                                        "Ends in: ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "ml-2",
                                                            children: "04:34:40"
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "w-full py-[4px] text-green text-[14px] font-bold py-2 px-4 border-2 border-green rounded mb-4",
                                            children: "Request Quote"
                                        })
                                    ]
                                })
                            ]
                        })
                    }, i))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "banner_nav flex items-center my-5 justify-center",
                    children: deals.map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handleSlideChange(index),
                            className: `w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full ${activeSlide === index ? "bg-green" : "bg-grey80"}`
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DealsOfTheDay);


/***/ }),

/***/ 8489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_cards_cardSmall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6346);



const OthersResults = ()=>{
    const [reccomendation, setReccomendation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(""));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " reccomendation my-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid grid-cols-9 max-sm:grid-cols-10  gap-5",
            children: reccomendation.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-span-3 max-sm:col-span-5 shadow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_cards_cardSmall__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        reccomend: true
                    })
                }, i))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OthersResults);


/***/ }),

/***/ 9139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _general_wishlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1757);
/* harmony import */ var _general_starReview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9049);





const Promotions = ()=>{
    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [deals, setDeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(2).fill(""));
    const handleSlideChange = (index)=>{
        setActiveSlide(index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "deals max-sm:py-3 pt-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-[18px] font-bold",
                        children: "Promotions"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ad text-[12px] bg-yellow py-1 px-2 rounded-md ml-3 text-white",
                        children: "Ads"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "deals md:grid grid-cols-8 gap-4 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden ",
                children: deals.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-md:flex-shrink-0 md:col-span-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "card max-w-[358px] min-md:w-[358px] bg-white rounded-lg my-5 shadow relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_wishlist__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: "/assets/images/promotions/01.png",
                                        width: 358,
                                        height: 140,
                                        alt: "object-fit",
                                        className: "max-w-[358px] max-h-[118px]"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "card_content md:p-3 p-2 text-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "title flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            src: "/assets/images/client_test.png",
                                                            width: 24,
                                                            height: 24,
                                                            alt: "brand_logo ",
                                                            className: "mr-2"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "font-bold text-[14px]",
                                                            children: "Elite Carpenters"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center my-1 min-md:text-[14px]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_starReview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mx-1",
                                                            children: "5.0"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "(300k)"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "job_category ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: "Job category"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "flex my-3 ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bg-lightWhite px-3 py-1 rounded-full mr-2",
                                                            children: "Power contractors"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "bg-lightWhite px-3 py-1 rounded-full mr-2",
                                                            children: "Generator installation"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "w-full py-[4px] text-green text-[14px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4",
                                            children: "Request Quote"
                                        })
                                    ]
                                })
                            ]
                        })
                    }, i))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "banner_nav flex items-center my-5 justify-center",
                    children: deals.map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handleSlideChange(index),
                            className: `w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full ${activeSlide === index ? "bg-green" : "bg-grey80"}`
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promotions);


/***/ }),

/***/ 1105:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _heroicons_react_24_outline_esm_AdjustmentsHorizontalIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1734);
/* harmony import */ var _heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5587);
/* harmony import */ var _heroicons_react_24_outline_esm_StarIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(347);
/* harmony import */ var _components_general_nav_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6983);
/* harmony import */ var _components_general_sideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(515);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_searchComponents_promotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9139);
/* harmony import */ var _components_searchComponents_dealsOfDay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1481);
/* harmony import */ var _components_searchComponents_others__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8489);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline_esm_AdjustmentsHorizontalIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_StarIcon__WEBPACK_IMPORTED_MODULE_3__, _components_general_nav_header__WEBPACK_IMPORTED_MODULE_4__, _components_general_sideBar__WEBPACK_IMPORTED_MODULE_5__]);
([_heroicons_react_24_outline_esm_AdjustmentsHorizontalIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_StarIcon__WEBPACK_IMPORTED_MODULE_3__, _components_general_nav_header__WEBPACK_IMPORTED_MODULE_4__, _components_general_sideBar__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Search = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const goBack = ()=>{
        router.back();
    };
    const filterOptions = [
        {
            name: "star rating",
            options: [
                5,
                4,
                3,
                2,
                1
            ]
        },
        {
            name: "distance",
            options: [
                10,
                20,
                60,
                80,
                100
            ]
        },
        {
            name: "tradesmen",
            options: [
                "Electricians",
                "Plumbers",
                "Handyman",
                "Painter",
                "Builder",
                "Roofer",
                "Solar Interior designers",
                "Construction",
                "Plasterers"
            ]
        }
    ];
    const [sortOption, setSortOption] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("relevance");
    const [optionCategory, setOptionCategory] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(0);
    const [optionIndex, setOptionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(0);
    const [openSortBox, setOpenSortBox] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [openFilter, setOpenFilter] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [openOptionCategory, setOpenOptionCategory] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(Array(filterOptions.length).fill(true));
    const handleSelected = (option, optionIndex)=>{
        console.log(option);
        setSortOption(option);
        setOptionIndex(optionIndex);
    };
    const handleFiltersSelected = (categoryIndex, optionIndex)=>{
        if (categoryIndex >= 0) {
            setOpenOptionCategory((prevOpen)=>prevOpen.map((open, i)=>i === categoryIndex ? !open : open));
        }
    };
    const options = [
        "relevance",
        "distance",
        "most Reviewed",
        "ratings"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "md:grid md:grid-cols-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_sideBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "main md:col-span-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_nav_header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "content_body max-sm:block md:grid md:grid-cols-12 md:pt-14 ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "main col-span-9 bg-white relative md:mb-16 md:px-10 px-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mobile_filter md:hidden flex items-center justify-between text-[16px]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center ",
                                                onClick: ()=>{
                                                    setOpenFilter(!openFilter), setOpenSortBox(false);
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_AdjustmentsHorizontalIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                        width: 20,
                                                        height: 20
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "ml-1",
                                                        children: "Filter"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "border border-grey rounded-md px-4 py-1 flex items-center",
                                                onClick: ()=>{
                                                    setOpenSortBox(!openSortBox), setOpenFilter(false);
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Sort"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                        width: 20,
                                                        height: 20
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mobile_options md:hidden",
                                        children: [
                                            openFilter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute bg-white top-4 left-0 w-full z-50 all_promotions overflow-y-scroll h-[calc(90vh-4rem)] px-4 mt-7",
                                                    children: filterOptions.map((category, categoryIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "rating",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "head flex items-center justify-between cursor-pointer",
                                                                    onClick: ()=>{
                                                                        handleFiltersSelected(categoryIndex, -1);
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            className: "font-bold text-[16px] capitalize mt-4",
                                                                            children: category.name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                            width: 24,
                                                                            height: 24
                                                                        })
                                                                    ]
                                                                }),
                                                                openOptionCategory[categoryIndex] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "sortOptions",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "option my-3",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                            children: category.options.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                    className: "flex items-center mb-3 capitalize",
                                                                                    onClick: ()=>{
                                                                                        // handleSelected(x);
                                                                                        setOptionIndex(i);
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                            className: "w-[24px] relative h-[24px] border border-grey bg-[#DFDFDF] rounded flex items-center justify-center",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                type: "checkbox",
                                                                                                name: "",
                                                                                                id: "",
                                                                                                className: "form-checkbox-square w-[24px] h-[24px] rounded"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            className: "ml-3 mr-1 text-[18px]",
                                                                                            children: x
                                                                                        }),
                                                                                        category.name === "distance" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                            children: "miles"
                                                                                        }),
                                                                                        category.name === "star rating" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                    className: "mr-2",
                                                                                                    children: "Star"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "flex items-center",
                                                                                                    children: Array(5).fill("").reverse().map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                            className: "text-green  mr-1",
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_StarIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                                                                width: 16,
                                                                                                                height: 16
                                                                                                            })
                                                                                                        }, i))
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }, i))
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }, `sorting-${categoryIndex}`))
                                                })
                                            }),
                                            openSortBox && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "sortOptions",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "option ml-5 mt-4",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        children: options.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                className: "flex items-center mb-3 capitalize",
                                                                onClick: ()=>{
                                                                    handleSelected(x, i);
                                                                    setOptionIndex(i);
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        className: "w-[24px] h-[24px] border border-green rounded-full flex items-center justify-center",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "checkbox",
                                                                            name: "",
                                                                            id: "",
                                                                            className: "form-checkbox rounded-full ",
                                                                            checked: optionIndex === i
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "mx-3 text-[18px]",
                                                                        children: x
                                                                    })
                                                                ]
                                                            }, i))
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "nav_head flex items-center md:py-3 py-3  border-b  border-grey80",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center w-full md:justify-between md:justify-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-bold capitalize text-[17px] max-md:text-left md:text-[20px] mt-2",
                                                children: "Electricians near Coventry"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_searchComponents_others__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_searchComponents_promotion__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_searchComponents_dealsOfDay__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_searchComponents_others__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_searchComponents_promotion__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_searchComponents_others__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center mt-16",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "mx-auto text-green font-bold py-2 px-8 border-2 border-green rounded mb-4",
                                            children: "Load More"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "max-sm:hidden bg-white md:z-20 py-2 px-3 md:col-span-3 md:-ml-8 relative z-50",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "md:fixed w-[292px] py-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "head flex items-center justify-between rounded  py-3 px-5 border border-grey80 text-[16px] cursor-pointer",
                                            onClick: ()=>setOpenSortBox(!openSortBox),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "font-bold",
                                                    children: "Sort By"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "capitalize",
                                                    children: sortOption
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    width: 24,
                                                    height: 24
                                                })
                                            ]
                                        }),
                                        openSortBox && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "sortOptions",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "option ml-5 mt-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    children: options.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            className: "flex items-center mb-3 capitalize",
                                                            onClick: ()=>{
                                                                handleSelected(x, i);
                                                                setOptionIndex(i);
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "w-[24px] h-[24px] border border-green rounded-full flex items-center justify-center",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "checkbox",
                                                                        name: "",
                                                                        id: "",
                                                                        className: "form-checkbox rounded-full ",
                                                                        checked: optionIndex === i
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "mx-3 text-[18px]",
                                                                    children: x
                                                                })
                                                            ]
                                                        }, i))
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-[20px] mt-3",
                                            children: "Filters"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "all_promotions md:overflow-y-scroll md:h-[calc(85vh-4rem)] max-md:flex mt-7",
                                            children: [
                                                filterOptions.map((category, categoryIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "rating",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "head flex items-center justify-between cursor-pointer",
                                                                onClick: ()=>{
                                                                    handleFiltersSelected(categoryIndex, -1);
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                        className: "font-bold text-[16px] capitalize py-2",
                                                                        children: category.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                        width: 24,
                                                                        height: 24
                                                                    })
                                                                ]
                                                            }),
                                                            openOptionCategory[categoryIndex] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "sortOptions",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "option my-3",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                        children: category.options.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                className: "flex items-center text-[18px] mb-3 capitalize",
                                                                                onClick: ()=>{
                                                                                    // handleSelected(x);
                                                                                    setOptionIndex(i);
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                        className: "w-[24px] relative h-[24px] border border-grey bg-[#DFDFDF] rounded flex items-center justify-center",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            name: "",
                                                                                            id: "",
                                                                                            className: "form-checkbox-square w-[24px] h-[24px] rounded"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                        className: "ml-3 mr-1 text-[18px]",
                                                                                        children: x
                                                                                    }),
                                                                                    category.name === "distance" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                        children: "miles"
                                                                                    }),
                                                                                    category.name === "star rating" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                className: "mr-2",
                                                                                                children: "Star"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "flex items-center",
                                                                                                children: Array(5).fill("").reverse().map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                        className: "text-green  mr-1",
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_StarIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                                                            width: 16,
                                                                                                            height: 16
                                                                                                        })
                                                                                                    }, i))
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }, i))
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }, `sorting-${categoryIndex}`)),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "bg-[#F6F6F6] py-10 px-10 rounded-lg my-10",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "text-[20px] font-semibold",
                                                            children: "Do you have a professional service to offer?"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-[16px] my-3 text-grey20",
                                                            children: "Post a job with your price in mind, then get offers"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "bg-green text-white w-full h-[32px] text-[14px] font-bold px-4 rounded",
                                                            children: "Become a Professional"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 1734:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/AdjustmentsHorizontalIcon");;

/***/ }),

/***/ 7628:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/CalendarIcon");;

/***/ }),

/***/ 4591:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ChatBubbleOvalLeftEllipsisIcon");;

/***/ }),

/***/ 5587:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ChevronDownIcon");;

/***/ }),

/***/ 5647:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/HomeIcon");;

/***/ }),

/***/ 9962:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ListBulletIcon");;

/***/ }),

/***/ 4775:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/MagnifyingGlassIcon");;

/***/ }),

/***/ 9641:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/MapPinIcon");;

/***/ }),

/***/ 347:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/StarIcon");;

/***/ }),

/***/ 2243:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/UserCircleIcon");;

/***/ }),

/***/ 9113:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/UserIcon");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2940,9815,2636,3061,8198,515,6983,190,6346], () => (__webpack_exec__(5064)));
module.exports = __webpack_exports__;

})();