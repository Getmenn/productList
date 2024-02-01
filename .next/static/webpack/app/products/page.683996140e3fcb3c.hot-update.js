"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/widget/listProducts/ui/listProducts.tsx":
/*!*****************************************************!*\
  !*** ./src/widget/listProducts/ui/listProducts.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListProducts: function() { return /* binding */ ListProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _shared_api_services_products_getProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/api/services/products/getProducts */ \"(app-pages-browser)/./src/shared/api/services/products/getProducts.ts\");\n/* harmony import */ var _barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CircularProgress,Table,TableBody,TableCell,TableHead,TableRow!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Table/Table.js\");\n/* harmony import */ var _barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CircularProgress,Table,TableBody,TableCell,TableHead,TableRow!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TableHead/TableHead.js\");\n/* harmony import */ var _barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=CircularProgress,Table,TableBody,TableCell,TableHead,TableRow!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TableRow/TableRow.js\");\n/* harmony import */ var _barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=CircularProgress,Table,TableBody,TableCell,TableHead,TableRow!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TableCell/TableCell.js\");\n/* harmony import */ var _barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=CircularProgress,Table,TableBody,TableCell,TableHead,TableRow!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TableBody/TableBody.js\");\n/* harmony import */ var _barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=CircularProgress,Table,TableBody,TableCell,TableHead,TableRow!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CircularProgress/CircularProgress.js\");\n/* harmony import */ var _listProducts_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listProducts.module.scss */ \"(app-pages-browser)/./src/widget/listProducts/ui/listProducts.module.scss\");\n/* harmony import */ var _listProducts_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_listProducts_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_hooks_useLocalProduct_useLocalProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/hooks/useLocalProduct/useLocalProduct */ \"(app-pages-browser)/./src/shared/hooks/useLocalProduct/useLocalProduct.tsx\");\n/* harmony import */ var _shared_api_services_products_getProductsRest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/api/services/products/getProductsRest */ \"(app-pages-browser)/./src/shared/api/services/products/getProductsRest.ts\");\n/* harmony import */ var _productItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productItem */ \"(app-pages-browser)/./src/widget/listProducts/ui/productItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ ListProducts auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ListProducts = ()=>{\n    _s();\n    const [listProducts, setListProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [accountRest, setAccountRest] = (0,_shared_hooks_useLocalProduct_useLocalProduct__WEBPACK_IMPORTED_MODULE_3__.useLocalProduct)(\"accountRest\") // Учетный остаток\n    ;\n    const [actualRest, setActualRest] = (0,_shared_hooks_useLocalProduct_useLocalProduct__WEBPACK_IMPORTED_MODULE_3__.useLocalProduct)(\"actualRest\") // Фактический остаток\n    ;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    /**\r\n     *  Получение информации о продукта, остатках\r\n     * */ const getProductsInfo = async ()=>{\n        setLoading(true);\n        setError(false);\n        const list = await (0,_shared_api_services_products_getProducts__WEBPACK_IMPORTED_MODULE_1__.getProducts)();\n        const rest = await (0,_shared_api_services_products_getProductsRest__WEBPACK_IMPORTED_MODULE_4__.getProductsRest)();\n        list && setListProducts(list);\n        rest && setAccountRest(rest);\n        !actualRest && (rest === null || rest === void 0 ? void 0 : rest.length) && setActualRest(rest) //если actualRest в \n        ;\n        const errorRest = localStorage.getItem(\"errorRest\");\n        const errorProducts = localStorage.getItem(\"errorProducts\");\n        setError(errorRest || errorProducts ? true : false);\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getProductsInfo();\n    }, []);\n    /**\r\n     * Обработчик для сохранения фактического количества в localStorage\r\n     * с помощью хука useLocalProduct\r\n     * */ const handleFact = (e, product)=>{\n        const actualRestWithout = actualRest.filter((el)=>el.productId !== product.id);\n        setActualRest([\n            ...actualRestWithout,\n            {\n                productId: product.id,\n                productCount: +e.currentTarget.value\n            }\n        ]);\n    };\n    /**\r\n     * Учетный остаток\r\n     */ const getProductCount = (id)=>{\n        return accountRest ? accountRest.find((el)=>el.productId === id).productCount || \"нет данных\" : \"нет данных\";\n    };\n    /**\r\n     * Фактический остаток\r\n     */ const getProductActual = (id)=>{\n        var _actualRest_find;\n        return actualRest ? ((_actualRest_find = actualRest.find((el)=>el.productId === id)) === null || _actualRest_find === void 0 ? void 0 : _actualRest_find.productCount) || \"\" : \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_listProducts_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tableWrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            sx: {\n                minWidth: 500,\n                bgcolor: \"background.paper\"\n            },\n            \"aria-label\": \"simple table\",\n            className: (_listProducts_module_scss__WEBPACK_IMPORTED_MODULE_6___default().table),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                align: \"right\",\n                                className: (_listProducts_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cellHead),\n                                children: \"Название\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                align: \"right\",\n                                className: (_listProducts_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cellHead),\n                                children: \"Код вендора\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                align: \"right\",\n                                className: (_listProducts_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cellHead),\n                                children: \"Учетный остаток\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                align: \"right\",\n                                className: (_listProducts_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cellHead),\n                                children: \"Фактический остаток\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    children: [\n                        loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                colSpan: 4,\n                                align: \"center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    className: (_listProducts_module_scss__WEBPACK_IMPORTED_MODULE_6___default().loader)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 37\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 29\n                        }, undefined) : !error && listProducts.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_productItem__WEBPACK_IMPORTED_MODULE_5__.ProductItem, {\n                                product: row,\n                                actualRest: getProductActual(row.id),\n                                accountRest: getProductCount(row.id),\n                                handleFact: handleFact\n                            }, row.id, false, {\n                                fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 29\n                            }, undefined)),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_Table_TableBody_TableCell_TableHead_TableRow_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                colSpan: 4,\n                                align: \"center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Произошла ошибка загрузки данных\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n            lineNumber: 80,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\eaety\\\\OneDrive\\\\Документы\\\\Разработка\\\\Тестовые задания\\\\productList\\\\src\\\\widget\\\\listProducts\\\\ui\\\\listProducts.tsx\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ListProducts, \"BeIFZETVXlJ2oBKbOsOuy1X2DAw=\", false, function() {\n    return [\n        _shared_hooks_useLocalProduct_useLocalProduct__WEBPACK_IMPORTED_MODULE_3__.useLocalProduct,\n        _shared_hooks_useLocalProduct_useLocalProduct__WEBPACK_IMPORTED_MODULE_3__.useLocalProduct\n    ];\n});\n_c = ListProducts;\nvar _c;\n$RefreshReg$(_c, \"ListProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93aWRnZXQvbGlzdFByb2R1Y3RzL3VpL2xpc3RQcm9kdWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXdFO0FBU2xEO0FBQ3FCO0FBQzBCO0FBQ1k7QUFDQTtBQUNyQztBQUVyQyxNQUFNYSxlQUFlOztJQUN4QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBYSxFQUFFO0lBQy9ELE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUCw4RkFBZUEsQ0FBVyxlQUFlLGtCQUFrQjs7SUFDakcsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULDhGQUFlQSxDQUFXLGNBQWMsc0JBQXNCOztJQUNsRyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBRW5DOztPQUVHLEdBQ0gsTUFBTWUsa0JBQWtCO1FBQ3BCSCxXQUFXO1FBQ1hFLFNBQVM7UUFFVCxNQUFNRSxPQUFPLE1BQU16QixzRkFBV0E7UUFDOUIsTUFBTTBCLE9BQU8sTUFBTWYsOEZBQWVBO1FBRWxDYyxRQUFRVixnQkFBZ0JVO1FBQ3hCQyxRQUFRVCxlQUFlUztRQUN2QixDQUFDUixlQUFjUSxpQkFBQUEsMkJBQUFBLEtBQU1DLE1BQU0sS0FBSVIsY0FBY08sTUFBTSxvQkFBb0I7O1FBRXZFLE1BQU1FLFlBQVlDLGFBQWFDLE9BQU8sQ0FBQztRQUN2QyxNQUFNQyxnQkFBZ0JGLGFBQWFDLE9BQU8sQ0FBQztRQUUzQ1AsU0FBU0ssYUFBYUcsZ0JBQWdCLE9BQU87UUFDN0NWLFdBQVc7SUFDZjtJQUVBYixnREFBU0EsQ0FBQztRQUNOZ0I7SUFDSixHQUFFLEVBQUU7SUFFSjs7O09BR0csR0FDSCxNQUFNUSxhQUFhLENBQUNDLEdBQWtDQztRQUNsRCxNQUFNQyxvQkFBb0JqQixXQUFXa0IsTUFBTSxDQUFDLENBQUNDLEtBQXFCQSxHQUFHQyxTQUFTLEtBQUtKLFFBQVFLLEVBQUU7UUFDN0ZwQixjQUFjO2VBQUlnQjtZQUFtQjtnQkFBQ0csV0FBV0osUUFBUUssRUFBRTtnQkFBRUMsY0FBYyxDQUFDUCxFQUFFUSxhQUFhLENBQUNDLEtBQUs7WUFBQTtTQUFFO0lBQ3ZHO0lBRUE7O0tBRUMsR0FDRCxNQUFNQyxrQkFBa0IsQ0FBQ0o7UUFDckIsT0FBT3ZCLGNBQ0RBLFlBQVk0QixJQUFJLENBQUMsQ0FBQ1AsS0FBcUJBLEdBQUdDLFNBQVMsS0FBS0MsSUFBSUMsWUFBWSxJQUFJLGVBQzVFO0lBQ1Y7SUFFQTs7S0FFQyxHQUNELE1BQU1LLG1CQUFtQixDQUFDTjtZQUVoQnJCO1FBRE4sT0FBT0EsYUFDREEsRUFBQUEsbUJBQUFBLFdBQVcwQixJQUFJLENBQUMsQ0FBQ1AsS0FBcUJBLEdBQUdDLFNBQVMsS0FBS0MsaUJBQXZEckIsdUNBQUFBLGlCQUE0RHNCLFlBQVksS0FBSyxLQUM1RTtJQUNYO0lBRUEscUJBQ0ksOERBQUNNO1FBQUlDLFdBQVd4QywrRUFBYztrQkFDMUIsNEVBQUNMLHlJQUFLQTtZQUNGK0MsSUFBSTtnQkFBRUMsVUFBVTtnQkFBS0MsU0FBUztZQUFtQjtZQUNqREMsY0FBVztZQUNYTCxXQUFXeEMsd0VBQU87OzhCQUVsQiw4REFBQ0YseUlBQVNBOzhCQUNOLDRFQUFDQyx5SUFBUUE7OzBDQUNMLDhEQUFDRiwwSUFBU0E7Z0NBQUNrRCxPQUFNO2dDQUFRUCxXQUFXeEMsMkVBQVU7MENBQUU7Ozs7OzswQ0FDaEQsOERBQUNILDBJQUFTQTtnQ0FBQ2tELE9BQU07Z0NBQVFQLFdBQVd4QywyRUFBVTswQ0FBRTs7Ozs7OzBDQUNoRCw4REFBQ0gsMElBQVNBO2dDQUFDa0QsT0FBTTtnQ0FBUVAsV0FBV3hDLDJFQUFVOzBDQUFFOzs7Ozs7MENBQ2hELDhEQUFDSCwwSUFBU0E7Z0NBQUNrRCxPQUFNO2dDQUFRUCxXQUFXeEMsMkVBQVU7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUd4RCw4REFBQ0osMElBQVNBOzt3QkFDTGlCLHdCQUVPLDhEQUFDZCx5SUFBUUE7c0NBQ0wsNEVBQUNGLDBJQUFTQTtnQ0FBQ29ELFNBQVM7Z0NBQUdGLE9BQU07MENBQ3pCLDRFQUFDckQsMElBQWdCQTtvQ0FBQzhDLFdBQVd4Qyx5RUFBUTs7Ozs7Ozs7Ozs7Ozs7O3dDQUkvQyxDQUFDZSxTQUFTUixhQUFhNEMsR0FBRyxDQUFDLENBQUNDLG9CQUMxQiw4REFBQy9DLHFEQUFXQTtnQ0FFUnNCLFNBQVN5QjtnQ0FDVHpDLFlBQVkyQixpQkFBaUJjLElBQUlwQixFQUFFO2dDQUNuQ3ZCLGFBQWEyQixnQkFBZ0JnQixJQUFJcEIsRUFBRTtnQ0FDbkNQLFlBQVlBOytCQUpQMkIsSUFBSXBCLEVBQUU7Ozs7O3dCQVF0QmpCLHVCQUNHLDhEQUFDaEIseUlBQVFBO3NDQUNMLDRFQUFDRiwwSUFBU0E7Z0NBQUNvRCxTQUFTO2dDQUFHRixPQUFNOzBDQUN6Qiw0RUFBQ007OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdwQyxFQUFDO0dBM0dZL0M7O1FBRTZCSCwwRkFBZUE7UUFDakJBLDBGQUFlQTs7O0tBSDFDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2lkZ2V0L2xpc3RQcm9kdWN0cy91aS9saXN0UHJvZHVjdHMudHN4P2U3OGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IGdldFByb2R1Y3RzIH0gZnJvbSBcIkAvc2hhcmVkL2FwaS9zZXJ2aWNlcy9wcm9kdWN0cy9nZXRQcm9kdWN0c1wiXHJcbmltcG9ydCB7IElQcm9kdWN0LCBJUHJvZHVjdFJlc3QgfSBmcm9tIFwiQC9zaGFyZWQvYXBpL3R5cGVzL3Byb2R1Y3RcIlxyXG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzLCBcclxuICAgIFRhYmxlLCBcclxuICAgIFRhYmxlQm9keSwgXHJcbiAgICBUYWJsZUNlbGwsIFxyXG4gICAgVGFibGVIZWFkLCBcclxuICAgIFRhYmxlUm93LCBcclxuICAgIFRleHRGaWVsZCBcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXHJcbmltcG9ydCBzIGZyb20gJy4vbGlzdFByb2R1Y3RzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlTG9jYWxQcm9kdWN0IH0gZnJvbSBcIkAvc2hhcmVkL2hvb2tzL3VzZUxvY2FsUHJvZHVjdC91c2VMb2NhbFByb2R1Y3RcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdHNSZXN0IH0gZnJvbSBcIkAvc2hhcmVkL2FwaS9zZXJ2aWNlcy9wcm9kdWN0cy9nZXRQcm9kdWN0c1Jlc3RcIjtcclxuaW1wb3J0IHsgUHJvZHVjdEl0ZW0gfSBmcm9tIFwiLi9wcm9kdWN0SXRlbVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RQcm9kdWN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsaXN0UHJvZHVjdHMsIHNldExpc3RQcm9kdWN0c10gPSB1c2VTdGF0ZTxJUHJvZHVjdFtdPihbXSlcclxuICAgIGNvbnN0IFthY2NvdW50UmVzdCwgc2V0QWNjb3VudFJlc3RdID0gdXNlTG9jYWxQcm9kdWN0PElQcm9kdWN0PignYWNjb3VudFJlc3QnKSAvLyDQo9GH0LXRgtC90YvQuSDQvtGB0YLQsNGC0L7QulxyXG4gICAgY29uc3QgW2FjdHVhbFJlc3QsIHNldEFjdHVhbFJlc3RdID0gdXNlTG9jYWxQcm9kdWN0PElQcm9kdWN0PignYWN0dWFsUmVzdCcpIC8vINCk0LDQutGC0LjRh9C10YHQutC40Lkg0L7RgdGC0LDRgtC+0LpcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogINCf0L7Qu9GD0YfQtdC90LjQtSDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDQv9GA0L7QtNGD0LrRgtCwLCDQvtGB0YLQsNGC0LrQsNGFXHJcbiAgICAgKiAqL1xyXG4gICAgY29uc3QgZ2V0UHJvZHVjdHNJbmZvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICBzZXRFcnJvcihmYWxzZSlcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGdldFByb2R1Y3RzKClcclxuICAgICAgICBjb25zdCByZXN0ID0gYXdhaXQgZ2V0UHJvZHVjdHNSZXN0KClcclxuXHJcbiAgICAgICAgbGlzdCAmJiBzZXRMaXN0UHJvZHVjdHMobGlzdClcclxuICAgICAgICByZXN0ICYmIHNldEFjY291bnRSZXN0KHJlc3QpXHJcbiAgICAgICAgIWFjdHVhbFJlc3QgJiYgcmVzdD8ubGVuZ3RoICYmIHNldEFjdHVhbFJlc3QocmVzdCkgLy/QtdGB0LvQuCBhY3R1YWxSZXN0INCyIFxyXG5cclxuICAgICAgICBjb25zdCBlcnJvclJlc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXJyb3JSZXN0JylcclxuICAgICAgICBjb25zdCBlcnJvclByb2R1Y3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Vycm9yUHJvZHVjdHMnKVxyXG5cclxuICAgICAgICBzZXRFcnJvcihlcnJvclJlc3QgfHwgZXJyb3JQcm9kdWN0cyA/IHRydWUgOiBmYWxzZSlcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvZHVjdHNJbmZvKClcclxuICAgIH0sW10pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntCx0YDQsNCx0L7RgtGH0LjQuiDQtNC70Y8g0YHQvtGF0YDQsNC90LXQvdC40Y8g0YTQsNC60YLQuNGH0LXRgdC60L7Qs9C+INC60L7Qu9C40YfQtdGB0YLQstCwINCyIGxvY2FsU3RvcmFnZVxyXG4gICAgICog0YEg0L/QvtC80L7RidGM0Y4g0YXRg9C60LAgdXNlTG9jYWxQcm9kdWN0XHJcbiAgICAgKiAqLyBcclxuICAgIGNvbnN0IGhhbmRsZUZhY3QgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIHByb2R1Y3Q6IElQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsUmVzdFdpdGhvdXQgPSBhY3R1YWxSZXN0LmZpbHRlcigoZWw6IElQcm9kdWN0UmVzdCkgPT4gZWwucHJvZHVjdElkICE9PSBwcm9kdWN0LmlkKVxyXG4gICAgICAgIHNldEFjdHVhbFJlc3QoWy4uLmFjdHVhbFJlc3RXaXRob3V0LCB7cHJvZHVjdElkOiBwcm9kdWN0LmlkLCBwcm9kdWN0Q291bnQ6ICtlLmN1cnJlbnRUYXJnZXQudmFsdWV9XSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YfQtdGC0L3Ri9C5INC+0YHRgtCw0YLQvtC6XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGdldFByb2R1Y3RDb3VudCA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFjY291bnRSZXN0IFxyXG4gICAgICAgICAgICA/IGFjY291bnRSZXN0LmZpbmQoKGVsOiBJUHJvZHVjdFJlc3QpID0+IGVsLnByb2R1Y3RJZCA9PT0gaWQpLnByb2R1Y3RDb3VudCB8fCBcItC90LXRgiDQtNCw0L3QvdGL0YVcIlxyXG4gICAgICAgICAgICA6IFwi0L3QtdGCINC00LDQvdC90YvRhVwiXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQpNCw0LrRgtC40YfQtdGB0LrQuNC5INC+0YHRgtCw0YLQvtC6XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGdldFByb2R1Y3RBY3R1YWwgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBhY3R1YWxSZXN0IFxyXG4gICAgICAgICAgICA/IGFjdHVhbFJlc3QuZmluZCgoZWw6IElQcm9kdWN0UmVzdCkgPT4gZWwucHJvZHVjdElkID09PSBpZCk/LnByb2R1Y3RDb3VudCB8fCBgYFxyXG4gICAgICAgICAgICA6IGBgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50YWJsZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8VGFibGUgXHJcbiAgICAgICAgICAgICAgICBzeD17eyBtaW5XaWR0aDogNTAwLCBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicgfX0gXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy50YWJsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIGNsYXNzTmFtZT17cy5jZWxsSGVhZH0+0J3QsNC30LLQsNC90LjQtTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBjbGFzc05hbWU9e3MuY2VsbEhlYWR9PtCa0L7QtCDQstC10L3QtNC+0YDQsDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIiBjbGFzc05hbWU9e3MuY2VsbEhlYWR9PtCj0YfQtdGC0L3Ri9C5INC+0YHRgtCw0YLQvtC6PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiIGNsYXNzTmFtZT17cy5jZWxsSGVhZH0+0KTQsNC60YLQuNGH0LXRgdC60LjQuSDQvtGB0YLQsNGC0L7QujwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezR9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNsYXNzTmFtZT17cy5sb2FkZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAhZXJyb3IgJiYgbGlzdFByb2R1Y3RzLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEl0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyb3cuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17cm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbFJlc3Q9e2dldFByb2R1Y3RBY3R1YWwocm93LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50UmVzdD17Z2V0UHJvZHVjdENvdW50KHJvdy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRmFjdD17aGFuZGxlRmFjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs0fSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCDQt9Cw0LPRgNGD0LfQutC4INC00LDQvdC90YvRhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiZ2V0UHJvZHVjdHMiLCJDaXJjdWxhclByb2dyZXNzIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsInMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUxvY2FsUHJvZHVjdCIsImdldFByb2R1Y3RzUmVzdCIsIlByb2R1Y3RJdGVtIiwiTGlzdFByb2R1Y3RzIiwibGlzdFByb2R1Y3RzIiwic2V0TGlzdFByb2R1Y3RzIiwiYWNjb3VudFJlc3QiLCJzZXRBY2NvdW50UmVzdCIsImFjdHVhbFJlc3QiLCJzZXRBY3R1YWxSZXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZ2V0UHJvZHVjdHNJbmZvIiwibGlzdCIsInJlc3QiLCJsZW5ndGgiLCJlcnJvclJlc3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZXJyb3JQcm9kdWN0cyIsImhhbmRsZUZhY3QiLCJlIiwicHJvZHVjdCIsImFjdHVhbFJlc3RXaXRob3V0IiwiZmlsdGVyIiwiZWwiLCJwcm9kdWN0SWQiLCJpZCIsInByb2R1Y3RDb3VudCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImdldFByb2R1Y3RDb3VudCIsImZpbmQiLCJnZXRQcm9kdWN0QWN0dWFsIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGVXcmFwcGVyIiwic3giLCJtaW5XaWR0aCIsImJnY29sb3IiLCJhcmlhLWxhYmVsIiwidGFibGUiLCJhbGlnbiIsImNlbGxIZWFkIiwiY29sU3BhbiIsImxvYWRlciIsIm1hcCIsInJvdyIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/widget/listProducts/ui/listProducts.tsx\n"));

/***/ })

});