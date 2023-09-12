"use strict";
exports.id = 7085;
exports.ids = [7085];
exports.modules = {

/***/ 6712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const BannerCarousel = ()=>{
    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const slideImages = [
        "/assets/images/banner/01.png",
        "/assets/images/promotions/01.png",
        "/assets/images/client_test.png"
    ];
    const handleSlideChange = (index)=>{
        setActiveSlide(index);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            const nextSlide = (activeSlide + 1) % slideImages.length;
            setActiveSlide(nextSlide);
        }, 3000); // Change slide every 2 seconds
        return ()=>{
            clearInterval(interval);
        };
    }, [
        activeSlide,
        slideImages.length
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "banner mx-3 my-2 md:mt-24",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "banner_img md:mt-5 relative flex flex-col items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full max-sm:h-[146px] h-[390px] overflow-hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "transition-transform duration-500 ease-in-out transform",
                        style: {
                            transform: `translateX(-${activeSlide * 980}px)`
                        },
                        children: slideImages.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full max-sm:h-[146px] h-[390px] absolute",
                                style: {
                                    left: `${index * 980}px`
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: image,
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    alt: `slide-${index}`,
                                    className: "object-center object-cover md:rounded-lg"
                                })
                            }, index))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "banner_nav flex items-center my-5",
                    children: slideImages.map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handleSlideChange(index),
                            className: `w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full ${activeSlide === index ? "bg-green" : "bg-grey80"}`
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerCarousel);


/***/ }),

/***/ 6047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5647);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_1__]);
_heroicons_react_24_outline_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Categories = ()=>{
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:fixed bg-white md:z-10 top-12 categories border-b md:my-2 border-categoriesColor md:w-[1050px]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center max-md:overflow-x-auto md:hover:overflow-auto md:hover:overflow-x-scroll",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "max-md:mb-4 flex items-center md:px-7 max-md:px-3 transition-transform duration-300",
                children: categories.map((x, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: "flex items-center md:my-4 py-2 px-3 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer mr-3 ",
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
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_cards_cardSmall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6346);



const AdsPromotions = ()=>{
    const [promotions, setPromotion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(""));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-sm:hidden promotion bg-[#FEFEFE] md:z-20 py-2 px-3 md:col-span-3 relative ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "md:fixed",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "head flex items-center py-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-[18px]",
                            children: "Promotions"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "ad bg-[#E2B801] text-[12px] py-1 px-2 rounded-md mx-3 text-white",
                            children: "Ads"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "all_promotions  md:overflow-y-scroll md:h-[calc(100vh-4rem)] max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden",
                    children: promotions.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "max-md:flex-shrink-0 max-md:mb-16",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_cards_cardSmall__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                        }, i))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdsPromotions);


/***/ }),

/***/ 1254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ dealOfTheDay)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/general/starReview.tsx
var starReview = __webpack_require__(9049);
// EXTERNAL MODULE: ./components/general/wishlist.tsx
var wishlist = __webpack_require__(1757);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/general/cards/cardLarge.tsx





const CardLarge = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "card max-w-lg min-md:w-[374px] bg-white rounded-lg my-5 shadow relative",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(wishlist/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: "/assets/images/promotions/01.png",
                    width: 380,
                    height: 140,
                    alt: "object-fit",
                    className: "min-w-[374px]"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "card_content md:p-3 p-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "title flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: "/assets/images/client_test.png",
                                        width: 24,
                                        height: 24,
                                        alt: "brand_logo ",
                                        className: "mr-2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "font-bold",
                                        children: "Elite Carpenters"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center my-1 min-md:text-[14px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(starReview/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "mx-1",
                                        children: "5.0"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "(300k)"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "job_category min-md:text-[14px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: "Job category"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: "flex my-3 ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "bg-lightWhite px-3 py-1 rounded-full mr-2",
                                        children: "Power contractors"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "bg-lightWhite px-3 py-1 rounded-full mr-2",
                                        children: "Generator installation"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between mb-3 min-md:text-[14px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                children: "Get 20% off 5 weeks booking"
                            }),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                                className: "text-timerColor font-bold",
                                children: [
                                    "Ends in: ",
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "ml-2",
                                        children: "04:34:40"
                                    }),
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/sampleCategory/Elite Carpenters/",
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "w-full py-[4px] text-green text-[14px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4",
                            children: "Request Quote"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const cardLarge = (CardLarge);

;// CONCATENATED MODULE: ./components/mainPageTabs/dealOfTheDay.tsx



const DealOfTheDay = ()=>{
    const [activeSlide, setActiveSlide] = (0,external_react_.useState)(0);
    const [deals, setDeals] = (0,external_react_.useState)(Array(4).fill(""));
    const handleSlideChange = (index)=>{
        setActiveSlide(index);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "deals px-3 max-sm:py-3 md:mx-10",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-2xl font-bold max-sm:text-[18px]",
                children: "Deal of the day"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "deals md:grid grid-cols-8 gap-4 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden ",
                children: deals.map((_, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "max-md:flex-shrink-0 md:col-span-4",
                        children: /*#__PURE__*/ jsx_runtime.jsx(cardLarge, {})
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "md:hidden",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "banner_nav flex items-center my-5 justify-center",
                    children: deals.map((_, index)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                            onClick: ()=>handleSlideChange(index),
                            className: `w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full ${activeSlide === index ? "bg-green" : "bg-grey80"}`
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const dealOfTheDay = (DealOfTheDay);


/***/ }),

/***/ 4989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ explore)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/general/cards/cardPlain.tsx


const CardPlain = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "card  bg-white rounded-lg my-2 mr-5",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: "/assets/images/promotions/01.png",
                    width: 360,
                    height: 140,
                    alt: "",
                    className: "rounded-t-lg"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "card_content md:py-3 max-sm:text-[14px] max-sm:my-1",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "title",
                    children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        children: "Elite Carpenters"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const cardPlain = (CardPlain);

;// CONCATENATED MODULE: ./components/mainPageTabs/explore.tsx



const Explore = ()=>{
    const [explore, setExplore] = (0,external_react_.useState)(Array(6).fill(""));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "explore md:mx-10 mx-3",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-2xl font-bold my-3 max-sm:text-[18px]",
                children: "Explore"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "md:grid grid-cols-9 gap-0 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden",
                children: explore.map((_, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "md:col-span-3 max-md:flex-shrink-0 max-sm:w-[177px]",
                        children: /*#__PURE__*/ jsx_runtime.jsx(cardPlain, {})
                    }, i))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "md:hidden grid grid-cols-9 gap-0 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden",
                children: explore.map((_, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "md:col-span-3 max-md:flex-shrink-0 max-sm:w-[177px]",
                        children: /*#__PURE__*/ jsx_runtime.jsx(cardPlain, {})
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const explore = (Explore);


/***/ }),

/***/ 6527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_cards_cardSmall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6346);



const MobileAds = ()=>{
    const [promotions, setPromotion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(""));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:hidden promotion bg-sideBarColor py-2 px-3 relative ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "head flex items-center py-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "ad bg-yellow py-1 px-2 rounded-md mr-3 text-white",
                            children: "Ads"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-1xl",
                            children: "Promotions"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " all_promotions flex overflow-x-scroll scrolling-touch overflow-x-hidden",
                    children: promotions.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "max-md:flex-shrink-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_cards_cardSmall__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                        }, i))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileAds);


/***/ }),

/***/ 1679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_cards_cardMedium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5685);



const Offers = ()=>{
    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [offers, setOffers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(""));
    const handleSlideChange = (index)=>{
        setActiveSlide(index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "Offers max-sm:py-3 px-3 md:mx-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl font-bold my-3 max-sm:text-[18px]",
                children: "Offers"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:grid grid-cols-9 gap-5 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch ",
                children: offers.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:col-span-3 max-md:flex-shrink-0 max-sm:w-[200px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_cards_cardMedium__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offers);


/***/ }),

/***/ 6761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_cards_cardSmall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6346);



const Recommendations = ()=>{
    const [reccomendation, setReccomendation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(""));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " reccomendation mx-3 md:mx-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl max-sm:text-[18px] font-bold my-3",
                children: "Recommendations"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:grid grid-cols-9  gap-5 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden",
                children: reccomendation.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:col-span-3 max-md:flex-shrink-0 max-sm:w-[177px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_cards_cardSmall__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            reccomend: true
                        })
                    }, i))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:hidden grid grid-cols-9  gap-5 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden",
                children: reccomendation.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:col-span-3 max-md:flex-shrink-0 max-sm:w-[177px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_cards_cardSmall__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            reccomend: true
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recommendations);


/***/ }),

/***/ 202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _general_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6047);
/* harmony import */ var _general_bannerCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6712);
/* harmony import */ var _mainPageTabs_dealOfTheDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1254);
/* harmony import */ var _mainPageTabs_offers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1679);
/* harmony import */ var _mainPageTabs_reccomendation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6761);
/* harmony import */ var _mainPageTabs_explore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4989);
/* harmony import */ var _mainPageTabs_adsPromotions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4503);
/* harmony import */ var _mainPageTabs_mobileAds__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6527);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_general_categories__WEBPACK_IMPORTED_MODULE_2__]);
_general_categories__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const HomeTab = ()=>{
    const [deals, setDeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(""));
    const [promotions, setPromotion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(""));
    const [reccomendation, setReccomendation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(""));
    const [offers, setOffers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(""));
    const [explore, setExplore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(6).fill(""));
    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleSlideChange = (index)=>{
        setActiveSlide(index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content_body max-sm:block h-screen md:grid md:grid-cols-12 md:pt-14 ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "main col-span-9 bg-white relative md:mb-16",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_categories__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_bannerCarousel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mainPageTabs_dealOfTheDay__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mainPageTabs_mobileAds__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mainPageTabs_offers__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mainPageTabs_mobileAds__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mainPageTabs_reccomendation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mainPageTabs_explore__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mainPageTabs_mobileAds__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mainPageTabs_adsPromotions__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(515);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_general_nav_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6983);
/* harmony import */ var _components_pageTabs_homeTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(202);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__, _components_general_nav_header__WEBPACK_IMPORTED_MODULE_3__, _components_pageTabs_homeTab__WEBPACK_IMPORTED_MODULE_4__]);
([_components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__, _components_general_nav_header__WEBPACK_IMPORTED_MODULE_3__, _components_pageTabs_homeTab__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const HomePage = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "md:grid md:grid-cols-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "main md:col-span-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_nav_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pageTabs_homeTab__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;