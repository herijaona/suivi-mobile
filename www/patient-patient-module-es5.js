(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-patient-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/patient/patient.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/patient/patient.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterPatientPatientPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <span *ngIf=\"patientRegisterForm.valid; then myUserName()\"></span>\n    <ion-title slot=\"end\" color=\"tertiary\" class=\"identifiant\"\n      >{{this._id}}</ion-title\n    >\n    <ion-title slot=\"start\">Patient</ion-title>\n  </ion-toolbar>\n</ion-header>\n<div class=\"topContent\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">\n        <img\n          src=\"../../../../assets/images/logo_matipla.png\"\n          srcset=\"\"\n          width=\"150px\"\n          class=\"mb-2\"\n        />\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</div>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form [formGroup]=\"patientRegisterForm\">\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Nom</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"last_name\"\n          ></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.last_name\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('last_name').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Prénom</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"first_name\"\n          ></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.first_name\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('first_name').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Adult / Enfant</ion-label>\n          <ion-select\n            placeholder=\"Type de patient\"\n            formControlName=\"type_patient\"\n            required\n          >\n            <ion-select-option value=\"1\">Adult</ion-select-option>\n            <ion-select-option value=\"2\">Enfant</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Date de naissance</ion-label>\n          <ion-datetime\n            display-format=\"MMM DD, YYYY\"\n            formControlName=\"date_on_born\"\n            required\n          ></ion-datetime>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.date_on_born\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('date_on_born').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\" [disabled]=\"!this.country\">\n          <ion-label position=\"stacked\">Pays</ion-label>\n          <ion-select\n            placeholder=\"Select\"\n            formControlName=\"state\"\n            required\n            (ionChange)=\"getCityByCountry(this.patientRegisterForm.value['state'])\"\n          >\n            <ng-container *ngFor=\"let item of country\">\n              <ion-select-option value=\"{{item.id}}\"\n                >{{item.nameState}}</ion-select-option\n              >\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.state\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('state').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\" [disabled]=\"!this.city\">\n          <ion-label position=\"stacked\">Ville</ion-label>\n          <ion-select placeholder=\"Select\" formControlName=\"city\" required>\n            <ng-container *ngFor=\"let item of this.city\">\n              <ion-select-option value=\"{{item.id}}\"\n                >{{item.nameCity}}</ion-select-option\n              >\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.city\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('city').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Télephone</ion-label>\n          <ion-input type=\"text\" required formControlName=\"phone\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.phone\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('phone').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Sexe</ion-label>\n          <ion-select placeholder=\"Select\" formControlName=\"sexe\" required>\n            <ion-select-option>Masculin</ion-select-option>\n            <ion-select-option>Feminin</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.sexe\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('sexe').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Adresse</ion-label>\n          <ion-textarea required formControlName=\"address\"></ion-textarea>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.address\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('address').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item\n          lines=\"full\"\n          *ngIf=\"this.patientRegisterForm.value['type_patient'] == 2\"\n        >\n          <ion-label position=\"stacked\">Nom du père</ion-label>\n          <ion-input type=\"text\" formControlName=\"father_name\"></ion-input>\n        </ion-item>\n        <div\n          class=\"validation-errors\"\n          *ngIf=\"this.patientRegisterForm.value['type_patient'] == 2\"\n        >\n          <ng-container *ngFor=\"let validation of validation_msg.father_name\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('father_name').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item\n          lines=\"full\"\n          *ngIf=\"this.patientRegisterForm.value['type_patient'] == 2\"\n        >\n          <ion-label position=\"stacked\">Nom de la mère</ion-label>\n          <ion-input type=\"text\" formControlName=\"mother_name\"></ion-input>\n        </ion-item>\n        <div\n          class=\"validation-errors\"\n          *ngIf=\"this.patientRegisterForm.value['type_patient'] == 2\"\n        >\n          <ng-container *ngFor=\"let validation of validation_msg.mother_name\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('mother_name').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input type=\"text\" required formControlName=\"email\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.email\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('email').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Password</ion-label>\n          <ion-input\n            type=\"password\"\n            required\n            formControlName=\"password\"\n          ></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.password\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('password').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-row>\n          <ion-col>\n            <ion-button\n              type=\"submit\"\n              color=\"sgreen \"\n              expand=\"block\"\n              (click)=\"register()\"\n              [disabled]=\"!patientRegisterForm.valid\"\n              >Sign Up</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/register/patient/patient-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/register/patient/patient-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: PatientPageRoutingModule */

    /***/
    function srcAppPagesRegisterPatientPatientRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/pages/register/patient/patient.page.ts");

      var routes = [{
        path: '',
        component: _patient_page__WEBPACK_IMPORTED_MODULE_3__["PatientPage"]
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
    "./src/app/pages/register/patient/patient.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/register/patient/patient.module.ts ***!
      \**********************************************************/

    /*! exports provided: PatientPageModule */

    /***/
    function srcAppPagesRegisterPatientPatientModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/pages/register/patient/patient-routing.module.ts");
      /* harmony import */


      var _patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./patient.page */
      "./src/app/pages/register/patient/patient.page.ts");

      var PatientPageModule = function PatientPageModule() {
        _classCallCheck(this, PatientPageModule);
      };

      PatientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_patient_page__WEBPACK_IMPORTED_MODULE_6__["PatientPage"]]
      })], PatientPageModule);
      /***/
    },

    /***/
    "./src/app/pages/register/patient/patient.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/pages/register/patient/patient.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRegisterPatientPatientPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  box-shadow: none !important;\n}\n\n.identifiant {\n  font-style: italic;\n  font-size: medium;\n  color: var(--ion-color-sred);\n  padding-right: 30px;\n  font-size: 18px;\n}\n\n.topContent {\n  background-color: white;\n}\n\n.validation-errors {\n  color: red;\n  font-size: 10px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcGF0aWVudC9wYXRpZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9wYXRpZW50L3BhdGllbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uaWRlbnRpZmlhbnQge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNyZWQpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi50b3BDb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4udmFsaWRhdGlvbi1lcnJvcnMge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/register/patient/patient.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/register/patient/patient.page.ts ***!
      \********************************************************/

    /*! exports provided: PatientPage */

    /***/
    function srcAppPagesRegisterPatientPatientPageTs(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/global-data.service */
      "./src/app/services/global-data.service.ts");
      /* harmony import */


      var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/patient.service */
      "./src/app/services/patient.service.ts");
      /* harmony import */


      var _global_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../global.interaction */
      "./src/app/pages/global.interaction.ts");

      var PatientPage = /*#__PURE__*/function () {
        function PatientPage(patientSrvc, globalSrvc, navCtrl, globalEl) {
          _classCallCheck(this, PatientPage);

          this.patientSrvc = patientSrvc;
          this.globalSrvc = globalSrvc;
          this.navCtrl = navCtrl;
          this.globalEl = globalEl;
          this.IDENTIFIANT = "Identifiant";
          this._id = this.IDENTIFIANT;
          this.ROLE = "ROLE_PATIENT";
          this.validRegister = false;
          this.validation_msg = {
            first_name: [{
              type: "required",
              message: "Prénom obligatoire"
            }],
            last_name: [{
              type: "required",
              message: "Nom obligatoire"
            }],
            date_on_born: [{
              type: "required",
              message: "Date de naissance obligatoire"
            }],
            state: [{
              type: "required",
              message: "Pays obligatoire"
            }],
            city: [{
              type: "required",
              message: "Selectionner un pays , Ville obligatoire"
            }],
            sexe: [{
              type: "required",
              message: "Sexe obligatoire"
            }],
            address: [{
              type: "required",
              message: "Adresse obligatoire"
            }],
            email: [{
              type: "required",
              message: "Email obligatoire"
            }],
            password: [{
              type: "required",
              message: "Mot de passe obligatoire"
            }],
            phone: [{
              type: "required",
              message: "Phone obligatoire"
            }],
            father_name: [{
              type: "required",
              message: "Nom du père obligatoire"
            }],
            mother_name: [{
              type: "required",
              message: "Nom de la mère obligatoire"
            }]
          };
        }

        _createClass(PatientPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.createForm();
            this.globalSrvc.getCountry().subscribe(function (data) {
              return _this.country = data;
            });
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.patientRegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              date_on_born: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              sexe: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              type_patient: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              father_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
              mother_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
            });
          }
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var dataRegister;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.globalEl.presentLoading();

                      if (this.patientRegisterForm.valid) {
                        Object.keys(this.patientRegisterForm.value).forEach(function (key) {// console.log("valid", this.patientRegisterForm.value[key]);
                        });
                        dataRegister = {
                          first_name: this.patientRegisterForm.value['first_name'],
                          last_name: this.patientRegisterForm.value['last_name'],
                          date_on_born: this.patientRegisterForm.value['date_on_born'],
                          state: this.patientRegisterForm.value['state'],
                          city: this.patientRegisterForm.value['city'],
                          sexe: this.patientRegisterForm.value['sexe'],
                          address: this.patientRegisterForm.value['address'],
                          email: this.patientRegisterForm.value['email'],
                          password: this.patientRegisterForm.value['password'],
                          phone: this.patientRegisterForm.value['phone'],
                          roles: this.ROLE,
                          username: this._id,
                          type_patient: this.patientRegisterForm.value['type_patient'],
                          father_name: this.patientRegisterForm.value['father_name'] == undefined ? '' : this.patientRegisterForm.value['father_name'],
                          mother_name: this.patientRegisterForm.value['mother_name'] == undefined ? '' : this.patientRegisterForm.value['mother_name']
                        };
                        this.patientSrvc.registerPatient(dataRegister).subscribe(function (data) {
                          if (data) {
                            _this2.navCtrl.navigateRoot('/login');
                          }

                          _this2.globalEl.dismissLoading();
                        });
                      } else {// console.log("NOT valid", this.patientRegisterForm);
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getRndInt",
          value: function getRndInt() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10000;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000;
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        }, {
          key: "myUserName",
          value: function myUserName() {
            if (!this.patientRegisterForm.valid || this._id != this.IDENTIFIANT) {
              return;
            }

            if (this.patientRegisterForm.value['date_on_born'] != '' && this.patientRegisterForm.value['sexe'] != '') {
              this._id = this.createUsername(this.patientRegisterForm.value['date_on_born'], this.patientRegisterForm.value['sexe']);
            }
          }
        }, {
          key: "createUsername",
          value: function createUsername(birth, gender) {
            var birthday = new Date(birth); // console.log("PatientPage -> createUsername -> birthday", birthday)

            var sexe = gender.substring(0, 1);
            var mois = "00";
            var jour = "00";
            var annee = "0000";
            var datChoice = birthday.toString().split("/");
            mois = birthday.getMonth().toString().substring(0, 1); // console.log("PatientPage -> createUsername -> mois", mois)

            annee = birthday.getFullYear().toString().substring(1, 2); // annee = birthday.getFullYear()[2];
            // console.log("PatientPage -> createUsername -> annee", annee)

            jour = birthday.getDay().toString().substring(0, 1); // jour = birthday.getDay()[0]
            // console.log("PatientPage -> createUsername -> jour", jour)

            var username = sexe + annee + mois + jour + this.getRndInt(); // console.log("PatientPage -> createUsername -> username", username)

            return username;
          }
        }, {
          key: "getCityByCountry",
          value: function getCityByCountry(id) {
            var _this3 = this;

            this.globalSrvc.getCity(id).subscribe(function (data) {
              return _this3.city = data;
            });
          }
        }]);

        return PatientPage;
      }();

      PatientPage.ctorParameters = function () {
        return [{
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]
        }, {
          type: src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_4__["GlobalDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _global_interaction__WEBPACK_IMPORTED_MODULE_6__["GlobalInteraction"]
        }];
      };

      PatientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-patient",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./patient.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/patient/patient.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./patient.page.scss */
        "./src/app/pages/register/patient/patient.page.scss"))["default"]]
      })], PatientPage);
      /***/
    },

    /***/
    "./src/app/services/global-data.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/global-data.service.ts ***!
      \*************************************************/

    /*! exports provided: GlobalDataService */

    /***/
    function srcAppServicesGlobalDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalDataService", function () {
        return GlobalDataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var GlobalDataService = /*#__PURE__*/function () {
        function GlobalDataService(http) {
          _classCallCheck(this, GlobalDataService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url_dev;
          this.url_api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url_dev_api;
        }

        _createClass(GlobalDataService, [{
          key: "getCountry",
          value: function getCountry() {
            var res = this.http.get(this.url_api + "country");
            res.subscribe(function (data) {// console.log("GlobalDataService -> getCountry -> data", data)
            });
            return res;
          }
        }, {
          key: "getCity",
          value: function getCity(id) {
            var res = this.http.get(this.url_api + "city?id=".concat(id)); // console.log("GlobalDataService -> constructor -> this.url_api + `city?id=${id}`", this.url_api + `city?id=${id}`)

            res.subscribe(function (data) {// console.log("GlobalDataService -> getCity -> data", data)
            });
            return res;
          }
        }, {
          key: "getCountryByPratictitionerFunction",
          value: function getCountryByPratictitionerFunction(_idPractitionerFunction) {
            var res = this.http.post("".concat(this.url_api, "country/fonction"), {
              id_fonction: _idPractitionerFunction
            });
            return res;
          }
        }, {
          key: "getCityByPractitionerFunctionAndCountry",
          value: function getCityByPractitionerFunctionAndCountry(_idPractitionerFunction, _idCountry) {
            var res = this.http.post("".concat(this.url_api, "city/fonction"), {
              id_fonction: _idPractitionerFunction,
              id_country: _idCountry
            });
            return res;
          }
        }, {
          key: "getPractitionerByFunctionCountryAndCity",
          value: function getPractitionerByFunctionCountryAndCity(_idPractitionerFunction, _idCountry, _idCity) {
            var res = this.http.post("".concat(this.url_api, "praticien/fonction"), {
              id_fonction: _idPractitionerFunction,
              id_country: _idCountry,
              id_city: _idCity
            });
            return res;
          }
        }, {
          key: "getCenterHealthByCity",
          value: function getCenterHealthByCity(_idCity) {
            var res = this.http.post("".concat(this.url_api, "praticien/centre"), {
              id: _idCity
            });
            return res;
          }
        }, {
          key: "getPraticienByCenter",
          value: function getPraticienByCenter(_idCenter) {
            var res = this.http.post("".concat(this.url_api, "centre/praticien"), {
              id: _idCenter
            });
            return res;
          }
        }]);

        return GlobalDataService;
      }();

      GlobalDataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      GlobalDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], GlobalDataService);
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
              // console.log("PatientService -> getTracksRdv -> data", excludeTracks);
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
//# sourceMappingURL=patient-patient-module-es5.js.map