(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consultation-consultation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/consultation/consultation-filter/consultation-filter.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/consultation/consultation-filter/consultation-filter.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button *ngIf=\"ios\" (click)=\"dismiss()\">Cancel</ion-button>\n      <ion-button *ngIf=\"!ios\" (click)=\"selectAll(false)\">Reset</ion-button>\n    </ion-buttons>\n\n    <ion-title> Filtre de Consultation </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"applyFilters()\" strong>OK</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list [lines]=\"ios ? 'inset' : 'full'\">\n    <ion-list-header>Filtre</ion-list-header>\n\n    <ion-item\n      *ngFor=\"let track of tracks\"\n      [attr.track]=\"track.name | lowercase\"\n    >\n      <ion-icon *ngIf=\"ios\" slot=\"start\" color=\"medium\"></ion-icon>\n      <ion-label>{{ track.name }}</ion-label>\n      <ion-checkbox [(ngModel)]=\"track.isChecked\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer translucent=\"true\" *ngIf=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"selectAll(false)\">Déselectionné Tout</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"selectAll(true)\">Selectionné Tout</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/consultation/consultation.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/consultation/consultation.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n\n    <ion-segment *ngIf=\"ios\" [(ngModel)]=\"segment\" (ionChange)=\"showAccepted()\">\n      <ion-segment-button value=\"all\" color=\"sgreen\"> All </ion-segment-button>\n      <ion-segment-button value=\"favorites\" color=\"sgreen\">\n        Accepté\n      </ion-segment-button>\n    </ion-segment>\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Consultation</ion-title>\n    <ion-searchbar\n      *ngIf=\"showSearchbar\"\n      showCancelButton=\"always\"\n      [(ngModel)]=\"queryText\"\n      (ionChange)=\"getConsultation()\"\n      (ionCancel)=\"showSearchbar = false\"\n      placeholder=\"Rechercher\"\n    ></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button *ngIf=\"!showSearchbar\" (click)=\"filterItems($event)\">\n        <span *ngIf=\"ios\">Filter</span>\n        <span *ngIf=\"!ios\">\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n        </span>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"!ios\">\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"showAccepted()\">\n      <ion-segment-button value=\"all\"> Tout </ion-segment-button>\n      <ion-segment-button value=\"accepted\"> Accépté </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Consultation</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar\n        [(ngModel)]=\"queryText\"\n        (ionChange)=\"filterItems($event)\"\n        placeholder=\"Search\"\n      ></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\n    <ion-item-group *ngFor=\"let consult of filteredConsultation\">\n      <ion-item-divider sticky>\n        <ion-label class=\"ion-text-center\"> {{ consult.date}} </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding\n        *ngFor=\"let eachConsultation of consult.groups\"\n        #slidingItem\n        [attr.track]=\"eachConsultation.type | lowercase\"\n      >\n        <ion-item>\n          <ion-grid>\n            <ion-row (click)=\"alert()\">\n              <ion-col size=\"7\">\n                <ion-label class=\"information\">\n                  <h2>{{eachConsultation.patient}}</h2>\n                  <p>{{eachConsultation.consultationDate}}</p>\n                  <p>{{eachConsultation.type}}</p>\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"middle\" size=\"3\">\n                <ion-button\n                  *ngIf=\"eachConsultation.consultationStatus === OKSTATUS\"\n                  class=\"status\"\n                  color=\"sgreen\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  Accepted\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachConsultation.consultationStatus === NOPSTATUS\"\n                  class=\"status\"\n                  color=\"sred\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  Refused\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachConsultation.consultationStatus === PENDSTATUS\"\n                  class=\"status\"\n                  color=\"sorange\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  Pending\n                </ion-button>\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"eachConsultation.consultationStatus === PENDSTATUS\">\n              <ion-col class=\"btn-cnfrm\">\n                <ion-button (click)=\"alert()\" expand=\"block\" color=\"sgreen\">\n                  <ion-icon\n                    slot=\"start\"\n                    name=\"checkmark-circle-outline\"\n                  ></ion-icon>\n                  <ion-label>Accept</ion-label>\n                </ion-button>\n\n                <ion-button (click)=\"alert()\" expand=\"block\" color=\"sred\">\n                  <ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n                  <ion-label>Decline</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list-header [hidden]=\"consultShow.size != 0\">\n    No Sessions Found\n  </ion-list-header>\n\n  <!-- <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"share-social\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"primary\" (click)=\"openSocial('Vimeo', fab)\">\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"primary\" (click)=\"openSocial('Instagram', fab)\">\n        <ion-icon name=\"logo-instagram\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"primary\" (click)=\"openSocial('Twitter', fab)\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"primary\" (click)=\"openSocial('Facebook', fab)\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/praticien/consultation/consultation-filter/consultation-filter.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/praticien/consultation/consultation-filter/consultation-filter.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * Material Design\n */\n.md ion-toolbar ion-button {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.md ion-checkbox {\n  --background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-sgreen);\n}\n.md ion-list {\n  background: inherit;\n}\n/*\n   * iOS\n   */\n.ios ion-list-header {\n  margin-top: 10px;\n}\n.ios ion-label {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL2NvbnN1bHRhdGlvbi9jb25zdWx0YXRpb24tZmlsdGVyL2NvbnN1bHRhdGlvbi1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7QUFBRjtBQUdBOztJQUFBO0FBSUE7RUFDRSxnQkFBQTtBQURGO0FBSUE7RUFDRSwrQkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL2NvbnN1bHRhdGlvbi9jb25zdWx0YXRpb24tZmlsdGVyL2NvbnN1bHRhdGlvbi1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBNYXRlcmlhbCBEZXNpZ25cclxuICovXHJcblxyXG4ubWQgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi5tZCBpb24tY2hlY2tib3gge1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZ3JlZW4pO1xyXG59XHJcblxyXG4ubWQgaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qXHJcbiAgICogaU9TXHJcbiAgICovXHJcblxyXG4uaW9zIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmlvcyBpb24tbGFiZWwge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/praticien/consultation/consultation-filter/consultation-filter.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/praticien/consultation/consultation-filter/consultation-filter.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ConsultationFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationFilterComponent", function() { return ConsultationFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");




let ConsultationFilterComponent = class ConsultationFilterComponent {
    constructor(pratitienSrvc, // TODO : data
    config, modalCtrl, navParams) {
        this.pratitienSrvc = pratitienSrvc;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.tracks = [];
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ios = this.config.get("mode") === `ios`;
            // passed in array of track names that should be excluded (unchecked)
            const excludedTrackNames = this.navParams.get("excludedTracks");
            (yield this.pratitienSrvc.getTypeTrackConsultation()).subscribe((tracks) => {
                tracks.forEach((track) => {
                    this.tracks.push({
                        name: track.name,
                        icon: track.icon,
                        isChecked: excludedTrackNames.indexOf(track.name) === -1,
                    });
                });
            });
        });
    }
    selectAll(check) {
        // set all to checked or unchecked
        this.tracks.forEach((track) => {
            track.isChecked = check;
        });
    }
    applyFilters() {
        // Pass back a new array of track names to exclude
        const excludedTrackNames = this.tracks
            .filter((c) => !c.isChecked)
            .map((c) => c.name);
        this.dismiss(excludedTrackNames);
    }
    dismiss(data) {
        // using the injected ModalController this page
        // can "dismiss" itself and pass back data
        this.modalCtrl.dismiss(data);
    }
};
ConsultationFilterComponent.ctorParameters = () => [
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__["PraticienService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
ConsultationFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-consultation-filter",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./consultation-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/consultation/consultation-filter/consultation-filter.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./consultation-filter.component.scss */ "./src/app/pages/praticien/consultation/consultation-filter/consultation-filter.component.scss")).default]
    })
], ConsultationFilterComponent);



/***/ }),

/***/ "./src/app/pages/praticien/consultation/consultation-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/praticien/consultation/consultation-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ConsultationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationPageRoutingModule", function() { return ConsultationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _consultation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultation.page */ "./src/app/pages/praticien/consultation/consultation.page.ts");




const routes = [
    {
        path: "",
        component: _consultation_page__WEBPACK_IMPORTED_MODULE_3__["ConsultationPage"],
    },
];
let ConsultationPageRoutingModule = class ConsultationPageRoutingModule {
};
ConsultationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConsultationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/praticien/consultation/consultation.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/praticien/consultation/consultation.module.ts ***!
  \*********************************************************************/
/*! exports provided: ConsultationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationPageModule", function() { return ConsultationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _consultation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultation-routing.module */ "./src/app/pages/praticien/consultation/consultation-routing.module.ts");
/* harmony import */ var _consultation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultation.page */ "./src/app/pages/praticien/consultation/consultation.page.ts");
/* harmony import */ var _consultation_filter_consultation_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consultation-filter/consultation-filter.component */ "./src/app/pages/praticien/consultation/consultation-filter/consultation-filter.component.ts");








let ConsultationPageModule = class ConsultationPageModule {
};
ConsultationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _consultation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultationPageRoutingModule"],
        ],
        declarations: [_consultation_page__WEBPACK_IMPORTED_MODULE_6__["ConsultationPage"], _consultation_filter_consultation_filter_component__WEBPACK_IMPORTED_MODULE_7__["ConsultationFilterComponent"]],
        entryComponents: [_consultation_filter_consultation_filter_component__WEBPACK_IMPORTED_MODULE_7__["ConsultationFilterComponent"]],
    })
], ConsultationPageModule);



/***/ }),

/***/ "./src/app/pages/praticien/consultation/consultation.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/praticien/consultation/consultation.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n   * Material Design uses the ripple for activated\n   * so only style the iOS activated background\n   */\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic] ion-label.information {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 3px;\n}\n\nion-item-sliding[track=communication] ion-label.information {\n  border-left: 2px solid #8e8d93;\n  padding-left: 3px;\n}\n\nion-item-sliding[track=proposition] ion-label.information {\n  border-left: 2px solid #fed035;\n  padding-left: 3px;\n}\n\nion-item-sliding[track=consultation] ion-label.information {\n  border-left: 2px solid #6600cc;\n  padding-left: 3px;\n}\n\n.status {\n  text-align: right;\n  width: 90px;\n}\n\n.middle {\n  display: flex;\n  align-items: center;\n}\n\n.btn-cnfrm {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL2NvbnN1bHRhdGlvbi9jb25zdWx0YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7RUFDQSxzREFBQTtFQUNBLHdEQUFBO0VBRUEsMENBQUE7QUFBRjs7QUFHQTs7O0lBQUE7O0FBSUE7RUFDRSwwREFBQTtBQUFGOztBQVlJO0VBQ0UsK0NBQUE7RUFDQSxpQkFBQTtBQVROOztBQU9JO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQUpOOztBQUVJO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQUNOOztBQUhJO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQU1OOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL2NvbnN1bHRhdGlvbi9jb25zdWx0YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZmZmKTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2YyZjJmMik7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XHJcblxyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcclxufVxyXG5cclxuLypcclxuICAgKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcclxuICAgKiBzbyBvbmx5IHN0eWxlIHRoZSBpT1MgYWN0aXZhdGVkIGJhY2tncm91bmRcclxuICAgKi9cclxuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcclxufVxyXG5cclxuJGNhdGVnb3JpZXM6IChcclxuICBpb25pYzogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gIGNvbW11bmljYXRpb246ICM4ZThkOTMsXHJcbiAgcHJvcG9zaXRpb246ICNmZWQwMzUsXHJcbiAgY29uc3VsdGF0aW9uOiAjNjYwMGNjLFxyXG4pO1xyXG5cclxuQGVhY2ggJHRyYWNrLCAkdmFsdWUgaW4gbWFwLXJlbW92ZSgkY2F0ZWdvcmllcykge1xyXG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9XCIjeyR0cmFja31cIl0gaW9uLWxhYmVsIHtcclxuICAgICYuaW5mb3JtYXRpb24ge1xyXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR2YWx1ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWNuZnJtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/praticien/consultation/consultation.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/praticien/consultation/consultation.page.ts ***!
  \*******************************************************************/
/*! exports provided: ConsultationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationPage", function() { return ConsultationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");
/* harmony import */ var _consultation_filter_consultation_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultation-filter/consultation-filter.component */ "./src/app/pages/praticien/consultation/consultation-filter/consultation-filter.component.ts");






let ConsultationPage = class ConsultationPage {
    constructor(alertCtrl, praticienSrvc, // TODO : list of data
    loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, user, config) {
        this.alertCtrl = alertCtrl;
        this.praticienSrvc = praticienSrvc;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.config = config;
        this.dayIndex = 0;
        this.queryText = "";
        this.segment = "all";
        this.excludeTracks = [];
        this.shownSessions = [];
        this.consulations = [];
        this.consultShow = [];
        this.filteredConsultation = [];
        this.OKSTATUS = "Accepted";
        this.NOPSTATUS = "Refused";
        this.PENDSTATUS = "Pending";
    }
    ngOnInit() {
        this.getConsultation();
        this.ios = this.config.get("mode") === "ios";
    }
    showAccepted() {
        if (this.segment == "all") {
            this.filteredConsultation = [...this.consultShow];
            return;
        }
        let temp = [];
        this.filteredConsultation = temp;
        [...this.consultShow].forEach((item) => {
            console.log("ConsultationPage -> filterItems -> item", item.groups);
            let data = [];
            item.groups.forEach((res) => {
                console.log("ConsultationPage  *** -> filterItems -> res", res);
                if (res.consultationStatus.includes("Accepted")) {
                    data.push(res);
                }
            });
            const a = {
                date: item.date,
                groups: data,
            };
            temp.push(a);
        });
    }
    getConsultation() {
        // Close any open sliding items when the  updates
        if (this.List) {
            console.log("ConsultationPage -> update -> this.List", this.List);
            this.List.closeSlidingItems();
        }
        //TODO: get timeline
        this.praticienSrvc.getListConsultation().subscribe((data) => {
            this.consulations = data; // Data from DB
            this.consultShow = this.regroupData(data); // Transformed data
            this.filteredConsultation = [...this.consultShow]; // Filtered data to show
        });
    }
    regroupData(data) {
        const groups = data.reduce((groups, consultations) => {
            /* console.log(
              "ConsultationPage -> regroupData -> consultationDate",
              consultations
            ); */
            const date = consultations.consultationDate.split("T")[0];
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(consultations);
            return groups;
        }, {});
        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                groups: groups[date],
            };
        });
        const sortedActivities = groupArrays.slice().sort(function (a, b) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        return sortedActivities;
    }
    // TODO : à Optimiser
    filterItems(ev) {
        const query = ev.target.value.toLowerCase();
        requestAnimationFrame(() => {
            if (!query || query === "") {
                this.showAccepted();
                return;
            }
            let temp = [];
            this.filteredConsultation = temp;
            [...this.consultShow].forEach((item) => {
                console.log("ConsultationPage -> filterItems -> item", item.groups);
                let data = [];
                item.groups.forEach((res) => {
                    console.log("ConsultationPage  *** -> filterItems -> res", res);
                    if (query && this.segment == "all") {
                        if (res.type.includes(query) ||
                            res.consultationObjet.includes(query) ||
                            res.patient.includes(query)) {
                            console.log("ConsultationPage -> filterItems -> res", res);
                            data.push(res);
                        }
                    }
                    else {
                        if (res.consultationStatus === "Accepted" &&
                            (res.type.includes(query) ||
                                res.consultationObjet.includes(query) ||
                                res.patient.includes(query))) {
                            console.log("ConsultationPage -> filterItems -> res", res);
                            data.push(res);
                        }
                    }
                });
                const a = {
                    date: item.date,
                    groups: data,
                };
                temp.push(a);
            });
        });
    }
    alert() {
        console.log("ok ++++ ");
    }
    presentFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _consultation_filter_consultation_filter_component__WEBPACK_IMPORTED_MODULE_5__["ConsultationFilterComponent"],
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
                componentProps: { excludedTracks: this.excludeTracks },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.excludeTracks = data;
                this.getConsultation();
            }
        });
    }
    openSocial(network, fab) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: `Posting to ${network}`,
                duration: Math.random() * 1000 + 500,
            });
            yield loading.present();
            yield loading.onWillDismiss();
            fab.close();
        });
    }
};
ConsultationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_4__["PraticienService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_4__["PraticienService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"] }
];
ConsultationPage.propDecorators = {
    List: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["List", { static: true },] }]
};
ConsultationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-consultation",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./consultation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/consultation/consultation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./consultation.page.scss */ "./src/app/pages/praticien/consultation/consultation.page.scss")).default]
    })
], ConsultationPage);



/***/ })

}]);
//# sourceMappingURL=consultation-consultation-module-es2015.js.map