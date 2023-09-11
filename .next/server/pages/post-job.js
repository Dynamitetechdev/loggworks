"use strict";
(() => {
var exports = {};
exports.id = 1857;
exports.ids = [1857,660];
exports.modules = {

/***/ 7681:
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
/* harmony import */ var private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4265);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/post-job",
        pathname: "/post-job",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_post_job_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const ProfileCard = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "profile p-4 rounded flex items-center bg-primary100 border border-grey80 mb-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/assets/images/client_test.png",
                width: 20,
                height: 20,
                alt: "",
                className: "mr-2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "font-semibold",
                children: "Devon Lane"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileCard);


/***/ }),

/***/ 6492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5587);
/* harmony import */ var _heroicons_react_24_outline_esm_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4613);
/* harmony import */ var _heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7663);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_outline_esm_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__]);
([_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_outline_esm_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ModalPopup = ({ modalPop, setModalPopUp, optionSelected, setOptionSelected })=>{
    const optionSampleData = [
        {
            id: "1",
            title: "Catering",
            options: [
                "Domestic appliance repair",
                "Appliance repair"
            ]
        },
        {
            id: "2",
            title: "Childcare",
            options: [
                "Domestic appliance repair",
                "Appliance repair"
            ]
        },
        {
            id: "3",
            title: "Entertainment",
            options: [
                "Domestic appliance repair",
                "Appliance repair"
            ]
        },
        {
            id: "4",
            title: "Mobile Mechanic",
            options: [
                "Domestic appliance repair",
                "Appliance repair"
            ]
        },
        {
            id: "4",
            title: "Mobile Mechanic",
            options: [
                "Domestic appliance repair",
                "Appliance repair"
            ]
        },
        {
            id: "4",
            title: "Mobile Mechanic",
            options: [
                "Domestic appliance repair",
                "Appliance repair"
            ]
        },
        {
            id: "4",
            title: "Mobile Mechanic",
            options: [
                "Domestic appliance repair",
                "Appliance repair"
            ]
        },
        {
            id: "4",
            title: "Mobile Mechanic",
            options: [
                "Domestic appliance repair",
                "Appliance repair"
            ]
        },
        {
            id: "4",
            title: "Mobile Mechanic",
            options: [
                "Domestic appliance repair",
                "Appliance repair"
            ]
        },
        {
            id: "4",
            title: "Mobile Mechanic",
            options: [
                "Domestic appliance repair",
                "Appliance repair"
            ]
        }
    ];
    const [optionToggle, setOptionToggle] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(Array(optionSampleData.length).fill(false));
    const handleToggle = (e, index)=>{
        const newToggle = [
            ...optionToggle
        ];
        newToggle[index] = !newToggle[index];
        setOptionToggle(newToggle);
    };
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const handleSelected = (index, optionIndex)=>{
        setOptionSelected(optionSampleData[optionIndex]);
    };
    console.log("Checking", optionSelected);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed modal-container z-50 w-full bg-green md:p-4 top-0 left-0 h-full flex items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " w-full max-w-2xl  mx-auto ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white  md:w-[511px] md:h-[630px] h-screen rounded-md shadow dark:bg-gray-700 md:px-8 px-6 py-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-start justify-between   dark:border-gray-600",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-xl font-semibold text-dark",
                                        children: "Categories"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "close cursor-pointer",
                                        onClick: ()=>setModalPopUp(false),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            width: 24,
                                            height: 24
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                action: "",
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "search",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-5 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80",
                                            placeholder: "Search",
                                            onChange: (e)=>setSearchValue(e.target.value),
                                            value: searchValue
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col h-[660px] justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "max-h-[660px] overflow-y-scroll",
                                                children: optionSampleData.filter((x)=>x.title.toLowerCase().includes(searchValue)).map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: " py-4 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "option_head flex items-center justify-between",
                                                                    onClick: (e)=>handleToggle(e, index),
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex items-center ",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                    src: "/assets/icons/catering.svg",
                                                                                    width: 24,
                                                                                    height: 24,
                                                                                    alt: "",
                                                                                    className: "mr-3"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    children: option.title
                                                                                })
                                                                            ]
                                                                        }),
                                                                        optionToggle[index] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ChevronUpIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                            width: 24,
                                                                            height: 24
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                                            width: 24,
                                                                            height: 24
                                                                        })
                                                                    ]
                                                                }),
                                                                optionToggle[index] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "option ml-5 mt-4",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                        children: option.options.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                className: "flex items-center mb-3 ",
                                                                                onClick: ()=>handleSelected(index, i),
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                        className: "w-[24px] h-[24px] border border-green rounded-full flex items-center justify-center",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            type: "checkbox",
                                                                                            name: "",
                                                                                            id: "",
                                                                                            className: "form-checkbox rounded-full "
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                        className: "mx-3",
                                                                                        children: x
                                                                                    })
                                                                                ]
                                                                            }, i))
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }))
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "relative bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded ",
                                                onClick: ()=>setModalPopUp(!modalPop),
                                                children: "Select Category"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalPopup);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _general_profileCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2802);
/* harmony import */ var _postJobForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1608);
/* harmony import */ var _processIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4813);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_postJobForm__WEBPACK_IMPORTED_MODULE_2__]);
_postJobForm__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const PostJob = ({ activeStep, setActiveStep })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "px-6 md:px-9 pt-10 md:flex ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " process_indicator  md:w-3/12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_processIndicator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    activeStep: activeStep,
                    setActiveStep: setActiveStep
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form_container md:w-5/12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_profileCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_postJobForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        activeStep: activeStep,
                        setActiveStep: setActiveStep
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostJob);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5587);
/* harmony import */ var _heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5642);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modalPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6492);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _general_generalModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6910);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_2__, _modalPopup__WEBPACK_IMPORTED_MODULE_4__, _general_generalModal__WEBPACK_IMPORTED_MODULE_6__]);
([_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_1__, _heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_2__, _modalPopup__WEBPACK_IMPORTED_MODULE_4__, _general_generalModal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PostJobForm = ({ activeStep, setActiveStep })=>{
    const [optionSelected, setOptionSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [formFilled, setFormFilled] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [uploadedImages, setUploadedImages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Array(4).fill({
        imageUrl: ""
    }));
    console.log(uploadedImages);
    console.log("dd", activeStep);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        title: "",
        description: "",
        category: ""
    });
    const [modalPop, setModalPopUp] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "all-forms",
                children: [
                    activeStep == 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        action: "",
                        onSubmit: handleSubmit,
                        className: "text-grey20",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap mb-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "x-3 my-2 md:mb-0 w-full",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "capitalize tracking-wide text-md",
                                                id: "grid-first-name",
                                                children: "First Name"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80",
                                                id: "grid-first-name",
                                                type: "text",
                                                name: "title",
                                                value: formData.title,
                                                onChange: handleOnChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "x-3 my-2 md:mb-0 w-full",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "capitalize tracking-wide text-md",
                                                id: "grid-first-name",
                                                children: "Provide a brief description of the job"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                className: "appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80 h-[108px]",
                                                id: "grid-first-name",
                                                placeholder: ""
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "x-3 my-2 md:mb-0 w-full",
                                        onClick: ()=>setModalPopUp(true),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "capitalize tracking-wide text-md",
                                                id: "grid-first-name",
                                                children: "Category"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80 flex items-center justify-between cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: optionSelected ? `${optionSelected.title} (${optionSelected.options[0]})` : " Choose a category"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_ChevronDownIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                            width: 24,
                                                            height: 24
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded",
                                onClick: ()=>setActiveStep(activeStep + 1),
                                children: "Enter location & Date"
                            })
                        ]
                    }),
                    activeStep == 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        action: "",
                        onSubmit: handleSubmit,
                        className: "text-grey20",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap mb-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "x-3 my-2 md:mb-0 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "capitalize tracking-wide text-md",
                                            id: "grid-first-name",
                                            children: "Where do you need the job done?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: "appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80",
                                            id: "grid-first-name",
                                            type: "text",
                                            name: "title",
                                            value: formData.title,
                                            onChange: handleOnChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-[12px]",
                                            children: "Street address, Postcode, P.O. Box"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded",
                                onClick: ()=>setActiveStep(activeStep + 1),
                                children: "Enter a budget"
                            })
                        ]
                    }),
                    activeStep == 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        action: "",
                        onSubmit: handleSubmit,
                        className: "text-grey20",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap mb-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "x-3 my-2 md:mb-0 w-full",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "capitalize tracking-wide text-md",
                                                id: "grid-first-name",
                                                children: "From"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: "appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80",
                                                        id: "grid-first-name",
                                                        type: "text",
                                                        name: "title",
                                                        value: formData.title,
                                                        onChange: handleOnChange
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute right-2 top-[20px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: "/assets/icons/euro.svg",
                                                            width: 24,
                                                            height: 24,
                                                            alt: "euro"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "x-3 my-2 md:mb-0 w-full",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "capitalize tracking-wide text-md",
                                                id: "grid-first-name",
                                                children: "To"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: "appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80",
                                                        id: "grid-first-name",
                                                        type: "number",
                                                        name: "title",
                                                        value: formData.title,
                                                        onChange: handleOnChange
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute right-2 top-[20px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: "/assets/icons/euro.svg",
                                                            width: 24,
                                                            height: 24,
                                                            alt: "euro"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded",
                                onClick: ()=>setActiveStep(activeStep + 1),
                                children: "Upload Images"
                            })
                        ]
                    }),
                    activeStep == 3 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        action: "",
                        onSubmit: handleSubmit,
                        className: "text-grey20",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "capitalize text-md font-semibold",
                                children: "Upload an image (Optional)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "max-sm:overflow-x-scroll max-sm:scrolling-touch max-sm:overflow-x-hidden  ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-between my-6 max-sm:w-[130%]",
                                    children: uploadedImages.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "",
                                            children: x.imageUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "rounded w-[101px] h-[108px] my-2 focus:outline-none bg-grey80  md:mb-0 relative ",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "",
                                                    id: "grid-first-name",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: x.imageUrl,
                                                            width: 101,
                                                            height: 108,
                                                            alt: "",
                                                            objectFit: "cover",
                                                            objectPosition: "center",
                                                            className: "object-center object-cover min-h-[108px] max-h-[108px]"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute w-[24px] h-[24px] rounded-full bg-[#7E57CF] flex justify-center items-center text-white -bottom-2 -right-3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                width: 16,
                                                                height: 16
                                                            })
                                                        })
                                                    ]
                                                })
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "border border-dashed border-[#CCCCCC] rounded w-[101px] h-[108px] my-2 focus:outline-none bg-grey80  md:mb-0 relative ",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "text-gray-700  ",
                                                    id: "grid-first-name",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute top-[37px] left-[37px]",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline_esm_PlusIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-4",
                                children: "Add supporting images to best showcase your job request"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded",
                                onClick: ()=>{
                                    setActiveStep(activeStep), setFormFilled(true);
                                },
                                children: "Post Job"
                            })
                        ]
                    })
                ]
            }),
            modalPop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modalPopup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                modalPop: modalPop,
                setModalPopUp: setModalPopUp,
                optionSelected: optionSelected,
                setOptionSelected: setOptionSelected
            }),
            formFilled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_general_generalModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                message: "Job posting successful",
                img: "starMark",
                setModalPopUp: setFormFilled,
                modalPop: formFilled
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostJobForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const ProcessIndicator = ({ activeStep, setActiveStep })=>{
    const steps = [
        "Job details",
        "Location",
        "Budget",
        "Upload images"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                className: "max-md:hidden hrelative text-gray-500 ",
                children: steps.map((text, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: ` relative  ${activeStep >= index + 1 ? "border-dark" : "border-grey"} ${index === steps.length - 1 ? null : "pb-10 border-l-2"}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ml-5 flex items-top",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `absolute w-3 h-3 bg-dark rounded-full -left-[7px] ${activeStep >= index ? "bg-dark" : "bg-grey"} ${index === steps.length - 1 ? "-left-[4.57px] top-0" : ""}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: `font-medium -mt-[6px] text-dark ${activeStep >= index ? "font-semibold" : "font-light opacity-9"}`,
                                    children: text
                                })
                            ]
                        })
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                className: "md:hidden relative text-gray-500 flex items-center mb-10",
                children: steps.map((text, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: `relative w-full border-t-2 max-sm:pr-2 ${activeStep >= index + 1 ? "border-dark" : "border-grey"} ${index === steps.length - 1 ? "w-1" : ""}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `absolute w-3 h-3 bg-dark rounded-full -top-[7px] ${activeStep >= index ? "bg-dark" : "bg-grey"} ${index === steps.length - 1 ? "" : ""}`
                            })
                        })
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProcessIndicator);


/***/ }),

/***/ 4265:
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
/* harmony import */ var _components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3940);
/* harmony import */ var _components_postJobComponents_postJob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9634);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__, _components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_3__, _components_postJobComponents_postJob__WEBPACK_IMPORTED_MODULE_4__]);
([_components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__, _components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_3__, _components_postJobComponents_postJob__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const PostJobPage = ()=>{
    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "md:grid md:grid-cols-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_general_sideBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main md:col-span-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "post-job bg-white h-screen relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_postJobComponents_navHead__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            activeStep: activeStep,
                            setActiveStep: setActiveStep,
                            title: "Post A Job"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_postJobComponents_postJob__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            activeStep: activeStep,
                            setActiveStep: setActiveStep
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostJobPage);

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

/***/ 8923:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ChevronLeftIcon");;

/***/ }),

/***/ 4613:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ChevronUpIcon");;

/***/ }),

/***/ 5647:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/HomeIcon");;

/***/ }),

/***/ 9962:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/ListBulletIcon");;

/***/ }),

/***/ 5642:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/PlusIcon");;

/***/ }),

/***/ 2243:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/UserCircleIcon");;

/***/ }),

/***/ 9113:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/UserIcon");;

/***/ }),

/***/ 7663:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/outline/esm/XMarkIcon");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2940,9815,2636,3061,8198,515,3940,6910], () => (__webpack_exec__(7681)));
module.exports = __webpack_exports__;

})();