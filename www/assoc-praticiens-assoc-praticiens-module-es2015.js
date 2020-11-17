(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assoc-praticiens-assoc-praticiens-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Mes Praticiens </ion-title>\n    <!-- <ion-searchbar\n      *ngIf=\"showSearchbar\"\n      showCancelButton=\"always\"\n      [(ngModel)]=\"queryText\"\n      (ionChange)=\"updateRdvList()\"\n      (ionCancel)=\"showSearchbar= false\"\n      placeholder=\"Rechercher\"></ion-searchbar> -->\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar= true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list #scheduleList>\n    <ion-item-group>\n      <ion-item-sliding #slidingItem>\n        <ion-item lines=\"none\" *ngFor=\"let praticien of this.assoc_praticiens\">\n          <ion-card>\n            <ion-card-content\n              ><ion-grid>\n                <ion-row>\n                  <ion-col size=\"4\">\n                    <ion-label>\n                      <img src=\"../../../assets/images/praticien.jpg\" />\n                    </ion-label>\n                  </ion-col>\n                  <ion-col size=\"8\" class=\"information\">\n                    <h2 class=\"name\">\n                      Dr. {{praticien.firstName}} {{praticien.lastName}}\n                    </h2>\n                    <ion-label class=\"fonction\"\n                      >{{praticien.fonction}}\n                    </ion-label>\n\n                    <ion-label> </ion-label>\n                    <ion-label> Pays : {{praticien.state}} </ion-label>\n                    <ion-label> Ville : {{praticien.city}} </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row> </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/global.interaction.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/global.interaction.ts ***!
  \*********************************************/
/*! exports provided: GlobalInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalInteraction", function() { return GlobalInteraction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let GlobalInteraction = class GlobalInteraction {
    constructor(toastCtrl, loadingCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 1800,
                position: "top",
            });
            toast.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                cssClass: "my-loading-class",
                spinner: "bubbles",
                translucent: true,
                duration: 100000,
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss();
                    }
                });
            });
        });
    }
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isLoading) {
                this.isLoading = false;
                return yield this.loadingCtrl.dismiss();
            }
            return null;
        });
    }
    alertDelete(id, parent, msg = "Tu veux vraiment supprimé cette element ? ", callback = this.defaultCallback, _header = "Suppression", array = []) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: "my-custom-class",
                header: _header,
                message: msg,
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            console.log("Confirm Cancel: blah");
                        },
                    },
                    {
                        text: "OK",
                        handler: () => {
                            console.warn("data deleted " + id);
                            // this.remove(id, array, keyStatus, RefuseStatus);
                            callback(id, parent);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    defaultCallback(id, parent) {
        this.presentToast(`this is a default callback ${id} `);
    }
};
GlobalInteraction.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
GlobalInteraction = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlobalInteraction);



/***/ }),

/***/ "./src/app/pages/patient/assoc-praticiens/assoc-praticiens-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/patient/assoc-praticiens/assoc-praticiens-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AssocPraticiensPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocPraticiensPageRoutingModule", function() { return AssocPraticiensPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _assoc_praticiens_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assoc-praticiens.page */ "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.ts");




const routes = [
    {
        path: '',
        component: _assoc_praticiens_page__WEBPACK_IMPORTED_MODULE_3__["AssocPraticiensPage"]
    }
];
let AssocPraticiensPageRoutingModule = class AssocPraticiensPageRoutingModule {
};
AssocPraticiensPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssocPraticiensPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/patient/assoc-praticiens/assoc-praticiens.module.ts ***!
  \***************************************************************************/
/*! exports provided: AssocPraticiensPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocPraticiensPageModule", function() { return AssocPraticiensPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _assoc_praticiens_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assoc-praticiens-routing.module */ "./src/app/pages/patient/assoc-praticiens/assoc-praticiens-routing.module.ts");
/* harmony import */ var _assoc_praticiens_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assoc-praticiens.page */ "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.ts");







let AssocPraticiensPageModule = class AssocPraticiensPageModule {
};
AssocPraticiensPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assoc_praticiens_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssocPraticiensPageRoutingModule"]
        ],
        declarations: [_assoc_praticiens_page__WEBPACK_IMPORTED_MODULE_6__["AssocPraticiensPage"]]
    })
], AssocPraticiensPageModule);



/***/ }),

/***/ "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  flex-basis: 100%;\n}\n\n.profile_praticien {\n  width: 50%;\n  height: 50%;\n}\n\n.fonction {\n  color: var(--ion-color-primary);\n}\n\n.name {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9hc3NvYy1wcmF0aWNpZW5zL2Fzc29jLXByYXRpY2llbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvYXNzb2MtcHJhdGljaWVucy9hc3NvYy1wcmF0aWNpZW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZV9wcmF0aWNpZW4ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5mb25jdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4ubmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.ts ***!
  \*************************************************************************/
/*! exports provided: AssocPraticiensPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocPraticiensPage", function() { return AssocPraticiensPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _global_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global.interaction */ "./src/app/pages/global.interaction.ts");




let AssocPraticiensPage = class AssocPraticiensPage {
    constructor(patientSrvc, globalItem) {
        this.patientSrvc = patientSrvc;
        this.globalItem = globalItem;
        this.queryText = "";
        this.assoc_praticiens = [];
    }
    ngOnInit() {
        this.globalItem.presentLoading();
        this.getAllMyPraticians();
    }
    updateRdvList() {
        if (this.List) {
            this.List.closeSlidingItems();
        }
    }
    getAllMyPraticians() {
        this.patientSrvc.getAssociatedPraticians().subscribe(data => {
            this.assoc_praticiens = data;
            this.globalItem.dismissLoading();
        });
    }
};
AssocPraticiensPage.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] },
    { type: _global_interaction__WEBPACK_IMPORTED_MODULE_3__["GlobalInteraction"] }
];
AssocPraticiensPage.propDecorators = {
    List: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["List", { static: true },] }]
};
AssocPraticiensPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assoc-praticiens',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assoc-praticiens.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assoc-praticiens.page.scss */ "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.scss")).default]
    })
], AssocPraticiensPage);



/***/ })

}]);
//# sourceMappingURL=assoc-praticiens-assoc-praticiens-module-es2015.js.map