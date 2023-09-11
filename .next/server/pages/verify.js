"use strict";
(() => {
var exports = {};
exports.id = 4143;
exports.ids = [4143,660];
exports.modules = {

/***/ 1576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fverify_preferredRegion_absolutePagePath_private_next_pages_2Fverify_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/verify/index.tsx
var pages_verify_namespaceObject = {};
__webpack_require__.r(pages_verify_namespaceObject);
__webpack_require__.d(pages_verify_namespaceObject, {
  "default": () => (pages_verify)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.tsx + 1 modules
var _app = __webpack_require__(8198);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/react-phone-input-2/lib/style.css
var style = __webpack_require__(4463);
// EXTERNAL MODULE: ./components/auth/testimonial.tsx
var testimonial = __webpack_require__(7556);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/auth/verify/index.tsx







let currentInputIndex;
const VerifyForm = ({ title })=>{
    const Goto = (0,router_.useRouter)();
    const [verifyCode, setVerifyCode] = (0,external_react_.useState)(new Array(5).fill(""));
    const [editNumber, setEditNumber] = (0,external_react_.useState)(false);
    const [timer, setTimer] = (0,external_react_.useState)(60);
    const [phoneNumber, setPhoneNumber] = (0,external_react_.useState)("+44 7911 123456");
    const [formData, setFormData] = (0,external_react_.useState)({
        phoneNumber,
        FACode: verifyCode.join("")
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        Goto.push("/personal");
    };
    const [activeInputIndex, setActiveInputIndex] = (0,external_react_.useState)(0);
    const inputRef = (0,external_react_.useRef)(null);
    const handleOnChange = (event)=>{
        const { value } = event.target;
        const newVal = [
            ...verifyCode
        ];
        newVal[currentInputIndex] = value.substring(value.length - 1);
        if (!value) setActiveInputIndex(currentInputIndex - 1);
        else setActiveInputIndex(currentInputIndex + 1);
        setVerifyCode(newVal);
        setFormData({
            FACode: newVal.join("")
        });
    };
    console.log("activeInputIndex", activeInputIndex);
    const handleKeyDown = (e, index)=>{
        const { key } = e;
        currentInputIndex = index;
        if (key === "Backspace") setActiveInputIndex(currentInputIndex - 1);
    };
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            setTimer((prevTime)=>prevTime === 0 ? 60 : prevTime - 1);
        }, 1000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "authForm text-center md:grid grid-cols-7 gap-8 items-center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(testimonial/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "right max-sm:flex max-sm:flex-col max-sm:justify-between formInput col-span-4 px-5 md:w-6/12 md:mx-auto md:my-auto max-sm:relative",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "md:hidden mobile_nav absolute top-10",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: "/assets/icons/navBack.svg",
                            width: 24,
                            height: 24,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "max-sm:mt-20 form_header max-sm:text-center text-3xl font-bold text-greyDark ",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            action: "",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "text-pColor my-1",
                                    children: "Enter the verification number sent to"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "user_phone flex justify-between items-center",
                                    children: [
                                        editNumber ? /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            placeholder: "",
                                            name: "phoneNumber",
                                            value: phoneNumber,
                                            onChange: (e)=>setPhoneNumber(e.target.value),
                                            className: "w-full text-center focus:outline-none pl-6"
                                        }) : /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "text-center w-full",
                                            children: phoneNumber
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-green cursor-pointer capitalize",
                                            onClick: ()=>setEditNumber(!editNumber),
                                            children: editNumber ? "done" : "edit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex justify-between items-center mb-3",
                                            children: verifyCode.map((_, index)=>/*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    ref: index === activeInputIndex ? inputRef : null,
                                                    className: "w-[66px] h-[48px] border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-normalGrey focus:border-green focus:text-gray-700 text-gray-400 transition max-sm:w-[48px] max-sm:rounded-lg bg-[#F9F9F9]",
                                                    type: "password",
                                                    name: "FACode",
                                                    value: verifyCode[index],
                                                    maxLength: 1,
                                                    onKeyDown: (e)=>handleKeyDown(e, index),
                                                    onChange: (e)=>handleOnChange(e),
                                                    required: true
                                                }, index))
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "resendCount",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                                className: "text-right",
                                                children: [
                                                    timer,
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "s"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                    className: "flex flex-col max-sm:mt-10 mb-8",
                                    children: [
                                        "Didn’t get the OTP?",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "text-green ml-1",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "",
                                                children: "Resend OTP"
                                            })
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "md:mb-4",
                                    children: formData.FACode?.length == 5 ? /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "w-full h-[48px] bg-green  font-bold py-2 px-4 rounded",
                                        children: "Verify OTP"
                                    }) : /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "w-full h-[48px] text-[#000000] bg-normalGrey font-bold py-2 px-4 rounded",
                                        children: "Verify OTP"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const verify = (VerifyForm);

;// CONCATENATED MODULE: ./pages/verify/index.tsx


const Verify = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(verify, {
        title: "Verify phone number"
    });
};
/* harmony default export */ const pages_verify = (Verify);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fverify&preferredRegion=&absolutePagePath=private-next-pages%2Fverify%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fverify_preferredRegion_absolutePagePath_private_next_pages_2Fverify_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_verify_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(pages_verify_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(pages_verify_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(pages_verify_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(pages_verify_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(pages_verify_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_verify_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_verify_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_verify_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_verify_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_verify_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/verify",
        pathname: "/verify",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: pages_verify_namespaceObject
});

//# sourceMappingURL=pages.js.map

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2940,9815,2636,3061,8198,8394], () => (__webpack_exec__(1576)));
module.exports = __webpack_exports__;

})();