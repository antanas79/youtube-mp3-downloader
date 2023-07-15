(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/antanas/Downloads/youtube-mp3-downloader/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4HhO":
    /*!*********************************************************!*\
      !*** ./src/app/modules/shared/services/getVideoInfo.ts ***!
      \*********************************************************/

    /*! exports provided: GetVideoInfoService */

    /***/
    function HhO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetVideoInfoService", function () {
        return GetVideoInfoService;
      });
      /* harmony import */


      var _youtube_mp3_downloader_panel_pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../youtube-mp3-downloader-panel/pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component */
      "Dadq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var GetVideoInfoService = /*#__PURE__*/function () {
        function GetVideoInfoService(route, http) {
          _classCallCheck(this, GetVideoInfoService);

          this.route = route;
          this.http = http;
          this.projects = _youtube_mp3_downloader_panel_pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_0__["defaultProjects"];
        }

        _createClass(GetVideoInfoService, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (params["projects"] && JSON.parse(params["projects"])) {
                _this.projects = JSON.parse(params["projects"]);
              }
            });
          }
        }, {
          key: "getVideoId",
          value: function getVideoId(q) {
            var _a;

            return this.http.get("https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=" + q + "&key=" + ((_a = this.projects.find(function (p) {
              return p.name === localStorage.getItem("project");
            })) === null || _a === void 0 ? void 0 : _a.apiKey));
          }
        }, {
          key: "getVideoTitleById",
          value: function getVideoTitleById(id) {
            var _a;

            return this.http.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + id + "&key=" + ((_a = this.projects.find(function (p) {
              return p.name === localStorage.getItem("project");
            })) === null || _a === void 0 ? void 0 : _a.apiKey));
          }
        }]);

        return GetVideoInfoService;
      }();

      GetVideoInfoService.ɵfac = function GetVideoInfoService_Factory(t) {
        return new (t || GetVideoInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      GetVideoInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GetVideoInfoService,
        factory: GetVideoInfoService.ɵfac
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Dadq":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/modules/youtube-mp3-downloader-panel/pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: googleApiWindow, defaultProjects, YoutubeMp3DownloaderPanelComponent */

    /***/
    function Dadq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "googleApiWindow", function () {
        return googleApiWindow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultProjects", function () {
        return defaultProjects;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "YoutubeMp3DownloaderPanelComponent", function () {
        return YoutubeMp3DownloaderPanelComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_services_getVideoInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/getVideoInfo */
      "4HhO");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "B/XX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function YoutubeMp3DownloaderPanelComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_13_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r5.trimStart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Trim");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_13_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r7.trimCharacter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Trim character");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " EDITABLE SEARCHES: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function YoutubeMp3DownloaderPanelComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_tr_14_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);

            var i_r9 = ctx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r10.deleteEditableSearchItem(i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r9 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r9, " -- ");
        }
      }

      function YoutubeMp3DownloaderPanelComponent_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r12.addToSearchArray();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Add to search array ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function YoutubeMp3DownloaderPanelComponent_div_17_div_2_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_17_div_2_tr_1_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);

            var i_r17 = ctx.index;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);

            return ctx_r18.deleteSearchItem(i_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r17 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r17, " -- ");
        }
      }

      function YoutubeMp3DownloaderPanelComponent_div_17_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, YoutubeMp3DownloaderPanelComponent_div_17_div_2_tr_1_Template, 9, 2, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_17_div_2_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r20.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.searchArray.controls);
        }
      }

      function YoutubeMp3DownloaderPanelComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " EDITED SEARCHES: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, YoutubeMp3DownloaderPanelComponent_div_17_div_2_Template, 6, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.form.value.searchArray.length > 0);
        }
      }

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "downloading": a0,
          "downloaded": a1,
          "error": a2
        };
      };

      function YoutubeMp3DownloaderPanelComponent_ng_container_18_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_ng_container_18_div_13_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);

            var i_r25 = ctx.index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r26.moveToIncorrectList(i_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Move To Incorrect ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_ng_container_18_div_13_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);

            var i_r25 = ctx.index;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r28.deleteFound(i_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r25 = ctx.index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](6, _c0, ctx_r22.foundVideosArray[i_r25].downloading, !ctx_r22.foundVideosArray[i_r25].downloading && !ctx_r22.foundVideosArray[i_r25].error, !ctx_r22.foundVideosArray[i_r25].error));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r22.foundVideosArray[i_r25].downloading ? "downloading" : "downloaded", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("href", "", ctx_r22.youtubeLinkFirstPart, "", ctx_r22.foundVideosArray[i_r25].videoId, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r22.foundVideosArray[i_r25].searchedValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r22.foundVideosArray[i_r25].title);
        }
      }

      function YoutubeMp3DownloaderPanelComponent_ng_container_18_div_14_tr_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r31 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r31);
        }
      }

      function YoutubeMp3DownloaderPanelComponent_ng_container_18_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " INCORRECT SEARCHES: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, YoutubeMp3DownloaderPanelComponent_ng_container_18_div_14_tr_2_Template, 4, 1, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r23.form.value.incorrectArray);
        }
      }

      function YoutubeMp3DownloaderPanelComponent_ng_container_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " FOUND VIDEOS: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Searched item");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Found youtube item title");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Move/delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, YoutubeMp3DownloaderPanelComponent_ng_container_18_div_13_Template, 13, 10, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, YoutubeMp3DownloaderPanelComponent_ng_container_18_div_14_Template, 5, 1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.foundVideosArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.form.value.incorrectArray.length > 0);
        }
      }

      var googleApiWindow = /*#__PURE__*/function (_Window) {
        _inherits(googleApiWindow, _Window);

        var _super = _createSuper(googleApiWindow);

        function googleApiWindow() {
          _classCallCheck(this, googleApiWindow);

          return _super.apply(this, arguments);
        }

        return googleApiWindow;
      }( /*#__PURE__*/_wrapNativeSuper(Window));

      window.gapi = window.gapi || {};
      var defaultProjects = [{
        name: "youtube-mp3-downloader-392415",
        apiKey: "AIzaSyBTqkGKqxG1HWRPf7E7c4FSdWjBlIaWVZw"
      }, {
        name: "youtube-downloader-310313",
        apiKey: "AIzaSyCVFuPYF1DCVTKf3GydrbcG7bY0Ws15DBw"
      }, {
        name: "youtube-mp3-downloader-3",
        apiKey: "AIzaSyDvYrlBR551TYemye4-l1crGmjoFW-Tk6I"
      }];

      var YoutubeMp3DownloaderPanelComponent = /*#__PURE__*/function () {
        //@ts-ignore
        // mode: "instant-download" | "download-after-button-click" = localStorage.getItem("mode");
        function YoutubeMp3DownloaderPanelComponent(window, _formBuilder, getVideoInfoService, sanitizer, route) {
          _classCallCheck(this, YoutubeMp3DownloaderPanelComponent);

          this.window = window;
          this._formBuilder = _formBuilder;
          this.getVideoInfoService = getVideoInfoService;
          this.sanitizer = sanitizer;
          this.route = route;
          this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.youtubeLinkFirstPart = "https://www.youtube.com/watch?v=";
          this.loaded = false;
          this.gapiLoaded = false;
          this.foundVideosArray = [];
          this.iframeUrls = [];
          this.titlesArray = [];
          this.projects = defaultProjects;
          this.shouldStartDownload = false;
          this.env = localStorage.getItem("env");
        }

        _createClass(YoutubeMp3DownloaderPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var _a;

            this.route.queryParams.subscribe(function (params) {
              if (params["projects"] && JSON.parse(params["projects"])) {
                _this2.projects = JSON.parse(params["projects"]);
              }
            });
            (_a = this.authenticate()) === null || _a === void 0 ? void 0 : _a.then(this.loadClient());
            this.form = this._formBuilder.group({
              search: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              editableSearchArray: this._formBuilder.array([]),
              numberToTrimFromStart: [localStorage.getItem("numberToTrimFromStart") || 0],
              whatCharacterToTrim: [localStorage.getItem("whatCharacterToTrim") || ""],
              searchArray: this._formBuilder.array([]),
              incorrectArray: this._formBuilder.array([])
            });
            window.addEventListener("message", function (message) {
              console.log({
                messageReceivedWithData: message
              });

              if (message.data.data.data) {
                _this2.foundVideosArray[message.data.data.data].downloading = message.data.data.data.downloading;
                _this2.foundVideosArray[message.data.data.data].error = message.data.data.data.error;
              }
            });
          }
        }, {
          key: "editableSearchArray",
          get: function get() {
            return this.form.get("editableSearchArray");
          }
        }, {
          key: "searchArray",
          get: function get() {
            return this.form.get("searchArray");
          }
        }, {
          key: "toggleShouldStartDownload",
          value: function toggleShouldStartDownload() {
            this.shouldStartDownload = !this.shouldStartDownload;
          }
        }, {
          key: "authenticate",
          value: function authenticate() {
            var _a, _b, _c;

            console.log({
              apiKey: (_a = this.projects.find(function (p) {
                return p.name === localStorage.getItem("project");
              })) === null || _a === void 0 ? void 0 : _a.apiKey
            }); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

            return (_c = (_b = this.window.gapi.auth2) === null || _b === void 0 ? void 0 : _b.getAuthInstance()) === null || _c === void 0 ? void 0 : _c.signIn({
              scope: "https://www.googleapis.com/auth/youtube.force-ssl"
            }).then(function () {
              console.log("Sign-in successful");
            }, function (err) {
              console.error("Error signing in", err);
            });
          }
        }, {
          key: "loadClient",
          value: function loadClient() {
            var _a, _b, _c;

            this.window.gapi.client.setApiKey(((_a = this.projects.find(function (p) {
              return p.name === localStorage.getItem("project");
            })) === null || _a === void 0 ? void 0 : _a.apiKey) || "AIzaSyCVFuPYF1DCVTKf3GydrbcG7bY0Ws15DBw"); //a.popliauskis

            return (_c = (_b = this.window.gapi.client) === null || _b === void 0 ? void 0 : _b.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")) === null || _c === void 0 ? void 0 : _c.then(function () {
              console.log("GAPI client loaded for API");
            }, function (err) {
              console.error("Error loading GAPI client for API", err);
            });
          }
        }, {
          key: "search",
          value: function search() {
            var _this3 = this;

            var _loop = function _loop(i) {
              _this3.getVideoInfoService.getVideoId(_this3.form.value.searchArray[i].searchValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this3.ngUnsubscribe)).subscribe(function (resp) {
                if (resp) {
                  _this3.getVideoInfoService.getVideoTitleById(resp.items[0].id.videoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this3.ngUnsubscribe)).subscribe(function (res) {
                    var url = _this3.youtubeLinkFirstPart + resp.items[0].id.videoId + "&f=mp3&quality=320&color=64c896&youtubeVideoId=" + resp.items[0].id.videoId;

                    var sanitizedUrl = _this3.sanitizer.bypassSecurityTrustResourceUrl(url);

                    _this3.foundVideosArray.push({
                      title: res.items[0].snippet.title,
                      videoId: resp.items[0].id.videoId,
                      iframeUrl: sanitizedUrl,
                      githubIframeUrl: _this3.sanitizer.bypassSecurityTrustResourceUrl("https://convert2mp3s.com/api/single/mp3?url=" + url),
                      localIframeUrl: _this3.sanitizer.bypassSecurityTrustResourceUrl("assets/loader.html?url=" + url),
                      searchedValue: _this3.form.value.searchArray[i].searchValue,
                      downloading: true,
                      error: false
                    });

                    setTimeout(function () {
                      var _a, _b, _c;

                      if (((_c = (_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.searchArray) === null || _c === void 0 ? void 0 : _c.length) - 1 == i) {
                        console.log(this.foundVideosArray);
                        var searchlist = this.form.get("searchArray");
                        searchlist.clear();
                        this.loaded = true;
                      }
                    }, 5000);
                  });
                }
              });
            };

            for (var i = 0; i < this.form.value.searchArray.length; i++) {
              _loop(i);
            }
          }
        }, {
          key: "trimStart",
          value: function trimStart() {
            var list = this.form.get("editableSearchArray");
            var numberToTrimFromStart = this.form.value.numberToTrimFromStart;

            for (var i = 0; i < list.controls.length; i++) {
              list.at(i).get("searchValue").patchValue(list.at(i).get("searchValue").value.substring(numberToTrimFromStart));
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            console.log({
              changes: changes
            });
          }
        }, {
          key: "trimCharacter",
          value: function trimCharacter() {
            var list = this.form.get("editableSearchArray");
            var whatCharacterToTrim = this.form.value.whatCharacterToTrim;

            for (var i = 0; i < list.controls.length; i++) {
              list.at(i).get("searchValue").patchValue(list.at(i).get("searchValue").value.replace(whatCharacterToTrim, ""));
            }
          }
        }, {
          key: "addToSearchArray",
          value: function addToSearchArray() {
            var editableList = this.form.get("editableSearchArray");
            var searchlist = this.form.get("searchArray");

            for (var i = 0; i < editableList.controls.length; i++) {
              searchlist.push(this._formBuilder.group({
                searchValue: [editableList.at(i).get("searchValue").value]
              }));
            }

            editableList.clear();
            this.form.get("search").patchValue(null);
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this4 = this;

            var enteredSearchArray = this.form.getRawValue().search.split("\n");
            var editableSearchArray = this.form.controls.editableSearchArray;
            enteredSearchArray.forEach(function (search) {
              editableSearchArray.push(_this4._formBuilder.group({
                searchValue: [search]
              }));
            });
          }
        }, {
          key: "deleteEditableSearchItem",
          value: function deleteEditableSearchItem(i) {
            this.form.get("editableSearchArray").removeAt(i);
          }
        }, {
          key: "deleteSearchItem",
          value: function deleteSearchItem(i) {
            this.form.get("searchArray").removeAt(i);
          }
        }, {
          key: "moveToIncorrectList",
          value: function moveToIncorrectList(i) {
            var incorrectArray = this.form.get("incorrectArray");
            incorrectArray.push(this._formBuilder.group({
              searchValue: [this.form.value.searchArray[i].searchValue]
            }));
            this.form.get("searchArray").removeAt(i);
            this.foundVideosArray.splice(i, 1);
          }
        }, {
          key: "deleteFound",
          value: function deleteFound(i) {
            this.foundVideosArray.splice(i, 1);
          }
        }, {
          key: "deleteIncorrect",
          value: function deleteIncorrect(i) {
            this.form.get("incorrectArray").removeAt(i);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
          }
        }, {
          key: "downloadAll",
          value: function downloadAll() {
            window.parent.postMessage({
              foundVideosArray: this.foundVideosArray,
              downloadAll: true
            }, "*");
          }
        }]);

        return YoutubeMp3DownloaderPanelComponent;
      }();

      YoutubeMp3DownloaderPanelComponent.ɵfac = function YoutubeMp3DownloaderPanelComponent_Factory(t) {
        return new (t || YoutubeMp3DownloaderPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](googleApiWindow), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_getVideoInfo__WEBPACK_IMPORTED_MODULE_1__["GetVideoInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
      };

      YoutubeMp3DownloaderPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: YoutubeMp3DownloaderPanelComponent,
        selectors: [["app-youtube-mp3-downloader-panel"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["STEPPER_GLOBAL_OPTIONS"],
          useValue: {
            showError: true
          }
        }, _shared_services_getVideoInfo__WEBPACK_IMPORTED_MODULE_1__["GetVideoInfoService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
        decls: 19,
        vars: 6,
        consts: [[1, "col-12", "d-flex", "justify-content-end"], [2, "height", "50px", "margin-top", "15px", 3, "click"], [1, "col-12", "p-0", "d-flex", "flex-wrap", 3, "formGroup"], [1, "col-6", "p-0"], ["mat-button", "", "type", "submit", 3, "click"], [2, "background-color", "white", "border-color", "white", "padding", "5px", "width", "240px"], [2, "height", "500px"], ["matInput", "", "formControlName", "search", "placeholder", "Enter list values separated by tab", 2, "height", "500px !important", "width", "500px"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["class", "col-6 p-0", 4, "ngIf"], ["matInput", "", "formControlName", "numberToTrimFromStart", "type", "number", "placeholder", "How many chars to trim from start"], ["mat-button", "", 3, "click"], ["matInput", "", "formControlName", "whatCharacterToTrim", "type", "text", "placeholder", "What character to trim"], ["formArrayName", "editableSearchArray"], [3, "formGroupName"], ["matInput", "", "formControlName", "searchValue", "type", "text"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", 3, "click"], ["formArrayName", "searchArray"], [1, "d-flex", "col-12", "p-0"], [1, "border-top", "border-bottom", "mb-2", "d-flex", "align-items-center", "col-12", "p-0"], [1, "col-3"], ["class", "d-flex col-12 p-0", 4, "ngFor", "ngForOf"], ["class", "mt-3 pt-3", 4, "ngIf"], [1, "col-3", 3, "ngClass"], ["target", "_blank", 1, "col-3", 3, "href"], [1, "col-3", "d-flex"], ["mat-raised-button", "", "color", "accent", 1, "mr-1", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "mt-3", "pt-3"], ["formArrayName", "incorrectArray"], ["formControlName", "searchValue"]],
        template: function YoutubeMp3DownloaderPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_Template_button_click_2_listener() {
              return ctx.downloadAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "DOWNLOAD ALL");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_Template_button_click_6_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "SUBMIT");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "textarea", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, YoutubeMp3DownloaderPanelComponent_div_13_Template, 15, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, YoutubeMp3DownloaderPanelComponent_tr_14_Template, 9, 2, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, YoutubeMp3DownloaderPanelComponent_button_16_Template, 2, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, YoutubeMp3DownloaderPanelComponent_div_17_Template, 5, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, YoutubeMp3DownloaderPanelComponent_ng_container_18_Template, 15, 2, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editableSearchArray.controls.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.editableSearchArray.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.value.editableSearchArray.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.value.searchArray.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.foundVideosArray.length > 0);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]],
        styles: [".downloading[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.downloaded[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.error[_ngcontent-%COMP%] {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3lvdXR1YmUtbXAzLWRvd25sb2FkZXItcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBQTtBQUNEOztBQUVBO0VBQ0MsdUJBQUE7QUFDRDs7QUFFQTtFQUNDLHFCQUFBO0FBQ0QiLCJmaWxlIjoieW91dHViZS1tcDMtZG93bmxvYWRlci1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3dubG9hZGluZyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLmRvd25sb2FkZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmVycm9yIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuIl19 */"]
      });
      YoutubeMp3DownloaderPanelComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: YoutubeMp3DownloaderPanelComponent,
        factory: YoutubeMp3DownloaderPanelComponent.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "FpXt":
    /*!*************************************************!*\
      !*** ./src/app/modules/shared/shared.module.ts ***!
      \*************************************************/

    /*! exports provided: SharedModule */

    /***/
    function FpXt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "youtube-mp3-downloader";
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [[1, "content-container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modules/shared/shared.module */
      "FpXt");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _modules_youtube_mp3_downloader_panel_pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modules/youtube-mp3-downloader-panel/pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component */
      "Dadq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [{
          provide: _modules_youtube_mp3_downloader_panel_pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_5__["googleApiWindow"],
          useValue: window
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"],
          useValue: "/" + (window.location.href.includes("localhost") ? "" : "youtube-mp3-downloader/")
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-youtube-mp3-downloader-panel-youtube-mp3-downloader-panel-module */
          "modules-youtube-mp3-downloader-panel-youtube-mp3-downloader-panel-module").then(__webpack_require__.bind(null,
          /*! ./modules/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.module */
          "ykjJ")).then(function (m) {
            return m.YoutubeMp3DownloaderPanel;
          });
        },
        data: {
          title: "Form page"
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: "legacy"
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map