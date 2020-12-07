(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/auth-guard.service */
      "./src/app/services/auth-guard.service.ts");

      var routes = [{
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }, {
        path: "home",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "./src/app/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: "login",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: "register",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-register-register-module */
          "pages-register-register-module").then(__webpack_require__.bind(null,
          /*! ./pages/register/register.module */
          "./src/app/pages/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: "patient",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-patient-patient-module */
          "pages-patient-patient-module").then(__webpack_require__.bind(null,
          /*! ./pages/patient/patient.module */
          "./src/app/pages/patient/patient.module.ts")).then(function (m) {
            return m.PatientPageModule;
          });
        },
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
      }, {
        path: "praticien",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-praticien-praticien-module */
          [__webpack_require__.e("default~pages-praticien-praticien-module~praticien-praticien-module~profile-profile-module~rendez-vo~80279bf7"), __webpack_require__.e("pages-praticien-praticien-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/praticien/praticien.module */
          "./src/app/pages/praticien/praticien.module.ts")).then(function (m) {
            return m.PraticienPageModule;
          });
        }
      }, {
        path: 'account-activation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-account-activation-account-activation-module */
          "pages-account-activation-account-activation-module").then(__webpack_require__.bind(null,
          /*! ./pages/account-activation/account-activation.module */
          "./src/app/pages/account-activation/account-activation.module.ts")).then(function (m) {
            return m.AccountActivationPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/constant */
      "./src/constant.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, authService, router) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.authService = authService;
          this.router = router;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();

              _this.authService.authenticationState.subscribe(function (state) {
                if (state) {
                  if (_this.authService.getRole() == src_constant__WEBPACK_IMPORTED_MODULE_7__["CONSTANT"].ROLE_PATIENT) {
                    // this.router.navigate(["patient/profile"]);
                    // this.router.navigate(["/patient/rendez-vous"]);
                    // this.router.navigate(["/patient/assoc-praticiens"]);
                    _this.router.navigate(["/patient/vaccination"]); // this.router.navigate(["/patient/family"]);

                  } else if (_this.authService.getRole() == src_constant__WEBPACK_IMPORTED_MODULE_7__["CONSTANT"].ROLE_PRATICIEN) {
                    // this.router.navigate(["praticien"]);
                    // this.router.navigate(["/praticien/proposition-rdv"]);
                    // this.router.navigate(["/praticien/intervention"]);
                    // this.router.navigate(["/praticien/consultation"]);
                    // this.router.navigate(["/praticien/vaccination"]);
                    _this.router.navigate(["/praticien/assoc-patients"]); // this.router.navigate(["/praticien/profile"]);
                    // this.router.navigate(["/praticien/rendez-vous"]);

                  }
                } else {
                  // this.router.navigate(["login"]);
                  _this.router.navigate(["home"]); // this.router.navigate(["register/patient"]);
                  // this.router.navigate(["register/praticien"]);
                  // this.router.navigate(["/patient/profile"]);
                  // this.router.navigate(["/praticien/dashboard"]);
                  // this.router.navigate(["/praticien/vaccination"]);
                  // this.router.navigate(["/account-activation"]);

                }
              });
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: jwtOptionsFactory, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function () {
        return jwtOptionsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
      /* harmony import */


      var _services_interceptor_http_config_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/interceptor/http-config-interceptor */
      "./src/app/services/interceptor/http-config-interceptor.ts");

      var TOKEN_KEY = "access_token";

      function jwtOptionsFactory(storage) {
        return {
          // prendre le token n'importe ou
          tokenGetter: function tokenGetter() {
            return storage.get(TOKEN_KEY);
          },
          whitelistedDomains: ["localhost:9000"]
        };
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"].forRoot({
          jwtOptionsProvider: {
            provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JWT_OPTIONS"],
            useFactory: jwtOptionsFactory,
            deps: [_ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]]
          }
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
          useClass: _services_interceptor_http_config_interceptor__WEBPACK_IMPORTED_MODULE_12__["HttpConfigInterceptorService"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
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
              var _this2 = this;

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
                          if (!_this2.isLoading) {
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
                          handler: function handler() {// console.log("Confirm Cancel: blah");
                          }
                        }, {
                          text: "OK",
                          handler: function handler() {
                            // console.warn("data deleted " + id);
                            // this.remove(id, array, keyStatus, RefuseStatus);
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
        }, {
          key: "pageRefresher",
          value: function pageRefresher(callback) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.presentLoading();
                      callback(function (data) {
                        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>LL: GlobalInteraction -> pageRefresher -> data", data);

                        _this3.dismissLoading();
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
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
    "./src/app/services/auth-guard.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/auth-guard.service.ts ***!
      \************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/services/auth.service.ts");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(auth) {
          _classCallCheck(this, AuthGuardService);

          this.auth = auth;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            // return this.auth.isAuthenticated();
            return true;
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], AuthGuardService);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var TOKEN_KEY = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].TOKEN_KEY;

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, helper, storage, alertCtrl, plt) {
          var _this4 = this;

          _classCallCheck(this, AuthService);

          this.http = http;
          this.helper = helper;
          this.storage = storage;
          this.alertCtrl = alertCtrl;
          this.plt = plt;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
          this.user = null;
          this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
          this.plt.ready().then(function () {
            _this4.checkToken(); // TODO: à decommenter

          });
        }

        _createClass(AuthService, [{
          key: "getToken",
          value: function getToken() {
            return this.storage.get(TOKEN_KEY).then(function (token) {
              if (token) {
                return token;
              } else {// console.log("token doesn't exist yet");
                // throw new Error("token doesn't exist yet");
              }
            });
          }
        }, {
          key: "checkEtat",
          value: function checkEtat(credentials) {
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              "Content-Type": "application/json",
              Accept: "application/json"
            }); // TODO APK: à decommenter

            var res = this.http.post("".concat(this.url, "/api/check-etat"), credentials, {
              headers: header
            });
            return res;
          }
        }, {
          key: "checkToken",
          value: function checkToken() {
            var _this5 = this;

            this.storage.get(TOKEN_KEY).then(function (token) {
              if (token) {
                var decoded = _this5.helper.decodeToken(token);

                var isExpired = _this5.helper.isTokenExpired(token);

                if (!isExpired) {
                  _this5.user = decoded; // console.log(
                  //   "AuthService -> checkToken -> CONSTANT.stringifyParse(this.user)",
                  //   CONSTANT.stringifyParse(this.user)
                  // );

                  _this5.authenticationState.next(true);
                } else {
                  _this5.storage.remove(TOKEN_KEY);
                }
              }
            });
          }
        }, {
          key: "login",
          value: function login(credentials, loadinCtrl) {
            var _this6 = this;

            // console.log("AuthService -> login -> credentials", credentials);
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              "Content-Type": "application/json",
              Accept: "application/json"
            }); // TODO APK: à decommenter

            var res = this.http.post("".concat(this.url, "/api/login_check"), credentials, {
              headers: header
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
              // console.log("*******", CONSTANT.stringifyParse(res));
              _this6.storage.set(TOKEN_KEY, res["token"]); // TODO : à decommenter
              // const testToken = {
              //   token:
              //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDA2NzA0MzAsImV4cCI6MTYwMDY3NDAzMCwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sInVzZXJuYW1lIjoicGF0In0.wCv7mjXJIsEOHWyaHxwZ7u9sLIQ9IYH5wxmXfzNgWgL9Ynm8R7QMB6lrE1NJAlYh2wHsUQ5fjiyt59tmXwIuZf2qqw4JEuRShYccKLUDSAon-V_BgNPVwXIBwVMzQi2LkdhTHB0f7CnHLf7b5apJ2t8qSTEtUUsNMqipzqIzvDCBIQvl8XhxXxL9ZUdDfJeW9r4tuiHGl0WcQaDdg5-GyATk3gZDrWW1UNdKYVA7o3CWoD66xgeAi072XY_W_MeH0nzDVyemX-48E4kYKNydDw7HB60D6xNTNsg5dEFCBriA7mZPc-MLJwWcKkGa8nLwEOGXWOnSKmm8_9DQO0TDg72uYK2yQHw3WzEQwWz2io84aj3B7wtvxD4YpK3K_x-zMDJQWzrpJAMxxe2dZlVgWArgIBmqowb30HkrInhjvFssLou_MBU6jdnAFogO188k1pXkS2CwIdaqB9Wzxn_5AXfM8XGTRwKlggBk36owdkdWKyli1SuHA4FlwWdHd5MW3i1RjkwrkzZfXk-cohAWJ_Phrz8aCb51u8nmaH1sCOC5WSGrgQTaenkczr26TYRVBrr54HFxGrGfhf5xKa5NP5uWFzlq2Z0q_bDgv8YKw8G9-y9nhE5dAS3GW0CEcwwBRRw4NRAWJ6HK3foHaskYR4Wi-oukqyTOG8p_H0zE0nE",
              // };
              // this.storage.set(TOKEN_KEY, testToken);


              _this6.user = _this6.helper.decodeToken(res["token"]); // console.log(
              //   "AuthService -> login -> user",
              //   CONSTANT.stringifyParse(this.user)
              // );

              _this6.authenticationState.next(true);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
              if (e.error) {// this.showAlert(e.error.msg);
              }

              loadinCtrl.dismiss();
              throw new Error(e);
            }));
            return res; // TODO: à commenter pour Just pour les mock login 
            // let testToken;
            // if (credentials.username === "pat") {
            //   testToken = {
            //     token:
            //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDA2NzA0MzAsImV4cCI6MTYwMDY3NDAzMCwicm9sZXMiOlsiUk9MRV9QQVRJRU5UIl0sInVzZXJuYW1lIjoicGF0In0.wCv7mjXJIsEOHWyaHxwZ7u9sLIQ9IYH5wxmXfzNgWgL9Ynm8R7QMB6lrE1NJAlYh2wHsUQ5fjiyt59tmXwIuZf2qqw4JEuRShYccKLUDSAon-V_BgNPVwXIBwVMzQi2LkdhTHB0f7CnHLf7b5apJ2t8qSTEtUUsNMqipzqIzvDCBIQvl8XhxXxL9ZUdDfJeW9r4tuiHGl0WcQaDdg5-GyATk3gZDrWW1UNdKYVA7o3CWoD66xgeAi072XY_W_MeH0nzDVyemX-48E4kYKNydDw7HB60D6xNTNsg5dEFCBriA7mZPc-MLJwWcKkGa8nLwEOGXWOnSKmm8_9DQO0TDg72uYK2yQHw3WzEQwWz2io84aj3B7wtvxD4YpK3K_x-zMDJQWzrpJAMxxe2dZlVgWArgIBmqowb30HkrInhjvFssLou_MBU6jdnAFogO188k1pXkS2CwIdaqB9Wzxn_5AXfM8XGTRwKlggBk36owdkdWKyli1SuHA4FlwWdHd5MW3i1RjkwrkzZfXk-cohAWJ_Phrz8aCb51u8nmaH1sCOC5WSGrgQTaenkczr26TYRVBrr54HFxGrGfhf5xKa5NP5uWFzlq2Z0q_bDgv8YKw8G9-y9nhE5dAS3GW0CEcwwBRRw4NRAWJ6HK3foHaskYR4Wi-oukqyTOG8p_H0zE0nE",
            //   };
            // } else {
            //   testToken = {
            //     token:
            //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDA2NzE2MzIsImV4cCI6MTYwMDY3NTIzMiwicm9sZXMiOlsiUk9MRV9QUkFUSUNJRU4iXSwidXNlcm5hbWUiOiJwcmF0In0.H9dXiMlno-GwnWudmCRvdowfyPV_ErApPFTQb8gb73JHr9OUQwF9konoeBCOWS-DEl66dhRDFVYIPMsEbcacfkNPUFT6WZYP551Ory4HL--4kQuvbkoScuLQe8c2RcaSHKms1WZQq-Y-Gkvf3gmML4V6OUApC-vzSptFhokFqZTU8nNO8PmN8TPCw5NhyBxp4KqCF58dOPHl6n5ua449FZrS15YhjxOIiycnLmsjHHNVx2r-fqOj7RDkSwyMrrS-2NLqD-zBzEj1hWCmS-YXJYYqo2jV8jOFV_ln75P7Mycaic-ZIyCYOte3YgM7mtTZo4ZhZf3lPVLohl9y_E2qvGZZK2ArsduuER78drXSU7Af2LMIVkG_-XshIlSEmnV1gnVkObr8r4ofCbcqi-7Oh3TRXk-rPBzlrhhA6B4BqeJaJCqakJuSZLRkZuHGmRI80CKgnUNqPLQJ0PMFrHTInwDnLhVUSCnxrwZ2Ko_ZReQoSM_ILBrcudUMJ5hmtWlc0_qEhJUibKtKuzWTbjokhI2nXYNvK6OGBPzm8llugoFJTRGNmz7RKxPTJp_p8_cHd0wReIGiaDcvQfncXof4r3wSKgNIb3UpT1mxZxbEioEb6agks8oRmytlW_ta7CUVsg2ylgtsa-Alt8XVuFmMv4IROvxCxII8IisiNC-LITo",
            //   };
            // }
            // this.storage.set(TOKEN_KEY, testToken.token);
            // this.user = this.helper.decodeToken(testToken.token);
            // this.authenticationState.next(true);
            // return from<any>(testToken.token);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.storage.clear();
          }
        }, {
          key: "showAlert",
          value: function showAlert(msg) {
            var alert = this.alertCtrl.create({
              message: msg,
              header: "Error",
              buttons: ["OK"]
            });
            alert.then(function (alert) {
              return alert.present();
            });
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.authenticationState.value;
          }
        }, {
          key: "getRole",
          value: function getRole() {
            if (this.user) {
              return this.user["roles"];
            }
          }
        }, {
          key: "activateAccount",
          value: function activateAccount(data) {
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              "Content-Type": "application/json",
              Accept: "application/json"
            });
            var res = this.http.post("".concat(this.url, "/api/register/activate"), {
              code: data
            }, {
              headers: header
            });
            return res;
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/services/interceptor/http-config-interceptor.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/services/interceptor/http-config-interceptor.ts ***!
      \*****************************************************************/

    /*! exports provided: HttpConfigInterceptorService */

    /***/
    function srcAppServicesInterceptorHttpConfigInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptorService", function () {
        return HttpConfigInterceptorService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/pages/global.interaction */
      "./src/app/pages/global.interaction.ts");

      var TOKEN_KEY = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TOKEN_KEY;

      var HttpConfigInterceptorService = /*#__PURE__*/function () {
        function HttpConfigInterceptorService(alerCtrl, storage, authSvc, globalItem) {
          _classCallCheck(this, HttpConfigInterceptorService);

          this.alerCtrl = alerCtrl;
          this.storage = storage;
          this.authSvc = authSvc;
          this.globalItem = globalItem;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url_dev;
          this.debug = true;
        } // intercept(
        //   req: HttpRequest<any>,
        //   next: HttpHandler
        // ): Observable<HttpEvent<any>> {
        //   console.log(
        //     "HttpConfigInterceptorService -> this.authSvc.isAuthenticated()",
        //     this.authSvc.isAuthenticated()
        //   );
        //   if (this.authSvc.isAuthenticated() === true) {
        //     const toke = this.authSvc.getToken();
        //     console.log("HttpConfigInterceptorService -> toke", toke);
        //     let cloneReq;
        //     return from(toke).pipe(
        //       switchMap((token) => {
        //         if (token) {
        //           cloneReq = req.clone({
        //             headers: req.headers.set("Authorization", "Bearer" + " " + token),
        //           });
        //         }
        //         if (!req.headers.has("Content-Type")) {
        //           cloneReq = req.clone({
        //             headers: req.headers.set("Content-Type", "application/json"),
        //           });
        //         }
        //         if (this.debug) {
        //           // req = req.clone({
        //           //   url: this.url + req.url + "?XDEBUG_SESSION_START=1",
        //           // });
        //           console.log("en debug");
        //         }
        //         return next.handle(cloneReq).pipe(
        //           map((event: HttpEvent<any>) => {
        //             if (event instanceof HttpResponse) {
        //             }
        //             return event;
        //           }),
        //           catchError((error: HttpErrorResponse) => {
        //             const status = error.status;
        //             const reason =
        //               error && error.error.reason ? error.error.reason : "";
        //             this.presentAlert(status, reason);
        //             return throwError(error);
        //           })
        //         );
        //       })
        //     );
        //   } else {
        //     next.handle(req);
        //   }
        // }


        _createClass(HttpConfigInterceptorService, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this7 = this;

            var promise = this.authSvc.getToken();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (token) {
              var cloneReq = _this7.addToken(request, token);

              return next.handle(cloneReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) {
                var status = error.status; // console.warn("LL: HttpConfigInterceptorService -> error", error.message)

                var reason = error && error.error.reason ? error.error.reason : "";

                _this7.presentAlert(status, reason);

                _this7.globalItem.dismissLoading();

                _this7.globalItem.presentToast("error " + status);

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
              }));
            }));
          }
        }, {
          key: "addToken",
          value: function addToken(request, tok) {
            if (tok) {
              var clone; // headers.append("Access-Control-Allow-Origin", '*');
              // 	headers.append("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE');
              // 	headers.append('Content-Type', 'application/json' );

              clone = request.clone({
                setHeaders: {
                  Accept: "application/json",
                  "Content-type": "application/json",
                  // "Access-Control-Allow-Origin": '*',
                  // "Access-Control-Allow-Methods": 'POST, GET, OPTIONS, DELETE',
                  Authorization: "Bearer ".concat(tok)
                }
              });
              return clone;
            } else {
              var _clone;

              _clone = request.clone({
                setHeaders: {
                  Accept: "application/json",
                  "Content-type": "application/json"
                }
              });
              return _clone;
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(status, reason) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alerCtrl.create({
                        header: status + " Error",
                        subHeader: "Subtitle",
                        message: reason,
                        buttons: ["OK"]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return HttpConfigInterceptorService;
      }();

      HttpConfigInterceptorService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_8__["GlobalInteraction"]
        }];
      };

      HttpConfigInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], HttpConfigInterceptorService);
      /***/
    },

    /***/
    "./src/constant.ts":
    /*!*************************!*\
      !*** ./src/constant.ts ***!
      \*************************/

    /*! exports provided: CONSTANT */

    /***/
    function srcConstantTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONSTANT", function () {
        return CONSTANT;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /**
       *
      patient :
      login : jmanagnora980
      mdp : admin
      
      praticien :
      login : tpraticien911
      mdp : praticien
       *
       * **/


      var CONSTANT = /*#__PURE__*/function () {
        function CONSTANT() {
          _classCallCheck(this, CONSTANT);
        }

        _createClass(CONSTANT, null, [{
          key: "showAllValue",

          /* static mockPatient: IPatient[] = [
            {
              id: 0,
              firstName: "nom ",
              lastName: "p1",
            },
            {
              id: 0,
              firstName: "nom ",
              lastName: "p2",
            },
            {
              id: 0,
              firstName: "nom ",
              lastName: "p3",
            },
          ]; */
          value: function showAllValue(data) {
            var res = {};
            Object.keys(data).forEach(function (res) {
              var nkey = res;
              var nvalue = data["".concat(res)];
              var json = {};
              json[nkey] = nvalue; // console.log("key:" + res + " value: " + data[`${res}`] + json);

              Object.assign(res, json);
            });
            return res;
          }
        }, {
          key: "stringifyParse",
          value: function stringifyParse(data) {
            return JSON.parse(JSON.stringify(data));
          }
        }]);

        return CONSTANT;
      }();

      CONSTANT.ROLE_PATIENT = "ROLE_PATIENT";
      CONSTANT.ROLE_PRATICIEN = "ROLE_PRATICIEN";
      CONSTANT.MOCK_DATA_JSON = "./assets/data/constant.data.json";
      CONSTANT = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({})], CONSTANT);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // url: "http://localhost:9000",
        // url_dev: "http://localhost:9000/apip/",
        // url_dev_api: "http://localhost:9000/api/",
        // url: "http://suivie-patient.neitic.com",
        // url_dev: "http://suivie-patient.neitic.com/apip/",
        // url_dev_api: "http://suivie-patient.neitic.com/api/",
        // url: "https://www.matipla.com",
        // url_dev: "https://www.matipla.com/apip/",
        // url_dev_api: "https://www.matipla.com/api/",
        url: "http://www.matipla.com",
        url_dev: "http://www.matipla.com/apip/",
        url_dev_api: "http://www.matipla.com/api/",
        TOKEN_KEY: "access_token"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\__Neitic\Full Time Work\Suivi-des-patients\Projet\suivi-via-mobile\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map