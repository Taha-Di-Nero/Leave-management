webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/access-denied/access-denied.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title>Access Denied</md-card-title>\n  </md-card-header>\n  <md-card-content>Go away!!!</md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/access-denied/access-denied.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessDeniedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccessDeniedComponent = (function () {
    function AccessDeniedComponent() {
    }
    AccessDeniedComponent.prototype.ngOnInit = function () {
        console.log('access denied');
    };
    return AccessDeniedComponent;
}());
AccessDeniedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-access-denied',
        template: __webpack_require__("../../../../../src/app/access-denied/access-denied.component.html")
    }),
    __metadata("design:paramtypes", [])
], AccessDeniedComponent);

//# sourceMappingURL=access-denied.component.js.map

/***/ }),

/***/ "../../../../../src/app/access-denied/access-denied.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessDeniedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__access_denied_component__ = __webpack_require__("../../../../../src/app/access-denied/access-denied.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccessDeniedModule = (function () {
    function AccessDeniedModule() {
    }
    return AccessDeniedModule;
}());
AccessDeniedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__access_denied_component__["a" /* AccessDeniedComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_used_material_module__["a" /* UsedMaterialModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__access_denied_component__["a" /* AccessDeniedComponent */]
        ]
    })
], AccessDeniedModule);

//# sourceMappingURL=access-denied.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.user-name{\r\n  padding-right: 1rem;\r\n}\r\n\r\n.badge {\r\n  color: #3f51b5 !important;\r\n  background-color: white !important;\r\n}\r\n\r\n/deep/ div.block-ui-wrapper {\r\n  background-color: rgba(63, 81, 181, 0.7);\r\n}\r\n\r\n/* UI block Spinner */\r\n/deep/ div.block-ui-wrapper .loader {\r\n  border-color: #fff; /* Circle color */\r\n  border-left-color: #ff4081; /* Spinning section in circle color */\r\n}\r\n\r\n/* UI block Message */\r\n/deep/ div.block-ui-spinner .message {\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n  -webkit-animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;\r\n          animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isManager; then manager else normal\"></div>\n<ng-template #manager>\n  <div *ngIf=\"loggedEmploye\">\n    <block-ui>\n      <md-toolbar color=\"primary\" layout=\"row\" layout-align=\"center center\" class=\"app-toolbar\">\n        <button md-button (click)=\"sidenav.toggle()\">\n              <md-icon>menu</md-icon>\n        </button>\n        <ng-container *ngTemplateOutlet=\"logoUsername\"></ng-container>\n        <div *ngIf=\"displayLeavesPlanDownload\" class=\"btn btn-primary\" (click)=\"downloadLeavesPlan()\" ngbTooltip=\"Piano ferie {{ApplicationSharedData.getInstance().currentYear}}\"\n          placement=\"bottom\"><i class=\"fa fa-download\" aria-hidden=\"true\" style=\"font-size:24px\"></i></div>\n        <div class=\"btn btn-primary\" (click)=\"logout()\" ngbTooltip=\"Log out\" placement=\"bottom\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\" style=\"font-size:24px\"></i></div>\n      </md-toolbar>\n\n      <md-sidenav-container class=\"sidenav-container\" role=\"main\">\n        <md-sidenav mode=\"side\" class=\"sidenav\" #sidenav>\n          <app-nav-menu [nodes]=\"sideNavNodes\" (action)=\"openNodeModal($event)\"></app-nav-menu>\n        </md-sidenav>\n        <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n      </md-sidenav-container>\n      <app-fab (click)=\"toggleLeavesCoverage()\" [tooltipMsg]=\"fabToolTipMsg\" [leavesIcon]=\"fabLeavesIcon\"></app-fab>\n    </block-ui>\n  </div>\n</ng-template>\n\n<ng-template #normal>\n  <div *ngIf=\"loggedEmploye\">\n    <md-toolbar color=\"primary\" layout=\"row\" layout-align=\"center center\" class=\"app-toolbar\">\n      <div class=\"btn btn-primary\" (click)=\"logout()\" ngbTooltip=\"Log out\" placement=\"bottom\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\" style=\"font-size:24px\"></i></div>\n    </md-toolbar>\n    <ng-container *ngTemplateOutlet=\"logoUsername\"></ng-container>\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </div>\n</ng-template>\n\n<ng-template #logoUsername>\n  <img src=\"/assets/images/logo-seac.png\" style=\"max-height:58px;\">\n  <span class=\"spacer\"></span>\n  <span class=\"user-name\">{{loggedEmploye?.surname}} {{loggedEmploye?.name}}</span>\n  <span  ngbTooltip=\"Giorni di ferie\" placement=\"bottom\" class=\"badge rounded\">{{ApplicationSharedData.getInstance().loggedEmploye?.currentYearLeaves}}</span>\n</ng-template>\n\n<ng-template #content>\n  <section class=\"sidenav-content\" role=\"content\">\n    <ng-container *ngComponentOutlet=\"currentView\"></ng-container>\n  </section>\n</ng-template>\n\n<ng-template #shutDownModal let-close=\"close\">\n  <div class=\"modal-header modal-header-primary\">\n    <span class=\"modal-title\">Chiusure annuale</span>\n  </div>\n  <div class=\"modal-body\">\n    <app-holiday-shutdown-list></app-holiday-shutdown-list>\n  </div>\n  <div class=\"modal-footer modal-header-primary\">\n  </div>\n</ng-template>\n\n<ng-template #inflexibilityPeriodModal let-close=\"close\">\n  <div class=\"modal-header modal-header-primary\">\n    <span class=\"modal-title\">Periodi presenze obbligatorie</span>\n  </div>\n  <div class=\"modal-body\">\n    <app-inflexibility-period-list></app-inflexibility-period-list>\n  </div>\n  <div class=\"modal-footer modal-header-primary\">\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_security_service__ = __webpack_require__("../../../../../src/app/service/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__full_year_leaves_full_year_leaves_component__ = __webpack_require__("../../../../../src/app/full-year-leaves/full-year-leaves.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__full_year_leaves_overlaps_full_year_leaves_overlaps_component__ = __webpack_require__("../../../../../src/app/full-year-leaves-overlaps/full-year-leaves-overlaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__access_denied_access_denied_component__ = __webpack_require__("../../../../../src/app/access-denied/access-denied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_leave_service__ = __webpack_require__("../../../../../src/app/service/leave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_coverage_service__ = __webpack_require__("../../../../../src/app/service/coverage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_application_shared_data__ = __webpack_require__("../../../../../src/app/shared/application-shared-data.ts");
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
    function AppComponent(securityService, leaveService, coverageService, ref, modal) {
        this.securityService = securityService;
        this.leaveService = leaveService;
        this.coverageService = coverageService;
        this.ref = ref;
        this.modal = modal;
        this.sideNavNodes = [
            {
                'id': __WEBPACK_IMPORTED_MODULE_8__shared_enums__["g" /* MenuItemIds */].Chiusure,
                'title': 'Chiusure annuale',
                'tooltip': 'Chiusure annuale'
            },
            {
                'id': __WEBPACK_IMPORTED_MODULE_8__shared_enums__["g" /* MenuItemIds */].Presenze,
                'title': 'Periodi presenze obbligatorie',
                'tooltip': 'Periodi presenze obbligatorie',
            }
        ];
        this.leavesPlanTooltip = 'Piano Ferie';
        this.yearCoverageTooltip = 'Copertura annuale';
        this.ApplicationSharedData = __WEBPACK_IMPORTED_MODULE_11__shared_application_shared_data__["a" /* ApplicationSharedData */];
        this.title = 'Flessibiltà';
        this.displayLeavesPlanDownload = false;
        this.isManager = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.securityService.getLoggedEmploye().then(function (e) { return _this.setLoggedUser(e); }).catch(function (reason) { return _this.setLoggedUser(undefined); });
    };
    AppComponent.prototype.setLoggedUser = function (e) {
        this.loggedEmploye = e;
        this.isManager = e ? (this.loggedEmploye.profile === __WEBPACK_IMPORTED_MODULE_8__shared_enums__["h" /* Profile */].Manager) : false;
        __WEBPACK_IMPORTED_MODULE_11__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().loggedEmploye = e;
        if (e && this.isManager) {
            __WEBPACK_IMPORTED_MODULE_11__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().setFlexibilityComposition(this.coverageService, this.leaveService);
            this.currentView = __WEBPACK_IMPORTED_MODULE_6__full_year_leaves_overlaps_full_year_leaves_overlaps_component__["a" /* FullYearLeavesOverlapsComponent */];
            this.displayLeavesPlanDownload = true;
            this.fabToolTipMsg = this.leavesPlanTooltip;
            this.fabLeavesIcon = true;
        }
        else if (e && !this.isManager) {
            this.currentView = __WEBPACK_IMPORTED_MODULE_5__full_year_leaves_full_year_leaves_component__["a" /* FullYearLeavesComponent */];
        }
        else {
            this.currentView = __WEBPACK_IMPORTED_MODULE_7__access_denied_access_denied_component__["a" /* AccessDeniedComponent */];
        }
        this.ref.markForCheck();
    };
    AppComponent.prototype.toggleLeavesCoverage = function () {
        if (this.currentView === __WEBPACK_IMPORTED_MODULE_6__full_year_leaves_overlaps_full_year_leaves_overlaps_component__["a" /* FullYearLeavesOverlapsComponent */]) {
            this.currentView = __WEBPACK_IMPORTED_MODULE_5__full_year_leaves_full_year_leaves_component__["a" /* FullYearLeavesComponent */];
            this.fabToolTipMsg = this.yearCoverageTooltip;
            this.fabLeavesIcon = false;
            this.displayLeavesPlanDownload = false;
        }
        else {
            this.currentView = __WEBPACK_IMPORTED_MODULE_6__full_year_leaves_overlaps_full_year_leaves_overlaps_component__["a" /* FullYearLeavesOverlapsComponent */];
            this.fabToolTipMsg = this.leavesPlanTooltip;
            this.fabLeavesIcon = true;
            this.displayLeavesPlanDownload = true;
        }
        this.ref.markForCheck();
    };
    AppComponent.prototype.downloadLeavesPlan = function () {
        var _this = this;
        this.blockUI.start('Attendere prego...');
        this.leaveService.getLeavesPlan(__WEBPACK_IMPORTED_MODULE_11__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().currentYear)
            .then(function (blob) {
            Object(__WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"])(blob, "piano_ferie-" + __WEBPACK_IMPORTED_MODULE_11__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().currentYear + ".xlsx");
            _this.stopBlockUI();
        }).catch(function (error) { return _this.stopBlockUI(); });
    };
    AppComponent.prototype.stopBlockUI = function () {
        this.blockUI.stop();
        this.ref.markForCheck();
    };
    AppComponent.prototype.logout = function () {
        this.currentView = undefined;
        this.loggedEmploye = undefined;
        __WEBPACK_IMPORTED_MODULE_11__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().loggedEmploye = undefined;
        this.securityService.logout().catch(function (feak) {
            window.location.reload(true);
        });
    };
    AppComponent.prototype.openNodeModal = function (node) {
        switch (node.id) {
            case __WEBPACK_IMPORTED_MODULE_8__shared_enums__["g" /* MenuItemIds */].Chiusure:
                this.modal.open(this.shutDownModal, { size: 'lg', windowClass: 'animated bounceInLeft' });
                break;
            case __WEBPACK_IMPORTED_MODULE_8__shared_enums__["g" /* MenuItemIds */].Presenze:
                this.modal.open(this.inflexibilityPeriodModal, { size: 'lg', windowClass: 'modal-xxl animated bounceInLeft' });
                break;
        }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('shutDownModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], AppComponent.prototype, "shutDownModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inflexibilityPeriodModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _b || Object)
], AppComponent.prototype, "inflexibilityPeriodModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__["BlockUI"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ng_block_ui__["NgBlockUI"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_block_ui__["NgBlockUI"]) === "function" && _c || Object)
], AppComponent.prototype, "blockUI", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_security_service__["a" /* SecurityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_security_service__["a" /* SecurityService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__service_leave_service__["a" /* LeaveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_leave_service__["a" /* LeaveService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__service_coverage_service__["a" /* CoverageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__service_coverage_service__["a" /* CoverageService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _h || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__full_year_leaves_full_year_leaves_module__ = __webpack_require__("../../../../../src/app/full-year-leaves/full-year-leaves.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__full_year_leaves_overlaps_full_year_leaves_overlaps_module__ = __webpack_require__("../../../../../src/app/full-year-leaves-overlaps/full-year-leaves-overlaps.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__access_denied_access_denied_component__ = __webpack_require__("../../../../../src/app/access-denied/access-denied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__full_year_leaves_overlaps_full_year_leaves_overlaps_component__ = __webpack_require__("../../../../../src/app/full-year-leaves-overlaps/full-year-leaves-overlaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__full_year_leaves_full_year_leaves_component__ = __webpack_require__("../../../../../src/app/full-year-leaves/full-year-leaves.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__not_found_not_found_module__ = __webpack_require__("../../../../../src/app/not-found/not-found.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__access_denied_access_denied_module__ = __webpack_require__("../../../../../src/app/access-denied/access-denied.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__fab_fab_module__ = __webpack_require__("../../../../../src/app/fab/fab.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__layout_nav_menu_nav_menu_component__ = __webpack_require__("../../../../../src/app/layout/nav-menu/nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__layout_nav_item_nav_item_component__ = __webpack_require__("../../../../../src/app/layout/nav-item/nav-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__holiday_shutdowns_holiday_shutdown_list_holiday_shutdown_list_module__ = __webpack_require__("../../../../../src/app/holiday-shutdowns/holiday-shutdown-list/holiday-shutdown-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__inflexibility_periods_inflexibility_period_list_inflexibility_period_list_module__ = __webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period-list/inflexibility-period-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_coverage_service__ = __webpack_require__("../../../../../src/app/service/coverage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_security_service__ = __webpack_require__("../../../../../src/app/service/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_leave_service__ = __webpack_require__("../../../../../src/app/service/leave.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_20__layout_nav_menu_nav_menu_component__["a" /* NavMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_21__layout_nav_item_nav_item_component__["a" /* NavItemComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["d" /* NgbModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_angular_calendar__["b" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["a" /* ToastrModule */].forRoot({
                timeOut: 1200000,
                extendedTimeOut: 2000,
                progressBar: true,
                closeButton: true,
                enableHtml: true,
                positionClass: 'toast-bottom-center'
            }),
            __WEBPACK_IMPORTED_MODULE_13__shared_used_material_module__["a" /* UsedMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_11__full_year_leaves_overlaps_full_year_leaves_overlaps_module__["a" /* FullYearLeavesOverlapsModule */],
            __WEBPACK_IMPORTED_MODULE_9__full_year_leaves_full_year_leaves_module__["a" /* FullYearLeavesModule */],
            __WEBPACK_IMPORTED_MODULE_17__not_found_not_found_module__["a" /* NotFoundModule */],
            __WEBPACK_IMPORTED_MODULE_18__access_denied_access_denied_module__["a" /* AccessDeniedModule */],
            __WEBPACK_IMPORTED_MODULE_19__fab_fab_module__["a" /* FabModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng_block_ui__["BlockUIModule"],
            __WEBPACK_IMPORTED_MODULE_22__holiday_shutdowns_holiday_shutdown_list_holiday_shutdown_list_module__["a" /* HolidayShutdownListModule */],
            __WEBPACK_IMPORTED_MODULE_23__inflexibility_periods_inflexibility_period_list_inflexibility_period_list_module__["a" /* InflexibilityPeriodListModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_25__service_security_service__["a" /* SecurityService */], __WEBPACK_IMPORTED_MODULE_24__service_coverage_service__["a" /* CoverageService */], __WEBPACK_IMPORTED_MODULE_26__service_leave_service__["a" /* LeaveService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__full_year_leaves_overlaps_full_year_leaves_overlaps_component__["a" /* FullYearLeavesOverlapsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__full_year_leaves_full_year_leaves_component__["a" /* FullYearLeavesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_14__access_denied_access_denied_component__["a" /* AccessDeniedComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/flexibility-pie/flexibility-pie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emp-list {\r\n    padding: 1rem;\r\n    overflow-y: scroll;\r\n    height: 35rem;\r\n    color: white;\r\n    background-color: #555;\r\n    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/flexibility-pie/flexibility-pie.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #modalWin let-c=\"close\">\n\t<div [class]=\"modalData?.titleCss\">\n\t\t<h5 class=\"modal-title\">{{ modalData?.title }}</h5>\n\t</div>\n\t<div class=\"modal-body\">\n\t\t<div>\n\t\t\t<pre *ngIf='modalData?.listString'>{{ modalData?.listString }}</pre>\n\t\t\t<div class=\"emp-list\" *ngIf='modalData?.listArray'>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor='let emp of modalData.listArray'>{{emp.surname}} {{emp.name}}:\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li *ngFor='let g of emp.groups'>{{ g | groupMembersJoin}}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ng-template>\n<ngx-charts-pie-chart [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [legend]=\"showLegend\" [explodeSlices]=\"explodeSlices\"\n  [labels]=\"showLabels\" [doughnut]=\"doughnut\" (select)=\"onSelect($event)\" #chart>\n</ngx-charts-pie-chart>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/flexibility-pie/flexibility-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexibilityPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_application_shared_data__ = __webpack_require__("../../../../../src/app/shared/application-shared-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlexibilityPieComponent = (function () {
    function FlexibilityPieComponent(modal, ref) {
        this.modal = modal;
        this.ref = ref;
        this.data = [];
        this.view = [300, 200];
        this.colorScheme = {
            domain: ['#e3bc08', '#ad2121']
        };
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.showLegend = false;
    }
    FlexibilityPieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeElement = document.activeElement;
        this.employeFlexibilitySubscription = __WEBPACK_IMPORTED_MODULE_2__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().getEmployesFlexibility().filter(function (flex) { return !!flex; }).subscribe(function (flex) {
            _this.data = [{ name: 'Flessibili', value: flex.flexible.length },
                { name: 'Non flessibili', value: flex.inflexible.length }];
            _this.employesFexibility = flex;
            _this.ref.markForCheck();
        });
    };
    FlexibilityPieComponent.prototype.onSelect = function (event) {
        this.activeElement['focus'].apply(this.activeElement, []);
        var type = event.name === 'Flessibili' ? 0 : 1;
        var employes = (type === 1) ? this.employesFexibility.inflexible : this.employesFexibility.flexible;
        this.modalData = {
            title: type === 1 ? 'Dipendenti non flessibili' : 'Dipendenti flessibili',
            titleCss: type === 1 ? 'modal-header modal-header-red' : 'modal-header modal-header-yellow',
            listString: (type === 1) ? this.getInflexibleList(employes) : undefined,
            listArray: (type === 1) ? undefined : this.getFlexibleList(employes)
        };
        this.modal.open(this.modalWin, { size: 'lg', windowClass: 'animated bounceInRight' });
    };
    FlexibilityPieComponent.prototype.getInflexibleList = function (employes) {
        return employes.map(function (e) { return e.surname + ' ' + e.name; }).join('\n');
    };
    FlexibilityPieComponent.prototype.getFlexibleList = function (employes) {
        return employes;
    };
    FlexibilityPieComponent.prototype.ngOnDestroy = function () {
        if (this.employeFlexibilitySubscription) {
            this.employeFlexibilitySubscription.unsubscribe();
        }
    };
    return FlexibilityPieComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalWin'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], FlexibilityPieComponent.prototype, "modalWin", void 0);
FlexibilityPieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-flexibility-pie',
        template: __webpack_require__("../../../../../src/app/dashboard/flexibility-pie/flexibility-pie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/flexibility-pie/flexibility-pie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], FlexibilityPieComponent);

var _a, _b, _c;
//# sourceMappingURL=flexibility-pie.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/flexibility-pie/flexibility-pie.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexibilityPieModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flexibility_pie_component__ = __webpack_require__("../../../../../src/app/dashboard/flexibility-pie/flexibility-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__group_members_join_pipe__ = __webpack_require__("../../../../../src/app/dashboard/flexibility-pie/group-members-join.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FlexibilityPieModule = (function () {
    function FlexibilityPieModule() {
    }
    return FlexibilityPieModule;
}());
FlexibilityPieModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbModalModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__flexibility_pie_component__["a" /* FlexibilityPieComponent */],
            __WEBPACK_IMPORTED_MODULE_4__group_members_join_pipe__["a" /* GroupMembersJoinPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__flexibility_pie_component__["a" /* FlexibilityPieComponent */]
        ]
    })
], FlexibilityPieModule);

//# sourceMappingURL=flexibility-pie.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/flexibility-pie/group-members-join.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupMembersJoinPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupMembersJoinPipe = (function () {
    function GroupMembersJoinPipe() {
    }
    GroupMembersJoinPipe.prototype.transform = function (group) {
        return group.map(function (em) { return em.name.charAt(0) + '. ' + em.surname; }).join(', ');
    };
    return GroupMembersJoinPipe;
}());
GroupMembersJoinPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'groupMembersJoin' })
], GroupMembersJoinPipe);

//# sourceMappingURL=group-members-join.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/years-coverage/years-coverage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/years-coverage/years-coverage.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-charts-line-chart [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\">\n</ngx-charts-line-chart>"

/***/ }),

/***/ "../../../../../src/app/dashboard/years-coverage/years-coverage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearsCoverageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_application_shared_data__ = __webpack_require__("../../../../../src/app/shared/application-shared-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils__ = __webpack_require__("../../../../../src/app/shared/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YearsCoverageComponent = (function () {
    function YearsCoverageComponent() {
        this.yearMonthsWorkingDays = new Array();
        this.baseMonthCoverage = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.areaNumber = 69;
        this.data = [{ name: 'Copertura annuale (%)', series: [] }];
        this.view = [350, 200];
        this.colorScheme = {
            domain: ['#3f51b5']
        };
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = '';
        this.showYAxisLabel = true;
        this.yAxisLabel = '';
        this.autoScale = true;
        this.locale = 'it-IT';
    }
    YearsCoverageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setChartSerie();
        this.yearMonthsWorkingDays = __WEBPACK_IMPORTED_MODULE_2__shared_utils__["a" /* Utils */].getYearMonthsWorkingDays(this.yearsMonths);
        this.yearCoverageSubscription = __WEBPACK_IMPORTED_MODULE_1__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().getYearsCoverage().filter(function (gaps) { return !!gaps; }).subscribe(function (gaps) {
            _this.calculateCoverage(gaps);
        });
    };
    YearsCoverageComponent.prototype.setChartSerie = function () {
        for (var _i = 0, _a = this.yearsMonths; _i < _a.length; _i++) {
            var month = _a[_i];
            this.data[0]['series'].push({ name: month.toLocaleString(this.locale, { month: 'short' }), value: 100 });
            this.data = this.data.slice();
        }
    };
    YearsCoverageComponent.prototype.calculateCoverage = function (gaps) {
        var _this = this;
        this.baseMonthCoverage = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var groups = {};
        gaps.forEach(function (event) {
            groups[event.meta.area] = groups[event.meta.area] || [];
            groups[event.meta.area].push(event);
        });
        var areeWithLeaves = 0;
        Object.entries(groups).forEach(function (areaEvents) {
            areeWithLeaves++;
            var baseMonthPresence = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var areaEmployesNumer = areaEvents[1][0].meta.employesNumer;
            baseMonthPresence.forEach(function (v, i) {
                baseMonthPresence[i] = _this.yearMonthsWorkingDays[i] * areaEmployesNumer;
            });
            areaEvents[1].forEach(function (event) {
                baseMonthPresence[event.start.getMonth()]--;
            });
            baseMonthPresence.forEach(function (v, i) {
                _this.baseMonthCoverage[i] += (v / (_this.yearMonthsWorkingDays[i] * areaEmployesNumer));
            });
        });
        this.baseMonthCoverage.forEach(function (v, i) {
            for (var j = areeWithLeaves; j < _this.areaNumber; j++) {
                v++;
            }
            _this.data[0]['series'][i]['value'] = (v / _this.areaNumber) * 100;
        });
        this.data = this.data.slice();
    };
    YearsCoverageComponent.prototype.ngOnDestroy = function () {
        if (this.yearCoverageSubscription) {
            this.yearCoverageSubscription.unsubscribe();
        }
    };
    return YearsCoverageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], YearsCoverageComponent.prototype, "yearsMonths", void 0);
YearsCoverageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-years-coverage',
        template: __webpack_require__("../../../../../src/app/dashboard/years-coverage/years-coverage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/years-coverage/years-coverage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], YearsCoverageComponent);

//# sourceMappingURL=years-coverage.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/years-coverage/years-coverage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearsCoverageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__years_coverage_component__ = __webpack_require__("../../../../../src/app/dashboard/years-coverage/years-coverage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var YearsCoverageModule = (function () {
    function YearsCoverageModule() {
    }
    return YearsCoverageModule;
}());
YearsCoverageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["NgxChartsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__years_coverage_component__["a" /* YearsCoverageComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__years_coverage_component__["a" /* YearsCoverageComponent */]
        ]
    })
], YearsCoverageModule);

//# sourceMappingURL=years-coverage.module.js.map

/***/ }),

/***/ "../../../../../src/app/employe-autocomplete/employe-autocomplete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".employe-dot {\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    margin: 2px;\r\n    vertical-align: middle !important;\r\n}\r\n\r\n.badge {\r\n    min-width: 1.5rem !important;\r\n}\r\n\r\n/deep/ .cdk-overlay-container {\r\n    z-index: 1051;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employe-autocomplete/employe-autocomplete.component.html":
/***/ (function(module, exports) {

module.exports = "<md-form-field>\n    <input mdInput [ngClass]=\"employeStateColor\" [placeholder]=\"placeholder\" aria-label=\"Dipendente\" [mdAutocomplete]=\"employesList\"\n        [formControl]=\"employeCtrl\">\n    <md-icon mdSuffix class=\"align-middle btn-pointer-cursor\" (click)=\"resetSearch()\" ngbTooltip=\"Resetta\">close</md-icon>\n    <md-autocomplete #employesList=\"mdAutocomplete\" (optionSelected)=\"selectEmploye()\">\n        <md-option *ngFor=\"let employe of filteredEmployes | async\" [value]=\"employe.surname.concat(' ', employe.name)\">\n            <span *ngIf=\"!showLeaves\" [ngClass]=\"getStateClass(employe, 'employe-dot')\"></span>\n            <span *ngIf=\"showLeaves\" [ngClass]=\"getStateClass(employe, 'badge rounded')\">{{employe.currentYearLeaves}}</span>\n            <span> {{ employe.surname}} {{employe.name}}</span>\n        </md-option>\n    </md-autocomplete>\n</md-form-field>"

/***/ }),

/***/ "../../../../../src/app/employe-autocomplete/employe-autocomplete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeAutocompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_application_shared_data__ = __webpack_require__("../../../../../src/app/shared/application-shared-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeAutocompleteComponent = (function () {
    function EmployeAutocompleteComponent(ref) {
        var _this = this;
        this.ref = ref;
        this.placeholder = 'Ricerca dipendente';
        this.showLeaves = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.reset = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.employes = [];
        this.employeStateColor = '';
        this.EmployeState = __WEBPACK_IMPORTED_MODULE_2__shared_enums__["b" /* EmployeState */];
        this.employeFlexibilitySubscription = __WEBPACK_IMPORTED_MODULE_3__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().getEmployesFlexibility().filter(function (flex) { return !!flex; }).subscribe(function (flex) {
            _this.employes.splice(0);
            flex.getAll().forEach(function (e) { return _this.employes.push(e); });
            if (_this.employeCtrl) {
                _this.employeCtrl.setValue('');
            }
            _this.ref.markForCheck();
        });
    }
    EmployeAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeCtrl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]();
        this.filteredEmployes = this.employeCtrl.valueChanges.startWith(null)
            .map(function (searchTerm) { return searchTerm ? _this.filterEmployes(searchTerm) : _this.employes.slice(); });
    };
    EmployeAutocompleteComponent.prototype.filterEmployes = function (searchTerm) {
        return this.employes.filter(function (employe) {
            return employe.surname.concat(' ', employe.name).toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
        });
    };
    EmployeAutocompleteComponent.prototype.getselectedEmploye = function () {
        var selectedEmploye = this.employeCtrl.value ? this.filterEmployes(this.employeCtrl.value) : [];
        if (selectedEmploye.length === 1) {
            this.employeCtrl.setValue(selectedEmploye[0].surname.concat(' ', selectedEmploye[0].name));
            return selectedEmploye[0];
        }
        return undefined;
    };
    EmployeAutocompleteComponent.prototype.selectEmploye = function () {
        var employe = this.getselectedEmploye();
        this.selected.emit(employe);
        switch (employe.state) {
            case __WEBPACK_IMPORTED_MODULE_2__shared_enums__["b" /* EmployeState */].Flexible:
                this.employeStateColor = 'flexible-text font-weight-bolder';
                break;
            case __WEBPACK_IMPORTED_MODULE_2__shared_enums__["b" /* EmployeState */].Inflexible:
                this.employeStateColor = 'inflexible-text font-weight-bolder';
                break;
            case __WEBPACK_IMPORTED_MODULE_2__shared_enums__["b" /* EmployeState */].Indifferent:
                this.employeStateColor = 'indifferent-text font-weight-bolder';
                break;
            default:
                this.employeStateColor = '';
        }
    };
    EmployeAutocompleteComponent.prototype.getStateClass = function (employe, baseClass) {
        switch (employe.state) {
            case __WEBPACK_IMPORTED_MODULE_2__shared_enums__["b" /* EmployeState */].Inflexible:
                return baseClass + " inflexible";
            case __WEBPACK_IMPORTED_MODULE_2__shared_enums__["b" /* EmployeState */].Flexible:
                return baseClass + " flexible";
            case __WEBPACK_IMPORTED_MODULE_2__shared_enums__["b" /* EmployeState */].Indifferent:
                return baseClass + " indifferent";
        }
    };
    EmployeAutocompleteComponent.prototype.resetSearch = function () {
        var selectedEmploye = this.getselectedEmploye();
        this.employeStateColor = '';
        this.employeCtrl.reset();
        if (selectedEmploye) {
            this.reset.emit(undefined);
        }
    };
    EmployeAutocompleteComponent.prototype.ngOnDestroy = function () {
        if (this.employeFlexibilitySubscription) {
            this.employeFlexibilitySubscription.unsubscribe();
        }
    };
    return EmployeAutocompleteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EmployeAutocompleteComponent.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EmployeAutocompleteComponent.prototype, "showLeaves", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
], EmployeAutocompleteComponent.prototype, "selected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _b || Object)
], EmployeAutocompleteComponent.prototype, "reset", void 0);
EmployeAutocompleteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-employe-autocomplete',
        template: __webpack_require__("../../../../../src/app/employe-autocomplete/employe-autocomplete.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employe-autocomplete/employe-autocomplete.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], EmployeAutocompleteComponent);

var _a, _b, _c;
//# sourceMappingURL=employe-autocomplete.component.js.map

/***/ }),

/***/ "../../../../../src/app/employe-autocomplete/employe-autocomplete.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeAutocompleteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employe_autocomplete_component__ = __webpack_require__("../../../../../src/app/employe-autocomplete/employe-autocomplete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EmployeAutocompleteModule = (function () {
    function EmployeAutocompleteModule() {
    }
    return EmployeAutocompleteModule;
}());
EmployeAutocompleteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_used_material_module__["a" /* UsedMaterialModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__employe_autocomplete_component__["a" /* EmployeAutocompleteComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__employe_autocomplete_component__["a" /* EmployeAutocompleteComponent */]
        ]
    })
], EmployeAutocompleteModule);

//# sourceMappingURL=employe-autocomplete.module.js.map

/***/ }),

/***/ "../../../../../src/app/fab/fab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".float-button{\r\n    display: inline-block;\r\n    position: fixed;\r\n    bottom: 1.5rem;\r\n    right: 1.5rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fab/fab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"float-button\">\n  <a md-fab [ngbTooltip]=\"tooltipMsg\" placement=\"left\" #t=\"ngbTooltip\" (click)=\"t.close()\">\n    <md-icon *ngIf=\"leavesIcon\">weekend</md-icon>\n    <md-icon *ngIf=\"!leavesIcon\">show_chart</md-icon>\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/fab/fab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FabComponent = (function () {
    function FabComponent() {
    }
    FabComponent.prototype.ngOnInit = function () {
    };
    return FabComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FabComponent.prototype, "tooltipMsg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FabComponent.prototype, "leavesIcon", void 0);
FabComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-fab',
        template: __webpack_require__("../../../../../src/app/fab/fab.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fab/fab.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FabComponent);

//# sourceMappingURL=fab.component.js.map

/***/ }),

/***/ "../../../../../src/app/fab/fab.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fab_component__ = __webpack_require__("../../../../../src/app/fab/fab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FabModule = (function () {
    function FabModule() {
    }
    return FabModule;
}());
FabModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__fab_component__["a" /* FabComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__shared_used_material_module__["a" /* UsedMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__fab_component__["a" /* FabComponent */]
        ]
    })
], FabModule);

//# sourceMappingURL=fab.module.js.map

/***/ }),

/***/ "../../../../../src/app/full-year-leaves-overlaps/full-year-leaves-overlaps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .cal-month-view .cal-cell-top{\r\n    min-height: 3.4375rem;\r\n    min-width: 1rem;\r\n  }\r\n\r\n/deep/ .cal-month-view .cal-day-number{\r\n  opacity: 1;\r\n  margin-right: 5px;\r\n}\r\n\r\n/deep/ .tooltip-inner{\r\n    background-color: #3f51b5;\r\n    white-space: nowrap;\r\n}\r\n\r\n.cal-cell-normal {\r\n    background-color: white;\r\n    color: black;\r\n }\r\n\r\n.cal-cell-problem {\r\n    background-color: #b94a48;\r\n    color: white;\r\n}\r\n\r\n.cal-cell-today-year-has-gap {\r\n    color: lime;\r\n     -webkit-animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;\r\n             animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;  \r\n}\r\n\r\n.cal-cell-today-year {\r\n    background-color: #e8fde7;\r\n    -webkit-animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;\r\n            animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;  \r\n}\r\n\r\n.vertical-align {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n/deep/ .ngx-charts {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/deep/ .ngx-charts-outer {\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/full-year-leaves-overlaps/full-year-leaves-overlaps.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-content\">\n    <div class=\"modal-body\">\n      <app-leave-tab-set></app-leave-tab-set>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n  <div [ngClass]=\"day.cssClass\">\n    <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n  </div>\n</ng-template>\n\n<md-card>\n  <div class=\"row text-center vertical-align\">\n    <div class=\"col-lg-5 col-md-12 col-sm-12\">\n      <app-years-coverage [yearsMonths]=\"viewDate\"></app-years-coverage>\n    </div>\n    <div class=\"col-lg-2 col-md-12 col-sm-12\">\n      <div class=\"btn-group\">\n        <div class=\"btn btn-primary\" (click)=\"previousYear()\" ngbTooltip=\"Anno precedente\"><i class=\"fa fa-backward\" aria-hidden=\"true\"></i></div>\n        <div class=\"btn btn-outline-primary\">{{currentYear}}</div>\n        <div class=\"btn btn-primary\" (click)=\"nextYear()\" ngbTooltip=\"Anno seguente\"><i class=\"fa fa-forward\" aria-hidden=\"true\"></i></div>\n      </div>\n    </div>\n    <div class=\"col-lg-5 col-md-12 col-sm-12\">\n      <app-flexibility-pie></app-flexibility-pie>\n    </div>\n  </div>\n  <hr class=\"double text-primary\">\n  <div class=\"row text-center\">\n    <div *ngFor=\"let month of viewDate  | slice:0:6\" class=\"col-xl-2 col-lg-4 col-md-6 col-sm-12\">\n      <div>\n        <span style=\"width: 100%;text-transform: capitalize;\" class=\"badge badge-primary\">{{ month | calendarDate:(view + 'ViewTitle'):'it' }}</span>\n      </div>\n      <hr style=\"margin: 0px;\" class=\"bg-primary\" />\n      <mwl-calendar-month-view [viewDate]=\"month\" [events]=\"events\" [refresh]=\"refresh\" [excludeDays]=\"excludeDays\" [locale]=\"locale\"\n        [weekStartsOn]=\"weekStartsOn\" [weekendDays]=\"weekendDays\" [cellTemplate]=\"customCellTemplate\" (beforeViewRender)=\"beforeMonthViewRender($event)\"\n        (dayClicked)=\"dayClicked($event.day)\">\n      </mwl-calendar-month-view>\n    </div>\n  </div>\n  <hr class=\"dashed text-primary\">\n  <div class=\"row text-center\">\n    <div *ngFor=\"let month of viewDate  | slice:6\" class=\"col-xl-2 col-lg-4 col-md-6 col-sm-12\">\n      <div>\n        <span style=\"width: 100%;text-transform: capitalize;\" class=\"badge badge-primary\">{{ month | calendarDate:(view + 'ViewTitle'):'it' }}</span>\n      </div>\n      <hr style=\"margin: 0px;\" class=\"calendarhedearFooter\" />\n      <mwl-calendar-month-view [viewDate]=\"month\" [events]=\"events\" [refresh]=\"refresh\" [excludeDays]=\"excludeDays\" [locale]=\"locale\"\n        [weekStartsOn]=\"weekStartsOn\" [weekendDays]=\"weekendDays\" [cellTemplate]=\"customCellTemplate\" (beforeViewRender)=\"beforeMonthViewRender($event)\"\n        (dayClicked)=\"dayClicked($event.day)\">\n      </mwl-calendar-month-view>\n    </div>\n  </div>\n  <hr class=\"double text-primary\">\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/full-year-leaves-overlaps/full-year-leaves-overlaps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullYearLeavesOverlapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_calendar_utils_dist_calendar_utils__ = __webpack_require__("../../../../calendar-utils/dist/calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_coverage_service__ = __webpack_require__("../../../../../src/app/service/coverage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_custom_date_formatter_provider__ = __webpack_require__("../../../../../src/app/shared/custom-date-formatter.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_application_shared_data__ = __webpack_require__("../../../../../src/app/shared/application-shared-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FullYearLeavesOverlapsComponent = (function () {
    function FullYearLeavesOverlapsComponent(modal, coverageService) {
        this.modal = modal;
        this.coverageService = coverageService;
        this.model = __WEBPACK_IMPORTED_MODULE_9__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance();
        this.ViewMode = __WEBPACK_IMPORTED_MODULE_5__shared_enums__["j" /* ViewMode */];
        this.view = 'month';
        this.currentYear = this.model.currentYear;
        this.viewDate = this.getYearMonths();
        this.refresh = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.excludeDays = [0, 6];
        this.locale = 'it';
        this.weekStartsOn = __WEBPACK_IMPORTED_MODULE_2_calendar_utils_dist_calendar_utils__["a" /* DAYS_OF_WEEK */].MONDAY;
        this.weekendDays = [
            __WEBPACK_IMPORTED_MODULE_2_calendar_utils_dist_calendar_utils__["a" /* DAYS_OF_WEEK */].SATURDAY,
            __WEBPACK_IMPORTED_MODULE_2_calendar_utils_dist_calendar_utils__["a" /* DAYS_OF_WEEK */].SUNDAY
        ];
        this.events = [];
    }
    FullYearLeavesOverlapsComponent.prototype.ngOnInit = function () {
        this.fetchGaps();
    };
    FullYearLeavesOverlapsComponent.prototype.fetchGaps = function () {
        var _this = this;
        var getStart = {
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfMonth"],
            week: __WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfWeek"],
            day: __WEBPACK_IMPORTED_MODULE_3_date_fns__["startOfDay"]
        }[this.view];
        var getEnd = {
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfMonth"],
            week: __WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfWeek"],
            day: __WEBPACK_IMPORTED_MODULE_3_date_fns__["endOfDay"]
        }[this.view];
        if (this.model.getLoadedYear(this.currentYear)) {
            this.addGaps(this.model.getLoadedYear(this.currentYear), false);
        }
        else {
            this.coverageService.searchGaps(Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["format"])(getStart(this.viewDate[0]), 'DD-MM-YYYY'), Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["format"])(getEnd(this.viewDate[11]), 'DD-MM-YYYY'), __WEBPACK_IMPORTED_MODULE_5__shared_enums__["j" /* ViewMode */].Area)
                .then(function (gaps) { return _this.addGaps(gaps); });
        }
    };
    FullYearLeavesOverlapsComponent.prototype.addGaps = function (gaps, cacheGaps) {
        if (cacheGaps === void 0) { cacheGaps = true; }
        if (cacheGaps) {
            this.model.addLoadedYear(this.currentYear, gaps);
        }
        this.events = gaps;
        this.refresh.next();
    };
    FullYearLeavesOverlapsComponent.prototype.getYearMonths = function () {
        var yearMonths = new Array();
        for (var i = 0; i < 12; i++) {
            yearMonths.push(new Date(this.currentYear, i, 1));
        }
        return yearMonths;
    };
    FullYearLeavesOverlapsComponent.prototype.beforeMonthViewRender = function (_a) {
        var body = _a.body;
        body.forEach(function (day) {
            day.cssClass = 'cal-cell-top';
            if (!day.inMonth) {
                day.events = [];
            }
            else if (day.events.length > 0) {
                day.cssClass += ' cal-cell-problem';
            }
            else {
                day.cssClass += ' cal-cell-normal';
            }
            if (day.isToday && day.inMonth) {
                day.cssClass += (day.events.length > 0) ? ' cal-cell-today-year-has-gap' : ' cal-cell-today-year';
            }
            day.isToday = false;
        });
    };
    FullYearLeavesOverlapsComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (events.length > 0) {
            this.model.setSelectedDate(date);
            this.modal.open(this.modalContent, { size: 'lg', windowClass: 'animated bounceInUp' });
        }
    };
    FullYearLeavesOverlapsComponent.prototype.nextYear = function () {
        this.currentYear++;
        this.model.currentYear++;
        this.viewDate = this.getYearMonths();
        this.fetchGaps();
    };
    FullYearLeavesOverlapsComponent.prototype.previousYear = function () {
        this.currentYear--;
        this.model.currentYear--;
        this.viewDate = this.getYearMonths();
        this.fetchGaps();
    };
    return FullYearLeavesOverlapsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalContent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], FullYearLeavesOverlapsComponent.prototype, "modalContent", void 0);
FullYearLeavesOverlapsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-full-year-leaves-overlaps',
        template: __webpack_require__("../../../../../src/app/full-year-leaves-overlaps/full-year-leaves-overlaps.component.html"),
        styles: [__webpack_require__("../../../../../src/app/full-year-leaves-overlaps/full-year-leaves-overlaps.component.css")],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_8_angular_calendar__["a" /* CalendarDateFormatter */],
                useClass: __WEBPACK_IMPORTED_MODULE_7__shared_custom_date_formatter_provider__["a" /* CustomDateFormatter */]
            }],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__service_coverage_service__["a" /* CoverageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_coverage_service__["a" /* CoverageService */]) === "function" && _c || Object])
], FullYearLeavesOverlapsComponent);

var _a, _b, _c;
//# sourceMappingURL=full-year-leaves-overlaps.component.js.map

/***/ }),

/***/ "../../../../../src/app/full-year-leaves-overlaps/full-year-leaves-overlaps.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullYearLeavesOverlapsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__leaves_tab_set_leave_tab_set_module__ = __webpack_require__("../../../../../src/app/leaves-tab-set/leave-tab-set.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__full_year_leaves_overlaps_component__ = __webpack_require__("../../../../../src/app/full-year-leaves-overlaps/full-year-leaves-overlaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_flexibility_pie_flexibility_pie_module__ = __webpack_require__("../../../../../src/app/dashboard/flexibility-pie/flexibility-pie.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_years_coverage_years_coverage_module__ = __webpack_require__("../../../../../src/app/dashboard/years-coverage/years-coverage.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FullYearLeavesOverlapsModule = (function () {
    function FullYearLeavesOverlapsModule() {
    }
    return FullYearLeavesOverlapsModule;
}());
FullYearLeavesOverlapsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__full_year_leaves_overlaps_component__["a" /* FullYearLeavesOverlapsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModalModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["b" /* CalendarModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared_used_material_module__["a" /* UsedMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_flexibility_pie_flexibility_pie_module__["a" /* FlexibilityPieModule */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_years_coverage_years_coverage_module__["a" /* YearsCoverageModule */],
            __WEBPACK_IMPORTED_MODULE_6__leaves_tab_set_leave_tab_set_module__["a" /* LeavesTabSetModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__full_year_leaves_overlaps_component__["a" /* FullYearLeavesOverlapsComponent */]
        ]
    })
], FullYearLeavesOverlapsModule);

//# sourceMappingURL=full-year-leaves-overlaps.module.js.map

/***/ }),

/***/ "../../../../../src/app/full-year-leaves/full-year-leaves.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .cal-month-view .cal-cell-top{\r\n    min-height: 3.4375rem;\r\n    min-width: 1rem;\r\n  }\r\n\r\n/deep/ .cal-month-view .cal-day-number{\r\n  opacity: 1;\r\n  margin-right: 5px;\r\n}\r\n\r\n/deep/ .tooltip-inner{\r\n    background-color: #3f51b5;\r\n    white-space: nowrap;\r\n}\r\n\r\n.cal-cell-normal {\r\n    background-color: white;\r\n    color: black;\r\n }\r\n\r\n.cal-cell-normal-holiday {\r\n    background-color: white;\r\n    color: red;\r\n }\r\n\r\n.cal-cell-leave {\r\n    background-color: #3f51b5;\r\n    color: white;\r\n}\r\n\r\n.cal-cell-today-year-is-leave {\r\n    color: lime;\r\n     -webkit-animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;\r\n             animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;  \r\n}\r\n\r\n.cal-cell-today-year {\r\n    background-color: #e8fde7;\r\n    -webkit-animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;\r\n            animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;  \r\n}\r\n\r\n.cal-cell-leave-period {\r\n    background-color: #ff4081;\r\n    color: white;\r\n}\r\n\r\n@-webkit-keyframes blinker { \r\n  to { opacity: 0; } \r\n}\r\n\r\n@keyframes blinker { \r\n  to { opacity: 0; } \r\n}\r\n\r\n.vertical-align {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/full-year-leaves/full-year-leaves.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n  <div [ngClass]=\"day.cssClass\" (click)=\"dayClicked($event, day)\">\n    <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n  </div>\n</ng-template>\n<md-card>\n  <div class=\"row text-center vertical-align\">\n    <div class=\"col-12\">\n      <div class=\"btn-group\">\n        <div class=\"btn btn-primary\" (click)=\"previousYear()\" ngbTooltip=\"Anno precedente\"><i class=\"fa fa-backward\" aria-hidden=\"true\"></i></div>\n        <div class=\"btn btn-outline-primary\">{{currentYear}}</div>\n        <div class=\"btn btn-primary\" (click)=\"nextYear()\" ngbTooltip=\"Anno seguente\"><i class=\"fa fa-forward\" aria-hidden=\"true\"></i></div>\n      </div>\n      <div *ngIf=\"ApplicationSharedData.getInstance().loggedEmploye?.profile === Profile.Manager\" class=\"float-right\">\n        <app-employe-autocomplete #employeAutocomplete (selected)=\"fetchLeaves()\" (reset)=\"fetchLeaves()\" showLeaves=\"true\">\n        </app-employe-autocomplete>\n      </div>\n    </div>\n  </div>\n  <hr class=\"double text-primary\">\n  <div class=\"row text-center\">\n    <div *ngFor=\"let month of viewDate  | slice:0:6\"class=\"col-xl-2 col-lg-4 col-md-6 col-sm-12\">\n      <div>\n        <span style=\"width: 100%;text-transform: capitalize;\" class=\"badge badge-primary\">{{ month | calendarDate:(view + 'ViewTitle'):'it' }}</span>\n      </div>\n      <hr style=\"margin: 0px;\" class=\"bg-primary\" />\n      <mwl-calendar-month-view [viewDate]=\"month\" [refresh]=\"refresh\" [excludeDays]=\"excludeDays\" [locale]=\"locale\" [weekStartsOn]=\"weekStartsOn\"\n        [weekendDays]=\"weekendDays\" [cellTemplate]=\"customCellTemplate\" (beforeViewRender)=\"beforeMonthViewRender($event)\">\n      </mwl-calendar-month-view>\n    </div>\n  </div>\n  <hr class=\"dashed text-primary\">\n  <div class=\"row text-center\">\n    <div *ngFor=\"let month of viewDate  | slice:6\" class=\"col-xl-2 col-lg-4 col-md-6 col-sm-12\">\n      <div>\n        <span style=\"width: 100%;text-transform: capitalize;\" class=\"badge badge-primary\">{{ month | calendarDate:(view + 'ViewTitle'):'it' }}</span>\n      </div>\n      <hr style=\"margin: 0px;\" class=\"calendarhedearFooter\" />\n      <mwl-calendar-month-view [viewDate]=\"month\" [refresh]=\"refresh\" [excludeDays]=\"excludeDays\" [locale]=\"locale\" [weekStartsOn]=\"weekStartsOn\"\n        [weekendDays]=\"weekendDays\" [cellTemplate]=\"customCellTemplate\" (beforeViewRender)=\"beforeMonthViewRender($event)\">\n      </mwl-calendar-month-view>\n    </div>\n  </div>\n  <hr class=\"double text-primary\">\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/full-year-leaves/full-year-leaves.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullYearLeavesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_calendar_utils_dist_calendar_utils__ = __webpack_require__("../../../../calendar-utils/dist/calendar-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_custom_date_formatter_provider__ = __webpack_require__("../../../../../src/app/shared/custom-date-formatter.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_utils__ = __webpack_require__("../../../../../src/app/shared/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_leave_service__ = __webpack_require__("../../../../../src/app/service/leave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_dto_leave__ = __webpack_require__("../../../../../src/app/shared/dto/leave.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_application_shared_data__ = __webpack_require__("../../../../../src/app/shared/application-shared-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__employe_autocomplete_employe_autocomplete_component__ = __webpack_require__("../../../../../src/app/employe-autocomplete/employe-autocomplete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_coverage_service__ = __webpack_require__("../../../../../src/app/service/coverage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var FullYearLeavesComponent = (function () {
    function FullYearLeavesComponent(leaveService, coverageService, toastr, ref) {
        this.leaveService = leaveService;
        this.coverageService = coverageService;
        this.toastr = toastr;
        this.ref = ref;
        this.Profile = __WEBPACK_IMPORTED_MODULE_13__shared_enums__["h" /* Profile */];
        this.ApplicationSharedData = __WEBPACK_IMPORTED_MODULE_12__shared_application_shared_data__["a" /* ApplicationSharedData */];
        this.view = 'month';
        this.currentYear = __WEBPACK_IMPORTED_MODULE_12__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().currentYear;
        this.viewDate = this.getYearMonths();
        this.yearAllDay = [];
        this.leavesDates = new Array();
        this.refresh = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.excludeDays = [0, 6];
        this.locale = 'it';
        this.weekStartsOn = __WEBPACK_IMPORTED_MODULE_3_calendar_utils_dist_calendar_utils__["a" /* DAYS_OF_WEEK */].MONDAY;
        this.weekendDays = [
            __WEBPACK_IMPORTED_MODULE_3_calendar_utils_dist_calendar_utils__["a" /* DAYS_OF_WEEK */].SATURDAY,
            __WEBPACK_IMPORTED_MODULE_3_calendar_utils_dist_calendar_utils__["a" /* DAYS_OF_WEEK */].SUNDAY
        ];
    }
    FullYearLeavesComponent.prototype.ngOnInit = function () {
        this.fetchLeaves();
    };
    FullYearLeavesComponent.prototype.fetchLeaves = function () {
        var _this = this;
        var getStart = {
            month: __WEBPACK_IMPORTED_MODULE_5_date_fns__["startOfMonth"],
            week: __WEBPACK_IMPORTED_MODULE_5_date_fns__["startOfWeek"],
            day: __WEBPACK_IMPORTED_MODULE_5_date_fns__["startOfDay"]
        }[this.view];
        var getEnd = {
            month: __WEBPACK_IMPORTED_MODULE_5_date_fns__["endOfMonth"],
            week: __WEBPACK_IMPORTED_MODULE_5_date_fns__["endOfWeek"],
            day: __WEBPACK_IMPORTED_MODULE_5_date_fns__["endOfDay"]
        }[this.view];
        this.blockUI.start('Attendere prego...');
        this.leaveService.getLeaves(Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["format"])(getStart(this.viewDate[0]), 'DD-MM-YYYY'), Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["format"])(getEnd(this.viewDate[11]), 'DD-MM-YYYY'), this.getSelectedEmployeId())
            .then(function (leaves) {
            _this.updateEmployeLeavesNumber(leaves.length);
            _this.setLeaves(leaves);
            _this.stopBlockUI();
        })
            .catch(function (error) { return _this.stopBlockUI(); });
    };
    FullYearLeavesComponent.prototype.updateEmployeLeavesNumber = function (leavesNumber) {
        var employeId = this.getSelectedEmployeId();
        employeId = employeId ? employeId : __WEBPACK_IMPORTED_MODULE_12__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().loggedEmploye.id;
        var employe = __WEBPACK_IMPORTED_MODULE_12__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().loggedEmploye;
        employe = (this.employeAutocomplete && this.employeAutocomplete.employes.length > 0) ?
            this.employeAutocomplete.employes.find(function (e) { return e.id === employeId; }) : employe;
        employe.currentYearLeaves = leavesNumber;
    };
    FullYearLeavesComponent.prototype.setLeaves = function (leaves) {
        var _this = this;
        this.leavesDates = new Array();
        leaves.forEach(function (l) { return _this.leavesDates.push(l); });
        this.refresh.next();
    };
    FullYearLeavesComponent.prototype.getYearMonths = function () {
        var yearMonths = new Array();
        for (var i = 0; i < 12; i++) {
            yearMonths.push(new Date(this.currentYear, i, 1));
        }
        return yearMonths;
    };
    FullYearLeavesComponent.prototype.beforeMonthViewRender = function (_a) {
        var _this = this;
        var body = _a.body;
        body.forEach(function (day) {
            _this.setDayCss(day);
            if (day.inMonth) {
                var dayIndex = _this.yearAllDay.findIndex(function (d) { return Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["isSameDay"])(d.date, day.date); });
                if (dayIndex > -1) {
                    _this.yearAllDay[dayIndex] = day;
                }
                else {
                    _this.yearAllDay.push(day);
                }
            }
        });
    };
    FullYearLeavesComponent.prototype.dayClicked = function (event, day) {
        var initLeaves = new Date(day.date);
        var endLeaves = event.shiftKey && this.lastEnteredLeave ? new Date(this.lastEnteredLeave) : initLeaves;
        var isSecondShift = false;
        if (initLeaves > endLeaves) {
            var tmp = endLeaves;
            endLeaves = initLeaves;
            initLeaves = tmp;
        }
        if (!this.lastEnteredLeave && event.shiftKey) {
            this.lastEnteredLeave = new Date(day.date);
            day.cssClass = 'cal-cell-top cal-cell-leave-period';
            return;
        }
        else if (event.shiftKey) {
            isSecondShift = true;
        }
        this.lastEnteredLeave = undefined;
        this.addRemoveLeaves(initLeaves, endLeaves, isSecondShift);
    };
    FullYearLeavesComponent.prototype.addRemoveLeaves = function (initLeaves, endLeaves, isSecondShift) {
        var leavesDays = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["eachDay"])(initLeaves, endLeaves);
        var addedLeaves = [];
        var removededLeaves = [];
        var _loop_1 = function (i) {
            var leavesDay = this_1.yearAllDay.find(function (d) { return Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["isSameDay"])(d.date, leavesDays[i]); });
            if (leavesDay && leavesDay.inMonth && !__WEBPACK_IMPORTED_MODULE_9__shared_utils__["a" /* Utils */].isHolidayDay(leavesDay.date)) {
                var index = this_1.leavesDates.findIndex(function (leave) { return Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["isSameDay"])(leave.date, leavesDay.date); });
                if (index > -1) {
                    leavesDay.cssClass = 'cal-cell-top cal-cell-normal';
                    removededLeaves.push(this_1.leavesDates[index]);
                }
                else {
                    leavesDay.cssClass = 'cal-cell-top cal-cell-leave-period';
                    var leave = new __WEBPACK_IMPORTED_MODULE_11__shared_dto_leave__["a" /* FullDayLeave */]();
                    leave.date = leavesDay.date;
                    addedLeaves.push(leave);
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < leavesDays.length; i++) {
            _loop_1(i);
        }
        this.updateLeaves(addedLeaves, removededLeaves);
    };
    FullYearLeavesComponent.prototype.updateLeaves = function (addedLeaves, removededLeaves) {
        var _this = this;
        this.leaveService.updateLeavesPlan(addedLeaves, removededLeaves, this.getSelectedEmployeId())
            .then(function (resp) { return _this.updateLeavesPlanResponse(resp); })
            .catch(function (error) { return _this.updateLeavesPlanFailure(error); });
    };
    FullYearLeavesComponent.prototype.setDayCss = function (day) {
        day.cssClass = 'cal-cell-top';
        if (__WEBPACK_IMPORTED_MODULE_9__shared_utils__["a" /* Utils */].isHolidayDay(day.date)) {
            day.cssClass += ' cal-cell-normal-holiday';
        }
        else if (this.leavesDates.findIndex(function (leave) { return Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["isSameDay"])(leave.date, day.date); }) > -1 && day.inMonth) {
            day.cssClass += ' cal-cell-leave';
        }
        else {
            day.cssClass += ' cal-cell-normal';
        }
        this.setTodayCss(day);
        day.isToday = false;
    };
    FullYearLeavesComponent.prototype.setTodayCss = function (day) {
        if (Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["isToday"])(day.date) && day.inMonth) {
            day.cssClass += (day.cssClass.endsWith('cal-cell-normal')) ? ' cal-cell-today-year' : ' cal-cell-today-year-is-leave';
        }
    };
    FullYearLeavesComponent.prototype.nextYear = function () {
        this.currentYear++;
        __WEBPACK_IMPORTED_MODULE_12__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().currentYear++;
        this.viewDate = this.getYearMonths();
        this.fetchLeaves();
    };
    FullYearLeavesComponent.prototype.previousYear = function () {
        this.currentYear--;
        __WEBPACK_IMPORTED_MODULE_12__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().currentYear--;
        this.viewDate = this.getYearMonths();
        this.fetchLeaves();
    };
    FullYearLeavesComponent.prototype.updateLeavesPlanResponse = function (response) {
        var lineBreak = (response.savedDates && response.removedDates) ? '<br/>' : '';
        var succesMsg = response.savedDates ? "le seguente date sono state aggiunte correttamente:<br/><div class=\"toast-dates\">" + response.savedDates + ".</div>" + lineBreak : '';
        succesMsg += response.removedDates ? "le seguente date sono state rimosse correttamente:<br/><div class=\"toast-dates\">" + response.removedDates + ".</div>" : '';
        if (!!succesMsg) {
            this.toastr.success(succesMsg);
        }
        if (response.rejectedDates) {
            this.toastr.error("Per Assicurare la copertura le seguente date sono state scartate:<br/><div class=\"toast-dates\">" + response.rejectedDates + ".</div>");
        }
        this.fetchLeaves();
    };
    FullYearLeavesComponent.prototype.updateLeavesPlanFailure = function (error) {
        this.toastr.error('Errore Generico: Le modifiche apportate non sono state salvate.');
        this.fetchLeaves();
    };
    FullYearLeavesComponent.prototype.getSelectedEmployeId = function () {
        var employe = this.employeAutocomplete ? this.employeAutocomplete.getselectedEmploye() : undefined;
        return employe ? employe.id : undefined;
    };
    FullYearLeavesComponent.prototype.stopBlockUI = function () {
        this.blockUI.stop();
        this.ref.markForCheck();
    };
    return FullYearLeavesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('employeAutocomplete'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_14__employe_autocomplete_employe_autocomplete_component__["a" /* EmployeAutocompleteComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__employe_autocomplete_employe_autocomplete_component__["a" /* EmployeAutocompleteComponent */]) === "function" && _a || Object)
], FullYearLeavesComponent.prototype, "employeAutocomplete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUI"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["NgBlockUI"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["NgBlockUI"]) === "function" && _b || Object)
], FullYearLeavesComponent.prototype, "blockUI", void 0);
FullYearLeavesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-full-year-leaves',
        template: __webpack_require__("../../../../../src/app/full-year-leaves/full-year-leaves.component.html"),
        styles: [__webpack_require__("../../../../../src/app/full-year-leaves/full-year-leaves.component.css")],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["a" /* CalendarDateFormatter */],
                useClass: __WEBPACK_IMPORTED_MODULE_8__shared_custom_date_formatter_provider__["a" /* CustomDateFormatter */]
            }],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__service_leave_service__["a" /* LeaveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__service_leave_service__["a" /* LeaveService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_15__service_coverage_service__["a" /* CoverageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__service_coverage_service__["a" /* CoverageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _f || Object])
], FullYearLeavesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=full-year-leaves.component.js.map

/***/ }),

/***/ "../../../../../src/app/full-year-leaves/full-year-leaves.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullYearLeavesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__full_year_leaves_component__ = __webpack_require__("../../../../../src/app/full-year-leaves/full-year-leaves.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__employe_autocomplete_employe_autocomplete_module__ = __webpack_require__("../../../../../src/app/employe-autocomplete/employe-autocomplete.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FullYearLeavesModule = (function () {
    function FullYearLeavesModule() {
    }
    return FullYearLeavesModule;
}());
FullYearLeavesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__full_year_leaves_component__["a" /* FullYearLeavesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_calendar__["b" /* CalendarModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__["BlockUIModule"],
            __WEBPACK_IMPORTED_MODULE_9__shared_used_material_module__["a" /* UsedMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_10__employe_autocomplete_employe_autocomplete_module__["a" /* EmployeAutocompleteModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_8__full_year_leaves_component__["a" /* FullYearLeavesComponent */]
        ]
    })
], FullYearLeavesModule);

//# sourceMappingURL=full-year-leaves.module.js.map

/***/ }),

/***/ "../../../../../src/app/holiday-shutdowns/holiday-shutdown-list/holiday-shutdown-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"editMode; then edit else list\"></div>\n<ng-template #list>\n  <div class=\"container\">\n    <h3>Inserisci periodo di chiursura</h3>\n    <ng-container *ngTemplateOutlet=\"form\"></ng-container>\n    <hr class=\"dashed text-primary\">\n    <div *ngIf=\"(holidayShutdowns && holidayShutdowns.length > 0); then notEmpty else empty\"></div>\n    <ng-template #notEmpty>\n      <h3>Chiusure programmate</h3>\n      <md-list>\n        <app-holiday-shutdown *ngFor=\"let holidayShutdown of holidayShutdowns;\" [item]=\"holidayShutdown\" (updateRequest)=\"editHolidayShutdown(holidayShutdown) \"\n          (deleteRequest)=\"deleteHolidayShutdown(holidayShutdown) \"></app-holiday-shutdown>\n      </md-list>\n    </ng-template>\n    <ng-template #empty>\n      <h3>Non ci sono chiusure programmate</h3>\n    </ng-template>\n    <br>\n  </div>\n</ng-template>\n<ng-template #edit>\n  <div class=\"container\">\n    <h3>Modifica periodo di chiursura</h3>\n    <ng-container *ngTemplateOutlet=\"form\"></ng-container>\n    <br>\n  </div>\n</ng-template>\n<ng-template #form>\n  <form class=\"form-inline\" [formGroup]=\"holidayShutdownsForm\" ngNativeValidate>\n    <div class=\"form-group\">\n      <div class=\"mx-sm-3 input-group\">\n        <input id=\"from\" class=\"form-control\" placeholder=\"Dal\" formControlName=\"from\" [(ngModel)]=\"holidayShutdownModel.from\" ngbDatepicker\n          #dFrom=\"ngbDatepicker\" (click)=\"dTo.close();dFrom.close();\" required>\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"dFrom.toggle();dTo.close();\">\n            <i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"font-size:24px;width: 1.2rem; height: 1rem; cursor: pointer;\"></i>\n          </button>\n        </span>\n      </div>\n      <div class=\"mx-sm-3 input-group\">\n        <input id=\"to\" class=\"form-control\" placeholder=\"Al\" formControlName=\"to\" [(ngModel)]=\"holidayShutdownModel.to\" ngbDatepicker\n          #dTo=\"ngbDatepicker\" (click)=\"dTo.close();dFrom.close();\" required>\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"dTo.toggle();dFrom.close();\">\n            <i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"font-size:24px;width: 1.2rem; height: 1rem; cursor: pointer;\"></i>\n          </button>\n        </span>\n      </div>\n      <div class=\"mx-sm-3\">\n        <span ngbTooltip=\"Salva\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"saveHolidayShutdown()\" [disabled]=\"!holidayShutdownsForm.valid\">\n            <i class=\"fa fa-floppy-o\" aria-hidden=\"true\" style=\"font-size:24px;width: 1.2rem; height: 1rem;\"></i>\n          </button>\n        </span>\n        <span ngbTooltip=\"Annulla\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"resetView()\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\" style=\"font-size:24px;width: 1.2rem; height: 1rem;\"></i>\n          </button>\n        </span>\n      </div>\n    </div>\n    <ul *ngIf=\"isFormInvalid()\" class=\"col list-group\">\n      <li *ngFor=\"let msg of getErrorMsg()\" class=\"list-group-item list-group-item-danger\">{{msg}}</li>\n    </ul>\n  </form>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/holiday-shutdowns/holiday-shutdown-list/holiday-shutdown-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayShutdownListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dto_holiday_shutdown__ = __webpack_require__("../../../../../src/app/shared/dto/holiday-shutdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_holiday_shutdowns_service__ = __webpack_require__("../../../../../src/app/service/holiday-shutdowns.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators__ = __webpack_require__("../../../../../src/app/shared/validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils__ = __webpack_require__("../../../../../src/app/shared/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormErrors;
(function (FormErrors) {
    FormErrors[FormErrors["None"] = 0] = "None";
    FormErrors[FormErrors["startDate"] = 1] = "startDate";
    FormErrors[FormErrors["EndDate"] = 2] = "EndDate";
    FormErrors[FormErrors["DateBeforeThan"] = 3] = "DateBeforeThan";
})(FormErrors || (FormErrors = {}));
var HolidayShutdownListComponent = (function () {
    function HolidayShutdownListComponent(holidayShutdownsService, fb, ref) {
        this.holidayShutdownsService = holidayShutdownsService;
        this.fb = fb;
        this.ref = ref;
        this.holidayShutdownModel = new __WEBPACK_IMPORTED_MODULE_2__shared_dto_holiday_shutdown__["a" /* HolidayShutdown */]();
        this.editMode = false;
        this.createForm();
    }
    HolidayShutdownListComponent.prototype.ngAfterViewInit = function () {
        this.fetchHolidayShudowns();
    };
    HolidayShutdownListComponent.prototype.fetchHolidayShudowns = function () {
        var _this = this;
        this.holidayShutdownsService.getHolidayShutdowns()
            .then(function (holidayShutdowns) { return _this.updateHolidayShutdownsList(holidayShutdowns); });
    };
    HolidayShutdownListComponent.prototype.updateHolidayShutdownsList = function (holidayShutdowns) {
        this.holidayShutdowns = holidayShutdowns;
        this.holidayShutdowns.forEach(function (hs) {
            hs.from = new Date(hs.from);
            hs.to = new Date(hs.to);
        });
        this.ref.markForCheck();
    };
    HolidayShutdownListComponent.prototype.createForm = function () {
        var _this = this;
        this.holidayShutdownsForm = this.fb.group({
            from: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.holidayShutdownModel.from, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            to: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.holidayShutdownModel.to, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        }, { validator: Object(__WEBPACK_IMPORTED_MODULE_4__shared_validators__["b" /* dateBeforeThan */])('from', 'to') });
        this.startDateSubscription = this.from.valueChanges.subscribe(function (date) {
            if (!_this.to.value || Object(__WEBPACK_IMPORTED_MODULE_5__shared_utils__["b" /* after */])(date, _this.to.value)) {
                _this.to.patchValue(date);
            }
        });
    };
    HolidayShutdownListComponent.prototype.saveHolidayShutdown = function () {
        var _this = this;
        if (this.holidayShutdownModel) {
            this.holidayShutdownsService.saveHolidayShutdown(this.holidayShutdownModel)
                .then(function (hs) {
                _this.holidayShutdowns.unshift(hs);
                _this.resetForm();
                _this.fetchHolidayShudowns();
            });
        }
    };
    HolidayShutdownListComponent.prototype.editHolidayShutdown = function (holidayShutdown) {
        this.holidayShutdownModel.id = holidayShutdown.id;
        this.from.setValue(this.getNgbDateStruct(holidayShutdown.from));
        this.to.setValue(this.getNgbDateStruct(holidayShutdown.to));
        this.editMode = true;
        this.ref.markForCheck();
    };
    HolidayShutdownListComponent.prototype.resetView = function () {
        this.resetForm();
        this.ref.markForCheck();
    };
    HolidayShutdownListComponent.prototype.deleteHolidayShutdown = function (holidayShutdown) {
        var _this = this;
        this.holidayShutdownsService.deleteHolidayShutdown(holidayShutdown.id)
            .then(function () {
            _this.holidayShutdowns = _this.holidayShutdowns.filter(function (s) { return s.id !== holidayShutdown.id; });
            _this.fetchHolidayShudowns();
        });
    };
    HolidayShutdownListComponent.prototype.resetForm = function () {
        this.editMode = false;
        this.holidayShutdownModel = new __WEBPACK_IMPORTED_MODULE_2__shared_dto_holiday_shutdown__["a" /* HolidayShutdown */]();
        this.holidayShutdownsForm.reset();
    };
    HolidayShutdownListComponent.prototype.enumerateFormErrors = function () {
        var errors = [];
        var formDirty = (this.holidayShutdownsForm.dirty || this.holidayShutdownsForm.touched);
        if (formDirty && this.to.invalid && this.to.errors.required) {
            errors.push(FormErrors.EndDate);
        }
        if (formDirty && this.from.invalid && this.from.errors.required) {
            errors.push(FormErrors.startDate);
        }
        if (formDirty && this.holidayShutdownsForm.errors && this.holidayShutdownsForm.errors.dateError) {
            errors.push(FormErrors.DateBeforeThan);
        }
        if (errors.length === 0) {
            errors.push(FormErrors.None);
        }
        return errors;
    };
    HolidayShutdownListComponent.prototype.isFormInvalid = function () {
        var errors = this.enumerateFormErrors();
        return errors[0] !== FormErrors.None;
    };
    HolidayShutdownListComponent.prototype.getErrorMsg = function () {
        var errors = this.enumerateFormErrors();
        var msg = [];
        errors.forEach(function (e) {
            switch (e) {
                case FormErrors.EndDate:
                    msg.push('Data fine obbligatoria.');
                    break;
                case FormErrors.startDate:
                    msg.push('Data inizio obbligatoria.');
                    break;
                case FormErrors.DateBeforeThan:
                    msg.push('La data inzio deve essere maggiore o uguale alla data fine.');
                    break;
                default:
                    msg.push('');
            }
        });
        return msg;
    };
    Object.defineProperty(HolidayShutdownListComponent.prototype, "from", {
        get: function () { return this.holidayShutdownsForm.get('from'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HolidayShutdownListComponent.prototype, "to", {
        get: function () { return this.holidayShutdownsForm.get('to'); },
        enumerable: true,
        configurable: true
    });
    HolidayShutdownListComponent.prototype.getNgbDateStruct = function (date) {
        return {
            'year': date.getFullYear(),
            'month': date.getMonth() + 1,
            'day': date.getDate()
        };
    };
    HolidayShutdownListComponent.prototype.ngOnDestroy = function () {
        this.startDateSubscription.unsubscribe();
    };
    return HolidayShutdownListComponent;
}());
HolidayShutdownListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-holiday-shutdown-list',
        template: __webpack_require__("../../../../../src/app/holiday-shutdowns/holiday-shutdown-list/holiday-shutdown-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_holiday_shutdowns_service__["a" /* HolidayShutdownsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_holiday_shutdowns_service__["a" /* HolidayShutdownsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], HolidayShutdownListComponent);

var _a, _b, _c;
//# sourceMappingURL=holiday-shutdown-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/holiday-shutdowns/holiday-shutdown-list/holiday-shutdown-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayShutdownListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__holiday_shutdown_list_component__ = __webpack_require__("../../../../../src/app/holiday-shutdowns/holiday-shutdown-list/holiday-shutdown-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__holiday_shutdown_holiday_shutdown_module__ = __webpack_require__("../../../../../src/app/holiday-shutdowns/holiday-shutdown/holiday-shutdown.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_holiday_shutdowns_service__ = __webpack_require__("../../../../../src/app/service/holiday-shutdowns.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_ngb_date_fr_parser_formatter__ = __webpack_require__("../../../../../src/app/shared/ngb-date-fr-parser-formatter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_italianDatepickerI18n__ = __webpack_require__("../../../../../src/app/shared/italianDatepickerI18n.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HolidayShutdownListModule = (function () {
    function HolidayShutdownListModule() {
    }
    return HolidayShutdownListModule;
}());
HolidayShutdownListModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [__WEBPACK_IMPORTED_MODULE_8__service_holiday_shutdowns_service__["a" /* HolidayShutdownsService */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbDateParserFormatter */], useClass: __WEBPACK_IMPORTED_MODULE_9__shared_ngb_date_fr_parser_formatter__["a" /* NgbDateFRParserFormatter */] },
            __WEBPACK_IMPORTED_MODULE_10__shared_italianDatepickerI18n__["a" /* I18n */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbDatepickerI18n */], useClass: __WEBPACK_IMPORTED_MODULE_10__shared_italianDatepickerI18n__["b" /* ItalianDatepickerI18n */] }
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_7__holiday_shutdown_holiday_shutdown_module__["a" /* HolidayShutdownModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_used_material_module__["a" /* UsedMaterialModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__holiday_shutdown_list_component__["a" /* HolidayShutdownListComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__holiday_shutdown_list_component__["a" /* HolidayShutdownListComponent */]
        ]
    })
], HolidayShutdownListModule);

//# sourceMappingURL=holiday-shutdown-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/holiday-shutdowns/holiday-shutdown/holiday-shutdown.component.html":
/***/ (function(module, exports) {

module.exports = "<md-list-item>\n    <span md-line>\n        Dal {{item.from | date: 'dd/MM/yyyy'}} al {{item.to | date: 'dd/MM/yyyy'}}\n    </span>\n    <span ngbTooltip=\"Modifica\">\n        <button md-icon-button (click)=\"update()\">\n            <md-icon class=\"md-24\">edit</md-icon>\n        </button>\n    </span>\n    <span ngbTooltip=\"Elimina\">\n        <button md-icon-button (click)=\"delete()\">\n            <md-icon class=\"md-24\">delete</md-icon>\n        </button>\n    </span>\n</md-list-item>"

/***/ }),

/***/ "../../../../../src/app/holiday-shutdowns/holiday-shutdown/holiday-shutdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayShutdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dto_holiday_shutdown__ = __webpack_require__("../../../../../src/app/shared/dto/holiday-shutdown.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HolidayShutdownComponent = (function () {
    function HolidayShutdownComponent() {
        this.updateRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HolidayShutdownComponent.prototype.update = function () {
        this.updateRequest.emit();
    };
    HolidayShutdownComponent.prototype.delete = function () {
        this.deleteRequest.emit();
    };
    return HolidayShutdownComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dto_holiday_shutdown__["a" /* HolidayShutdown */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dto_holiday_shutdown__["a" /* HolidayShutdown */]) === "function" && _a || Object)
], HolidayShutdownComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], HolidayShutdownComponent.prototype, "updateRequest", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], HolidayShutdownComponent.prototype, "deleteRequest", void 0);
HolidayShutdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-holiday-shutdown',
        template: __webpack_require__("../../../../../src/app/holiday-shutdowns/holiday-shutdown/holiday-shutdown.component.html")
    }),
    __metadata("design:paramtypes", [])
], HolidayShutdownComponent);

var _a, _b, _c;
//# sourceMappingURL=holiday-shutdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/holiday-shutdowns/holiday-shutdown/holiday-shutdown.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayShutdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__holiday_shutdown_component__ = __webpack_require__("../../../../../src/app/holiday-shutdowns/holiday-shutdown/holiday-shutdown.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HolidayShutdownModule = (function () {
    function HolidayShutdownModule() {
    }
    return HolidayShutdownModule;
}());
HolidayShutdownModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_used_material_module__["a" /* UsedMaterialModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__holiday_shutdown_component__["a" /* HolidayShutdownComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__holiday_shutdown_component__["a" /* HolidayShutdownComponent */]
        ]
    })
], HolidayShutdownModule);

//# sourceMappingURL=holiday-shutdown.module.js.map

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period-list/inflexibility-period-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".employe-chip {\r\n    color: white !important;\r\n    margin: 0.1rem !important;\r\n}\r\n\r\n/deep/ .mat-chip:not(.mat-basic-chip) .mat-chip-remove {\r\n    color: white;\r\n    opacity: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period-list/inflexibility-period-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"editMode; then edit else list\"></div>\n<ng-template #list>\n  <div class=\"container\">\n    <h3>Inserisci periodo di presenza</h3>\n    <ng-container *ngTemplateOutlet=\"form\"></ng-container>\n    <hr class=\"dotted text-primary\">\n    <div *ngIf=\"(inflexibilityPeriods && inflexibilityPeriods.length > 0); then notEmpty else empty\"></div>\n    <ng-template #notEmpty>\n      <md-list>\n        <h3>Presenze obbligatorie programmate</h3>\n        <app-inflexibility-period *ngFor=\"let inflexibilityPeriod of inflexibilityPeriods;\" [item]=\"inflexibilityPeriod\" (updateRequest)=\"editInflexibilityPeriod(inflexibilityPeriod) \"\n          (deleteRequest)=\"deleteInflexibilityPeriod(inflexibilityPeriod) \"></app-inflexibility-period>\n      </md-list>\n    </ng-template>\n    <ng-template #empty>\n      <h3>Non ci sono periodi di presenze obbligatorie.</h3>\n    </ng-template>\n    <br>\n  </div>\n</ng-template>\n<ng-template #edit>\n  <div class=\"container\">\n    <h3>Modifica periodo di presenza</h3>\n    <ng-container *ngTemplateOutlet=\"form\"></ng-container>\n    <br>\n  </div>\n</ng-template>\n<ng-template #form>\n  <form class=\"form\" [formGroup]=\"inflexibilityPeriodForm\" ngNativeValidate>\n    <div class=\"form-group row\">\n      <div class=\"col input-group\">\n        <input id=\"from\" class=\"form-control\" placeholder=\"Dal\" formControlName=\"from\" [(ngModel)]=\"inflexibilityPeriodModel.from\"\n          ngbDatepicker #dFrom=\"ngbDatepicker\" (click)=\"dTo.close();dFrom.close();\" required>\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"dFrom.toggle();dTo.close();\">\n            <i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"font-size:24px;width: 1.2rem; height: 1rem; cursor: pointer;\"></i>\n          </button>\n        </span>\n      </div>\n      <div class=\"col input-group\">\n        <input id=\"to\" class=\"form-control\" placeholder=\"Al\" formControlName=\"to\" [(ngModel)]=\"inflexibilityPeriodModel.to\" ngbDatepicker\n          #dTo=\"ngbDatepicker\" (click)=\"dTo.close();dFrom.close();\" required>\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"dTo.toggle();dFrom.close();\">\n            <i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"font-size:24px;width: 1.2rem; height: 1rem; cursor: pointer;\"></i>\n          </button>\n        </span>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col input-group\">\n        <app-inflexibility-period-motivation #motivationAutocomplete placeholder=\"Aggiungi motivo\" [editMotivation]=\"inflexibilityPeriodModel.inflexibilityPeriodMotivation\"\n          (reset)=\"resetMotivation()\" (selected)=\"selectedMotivation($event)\" style=\"width: 100%\">\n        </app-inflexibility-period-motivation>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-4\">\n        <app-employe-autocomplete #employeAutocomplete placeholder=\"Aggiungi dipendente\" (selected)=\"selectedEmploye($event)\">\n        </app-employe-autocomplete>\n      </div>\n      <div class=\"col-12\">\n        <md-chip-list selectable=\"false\" placeholder=\"Dipendenti\" required>\n          <md-chip *ngFor=\"let employe of inflexibilityPeriodModel.employes;\" (remove)=\"removeChip(employe)\" color=\"primary\" [ngClass]=\"getChipColor(employe)\"\n            selected=\"false\">\n            {{ employe?.surname}} {{employe?.name}}\n            <md-icon mdChipRemove class=\"employe-chip-remove\">cancel</md-icon>\n          </md-chip>\n        </md-chip-list>\n      </div>\n    </div>\n    <ul *ngIf=\"isFormInvalid()\" class=\"col list-group\">\n      <li *ngFor=\"let msg of getErrorMsg()\" class=\"list-group-item list-group-item-danger\">{{msg}}</li>\n    </ul>\n    <hr class=\"dotted text-primary\">\n    <div class=\"form-group row\">\n      <div class=\"col text-left\">\n        <span ngbTooltip=\"Salva\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"saveInflexibilityPeriod()\" [disabled]=\"!inflexibilityPeriodForm.valid\">\n            <i class=\"fa fa-floppy-o\" aria-hidden=\"true\" style=\"font-size:24px;width: 1.2rem; height: 1rem;\"></i>\n          </button>\n        </span>\n        <span ngbTooltip=\"Annulla\">\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"resetView()\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\" style=\"font-size:24px;width: 1.2rem; height: 1rem;\"></i>\n          </button>\n        </span>\n      </div>\n      <div class=\"col\">\n      </div>\n    </div>\n  </form>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period-list/inflexibility-period-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InflexibilityPeriodListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inflexibility_period_motivation_inflexibility_period_motivation_component__ = __webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period-motivation/inflexibility-period-motivation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dto_inflexibility_period__ = __webpack_require__("../../../../../src/app/shared/dto/inflexibility-period.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_inflexibility_periods_service__ = __webpack_require__("../../../../../src/app/service/inflexibility-periods.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_validators__ = __webpack_require__("../../../../../src/app/shared/validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employe_autocomplete_employe_autocomplete_component__ = __webpack_require__("../../../../../src/app/employe-autocomplete/employe-autocomplete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_utils__ = __webpack_require__("../../../../../src/app/shared/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FormErrors;
(function (FormErrors) {
    FormErrors[FormErrors["None"] = 0] = "None";
    FormErrors[FormErrors["startDate"] = 1] = "startDate";
    FormErrors[FormErrors["EndDate"] = 2] = "EndDate";
    FormErrors[FormErrors["DateBeforeThan"] = 3] = "DateBeforeThan";
    FormErrors[FormErrors["MotivationEmpty"] = 4] = "MotivationEmpty";
    FormErrors[FormErrors["EmployeArrayEmpty"] = 5] = "EmployeArrayEmpty";
})(FormErrors || (FormErrors = {}));
var InflexibilityPeriodListComponent = (function () {
    function InflexibilityPeriodListComponent(inflexibilityPeriodsService, fb, ref) {
        this.inflexibilityPeriodsService = inflexibilityPeriodsService;
        this.fb = fb;
        this.ref = ref;
        this.chipsCssSuffix = ' font-weight-bolder employe-chip';
        this.employesArrayToValidate = new Array();
        this.inflexibilityPeriodModel = new __WEBPACK_IMPORTED_MODULE_3__shared_dto_inflexibility_period__["a" /* InflexibilityPeriod */]();
        this.editMode = false;
        this.employesArrayToValidate.push(this.inflexibilityPeriodModel.employes);
        this.createForm();
    }
    InflexibilityPeriodListComponent.prototype.ngAfterViewInit = function () {
        this.fetchInflexibilityPeriods();
    };
    InflexibilityPeriodListComponent.prototype.fetchInflexibilityPeriods = function () {
        var _this = this;
        this.inflexibilityPeriodsService.getInflexibilityPeriods()
            .then(function (inflexibilityPeriods) { return _this.updateInflexibilityPeriodsList(inflexibilityPeriods); });
    };
    InflexibilityPeriodListComponent.prototype.updateInflexibilityPeriodsList = function (inflexibilityPeriods) {
        var _this = this;
        inflexibilityPeriods.forEach(function (hs) { return _this.setEmployeState(hs.employes); });
        inflexibilityPeriods.forEach(function (hs) {
            hs.from = new Date(hs.from);
            hs.to = new Date(hs.to);
        });
        this.inflexibilityPeriods = inflexibilityPeriods;
        this.ref.markForCheck();
    };
    InflexibilityPeriodListComponent.prototype.setEmployeState = function (employes) {
        var _this = this;
        employes.forEach(function (e) {
            var employe = _this.employeAutocomplete.employes.find(function (emp) { return emp.id === e.id; });
            e.state = employe.state;
        });
    };
    InflexibilityPeriodListComponent.prototype.createForm = function () {
        var _this = this;
        this.inflexibilityPeriodForm = this.fb.group({
            from: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](this.inflexibilityPeriodModel.from, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required),
            to: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](this.inflexibilityPeriodModel.to, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required),
            formValidatorHelper: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('Just to trigger validation', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required)
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([Object(__WEBPACK_IMPORTED_MODULE_5__shared_validators__["b" /* dateBeforeThan */])('from', 'to'),
                Object(__WEBPACK_IMPORTED_MODULE_5__shared_validators__["a" /* arrayNotEmpty */])(this.employesArrayToValidate), this.motivationEmpty()])
        });
        this.startDateSubscription = this.from.valueChanges.subscribe(function (date) {
            if (!_this.to.value || Object(__WEBPACK_IMPORTED_MODULE_8__shared_utils__["b" /* after */])(date, _this.to.value)) {
                _this.to.patchValue(date);
            }
        });
    };
    InflexibilityPeriodListComponent.prototype.saveInflexibilityPeriod = function () {
        var _this = this;
        if (this.inflexibilityPeriodModel) {
            this.inflexibilityPeriodsService.saveInflexibilityPeriod(this.inflexibilityPeriodModel)
                .then(function (hs) {
                _this.resetForm();
                _this.fetchInflexibilityPeriods();
            });
        }
    };
    InflexibilityPeriodListComponent.prototype.editInflexibilityPeriod = function (inflexibilityPeriod) {
        this.inflexibilityPeriodModel = JSON.parse(JSON.stringify(inflexibilityPeriod));
        this.employesArrayToValidate.splice(0, 1);
        this.employesArrayToValidate.push(this.inflexibilityPeriodModel.employes);
        this.from.setValue(this.getNgbDateStruct(inflexibilityPeriod.from));
        this.to.setValue(this.getNgbDateStruct(inflexibilityPeriod.to));
        this.editMode = true;
        this.ref.markForCheck();
    };
    InflexibilityPeriodListComponent.prototype.resetView = function () {
        this.resetForm();
        this.ref.markForCheck();
    };
    InflexibilityPeriodListComponent.prototype.deleteInflexibilityPeriod = function (inflexibilityPeriod) {
        var _this = this;
        this.inflexibilityPeriodsService.deleteInflexibilityPeriod(inflexibilityPeriod.id)
            .then(function () {
            _this.inflexibilityPeriods = _this.inflexibilityPeriods.filter(function (s) { return s.id !== inflexibilityPeriod.id; });
            _this.fetchInflexibilityPeriods();
        });
    };
    InflexibilityPeriodListComponent.prototype.enumerateFormErrors = function () {
        var errors = [];
        var formDirty = (this.inflexibilityPeriodForm.dirty || this.inflexibilityPeriodForm.touched);
        if (formDirty && this.to.invalid && this.to.errors.required) {
            errors.push(FormErrors.EndDate);
        }
        if (formDirty && this.from.invalid && this.from.errors.required) {
            errors.push(FormErrors.startDate);
        }
        if (formDirty && this.inflexibilityPeriodForm.errors && this.inflexibilityPeriodForm.errors.dateError) {
            errors.push(FormErrors.DateBeforeThan);
        }
        if (formDirty && this.inflexibilityPeriodForm.errors && this.inflexibilityPeriodForm.errors.motivationEmpty) {
            errors.push(FormErrors.MotivationEmpty);
        }
        if (formDirty && this.inflexibilityPeriodForm.errors && this.inflexibilityPeriodForm.errors.arrayEmpty) {
            errors.push(FormErrors.EmployeArrayEmpty);
        }
        if (errors.length === 0) {
            errors.push(FormErrors.None);
        }
        return errors;
    };
    InflexibilityPeriodListComponent.prototype.isFormInvalid = function () {
        var errors = this.enumerateFormErrors();
        return errors[0] !== FormErrors.None;
    };
    InflexibilityPeriodListComponent.prototype.getErrorMsg = function () {
        var errors = this.enumerateFormErrors();
        var msg = [];
        errors.forEach(function (e) {
            switch (e) {
                case FormErrors.EndDate:
                    msg.push('Data fine obbligatoria.');
                    break;
                case FormErrors.startDate:
                    msg.push('Data inizio obbligatoria.');
                    break;
                case FormErrors.DateBeforeThan:
                    msg.push('La data inzio deve essere maggiore o uguale alla data fine.');
                    break;
                case FormErrors.MotivationEmpty:
                    msg.push('Aggiungere un motivo.');
                    break;
                case FormErrors.EmployeArrayEmpty:
                    msg.push('Aggiungere al meno un dipendente.');
                    break;
                default:
                    msg.push('');
            }
        });
        return msg;
    };
    InflexibilityPeriodListComponent.prototype.resetForm = function () {
        this.editMode = false;
        this.motivationAutocomplete.resetSearch();
        this.employeAutocomplete.resetSearch();
        this.inflexibilityPeriodModel = new __WEBPACK_IMPORTED_MODULE_3__shared_dto_inflexibility_period__["a" /* InflexibilityPeriod */]();
        this.employesArrayToValidate.splice(0, 1);
        this.employesArrayToValidate.push(this.inflexibilityPeriodModel.employes);
        this.inflexibilityPeriodForm.reset(({ formValidatorHelper: 'Just to trigger array validation' }));
    };
    InflexibilityPeriodListComponent.prototype.selectedEmploye = function (employe) {
        var index = this.inflexibilityPeriodModel.employes.indexOf(employe);
        if (index === -1) {
            this.inflexibilityPeriodModel.employes.push(this.employeAutocomplete.getselectedEmploye());
            this.employeAutocomplete.resetSearch();
            this.formValidatorHelper.markAsTouched();
            this.inflexibilityPeriodForm.updateValueAndValidity();
        }
    };
    InflexibilityPeriodListComponent.prototype.removeChip = function (employe) {
        var index = this.inflexibilityPeriodModel.employes.indexOf(employe);
        if (index >= 0) {
            this.inflexibilityPeriodModel.employes.splice(index, 1);
            this.formValidatorHelper.markAsTouched();
            this.inflexibilityPeriodForm.updateValueAndValidity();
        }
    };
    InflexibilityPeriodListComponent.prototype.getChipColor = function (employe) {
        switch (employe.state) {
            case __WEBPACK_IMPORTED_MODULE_7__shared_enums__["b" /* EmployeState */].Flexible:
                return 'flexible' + this.chipsCssSuffix;
            case __WEBPACK_IMPORTED_MODULE_7__shared_enums__["b" /* EmployeState */].Inflexible:
                return 'inflexible' + this.chipsCssSuffix;
            case __WEBPACK_IMPORTED_MODULE_7__shared_enums__["b" /* EmployeState */].Indifferent:
                return 'indifferent' + this.chipsCssSuffix;
        }
    };
    InflexibilityPeriodListComponent.prototype.selectedMotivation = function (motivation) {
        this.inflexibilityPeriodModel.inflexibilityPeriodMotivation = motivation;
        this.formValidatorHelper.markAsTouched();
        this.inflexibilityPeriodForm.updateValueAndValidity();
    };
    InflexibilityPeriodListComponent.prototype.resetMotivation = function () {
        this.inflexibilityPeriodModel.inflexibilityPeriodMotivation = undefined;
        this.formValidatorHelper.markAsTouched();
        this.inflexibilityPeriodForm.updateValueAndValidity();
    };
    InflexibilityPeriodListComponent.prototype.motivationEmpty = function () {
        var _this = this;
        return function (group) {
            if (!_this.inflexibilityPeriodModel.inflexibilityPeriodMotivation) {
                return {
                    motivationEmpty: true
                };
            }
            return {};
        };
    };
    Object.defineProperty(InflexibilityPeriodListComponent.prototype, "from", {
        get: function () { return this.inflexibilityPeriodForm.get('from'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InflexibilityPeriodListComponent.prototype, "to", {
        get: function () { return this.inflexibilityPeriodForm.get('to'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InflexibilityPeriodListComponent.prototype, "formValidatorHelper", {
        get: function () { return this.inflexibilityPeriodForm.get('formValidatorHelper'); },
        enumerable: true,
        configurable: true
    });
    InflexibilityPeriodListComponent.prototype.getNgbDateStruct = function (date) {
        return {
            'year': date.getFullYear(), 'month': date.getMonth() + 1,
            'day': date.getDate()
        };
    };
    InflexibilityPeriodListComponent.prototype.ngOnDestroy = function () {
        this.startDateSubscription.unsubscribe();
    };
    return InflexibilityPeriodListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('employeAutocomplete'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__employe_autocomplete_employe_autocomplete_component__["a" /* EmployeAutocompleteComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__employe_autocomplete_employe_autocomplete_component__["a" /* EmployeAutocompleteComponent */]) === "function" && _a || Object)
], InflexibilityPeriodListComponent.prototype, "employeAutocomplete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('motivationAutocomplete'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__inflexibility_period_motivation_inflexibility_period_motivation_component__["a" /* InflexibilityPeriodMotivationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__inflexibility_period_motivation_inflexibility_period_motivation_component__["a" /* InflexibilityPeriodMotivationComponent */]) === "function" && _b || Object)
], InflexibilityPeriodListComponent.prototype, "motivationAutocomplete", void 0);
InflexibilityPeriodListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-inflexibility-period-list',
        template: __webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period-list/inflexibility-period-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period-list/inflexibility-period-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_inflexibility_periods_service__["a" /* InflexibilityPeriodsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_inflexibility_periods_service__["a" /* InflexibilityPeriodsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object])
], InflexibilityPeriodListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=inflexibility-period-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period-list/inflexibility-period-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InflexibilityPeriodListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inflexibility_period_list_component__ = __webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period-list/inflexibility-period-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inflexibility_period_inflexibility_period_module__ = __webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period/inflexibility-period.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_inflexibility_periods_service__ = __webpack_require__("../../../../../src/app/service/inflexibility-periods.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_ngb_date_fr_parser_formatter__ = __webpack_require__("../../../../../src/app/shared/ngb-date-fr-parser-formatter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_italianDatepickerI18n__ = __webpack_require__("../../../../../src/app/shared/italianDatepickerI18n.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__employe_autocomplete_employe_autocomplete_module__ = __webpack_require__("../../../../../src/app/employe-autocomplete/employe-autocomplete.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__inflexibility_period_motivation_inflexibility_period_motivation_module__ = __webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period-motivation/inflexibility-period-motivation.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var InflexibilityPeriodListModule = (function () {
    function InflexibilityPeriodListModule() {
    }
    return InflexibilityPeriodListModule;
}());
InflexibilityPeriodListModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [__WEBPACK_IMPORTED_MODULE_8__service_inflexibility_periods_service__["a" /* InflexibilityPeriodsService */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbDateParserFormatter */], useClass: __WEBPACK_IMPORTED_MODULE_9__shared_ngb_date_fr_parser_formatter__["a" /* NgbDateFRParserFormatter */] },
            __WEBPACK_IMPORTED_MODULE_10__shared_italianDatepickerI18n__["a" /* I18n */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbDatepickerI18n */], useClass: __WEBPACK_IMPORTED_MODULE_10__shared_italianDatepickerI18n__["b" /* ItalianDatepickerI18n */] }
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_7__inflexibility_period_inflexibility_period_module__["a" /* InflexibilityPeriodModule */],
            __WEBPACK_IMPORTED_MODULE_11__employe_autocomplete_employe_autocomplete_module__["a" /* EmployeAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_12__inflexibility_period_motivation_inflexibility_period_motivation_module__["a" /* InflexibilityPeriodMotivationModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_used_material_module__["a" /* UsedMaterialModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__inflexibility_period_list_component__["a" /* InflexibilityPeriodListComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__inflexibility_period_list_component__["a" /* InflexibilityPeriodListComponent */]
        ]
    })
], InflexibilityPeriodListModule);

//# sourceMappingURL=inflexibility-period-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period-motivation/inflexibility-period-motivation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/deep/ .cdk-overlay-container {\r\n    z-index: 1051;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period-motivation/inflexibility-period-motivation.component.html":
/***/ (function(module, exports) {

module.exports = "<md-form-field  style=\"width: 100%\">\n    <input mdInput [placeholder]=\"placeholder\" aria-label=\"motivo\" [mdAutocomplete]=\"motivationsList\"\n        [formControl]=\"motivationCtrl\">\n    <md-icon mdSuffix class=\"align-middle btn-pointer-cursor\" (click)=\"resetSearch()\" ngbTooltip=\"Resetta\">close</md-icon>\n    <md-icon mdSuffix class=\"align-middle btn-pointer-cursor\" (click)=\"addMotivation($event)\" ngbTooltip=\"Aggiungi motivo\">note_add</md-icon>\n    <md-icon mdSuffix class=\"align-middle btn-pointer-cursor\" (click)=\"deleteMotivation()\" ngbTooltip=\"Elimina Motivo\">delete</md-icon>\n    <md-autocomplete #motivationsList=\"mdAutocomplete\" (optionSelected)=\"selectMotivation()\">\n        <md-option *ngFor=\"let motivation of filteredMotivations | async\" [value]=\"motivation.description\">\n            <span> {{ motivation.description}}</span>\n        </md-option>\n    </md-autocomplete>\n</md-form-field>"

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period-motivation/inflexibility-period-motivation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InflexibilityPeriodMotivationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_inflexibility_periods_service__ = __webpack_require__("../../../../../src/app/service/inflexibility-periods.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dto_inflexibility_period_motivation__ = __webpack_require__("../../../../../src/app/shared/dto/inflexibility-period-motivation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InflexibilityPeriodMotivationComponent = (function () {
    function InflexibilityPeriodMotivationComponent(service, ref) {
        this.service = service;
        this.ref = ref;
        this.placeholder = 'Ricerca motivo';
        this.selected = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.reset = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.motivations = [];
    }
    InflexibilityPeriodMotivationComponent.prototype.ngOnInit = function () {
        this.updateControl();
        this.initialize();
    };
    InflexibilityPeriodMotivationComponent.prototype.filterMotivations = function (searchTerm) {
        return this.motivations.filter(function (motivation) {
            return motivation.description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
        });
    };
    InflexibilityPeriodMotivationComponent.prototype.getselectedMotivation = function () {
        var selectedMotivation = this.motivationCtrl.value ? this.filterMotivations(this.motivationCtrl.value) : [];
        if (selectedMotivation.length === 1) {
            this.motivationCtrl.setValue(selectedMotivation[0].description);
            return selectedMotivation[0];
        }
        return undefined;
    };
    InflexibilityPeriodMotivationComponent.prototype.selectMotivation = function () {
        var motivation = this.getselectedMotivation();
        this.selected.emit(motivation);
    };
    InflexibilityPeriodMotivationComponent.prototype.addMotivation = function (event) {
        var _this = this;
        if (!!this.motivationCtrl.value) {
            var newMotivation = new __WEBPACK_IMPORTED_MODULE_3__shared_dto_inflexibility_period_motivation__["a" /* InflexibilityPeriodMotivation */]();
            newMotivation.description = this.motivationCtrl.value;
            this.service.addMotivation(newMotivation).then(function (motivation) {
                _this.selected.emit(motivation);
                _this.updateControl();
            });
        }
        event.preventDefault();
    };
    InflexibilityPeriodMotivationComponent.prototype.deleteMotivation = function () {
        var _this = this;
        var selectedMotivation = this.getselectedMotivation();
        if (!!selectedMotivation) {
            this.service.deleteMotivation(selectedMotivation.id).then(function (resp) {
                _this.resetSearch();
                _this.updateControl();
            });
        }
    };
    InflexibilityPeriodMotivationComponent.prototype.resetSearch = function () {
        var selectedMotivation = this.getselectedMotivation();
        this.motivationCtrl.reset();
        this.editMotivation = undefined;
        if (selectedMotivation) {
            this.reset.emit();
        }
    };
    InflexibilityPeriodMotivationComponent.prototype.updateControl = function () {
        var _this = this;
        this.service.getMotivations().then(function (motivations) {
            _this.motivations = motivations;
            _this.motivationCtrl.reset();
            if (_this.editMotivation) {
                _this.motivationCtrl.setValue(_this.editMotivation.description);
            }
            _this.ref.markForCheck();
        });
    };
    InflexibilityPeriodMotivationComponent.prototype.initialize = function () {
        var _this = this;
        this.motivationCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.filteredMotivations = this.motivationCtrl.valueChanges.startWith(null)
            .map(function (searchTerm) { return searchTerm ? _this.filterMotivations(searchTerm) : _this.motivations.slice(); });
        if (this.editMotivation) {
            this.motivationCtrl.setValue(this.editMotivation.description);
        }
    };
    return InflexibilityPeriodMotivationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], InflexibilityPeriodMotivationComponent.prototype, "placeholder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_dto_inflexibility_period_motivation__["a" /* InflexibilityPeriodMotivation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_dto_inflexibility_period_motivation__["a" /* InflexibilityPeriodMotivation */]) === "function" && _a || Object)
], InflexibilityPeriodMotivationComponent.prototype, "editMotivation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]) === "function" && _b || Object)
], InflexibilityPeriodMotivationComponent.prototype, "selected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]) === "function" && _c || Object)
], InflexibilityPeriodMotivationComponent.prototype, "reset", void 0);
InflexibilityPeriodMotivationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-inflexibility-period-motivation',
        template: __webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period-motivation/inflexibility-period-motivation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period-motivation/inflexibility-period-motivation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__service_inflexibility_periods_service__["a" /* InflexibilityPeriodsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_inflexibility_periods_service__["a" /* InflexibilityPeriodsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object])
], InflexibilityPeriodMotivationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=inflexibility-period-motivation.component.js.map

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period-motivation/inflexibility-period-motivation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InflexibilityPeriodMotivationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inflexibility_period_motivation_component__ = __webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period-motivation/inflexibility-period-motivation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_inflexibility_periods_service__ = __webpack_require__("../../../../../src/app/service/inflexibility-periods.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InflexibilityPeriodMotivationModule = (function () {
    function InflexibilityPeriodMotivationModule() {
    }
    return InflexibilityPeriodMotivationModule;
}());
InflexibilityPeriodMotivationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        providers: [__WEBPACK_IMPORTED_MODULE_6__service_inflexibility_periods_service__["a" /* InflexibilityPeriodsService */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_used_material_module__["a" /* UsedMaterialModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__inflexibility_period_motivation_component__["a" /* InflexibilityPeriodMotivationComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__inflexibility_period_motivation_component__["a" /* InflexibilityPeriodMotivationComponent */]
        ]
    })
], InflexibilityPeriodMotivationModule);

//# sourceMappingURL=inflexibility-period-motivation.module.js.map

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period/inflexibility-period.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/deep/ .mat-select {\r\n    min-width: 11rem !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period/inflexibility-period.component.html":
/***/ (function(module, exports) {

module.exports = "<md-list-item>\n    <span md-line>\n        <span class=\"align-bottom\">Dal {{item.from | date: 'dd/MM/yyyy'}} al {{item.to | date: 'dd/MM/yyyy'}} per:</span>\n        <span class=\"mx-sm-3\">\n            <md-select floatPlaceholder=\"true\" [(ngModel)]=\"item.employes[0].id\" name=\"employe\">\n                <md-option *ngFor=\"let employe of item.employes\" [value]=\"employe.id\">\n                    <span [ngClass]=\"getStateColor(employe)\"> {{ employe.surname}} {{employe.name}}</span>\n                </md-option>\n            </md-select>\n        </span>\n        <span class=\"mx-sm-3 align-bottom\">\n            Motivo:&nbsp;&nbsp;{{item.inflexibilityPeriodMotivation.description}}\n        </span>\n    </span>\n    <span ngbTooltip=\"Modifica\">\n        <button md-icon-button (click)=\"update()\">\n            <md-icon class=\"md-24\">edit</md-icon>\n        </button>\n    </span>\n    <span ngbTooltip=\"Elimina\">\n        <button md-icon-button (click)=\"delete()\">\n            <md-icon class=\"md-24\">delete</md-icon>\n        </button>\n    </span>\n</md-list-item>"

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period/inflexibility-period.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InflexibilityPeriodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dto_inflexibility_period__ = __webpack_require__("../../../../../src/app/shared/dto/inflexibility-period.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InflexibilityPeriodComponent = (function () {
    function InflexibilityPeriodComponent() {
        this.EmployeState = __WEBPACK_IMPORTED_MODULE_2__shared_enums__["b" /* EmployeState */];
        this.updateRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InflexibilityPeriodComponent.prototype.update = function () {
        this.updateRequest.emit();
    };
    InflexibilityPeriodComponent.prototype.delete = function () {
        this.deleteRequest.emit();
    };
    InflexibilityPeriodComponent.prototype.getStateColor = function (employe) {
        switch (employe.state) {
            case __WEBPACK_IMPORTED_MODULE_2__shared_enums__["b" /* EmployeState */].Inflexible:
                return 'inflexible-text font-weight-bolder';
            case __WEBPACK_IMPORTED_MODULE_2__shared_enums__["b" /* EmployeState */].Flexible:
                return 'flexible-text font-weight-bolder';
            case __WEBPACK_IMPORTED_MODULE_2__shared_enums__["b" /* EmployeState */].Indifferent:
                return 'indifferent-text font-weight-bolder';
        }
    };
    return InflexibilityPeriodComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_dto_inflexibility_period__["a" /* InflexibilityPeriod */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_dto_inflexibility_period__["a" /* InflexibilityPeriod */]) === "function" && _a || Object)
], InflexibilityPeriodComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], InflexibilityPeriodComponent.prototype, "updateRequest", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], InflexibilityPeriodComponent.prototype, "deleteRequest", void 0);
InflexibilityPeriodComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-inflexibility-period',
        template: __webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period/inflexibility-period.component.html"),
        styles: [__webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period/inflexibility-period.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InflexibilityPeriodComponent);

var _a, _b, _c;
//# sourceMappingURL=inflexibility-period.component.js.map

/***/ }),

/***/ "../../../../../src/app/inflexibility-periods/inflexibility-period/inflexibility-period.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InflexibilityPeriodModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inflexibility_period_component__ = __webpack_require__("../../../../../src/app/inflexibility-periods/inflexibility-period/inflexibility-period.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InflexibilityPeriodModule = (function () {
    function InflexibilityPeriodModule() {
    }
    return InflexibilityPeriodModule;
}());
InflexibilityPeriodModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_used_material_module__["a" /* UsedMaterialModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__inflexibility_period_component__["a" /* InflexibilityPeriodComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__inflexibility_period_component__["a" /* InflexibilityPeriodComponent */]
        ]
    })
], InflexibilityPeriodModule);

//# sourceMappingURL=inflexibility-period.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/nav-item/nav-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!node.children\">\n  <a href=\"#\" [ngClass]=\"classes\" (click)=\"nodeClicked()\" ngbTooltip=\"{{node.tooltip}}\" placement=\"right\" container=\"body\" class=\"vertical-menu-item\">\n    {{node.title}}\n  </a>\n</div>\n\n<div *ngIf=\"node.children\">\n  <a href=\"#\" [ngClass]=\"classes\" (click)=\"nodeClicked()\" ngbTooltip=\"{{node.tooltip}}\" placement=\"right\" container=\"body\"\n    (click)=\"headerClicked()\" class=\"vertical-menu-item heading\">\n    {{node.title}}\n    <md-icon class=\"rotating-icon\" svgIcon=\"keyboard_arrow_right\"></md-icon>\n  </a>\n\n  <button type=\"button\" [ngClass]=\"classes\" ngbTooltip=\"{{node.tooltip}}\" placement=\"right\" container=\"body\"\n    (click)=\"headerClicked()\" class=\"vertical-menu-item heading\" [attr.aria-pressed]=\"isExpanded\">\n    {{node.title}}\n    <md-icon class=\"rotating-icon\" svgIcon=\"keyboard_arrow_right\"></md-icon>\n  </button>\n\n  <div class=\"heading-children\" [ngClass]=\"classes\">\n    <app-nav-item *ngFor=\"let node of nodeChildren\" [level]=\"level + 1\" [isWide]=\"isWide\" [isParentExpanded]=\"isExpanded\" [node]=\"node\"\n      [selectedNodes]=\"selectedNodes\">\n    </app-nav-item>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/nav-item/nav-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_menu_nav_menu_model__ = __webpack_require__("../../../../../src/app/layout/nav-menu/nav-menu.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_menu_nav_menu_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__nav_menu_nav_menu_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavItemComponent = (function () {
    function NavItemComponent() {
        this.isWide = false;
        this.level = 1;
        this.isParentExpanded = true;
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isExpanded = false;
        this.isSelected = false;
    }
    NavItemComponent.prototype.ngOnChanges = function () {
        this.nodeChildren = this.node && this.node.children ? this.node.children.filter(function (n) { return !n.hidden; }) : [];
        if (this.selectedNodes) {
            var ix = this.selectedNodes.indexOf(this.node);
            this.isSelected = ix !== -1; // this node is the selected node or its ancestor
            this.isExpanded = this.isParentExpanded &&
                (this.isSelected ||
                    // preserve expanded state when display is wide; collapse in mobile.
                    (this.isWide && this.isExpanded));
        }
        else {
            this.isSelected = false;
        }
        this.setClasses();
    };
    NavItemComponent.prototype.setClasses = function () {
        this.classes = (_a = {},
            _a['level-' + this.level] = true,
            _a.collapsed = !this.isExpanded,
            _a.expanded = this.isExpanded,
            _a.selected = this.isSelected,
            _a);
        var _a;
    };
    NavItemComponent.prototype.headerClicked = function () {
        this.isExpanded = !this.isExpanded;
        this.setClasses();
    };
    NavItemComponent.prototype.nodeClicked = function () {
        this.action.emit(this.node);
    };
    return NavItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "isWide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "level", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nav_menu_nav_menu_model__["NavigationNode"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nav_menu_nav_menu_model__["NavigationNode"]) === "function" && _a || Object)
], NavItemComponent.prototype, "node", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavItemComponent.prototype, "isParentExpanded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], NavItemComponent.prototype, "selectedNodes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], NavItemComponent.prototype, "action", void 0);
NavItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-nav-item',
        template: __webpack_require__("../../../../../src/app/layout/nav-item/nav-item.component.html"),
    })
], NavItemComponent);

var _a, _b;
//# sourceMappingURL=nav-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/nav-menu/nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_menu_model__ = __webpack_require__("../../../../../src/app/layout/nav-menu/nav-menu.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_menu_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__nav_menu_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavMenuComponent = (function () {
    function NavMenuComponent() {
        this.isWide = false;
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(NavMenuComponent.prototype, "filteredNodes", {
        get: function () { return this.nodes ? this.nodes.filter(function (n) { return !n.hidden; }) : []; },
        enumerable: true,
        configurable: true
    });
    NavMenuComponent.prototype.nodeClicked = function (node) {
        this.action.emit(node);
    };
    return NavMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nav_menu_model__["CurrentNode"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nav_menu_model__["CurrentNode"]) === "function" && _a || Object)
], NavMenuComponent.prototype, "currentNode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavMenuComponent.prototype, "isWide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], NavMenuComponent.prototype, "nodes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], NavMenuComponent.prototype, "action", void 0);
NavMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-nav-menu',
        template: "\n  <app-nav-item *ngFor=\"let node of filteredNodes\" [node]=\"node\" [selectedNodes]=\"currentNode?.nodes\" [isWide]=\"isWide\"\n  (action)=\"nodeClicked($event)\">\n  </app-nav-item>"
    })
], NavMenuComponent);

var _a, _b;
//# sourceMappingURL=nav-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/nav-menu/nav-menu.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=nav-menu.model.js.map

/***/ }),

/***/ "../../../../../src/app/leaves-overlaps/leaves-overlaps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n\tmargin: 0 0 10px;\n}\n\n.cell-totals {\n\tmargin: 5px;\n\ttext-align: center;\n}\n\n.badge {\n\tmargin-right: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/leaves-overlaps/leaves-overlaps.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n\t<div [class]=\"modalheaderCss\">\n\t\t<h5 class=\"modal-title\">{{ modalData?.event.meta.modalTitle }}</h5>\n\t</div>\n\t<div class=\"modal-body\">\n\t\t<div>\n\t\t\t<pre class=\"cal-event-title\">{{ modalData?.event.meta.list }}</pre>\n\t\t</div>\n\t</div>\n</ng-template>\n<ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n\t<div class=\"cal-cell-top\">\n\t\t<span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n\t\t<span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n\t</div>\n\t<div class=\"cell-totals\">\n\t\t<span *ngFor=\"let group of day.gapGroups\" class=\"badge badge-{{ group[0] }}\">\n      {{ group[1].length }}\n    </span>\n\t</div>\n</ng-template>\n<table class=\"table table-bordered\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<div class=\"btn btn-outline-primary\"><span style=\"text-transform: capitalize;\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'it' }}</span></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<div>\n\t\t\t\t\t<mwl-calendar-month-view [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [excludeDays]=\"excludeDays\" [activeDayIsOpen]=\"activeDayIsOpen\"\n\t\t\t\t\t (dayClicked)=\"dayClicked($event.day)\" [locale]=\"locale\" [weekStartsOn]=\"weekStartsOn\" [weekendDays]=\"weekendDays\" [cellTemplate]=\"customCellTemplate\"\n\t\t\t\t\t (beforeViewRender)=\"beforeMonthViewRender($event)\" (eventClicked)=\"handleEvent($event.event)\">\n\t\t\t\t\t</mwl-calendar-month-view>\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/leaves-overlaps/leaves-overlaps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavesOverlapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_custom_date_formatter_provider__ = __webpack_require__("../../../../../src/app/shared/custom-date-formatter.provider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_coverage_service__ = __webpack_require__("../../../../../src/app/service/coverage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_application_shared_data__ = __webpack_require__("../../../../../src/app/shared/application-shared-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LeavesOverlapsComponent = (function () {
    function LeavesOverlapsComponent(modal, coverageService) {
        this.modal = modal;
        this.coverageService = coverageService;
        this.modalheaderCss = '';
        this.ViewMode = __WEBPACK_IMPORTED_MODULE_6__shared_enums__["j" /* ViewMode */];
        this.viewDate = __WEBPACK_IMPORTED_MODULE_8__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().getSelectedDate();
        this.view = 'month';
        this.excludeDays = [0, 6];
        this.locale = 'it';
        this.weekStartsOn = __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["c" /* DAYS_OF_WEEK */].MONDAY;
        this.weekendDays = [
            __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["c" /* DAYS_OF_WEEK */].SATURDAY,
            __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["c" /* DAYS_OF_WEEK */].SUNDAY
        ];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = true;
    }
    LeavesOverlapsComponent.prototype.ngOnInit = function () {
        this.fetchGaps();
    };
    LeavesOverlapsComponent.prototype.fetchGaps = function () {
        var _this = this;
        var getStart = {
            month: __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfMonth"],
            week: __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfWeek"],
            day: __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"]
        }[this.view];
        var getEnd = {
            month: __WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfMonth"],
            week: __WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfWeek"],
            day: __WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfDay"]
        }[this.view];
        if (__WEBPACK_IMPORTED_MODULE_8__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().getLoadedMonth(this.mode, this.viewDate)) {
            this.addGaps(__WEBPACK_IMPORTED_MODULE_8__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().getLoadedMonth(this.mode, this.viewDate), false);
        }
        else {
            this.coverageService.searchGaps(Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["format"])(getStart(this.viewDate), 'DD-MM-YYYY'), Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["format"])(getEnd(this.viewDate), 'DD-MM-YYYY'), this.mode)
                .then(function (gaps) { return _this.addGaps(gaps); });
        }
    };
    LeavesOverlapsComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    LeavesOverlapsComponent.prototype.handleEvent = function (event) {
        this.modalData = { event: event };
        this.modalheaderCss = event.color === __WEBPACK_IMPORTED_MODULE_6__shared_enums__["a" /* COLORS */].red ? 'modal-header modal-header-red' : 'modal-header modal-header-yellow';
        this.modal.open(this.modalContent, { windowClass: 'animated bounceInUp' });
    };
    LeavesOverlapsComponent.prototype.addGaps = function (gaps, cacheGaps) {
        if (cacheGaps === void 0) { cacheGaps = true; }
        if (cacheGaps) {
            __WEBPACK_IMPORTED_MODULE_8__shared_application_shared_data__["a" /* ApplicationSharedData */].getInstance().addLoadedMonth(this.mode, this.viewDate, gaps);
        }
        this.events = gaps;
        this.refresh.next();
    };
    LeavesOverlapsComponent.prototype.beforeMonthViewRender = function (_a) {
        var body = _a.body;
        body.forEach(function (cell) {
            var groups = {};
            cell.events.sort(function (a, b) {
                return (a.meta.type + a.title).localeCompare(b.meta.type + b.title);
            });
            cell.events.forEach(function (event) {
                groups[event.meta.type] = groups[event.meta.type] || [];
                groups[event.meta.type].push(event);
            });
            cell['gapGroups'] = Object.entries(groups);
        });
    };
    return LeavesOverlapsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalContent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], LeavesOverlapsComponent.prototype, "modalContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_enums__["j" /* ViewMode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_enums__["j" /* ViewMode */]) === "function" && _b || Object)
], LeavesOverlapsComponent.prototype, "mode", void 0);
LeavesOverlapsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-leaves-overlaps',
        styles: [__webpack_require__("../../../../../src/app/leaves-overlaps/leaves-overlaps.component.css")],
        template: __webpack_require__("../../../../../src/app/leaves-overlaps/leaves-overlaps.component.html"),
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["a" /* CalendarDateFormatter */],
                useClass: __WEBPACK_IMPORTED_MODULE_5__shared_custom_date_formatter_provider__["a" /* CustomDateFormatter */]
            }],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__service_coverage_service__["a" /* CoverageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_coverage_service__["a" /* CoverageService */]) === "function" && _d || Object])
], LeavesOverlapsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=leaves-overlaps.component.js.map

/***/ }),

/***/ "../../../../../src/app/leaves-overlaps/leaves-overlaps.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavesOverlapsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__leaves_overlaps_component__ = __webpack_require__("../../../../../src/app/leaves-overlaps/leaves-overlaps.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LeavesOverlapsModule = (function () {
    function LeavesOverlapsModule() {
    }
    return LeavesOverlapsModule;
}());
LeavesOverlapsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["d" /* NgbModalModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["b" /* CalendarModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__leaves_overlaps_component__["a" /* LeavesOverlapsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__leaves_overlaps_component__["a" /* LeavesOverlapsComponent */]
        ]
    })
], LeavesOverlapsModule);

//# sourceMappingURL=leaves-overlaps.module.js.map

/***/ }),

/***/ "../../../../../src/app/leaves-tab-set/leave-tab-set.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveTabSetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leaves_overlaps_leaves_overlaps_component__ = __webpack_require__("../../../../../src/app/leaves-overlaps/leaves-overlaps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaveTabSetComponent = (function () {
    function LeaveTabSetComponent() {
        this.ViewMode = __WEBPACK_IMPORTED_MODULE_2__shared_enums__["j" /* ViewMode */];
    }
    return LeaveTabSetComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('leaveEmploye'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__leaves_overlaps_leaves_overlaps_component__["a" /* LeavesOverlapsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__leaves_overlaps_leaves_overlaps_component__["a" /* LeavesOverlapsComponent */]) === "function" && _a || Object)
], LeaveTabSetComponent.prototype, "leaveEmploye", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('leaveAree'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__leaves_overlaps_leaves_overlaps_component__["a" /* LeavesOverlapsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__leaves_overlaps_leaves_overlaps_component__["a" /* LeavesOverlapsComponent */]) === "function" && _b || Object)
], LeaveTabSetComponent.prototype, "leaveAree", void 0);
LeaveTabSetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-leave-tab-set',
        template: __webpack_require__("../../../../../src/app/leaves-tab-set/leave-tab-set.html"),
    })
], LeaveTabSetComponent);

var _a, _b;
//# sourceMappingURL=leave-tab-set.component.js.map

/***/ }),

/***/ "../../../../../src/app/leaves-tab-set/leave-tab-set.html":
/***/ (function(module, exports) {

module.exports = "<ngb-tabset [destroyOnHide]=\"false\">\r\n\t<ngb-tab title=\"Dipendenti\" id=\"tab-employe\">\r\n\t\t<ng-template ngbTabContent>\r\n\t\t\t<div>\t\r\n\t\t\t\t<app-leaves-overlaps [mode]=\"ViewMode.Employe\" #leaveEmploye></app-leaves-overlaps>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</ngb-tab>\r\n\t<ngb-tab title=\"Procedure\" id=\"tab-aree\">\r\n\t\t<ng-template ngbTabContent>\r\n\t\t\t<div>\t\t\t\t\r\n\t\t\t\t<app-leaves-overlaps [mode]=\"ViewMode.Area\" #leaveAree></app-leaves-overlaps>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</ngb-tab>\r\n</ngb-tabset>"

/***/ }),

/***/ "../../../../../src/app/leaves-tab-set/leave-tab-set.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavesTabSetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaves_overlaps_leaves_overlaps_module__ = __webpack_require__("../../../../../src/app/leaves-overlaps/leaves-overlaps.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leave_tab_set_component__ = __webpack_require__("../../../../../src/app/leaves-tab-set/leave-tab-set.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LeavesTabSetModule = (function () {
    function LeavesTabSetModule() {
    }
    return LeavesTabSetModule;
}());
LeavesTabSetModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__leave_tab_set_component__["a" /* LeaveTabSetComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_2__leaves_overlaps_leaves_overlaps_module__["a" /* LeavesOverlapsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__leave_tab_set_component__["a" /* LeaveTabSetComponent */]
        ]
    })
], LeavesTabSetModule);

//# sourceMappingURL=leave-tab-set.module.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n   <md-card-header>\n    <md-card-title>404</md-card-title>\n  </md-card-header>\n  <md-card-content>Page not found :(</md-card-content>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        console.log('route not found');
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_used_material_module__ = __webpack_require__("../../../../../src/app/shared/used-material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotFoundModule = (function () {
    function NotFoundModule() {
    }
    return NotFoundModule;
}());
NotFoundModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__not_found_component__["a" /* NotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_used_material_module__["a" /* UsedMaterialModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__not_found_component__["a" /* NotFoundComponent */]
        ]
    })
], NotFoundModule);

//# sourceMappingURL=not-found.module.js.map

/***/ }),

/***/ "../../../../../src/app/service/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseService = (function (_super) {
    __extends(BaseService, _super);
    function BaseService(backend, options) {
        var _this = this;
        options.headers.set('X-Requested-With', 'XMLHttpRequest');
        _this = _super.call(this, backend, options) || this;
        return _this;
    }
    BaseService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return BaseService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]));
BaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* XHRBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]) === "function" && _b || Object])
], BaseService);

var _a, _b;
//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/coverage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_dto_employes_flexibility__ = __webpack_require__("../../../../../src/app/shared/dto/employes-flexibility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__("../../../../../src/app/service/base.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoverageService = (function (_super) {
    __extends(CoverageService, _super);
    function CoverageService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoverageService.prototype.searchFlexibility = function () {
        var uri = __WEBPACK_IMPORTED_MODULE_3__shared_enums__["e" /* LeaveOverlapsUri */].ByFlexibility;
        return this.get("" + uri)
            .toPromise()
            .then(function (response) {
            return new __WEBPACK_IMPORTED_MODULE_4__shared_dto_employes_flexibility__["a" /* EmployesFlexibility */](response.json());
        })
            .catch(this.handleError);
    };
    CoverageService.prototype.searchGaps = function (fromDate, toDate, mode) {
        var _this = this;
        var uri = (mode === __WEBPACK_IMPORTED_MODULE_3__shared_enums__["j" /* ViewMode */].Area) ? __WEBPACK_IMPORTED_MODULE_3__shared_enums__["e" /* LeaveOverlapsUri */].ByArea : __WEBPACK_IMPORTED_MODULE_3__shared_enums__["e" /* LeaveOverlapsUri */].ByEmploye;
        return this.get("" + uri + fromDate + "/" + toDate)
            .toPromise()
            .then(function (response) {
            return _this.getCoverageGaps(response, mode);
        })
            .catch(this.handleError);
    };
    CoverageService.prototype.getCoverageGaps = function (response, mode) {
        var gaps = response.json();
        var events = (mode === __WEBPACK_IMPORTED_MODULE_3__shared_enums__["j" /* ViewMode */].Employe) ?
            this.getCoverageGapsByEmploye(response) : this.getCoverageGapsByArea(response);
        return events;
    };
    CoverageService.prototype.getCoverageGapsByEmploye = function (response) {
        var gaps = response.json();
        var events = [];
        for (var _i = 0, gaps_1 = gaps; _i < gaps_1.length; _i++) {
            var gap = gaps_1[_i];
            events.push({
                start: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"])(gap.date),
                end: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfDay"])(gap.date),
                title: gap.employes.map(function (e) { return e.surname + ' ' + e.name; }).join(', ') + ': ' +
                    gap.dayGaps.map(function (g) { return '[' + g.initTime + ', ' + g.endTime + ']'; }).join(', '),
                color: (gap.employes.length === 1) ? __WEBPACK_IMPORTED_MODULE_3__shared_enums__["a" /* COLORS */].red : __WEBPACK_IMPORTED_MODULE_3__shared_enums__["a" /* COLORS */].yellow,
                meta: {
                    type: (gap.employes.length === 1) ? 'danger' : 'warning',
                    modalTitle: 'Procedure di ' + gap.employes.map(function (e) { return e.surname + ' ' + e.name; }).join(', '),
                    list: gap.areas.map(function (a) { return a.description; }).join('\n')
                }
            });
        }
        return events;
    };
    CoverageService.prototype.getCoverageGapsByArea = function (response) {
        var aree = response.json();
        var events = [];
        for (var _i = 0, aree_1 = aree; _i < aree_1.length; _i++) {
            var a = aree_1[_i];
            for (var _a = 0, _b = a.gaps; _a < _b.length; _a++) {
                var day = _b[_a];
                events.push({
                    start: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"])(day.date),
                    end: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfDay"])(day.date),
                    title: a.area + ': ' + day.dayGaps.map(function (g) { return '[' + g.initTime + ', ' + g.endTime + ']'; }).join(', '),
                    color: (a.singleEmploye) ? __WEBPACK_IMPORTED_MODULE_3__shared_enums__["a" /* COLORS */].red : __WEBPACK_IMPORTED_MODULE_3__shared_enums__["a" /* COLORS */].yellow,
                    meta: {
                        area: a.area,
                        employesNumer: a.employes.length,
                        type: (a.singleEmploye) ? 'danger' : 'warning',
                        modalTitle: 'Dipendenti assegnati a ' + a.area,
                        list: a.employes.map(function (e) { return e.surname + ' ' + e.name; }).join('\n')
                    }
                });
            }
        }
        return events;
    };
    return CoverageService;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));
CoverageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CoverageService);

//# sourceMappingURL=coverage.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/holiday-shutdowns.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayShutdownsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("../../../../../src/app/service/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HolidayShutdownsService = (function (_super) {
    __extends(HolidayShutdownsService, _super);
    function HolidayShutdownsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HolidayShutdownsService.prototype.getHolidayShutdowns = function () {
        var uri = __WEBPACK_IMPORTED_MODULE_3__shared_enums__["c" /* HolidayShutdownsUri */].HolidayShutdownsBase;
        return this.get("" + uri)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    HolidayShutdownsService.prototype.saveHolidayShutdown = function (holidayShutdown) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__shared_enums__["c" /* HolidayShutdownsUri */].HolidayShutdownsBase;
        return this.post("" + uri, this.formatDate(holidayShutdown))
            .toPromise().catch(this.handleError);
    };
    HolidayShutdownsService.prototype.deleteHolidayShutdown = function (id) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__shared_enums__["c" /* HolidayShutdownsUri */].HolidayShutdownsBase;
        return this.delete("" + uri + id).toPromise().catch(this.handleError);
    };
    HolidayShutdownsService.prototype.formatDate = function (holidayShutdown) {
        var from = holidayShutdown.from;
        var to = holidayShutdown.to;
        var copy = {
            id: holidayShutdown.id,
            'from': from.year + "-" + from.month + "-" + from.day,
            'to': to.year + "-" + to.month + "-" + to.day
        };
        return copy;
    };
    return HolidayShutdownsService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));
HolidayShutdownsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], HolidayShutdownsService);

//# sourceMappingURL=holiday-shutdowns.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/inflexibility-periods.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InflexibilityPeriodsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("../../../../../src/app/service/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InflexibilityPeriodsService = (function (_super) {
    __extends(InflexibilityPeriodsService, _super);
    function InflexibilityPeriodsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InflexibilityPeriodsService.prototype.getInflexibilityPeriods = function () {
        var uri = __WEBPACK_IMPORTED_MODULE_3__shared_enums__["d" /* InflexibilityPeriodsUri */].InflexibilityPeriodsBase;
        return this.get("" + uri)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    InflexibilityPeriodsService.prototype.saveInflexibilityPeriod = function (inflexibilityPeriod) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__shared_enums__["d" /* InflexibilityPeriodsUri */].InflexibilityPeriodsBase;
        return this.post("" + uri, this.formatDate(inflexibilityPeriod))
            .toPromise().catch(this.handleError);
    };
    InflexibilityPeriodsService.prototype.deleteInflexibilityPeriod = function (id) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__shared_enums__["d" /* InflexibilityPeriodsUri */].InflexibilityPeriodsBase;
        return this.delete("" + uri + id).toPromise().catch(this.handleError);
    };
    InflexibilityPeriodsService.prototype.getMotivations = function () {
        var uri = __WEBPACK_IMPORTED_MODULE_3__shared_enums__["d" /* InflexibilityPeriodsUri */].InflexibilityPeriodMotivationsBase;
        return this.get("" + uri)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    InflexibilityPeriodsService.prototype.addMotivation = function (motivation) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__shared_enums__["d" /* InflexibilityPeriodsUri */].InflexibilityPeriodMotivationsBase;
        return this.post("" + uri, motivation)
            .toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    InflexibilityPeriodsService.prototype.deleteMotivation = function (id) {
        var uri = __WEBPACK_IMPORTED_MODULE_3__shared_enums__["d" /* InflexibilityPeriodsUri */].InflexibilityPeriodMotivationsBase;
        return this.delete("" + uri + id).toPromise().catch(this.handleError);
    };
    InflexibilityPeriodsService.prototype.formatDate = function (inflexibilityPeriod) {
        var from = inflexibilityPeriod.from;
        var to = inflexibilityPeriod.to;
        var copy = {
            id: inflexibilityPeriod.id,
            'from': from.year + "-" + from.month + "-" + from.day,
            'to': to.year + "-" + to.month + "-" + to.day,
            'inflexibilityPeriodMotivation': inflexibilityPeriod.inflexibilityPeriodMotivation,
            'employes': inflexibilityPeriod.employes
        };
        return copy;
    };
    return InflexibilityPeriodsService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));
InflexibilityPeriodsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], InflexibilityPeriodsService);

//# sourceMappingURL=inflexibility-periods.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/leave.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__("../../../../../src/app/service/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_dto_Leaves_plan_update__ = __webpack_require__("../../../../../src/app/shared/dto/Leaves-plan-update.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LeaveService = (function (_super) {
    __extends(LeaveService, _super);
    function LeaveService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeaveService.prototype.getLeaves = function (fromDate, toDate, employeId) {
        var uri = "" + __WEBPACK_IMPORTED_MODULE_5__shared_enums__["f" /* LeaveUri */].GetLeaves + fromDate + "/" + toDate + this.getEmployeIdParam(employeId);
        return this.get(uri)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    LeaveService.prototype.getYearLeaves = function (year) {
        var uri = "" + __WEBPACK_IMPORTED_MODULE_5__shared_enums__["f" /* LeaveUri */].GetYearLeaves + year;
        return this.get(uri)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    LeaveService.prototype.updateLeavesPlan = function (addedLeaves, removededLeaves, employeId) {
        var uri = __WEBPACK_IMPORTED_MODULE_5__shared_enums__["f" /* LeaveUri */].LeavesEmployePlanUpdate;
        var update = new __WEBPACK_IMPORTED_MODULE_6__shared_dto_Leaves_plan_update__["a" /* LeavesPlanUpdate */](addedLeaves.map(function (l) { return ({ id: l.id, 'date': Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["format"])(l.date, 'YYYY-MM-DD') }); }), removededLeaves.map(function (l) { return ({ id: l.id, 'date': Object(__WEBPACK_IMPORTED_MODULE_3_date_fns__["format"])(l.date, 'YYYY-MM-DD') }); }));
        return this.post("" + uri + this.getEmployeIdParam(employeId), update)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    LeaveService.prototype.getLeavesPlan = function (year) {
        var uri = __WEBPACK_IMPORTED_MODULE_5__shared_enums__["f" /* LeaveUri */].LeavesPlan;
        return this.get("" + uri + year, { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Blob }).toPromise()
            .then(function (response) {
            return response.blob();
        })
            .catch(this.handleError);
    };
    LeaveService.prototype.getEmployeIdParam = function (employeId) {
        return employeId ? "?employeId=" + employeId : '';
    };
    return LeaveService;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));
LeaveService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LeaveService);

//# sourceMappingURL=leave.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/security.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_enums__ = __webpack_require__("../../../../../src/app/shared/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__("../../../../../src/app/service/base.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SecurityService = (function (_super) {
    __extends(SecurityService, _super);
    function SecurityService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityService.prototype.getLoggedEmploye = function () {
        var uri = __WEBPACK_IMPORTED_MODULE_2__shared_enums__["i" /* SecurityUri */].LoggedEmploye;
        return this.get("" + uri)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    SecurityService.prototype.logout = function () {
        var uri = __WEBPACK_IMPORTED_MODULE_2__shared_enums__["i" /* SecurityUri */].Logout;
        this._defaultOptions.headers.set('Authorization', 'Basic logout');
        return this.get("" + uri, this._defaultOptions).toPromise();
    };
    return SecurityService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));
SecurityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SecurityService);

//# sourceMappingURL=security.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/application-shared-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationSharedData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__);

var ApplicationSharedData = (function () {
    function ApplicationSharedData() {
        this.selectedDate = new Date();
        this.loadedYears = {};
        this.loadedMonths = {};
        this.employesFlexibility = new __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.yearsCoverage = new __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.currentYear = new Date().getFullYear();
        if (ApplicationSharedData.instance) {
            throw new Error('Error: Instantiation failed: Use LeavesOverlapsModel.getInstance() instead of new.');
        }
        ApplicationSharedData.instance = this;
    }
    ApplicationSharedData.getInstance = function () {
        return ApplicationSharedData.instance;
    };
    ApplicationSharedData.prototype.setSelectedDate = function (value) {
        this.selectedDate = value;
    };
    ApplicationSharedData.prototype.getSelectedDate = function () {
        return this.selectedDate;
    };
    ApplicationSharedData.prototype.getEmployesFlexibility = function () {
        return this.employesFlexibility;
    };
    ApplicationSharedData.prototype.setFlexibilityComposition = function (coverageService, leaveService) {
        var _this = this;
        coverageService.searchFlexibility()
            .then(function (employesFlexibility) { return leaveService.getYearLeaves(ApplicationSharedData.getInstance().currentYear)
            .then(function (leaves) { return _this.setEmployeLeavesNumber(employesFlexibility, leaves); }); });
    };
    ApplicationSharedData.prototype.setEmployeLeavesNumber = function (employesFlexibility, leaves) {
        employesFlexibility.getAll().forEach(function (e) {
            var employeLeaves = leaves.filter(function (l) { return l.employe.id === e.id; });
            e.currentYearLeaves = employeLeaves ? employeLeaves.length : 0;
        });
        var employe = employesFlexibility.getAll().find(function (e) { return e.id === ApplicationSharedData.instance.loggedEmploye.id; });
        ApplicationSharedData.instance.loggedEmploye = employe;
        ApplicationSharedData.instance.getEmployesFlexibility().next(employesFlexibility);
    };
    ApplicationSharedData.prototype.getYearsCoverage = function () {
        return this.yearsCoverage;
    };
    ApplicationSharedData.prototype.addLoadedYear = function (year, gaps) {
        this.yearsCoverage.next(gaps);
        this.loadedYears[year] = gaps;
    };
    ApplicationSharedData.prototype.getLoadedYear = function (year) {
        this.yearsCoverage.next(this.loadedYears[year]);
        return this.loadedYears[year];
    };
    ApplicationSharedData.prototype.addLoadedMonth = function (mode, month, gaps) {
        var clone = new Date(month.getTime());
        clone.setDate(1);
        this.loadedMonths[mode.toString() + clone.getTime()] = gaps;
    };
    ApplicationSharedData.prototype.getLoadedMonth = function (mode, month) {
        var clone = new Date(month.getTime());
        clone.setDate(1);
        return this.loadedMonths[mode.toString() + clone.getTime()];
    };
    return ApplicationSharedData;
}());

ApplicationSharedData.instance = new ApplicationSharedData();
//# sourceMappingURL=application-shared-data.js.map

/***/ }),

/***/ "../../../../../src/app/shared/custom-date-formatter.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDateFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CustomDateFormatter = (function (_super) {
    __extends(CustomDateFormatter, _super);
    function CustomDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        var year = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date);
        var weekNumber = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getISOWeek"])(date);
        return "Settimana " + weekNumber + " del " + year;
    };
    CustomDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date).replace(/\b(\w)/g, function (s) { return s.toUpperCase(); });
    };
    return CustomDateFormatter;
}(__WEBPACK_IMPORTED_MODULE_0_angular_calendar__["a" /* CalendarDateFormatter */]));

//# sourceMappingURL=custom-date-formatter.provider.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dto/Leaves-plan-update.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavesPlanUpdate; });
var LeavesPlanUpdate = (function () {
    function LeavesPlanUpdate(addedLeaves, removededLeaves) {
        this.addedLeaves = addedLeaves;
        this.removededLeaves = removededLeaves;
    }
    return LeavesPlanUpdate;
}());

//# sourceMappingURL=Leaves-plan-update.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dto/employes-flexibility.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployesFlexibility; });
var EmployesFlexibility = (function () {
    function EmployesFlexibility(json) {
        this.flexible = json.flexible;
        this.inflexible = json.inflexible;
        this.indifferent = json.indifferent;
    }
    EmployesFlexibility.prototype.getAll = function () {
        return this.inflexible.concat(this.flexible).concat(this.indifferent);
    };
    return EmployesFlexibility;
}());

//# sourceMappingURL=employes-flexibility.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dto/holiday-shutdown.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayShutdown; });
var HolidayShutdown = (function () {
    function HolidayShutdown() {
    }
    return HolidayShutdown;
}());

//# sourceMappingURL=holiday-shutdown.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dto/inflexibility-period-motivation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InflexibilityPeriodMotivation; });
var InflexibilityPeriodMotivation = (function () {
    function InflexibilityPeriodMotivation() {
    }
    return InflexibilityPeriodMotivation;
}());

//# sourceMappingURL=inflexibility-period-motivation.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dto/inflexibility-period.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InflexibilityPeriod; });
var InflexibilityPeriod = (function () {
    function InflexibilityPeriod() {
        this.employes = [];
    }
    return InflexibilityPeriod;
}());

//# sourceMappingURL=inflexibility-period.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dto/leave.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullDayLeave; });
var FullDayLeave = (function () {
    function FullDayLeave() {
    }
    return FullDayLeave;
}());

//# sourceMappingURL=leave.js.map

/***/ }),

/***/ "../../../../../src/app/shared/enums.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MenuItemIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EmployeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ViewMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LeaveOverlapsUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SecurityUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LeaveUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HolidayShutdownsUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return InflexibilityPeriodsUri; });
var COLORS = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var MenuItemIds;
(function (MenuItemIds) {
    MenuItemIds[MenuItemIds["Chiusure"] = 0] = "Chiusure";
    MenuItemIds[MenuItemIds["Presenze"] = 1] = "Presenze";
})(MenuItemIds || (MenuItemIds = {}));
var Profile;
(function (Profile) {
    Profile[Profile["Manager"] = 0] = "Manager";
    Profile[Profile["Normal"] = 1] = "Normal";
})(Profile || (Profile = {}));
var EmployeState;
(function (EmployeState) {
    EmployeState[EmployeState["Flexible"] = 0] = "Flexible";
    EmployeState[EmployeState["Inflexible"] = 1] = "Inflexible";
    EmployeState[EmployeState["Indifferent"] = 2] = "Indifferent";
})(EmployeState || (EmployeState = {}));
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["Employe"] = 0] = "Employe";
    ViewMode[ViewMode["Area"] = 1] = "Area";
})(ViewMode || (ViewMode = {}));
var LeaveOverlapsUri;
(function (LeaveOverlapsUri) {
    LeaveOverlapsUri[LeaveOverlapsUri["ByEmploye"] = 'coverage/overlaps/employe/'] = "ByEmploye";
    LeaveOverlapsUri[LeaveOverlapsUri["ByArea"] = 'coverage/overlaps/area/'] = "ByArea";
    LeaveOverlapsUri[LeaveOverlapsUri["ByFlexibility"] = 'coverage/employe/flexibility/'] = "ByFlexibility";
})(LeaveOverlapsUri || (LeaveOverlapsUri = {}));
var SecurityUri;
(function (SecurityUri) {
    SecurityUri[SecurityUri["LoggedEmploye"] = 'security/logged/employe/'] = "LoggedEmploye";
    SecurityUri[SecurityUri["Logout"] = 'security/logout/'] = "Logout";
})(SecurityUri || (SecurityUri = {}));
var LeaveUri;
(function (LeaveUri) {
    LeaveUri[LeaveUri["GetLeaves"] = 'leave/employe/'] = "GetLeaves";
    LeaveUri[LeaveUri["GetYearLeaves"] = 'leave/plan/'] = "GetYearLeaves";
    LeaveUri[LeaveUri["LeavesEmployePlanUpdate"] = 'leave/employe/plan'] = "LeavesEmployePlanUpdate";
    LeaveUri[LeaveUri["LeavesPlan"] = 'leave/plan/export/'] = "LeavesPlan";
})(LeaveUri || (LeaveUri = {}));
var HolidayShutdownsUri;
(function (HolidayShutdownsUri) {
    HolidayShutdownsUri[HolidayShutdownsUri["HolidayShutdownsBase"] = 'holidayShutdowns/'] = "HolidayShutdownsBase";
})(HolidayShutdownsUri || (HolidayShutdownsUri = {}));
var InflexibilityPeriodsUri;
(function (InflexibilityPeriodsUri) {
    InflexibilityPeriodsUri[InflexibilityPeriodsUri["InflexibilityPeriodsBase"] = 'inflexibilityPeriods/'] = "InflexibilityPeriodsBase";
    InflexibilityPeriodsUri[InflexibilityPeriodsUri["InflexibilityPeriodMotivationsBase"] = 'inflexibilityPeriods/motivation/'] = "InflexibilityPeriodMotivationsBase";
})(InflexibilityPeriodsUri || (InflexibilityPeriodsUri = {}));
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ "../../../../../src/app/shared/italianDatepickerI18n.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ItalianDatepickerI18n; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18N_VALUES = {
    'it': {
        weekdays: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'],
        months: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    }
    // other languages you would support
};
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
var I18n = (function () {
    function I18n() {
        this.language = 'it';
    }
    return I18n;
}());
I18n = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], I18n);

// Define custom service providing the months and weekdays translations
var ItalianDatepickerI18n = (function (_super) {
    __extends(ItalianDatepickerI18n, _super);
    function ItalianDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    ItalianDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    ItalianDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    ItalianDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    return ItalianDatepickerI18n;
}(__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbDatepickerI18n */]));
ItalianDatepickerI18n = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [I18n])
], ItalianDatepickerI18n);

//# sourceMappingURL=italianDatepickerI18n.js.map

/***/ }),

/***/ "../../../../../src/app/shared/ngb-date-fr-parser-formatter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbDateFRParserFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt("" + value, 10);
}
var NgbDateFRParserFormatter = (function (_super) {
    __extends(NgbDateFRParserFormatter, _super);
    function NgbDateFRParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateFRParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
            }
        }
        return null;
    };
    NgbDateFRParserFormatter.prototype.format = function (date) {
        var stringDate = '';
        if (date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + '/' : '';
            stringDate += isNumber(date.month) ? padNumber(date.month) + '/' : '';
            stringDate += date.year;
        }
        return stringDate;
    };
    return NgbDateFRParserFormatter;
}(__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbDateParserFormatter */]));
NgbDateFRParserFormatter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NgbDateFRParserFormatter);

//# sourceMappingURL=ngb-date-fr-parser-formatter.js.map

/***/ }),

/***/ "../../../../../src/app/shared/used-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsedMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UsedMaterialModule = (function () {
    function UsedMaterialModule() {
    }
    return UsedMaterialModule;
}());
UsedMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdChipsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdChipsModule */]
        ]
    })
], UsedMaterialModule);

//# sourceMappingURL=used-material.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* unused harmony export equals */
/* unused harmony export before */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return after; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns__);

var Utils = (function () {
    function Utils() {
    }
    Utils.getYearMonthsWorkingDays = function (yearMonths) {
        var _this = this;
        var yearMonthsWorkingDays = new Array();
        yearMonths.forEach(function (m) {
            var wd = 0;
            for (var d = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["startOfMonth"])(m); d <= Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["endOfMonth"])(m); d = Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["addDays"])(d, 1)) {
                if (!_this.isHolidayDay(d)) {
                    wd++;
                }
            }
            yearMonthsWorkingDays.push(wd);
        });
        return yearMonthsWorkingDays;
    };
    Utils.isHolidayDay = function (date) {
        var day = date.getDate();
        var month = date.getMonth();
        return Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["isSaturday"])(date) || Object(__WEBPACK_IMPORTED_MODULE_0_date_fns__["isSunday"])(date) || this.fixedHolidays[month].indexOf(day) !== -1 || this.isLittleEaster(date);
    };
    Utils.isLittleEaster = function (day) {
        var a;
        var b;
        var c;
        var Y = day.getFullYear();
        var d;
        var e;
        var M;
        var N;
        var giorno;
        var mese;
        if (Y < 2099) {
            M = 24;
            N = 5;
        }
        else if (Y < 2199) {
            M = 24;
            N = 6;
        }
        else if (Y < 2299) {
            M = 25;
            N = 0;
        }
        else if (Y < 2399) {
            M = 26;
            N = 1;
        }
        else if (Y < 2499) {
            M = 25;
            N = 1;
        }
        a = Y % 19;
        b = Y % 4;
        c = Y % 7;
        d = ((19 * a) + M) % 30;
        e = ((2 * b) + (4 * c) + (6 * d) + N) % 7;
        if (d + e < 10) {
            giorno = d + e + 22;
            mese = 2;
        }
        else {
            giorno = d + e - 9;
            mese = 3;
        }
        if (giorno === 26 && mese === 4) {
            giorno = 19;
            mese = 3;
        }
        if (giorno === 25 && mese === 4 && d === 28 && e === 6 && a > 10) {
            giorno = 18;
            mese = 3;
        }
        return (day.getMonth() === mese && (day.getDate() - 1) === giorno);
    };
    return Utils;
}());

Utils.fixedHolidays = [[1, 6], [], [], [25], [1], [2], [], [15], [], [], [1], [8, 25, 26]];
var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../src/app/shared/validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = dateBeforeThan;
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayNotEmpty;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("../../../../../src/app/shared/utils.ts");

function dateBeforeThan(from, to) {
    return function (group) {
        var f = group.controls[from];
        var t = group.controls[to];
        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* after */])(f.value, t.value)) {
            return {
                dateError: true
            };
        }
        return {};
    };
}
function arrayNotEmpty(array) {
    return function (group) {
        if (array[0].length <= 0) {
            return {
                arrayEmpty: true
            };
        }
        return {};
    };
}
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map