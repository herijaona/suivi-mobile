(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-activation-account-activation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-activation/account-activation.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-activation/account-activation.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\" color=\"tertiary\" class=\"identifiant\"\n      >Activé votre compte</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<div class=\"topContent\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">\n        <img\n          src=\"../../../../assets/images/logo_matipla.png\"\n          srcset=\"\"\n          width=\"150px\"\n          class=\"mb-2\"\n        />\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</div>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <div class=\"ion-padding\">\n        <ion-label>Code d'activation</ion-label>\n        <ion-input\n          type=\"text\"\n          required\n          class=\"border-input\"\n          [(ngModel)]=\"code\"\n        ></ion-input>\n      </div>\n\n      <ion-button color=\"success\" expand=\"block\" (click)=\"activateAccount()\">\n        Activé\n      </ion-button>\n      <ion-button [routerLink]=\"['/login']\" color=\"primary\" expand=\"block\">\n        Connexion\n      </ion-button>\n      <a [routerLink]=\"['/register']\" class=\"small-text\">inscription</a>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/account-activation/account-activation-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/account-activation/account-activation-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AccountActivationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountActivationPageRoutingModule", function() { return AccountActivationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _account_activation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-activation.page */ "./src/app/pages/account-activation/account-activation.page.ts");




const routes = [
    {
        path: '',
        component: _account_activation_page__WEBPACK_IMPORTED_MODULE_3__["AccountActivationPage"]
    }
];
let AccountActivationPageRoutingModule = class AccountActivationPageRoutingModule {
};
AccountActivationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountActivationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/account-activation/account-activation.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/account-activation/account-activation.module.ts ***!
  \***********************************************************************/
/*! exports provided: AccountActivationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountActivationPageModule", function() { return AccountActivationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _account_activation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-activation-routing.module */ "./src/app/pages/account-activation/account-activation-routing.module.ts");
/* harmony import */ var _account_activation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-activation.page */ "./src/app/pages/account-activation/account-activation.page.ts");







let AccountActivationPageModule = class AccountActivationPageModule {
};
AccountActivationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_activation_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountActivationPageRoutingModule"]
        ],
        declarations: [_account_activation_page__WEBPACK_IMPORTED_MODULE_6__["AccountActivationPage"]]
    })
], AccountActivationPageModule);



/***/ }),

/***/ "./src/app/pages/account-activation/account-activation.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/account-activation/account-activation.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  box-shadow: none !important;\n}\n\n.identifiant {\n  font-style: italic;\n  font-size: medium;\n  color: var(--ion-color-sred);\n  padding-right: 30px;\n  font-size: 18px;\n}\n\n.topContent {\n  background-color: white;\n}\n\n.border-input {\n  border: 0.3px solid var(--ion-color-sgreen);\n  border-radius: 3px;\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC1hY3RpdmF0aW9uL2FjY291bnQtYWN0aXZhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSx1QkFBQTtBQUdGOztBQUFBO0VBQ0UsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50LWFjdGl2YXRpb24vYWNjb3VudC1hY3RpdmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlkZW50aWZpYW50IHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zcmVkKTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4udG9wQ29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ib3JkZXItaW5wdXQge1xyXG4gIGJvcmRlcjogMC4zcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNncmVlbik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/account-activation/account-activation.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/account-activation/account-activation.page.ts ***!
  \*********************************************************************/
/*! exports provided: AccountActivationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountActivationPage", function() { return AccountActivationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let AccountActivationPage = class AccountActivationPage {
    constructor(authSrvc, navCtrl) {
        this.authSrvc = authSrvc;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    activateAccount() {
        console.log("code: ", this.code);
        this.authSrvc.activateAccount(this.code).subscribe((response) => {
            console.log("AccountActivationPage -> activateAccount -> response", response);
            if (response) {
                this.navCtrl.navigateRoot('/login');
            }
        });
    }
};
AccountActivationPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
AccountActivationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-activation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account-activation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-activation/account-activation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account-activation.page.scss */ "./src/app/pages/account-activation/account-activation.page.scss")).default]
    })
], AccountActivationPage);



/***/ })

}]);
//# sourceMappingURL=pages-account-activation-account-activation-module-es2015.js.map