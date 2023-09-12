"use strict";
exports.id = 6983;
exports.ids = [6983];
exports.modules = {

/***/ 7811:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5647);
/* harmony import */ var _heroicons_react_24_outline_esm_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4775);
/* harmony import */ var _heroicons_react_24_outline_esm_MapPinIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9641);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_outline_esm_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_MapPinIcon__WEBPACK_IMPORTED_MODULE_3__]);
([_heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_outline_esm_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_MapPinIcon__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const LocationSearch = ()=>{
    const categories = [
        {
            title: "Health, wellness & beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        },
        {
            title: "beauty",
            image: "home",
            activeImage: "home-green"
        }
    ];
    const [openSearch, setOpenSearch] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const handleOnChange = (e)=>{
        if (e.target.value.length <= 0) {
            setOpenSearch(false);
        } else {
            setOpenSearch(true);
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "location_search max-md:mt-5 max-md:mb-4 w-full md:w-[420px] h-[44px] text-[16px] border border-grey rounded",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: (e)=>handleSubmit(e),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex items-center w-full text-grey40",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                id: "default-search",
                                className: "w-full pl-2 text-sm text-gray-900 outline-none",
                                placeholder: "Electrician",
                                onChange: (e)=>handleOnChange(e)
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-span-6 relative border-l border-grey flex items-center py-[3px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mx-[6px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_MapPinIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                width: 20,
                                                height: 24
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            id: "default-search",
                                            className: "w-full outline-none text-sm text-gray-900 md:pr-10",
                                            placeholder: "Location or postcode",
                                            onChange: (e)=>handleOnChange(e)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: " py-[9px] text-grey40 px-4 items-center bg-none hover:bg-green hover:text-white",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        width: 20,
                                        height: 24
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            openSearch && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "searchDetail",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed modal-container z-50 w-full bg-green top-[130px] md:top-[60px] left-0 h-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full mx-auto text-grey40",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative bg-white w-full md:w-[420px] h-[369px] rounded py-4 shadow dark:bg-gray-700 px-4 md:px-4 md:left-[18%]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-[16px]",
                                        children: "service categories"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "md:w-[380px] border-b border-categoriesColor mt-3 text-dark",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center overflow-x-hidden",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "max-md:mb-4 flex items-center md:px-3 transition-transform duration-300 overflow-x-scroll scrolling-touch text-[14px]",
                                                children: categories.map((x, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex items-center md:my-2 py-2 px-3 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer mr-3 ",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "w-[14px]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "capitalize text-[14px] ml-1 whitespace-nowrap",
                                                                children: x.title
                                                            })
                                                        ]
                                                    }, `nav--${index}`))
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "text-[16px] mt-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "mb-2",
                                                children: "suggestions"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "suggestions"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationSearch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locationSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7811);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_locationSearch__WEBPACK_IMPORTED_MODULE_2__]);
_locationSearch__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Header = ()=>{
    const mobile_icons = [
        {
            icon: "post_mobile",
            route: "/jobs"
        },
        {
            icon: "wishlist_mobile",
            route: "/"
        }
    ];
    const [openAdminNav, setOpenAdminNav] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "header md:bg-white md:z-50 md:fixed md:w-10/12 md:h-[62px] md:flex justify-between md:border-b border-grey items-center md:px-6 px-3 max-sm:pt-3",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "md:hidden mobile flex items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mobile_log",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: "/assets/images/logo_mobile.png",
                                width: 40,
                                height: 40,
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mobile_nav",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "flex items-center",
                            children: mobile_icons.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: x.route,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "mx-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: `/assets/images/${x.icon}.svg`,
                                            width: 24,
                                            height: 24,
                                            alt: ""
                                        })
                                    })
                                }, i))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_locationSearch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "admin max-md:hidden flex justify-between items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/jobs",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "post flex items-center bg-green p-2.5  text-white rounded mr-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    src: "/assets/icons/nav_icons/plus.svg",
                                    width: 24,
                                    height: 24,
                                    alt: "",
                                    className: "mr-2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Post a job"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/bookmark",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bookmarks flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    src: "/assets/images/wishlist_mobile.svg",
                                    width: 24,
                                    height: 24,
                                    alt: ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-14px",
                                    children: "Bookmarks"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;