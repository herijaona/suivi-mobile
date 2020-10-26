(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vaccination-vaccination-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/vaccination.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/vaccination.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPatientVaccinationVaccinationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translutient=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-title *ngIf=\"!ios && !showSearchbar\">Vaccination</ion-title>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\" slot=\"start\"></ion-menu-button>\n    <ion-title *ngIf=\"ios\">Vaccination</ion-title>\n\n    <ion-searchbar\n      (ionInput)=\"filterItems($event)\"\n      debounce=\"500\"\n      placeholder=\"Rechercher\"\n      type=\"text\"\n      showCancelButton=\"always\"\n      *ngIf=\"showSearchbar\"\n      (ionCancel)=\"showSearchbar = false\"\n    ></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"ios\">\n    <ion-searchbar\n      (ionInput)=\"filterItems($event)\"\n      debounce=\"500\"\n      placeholder=\"Rechercher\"\n      type=\"text\"\n      (ionCancel)=\"showSearchbar = false\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list #VaccinList>\n    <ion-item-group *ngFor=\"let consult of vaccinsFiltered\">\n      <ion-item-divider sticky>\n        <ion-label slot=\"start\"> {{ consult.date}} </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding\n        *ngFor=\"let eachVaccination of consult.groups\"\n        [attr.track]=\"eachVaccination.status | lowercase\"\n        #slidingItem\n      >\n        <ion-item *ngIf=\"eachVaccination.show === true\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"7\">\n                <ion-label class=\"information\">\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <h2 class=\"makeBoldAndLarge\">\n                        {{eachVaccination.vaccin}}\n                      </h2>\n                      <h3>{{eachVaccination.date}}</h3>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <p>\n                        Rappel :\n                        <span class=\"dateRapelle\">\n                          {{eachVaccination.dateRapelle}}</span\n                        >\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"middle\" size=\"2\" offset-md=\"2\">\n                <ion-button\n                  *ngIf=\"eachVaccination.status.toString() === OKSTATUS\"\n                  class=\"status\"\n                  color=\"sgreen\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  Realised\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination.status.toString() === PENDSTATUS\"\n                  class=\"status\"\n                  color=\"sorange\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  Pending\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/details/details.component.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/details/details.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPraticienVaccinationDetailsDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"dismiss()\" fill=\"clear\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-title>details : {{ vaccinations[0].patient }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor=\"let item of vaccinations\">\n    <ion-item>\n      <h2>Vaccine</h2>\n    </ion-item>\n\n    <img />\n\n    <ion-card-content>\n      <p>{{ item.date }}</p>\n    </ion-card-content>\n\n    <!-- <ion-row>\n      <ion-col>\n        <button>\n          <ion-icon name=\"open\"></ion-icon>\n          <div>Open Link</div>\n        </button>\n      </ion-col>\n    </ion-row> -->\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/vaccination.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/vaccination.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPraticienVaccinationVaccinationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n\n    <ion-segment *ngIf=\"ios\" [(ngModel)]=\"segment\" (ionChange)=\"showAccepted()\">\n      <ion-segment-button value=\"all\" color=\"sgreen\"> All </ion-segment-button>\n      <ion-segment-button value=\"favorites\" color=\"sgreen\">\n        Accepté\n      </ion-segment-button>\n    </ion-segment>\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Vaccination</ion-title>\n    <ion-searchbar\n      *ngIf=\"showSearchbar\"\n      showCancelButton=\"always\"\n      [(ngModel)]=\"queryText\"\n      (ionChange)=\"filterItems($event)\"\n      (ionCancel)=\"showSearchbar = false\"\n      placeholder=\"Rechercher\"\n    ></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button *ngIf=\"!showSearchbar\" (click)=\"filterItems($event)\">\n        <span *ngIf=\"ios\">Filter</span>\n        <span *ngIf=\"!ios\">\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n        </span>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"!ios\">\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"showAccepted()\">\n      <ion-segment-button value=\"all\"> Tout </ion-segment-button>\n      <ion-segment-button value=\"favorites\"> Accépté </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Vaccination</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar\n        [(ngModel)]=\"queryText\"\n        (ionChange)=\"filterItems($event)\"\n        placeholder=\"Search\"\n      ></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list #scheduleList>\n    <ion-item-group *ngFor=\"let consult of filteredVaccinations\">\n      <ion-item-divider sticky>\n        <ion-label class=\"ion-text-center\"> {{ consult.date}} </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding\n        *ngFor=\"let eachVaccination of consult.groups\"\n        #slidingItem\n      >\n        <ion-item>\n          <ion-grid>\n            <ion-row (click)=\"alert()\">\n              <ion-col size=\"4\">\n                <ion-label class=\"information\">\n                  <h2>{{eachVaccination.patient}}</h2>\n                  <p>{{eachVaccination.date}}</p>\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"middle\" size=\"2\" offset-md=\"2\">\n                <ion-button\n                  *ngIf=\"eachVaccination.status.toString() === OKSTATUS\"\n                  class=\"status\"\n                  color=\"sgreen\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  Accepted\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination.status.toString() === NOPSTATUS\"\n                  class=\"status\"\n                  color=\"sred\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  Refused\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination.status.toString() === PENDSTATUS\"\n                  class=\"status\"\n                  color=\"sorange\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  Pending\n                </ion-button>\n              </ion-col>\n\n              <ion-col offset=\"3\" size=\"2\" class=\"middle\">\n                <ion-button\n                  (click)=\"openDetailModal(eachVaccination.patient)\"\n                  expand=\"block\"\n                  fill=\"clear\"\n                  shape=\"round\"\n                  routerLinkActive=\"/praticien/vaccination\"\n                >\n                  <ion-icon slot=\"icon-only\" name=\"calendar-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"eachVaccination.status.toString() === PENDSTATUS\">\n              <ion-col class=\"btn-cnfrm\">\n                <ion-button (click)=\"alert()\" expand=\"block\" color=\"sgreen\">\n                  <ion-icon\n                    slot=\"start\"\n                    name=\"checkmark-circle-outline\"\n                  ></ion-icon>\n                  <ion-label>Accept</ion-label>\n                </ion-button>\n\n                <ion-button (click)=\"alert()\" expand=\"block\" color=\"sred\">\n                  <ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n                  <ion-label>Decline</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list-header [hidden]=\"vaccinations.length != 0\">\n    No Sessions Found\n  </ion-list-header>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n    <ion-fab-button color=\"primary\" (click)=\"alert()\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n    <!-- <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"primary\" (click)=\"openSocial('Vimeo', fab)\">\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"primary\" (click)=\"openSocial('Instagram', fab)\">\n        <ion-icon name=\"logo-instagram\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"primary\" (click)=\"openSocial('Twitter', fab)\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"primary\" (click)=\"openSocial('Facebook', fab)\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list> -->\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/patient/vaccination/vaccination-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/patient/vaccination/vaccination-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: VaccinationPageRoutingModule */

    /***/
    function srcAppPagesPatientVaccinationVaccinationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinationPageRoutingModule", function () {
        return VaccinationPageRoutingModule;
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


      var _vaccination_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vaccination.page */
      "./src/app/pages/patient/vaccination/vaccination.page.ts");

      var routes = [{
        path: '',
        component: _vaccination_page__WEBPACK_IMPORTED_MODULE_3__["VaccinationPage"]
      }];

      var VaccinationPageRoutingModule = function VaccinationPageRoutingModule() {
        _classCallCheck(this, VaccinationPageRoutingModule);
      };

      VaccinationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VaccinationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/patient/vaccination/vaccination.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/patient/vaccination/vaccination.module.ts ***!
      \*****************************************************************/

    /*! exports provided: VaccinationPageModule */

    /***/
    function srcAppPagesPatientVaccinationVaccinationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinationPageModule", function () {
        return VaccinationPageModule;
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


      var _vaccination_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vaccination-routing.module */
      "./src/app/pages/patient/vaccination/vaccination-routing.module.ts");
      /* harmony import */


      var _vaccination_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vaccination.page */
      "./src/app/pages/patient/vaccination/vaccination.page.ts");

      var VaccinationPageModule = function VaccinationPageModule() {
        _classCallCheck(this, VaccinationPageModule);
      };

      VaccinationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vaccination_routing_module__WEBPACK_IMPORTED_MODULE_5__["VaccinationPageRoutingModule"]],
        declarations: [_vaccination_page__WEBPACK_IMPORTED_MODULE_6__["VaccinationPage"]]
      })], VaccinationPageModule);
      /***/
    },

    /***/
    "./src/app/pages/patient/vaccination/vaccination.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/patient/vaccination/vaccination.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPatientVaccinationVaccinationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n       * Material Design uses the ripple for activated\n       * so only style the iOS activated background\n       */\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic] ion-label.information {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 3px;\n}\n\nion-item-sliding[track=done] ion-label.information {\n  border-left: 2px solid #8e8d93;\n  padding-left: 3px;\n}\n\nion-item-sliding[track=pending] ion-label.information {\n  border-left: 2px solid #6600cc;\n  padding-left: 3px;\n}\n\n.status {\n  text-align: right;\n  width: 90px;\n}\n\n.middle {\n  display: flex;\n  align-items: center;\n}\n\n.btn-cnfrm {\n  display: flex;\n  justify-content: center;\n}\n\n.dateRapelle {\n  color: var(--ion-color-sred);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC92YWNjaW5hdGlvbi92YWNjaW5hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7RUFFQSwwQ0FBQTtBQUFGOztBQUdBOzs7UUFBQTs7QUFJQTtFQUNFLDBEQUFBO0FBQUY7O0FBV0k7RUFDRSwrQ0FBQTtFQUNBLGlCQUFBO0FBUk47O0FBTUk7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBSE47O0FBQ0k7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBRU47O0FBR0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF0aWVudC92YWNjaW5hdGlvbi92YWNjaW5hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNmZmYpO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCAjZjJmMmYyKTtcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcclxuXHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xyXG59XHJcblxyXG4vKlxyXG4gICAgICAgKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcclxuICAgICAgICogc28gb25seSBzdHlsZSB0aGUgaU9TIGFjdGl2YXRlZCBiYWNrZ3JvdW5kXHJcbiAgICAgICAqL1xyXG4uaW9zIGlvbi1mYWItYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsICNkOWQ5ZDkpO1xyXG59XHJcblxyXG4kY2F0ZWdvcmllczogKFxyXG4gIGlvbmljOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXHJcbiAgZG9uZTogIzhlOGQ5MyxcclxuICBwZW5kaW5nOiAjNjYwMGNjLFxyXG4pO1xyXG5cclxuQGVhY2ggJHRyYWNrLCAkdmFsdWUgaW4gbWFwLXJlbW92ZSgkY2F0ZWdvcmllcykge1xyXG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9XCIjeyR0cmFja31cIl0gaW9uLWxhYmVsIHtcclxuICAgICYuaW5mb3JtYXRpb24ge1xyXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR2YWx1ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWNuZnJtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0ZVJhcGVsbGUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3JlZCk7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/patient/vaccination/vaccination.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/patient/vaccination/vaccination.page.ts ***!
      \***************************************************************/

    /*! exports provided: VaccinationPage */

    /***/
    function srcAppPagesPatientVaccinationVaccinationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinationPage", function () {
        return VaccinationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/patient.service */
      "./src/app/services/patient.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_data_transformer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/data-transformer.service */
      "./src/app/services/data-transformer.service.ts");

      var VaccinationPage = /*#__PURE__*/function () {
        function VaccinationPage(patientSrv, dataTransformer, loadingCtrl) {
          _classCallCheck(this, VaccinationPage);

          this.patientSrv = patientSrv;
          this.dataTransformer = dataTransformer;
          this.loadingCtrl = loadingCtrl;
          this.dayIndex = 0;
          this.queryText = "";
          this.segment = "all";
          this.excludeTracksStates = [];
          this.excludeTracksTypes = [];
          this.shownSessions = [];
          this.vaccins = [];
          this.vaccinsShow = [];
          this.allBrute = [];
          this.vaccinsFiltered = [];
          this.OKSTATUS = "Done";
          this.PENDSTATUS = "Pending";
        }

        _createClass(VaccinationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("VaccinationPage -> ngOnInit -> ngOnInit");
            this.presentLoading();
            this.initializeItems();
          }
        }, {
          key: "filterItems",
          value: function filterItems(ev) {
            var _this = this;

            var query = ev.target.value.toLowerCase();
            requestAnimationFrame(function () {
              if (!query || query === "") {
                return;
              }

              var keys = ["vaccin"];
              _this.vaccinsFiltered = _this.dataTransformer.filterItems(query, keys, "status", _this.segment, _this.vaccinsFiltered);
            });
          }
        }, {
          key: "initializeItems",
          value: function initializeItems() {
            // this.patientSrv.getCarnetVaccinationId(3);
            this.getAllVaccin();
          }
        }, {
          key: "getAllVaccin",
          value: function getAllVaccin() {
            var _this2 = this;

            this.patientSrv.getVaccinByPatient().subscribe(function (data) {
              _this2.vaccins = data;
              _this2.vaccinsShow = _this2.dataTransformer.allData(data).data;
              _this2.vaccinsFiltered = _this2.dataTransformer.allData(data).dataByDate;

              _this2.loadingCtrl.dismiss();
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: "my-loading-class",
                        spinner: "bubbles",
                        translucent: true,
                        duration: 10000
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return VaccinationPage;
      }();

      VaccinationPage.ctorParameters = function () {
        return [{
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"]
        }, {
          type: src_app_services_data_transformer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransformerService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      VaccinationPage.propDecorators = {
        VaccinList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["VaccinList", {
            "static": true
          }]
        }]
      };
      VaccinationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-vaccination",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vaccination.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/vaccination.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vaccination.page.scss */
        "./src/app/pages/patient/vaccination/vaccination.page.scss"))["default"]]
      })], VaccinationPage);
      /***/
    },

    /***/
    "./src/app/pages/praticien/vaccination/details/details.component.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/praticien/vaccination/details/details.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPraticienVaccinationDetailsDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByYXRpY2llbi92YWNjaW5hdGlvbi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/praticien/vaccination/details/details.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/praticien/vaccination/details/details.component.ts ***!
      \**************************************************************************/

    /*! exports provided: DetailsComponent */

    /***/
    function srcAppPagesPraticienVaccinationDetailsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
        return DetailsComponent;
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

      var DetailsComponent = /*#__PURE__*/function () {
        function DetailsComponent(modalCtrl, navParms) {
          _classCallCheck(this, DetailsComponent);

          this.modalCtrl = modalCtrl;
          this.navParms = navParms;
          this.vaccinations = this.navParms.get("data");
          console.log(this.vaccinations);
        }

        _createClass(DetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss({
              dismissed: true
            });
          }
        }]);

        return DetailsComponent;
      }();

      DetailsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }];
      };

      DetailsComponent.propDecorators = {
        vaccinations: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      DetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-details",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./details.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/details/details.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./details.component.scss */
        "./src/app/pages/praticien/vaccination/details/details.component.scss"))["default"]]
      })], DetailsComponent);
      /***/
    },

    /***/
    "./src/app/pages/praticien/vaccination/vaccination-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/praticien/vaccination/vaccination-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: VaccinationPageRoutingModule */

    /***/
    function srcAppPagesPraticienVaccinationVaccinationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinationPageRoutingModule", function () {
        return VaccinationPageRoutingModule;
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


      var _vaccination_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vaccination.page */
      "./src/app/pages/praticien/vaccination/vaccination.page.ts");

      var routes = [{
        path: "",
        component: _vaccination_page__WEBPACK_IMPORTED_MODULE_3__["VaccinationPage"]
      }];

      var VaccinationPageRoutingModule = function VaccinationPageRoutingModule() {
        _classCallCheck(this, VaccinationPageRoutingModule);
      };

      VaccinationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VaccinationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/praticien/vaccination/vaccination.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/praticien/vaccination/vaccination.module.ts ***!
      \*******************************************************************/

    /*! exports provided: VaccinationPageModule */

    /***/
    function srcAppPagesPraticienVaccinationVaccinationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinationPageModule", function () {
        return VaccinationPageModule;
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


      var _vaccination_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vaccination-routing.module */
      "./src/app/pages/praticien/vaccination/vaccination-routing.module.ts");
      /* harmony import */


      var _vaccination_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vaccination.page */
      "./src/app/pages/praticien/vaccination/vaccination.page.ts");
      /* harmony import */


      var _details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./details/details.component */
      "./src/app/pages/praticien/vaccination/details/details.component.ts");

      var VaccinationPageModule = function VaccinationPageModule() {
        _classCallCheck(this, VaccinationPageModule);
      };

      VaccinationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vaccination_routing_module__WEBPACK_IMPORTED_MODULE_5__["VaccinationPageRoutingModule"]],
        declarations: [_vaccination_page__WEBPACK_IMPORTED_MODULE_6__["VaccinationPage"], _details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"]]
      })], VaccinationPageModule);
      /***/
    },

    /***/
    "./src/app/pages/praticien/vaccination/vaccination.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/praticien/vaccination/vaccination.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPraticienVaccinationVaccinationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".status {\n  text-align: right;\n  width: 90px;\n}\n\n.middle {\n  display: flex;\n  align-items: center;\n}\n\n.btn-cnfrm {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL3ZhY2NpbmF0aW9uL3ZhY2NpbmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByYXRpY2llbi92YWNjaW5hdGlvbi92YWNjaW5hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWNuZnJtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/praticien/vaccination/vaccination.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/praticien/vaccination/vaccination.page.ts ***!
      \*****************************************************************/

    /*! exports provided: VaccinationPage */

    /***/
    function srcAppPagesPraticienVaccinationVaccinationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinationPage", function () {
        return VaccinationPage;
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


      var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/praticien.service */
      "./src/app/services/praticien.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details/details.component */
      "./src/app/pages/praticien/vaccination/details/details.component.ts");

      var VaccinationPage = /*#__PURE__*/function () {
        function VaccinationPage(config, praticienSrvc, alertCtrl, loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, user) {
          _classCallCheck(this, VaccinationPage);

          this.config = config;
          this.praticienSrvc = praticienSrvc;
          this.alertCtrl = alertCtrl;
          this.loadingCtrl = loadingCtrl;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.routerOutlet = routerOutlet;
          this.toastCtrl = toastCtrl;
          this.user = user;
          this.vaccinations = [];
          this.vaccinationsShow = [];
          this.filteredVaccinations = [];
          this.segment = "all";
          this.queryText = "";
          this.OKSTATUS = "Accepted";
          this.NOPSTATUS = "Refused";
          this.PENDSTATUS = "Pending";
        }

        _createClass(VaccinationPage, [{
          key: "alert",
          value: function alert() {
            console.log("ok ++++ ");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ios = this.config.get("mode") === "ios";
            this.getListVaccinations();
          }
        }, {
          key: "getListVaccinations",
          value: function getListVaccinations() {
            var _this3 = this;

            // Close any open sliding items when the  updates
            if (this.List) {
              console.log("ConsultationPage -> update -> this.List", this.List);
              this.List.closeSlidingItems();
            } //TODO: get timeline


            this.praticienSrvc.getListsVaccinations().subscribe(function (data) {
              _this3.vaccinations = data; // Data from DB

              _this3.vaccinationsShow = _this3.praticienSrvc.regroupDataByDate(data);
              _this3.filteredVaccinations = _toConsumableArray(_this3.vaccinationsShow);
            });
          }
        }, {
          key: "openSocial",
          value: function openSocial(network, fab) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create({
                        message: "Posting to ".concat(network),
                        duration: Math.random() * 1000 + 500
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      _context2.next = 7;
                      return loading.onWillDismiss();

                    case 7:
                      fab.close();

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openDetailModal",
          value: function openDetailModal(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var newRdvModal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(id);
                      _context3.next = 3;
                      return this.modalCtrl.create({
                        component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"],
                        cssClass: "test-class",
                        swipeToClose: true,
                        componentProps: {
                          // test: "test",
                          data: this.findVaccinationRelated(id).res
                        }
                      });

                    case 3:
                      newRdvModal = _context3.sent;
                      newRdvModal.onDidDismiss().then(function () {// this.initializeItems(); //event on dismiss
                      });
                      _context3.next = 7;
                      return newRdvModal.present();

                    case 7:
                      return _context3.abrupt("return", _context3.sent);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } //TODO : change on patient ID

        }, {
          key: "findVaccinationRelated",
          value: function findVaccinationRelated(patientName) {
            var data = _toConsumableArray(this.vaccinations);

            var res = data.filter(function (element) {
              return element.patient === patientName;
            });
            return {
              data: data,
              res: res
            };
          }
        }, {
          key: "showAccepted",
          value: function showAccepted() {
            if (this.segment == "all") {
              this.filteredVaccinations = _toConsumableArray(this.vaccinationsShow);
              return;
            }

            var temp = [];
            this.filteredVaccinations = temp;

            _toConsumableArray(this.vaccinationsShow).forEach(function (item) {
              console.log("ConsultationPage -> filterItems -> item", item.groups);
              var data = [];
              item.groups.forEach(function (res) {
                console.log("ConsultationPage  *** -> filterItems -> res", res);

                if (res.status.includes("Accepted")) {
                  data.push(res);
                }
              });
              var a = {
                date: item.date,
                groups: data
              };
              temp.push(a);
            });
          } // TODO : à Optimiser

        }, {
          key: "filterItems",
          value: function filterItems(ev) {
            var _this4 = this;

            var query = ev.target.value.toLowerCase();
            requestAnimationFrame(function () {
              if (!query || query === "") {
                _this4.showAccepted();

                return;
              }

              var temp = [];
              _this4.filteredVaccinations = temp;

              _toConsumableArray(_this4.vaccinationsShow).forEach(function (item) {
                var data = [];
                item.groups.forEach(function (res) {
                  if (query && _this4.segment == "all") {
                    if (res.patient.includes(query)) {
                      data.push(res);
                    }
                  } else {
                    if (res.status === "Accepted" && res.patient.includes(query)) {
                      data.push(res);
                    }
                  }
                });
                var a = {
                  date: item.date,
                  groups: data
                };
                temp.push(a);
              });
            });
          }
        }]);

        return VaccinationPage;
      }();

      VaccinationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"]
        }, {
          type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__["PraticienService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__["PraticienService"]
        }];
      };

      VaccinationPage.propDecorators = {
        List: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["List", {
            "static": true
          }]
        }]
      };
      VaccinationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vaccination",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vaccination.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/vaccination.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vaccination.page.scss */
        "./src/app/pages/praticien/vaccination/vaccination.page.scss"))["default"]]
      })], VaccinationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=vaccination-vaccination-module-es5.js.map