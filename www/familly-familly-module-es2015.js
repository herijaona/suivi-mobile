(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["familly-familly-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/familly/familly.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/familly/familly.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Famille</ion-title>\n    <ion-searchbar\n      *ngIf=\"showSearchbar\"\n      showCancelButton=\"always\"\n      [(ngModel)]=\"queryText\"\n      (ionChange)=\"updateRdvList()\"\n      (ionCancel)=\"showSearchbar= false\"\n      placeholder=\"Rechercher\"\n    ></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar= true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!HAVE_A_MEMBER\">\n  <ion-button\n    (click)=\"showAddGroup()\"\n    expand=\"block\"\n    fill=\"clear\"\n    color=\"primary\"\n    class=\"ion-text-center\"\n  >\n    <ion-icon name=\"chevron-down-outline\" *ngIf=\"!ADD_GROUP\"></ion-icon>\n    <ion-icon name=\"chevron-up-outline\" *ngIf=\"ADD_GROUP\"></ion-icon>\n    <ion-label>\n      &nbsp;&nbsp; Créer un groupe de famille &nbsp;&nbsp;\n    </ion-label>\n    <ion-icon name=\"chevron-down-outline\" *ngIf=\"!ADD_GROUP\"></ion-icon>\n    <ion-icon name=\"chevron-up-outline\" *ngIf=\"ADD_GROUP\"></ion-icon>\n  </ion-button>\n\n  <ion-card *ngIf=\"ADD_GROUP\">\n    <form\n      [formGroup]=\"addFamilyformGroup\"\n      (ngSubmit)=\"addNewFamilyGroup(this.addFamilyformGroup.value['groupname'])\"\n    >\n      <div class=\"ion-padding\">\n        <ion-label>Group name<ion-text color=\"danger\">*</ion-text> </ion-label>\n        <ion-input\n          required\n          formControlName=\"groupname\"\n          type=\"text\"\n          class=\"border-input\"\n        >\n        </ion-input>\n      </div>\n\n      <div class=\"ion-text-center\">\n        <ion-button\n          color=\"success\"\n          type=\"submit\"\n          [disabled]=\"addFamilyformGroup.invalid\"\n        >\n          validé\n        </ion-button>\n        <ion-button color=\"sred\" (click)=\"showAddGroup()\"> Annulé </ion-button>\n      </div>\n    </form>\n  </ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"HAVE_A_MEMBER\">\n  <ion-card>\n    <ion-text color=\"primary\">\n      <h1 class=\"ion-text-left\">\n        Groupe : {{this.familyGroupe.groupe_info[0].Name}}\n      </h1>\n    </ion-text>\n  </ion-card>\n  <ion-button\n    (click)=\"showAddMember()\"\n    expand=\"block\"\n    fill=\"clear\"\n    color=\"primary\"\n    class=\"ion-text-center\"\n  >\n    <ion-icon name=\"chevron-down-outline\" *ngIf=\"!ADD_MEMBER\"></ion-icon>\n    <ion-icon name=\"chevron-up-outline\" *ngIf=\"ADD_MEMBER\"></ion-icon>\n    <ion-label>\n      &nbsp;&nbsp; AJOUTER MEMBRE DANS LE GROUPE &nbsp;&nbsp;\n    </ion-label>\n    <ion-icon name=\"chevron-down-outline\" *ngIf=\"!ADD_MEMBER\"></ion-icon>\n    <ion-icon name=\"chevron-up-outline\" *ngIf=\"ADD_MEMBER\"></ion-icon>\n  </ion-button>\n\n  <ion-card *ngIf=\"ADD_MEMBER\">\n    <form\n      [formGroup]=\"addMemberFormGroup\"\n      (ngSubmit)=\"addNewFamilyMember(this.addMemberFormGroup.value['username'])\"\n    >\n      <div class=\"ion-padding\">\n        <ion-label>Username<ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input\n          required\n          formControlName=\"username\"\n          type=\"text\"\n          class=\"border-input\"\n        >\n        </ion-input>\n      </div>\n\n      <div class=\"ion-text-center\">\n        <ion-button\n          color=\"success\"\n          type=\"submit\"\n          [disabled]=\"addMemberFormGroup.invalid\"\n        >\n          validé\n        </ion-button>\n        <ion-button color=\"sred\" (click)=\"showAddMember()\"> Annulé </ion-button>\n      </div>\n    </form>\n  </ion-card>\n  <ion-list #scheduleList>\n    <ion-item-group>\n      <ion-item-sliding #slidingItem>\n        <ion-item\n          lines=\"none\"\n          *ngFor=\"let member of\n          this.familyGroupe.groupeMember\"\n        >\n          <ion-card>\n            <ion-card-content\n              ><ion-grid>\n                <ion-row>\n                  <ion-col size=\"3\">\n                    <ion-label>\n                      <img src=\"../../../assets/images/praticien.jpg\" />\n                    </ion-label>\n                  </ion-col>\n                  <ion-col size=\"7\" class=\"information\">\n                    <h2 class=\"name\">\n                      {{member.firstName}} {{member.lastName}}\n                    </h2>\n                    <ion-label class=\"fonction\"\n                      >ID: {{member.username}}\n                    </ion-label>\n\n                    <ion-button\n                      *ngIf=\"member.Referent\"\n                      class=\"status\"\n                      color=\"sorange\"\n                      expand=\"block\"\n                      fill=\"outline\"\n                    >\n                      Réferent\n                    </ion-button>\n                    <ion-button\n                      *ngIf=\"!member.Referent\"\n                      class=\"status\"\n                      color=\"sorange\"\n                      expand=\"block\"\n                      fill=\"outline\"\n                    >\n                      Non Réferent\n                    </ion-button>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"trash\">\n                    <ion-button\n                      color=\"sred\"\n                      fill=\"clear\"\n                      class=\"ion-text-center\"\n                      (click)=\"deleteMember(member)\"\n                    >\n                      <ion-icon name=\"trash-bin-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n                <ion-row> </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/patient/familly/familly-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/patient/familly/familly-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FamillyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamillyPageRoutingModule", function() { return FamillyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _familly_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./familly.page */ "./src/app/pages/patient/familly/familly.page.ts");




const routes = [
    {
        path: '',
        component: _familly_page__WEBPACK_IMPORTED_MODULE_3__["FamillyPage"]
    }
];
let FamillyPageRoutingModule = class FamillyPageRoutingModule {
};
FamillyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FamillyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/patient/familly/familly.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/patient/familly/familly.module.ts ***!
  \*********************************************************/
/*! exports provided: FamillyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamillyPageModule", function() { return FamillyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _familly_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./familly-routing.module */ "./src/app/pages/patient/familly/familly-routing.module.ts");
/* harmony import */ var _familly_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./familly.page */ "./src/app/pages/patient/familly/familly.page.ts");







let FamillyPageModule = class FamillyPageModule {
};
FamillyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _familly_routing_module__WEBPACK_IMPORTED_MODULE_5__["FamillyPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_familly_page__WEBPACK_IMPORTED_MODULE_6__["FamillyPage"]]
    })
], FamillyPageModule);



/***/ }),

/***/ "./src/app/pages/patient/familly/familly.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/patient/familly/familly.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  flex-basis: 100%;\n  box-shadow: none !important;\n}\n\n.profile_famille {\n  width: 50%;\n  height: 50%;\n}\n\n.fonction {\n  color: var(--ion-color-primary);\n}\n\n.name {\n  font-weight: bold;\n}\n\n.topContent {\n  background-color: white;\n}\n\n.border-input {\n  border: 0.3px solid var(--ion-color-sgreen);\n  border-radius: 3px;\n  text-align: start;\n}\n\n.trash {\n  vertical-align: middle;\n}\n\n.bg {\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9mYW1pbGx5L2ZhbWlsbHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7QUFFRjs7QUFDQTtFQUNFLHNCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXRpZW50L2ZhbWlsbHkvZmFtaWxseS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9maWxlX2ZhbWlsbGUge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5mb25jdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4ubmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50b3BDb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJvcmRlci1pbnB1dCB7XHJcbiAgYm9yZGVyOiAwLjNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2dyZWVuKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcbi50cmFzaHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uYmd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuXHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/patient/familly/familly.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/patient/familly/familly.page.ts ***!
  \*******************************************************/
/*! exports provided: FamillyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamillyPage", function() { return FamillyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _global_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global.interaction */ "./src/app/pages/global.interaction.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let FamillyPage = class FamillyPage {
    constructor(patientSrvc, authSrvc, globalItem) {
        this.patientSrvc = patientSrvc;
        this.authSrvc = authSrvc;
        this.globalItem = globalItem;
        this.queryText = "";
        this.HAVE_A_MEMBER = false;
        this.ADD_GROUP = false;
        this.ADD_MEMBER = false;
    }
    showAddGroup() {
        this.ADD_GROUP = !this.ADD_GROUP;
    }
    showAddMember() {
        this.ADD_MEMBER = !this.ADD_MEMBER;
    }
    ngOnInit() {
        this.globalItem.presentLoading();
        this.getAllGroup();
        this.setupForm();
    }
    setupForm() {
        this.addMemberFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
        this.addFamilyformGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            groupname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
        });
    }
    updateRdvList() {
        if (this.List) {
            this.List.closeSlidingItems();
        }
    }
    getAllGroup() {
        this.patientSrvc.getFamily().subscribe(data => {
            // console.log("LL: FamillyPage -> getAllMyPraticians -> data", data[1])
            if (data[0][0] && data[0][0] != undefined && data[1] != []) {
                this.familyGroupe = {
                    groupe_info: data[0],
                    groupeMember: data[1]
                };
                this.HAVE_A_MEMBER = true;
            }
            else {
                this.HAVE_A_MEMBER = false;
            }
            this.globalItem.dismissLoading();
        });
    }
    createGroup() {
        // console.log("créer groupe !!! ");
    }
    deleteMember(member) {
        const { roles, username } = this.authSrvc.user;
        const _USERNAME = username;
        const CAN_I_DELETE = this.familyGroupe.groupeMember.find(({ username }) => username === _USERNAME);
        if (CAN_I_DELETE && CAN_I_DELETE.Referent == true) {
            // console.warn("attention you delete !!! ", CAN_I_DELETE.patient, "/", this.familyGroupe.groupe_info[0].ID);
            this.familyGroupe.groupeMember.find((data, index) => {
                if (data == CAN_I_DELETE) {
                    if (CAN_I_DELETE == member) {
                        // this.globalItem.presentToast("Tu ne peux pas te supprimé, tu es celui qui a créer ce groupe");
                        const MSG = `Tu veux vraiment te supprimé ?`;
                        this.globalItem.alertDelete(member.id, this, MSG, this.deleteIt);
                        return;
                    }
                    // console.log("LL: FamillyPage -> deleteMember -> CAN_I_DELETE", member);
                    // console.log("LL: FamillyPage -> deleteMember -> member", member.id);
                    const MSG = `Tu veux vraiment supprimé ${member.firstName} ?`;
                    this.globalItem.alertDelete(member.id, this, MSG, this.deleteIt);
                    return;
                }
            });
        }
    }
    deleteIt(_id, parent) {
        // console.log("LL: FamillyPage -> deleteIt -> _id", _id)
        parent.globalItem.presentLoading();
        // parent.familyGroupe.groupeMember = parent.familyGroupe.groupeMember.slice(index)
        parent.patientSrvc.deleteFamilyMember(_id).subscribe(() => {
            parent.getAllGroup();
            // this.globalItem.dismissLoading();
        });
    }
    addNewFamilyMember(data) {
        const data_to_send = {
            username: data,
            id_group: this.familyGroupe.groupe_info[0].ID
        };
        const SUCCESS = "Success";
        // console.log("LL: FamillyPage -> addNewFamilyMember -> data_to_send", data_to_send);
        this.patientSrvc.addGroupFamilyMember(data_to_send).subscribe(response => {
            // console.log("LL: FamillyPage -> addNewFamilyMember -> response", response)
            if (response == SUCCESS) {
                this.globalItem.presentLoading();
                this.getAllGroup();
            }
            this.globalItem.presentToast(response);
        });
    }
    addNewFamilyGroup(data) {
        // console.log("LL: FamillyPage -> addNewFamilyGroup -> data", data);
        this.patientSrvc.addGroupFamily(data).subscribe((response) => {
            // console.log("LL: FamillyPage -> addNewFamilyGroup -> response", response)
            this.globalItem.presentLoading();
            this.getAllGroup();
        });
    }
};
FamillyPage.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _global_interaction__WEBPACK_IMPORTED_MODULE_4__["GlobalInteraction"] }
];
FamillyPage.propDecorators = {
    List: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["List", { static: true },] }]
};
FamillyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-familly',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./familly.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/familly/familly.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./familly.page.scss */ "./src/app/pages/patient/familly/familly.page.scss")).default]
    })
], FamillyPage);



/***/ })

}]);
//# sourceMappingURL=familly-familly-module-es2015.js.map