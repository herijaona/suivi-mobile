(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-patient-patient-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/patient.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/patient.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-split-pane contentId=\"contents\" when=\"xs\" [disabled]=\"true\">\n  <ion-menu side=\"start\" type=\"overlay\" menuId=\"first\" contentId=\"contents\">\n    <ion-content>\n      <div class=\"menu-praticien\"></div>\n      <div class=\"header-content\">\n        <ion-menu-toggle auto-hide=\"false\">\n          <ion-label>\n            <img\n              src=\"../../../assets/images/praticien.jpg\"\n              (click)=\"redirect('/patient/profile')\"\n            />\n          </ion-label>\n          <ion-label>\n            <h2>{{name}}</h2>\n          </ion-label>\n        </ion-menu-toggle>\n      </div>\n\n      <ion-list lines=\"none\" class=\"menu-items\" *ngFor=\"let p of pages\">\n        <div>\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item\n              text-wrap\n              routerLink=\"{{p.url}}\"\n              routerDirection=\"root\"\n              [class.active-item]=\"selectedPath === p.url\"\n            >\n              <ion-icon\n                *ngIf=\"selectedPath === p.url\"\n                slot=\"start\"\n                name=\"caret-forward-outline\"\n                color=\"sgreen\"\n              >\n              </ion-icon>\n              <ion-label>{{p.title}}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </div>\n      </ion-list>\n    </ion-content>\n    <ion-footer>\n      <ion-button\n        class=\"logout\"\n        color=\"sred\"\n        (click)=\"logout()\"\n        [routerLink]=\"['/login']\"\n      >\n        <ion-icon slot=\"start\" name=\"exit-outline\"> </ion-icon>\n\n        <ion-label>Logout</ion-label>\n      </ion-button>\n    </ion-footer>\n  </ion-menu>\n  <ion-router-outlet id=\"contents\" main></ion-router-outlet>\n</ion-split-pane>\n");

/***/ }),

/***/ "./src/app/pages/patient/patient-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/patient/patient-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PatientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPageRoutingModule", function() { return PatientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient.page */ "./src/app/pages/patient/patient.page.ts");




const routes = [
    {
        path: "",
        redirectTo: "vaccination",
    },
    {
        path: "",
        component: _patient_page__WEBPACK_IMPORTED_MODULE_3__["PatientPage"],
        children: [
            {
                path: "rendez-vous",
                loadChildren: () => Promise.all(/*! import() | rendez-vous-rendez-vous-module */[__webpack_require__.e("default~pages-praticien-praticien-module~rendez-vous-rendez-vous-module~vaccination-vaccination-module"), __webpack_require__.e("common"), __webpack_require__.e("rendez-vous-rendez-vous-module")]).then(__webpack_require__.bind(null, /*! ./rendez-vous/rendez-vous.module */ "./src/app/pages/patient/rendez-vous/rendez-vous.module.ts")).then((m) => m.RendezVousPageModule),
            },
            {
                path: "vaccination",
                loadChildren: () => Promise.all(/*! import() | vaccination-vaccination-module */[__webpack_require__.e("default~pages-praticien-praticien-module~rendez-vous-rendez-vous-module~vaccination-vaccination-module"), __webpack_require__.e("common"), __webpack_require__.e("vaccination-vaccination-module")]).then(__webpack_require__.bind(null, /*! ./vaccination/vaccination.module */ "./src/app/pages/patient/vaccination/vaccination.module.ts")).then((m) => m.VaccinationPageModule),
            },
            {
                path: "familly",
                loadChildren: () => __webpack_require__.e(/*! import() | familly-familly-module */ "familly-familly-module").then(__webpack_require__.bind(null, /*! ./familly/familly.module */ "./src/app/pages/patient/familly/familly.module.ts")).then((m) => m.FamillyPageModule),
            },
            {
                path: "profile",
                loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/pages/patient/profile/profile.module.ts")).then((m) => m.ProfilePageModule),
            },
        ],
    },
];
let PatientPageRoutingModule = class PatientPageRoutingModule {
};
PatientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PatientPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/patient/patient.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/patient/patient.module.ts ***!
  \*************************************************/
/*! exports provided: PatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPageModule", function() { return PatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-routing.module */ "./src/app/pages/patient/patient-routing.module.ts");
/* harmony import */ var _patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient.page */ "./src/app/pages/patient/patient.page.ts");







let PatientPageModule = class PatientPageModule {
};
PatientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientPageRoutingModule"]
        ],
        declarations: [_patient_page__WEBPACK_IMPORTED_MODULE_6__["PatientPage"]]
    })
], PatientPageModule);



/***/ }),

/***/ "./src/app/pages/patient/patient.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/patient/patient.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-praticien {\n  height: 200px;\n  width: 400px;\n  background: var(--ion-color-sgreen);\n  transform: rotate(-15deg);\n  background: linear-gradient(90deg, var(--ion-color-sgreen) 0%, var(--ion-color-sgreen) 100%);\n  box-shadow: 0px 1px 10px rgba(98, 145, 255, 0.5);\n  border-radius: 10px 10px 10px 50px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 1px solid #1b9b3d;\n  margin-right: 10px;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  color: white;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: white;\n  font-weight: 100;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-menu-toggle ion-icon {\n  margin-right: 20px;\n  color: #999999;\n}\n\n.menu-items ion-menu-toggle ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\nion-item,\n.containSubpage {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.subPages {\n  padding-left: 60px;\n  margin-bottom: 10px;\n}\n\n.active-item {\n  margin-left: -25px;\n  color: var(--ion-color-sgreen);\n}\n\n.active-item-subpages {\n  margin-left: 25px;\n  color: var(--ion-color-sgreen);\n}\n\n.logout {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9wYXRpZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLDRGQUFBO0VBS0EsZ0RBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFRQTtFQUNFLFdBQUE7QUFMRjs7QUFRSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQU5OOztBQVFJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQU5OOztBQVdBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFSRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvcGF0aWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1wcmF0aWNpZW4ge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZ3JlZW4pO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgOTBkZWcsXHJcbiAgICB2YXIoLS1pb24tY29sb3Itc2dyZWVuKSAwJSxcclxuICAgIHZhcigtLWlvbi1jb2xvci1zZ3JlZW4pIDEwMCVcclxuICApO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LCAxNDUsIDI1NSwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzBweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWI5YjNkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICB9XHJcbn1cclxuXHJcbi5tZW51LWl0ZW1zIHtcclxuICBtYXJnaW46IDBweDtcclxuXHJcbiAgaW9uLW1lbnUtdG9nZ2xlIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIH1cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWl0ZW0sXHJcbi5jb250YWluU3VicGFnZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJQYWdlcyB7XHJcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUtaXRlbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2dyZWVuKTtcclxufVxyXG5cclxuLmFjdGl2ZS1pdGVtLXN1YnBhZ2VzIHtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNncmVlbik7XHJcbn1cclxuXHJcbi5sb2dvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/patient/patient.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/patient/patient.page.ts ***!
  \***********************************************/
/*! exports provided: PatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPage", function() { return PatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






let PatientPage = class PatientPage {
    constructor(menuCtrl, router, plt, authSrvc, storage, navCtrl) {
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.plt = plt;
        this.authSrvc = authSrvc;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.pages = [
            {
                title: "Callendrier de vaccination",
                url: "/patient/vaccination",
            },
            {
                title: "Rendez-vous",
                url: "/patient/rendez-vous",
            },
            {
                title: "Famille",
                url: "/patient/familly",
            },
        ];
        this.selectedPath = "";
        this.router.events.subscribe((event) => {
            this.selectedPath = event.url;
            console.log("PatientPage -> this.selectedPath", this.selectedPath);
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedPath = "/patient/rendez-vous";
            this.initialize();
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
        });
    }
    openFirst() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //setTimeout(()=> this.menuCtrl.toggle("first"), 10);
            this.plt.ready().then(() => {
                this.menuCtrl.get("first").then((element) => {
                    if (element.isActive) {
                        setTimeout(() => element.toggle(), 10);
                    }
                    console.log("PatientPage -> openFirst -> element.offsetWidth", element.offsetWidth);
                });
            });
        });
    }
    logout() {
        this.authSrvc.logout();
    }
    initialize() {
        const { roles, username } = this.authSrvc.user;
        console.log("PatientPage -> initialize -> username", username);
        console.log("PatientPage -> initialize -> roles", roles);
        this.name = `${username}`;
        this.fonction = "patient";
    }
    redirect(link) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("PatientPage -> redirect -> link", link);
            this.navCtrl.navigateForward(link);
        });
    }
};
PatientPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PatientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-patient",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./patient.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/patient.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./patient.page.scss */ "./src/app/pages/patient/patient.page.scss")).default]
    })
], PatientPage);



/***/ })

}]);
//# sourceMappingURL=pages-patient-patient-module-es2015.js.map