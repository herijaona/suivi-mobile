(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rendez-vous-rendez-vous-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/rendez-vous/new-rdv/new-rdv.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/rendez-vous/new-rdv/new-rdv.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Nouveau rendez-vous</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-grid fixed>\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title> </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <form\n            [formGroup]=\"propositionForm\"\n            (ngSubmit)=\"propose()\"\n            method=\"post\"\n          >\n            <div class=\"mb-14\">\n              <label>Choisir fonction</label>\n              <ion-select\n                placeholder=\"Select\"\n                formControlName=\"fonction\"\n                required\n                (ionChange)=\"\n                  getCountryByFunction(this.propositionForm.value['fonction'])\n                \"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of functions\"\n                  [value]=\"item.id\"\n                  >{{ item.NomFonction }}</ion-select-option\n                >\n              </ion-select>\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Choisir pays</label>\n              <ion-select\n                placeholder=\"Select\"\n                formControlName=\"country\"\n                required\n                [disabled]=\"!this.countries\"\n                (ionChange)=\"\n                  getCityByFunctionAndCountry(\n                    this.propositionForm.value['fonction'],\n                    this.propositionForm.value['country']\n                  )\n                \"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of countries\"\n                  [value]=\"item.id\"\n                  >{{ item.nameState }}</ion-select-option\n                >\n              </ion-select>\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Choisir ville</label>\n              <ion-select\n                placeholder=\"Select\"\n                formControlName=\"city\"\n                required\n                [disabled]=\"!this.cities\"\n                (ionChange)=\"\n                  getPractitionerByFunctionCountryAndCity(\n                    this.propositionForm.value['fonction'],\n                    this.propositionForm.value['country'],\n                    this.propositionForm.value['city']\n                  )\n                \"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of cities\"\n                  [value]=\"item.id\"\n                  >{{ item.nameCity }}</ion-select-option\n                >\n              </ion-select>\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Choisir praticien</label>\n              <ion-select\n                placeholder=\"Select\"\n                formControlName=\"praticien\"\n                [disabled]=\"!this.praticiens\"\n                required\n                (ionChange)=\"\n                  chekcPractitionerAssocOrNot(\n                    this.propositionForm.value['praticien']\n                  )\n                \"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of praticiens\"\n                  [value]=\"item.id\"\n                  >{{\n                    item.firstName.toString() + ' ' + item.lastName.toString()\n                  }}</ion-select-option\n                >\n              </ion-select>\n            </div>\n            <div class=\"mb-14\">\n              <label>Type de rendez-vous</label>\n              <ion-select formControlName=\"typeRdv\" required>\n                <ion-select-option value=\"consultation\"\n                  >Consultation</ion-select-option\n                >\n                <ion-select-option value=\"intervention\"\n                  >Intervention</ion-select-option\n                >\n              </ion-select>\n            </div>\n            <div class=\"mb-14\">\n              <label>Objet </label>\n              <ion-input\n                type=\"text\"\n                required\n                formControlName=\"description\"\n              ></ion-input>\n            </div>\n            <!-- <div *ngIf=\"after_praticien_choice\" class=\"checkBox\"> -->\n            <div *ngIf=\"after_praticien_choice\" class=\"checkBox\">\n              <div class=\"mb-14\" *ngIf=\"showCheckBoxAssoc == false\">\n                <ion-item class=\"status\" fill=\"outline\" lines=\"none\">\n                  <ion-checkbox\n                    formControlName=\"chekcboxAssoc\"\n                    value\n                  ></ion-checkbox>\n                  &nbsp;&nbsp;\n                  <label>choisir comme associé ?</label>\n                </ion-item>\n              </div>\n              <div *ngIf=\"showCheckBoxAssoc == true\">\n                <ion-button\n                  class=\"status\"\n                  color=\"sgreen\"\n                  fill=\"outline\"\n                  expand=\"block\"\n                  slot=\"end\"\n                >\n                  Praticien associé\n                </ion-button>\n              </div>\n            </div>\n\n            <!-- <div class=\"mb-14\">\n              <label>Propose une date </label>\n              <ion-datetime\n                display-format=\"MMM DD, YYYY\"\n                formControlName=\"dateRdv\"\n                required\n              ></ion-datetime>\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Propose un horaire</label>\n              <ion-datetime\n                display-format=\"h:mm A\"\n                picker-format=\"h:mm A\"\n                formControlName=\"heureRdv\"\n                required\n              ></ion-datetime>\n            </div> -->\n\n            <ion-row>\n              <ion-col>\n                <ion-button color=\"sred\" expand=\"block\" (click)=\"dismiss()\">\n                  <ion-icon slot=\"start\" name=\"\"> x </ion-icon\n                  >Cancel</ion-button\n                >\n                <legend class=\"ion-text-center\"></legend>\n                <ion-button type=\"submit\" color=\"sgreen\" expand=\"block\"\n                  ><ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n                  Save\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/rendez-vous/rendez-vous.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/rendez-vous/rendez-vous.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n\n    <!-- <ion-segment *ngIf=\"ios\" [(ngModel)]=\"segment\" (ionChange)=\"showAccepted()\">\n      <ion-segment-button value=\"all\" color=\"sgreen\"> All </ion-segment-button>\n      <ion-segment-button value=\"favorites\" color=\"sgreen\">\n        Accepté\n      </ion-segment-button>\n    </ion-segment> -->\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Rendez-vous</ion-title>\n    <ion-searchbar\n      *ngIf=\"showSearchbar\"\n      showCancelButton=\"always\"\n      [(ngModel)]=\"queryText\"\n      (ionChange)=\"updateRdvList()\"\n      (ionCancel)=\"showSearchbar = false\"\n      placeholder=\"Rechercher\"\n    ></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"presentFilter()\">\n        <span *ngIf=\"ios\">Filtrer</span>\n        <span *ngIf=\"!ios\">\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n        </span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-toolbar *ngIf=\"!ios\">\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"showAccepted()\">\n      <ion-segment-button value=\"all\"> Tout </ion-segment-button>\n      <ion-segment-button value=\"accepted\"> Accépté </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Rendez-vous</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar\n        [(ngModel)]=\"queryText\"\n        (ionChange)=\"filterItems($event)\"\n        placeholder=\"Search\"\n      ></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\n    <ion-item-group *ngFor=\"let rdv of rdvFiltered\">\n      <ion-item-divider sticky>\n        <ion-label class=\"ion-text-center\">\n          {{ rdv.date | date:\"MMM dd, yyyy\"}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding\n        *ngFor=\"let eachRdv of rdv.groups\"\n        #slidingItem\n        [attr.track]=\"eachRdv.type | lowercase\"\n      >\n        <ion-item *ngIf=\"eachRdv.show === true\">\n          <ion-grid>\n            <ion-row (click)=\"alert()\">\n              <ion-col size=\"12\">\n                <ion-label class=\"information\">\n                  <ion-row>\n                    <ion-col size=\"7\">\n                      <h2 class=\"makeBoldAndLarge\">{{eachRdv.type}}</h2>\n                    </ion-col>\n                    <ion-col class=\"middle\" size=\"2\" offset-md=\"2\">\n                      <ion-button\n                        *ngIf=\"this.checkStatus(eachRdv._status, eachRdv.etat) === this.REALIZED\"\n                        class=\"status\"\n                        color=\"sgreen\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                      >\n                        REALISE\n                      </ion-button>\n\n                      <ion-button\n                        *ngIf=\"this.checkStatus(eachRdv._status, eachRdv.etat) === this.CANCELED\"\n                        class=\"status\"\n                        color=\"sred\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                      >\n                        ANNULE\n                      </ion-button>\n\n                      <ion-button\n                        *ngIf=\"this.checkStatus(eachRdv._status, eachRdv.etat) === this.SCHEDULED\"\n                        class=\"status\"\n                        color=\"primary\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                      >\n                        PLANIFIER\n                      </ion-button>\n\n                      <ion-button\n                        *ngIf=\"this.checkStatus(eachRdv._status, eachRdv.etat) === this.PENDING\"\n                        class=\"status\"\n                        color=\"sorange\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                      >\n                        EN ATTENTE\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <p>{{eachRdv.firstName + \" \" + eachRdv.lastName}}</p>\n                    <p>{{eachRdv.centreName}}</p>\n                  </ion-row>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row\n              *ngIf=\"this.checkStatus(eachRdv._status, eachRdv.etat) === this.SCHEDULED || this.checkStatus(eachRdv._status, eachRdv.etat) === this.PENDING\"\n            >\n              <ion-col class=\"btn-cnfrm\">\n                <ion-button\n                  (click)=\"alertRemoveRdv(eachRdv.id, eachRdv.type)\"\n                  expand=\"block\"\n                  color=\"sred\"\n                >\n                  <ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n                  <ion-label>CANCEL</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list-header [hidden]=\"rdvShow.size != 0\">\n    No Sessions Found\n  </ion-list-header>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n    <ion-fab-button color=\"sgreen\" (click)=\"openNewRdvModal()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/rendez-vous/rendrez-vous-filter/rendrez-vous-filter.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/rendez-vous/rendrez-vous-filter/rendrez-vous-filter.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button *ngIf=\"ios\" (click)=\"dismiss()\">Cancel</ion-button>\n      <ion-button *ngIf=\"!ios\" (click)=\"selectAll(false)\">Reset</ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-center\"> Filter Track Sessions </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"applyFilters()\" strong>Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list [lines]=\"ios ? 'inset' : 'full'\">\n    <ion-list-header>Tracks</ion-list-header>\n    <ion-card>\n      <ion-card-title>Types</ion-card-title>\n      <ion-card-content>\n        <ion-item\n          *ngFor=\"let track of tracksTypes\"\n          [attr.track]=\"track.name | lowercase\"\n          lines=\"none\"\n        >\n          <ion-icon\n            *ngIf=\"ios\"\n            slot=\"start\"\n            [name]=\"track.icon\"\n            color=\"medium\"\n          ></ion-icon>\n          <ion-label>{{ track.name }}</ion-label>\n          <ion-checkbox\n            [(ngModel)]=\"track.isChecked\"\n            color=\"sgreen\"\n          ></ion-checkbox>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"this.trackStatsMock.length != 0\">\n      <ion-card-title>States</ion-card-title>\n      <ion-card-content>\n        <ion-item\n          *ngFor=\"let track of tracksStates\"\n          [attr.track]=\"track.name | lowercase\"\n          lines=\"none\"\n        >\n          <ion-icon\n            *ngIf=\"ios\"\n            slot=\"start\"\n            [name]=\"track.icon\"\n            color=\"medium\"\n          ></ion-icon>\n          <ion-label>{{ track.name }}</ion-label>\n          <ion-checkbox\n            [(ngModel)]=\"track.isChecked\"\n            color=\"sred\"\n          ></ion-checkbox>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n\n<ion-footer translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"selectAll(false)\">Deselect All</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"selectAll(true)\">Select All</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/rendez-vous/new-rendez-vous/new-rendez-vous.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/rendez-vous/new-rendez-vous/new-rendez-vous.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Création de rendez-vous</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-grid fixed>\n  <ion-row>\n    <ion-col size-md=\"6\" offset-md=\"3\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title> </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <form\n            [formGroup]=\"propositionForm\"\n            (ngSubmit)=\"propose()\"\n            method=\"post\"\n          >\n            <div class=\"mb-14\">\n              <label>choisi un patient</label>\n              <ion-select\n                placeholder=\"Select\"\n                formControlName=\"patient\"\n                required\n              >\n                <ion-select-option\n                  *ngFor=\"let item of patients\"\n                  [value]=\"item.id\"\n                  >{{\n                    item.firstName.toString() + ' ' + item.lastName.toString()\n                  }}</ion-select-option\n                >\n                <!-- <ion-select-option></ion-select-option> -->\n              </ion-select>\n              <!-- <small\n                class=\"form-text red-color\"\n                *ngIf=\"isFieldInvalid(propositionForm, 'patient')\"\n                >This field is required</small\n              > -->\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Propose une date </label>\n              <ion-datetime\n                display-format=\"MMM DD, YYYY\"\n                formControlName=\"dateRdv\"\n                required\n              ></ion-datetime>\n              <!-- <small\n                class=\"form-text red-color\"\n                *ngIf=\"isFieldInvalid(propositionForm, 'dateRdv')\"\n                >This field is required</small\n              > -->\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Propose un horaire</label>\n              <ion-datetime\n                display-format=\"h:mm A\"\n                picker-format=\"h:mm A\"\n                formControlName=\"heureRdv\"\n                required\n              ></ion-datetime>\n              <!-- <small\n                class=\"form-text red-color\"\n                *ngIf=\"isFieldInvalid(propositionForm, 'heureRdv')\"\n                >This field is required</small\n              > -->\n            </div>\n\n            <div class=\"mb-14\">\n              <label>Description du rendez-vous</label>\n              <ion-input\n                type=\"text\"\n                required\n                formControlName=\"description\"\n              ></ion-input\n              ><!-- <small\n                class=\"form-text red-color\"\n                *ngIf=\"isFieldInvalid(propositionForm, 'description')\"\n                >This field is required</small\n              > -->\n            </div>\n\n            <ion-row>\n              <ion-col>\n                <ion-button color=\"sred\" expand=\"block\" (click)=\"dismiss()\">\n                  <ion-icon slot=\"start\" name=\"\"> x </ion-icon\n                  >Cancel</ion-button\n                >\n                <legend class=\"ion-text-center\"></legend>\n                <ion-button type=\"submit\" color=\"sgreen\" expand=\"block\"\n                  ><ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n                  Save\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/rendez-vous/rendez-vous.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/rendez-vous/rendez-vous.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"!ios && !showSearchbar\" slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-menu-button *ngIf=\"ios\"></ion-menu-button>\n    <ion-title *ngIf=\"!ios && !showSearchbar\">Rendez-vous</ion-title>\n    <ion-searchbar\n      *ngIf=\"showSearchbar\"\n      showCancelButton=\"always\"\n      [(ngModel)]=\"queryText\"\n      (ionChange)=\"updateRdvList()\"\n      (ionCancel)=\"showSearchbar = false\"\n      placeholder=\"Rechercher\"\n    ></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!ios && !showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"end\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"presentFilter()\">\n        <span *ngIf=\"ios\">Filtrer</span>\n        <span *ngIf=\"!ios\">\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n        </span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Rendez-vous</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar\n        [(ngModel)]=\"queryText\"\n        (ionChange)=\"filterItems($event)\"\n        placeholder=\"Search\"\n      ></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\n    <ion-item-group *ngFor=\"let rdv of rdvFiltered\">\n      <ion-item-divider sticky>\n        <ion-label class=\"ion-text-center\">\n          {{ rdv.date | date:\"MMM dd, yyyy\"}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding\n        *ngFor=\"let eachRdv of rdv.groups\"\n        #slidingItem\n        [attr.track]=\"eachRdv.type | lowercase\"\n      >\n        <ion-item *ngIf=\"eachRdv.show === true\">\n          <ion-grid>\n            <ion-row (click)=\"alert()\">\n              <ion-col size=\"12\">\n                <ion-label class=\"information\">\n                  <ion-row>\n                    <ion-col size=\"7\">\n                      <h2 class=\"makeBoldAndLarge\">{{eachRdv.type}}</h2>\n                    </ion-col>\n                    <ion-col class=\"middle\" size=\"2\" offset-md=\"2\">\n                      <ion-button\n                        *ngIf=\"this.checkStatus(eachRdv._status, eachRdv.etat) === this.REALIZED\"\n                        class=\"status\"\n                        color=\"sgreen\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                      >\n                        réalisé\n                      </ion-button>\n\n                      <ion-button\n                        *ngIf=\"this.checkStatus(eachRdv._status, eachRdv.etat) === this.CANCELED\"\n                        class=\"status\"\n                        color=\"sred\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                      >\n                        annulé\n                      </ion-button>\n\n                      <ion-button\n                        *ngIf=\"this.checkStatus(eachRdv._status, eachRdv.etat) === this.SCHEDULED\"\n                        class=\"status\"\n                        color=\"primary\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                      >\n                        planifié\n                      </ion-button>\n\n                      <ion-button\n                        *ngIf=\"this.checkStatus(eachRdv._status, eachRdv.etat) === this.PENDING\"\n                        class=\"status\"\n                        color=\"sorange\"\n                        expand=\"block\"\n                        fill=\"outline\"\n                      >\n                        en attente\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <p>{{eachRdv.firstName + \" \" + eachRdv.lastName}}</p>\n                    <p>{{eachRdv.centreName}}</p>\n                  </ion-row>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row\n              *ngIf=\"this.checkStatus(eachRdv._status, eachRdv.etat) === this.PENDING\"\n            >\n              <ion-col class=\"btn-cnfrm\">\n                <ion-button\n                  (click)=\"alertRemoveRdv(eachRdv.id, eachRdv.type)\"\n                  expand=\"block\"\n                  color=\"primary\"\n                >\n                  <ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n                  <ion-label>organisé</ion-label>\n                </ion-button>\n                <ion-button\n                  (click)=\"alertRemoveRdv(eachRdv.id, eachRdv.type)\"\n                  expand=\"block\"\n                  color=\"sred\"\n                >\n                  <ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n                  <ion-label>annulé</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row\n              *ngIf=\"this.checkStatus(eachRdv._status, eachRdv.etat) === this.SCHEDULED \"\n            >\n              <ion-col class=\"btn-cnfrm\">\n                <ion-button\n                  (click)=\"alertRemoveRdv(eachRdv.id, eachRdv.type)\"\n                  expand=\"block\"\n                  color=\"sgreen\"\n                >\n                  <ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n                  <ion-label>réalisé</ion-label>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list-header [hidden]=\"rdvShow.size != 0\">\n    No Sessions Found\n  </ion-list-header>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n    <ion-fab-button color=\"sgreen\" (click)=\"openNewRdvModal()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/patient/rendez-vous/new-rdv/new-rdv.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/patient/rendez-vous/new-rdv/new-rdv.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkBox {\n  display: flex;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9yZW5kZXotdm91cy9uZXctcmR2L25ldy1yZHYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvcmVuZGV6LXZvdXMvbmV3LXJkdi9uZXctcmR2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrQm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/patient/rendez-vous/new-rdv/new-rdv.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/patient/rendez-vous/new-rdv/new-rdv.component.ts ***!
  \************************************************************************/
/*! exports provided: NewRdvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRdvComponent", function() { return NewRdvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/global.interaction */ "./src/app/pages/global.interaction.ts");
/* harmony import */ var src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global-data.service */ "./src/app/services/global-data.service.ts");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");









let NewRdvComponent = class NewRdvComponent {
    constructor(praticienSrv, patientServc, navCtrl, navParms, modalCtrl, storage, globalDataSrvc, globalInt) {
        this.praticienSrv = praticienSrv;
        this.patientServc = patientServc;
        this.navCtrl = navCtrl;
        this.navParms = navParms;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.globalDataSrvc = globalDataSrvc;
        this.globalInt = globalInt;
        this.showCheckBoxAssoc = false;
        this.after_praticien_choice = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.after_praticien_choice = false;
            // this.praticiens = this.navParms.get('praticiens');
            this.navParms.get('functions') != undefined
                ? (this.functions = this.navParms.get('functions'))
                : this.getAllfonction();
            this.propositionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                praticien: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.praticiens, disabled: false }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]),
                fonction: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.functions, disabled: false }, [
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
    isFieldInvalid(dataFormStep, field) {
        return ((!dataFormStep.get(field).valid && dataFormStep.get(field).touched) ||
            (dataFormStep.get(field).untouched && !dataFormStep.get(field).valid));
    }
    getAllfonction() {
        this.after_praticien_choice = false;
        this.praticienSrv.getPraticienFunctions().subscribe((data) => {
            this.functions = data;
        });
    }
    getCountryByFunction(_idFunction) {
        this.globalDataSrvc
            .getCountryByPratictitionerFunction(_idFunction)
            .subscribe((data) => {
            console.log('LL: NewRdvComponent -> getCountryByFunction -> data', data);
            if (data.length == 0) {
                const VIDE = "Il n'y a pas de praticien présent dans ce pays";
                console.warn('LL: NewRdvComponent -> getCountryByFunction -> VIDE', VIDE);
                this.globalInt.presentToast(VIDE);
            }
            this.countries = data;
        });
    }
    getCityByFunctionAndCountry(_idFunction, _idCountry) {
        this.after_praticien_choice = false;
        this.globalDataSrvc
            .getCityByPractitionerFunctionAndCountry(_idFunction, _idCountry)
            .subscribe((data) => {
            console.log('LL: NewRdvComponent -> getCityByFunctionAndCountry -> data', data);
            if (data.length == 0) {
                const VIDE = "Il n'y a pas de praticien présent dans ce pays";
                console.warn('LL: NewRdvComponent -> getCityByFunctionAndCountry -> VIDE', VIDE);
                this.globalInt.presentToast(VIDE);
            }
            this.cities = data;
        });
    }
    getPractitionerByFunctionCountryAndCity(_idFunction, _idCountry, _idCity) {
        this.after_praticien_choice = false;
        this.globalDataSrvc
            .getPractitionerByFunctionCountryAndCity(_idFunction, _idCountry, _idCity)
            .subscribe((data) => {
            console.log('LL: NewRdvComponent -> getPractitionerByFunctionCountryAndCity -> data', data);
            if (data.length == 0) {
                const VIDE = "Il n'y a pas de praticien présent dans ce pays";
                console.warn('LL: NewRdvComponent -> getPractitionerByFunctionCountryAndCity -> VIDE', VIDE);
                this.globalInt.presentToast(VIDE);
            }
            this.praticiens = data;
        });
    }
    chekcPractitionerAssocOrNot(_idPraticien) {
        const OK = 'OK';
        this.patientServc
            .chekIfPractitionerIsAssociated(_idPraticien)
            .subscribe((isOK) => {
            console.log("LL: NewRdvComponent -> chekcPractitionerAssocOrNot -> isOK", isOK);
            if (isOK.status === OK) {
                this.showCheckBoxAssoc = true;
            }
            else {
                this.showCheckBoxAssoc = false;
            }
            this.after_praticien_choice = true;
        });
    }
    propose() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const prop: IRdvPatient = {
            //   description: this.propositionForm.value.description,
            //   praticien: this.propositionForm.value.praticien,
            //   // typeRdv: this.propositionForm.value.typeRdv,
            //   // dateRdv: this.propositionForm.value.dateRdv,
            //   // heureRdv: this.propositionForm.value.heureRdv,
            //   // id: await this.praticienSrvc.getUserIDByStorage(),
            //   id: 0,
            // };
            if (this.propositionForm.valid) {
                let data_to_send;
                if (this.propositionForm.value['chekcboxAssoc'] == true) {
                    data_to_send = {
                        praticien: this.propositionForm.value['praticien'],
                        typeRdv: this.propositionForm.value['typeRdv'],
                        objet: this.propositionForm.value['description'],
                        Associer: 1,
                    };
                }
                else {
                    data_to_send = {
                        praticien: this.propositionForm.value['praticien'],
                        typeRdv: this.propositionForm.value['typeRdv'],
                        objet: this.propositionForm.value['description'],
                    };
                }
                console.error("###################=>  LL: NewRdvComponent -> propose -> data_to_send", data_to_send);
                this.patientServc.proposeRdv(data_to_send).subscribe((dataV) => {
                    console.log("###################=> LL: NewRdvComponent -> propose -> data", dataV);
                    this.backToList();
                });
            }
            else {
                console.log(' not valid ');
                this.globalInt.presentToast('completé les champs !!');
            }
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
};
NewRdvComponent.ctorParameters = () => [
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_8__["PraticienService"] },
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_7__["PatientService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: src_app_services_global_data_service__WEBPACK_IMPORTED_MODULE_6__["GlobalDataService"] },
    { type: src_app_pages_global_interaction__WEBPACK_IMPORTED_MODULE_5__["GlobalInteraction"] }
];
NewRdvComponent.propDecorators = {
    test: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    functions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
NewRdvComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-rdv',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-rdv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/rendez-vous/new-rdv/new-rdv.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-rdv.component.scss */ "./src/app/pages/patient/rendez-vous/new-rdv/new-rdv.component.scss")).default]
    })
], NewRdvComponent);



/***/ }),

/***/ "./src/app/pages/patient/rendez-vous/rendez-vous-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/patient/rendez-vous/rendez-vous-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RendezVousPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendezVousPageRoutingModule", function() { return RendezVousPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rendez_vous_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rendez-vous.page */ "./src/app/pages/patient/rendez-vous/rendez-vous.page.ts");




const routes = [
    {
        path: "",
        component: _rendez_vous_page__WEBPACK_IMPORTED_MODULE_3__["RendezVousPage"],
    },
];
let RendezVousPageRoutingModule = class RendezVousPageRoutingModule {
};
RendezVousPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RendezVousPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/patient/rendez-vous/rendez-vous.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/patient/rendez-vous/rendez-vous.module.ts ***!
  \*****************************************************************/
/*! exports provided: RendezVousPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendezVousPageModule", function() { return RendezVousPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rendez_vous_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rendez-vous-routing.module */ "./src/app/pages/patient/rendez-vous/rendez-vous-routing.module.ts");
/* harmony import */ var _rendez_vous_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rendez-vous.page */ "./src/app/pages/patient/rendez-vous/rendez-vous.page.ts");
/* harmony import */ var _rendrez_vous_filter_rendrez_vous_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rendrez-vous-filter/rendrez-vous-filter.component */ "./src/app/pages/patient/rendez-vous/rendrez-vous-filter/rendrez-vous-filter.component.ts");
/* harmony import */ var _new_rdv_new_rdv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-rdv/new-rdv.component */ "./src/app/pages/patient/rendez-vous/new-rdv/new-rdv.component.ts");









let RendezVousPageModule = class RendezVousPageModule {
};
RendezVousPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rendez_vous_routing_module__WEBPACK_IMPORTED_MODULE_5__["RendezVousPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_rendez_vous_page__WEBPACK_IMPORTED_MODULE_6__["RendezVousPage"], _rendrez_vous_filter_rendrez_vous_filter_component__WEBPACK_IMPORTED_MODULE_7__["RendrezVousFilterComponent"], _new_rdv_new_rdv_component__WEBPACK_IMPORTED_MODULE_8__["NewRdvComponent"]],
    })
], RendezVousPageModule);



/***/ }),

/***/ "./src/app/pages/patient/rendez-vous/rendez-vous.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/patient/rendez-vous/rendez-vous.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n     * Material Design uses the ripple for activated\n     * so only style the iOS activated background\n     */\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic] ion-label.information {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 3px;\n}\n\nion-item-sliding[track=vaccination] ion-label.information {\n  border-left: 2px solid #8e8d93;\n  padding-left: 3px;\n}\n\nion-item-sliding[track=consultation] ion-label.information {\n  border-left: 2px solid #fed035;\n  padding-left: 3px;\n}\n\nion-item-sliding[track=intervention] ion-label.information {\n  border-left: 2px solid #6600cc;\n  padding-left: 3px;\n}\n\n.status {\n  text-align: right;\n  width: 90px;\n}\n\n.middle {\n  display: flex;\n  align-items: center;\n}\n\n.btn-cnfrm {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9yZW5kZXotdm91cy9yZW5kZXotdm91cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7RUFFQSwwQ0FBQTtBQUFGOztBQUdBOzs7TUFBQTs7QUFJQTtFQUNFLDBEQUFBO0FBQUY7O0FBWUk7RUFDRSwrQ0FBQTtFQUNBLGlCQUFBO0FBVE47O0FBT0k7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBSk47O0FBRUk7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBQ047O0FBSEk7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBTU47O0FBREE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXRpZW50L3JlbmRlei12b3VzL3JlbmRlei12b3VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2ZmZik7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNmMmYyZjIpO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsICNkOWQ5ZDkpO1xyXG5cclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XHJcbn1cclxuXHJcbi8qXHJcbiAgICAgKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcclxuICAgICAqIHNvIG9ubHkgc3R5bGUgdGhlIGlPUyBhY3RpdmF0ZWQgYmFja2dyb3VuZFxyXG4gICAgICovXHJcbi5pb3MgaW9uLWZhYi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XHJcbn1cclxuXHJcbiRjYXRlZ29yaWVzOiAoXHJcbiAgaW9uaWM6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcclxuICB2YWNjaW5hdGlvbjogIzhlOGQ5MyxcclxuICBjb25zdWx0YXRpb246ICNmZWQwMzUsXHJcbiAgaW50ZXJ2ZW50aW9uOiAjNjYwMGNjLFxyXG4pO1xyXG5cclxuQGVhY2ggJHRyYWNrLCAkdmFsdWUgaW4gbWFwLXJlbW92ZSgkY2F0ZWdvcmllcykge1xyXG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9XCIjeyR0cmFja31cIl0gaW9uLWxhYmVsIHtcclxuICAgICYuaW5mb3JtYXRpb24ge1xyXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR2YWx1ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWNuZnJtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/patient/rendez-vous/rendez-vous.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/patient/rendez-vous/rendez-vous.page.ts ***!
  \***************************************************************/
/*! exports provided: RendezVousPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendezVousPage", function() { return RendezVousPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rendrez_vous_filter_rendrez_vous_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rendrez-vous-filter/rendrez-vous-filter.component */ "./src/app/pages/patient/rendez-vous/rendrez-vous-filter/rendrez-vous-filter.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var _new_rdv_new_rdv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-rdv/new-rdv.component */ "./src/app/pages/patient/rendez-vous/new-rdv/new-rdv.component.ts");
/* harmony import */ var src_app_services_data_transformer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/data-transformer.service */ "./src/app/services/data-transformer.service.ts");
/* harmony import */ var src_app_services_global_element_injection_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/global-element-injection.service */ "./src/app/services/global-element-injection.service.ts");
/* harmony import */ var _global_interaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../global.interaction */ "./src/app/pages/global.interaction.ts");











let RendezVousPage = class RendezVousPage {
    constructor(alertCtrl, patientSrvc, // TODO : list of data
    loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, praticientSrvc, config, dataTransformer, globaleEl, globalItem, praticienSrv) {
        this.alertCtrl = alertCtrl;
        this.patientSrvc = patientSrvc;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.toastCtrl = toastCtrl;
        this.praticientSrvc = praticientSrvc;
        this.config = config;
        this.dataTransformer = dataTransformer;
        this.globaleEl = globaleEl;
        this.globalItem = globalItem;
        this.praticienSrv = praticienSrv;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracksStates = [];
        this.excludeTracksTypes = [];
        this.shownSessions = [];
        this.rdvs = [];
        this.rdvShow = [];
        this.allBrute = [];
        this.rdvFiltered = [];
        this.REALIZED = 'REALISE';
        this.CANCELED = 'ANNULE';
        this.SCHEDULED = 'PLANIFIER';
        this.PENDING = 'EN ATTENTE';
        this.STRING_DATE = 'dateRdv';
        this.STRING2_DATE = 'dateConsultation';
    }
    ngOnInit() {
        this.globalItem.presentLoading();
        this.getAllData();
        this.ios = this.config.get('mode') === 'ios';
    }
    getAllfonction() {
        this.praticienSrv.getPraticienFunctions().subscribe((data) => {
            this.functions = data;
        });
    }
    showAccepted() {
        this.rdvFiltered = this.dataTransformer.onlyAccepted(this.rdvFiltered, 'status', this.REALIZED, this.segment);
    }
    openNewRdvModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newRdvModal = yield this.modalCtrl.create({
                component: _new_rdv_new_rdv_component__WEBPACK_IMPORTED_MODULE_7__["NewRdvComponent"],
                cssClass: 'test-class',
                swipeToClose: true,
                componentProps: {
                    // praticiens: this.praticiens,
                    funcitons: this.functions,
                    test: 'test',
                },
            });
            newRdvModal.onDidDismiss().then(() => {
                this.updateRdvList();
            });
            return yield newRdvModal.present();
        });
    }
    getAllData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.patientSrvc.getAllRdv().subscribe((data) => {
                console.log('RendezVousPage -> getAllData -> data', data);
                this.rdvs = data;
                const result = this.allData(data, this.STRING_DATE, this.STRING2_DATE);
                this.allBrute = result;
                this.rdvShow = result.data;
                this.rdvFiltered = result.dataByDate;
                this.getPraticiens();
            });
        });
    }
    updateRdvList() {
        if (this.List) {
            this.List.closeSlidingItems();
        }
    }
    // TODO : exclude on filter
    filterItems(ev) {
        const query = ev.target.value.toLowerCase();
        requestAnimationFrame(() => {
            if (!query || query === '') {
                this.showAccepted();
                return;
            }
            this.rdvFiltered = this.dataTransformer.filterItems(query, ['objetConsultation', 'vaccin'], 'status', this.segment, this.rdvFiltered, 'praticien', ['firstName', 'lastName']);
        });
    }
    alert() {
        console.log('ok ++++ ');
    }
    presentFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _rendrez_vous_filter_rendrez_vous_filter_component__WEBPACK_IMPORTED_MODULE_2__["RendrezVousFilterComponent"],
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
                componentProps: {
                    excludeTracksStates: this.excludeTracksStates,
                    excludeTracksTypes: this.excludeTracksTypes,
                },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.excludeTracksStates = data.states;
                this.excludeTracksTypes = data.types;
                this.rdvFiltered = this.dataTransformer.hideOnexclude(data.fuseData, ['type'], this.segment, this.rdvFiltered);
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
    getPraticiens() {
        // TODO APK: à decommenter
        this.praticientSrvc.getAllPraticien().subscribe((data) => {
            this.praticiens = data;
            this.globalItem.dismissLoading();
        });
    }
    alertAcceptRdv(id) {
        this.globaleEl.alertAccept(id, this.rdvs, 'status', this.REALIZED);
    }
    alertRemoveRdv(_id, _typeRdv) {
        // this.globaleEl.alertRemove(_id, this.rdvs, "status", this.CANCELED);
        this.globalItem.alertDelete({ id: _id, typeRdv: _typeRdv }, this, `tu veux vraiment annulé ce rendez-vous ?`, this.cancelRdv, `Annulation rendez-vous`);
    }
    cancelRdv(dataRdv, parent) {
        console.log('LL: RendezVousPage -> cancelRdv -> _idRdv, typeRdv', dataRdv);
        parent.patientSrvc.cancelRdvProposition(dataRdv).subscribe(() => {
            parent.globalItem.presentToast('Rendez-vous annulé!!!');
            parent.getAllData();
        });
    }
    allData(list, string_date = 'date', string2_date = 'date') {
        let dataShow = [];
        list.forEach((element) => {
            const dataToPush = Object.assign(element, { show: true });
            dataShow.push(dataToPush);
        });
        const listByDate = this.regroupDataByDate([...dataShow], string_date, string2_date);
        const res = {
            data: dataShow,
            dataByDate: listByDate,
        };
        return res;
    }
    // Regrouper les données en fonction de la date
    regroupDataByDate(data, string_date, string2_date) {
        console.log('regroupDataByDate -> string_date **** ', string_date);
        const groups = data.reduce((groups, eachData) => {
            console.log('regroupDataByDate -> eachData', eachData);
            let true_date = eachData[string_date] !== undefined
                ? (eachData[string_date] !== null ? eachData[string_date].date : new Date())
                : (eachData[string2_date] !== null ? eachData[string2_date].date : new Date());
            const type_rdv = eachData[string_date] !== undefined ? 'consultation' : 'intervention';
            const allStatus = eachData.status == null ? eachData.statusConsultation : eachData.status;
            const result = Object.assign(eachData, { type: type_rdv, _status: allStatus });
            console.log("LL: regroupDataByDate -> this.checkStatus(eachData._status, eachData.etat)", this.checkStatus(eachData._status, eachData.etat));
            const date = true_date;
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(result);
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
        console.log('regroupDataByDate -> sortedActivities', sortedActivities);
        return sortedActivities;
    }
    checkStatus(statusConsultation, etat) {
        if (statusConsultation == 0) {
            return this.PENDING;
        }
        else if (statusConsultation == 1) {
            if (etat == 0) {
                return this.SCHEDULED; // Bouton cancel
            }
            else {
                return this.REALIZED;
            }
        }
        else if (statusConsultation == 2) {
            return this.CANCELED;
        }
    }
};
RendezVousPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_4__["PraticienService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"] },
    { type: src_app_services_data_transformer_service__WEBPACK_IMPORTED_MODULE_8__["DataTransformerService"] },
    { type: src_app_services_global_element_injection_service__WEBPACK_IMPORTED_MODULE_9__["GlobalElementInjectionService"] },
    { type: _global_interaction__WEBPACK_IMPORTED_MODULE_10__["GlobalInteraction"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_4__["PraticienService"] }
];
RendezVousPage.propDecorators = {
    List: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['List', { static: true },] }]
};
RendezVousPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rendez-vous',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rendez-vous.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/rendez-vous/rendez-vous.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rendez-vous.page.scss */ "./src/app/pages/patient/rendez-vous/rendez-vous.page.scss")).default]
    })
], RendezVousPage);



/***/ }),

/***/ "./src/app/pages/patient/rendez-vous/rendrez-vous-filter/rendrez-vous-filter.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/patient/rendez-vous/rendrez-vous-filter/rendrez-vous-filter.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvcmVuZGV6LXZvdXMvcmVuZHJlei12b3VzLWZpbHRlci9yZW5kcmV6LXZvdXMtZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/patient/rendez-vous/rendrez-vous-filter/rendrez-vous-filter.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/patient/rendez-vous/rendrez-vous-filter/rendrez-vous-filter.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RendrezVousFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendrezVousFilterComponent", function() { return RendrezVousFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");




let RendrezVousFilterComponent = class RendrezVousFilterComponent {
    constructor(patientSrvc, config, modalCtrl, navParams) {
        this.patientSrvc = patientSrvc;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.trackStatsMock = [
        // {
        //   name: "ANNULE",
        //   icon: "",
        //   isChecked: true,
        // },
        // {
        //   name: "EN ATTENTE",
        //   icon: "",
        //   isChecked: true,
        // },
        // {
        //   name: "REALiSE",
        //   icon: "",
        //   isChecked: true,
        // },
        ];
        this.trackTypeMock = [
            {
                name: "Intervention",
                icon: "",
                isChecked: true,
            },
            {
                name: "Consultation",
                icon: "",
                isChecked: true,
            },
        ];
        this.tracksStates = [];
        this.tracksTypes = [];
    }
    ionViewWillEnter() {
        this.ios = this.config.get("mode") === `ios`;
        // passed in array of track names that should be excluded (unchecked)
        const excludedTrackStates = this.navParams.get("excludeTracksStates");
        console.log("RendrezVousFilterComponent -> ionViewWillEnter -> excludedTracksStates", excludedTrackStates);
        const excludedTrackTypes = this.navParams.get("excludeTracksTypes");
        console.log("RendrezVousFilterComponent -> ionViewWillEnter -> excludedTracksTypes", excludedTrackTypes);
        this.trackStatsMock.forEach((track) => {
            this.tracksStates.push({
                name: track.name,
                icon: track.icon,
                isChecked: excludedTrackStates === undefined
                    ? true
                    : excludedTrackStates.indexOf(track.name.toLowerCase()) === -1,
            });
        });
        this.trackTypeMock.forEach((track) => {
            this.tracksTypes.push({
                name: track.name,
                icon: track.icon,
                isChecked: excludedTrackTypes === undefined
                    ? true
                    : excludedTrackTypes.indexOf(track.name.toLowerCase()) === -1,
            });
        });
    }
    selectAll(check) {
        // set all to checked or unchecked
        this.tracksStates.forEach((track) => {
            track.isChecked = check;
        });
        this.tracksTypes.forEach((track) => {
            track.isChecked = check;
        });
    }
    applyFilters() {
        // Pass back a new array of track names to exclude
        const excludedTrackStatesNames = this.tracksStates
            .filter((c) => !c.isChecked)
            .map((c) => c.name.toLowerCase());
        const excludedTrackTypesNames = this.tracksTypes
            .filter((c) => !c.isChecked)
            .map((c) => c.name.toLowerCase());
        const res = excludedTrackStatesNames.concat(excludedTrackTypesNames);
        this.dismiss({
            states: excludedTrackStatesNames,
            types: excludedTrackTypesNames,
            fuseData: res,
        });
    }
    dismiss(data) {
        console.log("RendrezVousFilterComponent -> dismiss -> data", data);
        // using the injected ModalController this page
        // can "dismiss" itself and pass back data
        this.modalCtrl.dismiss(data);
    }
};
RendrezVousFilterComponent.ctorParameters = () => [
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
RendrezVousFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-rendrez-vous-filter",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rendrez-vous-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient/rendez-vous/rendrez-vous-filter/rendrez-vous-filter.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rendrez-vous-filter.component.scss */ "./src/app/pages/patient/rendez-vous/rendrez-vous-filter/rendrez-vous-filter.component.scss")).default]
    })
], RendrezVousFilterComponent);



/***/ }),

/***/ "./src/app/pages/praticien/rendez-vous/new-rendez-vous/new-rendez-vous.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/praticien/rendez-vous/new-rendez-vous/new-rendez-vous.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByYXRpY2llbi9yZW5kZXotdm91cy9uZXctcmVuZGV6LXZvdXMvbmV3LXJlbmRlei12b3VzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/praticien/rendez-vous/new-rendez-vous/new-rendez-vous.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/praticien/rendez-vous/new-rendez-vous/new-rendez-vous.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NewRendezVousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRendezVousComponent", function() { return NewRendezVousComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");





let NewRendezVousComponent = class NewRendezVousComponent {
    constructor(praticienSrvc, navCtrl, navParms, modalCtrl) {
        this.praticienSrvc = praticienSrvc;
        this.navCtrl = navCtrl;
        this.navParms = navParms;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.propositionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                patient: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                dateRdv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                heureRdv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
            console.log("NewRdvComponent -> patients -> test", this.navParms.get("patients"));
            this.patients = this.navParms.get("patients");
            this.patients.forEach((element) => {
                console.log("NewRdvComponent -> patients", element.firstName);
            });
        });
    }
    isFieldInvalid(dataFormStep, field) {
        return ((!dataFormStep.get(field).valid && dataFormStep.get(field).touched) ||
            (dataFormStep.get(field).untouched && !dataFormStep.get(field).valid));
    }
    propose() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const prop = {
                description: this.propositionForm.value.description,
                patient: this.propositionForm.value.patient,
                dateRdv: this.propositionForm.value.dateRdv,
                heureRdv: this.propositionForm.value.heureRdv,
                // id: await this.praticienSrvc.getUserIDByStorage(),
                id: 0,
            };
            console.log(this.propositionForm.value.patient, this.propositionForm.value.dateRdv, this.propositionForm.value.description, this.propositionForm.value.heureRdv, prop.id);
            if (this.propositionForm.valid) {
                console.log(" proposition envoyé ");
                this.praticienSrvc.proposeRdv(prop);
                this.backToList();
            }
            else {
                console.log(" not valid ");
            }
        });
    }
    backToList() {
        this.navCtrl.navigateRoot("/praticien/proposition-rdv");
        this.dismiss();
    }
    cancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(" cancel ");
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
};
NewRendezVousComponent.ctorParameters = () => [
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_4__["PraticienService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
NewRendezVousComponent.propDecorators = {
    test: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    patients: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
NewRendezVousComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-rendez-vous',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-rendez-vous.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/rendez-vous/new-rendez-vous/new-rendez-vous.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-rendez-vous.component.scss */ "./src/app/pages/praticien/rendez-vous/new-rendez-vous/new-rendez-vous.component.scss")).default]
    })
], NewRendezVousComponent);



/***/ }),

/***/ "./src/app/pages/praticien/rendez-vous/rendez-vous-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/praticien/rendez-vous/rendez-vous-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RendezVousPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendezVousPageRoutingModule", function() { return RendezVousPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rendez_vous_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rendez-vous.page */ "./src/app/pages/praticien/rendez-vous/rendez-vous.page.ts");




const routes = [
    {
        path: '',
        component: _rendez_vous_page__WEBPACK_IMPORTED_MODULE_3__["RendezVousPage"]
    }
];
let RendezVousPageRoutingModule = class RendezVousPageRoutingModule {
};
RendezVousPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RendezVousPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/praticien/rendez-vous/rendez-vous.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/praticien/rendez-vous/rendez-vous.module.ts ***!
  \*******************************************************************/
/*! exports provided: RendezVousPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendezVousPageModule", function() { return RendezVousPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rendez_vous_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rendez-vous-routing.module */ "./src/app/pages/praticien/rendez-vous/rendez-vous-routing.module.ts");
/* harmony import */ var _rendez_vous_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rendez-vous.page */ "./src/app/pages/praticien/rendez-vous/rendez-vous.page.ts");
/* harmony import */ var _new_rendez_vous_new_rendez_vous_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-rendez-vous/new-rendez-vous.component */ "./src/app/pages/praticien/rendez-vous/new-rendez-vous/new-rendez-vous.component.ts");








let RendezVousPageModule = class RendezVousPageModule {
};
RendezVousPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rendez_vous_routing_module__WEBPACK_IMPORTED_MODULE_5__["RendezVousPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_rendez_vous_page__WEBPACK_IMPORTED_MODULE_6__["RendezVousPage"], _new_rendez_vous_new_rendez_vous_component__WEBPACK_IMPORTED_MODULE_7__["NewRendezVousComponent"]]
    })
], RendezVousPageModule);



/***/ }),

/***/ "./src/app/pages/praticien/rendez-vous/rendez-vous.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/praticien/rendez-vous/rendez-vous.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n* Material Design uses the ripple for activated\n* so only style the iOS activated background\n*/\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic] ion-label.information {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 3px;\n}\n\nion-item-sliding[track=vaccination] ion-label.information {\n  border-left: 2px solid #8e8d93;\n  padding-left: 3px;\n}\n\nion-item-sliding[track=consultation] ion-label.information {\n  border-left: 2px solid #fed035;\n  padding-left: 3px;\n}\n\nion-item-sliding[track=intervention] ion-label.information {\n  border-left: 2px solid #6600cc;\n  padding-left: 3px;\n}\n\n.status {\n  text-align: right;\n  width: 90px;\n}\n\n.middle {\n  display: flex;\n  align-items: center;\n}\n\n.btn-cnfrm {\n  display: flex;\n  justify-content: center;\n}\n\nion-col > ion-button {\n  min-width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJhdGljaWVuL3JlbmRlei12b3VzL3JlbmRlei12b3VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUFBO0VBQ0Esc0RBQUE7RUFDQSx3REFBQTtFQUVBLDBDQUFBO0FBQUY7O0FBR0E7OztDQUFBOztBQUlBO0VBQ0UsMERBQUE7QUFBRjs7QUFZSTtFQUNFLCtDQUFBO0VBQ0EsaUJBQUE7QUFUTjs7QUFPSTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUFKTjs7QUFFSTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUFDTjs7QUFISTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUFNTjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFJRjs7QUFEQTtFQUNFLGdCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmF0aWNpZW4vcmVuZGV6LXZvdXMvcmVuZGV6LXZvdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZmZmKTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2YyZjJmMik7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XHJcblxyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcclxufVxyXG5cclxuLypcclxuKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcclxuKiBzbyBvbmx5IHN0eWxlIHRoZSBpT1MgYWN0aXZhdGVkIGJhY2tncm91bmRcclxuKi9cclxuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcclxufVxyXG5cclxuJGNhdGVnb3JpZXM6IChcclxuICBpb25pYzogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gIHZhY2NpbmF0aW9uOiAjOGU4ZDkzLFxyXG4gIGNvbnN1bHRhdGlvbjogI2ZlZDAzNSxcclxuICBpbnRlcnZlbnRpb246ICM2NjAwY2MsXHJcbik7XHJcblxyXG5AZWFjaCAkdHJhY2ssICR2YWx1ZSBpbiBtYXAtcmVtb3ZlKCRjYXRlZ29yaWVzKSB7XHJcbiAgaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz0nI3skdHJhY2t9J10gaW9uLWxhYmVsIHtcclxuICAgICYuaW5mb3JtYXRpb24ge1xyXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR2YWx1ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWNuZnJtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY29sID4gaW9uLWJ1dHRvbiB7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/praticien/rendez-vous/rendez-vous.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/praticien/rendez-vous/rendez-vous.page.ts ***!
  \*****************************************************************/
/*! exports provided: RendezVousPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendezVousPage", function() { return RendezVousPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/praticien.service */ "./src/app/services/praticien.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/patient.service */ "./src/app/services/patient.service.ts");
/* harmony import */ var src_app_services_data_transformer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data-transformer.service */ "./src/app/services/data-transformer.service.ts");
/* harmony import */ var src_app_services_global_element_injection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/global-element-injection.service */ "./src/app/services/global-element-injection.service.ts");
/* harmony import */ var _global_interaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../global.interaction */ "./src/app/pages/global.interaction.ts");
/* harmony import */ var _new_rendez_vous_new_rendez_vous_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-rendez-vous/new-rendez-vous.component */ "./src/app/pages/praticien/rendez-vous/new-rendez-vous/new-rendez-vous.component.ts");










let RendezVousPage = class RendezVousPage {
    constructor(alertCtrl, patientSrvc, // TODO : list of data
    loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, praticientSrvc, config, dataTransformer, globaleEl, globalItem, praticienSrvc) {
        this.alertCtrl = alertCtrl;
        this.patientSrvc = patientSrvc;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.toastCtrl = toastCtrl;
        this.praticientSrvc = praticientSrvc;
        this.config = config;
        this.dataTransformer = dataTransformer;
        this.globaleEl = globaleEl;
        this.globalItem = globalItem;
        this.praticienSrvc = praticienSrvc;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracksStates = [];
        this.excludeTracksTypes = [];
        this.shownSessions = [];
        this.rdvs = [];
        this.rdvShow = [];
        this.allBrute = [];
        this.rdvFiltered = [];
        this.REALIZED = 'REALISE';
        this.CANCELED = 'ANNULE';
        this.SCHEDULED = 'PLANIFIER';
        this.PENDING = 'EN ATTENTE';
        this.STRING_DATE = 'dateRdv';
        this.STRING2_DATE = 'dateConsultation';
    }
    ngOnInit() {
        this.ios = this.config.get('mode') === 'ios';
        this.getAllData();
    }
    openNewRdvModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newRdvModal = yield this.modalCtrl.create({
                component: _new_rendez_vous_new_rendez_vous_component__WEBPACK_IMPORTED_MODULE_9__["NewRendezVousComponent"],
                cssClass: 'test-class',
                swipeToClose: true,
                componentProps: {
                    // praticiens: this.praticiens,
                    funcitons: this.functions,
                    test: 'test',
                },
            });
            newRdvModal.onDidDismiss().then(() => {
                this.updateRdvList();
            });
            return yield newRdvModal.present();
        });
    }
    getAllData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.praticienSrvc.getAllRdv().subscribe((data) => {
                console.log('RendezVousPage -> getAllData -> data', data);
                this.rdvs = data;
                const result = this.allData(data, this.STRING_DATE, this.STRING2_DATE);
                this.allBrute = result;
                this.rdvShow = result.data;
                this.rdvFiltered = result.dataByDate;
                this.getPraticiens();
            });
        });
    }
    updateRdvList() {
        if (this.List) {
            this.List.closeSlidingItems();
        }
    }
    // TODO : exclude on filter
    filterItems(ev) {
        const query = ev.target.value.toLowerCase();
        requestAnimationFrame(() => {
            if (!query || query === '') {
                return;
            }
            this.rdvFiltered = this.dataTransformer.filterItems(query, ['objetConsultation', 'vaccin'], 'status', this.segment, this.rdvFiltered, 'praticien', ['firstName', 'lastName']);
        });
    }
    alert() {
        console.log('ok ++++ ');
    }
    presentFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: "RendrezVousFilterComponent",
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
                componentProps: {
                    excludeTracksStates: this.excludeTracksStates,
                    excludeTracksTypes: this.excludeTracksTypes,
                },
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.excludeTracksStates = data.states;
                this.excludeTracksTypes = data.types;
                this.rdvFiltered = this.dataTransformer.hideOnexclude(data.fuseData, ['type'], this.segment, this.rdvFiltered);
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
    getPraticiens() {
        // TODO APK: à decommenter
        this.praticientSrvc.getAllPraticien().subscribe((data) => {
            this.praticiens = data;
            this.globalItem.dismissLoading();
        });
    }
    alertAcceptRdv(id) {
        this.globaleEl.alertAccept(id, this.rdvs, 'status', this.REALIZED);
    }
    alertRemoveRdv(_id, _typeRdv) {
        // this.globaleEl.alertRemove(_id, this.rdvs, "status", this.CANCELED);
        this.globalItem.alertDelete({ id: _id, typeRdv: _typeRdv }, this, `tu veux vraiment annulé ce rendez-vous ?`, this.cancelRdv, `Annulation rendez-vous`);
    }
    cancelRdv(dataRdv, parent) {
        console.log('LL: RendezVousPage -> cancelRdv -> _idRdv, typeRdv', dataRdv);
        parent.patientSrvc.cancelRdvProposition(dataRdv).subscribe(() => {
            parent.globalItem.presentToast('Rendez-vous annulé!!!');
            parent.getAllData();
        });
    }
    allData(list, string_date = 'date', string2_date = 'date') {
        let dataShow = [];
        list.forEach((element) => {
            const dataToPush = Object.assign(element, { show: true });
            dataShow.push(dataToPush);
        });
        const listByDate = this.regroupDataByDate([...dataShow], string_date, string2_date);
        const res = {
            data: dataShow,
            dataByDate: listByDate,
        };
        return res;
    }
    // Regrouper les données en fonction de la date
    regroupDataByDate(data, string_date, string2_date) {
        console.log('regroupDataByDate -> string_date **** ', string_date);
        const groups = data.reduce((groups, eachData) => {
            console.log('regroupDataByDate -> eachData', eachData);
            let true_date = eachData[string_date] !== undefined
                ? (eachData[string_date] !== null ? eachData[string_date].date : new Date())
                : (eachData[string2_date] !== null ? eachData[string2_date].date : new Date());
            const type_rdv = eachData[string_date] !== undefined ? 'consultation' : 'intervention';
            const allStatus = eachData.status == null ? eachData.statusConsultation : eachData.status;
            const result = Object.assign(eachData, { type: type_rdv, _status: allStatus, date: true_date });
            console.log("LL: regroupDataByDate -> this.checkStatus(eachData._status, eachData.etat)", this.checkStatus(eachData._status, eachData.etat));
            const date = true_date;
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(result);
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
        console.log('regroupDataByDate -> sortedActivities', sortedActivities);
        return sortedActivities;
    }
    checkStatus(statusConsultation, etat) {
        if (statusConsultation == 0) {
            return this.PENDING;
        }
        else if (statusConsultation == 1) {
            if (etat == 0) {
                return this.SCHEDULED; // Bouton cancel
            }
            else {
                return this.REALIZED;
            }
        }
        else if (statusConsultation == 2) {
            return this.CANCELED;
        }
    }
};
RendezVousPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__["PraticienService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"] },
    { type: src_app_services_data_transformer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransformerService"] },
    { type: src_app_services_global_element_injection_service__WEBPACK_IMPORTED_MODULE_7__["GlobalElementInjectionService"] },
    { type: _global_interaction__WEBPACK_IMPORTED_MODULE_8__["GlobalInteraction"] },
    { type: src_app_services_praticien_service__WEBPACK_IMPORTED_MODULE_3__["PraticienService"] }
];
RendezVousPage.propDecorators = {
    List: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['List', { static: true },] }]
};
RendezVousPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rendez-vous',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rendez-vous.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/praticien/rendez-vous/rendez-vous.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rendez-vous.page.scss */ "./src/app/pages/praticien/rendez-vous/rendez-vous.page.scss")).default]
    })
], RendezVousPage);



/***/ }),

/***/ "./src/app/services/global-element-injection.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/global-element-injection.service.ts ***!
  \**************************************************************/
/*! exports provided: GlobalElementInjectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalElementInjectionService", function() { return GlobalElementInjectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let GlobalElementInjectionService = class GlobalElementInjectionService {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    alertAccept(id, array = [], keyStatus = "status", OkStatus = "Accepted") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: "my-custom-class",
                header: "Accept",
                message: "Do you really want to accept it ? ",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            console.log("Confirm Cancel: blah");
                        },
                    },
                    {
                        text: "OK",
                        handler: () => {
                            console.log("data accepted " + id);
                            this.accept(id, array, keyStatus, OkStatus);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    alertRemove(id, array = [], keyStatus = "status", RefuseStatus = "Refused") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: "my-custom-class",
                header: "Refuse",
                message: "Do you really want to refuse it ? ",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            console.log("Confirm Cancel: blah");
                        },
                    },
                    {
                        text: "OK",
                        handler: () => {
                            console.log("data refused " + id);
                            this.remove(id, array, keyStatus, RefuseStatus);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    // TODO:change by id // actually it s his name
    accept(id, array = [], keyStatus = "status", OkStatus = "Accepted") {
        array.find((element) => element.id == id)[`${keyStatus}`] = OkStatus;
    }
    remove(id, array = [], keyStatus = "status", RefuseStatus = "Refused") {
        const el = (test) => test.id == id;
        array.find((element) => element.id == id)[`${keyStatus}`] = RefuseStatus;
        const index = array.findIndex(el);
        console.log(el);
        array.slice(index);
    }
};
GlobalElementInjectionService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
GlobalElementInjectionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], GlobalElementInjectionService);



/***/ })

}]);
//# sourceMappingURL=rendez-vous-rendez-vous-module-es2015.js.map