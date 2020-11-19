(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~rendez-vous-rendez-vous-module~vaccination-vaccination-module"],{

/***/ "./src/app/services/data-transformer.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/data-transformer.service.ts ***!
  \******************************************************/
/*! exports provided: DataTransformerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransformerService", function() { return DataTransformerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DataTransformerService = class DataTransformerService {
    constructor() { }
    allData(list, string_date = "date") {
        let dataShow = [];
        list.forEach((element) => {
            const dataToPush = Object.assign(element, { show: true });
            dataShow.push(dataToPush);
        });
        const listByDate = this.regroupDataByDate([...dataShow], string_date);
        const res = {
            data: dataShow,
            dataByDate: listByDate,
        };
        return res;
    }
    // Regrouper les données en fonction de la date
    regroupDataByDate(data, string_date) {
        const groups = data.reduce((groups, eachData) => {
            // console.log("regroupDataByDate -> eachData", eachData)
            // const date = eachData.date_prise.split("T")[0];
            const date = eachData[string_date].date;
            // const date = eachData.date;
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(eachData);
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
    filterItems(query, keysOnFilter = [], keysStatus = "status", segment = "all", dataToFilter = [], subKeyParent = null, subkeysOnFilter, OkStatus = "Accepted") {
        const newData = [...dataToFilter];
        newData.forEach((item) => {
            item.groups.forEach((res) => {
                let goOnSecondFilter = false;
                if (segment == "all") {
                    if (subKeyParent != null) {
                        for (let element of subkeysOnFilter) {
                            if (res[`${subKeyParent}`][`${element}`]
                                .toLowerCase()
                                .includes(query)) {
                                // console.log(
                                //   "regroupDataByDate -> subKeyParent true ==========> ",
                                //   res
                                // );
                                res.show = true;
                                goOnSecondFilter = true;
                                break;
                            }
                            else {
                                res.show = false;
                            }
                        }
                    }
                    if (goOnSecondFilter == false) {
                        for (let element of keysOnFilter) {
                            if (res[`${element}`].toLowerCase().includes(query)) {
                                res.show = true;
                                break;
                            }
                            else {
                                res.show = false;
                            }
                        }
                    }
                }
                else {
                    if (res[`${keysStatus}`] === OkStatus) {
                        if (subKeyParent) {
                            for (let element of subkeysOnFilter) {
                                if (res[`${subKeyParent}`][`${element}`]
                                    .toLowerCase()
                                    .includes(query)) {
                                    res.show = true;
                                    goOnSecondFilter = true;
                                    break;
                                }
                                else {
                                    res.show = false;
                                }
                            }
                        }
                    }
                    if (goOnSecondFilter == false) {
                        for (let element of keysOnFilter) {
                            if (res[`${element}`].toLowerCase().includes(query)) {
                                res.show = true;
                                break;
                            }
                            else {
                                res.show = false;
                            }
                        }
                    }
                }
            });
        });
        // console.log("newData", newData);
        return newData;
    }
    hideOnexclude(exculed = [], keysOnFilter = [], segment = "all", dataToFilter = [], keysStatus = "status") {
        const newData = [...dataToFilter];
        newData.forEach((item) => {
            item.groups.forEach((element) => {
                if (segment == "all") {
                    for (let key of keysOnFilter) {
                        // console.log(
                        //   "key",
                        //   key,
                        //   "exculeded",
                        //   exculed,
                        //   "//////////////////////////",
                        //   element[`${key}`].toLowerCase()
                        // );
                        if (exculed.includes(element[`${key}`].toLowerCase())) {
                            element.show = false;
                            // console.log("element.show ---------------- ", element.show);
                            break;
                        }
                        else {
                            element.show = true;
                        }
                    }
                }
                else {
                    if (element[`${keysStatus}`] === "Accepted") {
                        for (let key of keysOnFilter) {
                            if (exculed.includes(element[`${key}`].toLowerCase())) {
                                element.show = false;
                                break;
                            }
                            else {
                                element.show = true;
                            }
                        }
                    }
                }
            });
        });
        // console.log("newData", newData);
        return newData;
    }
    onlyAccepted(dataToFilter = [], keysStatus, acceptedString = "Accepted", segment = "all") {
        const newData = [...dataToFilter];
        if (segment === "all") {
            newData.forEach((item) => {
                item.groups.forEach((res) => {
                    res.show = true;
                });
            });
            return newData;
        }
        newData.forEach((item) => {
            item.groups.forEach((res) => {
                const status = res[`${keysStatus}`];
                if (status === acceptedString) {
                    res.show = true;
                }
                else {
                    res.show = false;
                }
            });
        });
        return newData;
    }
};
DataTransformerService.ctorParameters = () => [];
DataTransformerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DataTransformerService);



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



/***/ }),

/***/ "./src/app/services/patient.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constant */ "./src/constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let PatientService = class PatientService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev;
        this.url_api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev_api;
        this.url_apip = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev;
    }
    // TODO Get Patients
    getPatients() {
        return this.http.get(this.url + "patients");
        // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
        //   map((data: any) => {
        //     return data.mockPatient;
        //   })
        // );
    }
    getAllRdv() {
        return this.http.get(`${this.url_apip}patients/rdv`);
        // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
        //   map((data: any) => {
        //     return data.mockRdvListPatient;
        //   })
        // );
    }
    getTracksRdv(excludeTracks) {
        return this.http.get(src_constant__WEBPACK_IMPORTED_MODULE_2__["CONSTANT"].MOCK_DATA_JSON).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            // console.log("PatientService -> getTracksRdv -> data", excludeTracks);
            return data;
        }));
    }
    //TODO : Get Vaccin by patient
    getVaccinByPatient() {
        return this.http.get(`${this.url_apip}patients/vaccination`);
        // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
        //   map((data: any) => {
        //     return data.mockVaccinPatient;
        //   })
        // );
    }
    registerPatient(data) {
        return this.http.post(`${this.url_api}users`, data);
        Object.keys(data).forEach((element) => {
            console.log("PatientService -> registerPatient -> element", element);
            console.log("register => ", data[element]);
        });
    }
    getProfile() {
        return this.http.get(`${this.url_apip}patient/profile`);
        // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
        //   map((data: any) => {
        //     return data.mockPatientProfile;
        //   })
        // );
    }
    updateProfile(data) {
        return this.http.post(`${this.url_apip}patient/profile/edit`, data);
    }
    getAssociatedPraticians() {
        const res = this.http.get(`${this.url_apip}patients/praticien`);
        res.subscribe(data => {
            console.log("PatientService -> constructor -> res", data);
        });
        return res;
    }
    getFamily() {
        const res = this.http.get(`${this.url_apip}patients/family`);
        res.subscribe(data => console.log("PatientService -> getFamily -> res", data));
        return res;
    }
    addGroupFamily(nomGroupe) {
        const data = {
            designation: nomGroupe,
        };
        console.log("LL: PatientService -> addGroupFamily -> data", data);
        const res = this.http.post(`${this.url_apip}register/group`, data);
        return res;
    }
    addGroupFamilyMember(data) {
        console.log("PatientService -> addGroupFamilyMember -> data", data);
        const res = this.http.post(`${this.url_api}add/membres`, data);
        return res;
    }
    deleteFamilyMember(_idFamily) {
        const res = this.http.delete(`${this.url_api}family/${_idFamily}`);
        return res;
    }
    interventionPraticien(data) {
        console.log("####################LL: PatientService -> interventionPraticien -> data", data);
        const res = this.http.post(`${this.url_apip}intervention`, data);
        return res;
    }
    chekIfPractitionerIsAssociated(_idPraticien) {
        const res = this.http.get(`${this.url_apip}patients/check-association/${_idPraticien}`);
        return res;
    }
    proposeRdv(data) {
        const res = this.http.post(`${this.url_apip}add/rdv`, data);
        return res;
    }
    cancelRdvProposition(data) {
        const res = this.http.post(`${this.url_api}cancel/rdv`, data);
        return res;
    }
    postVaccinGeneration(_idPraticien) {
        const res = this.http.post(`${this.url_apip}patient/generation`, { praticien: _idPraticien });
        return res;
    }
};
PatientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PatientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], PatientService);



/***/ })

}]);
//# sourceMappingURL=default~rendez-vous-rendez-vous-module~vaccination-vaccination-module-es2015.js.map