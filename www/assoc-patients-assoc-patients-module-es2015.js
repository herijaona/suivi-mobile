(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assoc-patients-assoc-patients-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/assoc-patients/assoc-patients.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/assoc-patients/assoc-patients.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Mes Patients </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar= true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list #scheduleList>\n    <ion-item-group>\n      <ion-item-sliding #slidingItem>\n        <ion-item lines=\"none\" *ngFor=\"let patient of this.assoc_patients\">\n          <ion-card>\n            <ion-card-content\n              ><ion-grid>\n                <ion-row>\n                  <ion-col size=\"4\">\n                    <ion-label>\n                      <img src=\"../../../assets/images/praticien.jpg\" />\n                    </ion-label>\n                  </ion-col>\n                  <ion-col size=\"8\" class=\"information\">\n                    <h2 class=\"name\">\n                      Dr. {{patient.firstName}} {{patient.lastName}}\n                    </h2>\n\n                    <ion-label> </ion-label>\n                    <ion-label> Pays : {{patient.state}} </ion-label>\n                    <ion-label> Ville : {{patient.city}} </ion-label>\n                    <ion-label> Adresse : {{patient.address}} </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row> </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/praticien/assoc-patients/assoc-patients-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/praticien/assoc-patients/assoc-patients-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AssocPatientsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocPatientsPageRoutingModule", function() { return AssocPatientsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _assoc_patients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assoc-patients.page */ "./src/app/pages/praticien/assoc-patients/assoc-patients.page.ts");




const routes = [
    {
        path: '',
        component: _assoc_patients_page__WEBPACK_IMPORTED_MODULE_3__["AssocPatientsPage"]
    }
];
let AssocPatientsPageRoutingModule = class AssocPatientsPageRoutingModule {
};
AssocPatientsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssocPatientsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/praticien/assoc-patients/assoc-patients.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/praticien/assoc-patients/assoc-patients.module.ts ***!
  \*************************************************************************/
/*! exports provided: AssocPatientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocPatientsPageModule", function() { return AssocPatientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _assoc_patients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assoc-patients-routing.module */ "./src/app/pages/praticien/assoc-patients/assoc-patients-routing.module.ts");
/* harmony import */ var _assoc_patients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assoc-patients.page */ "./src/app/pages/praticien/assoc-patients/assoc-patients.page.ts");







let AssocPatientsPageModule = class AssocPatientsPageModule {
};
AssocPatientsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assoc_patients_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssocPatientsPageRoutingModule"]
        ],
        declarations: [_assoc_patients_page__WEBPACK_IMPORTED_MODULE_6__["AssocPatientsPage"]]
    })
], AssocPatientsPageModule);



/***/ }),

/***/ "./src/app/pages/praticien/assoc-patients/assoc-patients.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/praticien/assoc-patients/assoc-patients.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  flex-basis: 100%;\n}\n\n.profile_praticien {\n  width: 50%;\n  height: 50%;\n}\n\n.fonction {\n  color: var(--ion-color-primary);\n}\n\n.name {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL2Fzc29jLXBhdGllbnRzL2Fzc29jLXBhdGllbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmF0aWNpZW4vYXNzb2MtcGF0aWVudHMvYXNzb2MtcGF0aWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIGZsZXgtYmFzaXM6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9maWxlX3ByYXRpY2llbiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuLmZvbmN0aW9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbi5uYW1lIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/praticien/assoc-patients/assoc-patients.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/praticien/assoc-patients/assoc-patients.page.ts ***!
  \***********************************************************************/
/*! exports provided: AssocPatientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssocPatientsPage", function() { return AssocPatientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");
/* harmony import */ var _global_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global.interaction */ "./src/app/pages/global.interaction.ts");





let AssocPatientsPage = class AssocPatientsPage {
    constructor(patientSrvc, globalItem, praticientSrvc) {
        this.patientSrvc = patientSrvc;
        this.globalItem = globalItem;
        this.praticientSrvc = praticientSrvc;
        this.queryText = "";
        this.assoc_patients = [];
    }
    ngOnInit() {
        this.globalItem.presentLoading();
        this.getAllMyPatients();
    }
    updateRdvList() {
        if (this.List) {
            this.List.closeSlidingItems();
        }
    }
    getAllMyPatients() {
        this.praticientSrvc.getAssociatedPatient().subscribe((data) => {
            // console.log("LL: AssocPatientsPage -> getAllMyPatients -> data", data)
            this.assoc_patients = data;
            this.globalItem.dismissLoading();
        });
    }
};
AssocPatientsPage.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] },
    { type: _global_interaction__WEBPACK_IMPORTED_MODULE_4__["GlobalInteraction"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__["PraticienService"] }
];
AssocPatientsPage.propDecorators = {
    List: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["List", { static: true },] }]
};
AssocPatientsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assoc-patients',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assoc-patients.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/assoc-patients/assoc-patients.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assoc-patients.page.scss */ "./src/app/pages/praticien/assoc-patients/assoc-patients.page.scss")).default]
    })
], AssocPatientsPage);



/***/ }),

/***/ "./src/app/services/patient.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constant */ "./src/constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let PatientService = class PatientService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev;
        this.url_api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev_api;
        this.url_apip = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev;
    }
    // TODO Get Patients
    getPatients() {
        return this.http.get(this.url + "patients");
        // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
        //   map((data: any) => {
        //     return data.mockPatient;
        //   })
        // );
    }
    getAllRdv() {
        return this.http.get(`${this.url_apip}patients/rdv`);
        // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
        //   map((data: any) => {
        //     return data.mockRdvListPatient;
        //   })
        // );
    }
    getTracksRdv(excludeTracks) {
        return this.http.get(src_constant__WEBPACK_IMPORTED_MODULE_2__["CONSTANT"].MOCK_DATA_JSON).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            // console.log("PatientService -> getTracksRdv -> data", excludeTracks);
            return data;
        }));
    }
    //TODO : Get Vaccin by patient
    getVaccinByPatient() {
        return this.http.get(`${this.url_apip}patients/vaccination`);
        // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
        //   map((data: any) => {
        //     return data.mockVaccinPatient;
        //   })
        // );
    }
    registerPatient(data) {
        return this.http.post(`${this.url_api}users`, data);
        Object.keys(data).forEach((element) => {
            console.log("PatientService -> registerPatient -> element", element);
            console.log("register => ", data[element]);
        });
    }
    getProfile() {
        return this.http.get(`${this.url_apip}patient/profile`);
        // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
        //   map((data: any) => {
        //     return data.mockPatientProfile;
        //   })
        // );
    }
    updateProfile(data) {
        return this.http.post(`${this.url_apip}patient/profile/edit`, data);
    }
    getAssociatedPraticians() {
        const res = this.http.get(`${this.url_apip}patients/praticien`);
        res.subscribe(data => {
            console.log("PatientService -> constructor -> res", data);
        });
        return res;
    }
    getFamily() {
        const res = this.http.get(`${this.url_apip}patients/family`);
        res.subscribe(data => console.log("PatientService -> getFamily -> res", data));
        return res;
    }
    addGroupFamily(nomGroupe) {
        const data = {
            designation: nomGroupe,
        };
        console.log("LL: PatientService -> addGroupFamily -> data", data);
        const res = this.http.post(`${this.url_apip}register/group`, data);
        return res;
    }
    addGroupFamilyMember(data) {
        console.log("PatientService -> addGroupFamilyMember -> data", data);
        const res = this.http.post(`${this.url_api}add/membres`, data);
        return res;
    }
    deleteFamilyMember(_idFamily) {
        const res = this.http.delete(`${this.url_api}family/${_idFamily}`);
        return res;
    }
    interventionPraticien(data) {
        console.log("####################LL: PatientService -> interventionPraticien -> data", data);
        const res = this.http.post(`${this.url_apip}intervention`, data);
        return res;
    }
    chekIfPractitionerIsAssociated(_idPraticien) {
        const res = this.http.get(`${this.url_apip}patients/check-association/${_idPraticien}`);
        return res;
    }
    proposeRdv(data) {
        const res = this.http.post(`${this.url_apip}add/rdv`, data);
        return res;
    }
    cancelRdvProposition(data) {
        const res = this.http.post(`${this.url_api}cancel/rdv`, data);
        return res;
    }
    postVaccinGeneration(_idPraticien) {
        const res = this.http.post(`${this.url_apip}patient/generation`, { praticien: _idPraticien });
        return res;
    }
};
PatientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PatientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], PatientService);



/***/ })

}]);
//# sourceMappingURL=assoc-patients-assoc-patients-module-es2015.js.map