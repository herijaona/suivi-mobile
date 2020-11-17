(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~rendez-vous-rendez-vous-module~vaccination-vaccination-module"], {
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
              var _this = this;

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
                          if (!_this.isLoading) {
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
                          handler: function handler() {
                            console.log("Confirm Cancel: blah");
                          }
                        }, {
                          text: "OK",
                          handler: function handler() {
                            console.warn("data deleted " + id); // this.remove(id, array, keyStatus, RefuseStatus);

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
    "./src/app/services/data-transformer.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/services/data-transformer.service.ts ***!
      \******************************************************/

    /*! exports provided: DataTransformerService */

    /***/
    function srcAppServicesDataTransformerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTransformerService", function () {
        return DataTransformerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DataTransformerService = /*#__PURE__*/function () {
        function DataTransformerService() {
          _classCallCheck(this, DataTransformerService);
        }

        _createClass(DataTransformerService, [{
          key: "allData",
          value: function allData(list) {
            var string_date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "date";
            var dataShow = [];
            list.forEach(function (element) {
              var dataToPush = Object.assign(element, {
                show: true
              });
              dataShow.push(dataToPush);
            });
            var listByDate = this.regroupDataByDate([].concat(dataShow), string_date);
            var res = {
              data: dataShow,
              dataByDate: listByDate
            };
            return res;
          } // Regrouper les données en fonction de la date

        }, {
          key: "regroupDataByDate",
          value: function regroupDataByDate(data, string_date) {
            var groups = data.reduce(function (groups, eachData) {
              console.log("regroupDataByDate -> eachData", eachData); // const date = eachData.date_prise.split("T")[0];

              var date = eachData[string_date].date; // const date = eachData.date;

              if (!groups[date]) {
                groups[date] = [];
              }

              groups[date].push(eachData);
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
          key: "filterItems",
          value: function filterItems(query) {
            var keysOnFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var keysStatus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "status";
            var segment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "all";
            var dataToFilter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
            var subKeyParent = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            var subkeysOnFilter = arguments.length > 6 ? arguments[6] : undefined;
            var OkStatus = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "Accepted";

            var newData = _toConsumableArray(dataToFilter);

            newData.forEach(function (item) {
              item.groups.forEach(function (res) {
                var goOnSecondFilter = false;

                if (segment == "all") {
                  if (subKeyParent != null) {
                    var _iterator = _createForOfIteratorHelper(subkeysOnFilter),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var element = _step.value;

                        if (res["".concat(subKeyParent)]["".concat(element)].toLowerCase().includes(query)) {
                          console.log("regroupDataByDate -> subKeyParent true ==========> ", res);
                          res.show = true;
                          goOnSecondFilter = true;
                          break;
                        } else {
                          res.show = false;
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }

                  if (goOnSecondFilter == false) {
                    var _iterator2 = _createForOfIteratorHelper(keysOnFilter),
                        _step2;

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var _element = _step2.value;

                        if (res["".concat(_element)].toLowerCase().includes(query)) {
                          res.show = true;
                          break;
                        } else {
                          res.show = false;
                        }
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                } else {
                  if (res["".concat(keysStatus)] === OkStatus) {
                    if (subKeyParent) {
                      var _iterator3 = _createForOfIteratorHelper(subkeysOnFilter),
                          _step3;

                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          var _element2 = _step3.value;

                          if (res["".concat(subKeyParent)]["".concat(_element2)].toLowerCase().includes(query)) {
                            res.show = true;
                            goOnSecondFilter = true;
                            break;
                          } else {
                            res.show = false;
                          }
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                    }
                  }

                  if (goOnSecondFilter == false) {
                    var _iterator4 = _createForOfIteratorHelper(keysOnFilter),
                        _step4;

                    try {
                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                        var _element3 = _step4.value;

                        if (res["".concat(_element3)].toLowerCase().includes(query)) {
                          res.show = true;
                          break;
                        } else {
                          res.show = false;
                        }
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }
                  }
                }
              });
            });
            console.log("newData", newData);
            return newData;
          }
        }, {
          key: "hideOnexclude",
          value: function hideOnexclude() {
            var exculed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var keysOnFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var segment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "all";
            var dataToFilter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            var keysStatus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "status";

            var newData = _toConsumableArray(dataToFilter);

            newData.forEach(function (item) {
              item.groups.forEach(function (element) {
                if (segment == "all") {
                  var _iterator5 = _createForOfIteratorHelper(keysOnFilter),
                      _step5;

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var key = _step5.value;
                      console.log("key", key, "exculeded", exculed, "//////////////////////////", element["".concat(key)].toLowerCase());

                      if (exculed.includes(element["".concat(key)].toLowerCase())) {
                        element.show = false;
                        console.log("element.show ---------------- ", element.show);
                        break;
                      } else {
                        element.show = true;
                      }
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                } else {
                  if (element["".concat(keysStatus)] === "Accepted") {
                    var _iterator6 = _createForOfIteratorHelper(keysOnFilter),
                        _step6;

                    try {
                      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                        var _key = _step6.value;

                        if (exculed.includes(element["".concat(_key)].toLowerCase())) {
                          element.show = false;
                          break;
                        } else {
                          element.show = true;
                        }
                      }
                    } catch (err) {
                      _iterator6.e(err);
                    } finally {
                      _iterator6.f();
                    }
                  }
                }
              });
            });
            console.log("newData", newData);
            return newData;
          }
        }, {
          key: "onlyAccepted",
          value: function onlyAccepted() {
            var dataToFilter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var keysStatus = arguments.length > 1 ? arguments[1] : undefined;
            var acceptedString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Accepted";
            var segment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "all";

            var newData = _toConsumableArray(dataToFilter);

            if (segment === "all") {
              newData.forEach(function (item) {
                item.groups.forEach(function (res) {
                  res.show = true;
                });
              });
              return newData;
            }

            newData.forEach(function (item) {
              item.groups.forEach(function (res) {
                var status = res["".concat(keysStatus)];

                if (status === acceptedString) {
                  res.show = true;
                } else {
                  res.show = false;
                }
              });
            });
            return newData;
          }
        }]);

        return DataTransformerService;
      }();

      DataTransformerService.ctorParameters = function () {
        return [];
      };

      DataTransformerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], DataTransformerService);
      /***/
    },

    /***/
    "./src/app/services/global-data.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/global-data.service.ts ***!
      \*************************************************/

    /*! exports provided: GlobalDataService */

    /***/
    function srcAppServicesGlobalDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalDataService", function () {
        return GlobalDataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var GlobalDataService = /*#__PURE__*/function () {
        function GlobalDataService(http) {
          _classCallCheck(this, GlobalDataService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url_dev;
          this.url_api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url_dev_api;
        }

        _createClass(GlobalDataService, [{
          key: "getCountry",
          value: function getCountry() {
            var res = this.http.get(this.url_api + "country");
            res.subscribe(function (data) {
              console.log("GlobalDataService -> getCountry -> data", data);
            });
            return res;
          }
        }, {
          key: "getCity",
          value: function getCity(id) {
            var res = this.http.get(this.url_api + "city?id=".concat(id));
            console.log("GlobalDataService -> constructor -> this.url_api + `city?id=${id}`", this.url_api + "city?id=".concat(id));
            res.subscribe(function (data) {
              console.log("GlobalDataService -> getCity -> data", data);
            });
            return res;
          }
        }, {
          key: "getCountryByPratictitionerFunction",
          value: function getCountryByPratictitionerFunction(_idPractitionerFunction) {
            var res = this.http.post("".concat(this.url_api, "country/fonction"), {
              id_fonction: _idPractitionerFunction
            });
            return res;
          }
        }, {
          key: "getCityByPractitionerFunctionAndCountry",
          value: function getCityByPractitionerFunctionAndCountry(_idPractitionerFunction, _idCountry) {
            var res = this.http.post("".concat(this.url_api, "city/fonction"), {
              id_fonction: _idPractitionerFunction,
              id_country: _idCountry
            });
            return res;
          }
        }, {
          key: "getPractitionerByFunctionCountryAndCity",
          value: function getPractitionerByFunctionCountryAndCity(_idPractitionerFunction, _idCountry, _idCity) {
            var res = this.http.post("".concat(this.url_api, "praticien/fonction"), {
              id_fonction: _idPractitionerFunction,
              id_country: _idCountry,
              id_city: _idCity
            });
            return res;
          }
        }, {
          key: "getCenterHealthByCity",
          value: function getCenterHealthByCity(_idCity) {
            var res = this.http.post("".concat(this.url_api, "praticien/centre"), {
              id: _idCity
            });
            return res;
          }
        }, {
          key: "getPraticienByCenter",
          value: function getPraticienByCenter(_idCenter) {
            var res = this.http.post("".concat(this.url_api, "centre/praticien"), {
              id: _idCenter
            });
            return res;
          }
        }]);

        return GlobalDataService;
      }();

      GlobalDataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      GlobalDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], GlobalDataService);
      /***/
    },

    /***/
    "./src/app/services/patient.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/patient.service.ts ***!
      \*********************************************/

    /*! exports provided: PatientService */

    /***/
    function srcAppServicesPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatientService", function () {
        return PatientService;
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


      var src_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/constant */
      "./src/constant.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var PatientService = /*#__PURE__*/function () {
        function PatientService(http) {
          _classCallCheck(this, PatientService);

          this.http = http;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev;
          this.url_api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev_api;
          this.url_apip = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url_dev;
        } // TODO Get Patients


        _createClass(PatientService, [{
          key: "getPatients",
          value: function getPatients() {
            return this.http.get(this.url + "patients"); // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
            //   map((data: any) => {
            //     return data.mockPatient;
            //   })
            // );
          }
        }, {
          key: "getAllRdv",
          value: function getAllRdv() {
            return this.http.get("".concat(this.url_apip, "patients/rdv")); // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
            //   map((data: any) => {
            //     return data.mockRdvListPatient;
            //   })
            // );
          }
        }, {
          key: "getTracksRdv",
          value: function getTracksRdv(excludeTracks) {
            return this.http.get(src_constant__WEBPACK_IMPORTED_MODULE_2__["CONSTANT"].MOCK_DATA_JSON).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              console.log("PatientService -> getTracksRdv -> data", excludeTracks);
              return data;
            }));
          } //TODO : Get Vaccin by patient

        }, {
          key: "getVaccinByPatient",
          value: function getVaccinByPatient() {
            return this.http.get("".concat(this.url_apip, "patients/vaccination")); // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
            //   map((data: any) => {
            //     return data.mockVaccinPatient;
            //   })
            // );
          }
        }, {
          key: "registerPatient",
          value: function registerPatient(data) {
            return this.http.post("".concat(this.url_api, "users"), data);
            Object.keys(data).forEach(function (element) {
              console.log("PatientService -> registerPatient -> element", element);
              console.log("register => ", data[element]);
            });
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return this.http.get("".concat(this.url_apip, "patient/profile")); // return this.http.get(CONSTANT.MOCK_DATA_JSON).pipe(
            //   map((data: any) => {
            //     return data.mockPatientProfile;
            //   })
            // );
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(data) {
            return this.http.post("".concat(this.url_apip, "patient/profile/edit"), data);
          }
        }, {
          key: "getAssociatedPraticians",
          value: function getAssociatedPraticians() {
            var res = this.http.get("".concat(this.url_apip, "patients/praticien"));
            res.subscribe(function (data) {
              console.log("PatientService -> constructor -> res", data);
            });
            return res;
          }
        }, {
          key: "getFamily",
          value: function getFamily() {
            var res = this.http.get("".concat(this.url_apip, "patients/family"));
            res.subscribe(function (data) {
              return console.log("PatientService -> getFamily -> res", data);
            });
            return res;
          }
        }, {
          key: "addGroupFamily",
          value: function addGroupFamily(nomGroupe) {
            var data = {
              designation: nomGroupe
            };
            console.log("LL: PatientService -> addGroupFamily -> data", data);
            var res = this.http.post("".concat(this.url_apip, "register/group"), data);
            return res;
          }
        }, {
          key: "addGroupFamilyMember",
          value: function addGroupFamilyMember(data) {
            console.log("PatientService -> addGroupFamilyMember -> data", data);
            var res = this.http.post("".concat(this.url_api, "add/membres"), data);
            return res;
          }
        }, {
          key: "deleteFamilyMember",
          value: function deleteFamilyMember(_idFamily) {
            var res = this.http["delete"]("".concat(this.url_api, "family/").concat(_idFamily));
            return res;
          }
        }, {
          key: "interventionPraticien",
          value: function interventionPraticien(data) {
            console.log("####################LL: PatientService -> interventionPraticien -> data", data);
            var res = this.http.post("".concat(this.url_apip, "intervention"), data);
            return res;
          }
        }, {
          key: "chekIfPractitionerIsAssociated",
          value: function chekIfPractitionerIsAssociated(_idPraticien) {
            var res = this.http.get("".concat(this.url_apip, "patients/check-association/").concat(_idPraticien));
            return res;
          }
        }, {
          key: "proposeRdv",
          value: function proposeRdv(data) {
            var res = this.http.post("".concat(this.url_apip, "add/rdv"), data);
            return res;
          }
        }, {
          key: "cancelRdvProposition",
          value: function cancelRdvProposition(data) {
            var res = this.http.post("".concat(this.url_api, "cancel/rdv"), data);
            return res;
          }
        }, {
          key: "postVaccinGeneration",
          value: function postVaccinGeneration(_idPraticien) {
            var res = this.http.post("".concat(this.url_apip, "patient/generation"), {
              praticien: _idPraticien
            });
            return res;
          }
        }]);

        return PatientService;
      }();

      PatientService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      PatientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], PatientService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~rendez-vous-rendez-vous-module~vaccination-vaccination-module-es5.js.map