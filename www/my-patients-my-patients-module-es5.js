(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-patients-my-patients-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/my-patients/my-patients.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/my-patients/my-patients.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPraticienMyPatientsMyPatientsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>my-patients</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/praticien/my-patients/my-patients-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/praticien/my-patients/my-patients-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: MyPatientsPageRoutingModule */

    /***/
    function srcAppPagesPraticienMyPatientsMyPatientsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyPatientsPageRoutingModule", function () {
        return MyPatientsPageRoutingModule;
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


      var _my_patients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-patients.page */
      "./src/app/pages/praticien/my-patients/my-patients.page.ts");

      var routes = [{
        path: '',
        component: _my_patients_page__WEBPACK_IMPORTED_MODULE_3__["MyPatientsPage"]
      }];

      var MyPatientsPageRoutingModule = function MyPatientsPageRoutingModule() {
        _classCallCheck(this, MyPatientsPageRoutingModule);
      };

      MyPatientsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyPatientsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/praticien/my-patients/my-patients.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/praticien/my-patients/my-patients.module.ts ***!
      \*******************************************************************/

    /*! exports provided: MyPatientsPageModule */

    /***/
    function srcAppPagesPraticienMyPatientsMyPatientsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyPatientsPageModule", function () {
        return MyPatientsPageModule;
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


      var _my_patients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-patients-routing.module */
      "./src/app/pages/praticien/my-patients/my-patients-routing.module.ts");
      /* harmony import */


      var _my_patients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-patients.page */
      "./src/app/pages/praticien/my-patients/my-patients.page.ts");

      var MyPatientsPageModule = function MyPatientsPageModule() {
        _classCallCheck(this, MyPatientsPageModule);
      };

      MyPatientsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_patients_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyPatientsPageRoutingModule"]],
        declarations: [_my_patients_page__WEBPACK_IMPORTED_MODULE_6__["MyPatientsPage"]]
      })], MyPatientsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/praticien/my-patients/my-patients.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/praticien/my-patients/my-patients.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPraticienMyPatientsMyPatientsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByYXRpY2llbi9teS1wYXRpZW50cy9teS1wYXRpZW50cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/praticien/my-patients/my-patients.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/praticien/my-patients/my-patients.page.ts ***!
      \*****************************************************************/

    /*! exports provided: MyPatientsPage */

    /***/
    function srcAppPagesPraticienMyPatientsMyPatientsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyPatientsPage", function () {
        return MyPatientsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MyPatientsPage = /*#__PURE__*/function () {
        function MyPatientsPage() {
          _classCallCheck(this, MyPatientsPage);
        }

        _createClass(MyPatientsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MyPatientsPage;
      }();

      MyPatientsPage.ctorParameters = function () {
        return [];
      };

      MyPatientsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-patients',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-patients.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/my-patients/my-patients.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-patients.page.scss */
        "./src/app/pages/praticien/my-patients/my-patients.page.scss"))["default"]]
      })], MyPatientsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=my-patients-my-patients-module-es5.js.map