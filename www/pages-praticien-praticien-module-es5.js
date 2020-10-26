(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-praticien-praticien-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/praticien.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/praticien.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPraticienPraticienPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-split-pane contentId=\"contents\" when=\"xs\" [disabled]=\"true\">\n  <ion-menu side=\"start\" type=\"overlay\" menuId=\"first\" contentId=\"contents\">\n    <!--  <ion-header>\n      <ion-toolbar>\n        <ion-title text-wrap>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header> -->\n    <ion-content>\n      <div class=\"menu-praticien\"></div>\n      <div class=\"header-content\">\n        <ion-label>\n          <img src=\"../../../assets/images/praticien.jpg\" />\n        </ion-label>\n        <ion-label>\n          <h2>Dr. {{name}}</h2>\n          <p>{{fonction}}</p>\n        </ion-label>\n      </div>\n\n      <ion-list lines=\"none\" class=\"menu-items\">\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-item\n            text-wrap\n            routerLink=\"{{p.url}}\"\n            routerDirection=\"root\"\n            [class.active-item]=\"selectedPath === p.url\"\n          >\n            <ion-icon\n              *ngIf=\"selectedPath === p.url\"\n              slot=\"start\"\n              name=\"caret-forward-outline\"\n              color=\"sgreen\"\n            >\n            </ion-icon>\n            <ion-label>{{p.title}}</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle> </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n    <ion-footer>\n      <ion-button\n        class=\"logout\"\n        color=\"sred\"\n        (click)=\"logout()\"\n        [routerLink]=\"['/login']\"\n      >\n        <ion-icon slot=\"start\" name=\"exit-outline\"> </ion-icon>\n\n        <ion-label>Logout</ion-label>\n      </ion-button>\n    </ion-footer>\n  </ion-menu>\n  <ion-router-outlet id=\"contents\"></ion-router-outlet>\n</ion-split-pane>\n\n<!-- <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button (click)=\"openFirst()\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Praticien Area</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n";
      /***/
    },

    /***/
    "./src/app/pages/praticien/praticien-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/praticien/praticien-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: PraticienPageRoutingModule */

    /***/
    function srcAppPagesPraticienPraticienRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PraticienPageRoutingModule", function () {
        return PraticienPageRoutingModule;
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


      var _praticien_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./praticien.page */
      "./src/app/pages/praticien/praticien.page.ts");

      var routes = [{
        path: "",
        component: _praticien_page__WEBPACK_IMPORTED_MODULE_3__["PraticienPage"],
        children: [{
          path: "proposition-rdv",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | proposition-rdv-proposition-rdv-module */
            [__webpack_require__.e("common"), __webpack_require__.e("proposition-rdv-proposition-rdv-module")]).then(__webpack_require__.bind(null,
            /*! ./proposition-rdv/proposition-rdv.module */
            "./src/app/pages/praticien/proposition-rdv/proposition-rdv.module.ts")).then(function (m) {
              return m.PropositionRdvPageModule;
            });
          }
        }, {
          path: "dashboard",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | dashboard-dashboard-module */
            "dashboard-dashboard-module").then(__webpack_require__.bind(null,
            /*! ./dashboard/dashboard.module */
            "./src/app/pages/praticien/dashboard/dashboard.module.ts")).then(function (m) {
              return m.DashboardPageModule;
            });
          }
        }, {
          path: "consultation",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | consultation-consultation-module */
            "consultation-consultation-module").then(__webpack_require__.bind(null,
            /*! ./consultation/consultation.module */
            "./src/app/pages/praticien/consultation/consultation.module.ts")).then(function (m) {
              return m.ConsultationPageModule;
            });
          }
        }, {
          path: "vaccination",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | vaccination-vaccination-module */
            [__webpack_require__.e("default~pages-praticien-praticien-module~rendez-vous-rendez-vous-module~vaccination-vaccination-module"), __webpack_require__.e("common"), __webpack_require__.e("vaccination-vaccination-module")]).then(__webpack_require__.bind(null,
            /*! ./vaccination/vaccination.module */
            "./src/app/pages/praticien/vaccination/vaccination.module.ts")).then(function (m) {
              return m.VaccinationPageModule;
            });
          }
        }, {
          path: "intervention",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | intervention-intervention-module */
            "intervention-intervention-module").then(__webpack_require__.bind(null,
            /*! ./intervention/intervention.module */
            "./src/app/pages/praticien/intervention/intervention.module.ts")).then(function (m) {
              return m.InterventionPageModule;
            });
          }
        }]
      }];

      var PraticienPageRoutingModule = function PraticienPageRoutingModule() {
        _classCallCheck(this, PraticienPageRoutingModule);
      };

      PraticienPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PraticienPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/praticien/praticien.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/praticien/praticien.module.ts ***!
      \*****************************************************/

    /*! exports provided: PraticienPageModule */

    /***/
    function srcAppPagesPraticienPraticienModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PraticienPageModule", function () {
        return PraticienPageModule;
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


      var _praticien_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./praticien-routing.module */
      "./src/app/pages/praticien/praticien-routing.module.ts");
      /* harmony import */


      var _praticien_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./praticien.page */
      "./src/app/pages/praticien/praticien.page.ts");

      var PraticienPageModule = function PraticienPageModule() {
        _classCallCheck(this, PraticienPageModule);
      };

      PraticienPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _praticien_routing_module__WEBPACK_IMPORTED_MODULE_5__["PraticienPageRoutingModule"]],
        declarations: [_praticien_page__WEBPACK_IMPORTED_MODULE_6__["PraticienPage"]]
      })], PraticienPageModule);
      /***/
    },

    /***/
    "./src/app/pages/praticien/praticien.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/praticien/praticien.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPraticienPraticienPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu-praticien {\n  height: 200px;\n  width: 400px;\n  background: var(--ion-color-sgreen);\n  transform: rotate(-15deg);\n  background: linear-gradient(90deg, var(--ion-color-sgreen) 0%, var(--ion-color-sgreen) 100%);\n  box-shadow: 0px 1px 10px rgba(98, 145, 255, 0.5);\n  border-radius: 10px 10px 10px 50px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 1px solid #1b9b3d;\n  margin-right: 10px;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  color: white;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: white;\n  font-weight: 100;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-menu-toggle ion-icon {\n  margin-right: 20px;\n  color: #999999;\n}\n\n.menu-items ion-menu-toggle ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.active-item {\n  margin-left: -25px;\n  color: var(--ion-color-sgreen);\n}\n\n.logout {\n  display: flex;\n  justify-content: center;\n  justify-items: center;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL3ByYXRpY2llbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSw0RkFBQTtFQUtBLGdEQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSko7O0FBUUE7RUFDRSxXQUFBO0FBTEY7O0FBUUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFOTjs7QUFRSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFOTjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFSRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByYXRpY2llbi9wcmF0aWNpZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtcHJhdGljaWVuIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2dyZWVuKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDkwZGVnLFxyXG4gICAgdmFyKC0taW9uLWNvbG9yLXNncmVlbikgMCUsXHJcbiAgICB2YXIoLS1pb24tY29sb3Itc2dyZWVuKSAxMDAlXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSg5OCwgMTQ1LCAyNTUsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgbGVmdDogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFiOWIzZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1pdGVtcyB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcblxyXG4gIGlvbi1tZW51LXRvZ2dsZSB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICB9XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmUtaXRlbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2dyZWVuKTtcclxufVxyXG5cclxuLmxvZ291dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/praticien/praticien.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/praticien/praticien.page.ts ***!
      \***************************************************/

    /*! exports provided: PraticienPage */

    /***/
    function srcAppPagesPraticienPraticienPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PraticienPage", function () {
        return PraticienPage;
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


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/praticien.service */
      "./src/app/services/praticien.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var PraticienPage = /*#__PURE__*/function () {
        function PraticienPage(authService, menuCtrl, router, plt, platform, splashScreen, statusBar, praticienSrvc, authSrvc, storage) {
          var _this = this;

          _classCallCheck(this, PraticienPage);

          this.authService = authService;
          this.menuCtrl = menuCtrl;
          this.router = router;
          this.plt = plt;
          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.praticienSrvc = praticienSrvc;
          this.authSrvc = authSrvc;
          this.storage = storage;
          this.pages = [{
            title: "Tableau de bord",
            url: "/praticien/dashboard"
          }, {
            title: "Vaccination",
            url: "/praticien/vaccination",
            children: [{
              url: "/praticient/vaccination/details"
            }]
          }, {
            title: "Consultation",
            url: "/praticien/consultation"
          }, {
            title: "Intervention",
            url: "/praticien/intervention"
          }, {
            title: "Rendez-vous",
            url: "/praticien/proposition-rdv"
          }];
          this.selectedPath = "";
          this.name = "";
          this.fonction = "";
          this.router.events.subscribe(function (event) {
            // console.log("PraticienPage -> event", event);
            _this.selectedPath = event.url;
          });

          if (this.selectedPath === "" || this.selectedPath === undefined) {
            this.selectedPath = "/praticien/proposition-rdv";
          }

          console.log("PraticienPage -> this.selectedPath", this.selectedPath);
        }

        _createClass(PraticienPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.initializeApp();

                    case 1:
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
                      if (this.selectedPath == undefined) {
                        this.selectedPath = this.router.url;
                      } //setTimeout(()=> this.menuCtrl.toggle("first"), 10);


                      this.plt.ready().then(function () {
                        _this2.menuCtrl.get("first").then(function (element) {
                          _this2.splashScreen.hide();

                          if (element.isActive) {
                            setTimeout(function () {
                              return element.toggle();
                            }, 10);
                          }
                        });
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this3 = this;

            this.platform.ready().then(function () {
              _this3.statusBar.styleDefault();

              _this3.splashScreen.hide();
            });
            this.praticienSrvc.getInfoUserID().subscribe(function (data) {
              _this3.storage.set("_id", data.data);

              _this3.praticienSrvc.getLocalUserInfo().subscribe(function (el) {
                var _this3$authSrvc$user = _this3.authSrvc.user,
                    roles = _this3$authSrvc$user.roles,
                    username = _this3$authSrvc$user.username;
                var praticien = {
                  firstName: el.firstName,
                  lastName: el.lastName,
                  anotherData: {
                    role: roles[0],
                    username: username
                  },
                  phoneProfessional: el.phoneProfessional,
                  fonction: el.fonction
                };

                _this3.storage.set("praticien_info", praticien);

                _this3.name = "".concat(praticien.firstName, " ").concat(praticien.lastName, " ( ").concat(praticien.anotherData.username, " ) ");
                _this3.fonction = praticien.fonction;
              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }]);

        return PraticienPage;
      }();

      PraticienPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_7__["PraticienService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }];
      };

      PraticienPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-praticien",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./praticien.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/praticien.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./praticien.page.scss */
        "./src/app/pages/praticien/praticien.page.scss"))["default"]]
      })], PraticienPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-praticien-praticien-module-es5.js.map