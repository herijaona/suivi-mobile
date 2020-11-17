(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-patient-patient-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/patient.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/patient.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPatientPatientPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-split-pane contentId=\"contents\" when=\"xs\" [disabled]=\"true\">\n  <ion-menu side=\"start\" type=\"overlay\" menuId=\"first\" contentId=\"contents\">\n    <ion-content>\n      <div class=\"menu-praticien\"></div>\n      <div class=\"header-content\">\n        <ion-menu-toggle auto-hide=\"false\">\n          <div class=\"profile_redirect\">\n            <ion-label>\n              <img\n                src=\"../../../assets/images/praticien.jpg\"\n                (click)=\"redirect('/patient/profile')\"\n              />\n            </ion-label>\n\n            <ion-label>\n              <h2 class=\"name\">{{name}}</h2>\n            </ion-label>\n          </div>\n        </ion-menu-toggle>\n      </div>\n\n      <ion-list lines=\"none\" class=\"menu-items\" *ngFor=\"let p of pages\">\n        <div>\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item\n              text-wrap\n              routerLink=\"{{p.url}}\"\n              routerDirection=\"root\"\n              [class.active-item]=\"selectedPath === p.url\"\n            >\n              <ion-icon\n                *ngIf=\"selectedPath === p.url\"\n                slot=\"start\"\n                name=\"caret-forward-outline\"\n                color=\"sgreen\"\n              >\n              </ion-icon>\n              <ion-label>{{p.title}}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </div>\n      </ion-list>\n    </ion-content>\n    <ion-footer>\n      <ion-button\n        class=\"logout\"\n        color=\"sred\"\n        (click)=\"logout()\"\n        [routerLink]=\"['/login']\"\n      >\n        <ion-icon slot=\"start\" name=\"exit-outline\"> </ion-icon>\n\n        <ion-label>Logout</ion-label>\n      </ion-button>\n    </ion-footer>\n  </ion-menu>\n  <ion-router-outlet id=\"contents\" main></ion-router-outlet>\n</ion-split-pane>\n";
      /***/
    },

    /***/
    "./src/app/pages/patient/patient-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/patient/patient-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: PatientPageRoutingModule */

    /***/
    function srcAppPagesPatientPatientRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatientPageRoutingModule", function () {
        return PatientPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./patient.page */
      "./src/app/pages/patient/patient.page.ts");

      var routes = [{
        path: "",
        redirectTo: "vaccination"
      }, {
        path: "",
        component: _patient_page__WEBPACK_IMPORTED_MODULE_3__["PatientPage"],
        children: [{
          path: "rendez-vous",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | rendez-vous-rendez-vous-module */
            [__webpack_require__.e("default~pages-praticien-praticien-module~praticien-praticien-module~profile-profile-module~rendez-vo~80279bf7"), __webpack_require__.e("default~rendez-vous-rendez-vous-module~vaccination-vaccination-module"), __webpack_require__.e("rendez-vous-rendez-vous-module")]).then(__webpack_require__.bind(null,
            /*! ./rendez-vous/rendez-vous.module */
            "./src/app/pages/patient/rendez-vous/rendez-vous.module.ts")).then(function (m) {
              return m.RendezVousPageModule;
            });
          }
        }, {
          path: "vaccination",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | vaccination-vaccination-module */
            [__webpack_require__.e("default~pages-praticien-praticien-module~praticien-praticien-module~profile-profile-module~rendez-vo~80279bf7"), __webpack_require__.e("default~rendez-vous-rendez-vous-module~vaccination-vaccination-module"), __webpack_require__.e("vaccination-vaccination-module")]).then(__webpack_require__.bind(null,
            /*! ./vaccination/vaccination.module */
            "./src/app/pages/patient/vaccination/vaccination.module.ts")).then(function (m) {
              return m.VaccinationPageModule;
            });
          }
        }, {
          path: "family",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | familly-familly-module */
            "familly-familly-module").then(__webpack_require__.bind(null,
            /*! ./familly/familly.module */
            "./src/app/pages/patient/familly/familly.module.ts")).then(function (m) {
              return m.FamillyPageModule;
            });
          }
        }, {
          path: "profile",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | profile-profile-module */
            [__webpack_require__.e("default~pages-praticien-praticien-module~praticien-praticien-module~profile-profile-module~rendez-vo~80279bf7"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
            /*! ./profile/profile.module */
            "./src/app/pages/patient/profile/profile.module.ts")).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'assoc-praticiens',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | assoc-praticiens-assoc-praticiens-module */
            "assoc-praticiens-assoc-praticiens-module").then(__webpack_require__.bind(null,
            /*! ./assoc-praticiens/assoc-praticiens.module */
            "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.module.ts")).then(function (m) {
              return m.AssocPraticiensPageModule;
            });
          }
        }]
      }];

      var PatientPageRoutingModule = function PatientPageRoutingModule() {
        _classCallCheck(this, PatientPageRoutingModule);
      };

      PatientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PatientPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/patient/patient.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/patient/patient.module.ts ***!
      \*************************************************/

    /*! exports provided: PatientPageModule */

    /***/
    function srcAppPagesPatientPatientModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatientPageModule", function () {
        return PatientPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./patient-routing.module */
      "./src/app/pages/patient/patient-routing.module.ts");
      /* harmony import */


      var _patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./patient.page */
      "./src/app/pages/patient/patient.page.ts");

      var PatientPageModule = function PatientPageModule() {
        _classCallCheck(this, PatientPageModule);
      };

      PatientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientPageRoutingModule"]],
        declarations: [_patient_page__WEBPACK_IMPORTED_MODULE_6__["PatientPage"]]
      })], PatientPageModule);
      /***/
    },

    /***/
    "./src/app/pages/patient/patient.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/patient/patient.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPatientPatientPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu-praticien {\n  height: 200px;\n  width: 400px;\n  background: var(--ion-color-sgreen);\n  transform: rotate(-15deg);\n  background: linear-gradient(90deg, var(--ion-color-sgreen) 0%, var(--ion-color-sgreen) 100%);\n  box-shadow: 0px 1px 10px rgba(98, 145, 255, 0.5);\n  border-radius: 10px 10px 10px 50px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 1px solid #1b9b3d;\n  margin-right: 10px;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  color: white;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: white;\n  font-weight: 100;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-menu-toggle ion-icon {\n  margin-right: 20px;\n  color: #999999;\n}\n\n.menu-items ion-menu-toggle ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\nion-item,\n.containSubpage {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.subPages {\n  padding-left: 60px;\n  margin-bottom: 10px;\n}\n\n.active-item {\n  margin-left: -25px;\n  color: var(--ion-color-sgreen);\n}\n\n.active-item-subpages {\n  margin-left: 25px;\n  color: var(--ion-color-sgreen);\n}\n\n.logout {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n  border-radius: 7px;\n}\n\n.profile_redirect {\n  display: flex;\n}\n\n.profile_redirect .name {\n  text-align: center;\n  margin-top: revert;\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9wYXRpZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLDRGQUFBO0VBS0EsZ0RBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFRQTtFQUNFLFdBQUE7QUFMRjs7QUFRSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQU5OOztBQVFJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQU5OOztBQVdBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFTRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF0aWVudC9wYXRpZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXByYXRpY2llbiB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNncmVlbik7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICA5MGRlZyxcclxuICAgIHZhcigtLWlvbi1jb2xvci1zZ3JlZW4pIDAlLFxyXG4gICAgdmFyKC0taW9uLWNvbG9yLXNncmVlbikgMTAwJVxyXG4gICk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoOTgsIDE0NSwgMjU1LCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYjliM2Q7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1lbnUtaXRlbXMge1xyXG4gIG1hcmdpbjogMHB4O1xyXG5cclxuICBpb24tbWVudS10b2dnbGUge1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbSxcclxuLmNvbnRhaW5TdWJwYWdlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnN1YlBhZ2VzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmFjdGl2ZS1pdGVtIHtcclxuICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZ3JlZW4pO1xyXG59XHJcblxyXG4uYWN0aXZlLWl0ZW0tc3VicGFnZXMge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2dyZWVuKTtcclxufVxyXG5cclxuLmxvZ291dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4ucHJvZmlsZV9yZWRpcmVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAubmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiByZXZlcnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/patient/patient.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/patient/patient.page.ts ***!
      \***********************************************/

    /*! exports provided: PatientPage */

    /***/
    function srcAppPagesPatientPatientPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatientPage", function () {
        return PatientPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/patient.service */
      "./src/app/services/patient.service.ts");

      var PatientPage = /*#__PURE__*/function () {
        function PatientPage(menuCtrl, router, plt, authSrvc, storage, navCtrl, patienSrv) {
          var _this = this;

          _classCallCheck(this, PatientPage);

          this.menuCtrl = menuCtrl;
          this.router = router;
          this.plt = plt;
          this.authSrvc = authSrvc;
          this.storage = storage;
          this.navCtrl = navCtrl;
          this.patienSrv = patienSrv;
          this.pages = [{
            title: "Callendrier de vaccination",
            url: "/patient/vaccination"
          }, {
            title: "Rendez-vous",
            url: "/patient/rendez-vous"
          }, {
            title: "My Praticiens",
            url: "/patient/assoc-praticiens"
          }, {
            title: "Famille",
            url: "/patient/family"
          }];
          this.selectedPath = "";
          this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
            console.log("PatientPage -> this.selectedPath", _this.selectedPath);
          });
        }

        _createClass(PatientPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.selectedPath = "/patient/rendez-vous";
                      this.initialize(); //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
                      //Add 'implements OnInit' to the class.

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openFirst",
          value: function openFirst() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      //setTimeout(()=> this.menuCtrl.toggle("first"), 10);
                      this.plt.ready().then(function () {
                        _this2.menuCtrl.get("first").then(function (element) {
                          if (element.isActive) {
                            setTimeout(function () {
                              return element.toggle();
                            }, 10);
                          }

                          console.log("PatientPage -> openFirst -> element.offsetWidth", element.offsetWidth);
                        });
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authSrvc.logout();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var _this3 = this;

            var _this$authSrvc$user = this.authSrvc.user,
                roles = _this$authSrvc$user.roles,
                username = _this$authSrvc$user.username;
            console.log("PatientPage -> initialize -> username", username);
            console.log("PatientPage -> initialize -> roles", roles); // this.name = `${username}`;

            this.patienSrv.getProfile().subscribe(function (data) {
              var type = data[0].typePatient == 1 ? "Adult" : "Enfant";
              _this3.name = "".concat(data[0].firstName, "  ").concat(data[0].lastName, " (").concat(type, ")");
            });
            this.fonction = "patient";
          }
        }, {
          key: "redirect",
          value: function redirect(link) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log("PatientPage -> redirect -> link", link);
                      this.navCtrl.navigateForward(link);

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return PatientPage;
      }();

      PatientPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"]
        }];
      };

      PatientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-patient",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./patient.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/patient.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./patient.page.scss */
        "./src/app/pages/patient/patient.page.scss"))["default"]]
      })], PatientPage);
      /***/
    },

    /***/
    "./src/app/services/patient.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/patient.service.ts ***!
      \*********************************************/

    /*! exports provided: PatientService */

    /***/
    function srcAppServicesPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatientService", function () {
        return PatientService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/constant */
      "./src/constant.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var PatientService = /*#__PURE__*/function () {
        function PatientService(http) {
          _classCallCheck(this, PatientService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev;
          this.url_api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev_api;
          this.url_apip = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev;
        } // TODO Get Patients


        _createClass(PatientService, [{
          key: "getPatients",
          value: function getPatients() {
            return this.http.get(this.url + "patients"); // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
            //   map((data: any) => {
            //     return data.mockPatient;
            //   })
            // );
          }
        }, {
          key: "getAllRdv",
          value: function getAllRdv() {
            return this.http.get("".concat(this.url_apip, "patients/rdv")); // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
            //   map((data: any) => {
            //     return data.mockRdvListPatient;
            //   })
            // );
          }
        }, {
          key: "getTracksRdv",
          value: function getTracksRdv(excludeTracks) {
            return this.http.get(src_constant__WEBPACK_IMPORTED_MODULE_2__["CONSTANT"].MOCK_DATA_JSON).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              console.log("PatientService -> getTracksRdv -> data", excludeTracks);
              return data;
            }));
          } //TODO : Get Vaccin by patient

        }, {
          key: "getVaccinByPatient",
          value: function getVaccinByPatient() {
            return this.http.get("".concat(this.url_apip, "patients/vaccination")); // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
            //   map((data: any) => {
            //     return data.mockVaccinPatient;
            //   })
            // );
          }
        }, {
          key: "registerPatient",
          value: function registerPatient(data) {
            return this.http.post("".concat(this.url_api, "users"), data);
            Object.keys(data).forEach(function (element) {
              console.log("PatientService -> registerPatient -> element", element);
              console.log("register => ", data[element]);
            });
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return this.http.get("".concat(this.url_apip, "patient/profile")); // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
            //   map((data: any) => {
            //     return data.mockPatientProfile;
            //   })
            // );
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(data) {
            return this.http.post("".concat(this.url_apip, "patient/profile/edit"), data);
          }
        }, {
          key: "getAssociatedPraticians",
          value: function getAssociatedPraticians() {
            var res = this.http.get("".concat(this.url_apip, "patients/praticien"));
            res.subscribe(function (data) {
              console.log("PatientService -> constructor -> res", data);
            });
            return res;
          }
        }, {
          key: "getFamily",
          value: function getFamily() {
            var res = this.http.get("".concat(this.url_apip, "patients/family"));
            res.subscribe(function (data) {
              return console.log("PatientService -> getFamily -> res", data);
            });
            return res;
          }
        }, {
          key: "addGroupFamily",
          value: function addGroupFamily(nomGroupe) {
            var data = {
              designation: nomGroupe
            };
            console.log("LL: PatientService -> addGroupFamily -> data", data);
            var res = this.http.post("".concat(this.url_apip, "register/group"), data);
            return res;
          }
        }, {
          key: "addGroupFamilyMember",
          value: function addGroupFamilyMember(data) {
            console.log("PatientService -> addGroupFamilyMember -> data", data);
            var res = this.http.post("".concat(this.url_api, "add/membres"), data);
            return res;
          }
        }, {
          key: "deleteFamilyMember",
          value: function deleteFamilyMember(_idFamily) {
            var res = this.http["delete"]("".concat(this.url_api, "family/").concat(_idFamily));
            return res;
          }
        }, {
          key: "interventionPraticien",
          value: function interventionPraticien(data) {
            console.log("####################LL: PatientService -> interventionPraticien -> data", data);
            var res = this.http.post("".concat(this.url_apip, "intervention"), data);
            return res;
          }
        }, {
          key: "chekIfPractitionerIsAssociated",
          value: function chekIfPractitionerIsAssociated(_idPraticien) {
            var res = this.http.get("".concat(this.url_apip, "patients/check-association/").concat(_idPraticien));
            return res;
          }
        }, {
          key: "proposeRdv",
          value: function proposeRdv(data) {
            var res = this.http.post("".concat(this.url_apip, "add/rdv"), data);
            return res;
          }
        }, {
          key: "cancelRdvProposition",
          value: function cancelRdvProposition(data) {
            var res = this.http.post("".concat(this.url_api, "cancel/rdv"), data);
            return res;
          }
        }, {
          key: "postVaccinGeneration",
          value: function postVaccinGeneration(_idPraticien) {
            var res = this.http.post("".concat(this.url_apip, "patient/generation"), {
              praticien: _idPraticien
            });
            return res;
          }
        }]);

        return PatientService;
      }();

      PatientService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      PatientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], PatientService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-patient-patient-module-es5.js.map