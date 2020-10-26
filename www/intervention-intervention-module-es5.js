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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intervention-intervention-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/intervention/intervention.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/intervention/intervention.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPraticienInterventionInterventionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n\n    <ion-segment *ngIf=\"ios\" [(ngModel)]=\"segment\" (ionChange)=\"showAccepted()\">\n      <ion-segment-button value=\"all\" color=\"sgreen\"> All </ion-segment-button>\n      <ion-segment-button value=\"favorites\" color=\"sgreen\">\n        Accepté\n      </ion-segment-button>\n    </ion-segment>\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Intervention</ion-title>\n    <ion-searchbar\n      *ngIf=\"showSearchbar\"\n      showCancelButton=\"always\"\n      [(ngModel)]=\"queryText\"\n      (ionChange)=\"getIntervention()\"\n      (ionCancel)=\"showSearchbar = false\"\n      placeholder=\"Rechercher\"\n    ></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"!ios\">\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"showAccepted()\">\n      <ion-segment-button value=\"all\"> Tout </ion-segment-button>\n      <ion-segment-button value=\"accepted\"> Accépté </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Intervention</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar\n        [(ngModel)]=\"queryText\"\n        placeholder=\"Search\"\n      ></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\n    <ion-item-group *ngFor=\"let intervt of interventionFiltered\">\n      <ion-item-divider sticky>\n        <ion-label class=\"ion-text-center\"> {{ intervt.date}} </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding\n        *ngFor=\"let eachIntervention of intervt.groups\"\n        #slidingItem\n        [attr.track]=\"eachIntervention.type | lowercase\"\n      >\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"7\">\n                <ion-label class=\"information\">\n                  <h2>\n                    {{eachIntervention.patient}} -\n                    <label class=\"vaccine\">\n                      {{eachIntervention.vaccine}}\n                    </label>\n                  </h2>\n                  <p>{{eachIntervention.date}}</p>\n                  <p>{{eachIntervention.type}}</p>\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"middle\" size=\"3\">\n                <ion-button\n                  *ngIf=\"eachIntervention.status === OKSTATUS\"\n                  class=\"status\"\n                  color=\"sgreen\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  Accepted\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachIntervention.status === NOPSTATUS\"\n                  class=\"status\"\n                  color=\"sred\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  Refused\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachIntervention.status === PENDSTATUS\"\n                  class=\"status\"\n                  color=\"sorange\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  Pending\n                </ion-button>\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"eachIntervention.status === PENDSTATUS\">\n              <ion-col class=\"btn-cnfrm\">\n                <ion-button\n                  (click)=\"alertAcceptIntervention(eachIntervention.id)\"\n                  expand=\"block\"\n                  color=\"sgreen\"\n                >\n                  <ion-icon\n                    slot=\"start\"\n                    name=\"checkmark-circle-outline\"\n                  ></ion-icon>\n                  <ion-label>Accept</ion-label>\n                </ion-button>\n\n                <ion-button\n                  (click)=\"alertRemoveIntervention(eachIntervention.id)\"\n                  expand=\"block\"\n                  color=\"sred\"\n                >\n                  <ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n                  <ion-label>Decline</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list-header [hidden]=\"interventionShow.size != 0\">\n    No Sessions Found\n  </ion-list-header>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/praticien/intervention/intervention-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/praticien/intervention/intervention-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: InterventionPageRoutingModule */

    /***/
    function srcAppPagesPraticienInterventionInterventionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterventionPageRoutingModule", function () {
        return InterventionPageRoutingModule;
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


      var _intervention_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./intervention.page */
      "./src/app/pages/praticien/intervention/intervention.page.ts");

      var routes = [{
        path: '',
        component: _intervention_page__WEBPACK_IMPORTED_MODULE_3__["InterventionPage"]
      }];

      var InterventionPageRoutingModule = function InterventionPageRoutingModule() {
        _classCallCheck(this, InterventionPageRoutingModule);
      };

      InterventionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InterventionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/praticien/intervention/intervention.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/praticien/intervention/intervention.module.ts ***!
      \*********************************************************************/

    /*! exports provided: InterventionPageModule */

    /***/
    function srcAppPagesPraticienInterventionInterventionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterventionPageModule", function () {
        return InterventionPageModule;
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


      var _intervention_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./intervention-routing.module */
      "./src/app/pages/praticien/intervention/intervention-routing.module.ts");
      /* harmony import */


      var _intervention_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./intervention.page */
      "./src/app/pages/praticien/intervention/intervention.page.ts");

      var InterventionPageModule = function InterventionPageModule() {
        _classCallCheck(this, InterventionPageModule);
      };

      InterventionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _intervention_routing_module__WEBPACK_IMPORTED_MODULE_5__["InterventionPageRoutingModule"]],
        declarations: [_intervention_page__WEBPACK_IMPORTED_MODULE_6__["InterventionPage"]]
      })], InterventionPageModule);
      /***/
    },

    /***/
    "./src/app/pages/praticien/intervention/intervention.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/praticien/intervention/intervention.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPraticienInterventionInterventionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n     * Material Design uses the ripple for activated\n     * so only style the iOS activated background\n     */\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic] ion-label.information {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 3px;\n}\n\nion-item-sliding[track=communication] ion-label.information {\n  border-left: 2px solid #8e8d93;\n  padding-left: 3px;\n}\n\nion-item-sliding[track=proposition] ion-label.information {\n  border-left: 2px solid #fed035;\n  padding-left: 3px;\n}\n\nion-item-sliding[track=intervention] ion-label.information {\n  border-left: 2px solid #6600cc;\n  padding-left: 3px;\n}\n\n.status {\n  text-align: right;\n  width: 90px;\n}\n\n.middle {\n  display: flex;\n  align-items: center;\n}\n\n.btn-cnfrm {\n  display: flex;\n  justify-content: center;\n}\n\n.vaccine {\n  color: #515864;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL2ludGVydmVudGlvbi9pbnRlcnZlbnRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7RUFDQSxzREFBQTtFQUNBLHdEQUFBO0VBRUEsMENBQUE7QUFBRjs7QUFHQTs7O01BQUE7O0FBSUE7RUFDRSwwREFBQTtBQUFGOztBQVlJO0VBQ0UsK0NBQUE7RUFDQSxpQkFBQTtBQVROOztBQU9JO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQUpOOztBQUVJO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQUNOOztBQUhJO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQU1OOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL2ludGVydmVudGlvbi9pbnRlcnZlbnRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZmZmKTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2YyZjJmMik7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XHJcblxyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcclxufVxyXG5cclxuLypcclxuICAgICAqIE1hdGVyaWFsIERlc2lnbiB1c2VzIHRoZSByaXBwbGUgZm9yIGFjdGl2YXRlZFxyXG4gICAgICogc28gb25seSBzdHlsZSB0aGUgaU9TIGFjdGl2YXRlZCBiYWNrZ3JvdW5kXHJcbiAgICAgKi9cclxuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcclxufVxyXG5cclxuJGNhdGVnb3JpZXM6IChcclxuICBpb25pYzogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gIGNvbW11bmljYXRpb246ICM4ZThkOTMsXHJcbiAgcHJvcG9zaXRpb246ICNmZWQwMzUsXHJcbiAgaW50ZXJ2ZW50aW9uOiAjNjYwMGNjLFxyXG4pO1xyXG5cclxuQGVhY2ggJHRyYWNrLCAkdmFsdWUgaW4gbWFwLXJlbW92ZSgkY2F0ZWdvcmllcykge1xyXG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9XCIjeyR0cmFja31cIl0gaW9uLWxhYmVsIHtcclxuICAgICYuaW5mb3JtYXRpb24ge1xyXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR2YWx1ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWNuZnJtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udmFjY2luZSB7XHJcbiAgY29sb3I6ICM1MTU4NjQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/praticien/intervention/intervention.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/praticien/intervention/intervention.page.ts ***!
      \*******************************************************************/

    /*! exports provided: InterventionPage */

    /***/
    function srcAppPagesPraticienInterventionInterventionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterventionPage", function () {
        return InterventionPage;
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

      var InterventionPage = /*#__PURE__*/function () {
        function InterventionPage(alertCtrl, praticienSrvc, loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, config) {
          _classCallCheck(this, InterventionPage);

          this.alertCtrl = alertCtrl;
          this.praticienSrvc = praticienSrvc;
          this.loadingCtrl = loadingCtrl;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.routerOutlet = routerOutlet;
          this.toastCtrl = toastCtrl;
          this.config = config;
          this.dayIndex = 0;
          this.queryText = "";
          this.segment = "all";
          this.excludeTracks = [];
          this.shownSessions = [];
          this.intervention = [];
          this.interventionShow = [];
          this.interventionFiltered = [];
          this.OKSTATUS = "Accepted";
          this.NOPSTATUS = "Refused";
          this.PENDSTATUS = "Pending";
        }

        _createClass(InterventionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getIntervention();
            this.ios = this.config.get("mode") === "ios";
          }
        }, {
          key: "getIntervention",
          value: function getIntervention() {
            var _this = this;

            // Close any open sliding items when the  updates
            if (this.List) {
              console.log("ConsultationPage -> update -> this.List", this.List);
              this.List.closeSlidingItems();
            } //TODO: get timeline


            this.praticienSrvc.getListIntervention().subscribe(function (data) {
              _this.intervention = data; // Data from DB

              _this.interventionShow = _this.regroupData(data); // Transformed data

              _this.interventionFiltered = _toConsumableArray(_this.interventionShow); // Filtered data to show
            });
          } //TODO fileter item intervention

        }, {
          key: "regroupData",
          value: function regroupData(data) {
            var groups = data.reduce(function (groups, intervention) {
              var date = intervention.date.split("T")[0];

              if (!groups[date]) {
                groups[date] = [];
              }

              groups[date].push(intervention);
              return groups;
            }, {});
            var groupArrays = Object.keys(groups).map(function (date) {
              return {
                date: date,
                groups: groups[date]
              };
            });
            var sortedActivities = groupArrays.slice().sort(function (a, b) {
              return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
            return sortedActivities;
          }
        }, {
          key: "showAccepted",
          value: function showAccepted() {
            if (this.segment == "all") {
              this.interventionFiltered = _toConsumableArray(this.interventionShow);
              return;
            }

            var temp = [];
            this.interventionFiltered = temp;

            _toConsumableArray(this.interventionShow).forEach(function (item) {
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
          }
        }, {
          key: "alert",
          value: function alert() {
            console.log("ok ++++ ");
          }
        }, {
          key: "alertAcceptIntervention",
          value: function alertAcceptIntervention(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        cssClass: "my-custom-class",
                        header: "Accept",
                        message: "Do you really want to accept it ? ",
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
                            console.log("data accepted " + id);

                            _this2.acceptIntervention(id);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "alertRemoveIntervention",
          value: function alertRemoveIntervention(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        cssClass: "my-custom-class",
                        header: "Refuse",
                        message: "Do you really want to refuse it ? ",
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
                            console.log("data refused " + id);

                            _this3.removeIntervention(id);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // TODO:change by id // actually it s his name

        }, {
          key: "acceptIntervention",
          value: function acceptIntervention(id) {
            this.intervention.find(function (element) {
              return element.id == id;
            }).status = "Accepted";
          }
        }, {
          key: "removeIntervention",
          value: function removeIntervention(id) {
            var el = function el(test) {
              return test.id == id;
            };

            this.intervention.find(function (element) {
              return element.id == id;
            }).status = "Refused";
            var index = this.intervention.findIndex(el);
            console.log(el);
            this.intervention.slice(index);
          }
        }]);

        return InterventionPage;
      }();

      InterventionPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__["PraticienService"]
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"]
        }];
      };

      InterventionPage.propDecorators = {
        List: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["List", {
            "static": true
          }]
        }]
      };
      InterventionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-intervention",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./intervention.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/intervention/intervention.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./intervention.page.scss */
        "./src/app/pages/praticien/intervention/intervention.page.scss"))["default"]]
      })], InterventionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=intervention-intervention-module-es5.js.map