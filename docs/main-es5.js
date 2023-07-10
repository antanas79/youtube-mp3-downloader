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

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    "6ZYd":
    /*!*********************************************!*\
      !*** ./src/app/modules/core/core.module.ts ***!
      \*********************************************/

    /*! exports provided: CoreModule */

    /***/
    function ZYd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./footer/footer.component */
      "isrl");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header/header.component */
      "STPy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule.ɵfac = function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      };

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreModule, {
          declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
        });
      })();
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


      var _pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pipe/safe.pipe */
      "QU/F");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"]]
        });
      })();
      /***/

    },

    /***/
    "JlfH":
    /*!************************************************!*\
      !*** ./src/app/modules/shared/classes/step.ts ***!
      \************************************************/

    /*! exports provided: Step */

    /***/
    function JlfH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Step", function () {
        return Step;
      });

      var Step = function Step() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Step);

        var _a;

        this.label = (_a = options.label) !== null && _a !== void 0 ? _a : "";
        this.key = options.key;
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.isEditable = options.isEditable;
        this.questions = options.questions;
        this.text = options.text;
      };
      /***/

    },

    /***/
    "Oxbd":
    /*!*************************************************************!*\
      !*** ./src/app/modules/shared/services/question.service.ts ***!
      \*************************************************************/

    /*! exports provided: QuestionService */

    /***/
    function Oxbd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionService", function () {
        return QuestionService;
      });
      /* harmony import */


      var _classes_question_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../classes/question-dropdown */
      "tKVC");
      /* harmony import */


      var _classes_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../classes/step */
      "JlfH");
      /* harmony import */


      var _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../classes/question-textbox */
      "n562");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var QuestionService = /*#__PURE__*/function () {
        function QuestionService( // @Inject(googleApiWindow) public window: googleApiWindow,
        http) {
          _classCallCheck(this, QuestionService);

          this.http = http;
        }

        _createClass(QuestionService, [{
          key: "getLoanStepsWithQuestions",
          value: function getLoanStepsWithQuestions() {
            var steps = [new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
              required: true,
              order: 0,
              isEditable: true,
              label: "Income",
              questions: [new _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"]({
                key: "income",
                label: "Income",
                placeholder: "Monthy Income After Taxes (EUR)",
                required: true,
                type: "number",
                value: null
              })]
            }), new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
              required: true,
              order: 1,
              isEditable: true,
              label: "Contact Method",
              questions: [new _classes_question_dropdown__WEBPACK_IMPORTED_MODULE_0__["DropdownQuestion"]({
                key: "contactMethod",
                label: "Contact method",
                placeholder: "Contact method",
                required: true,
                options: [{
                  key: "none",
                  value: 0,
                  label: "Select one"
                }, {
                  key: "phone",
                  value: 1,
                  label: "Phone call"
                }, {
                  key: "email",
                  value: 2,
                  label: "Email"
                }, {
                  key: "sms",
                  value: 3,
                  label: "SMS"
                }],
                value: 0
              })]
            }), new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
              required: true,
              order: 2,
              isEditable: true,
              label: "Contact",
              questions: [new _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"]({
                key: "contact",
                label: "Phone number",
                placeholder: "Enter phone (+370)",
                required: true,
                value: null,
                type: "number"
              })]
            }), new _classes_step__WEBPACK_IMPORTED_MODULE_1__["Step"]({
              required: true,
              order: 3,
              isEditable: true,
              label: "Amount",
              questions: [new _classes_question_textbox__WEBPACK_IMPORTED_MODULE_2__["TextboxQuestion"]({
                key: "amount",
                label: "Loan amount",
                placeholder: "Loan Amount (EUR)",
                type: "number",
                required: true,
                value: null,
                order: 3
              })]
            })];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(steps.sort(function (a, b) {
              return a.order - b.order;
            }));
          }
        }, {
          key: "getVideoId",
          value: function getVideoId(q) {
            return this.http.get('https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=' + q + '&key=AIzaSyCVFuPYF1DCVTKf3GydrbcG7bY0Ws15DBw');
          }
        }, {
          key: "getVideoTitleById",
          value: function getVideoTitleById(id) {
            return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=AIzaSyCVFuPYF1DCVTKf3GydrbcG7bY0Ws15DBw');
          }
        }]);

        return QuestionService;
      }();

      QuestionService.ɵfac = function QuestionService_Factory(t) {
        return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: QuestionService,
        factory: QuestionService.ɵfac
      });
      /***/
    },

    /***/
    "QU/F":
    /*!**************************************************!*\
      !*** ./src/app/modules/shared/pipe/safe.pipe.ts ***!
      \**************************************************/

    /*! exports provided: SafePipe */

    /***/
    function QUF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
        return SafePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /**
       * Sanitize HTML
       */


      var SafePipe = /*#__PURE__*/function () {
        /**
         * Pipe Constructor
         *
         * @param _sanitizer: DomSanitezer
         */
        // tslint:disable-next-line
        function SafePipe(_sanitizer) {
          _classCallCheck(this, SafePipe);

          this._sanitizer = _sanitizer;
        }
        /**
         * Transform
         *
         * @param value: string
         * @param type: string
         */


        _createClass(SafePipe, [{
          key: "transform",
          value: function transform(value, type) {
            switch (type) {
              case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);

              case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);

              case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);

              case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);

              case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);

              default:
                return this._sanitizer.bypassSecurityTrustHtml(value);
            }
          }
        }]);

        return SafePipe;
      }();

      SafePipe.ɵfac = function SafePipe_Factory(t) {
        return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
      };

      SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safe",
        type: SafePipe,
        pure: true
      });
      /***/
    },

    /***/
    "STPy":
    /*!*********************************************************!*\
      !*** ./src/app/modules/core/header/header.component.ts ***!
      \*********************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function STPy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = function HeaderComponent() {//do nothing

        _classCallCheck(this, HeaderComponent);
      };

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 2,
        vars: 0,
        consts: [[1, "content-container"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["header[_ngcontent-%COMP%] {\n  background: #ebe7ec;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM1LDIzMSwyMzYpO1xufSJdfQ== */"]
      });
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


      var _modules_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modules/core/header/header.component */
      "STPy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _modules_core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modules/core/footer/footer.component */
      "isrl");

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
        decls: 5,
        vars: 0,
        consts: [[1, "content-container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
          }
        },
        directives: [_modules_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _modules_core_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "UjCR":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/loan-form-reactive/pages/loan-form-reactive/loan-form-reactive.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: googleApiWindow, LoanFormReactiveComponent */

    /***/
    function UjCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "googleApiWindow", function () {
        return googleApiWindow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoanFormReactiveComponent", function () {
        return LoanFormReactiveComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/question.service */
      "Oxbd");
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoanFormReactiveComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_div_9_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r5.trimStart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Trim");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_div_9_Template_button_click_10_listener() {
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

      function LoanFormReactiveComponent_tr_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_tr_10_Template_button_click_7_listener() {
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

      function LoanFormReactiveComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r12.addToSearchArray();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Add to search array");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function LoanFormReactiveComponent_div_13_div_2_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_div_13_div_2_tr_1_Template_button_click_7_listener() {
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

      function LoanFormReactiveComponent_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoanFormReactiveComponent_div_13_div_2_tr_1_Template, 9, 2, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_div_13_div_2_Template_button_click_4_listener() {
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

      function LoanFormReactiveComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " EDITED SEARCHES: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoanFormReactiveComponent_div_13_div_2_Template, 6, 1, "div", 4);

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

      function LoanFormReactiveComponent_ng_container_14_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "iframe", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_ng_container_14_div_13_Template_iframe_click_2_listener($event) {
            $event.preventDefault();
            return false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_ng_container_14_div_13_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);

            var i_r25 = ctx.index;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r27.moveToIncorrectList(i_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Move To Incorrect");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_ng_container_14_div_13_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);

            var i_r25 = ctx.index;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r29.deleteFound(i_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r25 = ctx.index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r22.foundVideosArray[i_r25].iframeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeResourceUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("href", "", ctx_r22.youtubeLinkFirstPart, "", ctx_r22.foundVideosArray[i_r25].videoId, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r22.foundVideosArray[i_r25].searchedValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r22.foundVideosArray[i_r25].title, " ");
        }
      }

      function LoanFormReactiveComponent_ng_container_14_div_14_tr_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r32 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r32);
        }
      }

      function LoanFormReactiveComponent_ng_container_14_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " INCORRECT SEARCHES: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoanFormReactiveComponent_ng_container_14_div_14_tr_2_Template, 4, 1, "tr", 5);

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

      function LoanFormReactiveComponent_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " FOUND VIDEOS: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Searched item ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Found youtube item title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Move/delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, LoanFormReactiveComponent_ng_container_14_div_13_Template, 12, 5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, LoanFormReactiveComponent_ng_container_14_div_14_Template, 5, 1, "div", 21);

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

      var LoanFormReactiveComponent = /*#__PURE__*/function () {
        function LoanFormReactiveComponent(window, _formBuilder, questionService, sanitizer, route) {
          _classCallCheck(this, LoanFormReactiveComponent);

          this.window = window;
          this._formBuilder = _formBuilder;
          this.questionService = questionService;
          this.sanitizer = sanitizer;
          this.route = route;
          this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.youtubeLinkFirstPart = "https://www.youtube.com/watch?v=";
          this.loaded = false;
          this.gapiLoaded = false;
          this.foundVideosArray = [];
          this.iframeUrls = [];
          this.titlesArray = [];
          this.projects = [{
            name: "youtube-mp3-downloader-310317",
            apiKey: "AIzaSyCBdENLaNBmlzLO8pOkW6U0fB1ck8ZZfmw"
          }, {
            name: "youtube-downloader-310313",
            apiKey: "AIzaSyCVFuPYF1DCVTKf3GydrbcG7bY0Ws15DBw"
          }, {
            name: "yelp-camp-final-192619",
            apiKey: "AIzaSyAxR0JLrvXg7JG9vw4ZIsNrRRpj_1s3anQ"
          }, {
            name: "antano-projektas-1527270489554",
            apiKey: "AIzaSyBysEdNbj0M6ukqvcUz6C9cZETj4BbXWNk"
          }, {
            name: "my-project-1516388874589",
            apiKey: "AIzaSyD72RK3MzzkeKT7qtejBjieqXiWcBOC0N4"
          }];
        }

        _createClass(LoanFormReactiveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var _a;

            this.route.queryParams.subscribe(function (params) {
              if (params['projects'] && JSON.parse(params['projects'])) {
                _this.projects = JSON.parse(params['projects']);
              }
            });
            (_a = this.authenticate()) === null || _a === void 0 ? void 0 : _a.then(this.loadClient());
            this.form = this._formBuilder.group({
              search: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              editableSearchArray: this._formBuilder.array([]),
              numberToTrimFromStart: [0],
              whatCharacterToTrim: [""],
              searchArray: this._formBuilder.array([]),
              incorrectArray: this._formBuilder.array([])
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
          key: "authenticate",
          value: function authenticate() {
            var _a, _b; // eslint-disable-next-line @typescript-eslint/no-unsafe-return


            return (_b = (_a = this.window.gapi.auth2) === null || _a === void 0 ? void 0 : _a.getAuthInstance()) === null || _b === void 0 ? void 0 : _b.signIn({
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
            var _this2 = this;

            var _loop = function _loop(i) {
              _this2.questionService.getVideoId(_this2.form.value.searchArray[i].searchValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this2.ngUnsubscribe)).subscribe(function (resp) {
                if (resp) {
                  _this2.questionService.getVideoTitleById(resp.items[0].id.videoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this2.ngUnsubscribe)).subscribe(function (res) {
                    console.log({
                      window: _this2.window.location.href
                    });
                    console.log({
                      windowIncludes: _this2.window.location.href.includes("localhost")
                    });
                    var url = (_this2.window.location.href.includes("localhost") ? "" : "youtube-mp3-downloader/docs/") + "assets/loader.html/?url=" + _this2.youtubeLinkFirstPart + resp.items[0].id.videoId + "&f=mp3&color=64c896&youtubeVideoId=" + resp.items[0].id.videoId;
                    console.log({
                      url: url
                    });

                    var sanitizedUrl = _this2.sanitizer.bypassSecurityTrustResourceUrl(url);

                    _this2.foundVideosArray.push({
                      title: res.items[0].snippet.title,
                      videoId: resp.items[0].id.videoId,
                      iframeUrl: sanitizedUrl,
                      searchedValue: _this2.form.value.searchArray[i].searchValue
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
            var _this3 = this;

            var enteredSearchArray = this.form.getRawValue().search.split("\n");
            var editableSearchArray = this.form.controls.editableSearchArray;
            enteredSearchArray.forEach(function (search) {
              editableSearchArray.push(_this3._formBuilder.group({
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
            this.foundVideosArray.splice(i, 1); // this.iframeUrls.splice(i, 1);
            // this.titlesArray.splice(i, 1);

            console.log(this.form.getRawValue());
          }
        }, {
          key: "deleteFound",
          value: function deleteFound(i) {
            this.foundVideosArray.splice(i, 1); // this.iframeUrls.splice(i, 1);
            // this.titlesArray.splice(i, 1);
          }
        }, {
          key: "deleteIncorrect",
          value: function deleteIncorrect(i) {
            this.form.get("incorrectArray").removeAt(i);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // prevent memory leak when component destroyed
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            console.log("changes");
          }
        }]);

        return LoanFormReactiveComponent;
      }();

      LoanFormReactiveComponent.ɵfac = function LoanFormReactiveComponent_Factory(t) {
        return new (t || LoanFormReactiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](googleApiWindow), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
      };

      LoanFormReactiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: LoanFormReactiveComponent,
        selectors: [["app-loan-form-reactive"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["STEPPER_GLOBAL_OPTIONS"],
          useValue: {
            showError: true
          }
        }, _shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
        decls: 15,
        vars: 6,
        consts: [[1, "col-12", "p-0", "d-flex", "flex-wrap", 3, "formGroup"], [1, "col-6", "p-0"], ["matInput", "", "formControlName", "search"], ["mat-button", "", "type", "submit", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["class", "col-6 p-0", 4, "ngIf"], ["matInput", "", "formControlName", "numberToTrimFromStart", "type", "number", "placeholder", "How many chars to trim from start"], ["mat-button", "", 3, "click"], ["matInput", "", "formControlName", "whatCharacterToTrim", "type", "text", "placeholder", "What character to trim"], ["formArrayName", "editableSearchArray"], [3, "formGroupName"], ["matInput", "", "formControlName", "searchValue", "type", "text"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", 3, "click"], ["formArrayName", "searchArray"], [1, "d-flex", "col-12", "p-0"], [1, "border-top", "border-bottom", "mb-2", "d-flex", "align-items-center", "col-12", "p-0"], [1, "col-3"], ["class", "d-flex col-12 p-0", 4, "ngFor", "ngForOf"], ["class", "mt-3 pt-3", 4, "ngIf"], ["download", "", "scrolling", "no", 1, "col-3", "mr-3", 2, "width", "230px", "height", "60px", "border", "0", "overflow", "hidden", 3, "src", "click"], ["target", "_blank", 1, "col-3", 3, "href"], [1, "col-3", "d-flex"], ["mat-raised-button", "", "color", "accent", 1, "mr-1", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "mt-3", "pt-3"], ["formArrayName", "incorrectArray"], ["formControlName", "searchValue"]],
        template: function LoanFormReactiveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "textarea", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoanFormReactiveComponent_Template_button_click_6_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "SUBMIT");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, LoanFormReactiveComponent_div_9_Template, 15, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, LoanFormReactiveComponent_tr_10_Template, 9, 2, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, LoanFormReactiveComponent_button_12_Template, 2, 0, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, LoanFormReactiveComponent_div_13_Template, 5, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, LoanFormReactiveComponent_ng_container_14_Template, 15, 2, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

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
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLWZvcm0tcmVhY3RpdmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      LoanFormReactiveComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: LoanFormReactiveComponent,
        factory: LoanFormReactiveComponent.ɵfac,
        providedIn: "root"
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


      var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modules/core/core.module */
      "6ZYd");
      /* harmony import */


      var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modules/shared/shared.module */
      "FpXt");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _modules_loan_form_reactive_pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modules/loan-form-reactive/pages/loan-form-reactive/loan-form-reactive.component */
      "UjCR");
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
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [{
          provide: _modules_loan_form_reactive_pages_loan_form_reactive_loan_form_reactive_component__WEBPACK_IMPORTED_MODULE_6__["googleApiWindow"],
          useValue: window
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _modules_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _modules_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]
        });
      })();
      /***/

    },

    /***/
    "dLIH":
    /*!*********************************************************!*\
      !*** ./src/app/modules/shared/classes/question-base.ts ***!
      \*********************************************************/

    /*! exports provided: QuestionBase */

    /***/
    function dLIH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionBase", function () {
        return QuestionBase;
      });

      var QuestionBase = function QuestionBase() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, QuestionBase);

        this.value = options.value;
        this.key = options.key || "";
        this.placeholder = options.placeholder || "";
        this.label = options.label || "";
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || "";
        this.type = options.type || "";
        this.options = options.options || [];
      };
      /***/

    },

    /***/
    "isrl":
    /*!*********************************************************!*\
      !*** ./src/app/modules/core/footer/footer.component.ts ***!
      \*********************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function isrl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = function FooterComponent() {//do nothing

        _classCallCheck(this, FooterComponent);
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        consts: [[1, "content-container"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["footer[_ngcontent-%COMP%] {\n  background: #ebe7ec;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG1CQUFBO0FBQ0QiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcblx0YmFja2dyb3VuZDogcmdiKDIzNSwgMjMxLCAyMzYpO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "n562":
    /*!************************************************************!*\
      !*** ./src/app/modules/shared/classes/question-textbox.ts ***!
      \************************************************************/

    /*! exports provided: TextboxQuestion */

    /***/
    function n562(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function () {
        return TextboxQuestion;
      });
      /* harmony import */


      var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./question-base */
      "dLIH");

      var TextboxQuestion = /*#__PURE__*/function (_question_base__WEBPA) {
        _inherits(TextboxQuestion, _question_base__WEBPA);

        var _super2 = _createSuper(TextboxQuestion);

        function TextboxQuestion() {
          var _this4;

          _classCallCheck(this, TextboxQuestion);

          _this4 = _super2.apply(this, arguments);
          _this4.controlType = "textbox";
          return _this4;
        }

        return TextboxQuestion;
      }(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]);
      /***/

    },

    /***/
    "tKVC":
    /*!*************************************************************!*\
      !*** ./src/app/modules/shared/classes/question-dropdown.ts ***!
      \*************************************************************/

    /*! exports provided: DropdownQuestion */

    /***/
    function tKVC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function () {
        return DropdownQuestion;
      });
      /* harmony import */


      var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./question-base */
      "dLIH");

      var DropdownQuestion = /*#__PURE__*/function (_question_base__WEBPA2) {
        _inherits(DropdownQuestion, _question_base__WEBPA2);

        var _super3 = _createSuper(DropdownQuestion);

        function DropdownQuestion() {
          var _this5;

          _classCallCheck(this, DropdownQuestion);

          _this5 = _super3.apply(this, arguments);
          _this5.controlType = "dropdown";
          return _this5;
        }

        return DropdownQuestion;
      }(_question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"]);
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
          /*! import() | modules-loan-form-reactive-loan-form-reactive-module */
          "modules-loan-form-reactive-loan-form-reactive-module").then(__webpack_require__.bind(null,
          /*! ./modules/loan-form-reactive/loan-form-reactive.module */
          "SJsF")).then(function (m) {
            return m.LoanFormReactiveModule;
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