(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["praticien-praticien-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/praticien/praticien.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/praticien/praticien.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <span *ngIf=\"praticienRegisterForm.valid; then myUserName()\"></span>\n    <ion-title slot=\"start\">Praticien</ion-title>\n    <ion-title slot=\"end\" color=\"tertiary\" class=\"identifiant\"\n      >{{_id}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"topContent\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">\n        <img\n          src=\"../../../../assets/images/logo_matipla.png\"\n          srcset=\"\"\n          width=\"150px\"\n          class=\"mb-2\"\n        />\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</div>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form [formGroup]=\"praticienRegisterForm\">\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Nom</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"last_name\"\n          ></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.last_name\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienRegisterForm.get('last_name').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Prénom</ion-label>\n          <ion-input\n            type=\"text\"\n            required\n            formControlName=\"first_name\"\n          ></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.first_name\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienRegisterForm.get('first_name').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Date de naissance</ion-label>\n          <ion-datetime\n            display-format=\"MMM DD, YYYY\"\n            formControlName=\"date_on_born\"\n            required\n          ></ion-datetime>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.date_on_born\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienRegisterForm.get('date_on_born').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Sexe</ion-label>\n          <ion-select placeholder=\"Select\" formControlName=\"sexe\" required>\n            <ion-select-option>Masculin</ion-select-option>\n            <ion-select-option>Feminin</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.sexe\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienRegisterForm.get('sexe').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\" [disabled]=\"!this.functions\">\n          <ion-label position=\"stacked\">Function</ion-label>\n          <ion-select placeholder=\"Select\" formControlName=\"function\" required>\n            <ng-container *ngFor=\"let item of this.functions\">\n              <ion-select-option value=\"{{item.id}}\"\n                >{{item.NomFonction}}</ion-select-option\n              >\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.function\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienRegisterForm.get('function').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\" [disabled]=\"!this.country\">\n          <ion-label position=\"stacked\">Pays</ion-label>\n          <ion-select\n            placeholder=\"Select\"\n            formControlName=\"state\"\n            required\n            (ionChange)=\"getCityByCountry(this.praticienRegisterForm.value['state'])\"\n          >\n            <ng-container *ngFor=\"let item of country\">\n              <ion-select-option value=\"{{item.id}}\"\n                >{{item.nameState}}</ion-select-option\n              >\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.state\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienRegisterForm.get('state').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\" [disabled]=\"!this.city\">\n          <ion-label position=\"stacked\">Ville</ion-label>\n          <ion-select placeholder=\"Select\" formControlName=\"city\" required>\n            <ng-container *ngFor=\"let item of this.city\">\n              <ion-select-option value=\"{{item.id}}\"\n                >{{item.nameCity}}</ion-select-option\n              >\n            </ng-container>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.city\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienRegisterForm.get('city').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input type=\"text\" required formControlName=\"email\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.email\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienRegisterForm.get('email').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Adresse</ion-label>\n          <ion-textarea required formControlName=\"address\"></ion-textarea>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.address\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienRegisterForm.get('address').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Télephone</ion-label>\n          <ion-input type=\"text\" required formControlName=\"phone\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.phone\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienRegisterForm.get('phone').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item lines=\"full\">\n          <ion-label position=\"stacked\">Password</ion-label>\n          <ion-input\n            type=\"password\"\n            required\n            formControlName=\"password\"\n          ></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_msg.password\">\n            <div\n              class=\"error-message\"\n              *ngIf=\"praticienRegisterForm.get('password').hasError(validation.type)\"\n            >\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-row>\n          <ion-col>\n            <ion-button\n              type=\"submit\"\n              color=\"sgreen \"\n              expand=\"block\"\n              (click)=\"register()\"\n              [disabled]=\"!praticienRegisterForm.valid\"\n              >Sign Up</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/register/praticien/praticien-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/register/praticien/praticien-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PraticienPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PraticienPageRoutingModule", function() { return PraticienPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _praticien_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./praticien.page */ "./src/app/pages/register/praticien/praticien.page.ts");




const routes = [
    {
        path: '',
        component: _praticien_page__WEBPACK_IMPORTED_MODULE_3__["PraticienPage"]
    }
];
let PraticienPageRoutingModule = class PraticienPageRoutingModule {
};
PraticienPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PraticienPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register/praticien/praticien.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/register/praticien/praticien.module.ts ***!
  \**************************************************************/
/*! exports provided: PraticienPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PraticienPageModule", function() { return PraticienPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _praticien_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./praticien-routing.module */ "./src/app/pages/register/praticien/praticien-routing.module.ts");
/* harmony import */ var _praticien_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./praticien.page */ "./src/app/pages/register/praticien/praticien.page.ts");







let PraticienPageModule = class PraticienPageModule {
};
PraticienPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _praticien_routing_module__WEBPACK_IMPORTED_MODULE_5__["PraticienPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_praticien_page__WEBPACK_IMPORTED_MODULE_6__["PraticienPage"]],
    })
], PraticienPageModule);



/***/ }),

/***/ "./src/app/pages/register/praticien/praticien.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/register/praticien/praticien.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  box-shadow: none !important;\n}\n\n.identifiant {\n  font-style: italic;\n  font-size: medium;\n  color: var(--ion-color-sred);\n  padding-right: 30px;\n  font-size: 18px;\n}\n\n.topContent {\n  background-color: white;\n}\n\n.validation-errors {\n  color: red;\n  font-size: 10px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcHJhdGljaWVuL3ByYXRpY2llbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSx1QkFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcHJhdGljaWVuL3ByYXRpY2llbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5pZGVudGlmaWFudCB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3JlZCk7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnRvcENvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udmFsaWRhdGlvbi1lcnJvcnMge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/register/praticien/praticien.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/register/praticien/praticien.page.ts ***!
  \************************************************************/
/*! exports provided: PraticienPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PraticienPage", function() { return PraticienPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global-data.service */ "./src/app/services/global-data.service.ts");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");






let PraticienPage = class PraticienPage {
    constructor(praticienSrv, globalSrvc, navCtrl) {
        this.praticienSrv = praticienSrv;
        this.globalSrvc = globalSrvc;
        this.navCtrl = navCtrl;
        this.IDENTIFIANT = "Identifiant";
        this._id = this.IDENTIFIANT;
        this.validRegister = false;
        this.ROLE = "ROLE_PRATICIEN";
        this.validation_msg = {
            first_name: [{ type: "required", message: "Prénom obligatoire" }],
            last_name: [{ type: "required", message: "Nom obligatoire" }],
            date_on_born: [
                { type: "required", message: "Date de naissance obligatoire" },
            ],
            state: [{ type: "required", message: "Pays obligatoire" }],
            city: [{ type: "required", message: "Selectionner un pays , Ville obligatoire" }],
            sexe: [{ type: "required", message: "Sexe obligatoire" }],
            address: [{ type: "required", message: "Adresse obligatoire" }],
            email: [{ type: "required", message: "Email obligatoire" }],
            password: [{ type: "required", message: "Mot de passe obligatoire" }],
            function: [{ type: "required", message: "fonction obligatoire" }],
            phone: [{ type: "required", message: "Phone obligatoire" }],
            father_name: [{ type: "required", message: "Nom du père obligatoire" }],
            mother_name: [{ type: "required", message: "Nom de la mère obligatoire" }],
        };
        this.initializeData();
    }
    ngOnInit() {
    }
    initializeData() {
        this.createForm();
        this.globalSrvc.getCountry().subscribe((data) => this.country = data);
        this.praticienSrv.getPraticienFunctions().subscribe((data) => {
            this.functions = data;
        });
    }
    createForm() {
        this.praticienRegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            date_on_born: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sexe: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            function: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    register() {
        // console.log("register");
        if (this.praticienRegisterForm.valid) {
            Object.keys(this.praticienRegisterForm.value).forEach((key) => {
                // console.log("valid", this.praticienRegisterForm.value[key]);
            });
            const dataRegister = {
                first_name: this.praticienRegisterForm.value['first_name'],
                last_name: this.praticienRegisterForm.value['last_name'],
                date_born: this.praticienRegisterForm.value['date_on_born'],
                state: this.praticienRegisterForm.value['state'],
                city: this.praticienRegisterForm.value['city'],
                sexe: this.praticienRegisterForm.value['sexe'],
                fonction: this.praticienRegisterForm.value['function'],
                address: this.praticienRegisterForm.value['address'],
                email: this.praticienRegisterForm.value['email'],
                password: this.praticienRegisterForm.value['password'],
                phone: this.praticienRegisterForm.value['phone'],
                roles: this.ROLE,
                username: this._id,
            };
            this.praticienSrv.registerPraticien(dataRegister).subscribe(data => {
                if (data) {
                    // console.log("PraticienPage -> register -> data", data)
                    this.navCtrl.navigateRoot('/login');
                }
            });
        }
        else {
            // console.log("NOT valid", this.praticienRegisterForm);
        }
    }
    getRndInt(min = 10000, max = 100000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    myUserName() {
        if (!this.praticienRegisterForm.valid || this._id != this.IDENTIFIANT) {
            return;
        }
        if (this.praticienRegisterForm.value['date_on_born'] != '' && this.praticienRegisterForm.value['sexe'] != '') {
            this._id = this.createUsername(this.praticienRegisterForm.value['date_on_born'], this.praticienRegisterForm.value['sexe']);
        }
    }
    createUsername(birth, gender) {
        const birthday = new Date(birth);
        // console.log("PatientPage -> createUsername -> birthday", birthday)
        const sexe = gender.substring(0, 1);
        let mois = "00";
        let jour = "00";
        let annee = "0000";
        let datChoice = birthday.toString().split("/");
        mois = birthday.getMonth().toString().substring(0, 1);
        // console.log("PatientPage -> createUsername -> mois", mois)
        annee = birthday.getFullYear().toString().substring(1, 2);
        // annee = birthday.getFullYear()[2];
        // console.log("PatientPage -> createUsername -> annee", annee)
        jour = birthday.getDay().toString().substring(0, 1);
        // jour = birthday.getDay()[0]
        // console.log("PatientPage -> createUsername -> jour", jour)
        const username = sexe + annee + mois + jour + this.getRndInt();
        // console.log("PatientPage -> createUsername -> username", username)
        return username;
    }
    getCityByCountry(id) {
        this.globalSrvc.getCity(id).subscribe((data) => this.city = data);
    }
};
PraticienPage.ctorParameters = () => [
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_5__["PraticienService"] },
    { type: src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_4__["GlobalDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
PraticienPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-praticien",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./praticien.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/praticien/praticien.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./praticien.page.scss */ "./src/app/pages/register/praticien/praticien.page.scss")).default]
    })
], PraticienPage);



/***/ }),

/***/ "./src/app/services/global-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/global-data.service.ts ***!
  \*************************************************/
/*! exports provided: GlobalDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalDataService", function() { return GlobalDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let GlobalDataService = class GlobalDataService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url_dev;
        this.url_api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url_dev_api;
    }
    getCountry() {
        const res = this.http.get(this.url_api + "country");
        res.subscribe(data => {
            // console.log("GlobalDataService -> getCountry -> data", data)
        });
        return res;
    }
    getCity(id) {
        const res = this.http.get(this.url_api + `city?id=${id}`);
        // console.log("GlobalDataService -> constructor -> this.url_api + `city?id=${id}`", this.url_api + `city?id=${id}`)
        res.subscribe(data => {
            // console.log("GlobalDataService -> getCity -> data", data)
        });
        return res;
    }
    getCountryByPratictitionerFunction(_idPractitionerFunction) {
        const res = this.http.post(`${this.url_api}country/fonction`, { id_fonction: _idPractitionerFunction });
        return res;
    }
    getCityByPractitionerFunctionAndCountry(_idPractitionerFunction, _idCountry) {
        const res = this.http.post(`${this.url_api}city/fonction`, { id_fonction: _idPractitionerFunction, id_country: _idCountry });
        return res;
    }
    getPractitionerByFunctionCountryAndCity(_idPractitionerFunction, _idCountry, _idCity) {
        const res = this.http.post(`${this.url_api}praticien/fonction`, { id_fonction: _idPractitionerFunction, id_country: _idCountry, id_city: _idCity });
        return res;
    }
    getCenterHealthByCity(_idCity) {
        const res = this.http.post(`${this.url_api}praticien/centre`, { id: _idCity });
        return res;
    }
    getPraticienByCenter(_idCenter) {
        const res = this.http.post(`${this.url_api}centre/praticien`, { id: _idCenter });
        return res;
    }
};
GlobalDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
GlobalDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], GlobalDataService);



/***/ })

}]);
//# sourceMappingURL=praticien-praticien-module-es2015.js.map