(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proposition-rdv-proposition-rdv-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/proposition-rdv/new-rdv/new-rdv.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/proposition-rdv/new-rdv/new-rdv.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Proposition de rendez-vous</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-grid fixed>\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title> </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <form\n            [formGroup]=\"propositionForm\"\n            (ngSubmit)=\"propose()\"\n            method=\"post\"\n          >\n            <div class=\"mb-14\">\n              <label>choisi un patient</label>\n              <ion-select\n                placeholder=\"Select\"\n                formControlName=\"patient\"\n                required\n              >\n                <ion-select-option\n                  *ngFor=\"let item of patients\"\n                  [value]=\"item.id\"\n                  >{{\n                    item.firstName.toString() + \" \" + item.lastName.toString()\n                  }}</ion-select-option\n                >\n                <!-- <ion-select-option></ion-select-option> -->\n              </ion-select>\n              <!-- <small\n                class=\"form-text red-color\"\n                *ngIf=\"isFieldInvalid(propositionForm, 'patient')\"\n                >This field is required</small\n              > -->\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Propose une date </label>\n              <ion-datetime\n                display-format=\"MMM DD, YYYY\"\n                formControlName=\"dateRdv\"\n                required\n              ></ion-datetime>\n              <!-- <small\n                class=\"form-text red-color\"\n                *ngIf=\"isFieldInvalid(propositionForm, 'dateRdv')\"\n                >This field is required</small\n              > -->\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Propose un horaire</label>\n              <ion-datetime\n                display-format=\"h:mm A\"\n                picker-format=\"h:mm A\"\n                formControlName=\"heureRdv\"\n                required\n              ></ion-datetime>\n              <!-- <small\n                class=\"form-text red-color\"\n                *ngIf=\"isFieldInvalid(propositionForm, 'heureRdv')\"\n                >This field is required</small\n              > -->\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Description du rendez-vous</label>\n              <ion-input\n                type=\"text\"\n                required\n                formControlName=\"description\"\n              ></ion-input\n              ><!-- <small\n                class=\"form-text red-color\"\n                *ngIf=\"isFieldInvalid(propositionForm, 'description')\"\n                >This field is required</small\n              > -->\n            </div>\n\n            <ion-row>\n              <ion-col>\n                <ion-button color=\"sred\" expand=\"block\" (click)=\"dismiss()\">\n                  <ion-icon slot=\"start\" name=\"\"> x </ion-icon\n                  >Cancel</ion-button\n                >\n                <legend class=\"ion-text-center\"></legend>\n                <ion-button type=\"submit\" color=\"sgreen\" expand=\"block\"\n                  ><ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n                  Save\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/proposition-rdv/proposition-rdv.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/proposition-rdv/proposition-rdv.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translutient=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-title *ngIf=\"!ios && !showSearchbar\">Proposition</ion-title>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\" slot=\"start\"></ion-menu-button>\n    <ion-title *ngIf=\"ios\">Proposition</ion-title>\n\n    <ion-searchbar\n      (ionInput)=\"filterItems($event)\"\n      debounce=\"500\"\n      placeholder=\"Rechercher\"\n      type=\"text\"\n      showCancelButton=\"always\"\n      *ngIf=\"showSearchbar\"\n      (ionCancel)=\"showSearchbar = false\"\n    ></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"ios\">\n    <ion-searchbar\n      (ionInput)=\"filterItems($event)\"\n      debounce=\"500\"\n      placeholder=\"Rechercher\"\n      type=\"text\"\n      (ionCancel)=\"showSearchbar = false\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\" *ngIf=\"isItemAvailable\">\n    <ion-item-group *ngFor=\"let rdv of filterdItems\">\n      <ion-item-divider sticky>\n        <ion-label class=\"ion-text-center\"> {{ rdv.date}} </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding\n        *ngFor=\"let eachRdv of rdv.groups\"\n        #slidingItem\n        class=\"test\"\n      >\n        <ion-item *ngIf=\"eachRdv.patient !== null\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../assets/images/img38.jpg\" />\n          </ion-avatar>\n          <ion-label>\n            <h2>{{eachRdv.patient.firstName}} {{eachRdv.patient.lastName}}</h2>\n            <p>{{eachRdv.dateProposition}}</p>\n            <p>{{eachRdv.descriptionProposition}}</p>\n          </ion-label>\n          <ion-icon slot=\"end\" name=\"pencil-sharp\" color=\"primary\"></ion-icon>\n\n          <ion-icon\n            slot=\"end\"\n            name=\"trash-bin-sharp\"\n            color=\"sred\"\n            (click)=\"presentAlertConfirm(eachRdv.id)\"\n          ></ion-icon>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <!-- <ion-fab-button [routerLink]=\"['new-rdv']\"> -->\n  <ion-fab-button (click)=\"openNewRdvModal()\" color=\"sgreen\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n");

/***/ }),

/***/ "./src/app/pages/praticien/proposition-rdv/new-rdv/new-rdv.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/praticien/proposition-rdv/new-rdv/new-rdv.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByYXRpY2llbi9wcm9wb3NpdGlvbi1yZHYvbmV3LXJkdi9uZXctcmR2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/praticien/proposition-rdv/new-rdv/new-rdv.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/praticien/proposition-rdv/new-rdv/new-rdv.component.ts ***!
  \******************************************************************************/
/*! exports provided: NewRdvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRdvComponent", function() { return NewRdvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






let NewRdvComponent = class NewRdvComponent {
    constructor(praticienSrvc, navCtrl, navParms, modalCtrl, storage) {
        this.praticienSrvc = praticienSrvc;
        this.navCtrl = navCtrl;
        this.navParms = navParms;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.propositionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                patient: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                dateRdv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                heureRdv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
            console.log("NewRdvComponent -> patients -> test", this.navParms.get("patients"));
            this.patients = this.navParms.get("patients");
            this.patients.forEach((element) => {
                console.log("NewRdvComponent -> patients", element.firstName);
            });
        });
    }
    isFieldInvalid(dataFormStep, field) {
        return ((!dataFormStep.get(field).valid && dataFormStep.get(field).touched) ||
            (dataFormStep.get(field).untouched && !dataFormStep.get(field).valid));
    }
    propose() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const prop = {
                description: this.propositionForm.value.description,
                patient: this.propositionForm.value.patient,
                dateRdv: this.propositionForm.value.dateRdv,
                heureRdv: this.propositionForm.value.heureRdv,
                // id: await this.praticienSrvc.getUserIDByStorage(),
                id: 0,
            };
            console.log(this.propositionForm.value.patient, this.propositionForm.value.dateRdv, this.propositionForm.value.description, this.propositionForm.value.heureRdv, prop.id);
            if (this.propositionForm.valid) {
                console.log(" proposition envoyé ");
                this.praticienSrvc.proposeRdv(prop);
                this.backToList();
            }
            else {
                console.log(" not valid ");
            }
        });
    }
    backToList() {
        this.navCtrl.navigateRoot("/praticien/proposition-rdv");
        this.dismiss();
    }
    cancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(" cancel ");
            this.backToList();
        });
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            dismissed: true,
        });
    }
};
NewRdvComponent.ctorParameters = () => [
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__["PraticienService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
NewRdvComponent.propDecorators = {
    test: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    patients: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
NewRdvComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-new-rdv",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-rdv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/proposition-rdv/new-rdv/new-rdv.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-rdv.component.scss */ "./src/app/pages/praticien/proposition-rdv/new-rdv/new-rdv.component.scss")).default]
    })
], NewRdvComponent);



/***/ }),

/***/ "./src/app/pages/praticien/proposition-rdv/proposition-rdv-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/praticien/proposition-rdv/proposition-rdv-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PropositionRdvPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropositionRdvPageRoutingModule", function() { return PropositionRdvPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _proposition_rdv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proposition-rdv.page */ "./src/app/pages/praticien/proposition-rdv/proposition-rdv.page.ts");




const routes = [
    {
        path: "",
        component: _proposition_rdv_page__WEBPACK_IMPORTED_MODULE_3__["PropositionRdvPage"],
    },
];
let PropositionRdvPageRoutingModule = class PropositionRdvPageRoutingModule {
};
PropositionRdvPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PropositionRdvPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/praticien/proposition-rdv/proposition-rdv.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/praticien/proposition-rdv/proposition-rdv.module.ts ***!
  \***************************************************************************/
/*! exports provided: PropositionRdvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropositionRdvPageModule", function() { return PropositionRdvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _proposition_rdv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proposition-rdv-routing.module */ "./src/app/pages/praticien/proposition-rdv/proposition-rdv-routing.module.ts");
/* harmony import */ var _proposition_rdv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proposition-rdv.page */ "./src/app/pages/praticien/proposition-rdv/proposition-rdv.page.ts");
/* harmony import */ var _new_rdv_new_rdv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-rdv/new-rdv.component */ "./src/app/pages/praticien/proposition-rdv/new-rdv/new-rdv.component.ts");








let PropositionRdvPageModule = class PropositionRdvPageModule {
};
PropositionRdvPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _proposition_rdv_routing_module__WEBPACK_IMPORTED_MODULE_5__["PropositionRdvPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_proposition_rdv_page__WEBPACK_IMPORTED_MODULE_6__["PropositionRdvPage"], _new_rdv_new_rdv_component__WEBPACK_IMPORTED_MODULE_7__["NewRdvComponent"]],
    })
], PropositionRdvPageModule);



/***/ }),

/***/ "./src/app/pages/praticien/proposition-rdv/proposition-rdv.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/praticien/proposition-rdv/proposition-rdv.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** content **/\nion-content ion-row ion-col ion-icon {\n  border: 1px solid rgba(174, 170, 170, 0.42);\n  padding: 19px 30px;\n}\n.display-block {\n  display: block;\n}\n.list-item .icon-arrow-forward {\n  position: absolute;\n  right: 16px;\n  top: 19px;\n}\nh2 {\n  text-align: left;\n  font-size: 14px;\n  color: black;\n}\nh3 {\n  color: gray;\n  font-size: 11px;\n}\ndiv.p {\n  color: gray;\n  font-size: 11px;\n}\nsvg {\n  position: absolute;\n  right: 17px;\n  top: 28px;\n  font-size: 22px;\n  width: 9px;\n}\nion-content ion-list {\n  padding: 3px;\n}\n.test {\n  /* border-left: 2px solid var(--ion-color-sgreen); */\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL3Byb3Bvc2l0aW9uLXJkdi9wcm9wb3NpdGlvbi1yZHYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFLTTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQVNBO0VBQ0UsY0FBQTtBQU5GO0FBVUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBUEo7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFSRjtBQVdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFSRjtBQVdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFSRjtBQVdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBUkY7QUFZRTtFQUNFLFlBQUE7QUFUSjtBQW9CQTtFQUNFLG9EQUFBO0VBQ0EsaUJBQUE7QUFqQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmF0aWNpZW4vcHJvcG9zaXRpb24tcmR2L3Byb3Bvc2l0aW9uLXJkdi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogY29udGVudCAqKi9cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBpb24tcm93IHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzQsIDE3MCwgMTcwLCAwLjQyKTtcclxuICAgICAgICBwYWRkaW5nOiAxOXB4IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kaXNwbGF5LWJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxpc3QtaXRlbSB7XHJcbiAgLmljb24tYXJyb3ctZm9yd2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIHRvcDogMTlweDtcclxuICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmgzIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbmRpdi5wIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxN3B4O1xyXG4gIHRvcDogMjhweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgd2lkdGg6IDlweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcbn1cclxuXHJcbiRjYXRlZ29yaWVzOiAoXHJcbiAgaW9uaWM6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcclxuICBjb21tdW5pY2F0aW9uOiAjOGU4ZDkzLFxyXG4gIHByb3Bvc2l0aW9uOiAjZmVkMDM1LFxyXG4gIGNvbnN1bHRhdGlvbjogIzY2MDBjYyxcclxuKTtcclxuXHJcbi50ZXN0IHtcclxuICAvKiBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZ3JlZW4pOyAqL1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/praticien/proposition-rdv/proposition-rdv.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/praticien/proposition-rdv/proposition-rdv.page.ts ***!
  \*************************************************************************/
/*! exports provided: PropositionRdvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropositionRdvPage", function() { return PropositionRdvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_rdv_new_rdv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-rdv/new-rdv.component */ "./src/app/pages/praticien/proposition-rdv/new-rdv/new-rdv.component.ts");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");








let PropositionRdvPage = class PropositionRdvPage {
    constructor(modalCtrl, praticienSrvc, patienSrvc, config, authSrvc, storage, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.praticienSrvc = praticienSrvc;
        this.patienSrvc = patienSrvc;
        this.config = config;
        this.authSrvc = authSrvc;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.items = [];
        this.filterdItems = [];
        this.isItemAvailable = true;
        this.changeColor = true;
    }
    ionViewWillEnter() {
        this.initializeItems();
    }
    ngOnInit() {
        this.ios = this.config.get("mode") === "ios";
        this.initializeItems();
        this.getPatients();
    }
    initializeItems() {
        this.praticienSrvc
            .getAllProposeRdv(this.storage.get("_id"))
            .subscribe((data) => {
            console.log("PropositionRdvPage -> initializeItems -> data", data);
            this.items = [...Array.from(this.regroupData(data))];
            this.filterdItems = [...this.items];
        });
    }
    filterItems(ev) {
        const query = ev.target.value.toLowerCase();
        console.log("PropositionRdvPage -> getItems -> query", query);
        console.log("PropositionRdvPage -> filterItems -> this.items", this.items);
        requestAnimationFrame(() => {
            if (!query || query === "") {
                this.filterdItems = [...this.items];
                return;
            }
            let temp = [];
            this.filterdItems = temp;
            [...this.items].forEach((item) => {
                let data = [];
                item.groups.forEach((res) => {
                    if (query) {
                        if (res.patient.firstName.includes(query) ||
                            res.patient.lastName.includes(query) ||
                            res.descriptionProposition.includes(query)) {
                            data.push(res);
                        }
                    }
                });
                const a = {
                    date: item.date,
                    groups: data,
                };
                temp.push(a);
            });
        });
    }
    //TODO: format date
    regroupData(data) {
        const groups = data.reduce((groups, rdv) => {
            const date = rdv.dateProposition.split("T")[0];
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(rdv);
            return groups;
        }, {});
        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                groups: groups[date],
            };
        });
        const sortedActivities = groupArrays.slice().sort(function (a, b) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        return sortedActivities;
    }
    openNewRdvModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newRdvModal = yield this.modalCtrl.create({
                component: _new_rdv_new_rdv_component__WEBPACK_IMPORTED_MODULE_3__["NewRdvComponent"],
                cssClass: "test-class",
                swipeToClose: true,
                componentProps: {
                    patients: this.patients,
                    test: "test",
                },
            });
            newRdvModal.onDidDismiss().then(() => {
                this.initializeItems();
            });
            return yield newRdvModal.present();
        });
    }
    getPatients() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.patienSrvc.getPatients().subscribe((data) => {
                console.log("PropositionRdvPage -> getPatients -> data", data);
                this.patients = data;
            });
        });
    }
    deleteProprdv(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // TODO: confirm delete
            this.praticienSrvc.deletePropositionRdv(id).subscribe(() => {
                this.initializeItems();
            });
        });
    }
    presentAlertConfirm(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: "my-custom-class",
                header: "Delete",
                message: "Do you really want to delete it ?",
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
                        text: "Okay",
                        handler: () => {
                            console.log("data deleted id" + id);
                            this.deleteProprdv(id);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
PropositionRdvPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_4__["PraticienService"] },
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
PropositionRdvPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-proposition-rdv",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./proposition-rdv.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/proposition-rdv/proposition-rdv.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./proposition-rdv.page.scss */ "./src/app/pages/praticien/proposition-rdv/proposition-rdv.page.scss")).default]
    })
    // TODO delete + Modifier
], PropositionRdvPage);



/***/ })

}]);
//# sourceMappingURL=proposition-rdv-proposition-rdv-module-es2015.js.map