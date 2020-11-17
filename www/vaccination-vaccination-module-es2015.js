(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vaccination-vaccination-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/generate/generate.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/generate/generate.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Planification de vaccination</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-grid fixed>\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title> </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <form\n            [formGroup]=\"propositionForm\"\n            method=\"post\"\n            (ngSubmit)=\"\n              postVaccinGeneration(this.propositionForm.value['praticien'])\n            \"\n          >\n            <div class=\"mb-14\">\n              <label>Choisir pays</label>\n              <ion-select\n                placeholder=\"Select\"\n                formControlName=\"country\"\n                required\n                [disabled]=\"!this.countries\"\n                (ionChange)=\"\n                  getCityByCountry(this.propositionForm.value['country'])\n                \"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of countries\"\n                  [value]=\"item.id\"\n                  >{{ item.nameState }}</ion-select-option\n                >\n              </ion-select>\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Choisir ville</label>\n              <ion-select\n                placeholder=\"Select\"\n                formControlName=\"city\"\n                required\n                [disabled]=\"!this.cities\"\n                (ionChange)=\"\n                  getCenterByCity(this.propositionForm.value['city'])\n                \"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of cities\"\n                  [value]=\"item.id\"\n                  >{{ item.nameCity }}</ion-select-option\n                >\n              </ion-select>\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Centre</label>\n              <ion-select\n                placeholder=\"Select\"\n                formControlName=\"center_health\"\n                required\n                (ionChange)=\"\n                  getPraticienByCenter(\n                    this.propositionForm.value['center_health']\n                  )\n                \"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of center_health\"\n                  [value]=\"item.id\"\n                  >{{ item.centreName }}</ion-select-option\n                >\n              </ion-select>\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Choisir praticien</label>\n              <ion-select\n                placeholder=\"Select\"\n                formControlName=\"praticien\"\n                [disabled]=\"!this.praticiens\"\n                required\n              >\n                <ion-select-option\n                  *ngFor=\"let item of praticiens\"\n                  [value]=\"item.id\"\n                  >{{\n                    item.firstName.toString() + ' ' + item.lastName.toString()\n                  }}</ion-select-option\n                >\n              </ion-select>\n            </div>\n            <!-- <div class=\"mb-14\">\n              <label>Type de rendez-vous</label>\n              <ion-select formControlName=\"typeRdv\" required>\n                <ion-select-option value=\"consultation\"\n                  >Consultation</ion-select-option\n                >\n                <ion-select-option value=\"intervention\"\n                  >Intervention</ion-select-option\n                >\n              </ion-select>\n            </div>\n            <div class=\"mb-14\">\n              <label>Objet </label>\n              <ion-input\n                type=\"text\"\n                required\n                formControlName=\"description\"\n              ></ion-input>\n            </div> -->\n            <!-- <div *ngIf=\"after_praticien_choice\" class=\"checkBox\"> -->\n            <div *ngIf=\"after_praticien_choice\" class=\"checkBox\">\n              <div class=\"mb-14\" *ngIf=\"showCheckBoxAssoc == false\">\n                <ion-item class=\"status\" fill=\"outline\" lines=\"none\">\n                  <ion-checkbox\n                    formControlName=\"chekcboxAssoc\"\n                    value\n                  ></ion-checkbox>\n                  &nbsp;&nbsp;\n                  <label>choisir comme associé ?</label>\n                </ion-item>\n              </div>\n              <div *ngIf=\"showCheckBoxAssoc == true\">\n                <ion-button\n                  class=\"status\"\n                  color=\"sgreen\"\n                  fill=\"outline\"\n                  expand=\"block\"\n                  slot=\"end\"\n                >\n                  Praticien associé\n                </ion-button>\n              </div>\n            </div>\n\n            <!-- <div class=\"mb-14\">\n              <label>Propose une date </label>\n              <ion-datetime\n                display-format=\"MMM DD, YYYY\"\n                formControlName=\"dateRdv\"\n                required\n              ></ion-datetime>\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Propose un horaire</label>\n              <ion-datetime\n                display-format=\"h:mm A\"\n                picker-format=\"h:mm A\"\n                formControlName=\"heureRdv\"\n                required\n              ></ion-datetime>\n            </div> -->\n\n            <ion-row>\n              <ion-col>\n                <ion-button color=\"sred\" expand=\"block\" (click)=\"dismiss()\">\n                  <ion-icon slot=\"start\" name=\"\"> x </ion-icon\n                  >Cancel</ion-button\n                >\n                <legend class=\"ion-text-center\"></legend>\n                <ion-button type=\"submit\" color=\"sgreen\" expand=\"block\"\n                  ><ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n                  Save\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/intervention/intervention.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/intervention/intervention.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title\n      >Intervention pour le vaccin {{ this.carnet.nomVaccin }}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-grid fixed>\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title\n            ><ion-text color=\"sred\">\n              {{ this.carnet.date_prise.date | date: 'MMM dd, yyyy' }}\n            </ion-text>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <form\n            [formGroup]=\"propositionForm\"\n            (ngSubmit)=\"intervention(this.propositionForm.value['praticien'])\"\n            method=\"post\"\n          >\n            <div class=\"mb-14\">\n              <label>choisi un praticien</label>\n              <ion-select\n                placeholder=\"Select\"\n                formControlName=\"praticien\"\n                required\n              >\n                <ion-select-option\n                  *ngFor=\"let item of praticiens\"\n                  [value]=\"item.id\"\n                  >{{\n                    item.firstName.toString() + ' ' + item.lastName.toString()\n                  }}</ion-select-option\n                >\n              </ion-select>\n            </div>\n\n            <ion-row>\n              <ion-col>\n                <ion-button color=\"sred\" expand=\"block\" (click)=\"closeModal()\">\n                  <ion-icon slot=\"start\" name=\"\"> x </ion-icon\n                  >Cancel</ion-button\n                >\n                <legend class=\"ion-text-center\"></legend>\n                <ion-button type=\"submit\" color=\"sgreen\" expand=\"block\"\n                  ><ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n                  Save\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/vaccination.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/vaccination.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translutient=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-title *ngIf=\"!ios && !showSearchbar\">Vaccination</ion-title>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\" slot=\"start\"></ion-menu-button>\n    <ion-title *ngIf=\"ios\">Vaccination</ion-title>\n\n    <ion-searchbar\n      (ionInput)=\"filterItems($event)\"\n      debounce=\"500\"\n      placeholder=\"Rechercher\"\n      type=\"text\"\n      showCancelButton=\"always\"\n      *ngIf=\"showSearchbar\"\n      (ionCancel)=\"showSearchbar= false\"\n    ></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar= true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"ios\">\n    <ion-searchbar\n      (ionInput)=\"filterItems($event)\"\n      debounce=\"500\"\n      placeholder=\"Rechercher\"\n      type=\"text\"\n      (ionCancel)=\"showSearchbar= false\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"vaccinsFiltered.length==0\">\n    <ion-button\n      (click)=\"openGenerateVaccModal()\"\n      expand=\"block\"\n      fill=\"clear\"\n      shape=\"round\"\n    >\n      Generate Carnet\n    </ion-button>\n  </div>\n\n  <ion-list #VaccinList>\n    <ion-item-group *ngFor=\"let vacc of vaccinsFiltered\">\n      <ion-item-divider sticky>\n        <ion-label slot=\"start\">\n          {{ vacc.date | date:\"MMM dd, yyyy\"}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding\n        *ngFor=\"let eachVaccination of vacc.groups\"\n        [attr.track]=\"this.checkStatus(eachVaccination.status,\n        eachVaccination.etat) | lowercase\"\n        #slidingItem\n      >\n        <ion-item *ngIf=\"eachVaccination.show === true\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label class=\"information\">\n                  <ion-row>\n                    <ion-col size=\"7\">\n                      <h2 class=\"makeBoldAndLarge\">\n                        {{eachVaccination.vaccinName}}\n                      </h2>\n                      <!-- <h3>\n                        {{eachVaccination.date_prise.date | date:\"MMM dd yyyy\"}}\n                      </h3> -->\n                      <h3 *ngIf=\"eachVaccination.Lot == null\">\n                        Lot :\n                        <span> Lot {{eachVaccination.Lot}}</span>\n                      </h3>\n                    </ion-col>\n                    <ion-col class=\"middle\" size=\"2\" offset-md=\"2\">\n                      <ion-button\n                        *ngIf=\"this.checkStatus(eachVaccination.status,\n                        eachVaccination.etat) === this.OKSTATUS\"\n                        class=\"status\"\n                        color=\"sgreen\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                      >\n                        REALISE\n                      </ion-button>\n\n                      <ion-button\n                        *ngIf=\"this.checkStatus(eachVaccination.status,\n                        eachVaccination.etat) === this.PENDINGSTATUS\"\n                        class=\"status\"\n                        color=\"sorange\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                      >\n                        EN ATTENTE\n                      </ion-button>\n\n                      <ion-button\n                        *ngIf=\"this.checkStatus(eachVaccination.status,\n                        eachVaccination.etat) === this.PLANIFIED\"\n                        class=\"status\"\n                        color=\"tertiary\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                      >\n                        PLANIFIER\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                  <!-- Vaccinateur -->\n                  <ion-row\n                    *ngIf=\"eachVaccination.vaccinateur_nom == null &&\n                    eachVaccination.vaccinateur_prenom == null\"\n                  >\n                    <br />\n\n                    <ion-col size=\"12\">\n                      Vaccinateur :\n                      <p>\n                        Nom\n                        <span class=\"vaccinateur\">\n                          {{eachVaccination.vaccinateur_nom}} nom\n                        </span>\n                      </p>\n                      <p>\n                        Prenom :\n                        <span class=\"vaccinateur\">\n                          {{eachVaccination.vaccinateur_prenom}} prenom</span\n                        >\n                      </p>\n\n                      <p>\n                        Numero proféssionnel :\n                        <span class=\"vaccinateur\">\n                          {{eachVaccination.NumeroProfessionnel}}\n                          +33030039289</span\n                        >\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <p *ngIf=\"eachVaccination.identification == null\">\n                        Type de vaccin :\n                        <span>\n                          {{eachVaccination.identification}}IDENTIFICATION</span\n                        >\n                      </p>\n                      <p *ngIf=\"eachVaccination.identifiant_vaccin== null\">\n                        Identifiant vaccin :\n                        <span>\n                          {{eachVaccination.identifiant_vaccin}}VACC_TYPE</span\n                        >\n                      </p>\n                      <p>\n                        Date de prise :\n                        <span class=\"dateRapelle\">\n                          {{eachVaccination.date_prise.date|date:\"MMM-dd-yyyy\"\n                          }}</span\n                        >\n                      </p>\n                    </ion-col>\n                  </ion-row>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row\n              *ngIf=\"this.checkStatus(eachVaccination.status,\n              eachVaccination.etat) ===this.PENDINGSTATUS\"\n            >\n              <ion-col class=\"btn-cnfrm\">\n                <ion-button\n                  expand=\"block\"\n                  color=\"sgreen\"\n                  (click)=\"openNewRdvModal(eachVaccination)\"\n                >\n                  <ion-icon\n                    slot=\"start\"\n                    name=\"checkmark-circle-outline\"\n                  ></ion-icon>\n                  <ion-label>INTERVENTION</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/details/details.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/details/details.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"dismiss()\" fill=\"clear\" slot=\"start\">\n      <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-title>Details </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor=\"let item of vaccinations\">\n    <ion-card-header>\n      {{ vaccinations[0].firstName }} {{ vaccinations[0].lastName }}\n    </ion-card-header>\n\n    <ion-card-content *ngIf=\"this.isWithNoteBook == false\">\n      <ion-item lines=\"none\">\n        <ion-text color=\"primary\">\n          <h3>Vaccin : {{ item.vaccinName }}</h3>\n        </ion-text>\n\n        <ion-text color=\"sgreen\" slot=\"end\">\n          <h5 *ngIf=\"item.identification != null\">\n            &nbsp;( {{ item.identification }} )\n          </h5>\n        </ion-text>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-text color=\"sred\">\n          <h5 *ngIf=\"item.identification != null\">\n            &nbsp; {{ item.identifiant_vaccin }}\n          </h5>\n        </ion-text>\n      </ion-item>\n      <ion-item lines=\"none\">\n        date de prise : {{ item.date_prise.date | date: 'MMM-dd-yyyy' }}\n      </ion-item>\n    </ion-card-content>\n\n    <ion-card-content *ngIf=\"this.isWithNoteBook == true\">\n      <ion-item lines=\"none\">\n        <ion-text color=\"primary\">\n          <h3>Vaccin : {{ item.vaccinName }}</h3>\n        </ion-text>\n\n        <ion-text color=\"sgreen\" slot=\"end\">\n          <h5 *ngIf=\"item.identification != null\">\n            &nbsp;( {{ item.identification }} )\n          </h5>\n        </ion-text>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        date de prise : {{ item.datePriseVaccin.date | date: 'MMM-dd-yyyy' }}\n      </ion-item>\n    </ion-card-content>\n    <!-- <ion-row>\n      <ion-col>\n        <button>\n          <ion-icon name=\"open\"></ion-icon>\n          <div>Open Link</div>\n        </button>\n      </ion-col>\n    </ion-row> -->\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/organize/organize.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/organize/organize.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Intervention</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-grid fixed>\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title><ion-text color=\"sred\"> </ion-text> </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <form\n            [formGroup]=\"organizeForm\"\n            method=\"post\"\n            (ngSubmit)=\"organise()\"\n          >\n            <div class=\"mb-14\" *ngIf=\"this.dateT\">\n              <label>Propose une date </label>\n              <ion-datetime\n                display-format=\"MMM DD, YYYY\"\n                formControlName=\"dateRdv\"\n                required\n                [(ngModel)]=\"this.dateT\"\n              ></ion-datetime>\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Propose un horaire</label>\n              <ion-datetime\n                display-format=\"h:mm A\"\n                picker-format=\"h:mm A\"\n                formControlName=\"heureRdv\"\n                required\n                [(ngModel)]=\"this.hoursT\"\n              ></ion-datetime>\n            </div>\n            {{ this.hoursT }}\n            <ion-row>\n              <ion-col>\n                <ion-button color=\"sred\" expand=\"block\">\n                  <ion-icon slot=\"start\" name=\"\"> x </ion-icon\n                  >Cancel</ion-button\n                >\n                <legend class=\"ion-text-center\"></legend>\n                <ion-button type=\"submit\" color=\"sgreen\" expand=\"block\"\n                  ><ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n                  Save\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/realize/realize.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/realize/realize.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Intervention</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-grid fixed>\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title><ion-text color=\"sred\"> </ion-text> </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <form [formGroup]=\"realizeForm\" method=\"post\" (ngSubmit)=\"realize()\">\n            <div class=\"mb-14\">\n              <label>Lot</label>\n              <ion-input\n                type=\"text\"\n                placeholder=\"Awesome Input\"\n                formControlName=\"lot\"\n              ></ion-input>\n            </div>\n            <ion-row>\n              <ion-col>\n                <ion-button color=\"sred\" expand=\"block\">\n                  <ion-icon slot=\"start\" name=\"\"> x </ion-icon\n                  >Cancel</ion-button\n                >\n                <legend class=\"ion-text-center\"></legend>\n                <ion-button type=\"submit\" color=\"sgreen\" expand=\"block\"\n                  ><ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n                  Save\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/vaccination.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/vaccination.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Vaccination</ion-title>\n    <ion-searchbar\n      *ngIf=\"showSearchbar\"\n      showCancelButton=\"always\"\n      [(ngModel)]=\"queryText\"\n      (ionChange)=\"filterItems($event)\"\n      (ionCancel)=\"showSearchbar = false\"\n      placeholder=\"Rechercher\"\n    ></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Vaccination</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar\n        [(ngModel)]=\"queryText\"\n        (ionChange)=\"filterItems($event)\"\n        placeholder=\"Search\"\n      ></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list #scheduleList>\n    <ion-item-group *ngFor=\"let consult of filteredVaccinations\">\n      <ion-item-divider sticky>\n        <ion-label class=\"ion-text-center\"> {{ consult.nomPatient}} </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding\n        *ngFor=\"let eachVaccination of consult.groups\"\n        #slidingItem\n      >\n        <ion-item>\n          <ion-grid>\n            <ion-row (click)=\"alert()\">\n              <ion-col size=\"8\">\n                <ion-label class=\"information\">\n                  {{eachVaccination.operation}}\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"middle\" size=\"2\" offset-md=\"2\">\n                <ion-button\n                  *ngIf=\"eachVaccination._status.toString() === this.GENERATE\"\n                  class=\"status\"\n                  color=\"tertiary\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  {{eachVaccination._status}}\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination._status.toString() === this.PENDING\"\n                  class=\"status\"\n                  color=\"sorange\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  {{eachVaccination._status}}\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination._status.toString() === this.REJECTED\"\n                  class=\"status\"\n                  color=\"sred\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  {{eachVaccination._status}}\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination._status.toString() === this.SCHEDULED\"\n                  class=\"status\"\n                  color=\"warning\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  {{eachVaccination._status}}\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination._status.toString() === this.REALIZED\"\n                  class=\"status\"\n                  color=\"sgreen\"\n                  expand=\"block\"\n                  fill=\"outline\"\n                >\n                  {{eachVaccination._status}}\n                </ion-button>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col class=\"btn-cnfrm\">\n                <ion-button\n                  *ngIf=\"eachVaccination._action.toString() === this.ACTION_VOIR\"\n                  class=\"status\"\n                  color=\"sgreen\"\n                  (click)=\"watchVaccin(eachVaccination)\"\n                  expand=\"block\"\n                >\n                  <ion-icon slot=\"start\" name=\"eye-outline\"></ion-icon>\n                  <ion-label>voir</ion-label>\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination._action.toString() === this.ACTION_REALIZED && eachVaccination._status.toString() === this.SCHEDULED\"\n                  class=\"status\"\n                  color=\"tertiary\"\n                  expand=\"block\"\n                  (click)=\"openRealizeVaccModal(eachVaccination)\"\n                >\n                  <ion-icon\n                    slot=\"start\"\n                    name=\"checkmark-circle-outline\"\n                  ></ion-icon>\n                  <ion-label>réalisé</ion-label>\n                </ion-button>\n\n                <!-- <ion-button\n                  *ngIf=\"eachVaccination._action.toString() === this.ACTION_REALIZED && eachVaccination._status.toString() === this.REALIZED\"\n                  class=\"status\"\n                  color=\"sred\"\n                  expand=\"block\"\n                >\n                  <ion-icon slot=\"start\" name=\"close-circle-outline\"></ion-icon>\n                  <ion-label>rejeté</ion-label>\n                </ion-button> -->\n\n                <ion-button\n                  *ngIf=\"eachVaccination._action.toString() === this.ACTION_ORGANIZED_REJECT\"\n                  class=\"status\"\n                  color=\"sgreen\"\n                  expand=\"block\"\n                  (click)=\"organizeVaccinWithNotebook(eachVaccination)\"\n                >\n                  <ion-icon slot=\"start\" name=\"close-circle-outline\"></ion-icon>\n                  <ion-label>organisé</ion-label>\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination._action.toString() === this.ACTION_ORGANIZED_REJECT\"\n                  class=\"status\"\n                  color=\"sred\"\n                  expand=\"block\"\n                  (click)=\"rejectVaccinWithNotebook(eachVaccination)\"\n                >\n                  <ion-icon slot=\"start\" name=\"close-circle-outline\"></ion-icon>\n                  <ion-label>rejeté</ion-label>\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination._action.toString() === this.ACTION_GENERATE_REJECT\"\n                  class=\"status\"\n                  color=\"sgreen\"\n                  expand=\"block\"\n                  (click)=\"generateVaccin(eachVaccination)\"\n                >\n                  <ion-icon slot=\"start\" name=\"close-circle-outline\"></ion-icon>\n                  <ion-label>généré</ion-label>\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination._action.toString() === this.ACTION_GENERATE_REJECT\"\n                  class=\"status\"\n                  color=\"sred\"\n                  expand=\"block\"\n                  (click)=\"rejectVaccin(eachVaccination)\"\n                >\n                  <ion-icon slot=\"start\" name=\"close-circle-outline\"></ion-icon>\n                  <ion-label>rejeté</ion-label>\n                </ion-button>\n\n                <ion-button\n                  *ngIf=\"eachVaccination.operation.toString() === this.OPERATION_INT_VACCINATION\"\n                  class=\"status\"\n                  color=\"sgreen\"\n                  expand=\"block\"\n                  (click)=\"watchVaccinWithNotebook(eachVaccination)\"\n                >\n                  <ion-icon slot=\"start\" name=\"eye-outline\"></ion-icon>\n                  <ion-label>Voir</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list-header [hidden]=\"vaccinations.length != 0\">\n    No Sessions Found\n  </ion-list-header>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n    <ion-fab-button color=\"primary\" (click)=\"alert()\">\n      <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/patient/vaccination/generate/generate.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/patient/vaccination/generate/generate.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvdmFjY2luYXRpb24vZ2VuZXJhdGUvZ2VuZXJhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/patient/vaccination/generate/generate.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/patient/vaccination/generate/generate.component.ts ***!
  \**************************************************************************/
/*! exports provided: GenerateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateComponent", function() { return GenerateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/global.interaction */ "./src/app/pages/global.interaction.ts");
/* harmony import */ var src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global-data.service */ "./src/app/services/global-data.service.ts");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");








let GenerateComponent = class GenerateComponent {
    constructor(praticienSrv, patientServc, navCtrl, navParms, modalCtrl, globalDataSrvc, globalInt) {
        this.praticienSrv = praticienSrv;
        this.patientServc = patientServc;
        this.navCtrl = navCtrl;
        this.navParms = navParms;
        this.modalCtrl = modalCtrl;
        this.globalDataSrvc = globalDataSrvc;
        this.globalInt = globalInt;
        this.showCheckBoxAssoc = false;
        this.after_praticien_choice = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.after_praticien_choice = false;
            this.navParms.get('country') != undefined
                ? (this.countries = this.navParms.get('country'))
                : this.getAllCountries();
            this.propositionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                praticien: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.praticiens, disabled: false }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]),
                center_health: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.functions, disabled: false }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.countries, disabled: false }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.cities, disabled: false }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]),
                typeRdv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                // dateRdv: new FormControl('', [Validators.required]),
                // heureRdv: new FormControl('', [Validators.required]),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
                chekcboxAssoc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            });
        });
    }
    backToList() {
        this.dismiss();
        this.navCtrl.navigateRoot('/patient/rendez-vous');
    }
    cancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(' cancel ');
            this.backToList();
        });
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            dismissed: true,
        });
    }
    getCityByCountry(id) {
        this.globalDataSrvc.getCity(id).subscribe((data) => this.cities = data);
    }
    getAllCountries() {
        this.globalDataSrvc.getCountry().subscribe((data) => this.countries = data);
    }
    getCenterByCity(_idCity) {
        this.globalDataSrvc.getCenterHealthByCity(_idCity).subscribe((data) => { console.log("LL: GenerateComponent -> getCenterByCity -> this.center_health", data); this.center_health = data; });
    }
    getPraticienByCenter(_idCenter) {
        this.globalDataSrvc.getPraticienByCenter(_idCenter).subscribe((data) => { console.log("LL: GenerateComponent -> getCenterByCity -> this.center_health", data); this.praticiens = data; });
    }
    postVaccinGeneration(_idPractitioner) {
        this.patientServc.postVaccinGeneration(_idPractitioner).subscribe((data) => console.log("LL: GenerateComponent -> postVaccinGeneration -> data", data));
    }
};
GenerateComponent.ctorParameters = () => [
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_7__["PraticienService"] },
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_5__["GlobalDataService"] },
    { type: src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_4__["GlobalInteraction"] }
];
GenerateComponent.propDecorators = {
    test: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    functions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
GenerateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/generate/generate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./generate.component.scss */ "./src/app/pages/patient/vaccination/generate/generate.component.scss")).default]
    })
], GenerateComponent);



/***/ }),

/***/ "./src/app/pages/patient/vaccination/intervention/intervention.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/patient/vaccination/intervention/intervention.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvdmFjY2luYXRpb24vaW50ZXJ2ZW50aW9uL2ludGVydmVudGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/patient/vaccination/intervention/intervention.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/patient/vaccination/intervention/intervention.component.ts ***!
  \**********************************************************************************/
/*! exports provided: InterventionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterventionComponent", function() { return InterventionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/global.interaction */ "./src/app/pages/global.interaction.ts");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");







let InterventionComponent = class InterventionComponent {
    constructor(globalItem, navParms, modalCtrl, patientSrvc, praticienSrv) {
        this.globalItem = globalItem;
        this.navParms = navParms;
        this.modalCtrl = modalCtrl;
        this.patientSrvc = patientSrvc;
        this.praticienSrv = praticienSrv;
    }
    ngOnInit() {
        // TODO: reserche bar
        this.navParms.get("praticiens") !== undefined ? this.praticiens = this.navParms.get("praticiens") : this.getAllPraticiens();
        console.log("LL: InterventionComponent -> ngOnInit -> this.navParms.get()", this.navParms.get("praticiens"));
        this.carnet = this.navParms.get("vaccin");
        this.dateVaccin = this.navParms.get("dateVaccin");
        console.log("InterventionComponent -> ngOnInit -> this.praticiens", this.praticiens);
        this.propositionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            praticien: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
    intervention(data) {
        const data_send = {
            date_prise: this.carnet.date_prise.date,
            praticien: data,
            vaccin: this.carnet.vaccin,
            id_carnet: this.carnet.id,
        };
        console.error("***************************LL: InterventionComponent -> ngOnInit -> vaccin", data_send);
        this.patientSrvc.interventionPraticien(data_send).subscribe((data) => {
            console.log("LL: InterventionComponent -> intervention -> data", data);
            this.globalItem.presentToast(data);
            this.closeModal();
        });
    }
    getAllPraticiens() {
        this.praticienSrv.getAllPraticien().subscribe(data => {
            this.praticiens = data;
        });
    }
};
InterventionComponent.ctorParameters = () => [
    { type: src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_4__["GlobalInteraction"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_6__["PraticienService"] }
];
InterventionComponent.propDecorators = {
    carnet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    praticiens: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dateVaccin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
InterventionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intervention',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./intervention.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/intervention/intervention.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./intervention.component.scss */ "./src/app/pages/patient/vaccination/intervention/intervention.component.scss")).default]
    })
], InterventionComponent);



/***/ }),

/***/ "./src/app/pages/patient/vaccination/vaccination-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/patient/vaccination/vaccination-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: VaccinationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccinationPageRoutingModule", function() { return VaccinationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vaccination_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaccination.page */ "./src/app/pages/patient/vaccination/vaccination.page.ts");




const routes = [
    {
        path: '',
        component: _vaccination_page__WEBPACK_IMPORTED_MODULE_3__["VaccinationPage"]
    }
];
let VaccinationPageRoutingModule = class VaccinationPageRoutingModule {
};
VaccinationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VaccinationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/patient/vaccination/vaccination.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/patient/vaccination/vaccination.module.ts ***!
  \*****************************************************************/
/*! exports provided: VaccinationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccinationPageModule", function() { return VaccinationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vaccination_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaccination-routing.module */ "./src/app/pages/patient/vaccination/vaccination-routing.module.ts");
/* harmony import */ var _vaccination_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaccination.page */ "./src/app/pages/patient/vaccination/vaccination.page.ts");
/* harmony import */ var _intervention_intervention_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intervention/intervention.component */ "./src/app/pages/patient/vaccination/intervention/intervention.component.ts");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generate/generate.component */ "./src/app/pages/patient/vaccination/generate/generate.component.ts");
/* harmony import */ var _praticien_vaccination_realize_realize_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../praticien/vaccination/realize/realize.component */ "./src/app/pages/praticien/vaccination/realize/realize.component.ts");










let VaccinationPageModule = class VaccinationPageModule {
};
VaccinationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _vaccination_routing_module__WEBPACK_IMPORTED_MODULE_5__["VaccinationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_vaccination_page__WEBPACK_IMPORTED_MODULE_6__["VaccinationPage"], _intervention_intervention_component__WEBPACK_IMPORTED_MODULE_7__["InterventionComponent"], _generate_generate_component__WEBPACK_IMPORTED_MODULE_8__["GenerateComponent"], _praticien_vaccination_realize_realize_component__WEBPACK_IMPORTED_MODULE_9__["RealizeComponent"]]
    })
], VaccinationPageModule);



/***/ }),

/***/ "./src/app/pages/patient/vaccination/vaccination.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/patient/vaccination/vaccination.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n       * Material Design uses the ripple for activated\n       * so only style the iOS activated background\n       */\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=realised] ion-label.information {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 3px;\n}\n\nion-item-sliding[track=planified] ion-label.information {\n  border-left: 2px solid #8e8d93;\n  padding-left: 3px;\n}\n\nion-item-sliding[track=pending] ion-label.information {\n  border-left: 2px solid #6600cc;\n  padding-left: 3px;\n}\n\n.status {\n  text-align: right;\n  width: 120px;\n}\n\n.middle {\n  display: flex;\n  align-items: center;\n}\n\n.btn-cnfrm {\n  display: flex;\n  justify-content: center;\n}\n\n.dateRapelle {\n  color: var(--ion-color-sred);\n}\n\n.vaccinateur {\n  color: var(--ion-color-sgreen);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC92YWNjaW5hdGlvbi92YWNjaW5hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7RUFFQSwwQ0FBQTtBQUFGOztBQUdBOzs7UUFBQTs7QUFJQTtFQUNFLDBEQUFBO0FBQUY7O0FBV0k7RUFDRSwrQ0FBQTtFQUNBLGlCQUFBO0FBUk47O0FBTUk7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBSE47O0FBQ0k7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBRU47O0FBR0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsOEJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvdmFjY2luYXRpb24vdmFjY2luYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZmZmKTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2YyZjJmMik7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XHJcblxyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcclxufVxyXG5cclxuLypcclxuICAgICAgICogTWF0ZXJpYWwgRGVzaWduIHVzZXMgdGhlIHJpcHBsZSBmb3IgYWN0aXZhdGVkXHJcbiAgICAgICAqIHNvIG9ubHkgc3R5bGUgdGhlIGlPUyBhY3RpdmF0ZWQgYmFja2dyb3VuZFxyXG4gICAgICAgKi9cclxuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcclxufVxyXG5cclxuJGNhdGVnb3JpZXM6IChcclxuICByZWFsaXNlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gIHBsYW5pZmllZDogIzhlOGQ5MyxcclxuICBwZW5kaW5nOiAjNjYwMGNjLFxyXG4pO1xyXG5cclxuQGVhY2ggJHRyYWNrLCAkdmFsdWUgaW4gbWFwLXJlbW92ZSgkY2F0ZWdvcmllcykge1xyXG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9XCIjeyR0cmFja31cIl0gaW9uLWxhYmVsIHtcclxuICAgICYuaW5mb3JtYXRpb24ge1xyXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR2YWx1ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1jbmZybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGVSYXBlbGxlIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNyZWQpO1xyXG59XHJcblxyXG4udmFjY2luYXRldXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2dyZWVuKTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/patient/vaccination/vaccination.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/patient/vaccination/vaccination.page.ts ***!
  \***************************************************************/
/*! exports provided: VaccinationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccinationPage", function() { return VaccinationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_data_transformer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-transformer.service */ "./src/app/services/data-transformer.service.ts");
/* harmony import */ var _intervention_intervention_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intervention/intervention.component */ "./src/app/pages/patient/vaccination/intervention/intervention.component.ts");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generate/generate.component */ "./src/app/pages/patient/vaccination/generate/generate.component.ts");
/* harmony import */ var src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/global-data.service */ "./src/app/services/global-data.service.ts");









let VaccinationPage = class VaccinationPage {
    constructor(patientSrv, dataTransformer, loadingCtrl, modalCtrl, praticienSrv, globalSrvc) {
        this.patientSrv = patientSrv;
        this.dataTransformer = dataTransformer;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.praticienSrv = praticienSrv;
        this.globalSrvc = globalSrvc;
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
        this.OKSTATUS = "REALISED";
        this.PENDINGSTATUS = "PENDING";
        this.PLANIFIED = "PLANIFIED";
        this.STRING_DATE = "date_prise";
        console.log("VaccinationPage -> constructor");
    }
    checkStatus(status, etat) {
        if (status == 1) {
            return this.OKSTATUS;
        }
        else {
            if (etat == false) {
                return this.PENDINGSTATUS;
            }
            else {
                return this.PLANIFIED;
            }
        }
    }
    ngOnInit() {
        console.log("VaccinationPage -> ngOnInit -> ngOnInit");
        this.initializeItems();
    }
    filterItems(ev) {
        const query = ev.target.value.toLowerCase();
        requestAnimationFrame(() => {
            if (!query || query === "") {
                return;
            }
            const keys = ["vaccin"];
            this.vaccinsFiltered = this.dataTransformer.filterItems(query, keys, "status", this.segment, this.vaccinsFiltered);
        });
    }
    initializeItems() {
        // this.patientSrv.getCarnetVaccinationId(3);
        this.presentLoading();
        this.getAllVaccin();
        this.praticienSrv.getAllPraticien().subscribe(data => {
            console.log("VaccinationPage -> initializeItems -> data", data);
            this.praticiens = data;
        });
    }
    getAllVaccin() {
        this.patientSrv.getVaccinByPatient().subscribe((data) => {
            console.log("VaccinationPage -> getAllVaccin -> data", data);
            this.vaccins = data;
            console.log(" ");
            this.vaccinsShow = this.dataTransformer.allData(data, this.STRING_DATE).data;
            this.vaccinsFiltered = this.dataTransformer.allData(data, this.STRING_DATE).dataByDate;
            this.loadingCtrl.dismiss();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: "my-loading-class",
                spinner: "bubbles",
                translucent: true,
                duration: 10000,
            });
            yield loading.present();
        });
    }
    openNewRdvModal(vaccin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.warn("VaccinationPage -> openNewRdvModal -> nom_vaccin", vaccin, "/");
            const newRdvModal = yield this.modalCtrl.create({
                component: _intervention_intervention_component__WEBPACK_IMPORTED_MODULE_5__["InterventionComponent"],
                cssClass: "test-class",
                swipeToClose: true,
                componentProps: {
                    praticiens: this.praticiens,
                    vaccin: vaccin,
                },
            });
            newRdvModal.onDidDismiss().then(() => {
                this.initializeItems();
            });
            return yield newRdvModal.present();
        });
    }
    openGenerateVaccModal(vaccin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.warn("VaccinationPage -> openNewRdvModal -> nom_vaccin", vaccin, "/");
            const newRdvModal = yield this.modalCtrl.create({
                component: _generate_generate_component__WEBPACK_IMPORTED_MODULE_7__["GenerateComponent"],
                cssClass: "test-class",
                swipeToClose: true,
                componentProps: {
                    praticiens: this.praticiens,
                    countries: this.countries,
                    vaccin: vaccin,
                },
            });
            newRdvModal.onDidDismiss().then(() => {
                this.initializeItems();
            });
            return yield newRdvModal.present();
        });
    }
    getAllCountries() {
        this.countries = this.globalSrvc.getCountry().subscribe((data) => { return data; });
    }
};
VaccinationPage.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"] },
    { type: src_app_services_data_transformer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransformerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_6__["PraticienService"] },
    { type: src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_8__["GlobalDataService"] }
];
VaccinationPage.propDecorators = {
    VaccinList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["VaccinList", { static: true },] }]
};
VaccinationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-vaccination",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vaccination.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/vaccination/vaccination.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vaccination.page.scss */ "./src/app/pages/patient/vaccination/vaccination.page.scss")).default]
    })
], VaccinationPage);



/***/ }),

/***/ "./src/app/pages/praticien/vaccination/details/details.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/praticien/vaccination/details/details.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByYXRpY2llbi92YWNjaW5hdGlvbi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/praticien/vaccination/details/details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/praticien/vaccination/details/details.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let DetailsComponent = class DetailsComponent {
    constructor(modalCtrl, navParms) {
        this.modalCtrl = modalCtrl;
        this.navParms = navParms;
        this.vaccinations = this.navParms.get("data");
        this.isWithNoteBook = this.navParms.get("isWithNoteBook");
        console.log(this.vaccinations);
    }
    ngOnInit() { }
    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true,
        });
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
DetailsComponent.propDecorators = {
    vaccinations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isWithNoteBook: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
DetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-details",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/details/details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.component.scss */ "./src/app/pages/praticien/vaccination/details/details.component.scss")).default]
    })
], DetailsComponent);



/***/ }),

/***/ "./src/app/pages/praticien/vaccination/organize/organize.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/praticien/vaccination/organize/organize.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByYXRpY2llbi92YWNjaW5hdGlvbi9vcmdhbml6ZS9vcmdhbml6ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/praticien/vaccination/organize/organize.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/praticien/vaccination/organize/organize.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrganizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizeComponent", function() { return OrganizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/global.interaction */ "./src/app/pages/global.interaction.ts");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");






let OrganizeComponent = class OrganizeComponent {
    constructor(navParms, modalCtrl, praticienSrvc, globalItem) {
        this.navParms = navParms;
        this.modalCtrl = modalCtrl;
        this.praticienSrvc = praticienSrvc;
        this.globalItem = globalItem;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.data = this.navParms.get("data");
            const transform_date = new Date(this.data.date);
            this.dateT = (transform_date.getFullYear() + "-" + transform_date.getMonth() + "-" + transform_date.getDate()).toString();
            this.hoursT = (new Date(this.dateT).getHours() + "" + new Date(this.dateT).getMinutes()).toString();
            console.log("LL: OrganizeComponent -> ngOnInit -> hoursT", this.hoursT);
            this.organizeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                dateRdv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                heureRdv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
            console.log("NewRdvComponent -> patients -> test", this.navParms.get("patients"));
        });
    }
    organise() {
        this.globalItem.presentLoading();
        const dataToSend = {
            id: this.data.id,
            carnet: this.data.idCarnet,
            date: this.dateT,
            heure: this.hoursT,
        };
        console.log(dataToSend, this.organizeForm.value.dateRdv, this.organizeForm.value.heureRdv);
        this.praticienSrvc.organiseVaccin(dataToSend).subscribe(() => {
            this.globalItem.dismissLoading();
            this.modalCtrl.dismiss();
        });
    }
};
OrganizeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_5__["PraticienService"] },
    { type: src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_4__["GlobalInteraction"] }
];
OrganizeComponent.propDecorators = {
    test: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
OrganizeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-organize',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./organize.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/organize/organize.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./organize.component.scss */ "./src/app/pages/praticien/vaccination/organize/organize.component.scss")).default]
    })
], OrganizeComponent);



/***/ }),

/***/ "./src/app/pages/praticien/vaccination/realize/realize.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/praticien/vaccination/realize/realize.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByYXRpY2llbi92YWNjaW5hdGlvbi9yZWFsaXplL3JlYWxpemUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/praticien/vaccination/realize/realize.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/praticien/vaccination/realize/realize.component.ts ***!
  \**************************************************************************/
/*! exports provided: RealizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealizeComponent", function() { return RealizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/global.interaction */ "./src/app/pages/global.interaction.ts");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");






let RealizeComponent = class RealizeComponent {
    constructor(navParms, modalCtrl, praticienSrvc, globalItem) {
        this.navParms = navParms;
        this.modalCtrl = modalCtrl;
        this.praticienSrvc = praticienSrvc;
        this.globalItem = globalItem;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.data = this.navParms.get("data");
            console.log("LL>>>: RealizeComponent -> ngOnInit -> data", this.data);
            this.realizeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                lot: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
            console.log("NewRdvComponent -> patients -> test", this.navParms.get("patients"));
        });
    }
    realize() {
        this.globalItem.presentLoading();
        const dataToSend = {
            id: this.data.id,
            carnet: this.data.carnet,
            lot: this.realizeForm.value.lot,
        };
        console.log("LL: RealizeComponent -> realize -> dataToSend", dataToSend);
        this.praticienSrvc.realizeVaccin(dataToSend).subscribe(() => {
            this.globalItem.dismissLoading();
            this.modalCtrl.dismiss();
        });
    }
};
RealizeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_5__["PraticienService"] },
    { type: src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_4__["GlobalInteraction"] }
];
RealizeComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
RealizeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-realize',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./realize.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/realize/realize.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./realize.component.scss */ "./src/app/pages/praticien/vaccination/realize/realize.component.scss")).default]
    })
], RealizeComponent);



/***/ }),

/***/ "./src/app/pages/praticien/vaccination/vaccination-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/praticien/vaccination/vaccination-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: VaccinationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccinationPageRoutingModule", function() { return VaccinationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vaccination_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaccination.page */ "./src/app/pages/praticien/vaccination/vaccination.page.ts");




const routes = [
    {
        path: "",
        component: _vaccination_page__WEBPACK_IMPORTED_MODULE_3__["VaccinationPage"],
    },
];
let VaccinationPageRoutingModule = class VaccinationPageRoutingModule {
};
VaccinationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VaccinationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/praticien/vaccination/vaccination.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/praticien/vaccination/vaccination.module.ts ***!
  \*******************************************************************/
/*! exports provided: VaccinationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccinationPageModule", function() { return VaccinationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vaccination_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaccination-routing.module */ "./src/app/pages/praticien/vaccination/vaccination-routing.module.ts");
/* harmony import */ var _vaccination_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaccination.page */ "./src/app/pages/praticien/vaccination/vaccination.page.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details/details.component */ "./src/app/pages/praticien/vaccination/details/details.component.ts");
/* harmony import */ var _organize_organize_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organize/organize.component */ "./src/app/pages/praticien/vaccination/organize/organize.component.ts");









let VaccinationPageModule = class VaccinationPageModule {
};
VaccinationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vaccination_routing_module__WEBPACK_IMPORTED_MODULE_5__["VaccinationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_vaccination_page__WEBPACK_IMPORTED_MODULE_6__["VaccinationPage"], _details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"], _organize_organize_component__WEBPACK_IMPORTED_MODULE_8__["OrganizeComponent"]],
    })
], VaccinationPageModule);



/***/ }),

/***/ "./src/app/pages/praticien/vaccination/vaccination.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/praticien/vaccination/vaccination.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status {\n  text-align: right;\n  width: 90px;\n}\n\n.middle {\n  display: flex;\n  align-items: center;\n}\n\n.btn-cnfrm {\n  display: flex;\n  justify-content: center;\n}\n\nion-col > ion-button {\n  min-width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL3ZhY2NpbmF0aW9uL3ZhY2NpbmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmF0aWNpZW4vdmFjY2luYXRpb24vdmFjY2luYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1jbmZybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNvbCA+IGlvbi1idXR0b24ge1xyXG4gIG1pbi13aWR0aDogMTEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/praticien/vaccination/vaccination.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/praticien/vaccination/vaccination.page.ts ***!
  \*****************************************************************/
/*! exports provided: VaccinationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaccinationPage", function() { return VaccinationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/pages/praticien/vaccination/details/details.component.ts");
/* harmony import */ var _global_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global.interaction */ "./src/app/pages/global.interaction.ts");
/* harmony import */ var _organize_organize_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organize/organize.component */ "./src/app/pages/praticien/vaccination/organize/organize.component.ts");
/* harmony import */ var _realize_realize_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./realize/realize.component */ "./src/app/pages/praticien/vaccination/realize/realize.component.ts");









let VaccinationPage = class VaccinationPage {
    // public OKSTATUS = "Accepted";
    // public NOPSTATUS = "Refused";
    // public PENDSTATUS = "Pending";
    constructor(config, praticienSrvc, alertCtrl, loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, user, globalItem) {
        this.config = config;
        this.praticienSrvc = praticienSrvc;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.globalItem = globalItem;
        this.vaccinations = [];
        this.vaccinationsShow = [];
        this.filteredVaccinations = [];
        this.segment = "all";
        this.queryText = "";
        // OPERATION
        this.OPERATION_VACCIN_CALENDAR = "Vaccine Callendar";
        this.OPERATION_INT_VACCINATION = "Intervention Vaccination";
        // _STATUS
        this.GENERATE = "Généré";
        this.PENDING = "En attente";
        this.REJECTED = "Rejeté";
        this.SCHEDULED = "Planifié";
        this.REALIZED = "Réalisé";
        //_ACTION
        this.ACTION_VOIR = "Voir";
        this.ACTION_GENERATE_REJECT = "Generate_reject";
        this.ACTION_ORGANIZED_REJECT = "Organized_reject";
        this.ACTION_REALIZED = "Réalisé";
        this.ACTION_NULL = "";
    }
    alert() {
        console.log("ok ++++ ");
    }
    ngOnInit() {
        this.ios = this.config.get("mode") === "ios";
        this.getListVaccinations();
    }
    getListVaccinations() {
        // Close any open sliding items when the  updates
        if (this.List) {
            console.log("ConsultationPage -> update -> this.List", this.List);
            this.List.closeSlidingItems();
        }
        //TODO: get timeline
        this.praticienSrvc.getListsVaccinations().subscribe((data) => {
            console.log("LL: VaccinationPage -> getListVaccinations -> data", data);
            this.vaccinations = data;
            // this.vaccinationsShow = this.praticienSrvc.regroupDataByDate(data);
            this.vaccinationsShow = this.praticienSrvc.regroupDataByPatient(data);
            this.filteredVaccinations = this.asignOperation([...this.vaccinationsShow]);
            console.log("LL: VaccinationPage -> getListVaccinations -> this.filteredVaccinations", this.filteredVaccinations);
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
    openDetailModal(_data, _isWithNoteBook = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newRdvModal = yield this.modalCtrl.create({
                component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"],
                cssClass: "test-class",
                swipeToClose: true,
                componentProps: {
                    // test: "test",
                    // data: this.findVaccinationRelated(id).res,
                    data: _data,
                    isWithNoteBook: _isWithNoteBook
                },
            });
            newRdvModal.onDidDismiss().then(() => {
                // this.initializeItems(); //event on dismiss
            });
            return yield newRdvModal.present();
        });
    }
    openOrganizeModal(_data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newRdvModal = yield this.modalCtrl.create({
                component: _organize_organize_component__WEBPACK_IMPORTED_MODULE_7__["OrganizeComponent"],
                cssClass: "test-class",
                swipeToClose: true,
                componentProps: {
                    data: _data,
                },
            });
            newRdvModal.onDidDismiss().then(() => {
                this.getListVaccinations(); //event on dismiss
            });
            return yield newRdvModal.present();
        });
    }
    openRealizeVaccModal(_data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newRdvModal = yield this.modalCtrl.create({
                component: _realize_realize_component__WEBPACK_IMPORTED_MODULE_8__["RealizeComponent"],
                cssClass: "test-class",
                swipeToClose: true,
                componentProps: {
                    data: _data
                },
            });
            newRdvModal.onDidDismiss().then(() => {
                this.getListVaccinations();
            });
            return yield newRdvModal.present();
        });
    }
    showAccepted() {
        // if (this.segment == "all") {
        //   this.filteredVaccinations = [...this.vaccinationsShow];
        //   return;
        // }
        // let temp: any = [];
        // this.filteredVaccinations = temp;
        // [...this.vaccinationsShow].forEach((item) => {
        //   console.log("ConsultationPage -> filterItems -> item", item.groups);
        //   let data: any = [];
        //   item.groups.forEach((res) => {
        //     console.log("ConsultationPage  *** -> filterItems -> res", res);
        //     if (res.status.includes("Accepted")) {
        //       data.push(res);
        //     }
        //   });
        //   const a = {
        //     date: item.date,
        //     groups: data,
        //   };
        //   temp.push(a);
        // })
        ;
    }
    // TODO : à Optimiser
    filterItems(ev) {
        // const query = ev.target.value.toLowerCase();
        // requestAnimationFrame(() => {
        //   if (!query || query === "") {
        //     this.showAccepted();
        //     return;
        //   }
        //   let temp: any = [];
        //   this.filteredVaccinations = temp;
        //   [...this.vaccinationsShow].forEach((item) => {
        //     let data: any = [];
        //     item.groups.forEach((res) => {
        //       if (query && this.segment == "all") {
        //         if (res.patient.includes(query)) {
        //           data.push(res);
        //         }
        //       } else {
        //         if (res.status === "Accepted" && res.patient.includes(query)) {
        //           data.push(res);
        //         }
        //       }
        //     });
        //     const a = {
        //       date: item.date,
        //       groups: data,
        //     };
        //     temp.push(a);
        //   });
        // });
    }
    checkOperation(data) {
        if (data.carnet != undefined && data.carnet != null) {
            if (data.statusVaccin == 1) {
                if (data.etat == 0) {
                    Object.assign(data, { _status: this.SCHEDULED, _action: this.ACTION_REALIZED });
                }
                else if (data.etat == 1) {
                    Object.assign(data, { _status: this.REALIZED, _action: this.ACTION_REALIZED });
                }
            }
            else if (data.statusVaccin == 0) {
                Object.assign(data, { _status: this.PENDING, _action: this.ACTION_ORGANIZED_REJECT });
            }
            else if (data.statusVaccin == 2) {
                Object.assign(data, { _status: this.REJECTED, _action: this.ACTION_NULL });
            }
            console.warn(">>>>>>>>>>>>>>>>>>>>>LL: VaccinationPage -> checkOperation -> data", data);
            return Object.assign(data, { operation: this.OPERATION_INT_VACCINATION });
        }
        else {
            if (data.statusVaccin == 1) {
                Object.assign(data, { _status: this.GENERATE, _action: this.ACTION_VOIR });
            }
            else if (data.statusVaccin == 0) {
                Object.assign(data, { _status: this.PENDING, _action: this.ACTION_GENERATE_REJECT });
            }
            else if (data.statusVaccin == 2) {
                Object.assign(data, { _status: this.REJECTED, _action: this.ACTION_NULL });
            }
            const result = Object.assign(data, { operation: this.OPERATION_VACCIN_CALENDAR });
            console.warn("LL: VaccinationPage -> checkOperation -> data", result);
            return result;
        }
    }
    asignOperation(filteredVaccinations) {
        filteredVaccinations.forEach(element => {
            element.groups.forEach(data => {
                this.checkOperation(data);
            });
        });
        return filteredVaccinations;
    }
    watchVaccin(_data) {
        this.praticienSrvc.watchVaccin(_data.patient).subscribe((data) => {
            console.log("LL: watchVaccin -> _data", data);
            this.seeVaccination = data;
            this.openDetailModal(data);
        });
    }
    generateVaccin(_data) {
        this.globalItem.presentLoading();
        console.log("LL: generateVaccin -> _data", _data);
        this.praticienSrvc.generateVaccin(_data.id, _data.patient).subscribe((data) => {
            console.log("LL: generateVaccin -> data", data);
            this.getListVaccinations();
            this.globalItem.dismissLoading();
        });
    }
    rejectVaccin(_data) {
        this.globalItem.presentLoading();
        console.log("LL: generateVaccin -> _data", _data.id);
        this.praticienSrvc.rejectVaccin(_data.id).subscribe((data) => {
            console.log("LL: generateVaccin -> data", data);
            this.getListVaccinations();
            this.globalItem.dismissLoading();
        });
    }
    watchVaccinWithNotebook(_data) {
        console.log("LL: watchVaccinWithNotebook -> _data", _data);
        this.praticienSrvc.watchVaccinWithNotebook(_data.carnet).subscribe((data) => {
            console.log("LL: watchVaccin -> _data", data);
            this.seeVaccination = data;
            this.openDetailModal(data, true);
        });
    }
    rejectVaccinWithNotebook(_data) {
        console.log("LL: rejectVaccinWithNotebook -> _data", _data.id);
        this.globalItem.presentLoading();
        this.praticienSrvc.rejectVaccinithNotebook(_data.id).subscribe((data) => {
            console.log("LL: rejectVaccinWithNotebook -> data", data);
            this.getListVaccinations();
            this.globalItem.dismissLoading();
        });
    }
    organizeVaccinWithNotebook(_data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("LL: organizeVaccinWithNotebook -> _data", _data);
            yield this.praticienSrvc.watchVaccinWithNotebook(_data.carnet).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const dataToSend = {
                    date: data[0].datePriseVaccin.date,
                    idCarnet: _data.carnet,
                    id: _data.id,
                };
                console.log("LL: organizeVaccinWithNotebook -> dataToSend", dataToSend);
                yield this.openOrganizeModal(dataToSend);
            }));
        });
    }
};
VaccinationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__["PraticienService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__["PraticienService"] },
    { type: _global_interaction__WEBPACK_IMPORTED_MODULE_6__["GlobalInteraction"] }
];
VaccinationPage.propDecorators = {
    List: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["List", { static: true },] }]
};
VaccinationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vaccination",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vaccination.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/vaccination/vaccination.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vaccination.page.scss */ "./src/app/pages/praticien/vaccination/vaccination.page.scss")).default]
    })
], VaccinationPage);



/***/ })

}]);
//# sourceMappingURL=vaccination-vaccination-module-es2015.js.map