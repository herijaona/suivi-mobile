(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/profile/profile.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/profile/profile.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPatientProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-title slot=\"start\">Profile</ion-title>\n    </ion-buttons>\n\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n\n    <ion-title slot=\"end\" color=\"tertiary\" class=\"identifiant\" *ngIf=\"profile\">{{profile.username}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"card\">\n    <div class=\"header\">\n      <div class=\"avatar\">\n        <img src=\"./../../../../assets/images/praticien.jpg\" alt=\"\" />\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\" *ngIf=\"profile\">\n    <div class=\"user-meta ion-text-center\">\n      <h3 class=\"playername\">\n        {{profile.firstName}} {{profile.lastName}} ({{type_patient}})\n      </h3>\n      <h6 class=\"ranking\">\n        Date de création:\n        <ion-chip>\n          <ion-label>{{profile.createdAt | date:\"MMM dd, yyyy\"}}</ion-label>\n        </ion-chip>\n      </h6>\n    </div>\n    <div>\n      <form [formGroup]=\"patientRegisterForm\">\n        <!-- Date de naissance -->\n        <ion-item lines=\"full\" disabled>\n          <ion-label position=\"stacked\">Date de naissance</ion-label>\n          <ion-datetime\n            display-format=\"MMM DD, YYYY\"\n            picker-format=\"MMM DD, YYYY\"\n            [ngModel]=\"profile.dateOnBorn\"\n            formControlName=\"birthday\"\n            required></ion-datetime>\n        </ion-item>\n        <!-- Pays -->\n        <ion-item\n          lines=\"full\"\n          [disabled]=\"!this.profile.nameState &&!this.countries\">\n          <ion-label position=\"stacked\">Pays</ion-label>\n          <ion-select\n            formControlName=\"state\"\n            required\n            (ionChange)=\"getCityByCountry(this.patientRegisterForm.value['state'])\"\n            [compareWith]=\"compareFnInv\"\n            [ngModel]=\"profile.nameState\">\n            <ng-container *ngFor=\"let item of this.countries\">\n              <ion-select-option value=\"{{item.id}}\">{{item.nameState}}</ion-select-option>\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.state\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('state').hasError(validation.type)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <!-- Téléphone -->\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Phone</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"phone\"\n            [ngModel]=\"profile.phone\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.phone\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('phone').hasError(validation.type)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <!-- Ville -->\n        <ion-item\n          lines=\"full\"\n          [disabled]=\"!this.profile.nameCity\"\n          *ngIf=\"this.cities\">\n          <ion-label position=\"stacked\">Ville</ion-label>\n          <ion-select\n            formControlName=\"city\"\n            required\n            [(ngModel)]=\"profile.nameCity\"\n            [compareWith]=\"compareFnInv\">\n            <ng-container *ngFor=\"let item of this.cities\">\n              <ion-select-option value=\"{{item.id}}\">{{item.nameCity}}</ion-select-option>\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <!-- Pays de naissance -->\n        <ion-item\n          lines=\"full\"\n          [disabled]=\"!this.profile.countryBorn &&!this.countries\">\n          <ion-label position=\"stacked\">Pays de naissance</ion-label>\n          <ion-select\n            formControlName=\"countryBorn\"\n            required\n            (ionChange)=\"getCityByCountryBorn(this.patientRegisterForm.value['countryBorn'])\"\n            [compareWith]=\"compareFnInv\"\n            [ngModel]=\"profile.countryBorn\">\n            <ng-container *ngFor=\"let item of this.countries\">\n              <ion-select-option value=\"{{item.id}}\">{{item.nameState}}</ion-select-option>\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.state\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"patientRegisterForm.get('state').hasError(validation.type)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <!-- Ville de naissance -->\n        <ion-item\n          lines=\"full\"\n          [disabled]=\"!this.profile.cityBorn\"\n          *ngIf=\"this.citiesBorn\">\n          <ion-label position=\"stacked\">Ville de naissance</ion-label>\n          <ion-select\n            formControlName=\"cityBorn\"\n            required\n            [(ngModel)]=\"profile.cityBorn\"\n            [compareWith]=\"compareFnInv\">\n            <ng-container *ngFor=\"let item of this.citiesBorn\">\n              <ion-select-option value=\"{{item.id}}\">{{item.nameCity}}</ion-select-option>\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <!-- Sexe -->\n        <ion-item lines=\"full\" disabled>\n          <ion-label position=\"stacked\">Sexe</ion-label>\n          <ion-select\n            placeholder=\"Select\"\n            formControlName=\"gender\"\n            required\n            [ngModel]=\"profile.sexe\">\n            <ion-select-option>Masculin</ion-select-option>\n            <ion-select-option>Feminin</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- Adresse -->\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Adresse</ion-label>\n          <ion-textarea\n            required\n            formControlName=\"address\"\n            [ngModel]=\"profile.address\"></ion-textarea>\n        </ion-item>\n        <!-- Email -->\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"email\"\n            [ngModel]=\"profile.email\"></ion-input>\n          <!-- <div\n            style=\"color: red; padding-top: 0.2rem\"\n            *ngIf=\"patientRegisterForm.hasError('required', 'email')\"\n          ></div> -->\n          <!-- <div\n            *ngIf=\"!patientRegisterForm.controls.email.valid &&\n            patientRegisterForm.controls.email.dirty\"\n            class=\"validator-error\"\n          >\n            Please enter a valid email.\n          </div> -->\n        </ion-item>\n        <!-- Nom du père -->\n        <ion-item lines=\"full\" *ngIf=\"profile.fatherName\">\n          <ion-label position=\"stacked\">Nom du père</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"father_name\"\n            [ngModel]=\"this.profile.fatherName\"></ion-input>\n        </ion-item>\n        <!-- Nom de la mère -->\n        <ion-item lines=\"full\" *ngIf=\"profile.motherName\">\n          <ion-label position=\"stacked\">Nom de la mère</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"mother_name\"\n            [ngModel]=\"this.profile.motherName\"></ion-input>\n        </ion-item>\n\n        <ion-row>\n          <ion-col>\n            <ion-button\n              type=\"submit\"\n              color=\"sgreen\" expand=\"full\"\n              (click)=\"update()\">Modifier</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/profile/profile.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/profile/profile.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPraticienProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-title slot=\"start\">Profile</ion-title>\n    </ion-buttons>\n\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n\n    <ion-title slot=\"end\" color=\"tertiary\" class=\"identifiant\" *ngIf=\"profile\"\n      >{{profile.username}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"card\">\n    <div class=\"header\">\n      <div class=\"avatar\">\n        <img src=\"./../../../../assets/images/praticien.jpg\" alt=\"\" />\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\" *ngIf=\"profile\">\n    <div class=\"user-meta ion-text-center\">\n      <h3 class=\"playername\">\n        {{profile.firstName}} {{profile.lastName}} ({{centre_name}})\n      </h3>\n      <h6 class=\"ranking\">\n        Date de création:\n        <ion-chip>\n          <ion-label>{{profile.createdAt | date:\"MMM dd, yyyy\"}}</ion-label>\n        </ion-chip>\n      </h6>\n    </div>\n    <div>\n      <form [formGroup]=\"praticienFormGroup\">\n        <!-- Date de naissance -->\n        <ion-item lines=\"full\" disabled>\n          <ion-label position=\"stacked\">Date de naissance</ion-label>\n          <ion-datetime\n            display-format=\"MMM DD, YYYY\"\n            picker-format=\"MMM DD, YYYY\"\n            [ngModel]=\"profile.dateOnBorn\"\n            formControlName=\"birthday\"\n            required\n          ></ion-datetime>\n        </ion-item>\n        <!-- Pays -->\n        <ion-item\n          lines=\"full\"\n          [disabled]=\"!this.profile.nameState &&!this.countries\"\n        >\n          <ion-label position=\"stacked\">Pays</ion-label>\n          <ion-select\n            formControlName=\"state\"\n            required\n            (ionChange)=\"getCityByCountry(this.praticienFormGroup.value['state'])\"\n            [compareWith]=\"compareFnInv\"\n            [ngModel]=\"profile.nameState\"\n          >\n            <ng-container *ngFor=\"let item of this.countries\">\n              <ion-select-option value=\"{{item.id}}\"\n                >{{item.nameState}}</ion-select-option\n              >\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.state\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienFormGroup.get('state').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <!-- Téléphone -->\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Phone</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"phone\"\n            [ngModel]=\"profile.phone\"\n          ></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.phone\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienFormGroup.get('phone').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <!-- Ville -->\n        <ion-item\n          lines=\"full\"\n          [disabled]=\"!this.profile.nameCity\"\n          *ngIf=\"this.cities\"\n        >\n          <ion-label position=\"stacked\">Ville</ion-label>\n          <ion-select\n            formControlName=\"city\"\n            required\n            [(ngModel)]=\"profile.nameCity\"\n            [compareWith]=\"compareFnInv\"\n          >\n            <ng-container *ngFor=\"let item of this.cities\">\n              <ion-select-option value=\"{{item.id}}\"\n                >{{item.nameCity}}</ion-select-option\n              >\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <!-- Pays de naissance -->\n        <ion-item\n          lines=\"full\"\n          [disabled]=\"!this.profile.countryBorn &&!this.countries\"\n        >\n          <ion-label position=\"stacked\">Pays de naissance</ion-label>\n          <ion-select\n            formControlName=\"countryBorn\"\n            required\n            (ionChange)=\"getCityByCountryBorn(this.praticienFormGroup.value['countryBorn'])\"\n            [compareWith]=\"compareFnInv\"\n            [ngModel]=\"profile.countryBorn\"\n          >\n            <ng-container *ngFor=\"let item of this.countries\">\n              <ion-select-option value=\"{{item.id}}\"\n                >{{item.nameState}}</ion-select-option\n              >\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.state\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienFormGroup.get('state').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <!-- Ville de naissance -->\n        <ion-item\n          lines=\"full\"\n          [disabled]=\"!this.profile.cityBorn\"\n          *ngIf=\"this.citiesBorn\"\n        >\n          <ion-label position=\"stacked\">Ville de naissance</ion-label>\n          <ion-select\n            formControlName=\"cityBorn\"\n            required\n            [(ngModel)]=\"profile.cityBorn\"\n            [compareWith]=\"compareFnInv\"\n          >\n            <ng-container *ngFor=\"let item of this.citiesBorn\">\n              <ion-select-option value=\"{{item.id}}\"\n                >{{item.nameCity}}</ion-select-option\n              >\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <!-- Sexe -->\n        <ion-item lines=\"full\" disabled>\n          <ion-label position=\"stacked\">Sexe</ion-label>\n          <ion-select\n            placeholder=\"Select\"\n            formControlName=\"gender\"\n            required\n            [ngModel]=\"profile.sexe\"\n          >\n            <ion-select-option>Masculin</ion-select-option>\n            <ion-select-option>Feminin</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <!-- Adresse -->\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Adresse</ion-label>\n          <ion-textarea\n            required\n            formControlName=\"address\"\n            [ngModel]=\"profile.address\"\n          ></ion-textarea>\n        </ion-item>\n        <!-- Email -->\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"email\"\n            [ngModel]=\"profile.email\"\n          ></ion-input>\n          <!-- <div\n            style=\"color: red; padding-top: 0.2rem\"\n            *ngIf=\"praticienFormGroup.hasError('required', 'email')\"\n          ></div> -->\n          <!-- <div\n            *ngIf=\"!praticienFormGroup.controls.email.valid &&\n            praticienFormGroup.controls.email.dirty\"\n            class=\"validator-error\"\n          >\n            Please enter a valid email.\n          </div> -->\n        </ion-item>\n        <!-- Nom du père -->\n        <ion-item lines=\"full\" *ngIf=\"profile.fatherName\">\n          <ion-label position=\"stacked\">Nom du père</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"father_name\"\n            [ngModel]=\"this.profile.fatherName\"\n          ></ion-input>\n        </ion-item>\n        <!-- Nom de la mère -->\n        <ion-item lines=\"full\" *ngIf=\"profile.motherName\">\n          <ion-label position=\"stacked\">Nom de la mère</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"mother_name\"\n            [ngModel]=\"this.profile.motherName\"\n          ></ion-input>\n        </ion-item>\n\n        <ion-row>\n          <ion-col>\n            <ion-button\n              type=\"submit\"\n              color=\"sgreen\"\n              expand=\"full\"\n              (click)=\"update()\"\n              >Modifier</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/global.interaction.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/global.interaction.ts ***!
      \*********************************************/

    /*! exports provided: GlobalInteraction */

    /***/
    function srcAppPagesGlobalInteractionTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalInteraction", function () {
        return GlobalInteraction;
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

      var GlobalInteraction = /*#__PURE__*/function () {
        function GlobalInteraction(toastCtrl, loadingCtrl, alertCtrl) {
          _classCallCheck(this, GlobalInteraction);

          this.toastCtrl = toastCtrl;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.isLoading = false;
        }

        _createClass(GlobalInteraction, [{
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        duration: 1800,
                        position: "top"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = true;
                      _context2.next = 3;
                      return this.loadingCtrl.create({
                        cssClass: "my-loading-class",
                        spinner: "bubbles",
                        translucent: true,
                        duration: 100000
                      }).then(function (a) {
                        a.present().then(function () {
                          if (!_this.isLoading) {
                            a.dismiss();
                          }
                        });
                      });

                    case 3:
                      return _context2.abrupt("return", _context2.sent);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.isLoading) {
                        _context3.next = 5;
                        break;
                      }

                      this.isLoading = false;
                      _context3.next = 4;
                      return this.loadingCtrl.dismiss();

                    case 4:
                      return _context3.abrupt("return", _context3.sent);

                    case 5:
                      return _context3.abrupt("return", null);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "alertDelete",
          value: function alertDelete(id, parent) {
            var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Tu veux vraiment supprimé cette element ? ";
            var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.defaultCallback;

            var _header = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Suppression";

            var array = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        cssClass: "my-custom-class",
                        header: _header,
                        message: msg,
                        buttons: [{
                          text: "Cancel",
                          role: "cancel",
                          cssClass: "secondary",
                          handler: function handler() {
                            console.log("Confirm Cancel: blah");
                          }
                        }, {
                          text: "OK",
                          handler: function handler() {
                            console.warn("data deleted " + id); // this.remove(id, array, keyStatus, RefuseStatus);

                            callback(id, parent);
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "defaultCallback",
          value: function defaultCallback(id, parent) {
            this.presentToast("this is a default callback ".concat(id, " "));
          }
        }]);

        return GlobalInteraction;
      }();

      GlobalInteraction.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      GlobalInteraction = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GlobalInteraction);
      /***/
    },

    /***/
    "./src/app/pages/patient/profile/profile-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/patient/profile/profile-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppPagesPatientProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/patient/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/patient/profile/profile.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/patient/profile/profile.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppPagesPatientProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/pages/patient/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/patient/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/patient/profile/profile.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/patient/profile/profile.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPatientProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nion-content {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\nion-toolbar {\n  background: transparent;\n}\n.card {\n  background: url('doctor.jpg') no-repeat top center/cover fixed, #fff;\n  margin: 0 auto;\n}\n.card .header {\n  height: 200px;\n}\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1 * (80px + 4px));\n  border: 8px solid var(--ion-color-sgreen);\n  background-color: #fff;\n}\n.card-body {\n  background-color: #ffffff;\n  padding: 30px;\n  height: calc(100vh – (200px + 56px));\n  overflow: hidden;\n}\n.card-body .user-meta {\n  padding-top: 40px;\n}\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n.identifiant {\n  font-style: italic;\n  font-size: medium;\n  color: var(--ion-color-sred);\n  padding-right: 30px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFRjtBQUFBO0VBQ0UsdUJBQUE7QUFHRjtBQUFBO0VBQ0Usb0VBQUE7RUFHQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDTjtBQUNNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUtBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSxpQkFBQTtBQUZKO0FBSUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRk47QUFLSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSE47QUFPQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF0aWVudC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kb2N0b3IuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlci9jb3ZlciBmaXhlZCwgI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygtMSAqICg4MHB4ICsgNHB4KSk7XG4gIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZ3JlZW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIOKAkyAoMjAwcHggKyA1NnB4KSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jYXJkLWJvZHkgLnVzZXItbWV0YSAucGxheWVybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMDM5NDA7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLmNvdW50cnkge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM5NDllYTY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaWRlbnRpZmlhbnQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNyZWQpO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/patient/profile/profile.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/patient/profile/profile.page.ts ***!
      \*******************************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppPagesPatientProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(patienSrvc, globalSrvc, globalInteract, loadingController) {
          var _this2 = this;

          _classCallCheck(this, ProfilePage);

          this.patienSrvc = patienSrvc;
          this.globalSrvc = globalSrvc;
          this.globalInteract = globalInteract;
          this.loadingController = loadingController;
          this._id = "Identifiant";
          this.OK = "ok";
          this.isLoading = false;
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
          this.globalSrvc.getCountry().subscribe(function (result) {
            _this2.countries = result;

            _this2.getProfile();
          });
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.globalInteract.presentLoading();
          }
        }, {
          key: "buildForm",
          value: function buildForm(data) {
            this.patientRegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              // lastName: new FormControl("", [Validators.required]),
              // firstName: new FormControl("", [Validators.required]),
              birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              // description: new FormControl("", [Validators.required]),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              countryBorn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              cityBorn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });

            if (data.typePatient != 1) {
              this.patientRegisterForm.addControl("father_name", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
              this.patientRegisterForm.addControl("mother_name", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
            }
          }
        }, {
          key: "update",
          value: function update() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.patientRegisterForm.valid) {
                        this.globalInteract.presentLoading();
                        Object.keys(this.patientRegisterForm.value).forEach(function (key) {
                          console.log("valid", _this3.patientRegisterForm.value[key]);
                          var data_updated = {
                            address: _this3.patientRegisterForm.value["address"],
                            cityBorn: _this3.patientRegisterForm.value["cityBorn"],
                            countryBorn: _this3.patientRegisterForm.value["countryBorn"],
                            email: _this3.patientRegisterForm.value["email"],
                            fatherName: _this3.patientRegisterForm.value['father_name'] == undefined ? '' : _this3.patientRegisterForm.value['father_name'],
                            id: _this3.profile.id,
                            motherName: _this3.patientRegisterForm.value['father_name'] == undefined ? '' : _this3.patientRegisterForm.value['mother_name'],
                            nameCity: _this3.patientRegisterForm.value["city"],
                            nameState: _this3.patientRegisterForm.value["state"],
                            phone: _this3.patientRegisterForm.value["phone"]
                          };

                          _this3.patienSrvc.updateProfile(data_updated).subscribe(function (data) {
                            if (data == _this3.OK) {
                              _this3.globalInteract.dismissLoading();

                              _this3.globalInteract.presentToast('Profile mis à jour');
                            } else {
                              _this3.globalInteract.presentToast('Profile non mis à jour !!!');
                            }
                          });
                        });
                      } else {
                        console.log("NOT valid", this.patientRegisterForm);
                        Object.keys(this.patientRegisterForm.value).forEach(function (key) {
                          console.log("NOT valid", _this3.patientRegisterForm.value[key]);
                        });
                      }

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } //Comparaison select

        }, {
          key: "compareFn",
          value: function compareFn(e1, e2) {
            return e1 && e2 ? e1.id == e2.id : e1 == e2;
          }
        }, {
          key: "compareFnInv",
          value: function compareFnInv(e1, e2) {
            return e1 && e2 ? e1 == e2 : e1.id == e2.id;
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this4 = this;

            this.patienSrvc.getProfile().subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var _this5 = this;

                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        console.log(data);
                        this.profile = data[0];
                        this.profile.nameState = data[0].namestate;
                        this.globalSrvc.getCity(this.profile.nameState).subscribe(function (data2) {
                          _this5.cities = data2;
                          _this5.profile.nameCity = data[0].nameCity;
                        });
                        data[0].countryBorn == null ? this.profile.countryBorn = data[0].namestate : this.profile.countryBorn = data[0].countryBorn;
                        this.globalSrvc.getCity(this.profile.countryBorn).subscribe(function (data3) {
                          _this5.citiesBorn = data3;
                          data[0].cityBorn == null ? _this5.profile.cityBorn = data[0].nameCity : _this5.profile.cityBorn = data[0].cityBorn;

                          _this5.globalInteract.dismissLoading();
                        });
                        this.profile.dateOnBorn = data[0].dateOnBorn.date;
                        this.profile.createdAt = data[0].createdAt.date; // this.profile.date_on_born = new Date(data.date_on_born);

                        this.buildForm(data[0]);
                        this.type_patient = data[0].typePatient == 1 ? "Adult" : "Enfant";

                      case 10:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            });
          }
        }, {
          key: "getKeyByValue",
          value: function getKeyByValue(object, value) {
            return Object.keys(object).find(function (key) {
              return object[key] === value;
            });
          }
        }, {
          key: "getCityByCountry",
          value: function getCityByCountry(id) {
            var _this6 = this;

            console.log("LL: ProfilePage -> getCityByCountry -> id", id);
            console.log("LL: ProfilePage -> getCityByCountry -> id", this.profile);
            this.globalSrvc.getCity(id).subscribe(function (data) {
              return _this6.cities = data;
            });
          }
        }, {
          key: "getCityByCountryBorn",
          value: function getCityByCountryBorn(id) {
            var _this7 = this;

            console.log("LL: ProfilePage -> getCityByCountryBorn -> id", id);
            console.log("LL: ProfilePage -> getCityByCountryBorn -> id", this.profile);
            this.globalSrvc.getCity(id).subscribe(function (data) {
              return _this7.citiesBorn = data;
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]
        }, {
          type: src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_4__["GlobalDataService"]
        }, {
          type: _global_interaction__WEBPACK_IMPORTED_MODULE_6__["GlobalInteraction"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/pages/patient/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "./src/app/pages/praticien/profile/profile-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/praticien/profile/profile-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppPagesPraticienProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/praticien/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/praticien/profile/profile.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/praticien/profile/profile.module.ts ***!
      \***********************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppPagesPraticienProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/pages/praticien/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/praticien/profile/profile.page.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/praticien/profile/profile.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/pages/praticien/profile/profile.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPraticienProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nion-content {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\nion-toolbar {\n  background: transparent;\n}\n.card {\n  background: url('doctor.jpg') no-repeat top center/cover fixed, #fff;\n  margin: 0 auto;\n}\n.card .header {\n  height: 200px;\n}\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1 * (80px + 4px));\n  border: 8px solid var(--ion-color-sgreen);\n  background-color: #fff;\n}\n.card-body {\n  background-color: #ffffff;\n  padding: 30px;\n  height: calc(100vh – (200px + 56px));\n  overflow: hidden;\n}\n.card-body .user-meta {\n  padding-top: 40px;\n}\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n.identifiant {\n  font-style: italic;\n  font-size: medium;\n  color: var(--ion-color-sred);\n  padding-right: 30px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUE7RUFDRSx1QkFBQTtBQUdGO0FBQUE7RUFDRSxvRUFBQTtFQUdBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNOO0FBQ007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtBQUNSO0FBS0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FBRkY7QUFJRTtFQUNFLGlCQUFBO0FBRko7QUFJSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGTjtBQUtJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFITjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmF0aWNpZW4vcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG9jdG9yLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXIvY292ZXIgZml4ZWQsICNmZmY7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmhlYWRlciB7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoLTEgKiAoODBweCArIDRweCkpO1xuICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2dyZWVuKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCDigJMgKDIwMHB4ICsgNTZweCkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uY2FyZC1ib2R5IC51c2VyLW1ldGEgLnBsYXllcm5hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzAzOTQwO1xufVxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjOTQ5ZWE2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmlkZW50aWZpYW50IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zcmVkKTtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/praticien/profile/profile.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/praticien/profile/profile.page.ts ***!
      \*********************************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppPagesPraticienProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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


      var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/praticien.service */
      "./src/app/services/praticien.service.ts");
      /* harmony import */


      var _global_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../global.interaction */
      "./src/app/pages/global.interaction.ts");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(praticienSrvc, globalSrvc, globalInteract, loadingController) {
          var _this8 = this;

          _classCallCheck(this, ProfilePage);

          this.praticienSrvc = praticienSrvc;
          this.globalSrvc = globalSrvc;
          this.globalInteract = globalInteract;
          this.loadingController = loadingController;
          this._id = "Identifiant";
          this.OK = "ok";
          this.isLoading = false;
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
          this.globalSrvc.getCountry().subscribe(function (result) {
            _this8.countries = result;

            _this8.getProfile();
          });
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.globalInteract.presentLoading();
          }
        }, {
          key: "buildForm",
          value: function buildForm(data) {
            this.praticienFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              // lastName: new FormControl("", [Validators.required]),
              // firstName: new FormControl("", [Validators.required]),
              birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              // description: new FormControl("", [Validators.required]),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              countryBorn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              cityBorn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
          }
        }, {
          key: "update",
          value: function update() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (this.praticienFormGroup.valid) {
                        this.globalInteract.presentLoading();
                        Object.keys(this.praticienFormGroup.value).forEach(function (key) {
                          console.log("valid", _this9.praticienFormGroup.value[key]);
                          var data_updated = {
                            address: _this9.praticienFormGroup.value["address"],
                            cityBorn: _this9.praticienFormGroup.value["cityBorn"],
                            countryBorn: _this9.praticienFormGroup.value["countryBorn"],
                            email: _this9.praticienFormGroup.value["email"],
                            fatherName: _this9.praticienFormGroup.value['father_name'] == undefined ? '' : _this9.praticienFormGroup.value['father_name'],
                            id: _this9.profile.id,
                            motherName: _this9.praticienFormGroup.value['father_name'] == undefined ? '' : _this9.praticienFormGroup.value['mother_name'],
                            nameCity: _this9.praticienFormGroup.value["city"],
                            nameState: _this9.praticienFormGroup.value["state"],
                            phone: _this9.praticienFormGroup.value["phone"]
                          };
                        });
                      } else {
                        console.log("NOT valid", this.praticienFormGroup);
                        Object.keys(this.praticienFormGroup.value).forEach(function (key) {
                          console.log("NOT valid", _this9.praticienFormGroup.value[key]);
                        });
                      }

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } //Comparaison select

        }, {
          key: "compareFn",
          value: function compareFn(e1, e2) {
            return e1 && e2 ? e1.id == e2.id : e1 == e2;
          }
        }, {
          key: "compareFnInv",
          value: function compareFnInv(e1, e2) {
            return e1 && e2 ? e1 == e2 : e1.id == e2.id;
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this10 = this;

            this.praticienSrvc.getProfile().subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var _this11 = this;

                var data;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        data = response.profile;
                        this.centre_name = response.profile[1].centreName;
                        console.log(data);
                        this.profile = data[0];
                        this.profile.nameState = data[0].countryFonction;
                        this.globalSrvc.getCity(this.profile.nameState).subscribe(function (data2) {
                          _this11.cities = data2;
                          _this11.profile.nameCity = data[0].CityFonction;
                        });
                        data[0].countryBorn == null ? this.profile.countryBorn = data[0].countryFonction : this.profile.countryBorn = data[0].countryBorn;
                        this.globalSrvc.getCity(this.profile.countryBorn).subscribe(function (data3) {
                          _this11.citiesBorn = data3;
                          data[0].cityBorn == null ? _this11.profile.cityBorn = data[0].CityFonction : _this11.profile.cityBorn = data[0].cityBorn;

                          _this11.globalInteract.dismissLoading();
                        });
                        this.profile.dateOnBorn = data[0].dateBorn.date;
                        this.profile.createdAt = data[0].createdAt.date; // this.profile.date_on_born = new Date(data.date_on_born);

                        this.buildForm(data[0]); // this.type_patient = data[0].typePatient == 1 ? "Adult" : "Enfant";

                      case 11:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            });
          }
        }, {
          key: "getKeyByValue",
          value: function getKeyByValue(object, value) {
            return Object.keys(object).find(function (key) {
              return object[key] === value;
            });
          }
        }, {
          key: "getCityByCountry",
          value: function getCityByCountry(id) {
            var _this12 = this;

            console.log("LL: ProfilePage -> getCityByCountry -> id", id);
            console.log("LL: ProfilePage -> getCityByCountry -> id", this.profile);
            this.globalSrvc.getCity(id).subscribe(function (data) {
              return _this12.cities = data;
            });
          }
        }, {
          key: "getCityByCountryBorn",
          value: function getCityByCountryBorn(id) {
            var _this13 = this;

            console.log("LL: ProfilePage -> getCityByCountryBorn -> id", id);
            console.log("LL: ProfilePage -> getCityByCountryBorn -> id", this.profile);
            this.globalSrvc.getCity(id).subscribe(function (data) {
              return _this13.citiesBorn = data;
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_5__["PraticienService"]
        }, {
          type: src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_4__["GlobalDataService"]
        }, {
          type: _global_interaction__WEBPACK_IMPORTED_MODULE_6__["GlobalInteraction"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/pages/praticien/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
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
            res.subscribe(function (data) {
              console.log("GlobalDataService -> getCountry -> data", data);
            });
            return res;
          }
        }, {
          key: "getCity",
          value: function getCity(id) {
            var res = this.http.get(this.url_api + "city?id=".concat(id));
            console.log("GlobalDataService -> constructor -> this.url_api + `city?id=${id}`", this.url_api + "city?id=".concat(id));
            res.subscribe(function (data) {
              console.log("GlobalDataService -> getCity -> data", data);
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
//# sourceMappingURL=profile-profile-module-es5.js.map