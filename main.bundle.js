webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_gallery_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_gallery_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__service_gallery_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryBaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryBaseComponent = (function () {
    function GalleryBaseComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryBaseComponent.prototype.getContainerStyle = function () {
        // just a shortcut for thumbnail position
        var thumbPos = this.gallery.config.thumbnails.position;
        // Container Style
        var width = 'unset', height = 'unset', maxWidth = 'unset', maxHeight = 'unset';
        if (this.gallery.config.width) {
            // width = '100%';
            width = this.gallery.config.width;
            maxWidth = this.gallery.config.width;
        }
        if (this.gallery.config.height) {
            // height = '100%';
            height = this.gallery.config.height;
            maxHeight = this.gallery.config.height;
        }
        return {
            flexDirection: (thumbPos === 'left' || thumbPos === 'right') ? 'row' : 'column',
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            height: height,
            width: width
        };
    };
    return GalleryBaseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_gallery_config__["GalleryConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_gallery_config__["GalleryConfig"]) === "function" && _a || Object)
], GalleryBaseComponent.prototype, "state", void 0);
GalleryBaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'gallery-base',
        template: __webpack_require__(384),
        styles: [__webpack_require__(354)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */]) === "function" && _b || Object])
], GalleryBaseComponent);

var _a, _b;
//# sourceMappingURL=gallery-base.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_shared_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoDetectExampleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoDetectExampleComponent = (function () {
    function AutoDetectExampleComponent(shared) {
        this.shared = shared;
    }
    return AutoDetectExampleComponent;
}());
AutoDetectExampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'auto-detect-example',
        template: __webpack_require__(393),
        styles: [__webpack_require__(363)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
], AutoDetectExampleComponent);

var _a;
//# sourceMappingURL=auto-detect-example.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicExampleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicExampleComponent = (function () {
    function BasicExampleComponent(gallery, shared) {
        this.gallery = gallery;
        this.shared = shared;
    }
    BasicExampleComponent.prototype.ngOnInit = function () {
        this.gallery.load(this.shared.getImages());
    };
    return BasicExampleComponent;
}());
BasicExampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'basic-example',
        template: __webpack_require__(394),
        styles: [__webpack_require__(364)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery__["a" /* GalleryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], BasicExampleComponent);

var _a, _b;
//# sourceMappingURL=basic-example.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_shared_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentationComponent = (function () {
    function DocumentationComponent(shared) {
        this.shared = shared;
    }
    return DocumentationComponent;
}());
DocumentationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'documentation',
        template: __webpack_require__(395),
        styles: [__webpack_require__(365)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
], DocumentationComponent);

var _a;
//# sourceMappingURL=documentation.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_service_gallery_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalExampleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalExampleComponent = (function () {
    function ModalExampleComponent(gallery, shared) {
        this.gallery = gallery;
        this.shared = shared;
    }
    ModalExampleComponent.prototype.ngOnInit = function () {
        this.gallery.load(this.shared.getImages());
    };
    return ModalExampleComponent;
}());
ModalExampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'modal-example',
        template: __webpack_require__(397),
        styles: [__webpack_require__(367)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery_service_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery_service_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], ModalExampleComponent);

var _a, _b;
//# sourceMappingURL=modal-example.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportDialogComponent; });
/* unused harmony export tryParseJSON */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImportDialogComponent = (function () {
    function ImportDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ImportDialogComponent.prototype.validateConfig = function (text) {
        var result = tryParseJSON(text);
        if (result) {
            this.config = result;
        }
        this.error = !result;
    };
    ImportDialogComponent.prototype.closeAndImport = function () {
        if (!this.error) {
            this.dialogRef.close(this.config);
        }
    };
    return ImportDialogComponent;
}());
ImportDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'import-dialog',
        template: __webpack_require__(400),
        styles: [__webpack_require__(370)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */]) === "function" && _a || Object])
], ImportDialogComponent);

var tryParseJSON = function (jsonString) {
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === 'object') {
            return o;
        }
    }
    catch (e) {
    }
    return false;
};
var _a;
//# sourceMappingURL=import-dialog.component.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__gallery_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_default__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var GalleryService = (function () {
    function GalleryService(config) {
        this.config = __WEBPACK_IMPORTED_MODULE_3__gallery_default__["a" /* defaultConfig */];
        this.state = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](__WEBPACK_IMPORTED_MODULE_3__gallery_default__["b" /* defaultState */]);
        this.config = Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__gallery_default__["a" /* defaultConfig */], config);
    }
    GalleryService.prototype.load = function (images) {
        this.state.next({
            images: images,
            currIndex: 0,
            hasNext: images.length > 1,
            hasPrev: false,
            active: false
        });
    };
    GalleryService.prototype.setCurrent = function (index) {
        var state = this.state.getValue();
        this.state.next(Object.assign({}, state, {
            prevIndex: state.currIndex,
            currIndex: index,
            hasNext: index < state.images.length - 1,
            hasPrev: index > 0,
            active: true
        }));
    };
    GalleryService.prototype.next = function () {
        var state = this.state.getValue();
        if (state.hasNext) {
            var index = state.currIndex + 1;
            this.setCurrent(index);
        }
        else {
            this.setCurrent(0);
        }
    };
    GalleryService.prototype.prev = function () {
        var state = this.state.getValue();
        if (state.hasPrev) {
            var index = state.currIndex - 1;
            this.setCurrent(index);
        }
        else {
            this.setCurrent(state.images.length - 1);
        }
    };
    GalleryService.prototype.close = function () {
        var state = this.state.getValue();
        this.state.next(Object.assign({}, state, {
            active: false
        }));
    };
    GalleryService.prototype.reset = function () {
        this.state.next(__WEBPACK_IMPORTED_MODULE_3__gallery_default__["b" /* defaultState */]);
    };
    return GalleryService;
}());
GalleryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__gallery_config__["GalleryConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gallery_config__["GalleryConfig"]) === "function" && _a || Object])
], GalleryService);

var _a;
//# sourceMappingURL=gallery.service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 162;


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(198);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** When router changes */
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (route) {
            _this.homePage = (route.url === '/');
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(382),
        styles: [__webpack_require__(352)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_module__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_main_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__(173);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__settings_settings_module__["a" /* SettingsModule */],
            __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_module__["a" /* GalleryModule */].forRoot({
                width: '900px',
                height: '500px',
                description: {
                    position: 'bottom',
                    overlay: true,
                    text: true,
                    counter: true
                },
                thumbnails: {
                    width: 120,
                    height: 90,
                    position: 'top'
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'footer',
        template: __webpack_require__(383),
        styles: [__webpack_require__(353)]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_gallery_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryImageComponent = (function () {
    function GalleryImageComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryImageComponent.prototype.imageLoad = function (done) {
        this.loadDone = done;
        if (done) {
            this.animate = 'none';
        }
        else {
            switch (this.gallery.config.animation) {
                case 'fade':
                    this.animate = 'fade';
                    break;
                case 'slide':
                    if (this.state.currIndex > this.state.prevIndex) {
                        this.animate = 'slideLeft';
                    }
                    else {
                        this.animate = 'slideRight';
                    }
                    break;
                default:
                    this.animate = 'none';
            }
        }
    };
    return GalleryImageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], GalleryImageComponent.prototype, "state", void 0);
GalleryImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'gallery-image',
        template: __webpack_require__(385),
        styles: [__webpack_require__(355)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('imgIn', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('none', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('slideLeft <=> *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                        transform: 'translateX(100%)'
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-in')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('slideRight <=> *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                        transform: 'translateX(-100%)'
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-in')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('fade <=> *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                        opacity: 0
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-in')
                ]),
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('imgOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('slideRight', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(100%)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('slideLeft', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(-100%)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('fade', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('none', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('slideLeft <=> *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                        transform: 'translateX(0)'
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-in')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('slideRight <=> *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                        transform: 'translateX(0)'
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-in')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])('fade <=> *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                        opacity: 1
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s ease-in')
                ]),
            ]),
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object])
], GalleryImageComponent);

var _a;
//# sourceMappingURL=gallery-image.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryLoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryLoaderComponent = (function () {
    function GalleryLoaderComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryLoaderComponent.prototype.getIcon = function () {
        switch (this.gallery.config.loader.icon) {
            case 'puff':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/puff.svg';
            case 'spinning-circles':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/ball-triangle.svg';
            case 'three-dots':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/three-dots.svg';
            case 'oval':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/oval.svg';
            case 'ball-triangle':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/ball-triangle.svg';
            case 'bars':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/bars.svg';
            case 'tail-spin':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/tail-spin.svg';
            default:
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/bars.svg';
        }
    };
    GalleryLoaderComponent.prototype.getStyle = function () {
        switch (this.gallery.config.loader.position) {
            case 'topLeft':
                return {
                    'align-items': 'flex-start',
                    'justify-content': 'flex-start'
                };
            case 'topRight':
                return {
                    'align-items': 'flex-start',
                    'justify-content': 'flex-end'
                };
            case 'bottomLeft':
                return {
                    'align-items': 'flex-end',
                    'justify-content': 'flex-start'
                };
            case 'bottomRight':
                return {
                    'align-items': 'flex-end',
                    'justify-content': 'flex-end'
                };
            default:
                return {
                    'align-items': 'center',
                    'justify-content': 'center'
                };
        }
    };
    return GalleryLoaderComponent;
}());
GalleryLoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'gallery-loader',
        template: __webpack_require__(386),
        styles: [__webpack_require__(356)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object])
], GalleryLoaderComponent);

var _a;
//# sourceMappingURL=gallery-loader.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_base_gallery_base_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryModalComponent = (function () {
    function GalleryModalComponent(gallery) {
        this.gallery = gallery;
        this.closeButton = true;
    }
    GalleryModalComponent.prototype.keyboardInput = function (event) {
        switch (event.keyCode) {
            case 37:
                this.gallery.prev();
                break;
            case 39:
                this.gallery.next();
                break;
            case 13:
                this.gallery.next();
                break;
            case 27:
                this.gallery.close();
                break;
            default:
                return;
        }
    };
    GalleryModalComponent.prototype.ngOnDestroy = function () {
        this.gallery.reset();
    };
    GalleryModalComponent.prototype.getCloseStyle = function () {
        if (this.galleryBase) {
            var left = this.galleryBase.nativeElement.offsetLeft + this.galleryBase.nativeElement.offsetWidth - 15;
            var top = this.galleryBase.nativeElement.offsetTop - 15;
            console.log('close button position', top, left);
            return {
                top: top + "px",
                left: left + "px",
                visibility: 'visible'
            };
        }
    };
    return GalleryModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__gallery_base_gallery_base_component__["a" /* GalleryBaseComponent */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _a || Object)
], GalleryModalComponent.prototype, "galleryBase", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], GalleryModalComponent.prototype, "closeButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* HostListener */])('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GalleryModalComponent.prototype, "keyboardInput", null);
GalleryModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'gallery-modal',
        template: __webpack_require__(387),
        styles: [__webpack_require__(357)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */]) === "function" && _b || Object])
], GalleryModalComponent);

var _a, _b;
//# sourceMappingURL=gallery-modal.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryNavComponent = (function () {
    function GalleryNavComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryNavComponent.prototype.ngOnInit = function () {
    };
    return GalleryNavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], GalleryNavComponent.prototype, "state", void 0);
GalleryNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'gallery-nav',
        template: __webpack_require__(388),
        styles: [__webpack_require__(358)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object])
], GalleryNavComponent);

var _a;
//# sourceMappingURL=gallery-nav.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_gallery_state__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_gallery_state___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__service_gallery_state__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryTextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryTextComponent = (function () {
    function GalleryTextComponent(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
    }
    GalleryTextComponent.prototype.ngOnChanges = function () {
        // text config shortcut
        var config = this.gallery.config.description;
        // text overlay
        this.renderer.setStyle(this.el.nativeElement, 'position', (config.overlay) ? 'absolute' : 'relative');
        // text position
        if (config.position === 'top') {
            this.renderer.setStyle(this.el.nativeElement, 'order', 0);
            this.renderer.setStyle(this.el.nativeElement, 'top', 0);
            this.renderer.setStyle(this.el.nativeElement, 'bottom', 'unset');
        }
        else {
            this.renderer.setStyle(this.el.nativeElement, 'order', 2);
            this.renderer.setStyle(this.el.nativeElement, 'top', 'unset');
            this.renderer.setStyle(this.el.nativeElement, 'bottom', 0);
        }
    };
    return GalleryTextComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_gallery_state__["GalleryState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_gallery_state__["GalleryState"]) === "function" && _a || Object)
], GalleryTextComponent.prototype, "state", void 0);
GalleryTextComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'gallery-text',
        template: __webpack_require__(389),
        styles: [__webpack_require__(359)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer2 */]) === "function" && _d || Object])
], GalleryTextComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=gallery-text.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_gallery_state__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_gallery_state___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__service_gallery_state__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryThumbnailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryThumbnailsComponent = (function () {
    function GalleryThumbnailsComponent(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
    }
    GalleryThumbnailsComponent.prototype.ngOnChanges = function () {
        var config = this.gallery.config.thumbnails;
        // ruler variables
        var rulerX = 0, rulerY = 0, rulerCenterX = 0, rulerCenterY = 0, rulerDirection = 'row';
        // current thumbnail variables
        var thumbX = 'unset', thumbY = 'unset';
        // container variables
        var contWidth = '100%', contHeight = '100%', contDirection = 'column', contOrder = 0;
        // temp variables
        var widthHalf, heightHalf;
        switch (config.position) {
            case 'top':
                widthHalf = config.width / 2;
                // ruler position
                rulerX = this.state.currIndex * config.width + widthHalf;
                rulerCenterX = 50;
                // current thumbnail position
                thumbX = "calc(50% - " + widthHalf + "px)";
                // container position
                contHeight = config.height + "px";
                break;
            case 'bottom':
                widthHalf = config.width / 2;
                // ruler position
                rulerX = this.state.currIndex * config.width + widthHalf;
                rulerCenterX = 50;
                // current thumbnail position
                thumbX = "calc(50% - " + widthHalf + "px)";
                // container position
                contHeight = config.height + "px";
                contOrder = 2;
                break;
            case 'left':
                heightHalf = config.height / 2;
                // ruler position
                rulerY = this.state.currIndex * config.height + heightHalf;
                rulerCenterY = 50;
                rulerDirection = 'column';
                // current thumbnail position
                thumbY = "calc(50% - " + heightHalf + "px)";
                // container position
                contWidth = config.width + "px";
                contDirection = 'row';
                break;
            case 'right':
                heightHalf = config.height / 2;
                // ruler position
                rulerY = this.state.currIndex * config.height + heightHalf;
                rulerCenterY = 50;
                rulerDirection = 'column';
                // current thumbnail position
                thumbY = "calc(50% - " + heightHalf + "px)";
                // container position
                contWidth = config.width + "px";
                contDirection = 'row';
                contOrder = 2;
                break;
            default:
                break;
        }
        this.setRulerStyle(rulerX, rulerY, rulerCenterX, rulerCenterY, rulerDirection);
        this.setCurrThumbStyle(thumbX, thumbY, config.width, config.height);
        this.setContainerStyle(contWidth, contHeight, contDirection, contOrder);
    };
    GalleryThumbnailsComponent.prototype.setRulerStyle = function (x, y, left, top, direction) {
        this.rulerStyle = {
            margin: -y + "px 0 0 " + -x + "px",
            left: left + "%",
            top: top + "%",
            flexDirection: direction
        };
    };
    GalleryThumbnailsComponent.prototype.setCurrThumbStyle = function (left, top, width, height) {
        this.currThumbStyle = {
            left: left,
            top: top,
            width: width + "px",
            height: height + "px"
        };
    };
    GalleryThumbnailsComponent.prototype.setContainerStyle = function (width, height, direction, order) {
        this.renderer.setStyle(this.el.nativeElement, 'flexDirection', direction);
        this.renderer.setStyle(this.el.nativeElement, 'order', order);
        this.renderer.setStyle(this.el.nativeElement, 'width', width);
        this.renderer.setStyle(this.el.nativeElement, 'height', height);
    };
    GalleryThumbnailsComponent.prototype.getThumbImage = function (i) {
        return "url(" + (this.state.images[i].thumbnail || this.state.images[i].src) + ")";
    };
    return GalleryThumbnailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_gallery_state__["GalleryState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_gallery_state__["GalleryState"]) === "function" && _a || Object)
], GalleryThumbnailsComponent.prototype, "state", void 0);
GalleryThumbnailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'gallery-thumb',
        template: __webpack_require__(390),
        styles: [__webpack_require__(360)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer2 */]) === "function" && _d || Object])
], GalleryThumbnailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=gallery-thumb.component.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = (function () {
    function GalleryComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryComponent.prototype.ngOnDestroy = function () {
        this.gallery.reset();
    };
    return GalleryComponent;
}());
GalleryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'gallery',
        template: '<gallery-base *ngIf="gallery.state | async as state" [state]="state"></gallery-base>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object])
], GalleryComponent);

var _a;
//# sourceMappingURL=gallery.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryDirective = (function () {
    function GalleryDirective(el, renderer, gallery) {
        this.el = el;
        this.renderer = renderer;
        this.gallery = gallery;
    }
    GalleryDirective.prototype.ngOnInit = function () {
        var _this = this;
        /** Gallerize on InnerHtml changes */
        console.log('dom changed');
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this.el.nativeElement, 'DOMSubtreeModified')
            .subscribe(function (e) {
            if (_this.el.nativeElement.innerHTML) {
                console.log('loaded', e);
                var images_1 = [];
                var classes = (_this.gallerize) ? _this.gallerize.split(' ').map(function (className) { return '.' + className; }) : '';
                // get all img elements from content
                var imageElements = _this.el.nativeElement.querySelectorAll("img" + classes);
                if (imageElements) {
                    imageElements.forEach(function (img, i) {
                        // add click event to open image in the lightbox
                        _this.renderer.setStyle(img, 'cursor', 'pointer');
                        _this.renderer.setProperty(img, 'onclick', function () {
                            _this.gallery.setCurrent(i);
                        });
                        // create an image item
                        images_1.push({
                            src: img.src,
                            text: img.alt
                        });
                    });
                    _this.gallery.load(images_1);
                }
            }
        });
    };
    return GalleryDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], GalleryDirective.prototype, "gallerize", void 0);
GalleryDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[gallerize]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer2 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a" /* GalleryService */]) === "function" && _c || Object])
], GalleryDirective);

var _a, _b, _c;
/**

 ngOnChanges(changes: SimpleChanges) {

    if (changes['postContent'] && changes['postContent'].currentValue) {

      let html = changes['postContent'].currentValue;

      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', html);

      let classes = (this.gallerize) ? this.gallerize.split(' ').map((className) => '.' + className) : '';

      // get all img elements from content
      let images: GalleryImage[] = [];

      let imageElements = this.el.nativeElement.querySelectorAll(`img${classes}`);

      if (imageElements) {
        imageElements.forEach((img: HTMLImageElement, i) => {
          // add click event to open image in the lightbox

          img.onclick = () => {
            this.lightBoxService.setCurrent(i);
          };

          // create an image item
          images.push({
            src: img.src,
            text: 'This is a test for image description'
          });
        });


        this.lightBoxService.load(images);
      }
    }

  }
 */
//# sourceMappingURL=gallery.directive.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/delay';
var LazyDirective = (function () {
    function LazyDirective(el, renderer) {
        this.renderer = renderer;
        this.lazyLoad = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */](false);
        this.el = el.nativeElement;
    }
    Object.defineProperty(LazyDirective.prototype, "lazyImage", {
        // Image source
        set: function (imagePath) {
            this.getImage(imagePath);
        },
        enumerable: true,
        configurable: true
    });
    LazyDirective.prototype.getImage = function (imagePath) {
        var _this = this;
        this.lazyLoad.emit(false);
        var img = this.renderer.createElement('img');
        img.src = imagePath;
        img.onload = function () {
            // Observable.of(null).delay(600).subscribe(() => {
            _this.renderer.setStyle(_this.el, 'backgroundImage', "url(" + imagePath + ")");
            _this.lazyLoad.emit(true);
            // });
        };
        img.onerror = function (err) {
            console.error('[LazyImageDirective]:', err);
            _this.lazyLoad.emit(true);
        };
    };
    LazyDirective.prototype.ngOnDestroy = function () {
    };
    return LazyDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('lazyImage'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LazyDirective.prototype, "lazyImage", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Output */])(),
    __metadata("design:type", Object)
], LazyDirective.prototype, "lazyLoad", void 0);
LazyDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[lazyImage]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer2 */]) === "function" && _b || Object])
], LazyDirective);

var _a, _b;
//# sourceMappingURL=lazy.directive.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultConfig; });
var defaultState = {
    images: undefined,
    prevIndex: 0,
    currIndex: 0,
    hasNext: undefined,
    hasPrev: undefined,
    active: false
};
var defaultConfig = {
    animation: 'none',
    width: '900px',
    height: '500px',
    loader: {
        width: '50px',
        height: '50px',
        position: 'center',
        icon: 'oval'
    },
    description: {
        position: 'bottom',
        overlay: true,
        text: true,
        counter: true
    },
    thumbnails: {
        width: 120,
        height: 90,
        position: 'top'
    }
};
//# sourceMappingURL=gallery.default.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "showHeader", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'header',
        template: __webpack_require__(391),
        styles: [__webpack_require__(361)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    return MainComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], MainComponent.prototype, "showHeader", void 0);
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'main',
        template: __webpack_require__(392),
        styles: [__webpack_require__(362)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    })
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'home',
        template: __webpack_require__(396),
        styles: [__webpack_require__(366)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_example_basic_example_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_example_modal_example_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auto_detect_example_auto_detect_example_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_share_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_module__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__documentation_documentation_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__modal_example_modal_example_component__["a" /* ModalExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_4__auto_detect_example_auto_detect_example_component__["a" /* AutoDetectExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_2__basic_example_basic_example_component__["a" /* BasicExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_7__documentation_documentation_component__["a" /* DocumentationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_share_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_module__["a" /* GalleryModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__modal_example_modal_example_component__["a" /* ModalExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_4__auto_detect_example_auto_detect_example_component__["a" /* AutoDetectExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_2__basic_example_basic_example_component__["a" /* BasicExampleComponent */]
        ],
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages_module__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_basic_example_basic_example_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modal_example_modal_example_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auto_detect_example_auto_detect_example_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_documentation_documentation_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/** COMPONENTS */




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__pages_documentation_documentation_component__["a" /* DocumentationComponent */] },
    { path: 'basic', component: __WEBPACK_IMPORTED_MODULE_3__pages_basic_example_basic_example_component__["a" /* BasicExampleComponent */] },
    { path: 'modal', component: __WEBPACK_IMPORTED_MODULE_4__pages_modal_example_modal_example_component__["a" /* ModalExampleComponent */] },
    { path: 'auto-detect', component: __WEBPACK_IMPORTED_MODULE_5__pages_auto_detect_example_auto_detect_example_component__["a" /* AutoDetectExampleComponent */] },
    { path: 'documentation', component: __WEBPACK_IMPORTED_MODULE_6__pages_documentation_documentation_component__["a" /* DocumentationComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_2__pages_pages_module__["a" /* PagesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__pages_pages_module__["a" /* PagesModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescOptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescOptionsComponent = (function () {
    function DescOptionsComponent() {
        this.value = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.prevConfig = {};
        this.positionOptions = [
            'top',
            'bottom'
        ];
    }
    DescOptionsComponent.prototype.enabledChanged = function (e) {
        if (e) {
            this.config = this.prevConfig;
            this.value.emit(this.config);
        }
        else {
            this.prevConfig = this.config;
            this.value.emit(false);
        }
    };
    return DescOptionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery__["b" /* GalleryDescriptionConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery__["b" /* GalleryDescriptionConfig */]) === "function" && _a || Object)
], DescOptionsComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Output */])(),
    __metadata("design:type", Object)
], DescOptionsComponent.prototype, "value", void 0);
DescOptionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'desc-options',
        template: __webpack_require__(398),
        styles: [__webpack_require__(368)]
    })
], DescOptionsComponent);

var _a;
//# sourceMappingURL=desc-options.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__import_dialog_import_dialog_component__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryOptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryOptionsComponent = (function () {
    function GalleryOptionsComponent(gallery, dialog) {
        this.gallery = gallery;
        this.dialog = dialog;
        this.themes = [
            {
                name: 'Default',
                config: {
                    animation: 'fade',
                    width: '900px',
                    height: '500px',
                    description: {
                        position: 'bottom',
                        overlay: true,
                        text: true,
                        counter: true
                    },
                    thumbnails: {
                        width: 120,
                        height: 90,
                        position: 'top'
                    }
                }
            },
            {
                name: 'Style1',
                config: {
                    animation: 'slide',
                    width: '900px',
                    height: '500px',
                    description: {
                        position: 'bottom',
                        overlay: false,
                        text: false,
                        counter: true
                    },
                    thumbnails: false
                }
            }
        ];
        this.animateOptions = [
            'fade',
            'slide',
            'none'
        ];
    }
    GalleryOptionsComponent.prototype.ngOnInit = function () {
        this.currTheme = Object.assign({}, this.themes[0]);
    };
    GalleryOptionsComponent.prototype.setTheme = function (theme) {
        this.gallery.config = Object.assign({}, this.gallery.config, theme.config);
    };
    GalleryOptionsComponent.prototype.exportConfig = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__import_dialog_import_dialog_component__["a" /* ImportDialogComponent */], {
            height: '400px',
            width: '600px',
        });
        dialogRef.componentInstance.readOnly = true;
        dialogRef.componentInstance.config = this.gallery.config;
    };
    GalleryOptionsComponent.prototype.importConfig = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__import_dialog_import_dialog_component__["a" /* ImportDialogComponent */], {
            height: '400px',
            width: '600px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.gallery.config = Object.assign({}, _this.gallery.config, result);
        });
    };
    return GalleryOptionsComponent;
}());
GalleryOptionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'gallery-options',
        template: __webpack_require__(399),
        styles: [__webpack_require__(369)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdDialog */]) === "function" && _b || Object])
], GalleryOptionsComponent);

var _a, _b;
//# sourceMappingURL=gallery-options.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_service_gallery_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_service_gallery_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__gallery_service_gallery_config__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderOptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderOptionsComponent = (function () {
    function LoaderOptionsComponent() {
        this.value = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.prevConfig = {};
        this.positionOptions = [
            'topLeft',
            'topRight',
            'bottomRight',
            'bottomLeft',
            'center'
        ];
        this.iconOptions = [
            'puff',
            'spinning-circles',
            'three-dots',
            'oval',
            'ball-triangle',
            'bars',
            'tail-spin'
        ];
    }
    LoaderOptionsComponent.prototype.enabledChanged = function (e) {
        if (e) {
            this.config = this.prevConfig;
            this.value.emit(this.config);
        }
        else {
            this.prevConfig = this.config;
            this.value.emit(false);
        }
    };
    return LoaderOptionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery_service_gallery_config__["GalleryLoaderConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery_service_gallery_config__["GalleryLoaderConfig"]) === "function" && _a || Object)
], LoaderOptionsComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Output */])(),
    __metadata("design:type", Object)
], LoaderOptionsComponent.prototype, "value", void 0);
LoaderOptionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'loader-options',
        template: __webpack_require__(401),
        styles: [__webpack_require__(371)]
    }),
    __metadata("design:paramtypes", [])
], LoaderOptionsComponent);

var _a;
//# sourceMappingURL=loader-options.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__desc_options_desc_options_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thumb_options_thumb_options_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_options_gallery_options_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loader_options_loader_options_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__import_dialog_import_dialog_component__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdDialogModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__desc_options_desc_options_component__["a" /* DescOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__thumb_options_thumb_options_component__["a" /* ThumbOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__gallery_options_gallery_options_component__["a" /* GalleryOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__loader_options_loader_options_component__["a" /* LoaderOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__import_dialog_import_dialog_component__["a" /* ImportDialogComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__import_dialog_import_dialog_component__["a" /* ImportDialogComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__gallery_options_gallery_options_component__["a" /* GalleryOptionsComponent */]
        ]
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbOptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThumbOptionsComponent = (function () {
    function ThumbOptionsComponent() {
        this.value = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.prevConfig = {};
        this.positionOptions = [
            'left',
            'top',
            'right',
            'bottom'
        ];
    }
    ThumbOptionsComponent.prototype.enabledChanged = function (e) {
        if (e) {
            this.config = this.prevConfig;
            this.value.emit(this.config);
        }
        else {
            this.prevConfig = this.config;
            this.value.emit(false);
        }
    };
    return ThumbOptionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gallery__["b" /* GalleryDescriptionConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery__["b" /* GalleryDescriptionConfig */]) === "function" && _a || Object)
], ThumbOptionsComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Output */])(),
    __metadata("design:type", Object)
], ThumbOptionsComponent.prototype, "value", void 0);
ThumbOptionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'thumb-options',
        template: __webpack_require__(402),
        styles: [__webpack_require__(372)]
    }),
    __metadata("design:paramtypes", [])
], ThumbOptionsComponent);

var _a;
//# sourceMappingURL=thumb-options.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_prism__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs_prism__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_typescript__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_components_prism_typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_markup__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_markup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_markup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_scss__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_batch_js__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_batch_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_batch_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HighlightComponent = (function () {
    function HighlightComponent() {
    }
    HighlightComponent.prototype.ngAfterContentInit = function () {
        var code;
        switch (this.lang) {
            case 'ts':
                code = Prism.highlight(this.code, Prism.languages.typescript);
                break;
            case 'scss':
                code = Prism.highlight(this.code, Prism.languages.scss);
                break;
            case 'html':
                code = Prism.highlight(this.code, Prism.languages.markup);
                break;
            default:
                code = Prism.highlight(this.code, Prism.languages.batch);
        }
        this.codeString = code;
    };
    return HighlightComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], HighlightComponent.prototype, "lang", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], HighlightComponent.prototype, "code", void 0);
HighlightComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'highlight',
        template: '<pre><code [innerHtml]="codeString"></code></pre>',
        styles: [__webpack_require__(373)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], HighlightComponent);

//# sourceMappingURL=highlight.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_prism__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs_prism__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HighlightDirective = (function () {
    function HighlightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    HighlightDirective.prototype.ngAfterViewInit = function () {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'inline');
        this.renderer.setStyle(this.el.nativeElement, 'padding', '5px');
        Prism.highlightElement(this.el.nativeElement, true);
    };
    return HighlightDirective;
}());
HighlightDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[highlight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer2 */]) === "function" && _b || Object])
], HighlightDirective);

var _a, _b;
//# sourceMappingURL=highlight.directive.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_highlight_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directive_highlight_directive__ = __webpack_require__(195);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HighlightModule = (function () {
    function HighlightModule() {
    }
    return HighlightModule;
}());
HighlightModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__component_highlight_component__["a" /* HighlightComponent */],
            __WEBPACK_IMPORTED_MODULE_3__directive_highlight_directive__["a" /* HighlightDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__component_highlight_component__["a" /* HighlightComponent */],
            __WEBPACK_IMPORTED_MODULE_3__directive_highlight_directive__["a" /* HighlightDirective */]
        ],
    })
], HighlightModule);

//# sourceMappingURL=highlight.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_shared_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__highlight_highlight_module__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__service_shared_service__["a" /* SharedService */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__highlight_highlight_module__["a" /* HighlightModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__highlight_highlight_module__["a" /* HighlightModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdButtonModule */]
        ],
    })
], SharedModule);

//# sourceMappingURL=share.module.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ":host {\n  background-color: rgba(211, 211, 211, 0.2);\n  padding: 1em 2em;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 1em; }\n  :host a {\n    margin-left: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n:host {\n  display: block; }\n\n.gallery {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.gallery-container {\n  overflow: hidden;\n  position: relative;\n  z-index: 200;\n  background-color: black;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  @media (max-width: 480px) {\n    .gallery-container {\n      margin: 0.8em; } }\n\n.gallery-current, .gallery-image-container {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n:host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  width: 100%; }\n\n.gallery-image {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n  z-index: 3; }\n\n.gallery-image-prev {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n:host {\n  z-index: 2040; }\n\n.gallery-loader {\n  z-index: 2050;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n.gallery-modal {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n  padding: 2em;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.gallery-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n.gallery-btn-close {\n  position: absolute;\n  z-index: 210;\n  visibility: hidden;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  -webkit-transition: all linear 0.2s;\n  transition: all linear 0.2s;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgc3R5bGU9ImZpbGw6I0Q3NUE0QTsiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIvPjxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgcG9pbnRzPSIxNiwzNCAyNSwyNSAzNCwxNiAiLz48cG9seWxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHBvaW50cz0iMTYsMTYgMjUsMjUgMzQsMzQgIi8+PC9zdmc+); }\n  .gallery-btn-close:active {\n    -webkit-transform: rotate(180deg) scale(0.9);\n            transform: rotate(180deg) scale(0.9); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n:host {\n  z-index: 201;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.gallery-number {\n  position: absolute;\n  width: 100%; }\n\n.gallery-nav {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  opacity: 0;\n  -webkit-transition: all linear 0.4s;\n  transition: all linear 0.4s;\n  cursor: pointer; }\n  .gallery-nav:hover {\n    opacity: 1; }\n  .gallery-nav-next, .gallery-nav-prev {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    opacity: 0.7;\n    position: relative;\n    overflow: hidden;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    z-index: 0; }\n    .gallery-nav-next:hover, .gallery-nav-prev:hover {\n      opacity: 1; }\n  .gallery-nav-next {\n    padding-right: 0.7em;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .gallery-nav-prev {\n    padding-left: 0.7em;\n    width: 20%; }\n\n.next-arrow-ico, .prev-arrow-ico {\n  width: 45px;\n  height: 80px; }\n\n.next-arrow-ico {\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PiAgPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxNC40OTYgNDE0LjQ5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDE0LjQ5NiA0MTQuNDk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+IDxkZWZzIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iZHJvcHNoYWRvdyIgPiAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIi8+ICAgPGZlT2Zmc2V0IGR4PSIyIiBkeT0iMiIgcmVzdWx0PSJvZmZzZXRibHVyIi8+ICAgPGZlTWVyZ2U+IDxmZU1lcmdlTm9kZS8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+ICAgPC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz4gIDxwb2x5Z29uIHN0eWxlPSJmaWxsOiNmZmY7IiBmaWx0ZXI9InVybCgjZHJvcHNoYWRvdykiIHBvaW50cz0iMTE4LjEyNiwwIDg5Ljc5NiwyOC4yMzggMjY4LjIyMywyMDcuMjQ4IDg5Ljc5NiwzODYuMjU4IDExOC4xMjYsNDE0LjQ5NiAzMjQuNywyMDcuMjQ4ICIvPjwvc3ZnPg==) no-repeat center center; }\n\n.prev-arrow-ico {\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MTQuNDk2IDQxNC40OTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxNC40OTYgNDE0LjQ5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxkZWZzIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iZHJvcHNoYWRvdyIgPiAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIi8+ICAgPGZlT2Zmc2V0IGR4PSIyIiBkeT0iMiIgcmVzdWx0PSJvZmZzZXRibHVyIi8+ICAgPGZlTWVyZ2U+IDxmZU1lcmdlTm9kZS8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+ICAgPC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz48cG9seWdvbiBzdHlsZT0iZmlsbDojZmZmOyIgZmlsdGVyPSJ1cmwoI2Ryb3BzaGFkb3cpIiBwb2ludHM9IjMyNC43LDI4LjIzOCAyOTYuMzcsMCA4OS43OTYsMjA3LjI0OCAyOTYuMzcsNDE0LjQ5NiAzMjQuNywzODYuMjU4IDE0Ni4yNzMsMjA3LjI0OCAiLz48L3N2Zz4=) no-repeat center center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n:host {\n  left: 0;\n  width: 100%;\n  z-index: 205;\n  background-clip: padding-box;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #ccc;\n  font-size: 13px;\n  -webkit-font-smoothing: antialiased;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  padding: 1em 2em; }\n\n.gallery-text {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n:host {\n  position: relative;\n  z-index: 206;\n  width: 100%;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.gallery-thumbnail {\n  padding: 2px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nimg {\n  cursor: pointer;\n  display: block;\n  width: 100%; }\n\n.gallery-thumbnail {\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  background-position: center center;\n  background-size: cover; }\n\n.gallery-ruler {\n  position: absolute;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: margin ease 200ms;\n  transition: margin ease 200ms; }\n\n.gallery-thumbnail-placeholder {\n  background-color: lightgrey;\n  position: absolute; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".logo {\n  width: 200px; }\n\n.header {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-height: 300px;\n  padding: 4em;\n  -webkit-transition: margin-top ease-in 0.3s;\n  transition: margin-top ease-in 0.3s;\n  margin-top: 0; }\n  @media (max-width: 480px) {\n    .header {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 0;\n      margin-top: 2em; } }\n\n@media (max-width: 480px) {\n  .menu {\n    display: none; } }\n\n.close-header {\n  -webkit-transition: margin-top ease-out 0.3s;\n  transition: margin-top ease-out 0.3s;\n  margin-top: -300px; }\n\n.header-text {\n  margin: 2em; }\n  @media (max-width: 480px) {\n    .header-text {\n      margin: 0; } }\n\n.example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5); }\n\nh1 {\n  margin: 1em 0;\n  color: #4e005f;\n  background: -webkit-linear-gradient(bottom, #4e005f, #cf15e3, #e35f15, #100cb0);\n  background: linear-gradient(0deg, #4e005f, #cf15e3, #e35f15, #100cb0);\n  background-size: 800% 800%;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  -webkit-animation: ColorTransition 44s ease infinite;\n          animation: ColorTransition 44s ease infinite; }\n\n@-webkit-keyframes ColorTransition {\n  0% {\n    background-position: 0% 90%; }\n  50% {\n    background-position: 100% 11%; }\n  100% {\n    background-position: 0% 90%; } }\n\n@keyframes ColorTransition {\n  0% {\n    background-position: 0% 90%; }\n  50% {\n    background-position: 100% 11%; }\n  100% {\n    background-position: 0% 90%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n  -webkit-transition: all linear 0.3s;\n  transition: all linear 0.3s; }\n\n.main {\n  padding: 0 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".dynamic-content {\n  margin: 2em 0;\n  padding: 1em 0;\n  border-top: 2px dashed lightgray;\n  border-bottom: 2px dashed lightgray;\n  text-align: justify; }\n  .dynamic-content:before, .dynamic-content:after {\n    display: block;\n    color: darkgray; }\n  .dynamic-content:before {\n    content: 'Demo content starts';\n    margin-bottom: 1em; }\n  .dynamic-content:after {\n    content: 'Demo content ends';\n    margin-top: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "gallery {\n  display: block;\n  margin-top: 3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "li {\n  margin-bottom: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".example-card {\n  width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/shiba1.d84e1a8ed94377452dbf.jpg\");\n  background-size: cover; }\n\nbutton {\n  margin: 1.5em;\n  border-radius: 0.2em;\n  overflow: hidden;\n  padding: 0;\n  width: 180px;\n  height: 140px; }\n  button img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 3em 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ":host {\n  position: fixed;\n  height: 100vh;\n  width: 300px;\n  right: 0;\n  top: 0;\n  z-index: 1000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  box-shadow: -3px 0 6px rgba(0, 0, 0, 0.24); }\n\n.gallery-options {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: auto; }\n\n.options-title {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 0.9em; }\n\n.option-padding {\n  padding: 2em 1em 0; }\n\n.button-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-bottom: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\ntextarea {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%; }\n\nbutton {\n  margin-top: 1em; }\n\np {\n  color: darkred; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\npre {\n  margin: 0;\n  padding: 1em; }\n\ncode {\n  padding: .8rem .6rem;\n  line-height: 1.3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<main [showHeader]=\"homePage\" [style.paddingRight]=\"(!homePage) ? '300px' : '0'\"></main>\n<gallery-options *ngIf=\"!homePage\" class=\"animated slideInRight\"></gallery-options>\n"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "By Murhaf Sousli\n<a href=\"https://twitter.com/MurhafSousli\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n<a href=\"https://github.com/MurhafSousli\"><i class=\"fa fa-github-alt\" aria-hidden=\"true\"></i></a>\n\n"

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery\">\n\n  <div class=\"gallery-container\" [ngStyle]=\"getContainerStyle()\">\n\n    <gallery-thumb *ngIf=\"gallery.config.thumbnails\" [state]=\"state\"></gallery-thumb>\n\n    <div class=\"gallery-current\">\n      <div class=\"gallery-image-container\">\n\n        <gallery-image [state]=\"state\"></gallery-image>\n\n        <gallery-nav [state]=\"state\"></gallery-nav>\n\n      </div>\n\n      <gallery-text *ngIf=\"gallery.config.description\" [state]=\"state\"></gallery-text>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-image\"\n    [@imgIn]=\"animate\"\n    [lazyImage]=\"state.images[state.currIndex].src\"\n    (lazyLoad)=\"imageLoad($event)\"></div>\n\n<div class=\"gallery-image gallery-image-prev\"\n    [@imgOut]=\"animate\"\n    [style.backgroundImage]=\"'url(' + state.images[state.prevIndex]?.src + ')'\"></div>\n\n<gallery-loader *ngIf=\"!loadDone\"></gallery-loader>\n"

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-loader\" [ngStyle]=\"getStyle()\">\n  <img [src]=\"getIcon()\"\n       [style.width]=\"gallery.config.loader.width\" [style.height]=\"gallery.config.loader.height\">\n</div>\n"

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"gallery.state | async as state\">\r\n\r\n  <div *ngIf=\"state.active\" class=\"gallery-modal\">\r\n\r\n    <gallery-base [state]=\"state\"></gallery-base>\r\n\r\n    <div class=\"gallery-overlay\" (click)=\"gallery.close()\"></div>\r\n\r\n    <div *ngIf=\"closeButton\" class=\"gallery-btn-close\" [ngStyle]=\"getCloseStyle()\" (click)=\"gallery.close()\"></div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"state.images.length > 1\" class=\"gallery-nav\">\n\n  <div class=\"gallery-nav-prev\" (click)=\"gallery.prev()\">\n    <i class=\"prev-arrow-ico\"></i>\n  </div>\n\n  <div class=\"gallery-nav-next\" (click)=\"gallery.next()\">\n    <i class=\"next-arrow-ico\"></i>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"gallery.config.description.text\" class=\"gallery-text\" [innerHtml]=\"state.images[state.currIndex]?.text\">\n</div>\n<div *ngIf=\"gallery.config.description.counter\" class=\"gallery-number\">\n  {{(state.currIndex + 1) + '/' + state.images.length}}\n</div>\n"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-thumbnail-placeholder\" [ngStyle]=\"currThumbStyle\"></div>\n\n<div class=\"gallery-ruler\" [ngStyle]=\"rulerStyle\">\n\n  <div class=\"gallery-thumbnail\" *ngFor=\"let image of state.images; let i = index\"\n       [class.gallery-thumbnail-current]=\"i === state.currIndex\"\n       [style.width.px]=\"gallery.config.thumbnails.width\"\n       [style.height.px]=\"gallery.config.thumbnails.height\">\n\n    <div class=\"gallery-thumbnail\" [style.backgroundImage]=\"getThumbImage(i)\"\n         (click)=\"gallery.setCurrent(i)\"></div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "<div [class.close-header]=\"!showHeader\" class=\"header\">\n  <img class=\"logo\" src=\"assets/img/ng-gallery.svg\"/>\n  <div class=\"header-text\">\n    <h1>Angular Image Gallery</h1>\n    <!--<div class=\"badges\">-->\n    <!--<img data-canonical-src=\"https://www.npmjs.com/package/ng-teximate\" src=\"https://img.shields.io/npm/v/ng-teximate.svg?maxAge=2592000?style=plastic\">-->\n    <!--<img data-canonical-src=\"https://travis-ci.org/MurhafSousli/ng-teximate\" src=\"https://travis-ci.org/MurhafSousli/ng-teximate.svg?branch=master\">-->\n    <!--<img data-canonical-src=\"https://www.npmjs.com/package/ng-teximate\" src=\"https://img.shields.io/npm/dt/ng-teximate.svg?maxAge=2592000?style=plastic\">-->\n    <!--</div>-->\n\n    <!--<a class=\"github-button\" href=\"https://github.com/murhafsousli/ng-teximate\" data-icon=\"octicon-star\"  data-count-href=\"/murhafsousli/ng-teximate/stargazers\"-->\n    <!--data-count-api=\"/repos/murhafsouslli/ng-teximate#stargazers_count\" data-count-aria-label=\"# stargazers on GitHub\" aria-label=\"Star murhafsousli/ng-teximate on GitHub\">Star</a>-->\n\n\n    <!--<a class=\"github-button\" href=\"https://github.com/murhafsousli\" aria-label=\"Follow @murhafsouslli on GitHub\">Follow @murhafsouslli</a>-->\n\n    <!--<a href=\"https://twitter.com/MurhafSousli\" class=\"twitter-follow-button\" data-show-count=\"false\">Follow @MurhafSousli</a>-->\n\n    <!--</div>-->\n  </div>\n</div>\n\n\n<md-toolbar color=\"primary\">\n\n  <div class=\"menu\">\n    <a md-button routerLink=\".\">Getting started</a>\n    <a md-button routerLink=\"basic\">Basic</a>\n    <a md-button routerLink=\"modal\">Modal</a>\n    <a md-button routerLink=\"auto-detect\">Auto-detect</a>\n  </div>\n\n  <a md-button class=\"btn-icon\" href=\"https://github.com/MurhafSousli/ng-gallery\">\n    <i class=\"fa fa-github\" aria-hidden=\"true\"></i>Github\n  </a>\n</md-toolbar>\n\n\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<header [showHeader]=\"showHeader\"></header>\n\n<div class=\"main\">\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<footer></footer>\n\n"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<h1>Detects images automatically</h1>\n\n<p>Here is a demo content that has img tags inside.</p>\n\n<div [gallerize] class=\"dynamic-content\" [innerHtml]=\"shared.galleryHtmlString\"></div>\n\n<div class=\"content\">\n\n  <h4>Code</h4>\n\n  <p><code highlight>[gallerize]</code> directive detects all img tags and adds click events</p>\n\n  <highlight [lang]=\"'html'\" [code]=\"shared.gallerizeModalCode\"></highlight>\n\n  <p>Html content would look something like:</p>\n\n  <highlight [lang]=\"'ts'\" [code]=\"shared.galleryHtmlStringCode\"></highlight>\n\n  <gallery-modal></gallery-modal>\n\n</div>\n"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<h1>Gallery example</h1>\r\n\r\n<gallery></gallery>\r\n\r\n<div class=\"content\">\r\n\r\n  <h4>Code</h4>\r\n\r\n  <highlight [lang]=\"'html'\" [code]=\"'<gallery></gallery>'\"></highlight>\r\n\r\n  <p></p>\r\n\r\n  <highlight [lang]=\"'ts'\" [code]=\"shared.loadImageCode\"></highlight>\r\n\r\n  <p>Images array would look something like:</p>\r\n\r\n  <highlight [lang]=\"'ts'\" [code]=\"shared.galleryImageArrayScheme\"></highlight>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<h1>Getting started</h1>\n<div class=\"content\">\n\n  <section>\n    <h2>Installation</h2>\n    <p>Install it with npm</p>\n    <code highlight>$ npm install --save ng-gallery</code>\n  </section>\n\n  <section>\n    <h2>Usage</h2>\n\n    <p>Import <b>GalleryModule</b> and set the gallery configuration in your root module</p>\n\n    <highlight [lang]=\"'ts'\" [code]=\"shared.importCode\"></highlight>\n\n    <p>After that you will be able to use Gallery's components and there is two options:</p>\n\n    <ul>\n      <li>\n        <code highlight [textContent]=\"'<gallery></gallery>'\"></code> : to insert the gallery right in the template, see\n        <a routerLink=\"basic\">Basic Example</a>\n      </li>\n      <li>\n        <code highlight [textContent]=\"'<gallery-modal></gallery-modal>'\"></code> : to open the gallery in a modal, see\n        <a routerLink=\"modal\">Modal Example</a>\n      </li>\n    </ul>\n\n    <p>One final step is to fill the gallery with images and there is two options:</p>\n\n    <ul>\n      <li>\n        <p>using <code highlight [textContent]=\"'GalleryService'\"></code></p>\n        <highlight [lang]=\"'ts'\" [code]=\"shared.loadImageCode\"></highlight>\n      </li>\n      <li>\n        <p>using <code highlight [textContent]=\"'[gallerize]'\"></code> directive</p>\n        <highlight [lang]=\"'html'\" [code]=\"shared.gallerizeTemplateCode\"></highlight>\n      </li>\n    </ul>\n\n  </section>\n\n\n  <section class=\"config-scheme\">\n    <h2>Options</h2>\n\n    <p><b>animate</b><span>animate images transition (string)</span></p>\n    <p><b>width</b><span>gallery's width [any units] (string)</span></p>\n    <p><b>height</b><span>gallery's height [any units] (string)</span></p>\n    <p><b>description</b><span>add description bar (GalleryDescriptionConfig | false)</span></p>\n    <ul>\n      <li><b>position</b><span>description's position before or after the main image [top, bottom] (string)</span></li>\n      <li><b>overlay</b><span>description's overlay enable (boolean)</span></li>\n      <li><b>text</b><span>description's text (boolean)</span></li>\n      <li><b>counter</b><span>slides' counter (boolean)</span></li>\n    </ul>\n    <p><b>thumbnails</b><span>add thumbnail carousel (GalleryThumbnailsConfig | false)</span></p>\n    <ul>\n      <li><b>width</b><span>thumbnails' width [px] (number)</span></li>\n      <li><b>height</b><span>thumbnails' height [px] (number)</span></li>\n      <li><b>position</b><span>thumbnails' container position [top, left, right, bottom] (string)</span></li>\n    </ul>\n    <p><b>loader</b><span> add loader for lazy load image (GalleryLoaderConfig | false)</span></p>\n    <ul>\n      <li><b>width</b><span>loader's width [any units] (string)</span></li>\n      <li><b>height</b><span>loader's height [any units] (string)</span></li>\n      <li><b>position</b><span>loader's position [center, topLeft, topRight, bottomLeft, bottomRight] (string)</span>\n      </li>\n      <li><b>icon</b><span>loader's icon [source url] (string)</span></li>\n    </ul>\n  </section>\n\n</div>\n\n"

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<h1>An angular image gallery module that simplifies the process of creating beautiful image galleries for the web and mobile devices.</h1>\n"

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<h1>Gallery in a modal</h1>\n\n<div class=\"grid\">\n  <button md-raised-button md-ripple\n          *ngFor=\"let image of shared.getImages(); let i = index\"\n          (click)=\"gallery.setCurrent(i)\">\n    <img [src]=\"image.src\"/>\n  </button>\n</div>\n\n<gallery-modal></gallery-modal>\n\n<div class=\"content\">\n\n  <h4>Code</h4>\n\n  <highlight [lang]=\"'html'\" [code]=\"shared.galleryImageGridTemplate\"></highlight>\n\n  <p>Images array would look something like:</p>\n\n  <highlight [lang]=\"'ts'\" [code]=\"shared.galleryImageArrayScheme\"></highlight>\n\n</div>\n\n<!--<md-card class=\"example-card\">-->\n<!--<md-card-header>-->\n<!--<div md-card-avatar class=\"example-header-image\"></div>-->\n<!--<md-card-title>Shiba Inu</md-card-title>-->\n<!--<md-card-subtitle>Dog Breed</md-card-subtitle>-->\n<!--</md-card-header>-->\n<!--<img md-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\">-->\n<!--<md-card-content>-->\n<!--<p>-->\n<!--The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.-->\n<!--A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally-->\n<!--bred for hunting.-->\n<!--</p>-->\n<!--</md-card-content>-->\n<!--<md-card-actions>-->\n<!--<button md-button>LIKE</button>-->\n<!--<button md-button>SHARE</button>-->\n<!--</md-card-actions>-->\n<!--</md-card>-->\n"

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"option-header\" color=\"primary\">\n  <md-checkbox [ngModel]=\"config\" (ngModelChange)=\"enabledChanged($event)\">description</md-checkbox>\n</md-toolbar>\n\n<ul>\n\n  <li>\n    <md-select [(ngModel)]=\"config.position\"\n               placeholder=\"position\" [disabled]=\"!config\">\n      <md-option *ngFor=\"let p of positionOptions\" [value]=\"p\">{{p}}</md-option>\n    </md-select>\n  </li>\n\n  <li>\n    <md-checkbox [(ngModel)]=\"config.text\" [disabled]=\"!config\">text</md-checkbox>\n  </li>\n\n  <li>\n    <md-checkbox [(ngModel)]=\"config.counter\" [disabled]=\"!config\">counter</md-checkbox>\n  </li>\n\n  <li>\n    <md-checkbox [(ngModel)]=\"config.overlay\" [disabled]=\"!config\">overlay</md-checkbox>\n  </li>\n\n</ul>\n"

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"option-header\" color=\"primary\">\n\n  <div class=\"options-title\">\n    <span>Gallery options</span>\n    <md-select [ngModel]=\"currTheme.name\" (ngModelChange)=\"setTheme($event)\" placeholder=\"theme\">\n      <md-option *ngFor=\"let theme of themes\" [value]=\"theme\">{{theme.name}}</md-option>\n    </md-select>\n  </div>\n\n  <md-toolbar-row class=\"button-row\">\n    <button md-raised-button (click)=\"importConfig()\">IMPORT</button>\n    <button md-raised-button (click)=\"exportConfig()\">EXPORT</button>\n  </md-toolbar-row>\n\n</md-toolbar>\n\n\n<div class=\"gallery-options\">\n\n  <div class=\"option-padding\">\n\n    <md-select [(ngModel)]=\"gallery.config.animation\" placeholder=\"animation\">\n      <md-option *ngFor=\"let p of animateOptions\" [value]=\"p\">{{p}}</md-option>\n    </md-select>\n\n    <md-input-container>\n      <input mdInput placeholder=\"width\" [(ngModel)]=\"gallery.config.width\">\n    </md-input-container>\n\n    <md-input-container>\n      <input mdInput placeholder=\"height\" [(ngModel)]=\"gallery.config.height\">\n    </md-input-container>\n  </div>\n\n\n  <desc-options [config]=\"gallery.config.description\" (value)=\"gallery.config.description = $event\"></desc-options>\n\n  <thumb-options [config]=\"gallery.config.thumbnails\" (value)=\"gallery.config.thumbnails = $event\"></thumb-options>\n\n  <loader-options [config]=\"gallery.config.loader\" (value)=\"gallery.config.loader = $event\"></loader-options>\n\n</div>\n"

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = "<textarea [disabled]=\"readOnly\" placeholder=\"Paste config here\" [ngModel]=\"config | json\" (ngModelChange)=\"validateConfig($event)\">\n</textarea>\n<button *ngIf=\"!readOnly\" md-raised-button (click)=\"closeAndImport()\">Import</button>\n<p *ngIf=\"error\">The text you entered cannot be parsed to gallery config</p>\n"

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <md-checkbox [ngModel]=\"config\" (ngModelChange)=\"enabledChanged($event)\">loader</md-checkbox>\n</md-toolbar>\n\n<ul>\n  <li>\n    <md-select [(ngModel)]=\"config.icon\"  placeholder=\"icon\" [disabled]=\"!config\">\n      <md-option *ngFor=\"let p of iconOptions\" [value]=\"p\">{{p}}</md-option>\n    </md-select>\n  </li>\n\n  <li>\n    <md-input-container>\n      <input mdInput placeholder=\"width\" [(ngModel)]=\"config.width\" [disabled]=\"!config\">\n    </md-input-container>\n  </li>\n\n  <li>\n    <md-input-container>\n      <input mdInput placeholder=\"height\" [(ngModel)]=\"config.height\" [disabled]=\"!config\">\n    </md-input-container>\n  </li>\n\n  <li>\n    <md-select [(ngModel)]=\"config.position\"  placeholder=\"position\" [disabled]=\"!config\">\n      <md-option *ngFor=\"let p of positionOptions\" [value]=\"p\">{{p}}</md-option>\n    </md-select>\n  </li>\n</ul>\n"

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"option-header\" color=\"primary\">\n  <md-checkbox [ngModel]=\"config\" (ngModelChange)=\"enabledChanged($event)\">Thumbnail</md-checkbox>\n</md-toolbar>\n\n<ul>\n  <li>\n    <md-input-container>\n      <input mdInput placeholder=\"width\" [(ngModel)]=\"config.width\" [disabled]=\"!config\">\n    </md-input-container>\n  </li>\n\n  <li>\n    <md-input-container>\n      <input mdInput placeholder=\"height\" [(ngModel)]=\"config.height\" [disabled]=\"!config\">\n    </md-input-container>\n  </li>\n\n  <li>\n    <md-select [(ngModel)]=\"config.position\" placeholder=\"position\" [disabled]=\"!config\">\n      <md-option *ngFor=\"let p of positionOptions\" [value]=\"p\">{{p}}</md-option>\n    </md-select>\n  </li>\n</ul>\n"

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
        this.importCode = "\n  import { GalleryModule } from 'ng-gallery';\n  \n  export const galleryConfig : GalleryConfig = {\n    // ...\n  }\n  \n  @NgModule({\n   imports: [\n      // ...\n      GalleryModule.forRoot(galleryConfig)\n   ]\n  })\n ";
        this.loadImageCode = "\n  constructor(private gallery: GalleryService) { }\n  \n  ngOnInit() {\n    this.gallery.load(images);\n  }\n  ";
        this.gallerizeTemplateCode = "\n  <div [gallerize] class=\"content\">\n    <img src=\"assets/img/img3.jpg\" alt=\"Spring\">\n    <img src=\"assets/img/img4.jpg\" alt=\"Fire\">\n    <img src=\"assets/img/img5.jpg\" alt=\"Peacock\">\n  </div>\n  \n";
        this.gallerizeModalCode = "\n  <div [gallerize] class=\"content\" [innerHtml]=\"dynamicHtml\"></div>\n  <gallery-modal></gallery-modal>\n";
        this.galleryHtmlString = "\n  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n  \n  <img src=\"assets/img/img2.jpg\" alt=\"See Sunset View\">\n  \n  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>\n  \n  <img src=\"assets/img/img3.jpg\" alt=\"Spring\">\n  <img src=\"assets/img/img4.jpg\" alt=\"Fire\">\n  <img src=\"assets/img/img5.jpg\" alt=\"Peacock\">\n  \n  <p>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n  \n  <img src=\"assets/img/img6.jpg\" alt=\"Snow Mountains View\">\n  <img src=\"assets/img/img7.jpg\" alt=\"City Sunset View\">\n  <img src=\"assets/img/img8.jpg\" alt=\"Beatiful bird\">\n";
        this.galleryHtmlStringCode = "\n  dynamicHtml = `\n    " + this.galleryHtmlString + "\n  `;\n  ";
        this.galleryImageGridTemplate = "\n  <div class=\"grid\">\n    <div *ngFor=\"let image of shared.getImages(); let i = index\" (click)=\"gallery.setCurrent(i)\">\n      <img [src]=\"image.src\"/>\n    </div>\n  </div>\n  \n  <gallery-modal></gallery-modal>\n";
        this.galleryImageArrayScheme = "\n  //Gallery images mock data\n  getImages() {\n    return [\n      {\n        src: 'assets/img/img2.jpg',\n        thumbnail: 'assets/img/thumb/img2_tn.jpg',\n        text: 'See Sunset View'\n      },\n      {\n        src: 'assets/img/img3.jpg',\n        thumbnail: 'assets/img/thumb/img3_tn.jpg',\n        text: 'Spring'\n      },\n      // ...\n    ];\n  }\n  ";
    }
    SharedService.prototype.getImages = function () {
        return [
            {
                src: 'assets/img/img2.jpg',
                thumbnail: 'assets/img/thumb/img2_tn.jpg',
                text: 'See Sunset View'
            }, {
                src: 'assets/img/img3.jpg',
                thumbnail: 'assets/img/thumb/img3_tn.jpg',
                text: 'Spring'
            }, {
                src: 'assets/img/img5.jpg',
                thumbnail: 'assets/img/thumb/img5_tn.jpg',
                text: 'Peacock'
            }, {
                src: 'assets/img/img6.jpg',
                thumbnail: 'assets/img/thumb/img6_tn.jpg',
                text: 'Snow Mountains View'
            }, {
                src: 'assets/img/img7.jpg',
                thumbnail: 'assets/img/thumb/img7_tn.jpg',
                text: 'City Sunset View'
            }, {
                src: 'assets/img/img8.jpg',
                thumbnail: 'assets/img/thumb/img8_tn.jpg',
                text: 'Beatiful bird'
            }
        ];
    };
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(163);


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gallery_module__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_gallery_state__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_gallery_state___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__service_gallery_state__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_gallery_config__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_gallery_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__service_gallery_config__);
/* unused harmony reexport GalleryModule */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__service_gallery_service__["a"]; });
/* unused harmony reexport GalleryState */
/* unused harmony reexport GalleryImage */
/* unused harmony reexport GalleryConfig */
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__service_gallery_config__, "GalleryDescriptionConfig")) __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__service_gallery_config__["GalleryDescriptionConfig"]; });
/* unused harmony reexport GalleryThumbConfig */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

//# sourceMappingURL=gallery.config.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_gallery_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_gallery_gallery_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_gallery_nav_gallery_nav_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_gallery_thumb_gallery_thumb_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_gallery_text_gallery_text_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directive_gallery_directive__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directive_lazy_directive__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_gallery_image_gallery_image_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_gallery_loader_gallery_loader_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_gallery_modal_gallery_modal_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_gallery_base_gallery_base_component__ = __webpack_require__(100);
/* unused harmony export galleryFactory */
/* unused harmony export CONFIG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













/** Initialize ConfigService with URL */
function galleryFactory(config) {
    return new __WEBPACK_IMPORTED_MODULE_2__service_gallery_service__["a" /* GalleryService */](config);
}
var CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* InjectionToken */]('config');
var GalleryModule = GalleryModule_1 = (function () {
    function GalleryModule() {
    }
    GalleryModule.forRoot = function (config) {
        return {
            ngModule: GalleryModule_1,
            providers: [
                { provide: CONFIG, useValue: config },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__service_gallery_service__["a" /* GalleryService */],
                    useFactory: galleryFactory,
                    deps: [CONFIG]
                }
            ]
        };
    };
    return GalleryModule;
}());
GalleryModule = GalleryModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__component_gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_4__component_gallery_nav_gallery_nav_component__["a" /* GalleryNavComponent */],
            __WEBPACK_IMPORTED_MODULE_8__directive_lazy_directive__["a" /* LazyDirective */],
            __WEBPACK_IMPORTED_MODULE_5__component_gallery_thumb_gallery_thumb_component__["a" /* GalleryThumbnailsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__directive_gallery_directive__["a" /* GalleryDirective */],
            __WEBPACK_IMPORTED_MODULE_6__component_gallery_text_gallery_text_component__["a" /* GalleryTextComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_gallery_image_gallery_image_component__["a" /* GalleryImageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__component_gallery_loader_gallery_loader_component__["a" /* GalleryLoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__component_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */],
            __WEBPACK_IMPORTED_MODULE_12__component_gallery_base_gallery_base_component__["a" /* GalleryBaseComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__component_gallery_gallery_component__["a" /* GalleryComponent */],
            __WEBPACK_IMPORTED_MODULE_7__directive_gallery_directive__["a" /* GalleryDirective */],
            __WEBPACK_IMPORTED_MODULE_11__component_gallery_modal_gallery_modal_component__["a" /* GalleryModalComponent */]
        ]
    })
], GalleryModule);

var GalleryModule_1;
//# sourceMappingURL=gallery.module.js.map

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

//# sourceMappingURL=gallery.state.js.map

/***/ })

},[457]);
//# sourceMappingURL=main.bundle.js.map