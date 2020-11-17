(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assoc-praticiens-assoc-praticiens-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPatientAssocPraticiensAssocPraticiensPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Mes Praticiens </ion-title>\n    <!-- <ion-searchbar\n      *ngIf=\"showSearchbar\"\n      showCancelButton=\"always\"\n      [(ngModel)]=\"queryText\"\n      (ionChange)=\"updateRdvList()\"\n      (ionCancel)=\"showSearchbar= false\"\n      placeholder=\"Rechercher\"></ion-searchbar> -->\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar= true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list #scheduleList>\n    <ion-item-group>\n      <ion-item-sliding #slidingItem>\n        <ion-item lines=\"none\" *ngFor=\"let praticien of this.assoc_praticiens\">\n          <ion-card>\n            <ion-card-content\n              ><ion-grid>\n                <ion-row>\n                  <ion-col size=\"4\">\n                    <ion-label>\n                      <img src=\"../../../assets/images/praticien.jpg\" />\n                    </ion-label>\n                  </ion-col>\n                  <ion-col size=\"8\" class=\"information\">\n                    <h2 class=\"name\">\n                      Dr. {{praticien.firstName}} {{praticien.lastName}}\n                    </h2>\n                    <ion-label class=\"fonction\"\n                      >{{praticien.fonction}}\n                    </ion-label>\n\n                    <ion-label> </ion-label>\n                    <ion-label> Pays : {{praticien.state}} </ion-label>\n                    <ion-label> Ville : {{praticien.city}} </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row> </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n";
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
    "./src/app/pages/patient/assoc-praticiens/assoc-praticiens-routing.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/patient/assoc-praticiens/assoc-praticiens-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: AssocPraticiensPageRoutingModule */

    /***/
    function srcAppPagesPatientAssocPraticiensAssocPraticiensRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssocPraticiensPageRoutingModule", function () {
        return AssocPraticiensPageRoutingModule;
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


      var _assoc_praticiens_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./assoc-praticiens.page */
      "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.ts");

      var routes = [{
        path: '',
        component: _assoc_praticiens_page__WEBPACK_IMPORTED_MODULE_3__["AssocPraticiensPage"]
      }];

      var AssocPraticiensPageRoutingModule = function AssocPraticiensPageRoutingModule() {
        _classCallCheck(this, AssocPraticiensPageRoutingModule);
      };

      AssocPraticiensPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AssocPraticiensPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/patient/assoc-praticiens/assoc-praticiens.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AssocPraticiensPageModule */

    /***/
    function srcAppPagesPatientAssocPraticiensAssocPraticiensModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssocPraticiensPageModule", function () {
        return AssocPraticiensPageModule;
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


      var _assoc_praticiens_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./assoc-praticiens-routing.module */
      "./src/app/pages/patient/assoc-praticiens/assoc-praticiens-routing.module.ts");
      /* harmony import */


      var _assoc_praticiens_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./assoc-praticiens.page */
      "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.ts");

      var AssocPraticiensPageModule = function AssocPraticiensPageModule() {
        _classCallCheck(this, AssocPraticiensPageModule);
      };

      AssocPraticiensPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _assoc_praticiens_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssocPraticiensPageRoutingModule"]],
        declarations: [_assoc_praticiens_page__WEBPACK_IMPORTED_MODULE_6__["AssocPraticiensPage"]]
      })], AssocPraticiensPageModule);
      /***/
    },

    /***/
    "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPatientAssocPraticiensAssocPraticiensPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  flex-basis: 100%;\n}\n\n.profile_praticien {\n  width: 50%;\n  height: 50%;\n}\n\n.fonction {\n  color: var(--ion-color-primary);\n}\n\n.name {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9hc3NvYy1wcmF0aWNpZW5zL2Fzc29jLXByYXRpY2llbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvYXNzb2MtcHJhdGljaWVucy9hc3NvYy1wcmF0aWNpZW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZmlsZV9wcmF0aWNpZW4ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5mb25jdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4ubmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.ts ***!
      \*************************************************************************/

    /*! exports provided: AssocPraticiensPage */

    /***/
    function srcAppPagesPatientAssocPraticiensAssocPraticiensPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssocPraticiensPage", function () {
        return AssocPraticiensPage;
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


      var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/patient.service */
      "./src/app/services/patient.service.ts");
      /* harmony import */


      var _global_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../global.interaction */
      "./src/app/pages/global.interaction.ts");

      var AssocPraticiensPage = /*#__PURE__*/function () {
        function AssocPraticiensPage(patientSrvc, globalItem) {
          _classCallCheck(this, AssocPraticiensPage);

          this.patientSrvc = patientSrvc;
          this.globalItem = globalItem;
          this.queryText = "";
          this.assoc_praticiens = [];
        }

        _createClass(AssocPraticiensPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.globalItem.presentLoading();
            this.getAllMyPraticians();
          }
        }, {
          key: "updateRdvList",
          value: function updateRdvList() {
            if (this.List) {
              this.List.closeSlidingItems();
            }
          }
        }, {
          key: "getAllMyPraticians",
          value: function getAllMyPraticians() {
            var _this2 = this;

            this.patientSrvc.getAssociatedPraticians().subscribe(function (data) {
              _this2.assoc_praticiens = data;

              _this2.globalItem.dismissLoading();
            });
          }
        }]);

        return AssocPraticiensPage;
      }();

      AssocPraticiensPage.ctorParameters = function () {
        return [{
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
        }, {
          type: _global_interaction__WEBPACK_IMPORTED_MODULE_3__["GlobalInteraction"]
        }];
      };

      AssocPraticiensPage.propDecorators = {
        List: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["List", {
            "static": true
          }]
        }]
      };
      AssocPraticiensPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assoc-praticiens',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./assoc-praticiens.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./assoc-praticiens.page.scss */
        "./src/app/pages/patient/assoc-praticiens/assoc-praticiens.page.scss"))["default"]]
      })], AssocPraticiensPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=assoc-praticiens-assoc-praticiens-module-es5.js.map