(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/profile/profile.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/profile/profile.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-title slot=\"start\">Profile</ion-title>\n    </ion-buttons>\n\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n\n    <ion-title slot=\"end\" color=\"tertiary\" class=\"identifiant\" *ngIf=\"profile\"\n      >{{profile.username}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"card\">\n    <div class=\"header\">\n      <div class=\"avatar\">\n        <img src=\"./../../../../assets/images/praticien.jpg\" alt=\"\" />\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\" *ngIf=\"profile\">\n    <div class=\"user-meta ion-text-center\">\n      <h3 class=\"playername\">\n        {{profile.first_name}} {{profile.last_name}} ({{type_patient}})\n      </h3>\n      <h6 class=\"ranking\">\n        Date de création:\n        <ion-chip>\n          <ion-label>{{profile.created_at}}</ion-label>\n        </ion-chip>\n      </h6>\n    </div>\n    <div>\n      <form [formGroup]=\"patientRegisterForm\">\n        <ion-item lines=\"full\" disabled>\n          <ion-label position=\"stacked\">Date de naissance</ion-label>\n          <ion-datetime\n            display-format=\"MMM DD, YYYY\"\n            picker-format=\"MMM DD, YYYY\"\n            [ngModel]=\"profile.date_on_born\"\n            formControlName=\"birthday\"\n            required\n          ></ion-datetime>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Pays</ion-label>\n          <ion-select\n            placeholder=\"Select\"\n            formControlName=\"country\"\n            [(ngModel)]=\"profile.state\"\n            [compareWith]=\"compareFn\"\n            required\n          >\n            <ion-select-option value=\"1\">Madagascar</ion-select-option>\n            <ion-select-option value=\"196\">France</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Ville</ion-label>\n          <ion-select\n            placeholder=\"Select\"\n            formControlName=\"city\"\n            required\n            [(ngModel)]=\"profile.city\"\n            [compareWith]=\"compareFn\"\n          >\n            <ion-select-option value=\"196\"> Madagascar</ion-select-option>\n            <ion-select-option value=\"1\">France</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"full\" disabled>\n          <ion-label position=\"stacked\">Sexe</ion-label>\n          <ion-select\n            placeholder=\"Select\"\n            formControlName=\"gender\"\n            required\n            [ngModel]=\"profile.sexe\"\n          >\n            <ion-select-option>Masculin</ion-select-option>\n            <ion-select-option>Feminin</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Adresse</ion-label>\n          <ion-textarea\n            required\n            formControlName=\"address\"\n            [ngModel]=\"profile.address\"\n          ></ion-textarea>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"email\"\n            [ngModel]=\"profile.email\"\n          ></ion-input>\n          <!-- <div\n            style=\"color: red; padding-top: 0.2rem\"\n            *ngIf=\"patientRegisterForm.hasError('required', 'email')\"\n          ></div> -->\n          <!-- <div\n            *ngIf=\"!patientRegisterForm.controls.email.valid &&\n            patientRegisterForm.controls.email.dirty\"\n            class=\"validator-error\"\n          >\n            Please enter a valid email.\n          </div> -->\n        </ion-item>\n\n        <ion-item lines=\"full\" *ngIf=\"profile.father_name\">\n          <ion-label position=\"stacked\"\n            >Nom du père{{profile.father_name}}</ion-label\n          >\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"father_name\"\n            [ngModel]=\"this.profile.father_name\"\n          ></ion-input>\n        </ion-item>\n        <ion-item lines=\"full\" *ngIf=\"profile.mother_name\">\n          <ion-label position=\"stacked\">Nom de la mère</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"mother_name\"\n            [ngModel]=\"this.profile.mother_name\"\n          ></ion-input>\n        </ion-item>\n\n        <ion-row>\n          <ion-col>\n            <ion-button\n              type=\"submit\"\n              color=\"sgreen \"\n              expand=\"full\"\n              (click)=\"update()\"\n              >Modifier</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/patient/profile/profile-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/patient/profile/profile-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/patient/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/patient/profile/profile.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/patient/profile/profile.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/patient/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/patient/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/patient/profile/profile.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/patient/profile/profile.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-content {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\nion-toolbar {\n  background: transparent;\n}\n.card {\n  background: url('doctor.jpg') no-repeat top center/cover fixed, #fff;\n  margin: 0 auto;\n}\n.card .header {\n  height: 200px;\n}\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1 * (80px + 4px));\n  border: 8px solid var(--ion-color-sgreen);\n  background-color: #fff;\n}\n.card-body {\n  background-color: #ffffff;\n  padding: 30px;\n  height: calc(100vh – (200px + 56px));\n  overflow: hidden;\n}\n.card-body .user-meta {\n  padding-top: 40px;\n}\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n.identifiant {\n  font-style: italic;\n  font-size: medium;\n  color: var(--ion-color-sred);\n  padding-right: 30px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFRjtBQUFBO0VBQ0UsdUJBQUE7QUFHRjtBQUFBO0VBQ0Usb0VBQUE7RUFHQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDTjtBQUNNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUtBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSxpQkFBQTtBQUZKO0FBSUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRk47QUFLSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSE47QUFPQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF0aWVudC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kb2N0b3IuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlci9jb3ZlciBmaXhlZCwgI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygtMSAqICg4MHB4ICsgNHB4KSk7XG4gIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZ3JlZW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIOKAkyAoMjAwcHggKyA1NnB4KSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAucGxheWVybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDM5NDA7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLmNvdW50cnkge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM5NDllYTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaWRlbnRpZmlhbnQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNyZWQpO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/patient/profile/profile.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/patient/profile/profile.page.ts ***!
  \*******************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");




let ProfilePage = class ProfilePage {
    constructor(patienSrvc) {
        this.patienSrvc = patienSrvc;
        this._id = "Identifiant";
        this.validation_msg = {};
        this.getProfile();
    }
    ngOnInit() { }
    buildForm(data) {
        this.patientRegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // lastName: new FormControl("", [Validators.required]),
            // firstName: new FormControl("", [Validators.required]),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            // description: new FormControl("", [Validators.required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            function: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        if (data.type_patient == 1) {
            this.patientRegisterForm.addControl("father_name", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            this.patientRegisterForm.addControl("mother_name", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
        }
    }
    update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.patientRegisterForm.valid) {
                Object.keys(this.patientRegisterForm.value).forEach((key) => {
                    console.log("valid", this.patientRegisterForm.value[key]);
                });
            }
            else {
                console.log("NOT valid", this.patientRegisterForm);
                Object.keys(this.patientRegisterForm.value).forEach((key) => {
                    console.log("NOT valid", this.patientRegisterForm.value[key]);
                });
            }
        });
    }
    //Comparaison select
    compareFn(e1, e2) {
        return e1 && e2 ? e1.id == e2.id : e1 == e2;
    }
    getProfile() {
        this.patienSrvc.getProfile().subscribe((data) => {
            console.log(data);
            this.profile = data;
            // this.profile.date_on_born = new Date(data.date_on_born);
            this.buildForm(data);
            this.type_patient = data.type_patient == 1 ? "Enfant" : "Adult";
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/patient/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map