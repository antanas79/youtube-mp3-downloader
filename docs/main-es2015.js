(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/antanas/Downloads/youtube-mp3-downloader/src/main.ts */"zUnb");


/***/ }),

/***/ "4HhO":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/services/getVideoInfo.ts ***!
  \*********************************************************/
/*! exports provided: GetVideoInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVideoInfoService", function() { return GetVideoInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GetVideoInfoService {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.projects = JSON.parse(localStorage.getItem("projects"));
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if (params["projects"] && JSON.parse(params["projects"])) {
                this.projects = JSON.parse(params["projects"]);
            }
        });
    }
    getVideoId(q) {
        var _a;
        return this.http.get("https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=" +
            q +
            "&key=" + ((_a = this.projects.find((p) => p.name === localStorage.getItem("project"))) === null || _a === void 0 ? void 0 : _a.apiKey));
    }
    getVideoTitleById(id) {
        var _a;
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
            id +
            "&key=" + ((_a = this.projects.find((p) => p.name === localStorage.getItem("project"))) === null || _a === void 0 ? void 0 : _a.apiKey));
    }
}
GetVideoInfoService.ɵfac = function GetVideoInfoService_Factory(t) { return new (t || GetVideoInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GetVideoInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetVideoInfoService, factory: GetVideoInfoService.ɵfac });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "Dadq":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/youtube-mp3-downloader-panel/pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: googleApiWindow, YoutubeMp3DownloaderPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleApiWindow", function() { return googleApiWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeMp3DownloaderPanelComponent", function() { return YoutubeMp3DownloaderPanelComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_getVideoInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/getVideoInfo */ "4HhO");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");














function YoutubeMp3DownloaderPanelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_ng_container_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.downloadAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Download All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function YoutubeMp3DownloaderPanelComponent_div_5_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_5_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r11.addToSearchArray(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Add to search array ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function YoutubeMp3DownloaderPanelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.trimStart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Trim");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_5_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.trimCharacter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Trim character");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, YoutubeMp3DownloaderPanelComponent_div_5_button_13_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.value.editableSearchArray.length > 0);
} }
function YoutubeMp3DownloaderPanelComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " EDITABLE SEARCHES: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function YoutubeMp3DownloaderPanelComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_tr_14_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const i_r17 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.deleteEditableSearchItem(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r17, " -- ");
} }
function YoutubeMp3DownloaderPanelComponent_div_16_div_2_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_16_div_2_tr_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const i_r23 = ctx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r24.deleteSearchItem(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r23, " -- ");
} }
function YoutubeMp3DownloaderPanelComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, YoutubeMp3DownloaderPanelComponent_div_16_div_2_tr_1_Template, 9, 2, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_16_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r20.searchArray.controls);
} }
function YoutubeMp3DownloaderPanelComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " EDITED SEARCHES: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, YoutubeMp3DownloaderPanelComponent_div_16_div_2_Template, 6, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.form.value.searchArray.length > 0);
} }
const _c0 = function (a0, a1, a2, a3) { return { "downloading": a0, "downloaded": a1, "error": a2, notStarted: a3 }; };
function YoutubeMp3DownloaderPanelComponent_ng_container_17_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_ng_container_17_div_14_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const i_r31 = ctx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r32.moveToIncorrectList(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Move To Incorrect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_ng_container_17_div_14_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const i_r31 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r34.deleteFound(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r31 = ctx.index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](7, _c0, !ctx_r28.foundVideosArray[i_r31].downloaded, ctx_r28.foundVideosArray[i_r31].downloaded, ctx_r28.foundVideosArray[i_r31].error, !ctx_r28.foundVideosArray[i_r31].error && !ctx_r28.foundVideosArray[i_r31].downloaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", !ctx_r28.foundVideosArray[i_r31].downloaded && !ctx_r28.foundVideosArray[i_r31].error ? "Download not initiated, Press \"Download All\"" : ctx_r28.foundVideosArray[i_r31].error ? "Error" : ctx_r28.foundVideosArray[i_r31].downloaded ? "Downloaded" : "Downloading", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("href", "", ctx_r28.youtubeLinkFirstPart, "", ctx_r28.foundVideosArray[i_r31].videoId, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r28.foundVideosArray[i_r31].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" - ", ctx_r28.foundVideosArray[i_r31].title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r28.foundVideosArray[i_r31].title);
} }
function YoutubeMp3DownloaderPanelComponent_ng_container_17_div_15_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const search_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](search_r36);
} }
function YoutubeMp3DownloaderPanelComponent_ng_container_17_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " INCORRECT SEARCHES: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, YoutubeMp3DownloaderPanelComponent_ng_container_17_div_15_tr_2_Template, 3, 1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r29.incorrectArray);
} }
function YoutubeMp3DownloaderPanelComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " FOUND VIDEOS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Prog");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Searched item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Found youtube item title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Move/delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, YoutubeMp3DownloaderPanelComponent_ng_container_17_div_14_Template, 15, 12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, YoutubeMp3DownloaderPanelComponent_ng_container_17_div_15_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.foundVideosArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.incorrectArray.length > 0);
} }
function YoutubeMp3DownloaderPanelComponent_div_18_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const search_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", search_r39.title, " ");
} }
function YoutubeMp3DownloaderPanelComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " SUCCESFULL DOWNLOADS HISTORY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, YoutubeMp3DownloaderPanelComponent_div_18_tr_2_Template, 2, 1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.succesfullDownloads);
} }
function YoutubeMp3DownloaderPanelComponent_div_19_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const search_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", search_r42.title, " ");
} }
function YoutubeMp3DownloaderPanelComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ERRORED DOWNLOADS HISTORY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, YoutubeMp3DownloaderPanelComponent_div_19_tr_2_Template, 2, 1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.erroredDownloads);
} }
class googleApiWindow extends Window {
}
window.gapi = window.gapi || {};
class YoutubeMp3DownloaderPanelComponent {
    //@ts-ignore
    // mode: "instant-download" | "download-after-button-click" = localStorage.getItem("mode");
    constructor(window, _formBuilder, getVideoInfoService, sanitizer, route) {
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
        this.projects = JSON.parse(localStorage.getItem("projects"));
        this.shouldStartDownload = false;
        this.succesfullDownloads = [];
        this.erroredDownloads = [];
        this.env = localStorage.getItem("env");
        this.incorrectArray = [];
    }
    ngOnInit() {
        var _a;
        this.route.queryParams.subscribe((params) => {
            if (params["projects"] && JSON.parse(params["projects"])) {
                this.projects = JSON.parse(params["projects"]);
            }
        });
        (_a = this.authenticate()) === null || _a === void 0 ? void 0 : _a.then(this.loadClient());
        this.form = this._formBuilder.group({
            search: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            editableSearchArray: this._formBuilder.array([]),
            numberToTrimFromStart: [localStorage.getItem("numberToTrimFromStart") || 0],
            whatCharacterToTrim: [localStorage.getItem("whatCharacterToTrim") || ""],
            searchArray: this._formBuilder.array([])
        });
        window.addEventListener("message", (message) => {
            var _a, _b, _c;
            if (((_a = message === null || message === void 0 ? void 0 : message.data) === null || _a === void 0 ? void 0 : _a.downloaded) && ((_b = message === null || message === void 0 ? void 0 : message.data) === null || _b === void 0 ? void 0 : _b.youtubeVideoId)) {
                const error = !!((_c = message === null || message === void 0 ? void 0 : message.data) === null || _c === void 0 ? void 0 : _c.error);
                const foundIndex = this.foundVideosArray.findIndex((el) => { var _a; return el.videoId === ((_a = message === null || message === void 0 ? void 0 : message.data) === null || _a === void 0 ? void 0 : _a.youtubeVideoId); });
                console.log({
                    foundIndex,
                    el: this.foundVideosArray[foundIndex],
                    foundVideosArray: this.foundVideosArray,
                    message
                });
                if (foundIndex >= 0) {
                    this.foundVideosArray[foundIndex].downloaded = true;
                    this.foundVideosArray[foundIndex].error = error || false;
                    if (!error) {
                        this.succesfullDownloads.push(this.foundVideosArray[foundIndex]);
                    }
                    else {
                        this.erroredDownloads.push(this.foundVideosArray[foundIndex]);
                    }
                    this.deleteFound(foundIndex);
                }
            }
        });
    }
    get editableSearchArray() {
        return this.form.get("editableSearchArray");
    }
    get searchArray() {
        return this.form.get("searchArray");
    }
    toggleShouldStartDownload() {
        this.shouldStartDownload = !this.shouldStartDownload;
    }
    authenticate() {
        var _a, _b;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (_b = (_a = this.window.gapi.auth2) === null || _a === void 0 ? void 0 : _a.getAuthInstance()) === null || _b === void 0 ? void 0 : _b.signIn({
            scope: "https://www.googleapis.com/auth/youtube.force-ssl"
        }).then(function () {
            console.log("Sign-in successful");
        }, function (err) {
            console.error("Error signing in", err);
        });
    }
    loadClient() {
        var _a, _b, _c;
        this.window.gapi.client.setApiKey(((_a = this.projects.find((p) => p.name === localStorage.getItem("project"))) === null || _a === void 0 ? void 0 : _a.apiKey) ||
            "AIzaSyCVFuPYF1DCVTKf3GydrbcG7bY0Ws15DBw");
        //a.popliauskis
        return (_c = (_b = this.window.gapi.client) === null || _b === void 0 ? void 0 : _b.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")) === null || _c === void 0 ? void 0 : _c.then(function () {
            console.log("GAPI client loaded for API");
        }, function (err) {
            console.error("Error loading GAPI client for API", err);
        });
    }
    search() {
        for (let i = 0; i < this.form.value.searchArray.length; i++) {
            this.getVideoInfoService
                .getVideoId(this.form.value.searchArray[i].searchValue)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
                .subscribe((resp) => {
                if (resp) {
                    this.getVideoInfoService
                        .getVideoTitleById(resp.items[0].id.videoId)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
                        .subscribe((res) => {
                        let url = this.youtubeLinkFirstPart +
                            resp.items[0].id.videoId +
                            "&f=mp3&quality=320&color=64c896&youtubeVideoId=" +
                            resp.items[0].id.videoId;
                        let sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
                        this.foundVideosArray.push({
                            title: res.items[0].snippet.title,
                            videoId: resp.items[0].id.videoId,
                            iframeUrl: sanitizedUrl,
                            githubIframeUrl: this.sanitizer.bypassSecurityTrustResourceUrl("https://convert2mp3s.com/api/single/mp3?url=" + url),
                            localIframeUrl: this.sanitizer.bypassSecurityTrustResourceUrl("assets/loader.html?url=" + url),
                            searchedValue: this.form.value.searchArray[i].searchValue,
                            downloaded: false,
                            error: false
                        });
                        setTimeout(function () {
                            var _a, _b, _c;
                            if (((_c = (_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.searchArray) === null || _c === void 0 ? void 0 : _c.length) - 1 == i) {
                                console.log(this.foundVideosArray);
                                let searchlist = this.form.get("searchArray");
                                searchlist.clear();
                                this.loaded = true;
                            }
                        }, 5000);
                    });
                }
            });
        }
    }
    trimStart() {
        let list = this.form.get("editableSearchArray");
        let numberToTrimFromStart = this.form.value.numberToTrimFromStart;
        for (let i = 0; i < list.controls.length; i++) {
            list.at(i)
                .get("searchValue")
                .patchValue(list.at(i).get("searchValue").value.substring(numberToTrimFromStart));
        }
    }
    // ngOnChanges(changes: SimpleChanges): void {
    // 	console.log({ changes });
    // }
    trimCharacter() {
        let list = this.form.get("editableSearchArray");
        let whatCharacterToTrim = this.form.value.whatCharacterToTrim;
        for (let i = 0; i < list.controls.length; i++) {
            list.at(i)
                .get("searchValue")
                .patchValue(list.at(i).get("searchValue").value.replace(whatCharacterToTrim, ""));
        }
    }
    addToSearchArray() {
        let editableList = this.form.get("editableSearchArray");
        let searchlist = this.form.get("searchArray");
        for (let i = 0; i < editableList.controls.length; i++) {
            searchlist.push(this._formBuilder.group({
                searchValue: [editableList.at(i).get("searchValue").value]
            }));
        }
        editableList.clear();
        this.form.get("search").patchValue(null);
    }
    submit() {
        let enteredSearchArray = this.form.getRawValue().search.split("\n");
        let editableSearchArray = this.form.controls.editableSearchArray;
        enteredSearchArray.forEach((search) => {
            editableSearchArray.push(this._formBuilder.group({
                searchValue: [search]
            }));
        });
    }
    deleteEditableSearchItem(i) {
        this.form.get("editableSearchArray").removeAt(i);
    }
    deleteSearchItem(i) {
        this.form.get("searchArray").removeAt(i);
    }
    moveToIncorrectList(i) {
        this.incorrectArray.push(this.form.value.searchArray[i].searchValue);
        this.form.get("searchArray").removeAt(i);
        this.foundVideosArray.splice(i, 1);
    }
    deleteFound(i) {
        this.foundVideosArray.splice(i, 1);
    }
    deleteIncorrect(i) {
        this.form.get("incorrectArray").removeAt(i);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    downloadAll() {
        window.parent.postMessage({
            foundVideosArray: this.foundVideosArray,
            downloadAll: true
        }, "*");
    }
}
YoutubeMp3DownloaderPanelComponent.ɵfac = function YoutubeMp3DownloaderPanelComponent_Factory(t) { return new (t || YoutubeMp3DownloaderPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](googleApiWindow), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_getVideoInfo__WEBPACK_IMPORTED_MODULE_1__["GetVideoInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
YoutubeMp3DownloaderPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: YoutubeMp3DownloaderPanelComponent, selectors: [["app-youtube-mp3-downloader-panel"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { showError: true }
            },
            _shared_services_getVideoInfo__WEBPACK_IMPORTED_MODULE_1__["GetVideoInfoService"]
        ])], decls: 20, vars: 9, consts: [[1, "col-12", "d-flex", "justify-content-end"], [4, "ngIf"], [1, "col-12", "p-0", "d-flex", "flex-wrap", 3, "formGroup"], [1, "col-6", "p-0"], ["mat-button", "", "type", "submit", 2, "margin", "5px", 3, "click"], [2, "background-color", "white", "border-color", "white", "padding", "5px", "width", "240px"], [2, "height", "500px"], ["matInput", "", "formControlName", "search", "placeholder", "Enter list values separated by tab", 2, "height", "500px !important", "width", "500px"], [4, "ngFor", "ngForOf"], ["class", "col-6 p-0", 4, "ngIf"], ["class", "mt-3 pt-3", 4, "ngIf"], ["mat-button", "", 2, "height", "50px", "margin-top", "15px", 3, "click"], ["matInput", "", "formControlName", "numberToTrimFromStart", "type", "number", "placeholder", "How many chars to trim from start"], ["mat-button", "", 3, "click"], ["matInput", "", "formControlName", "whatCharacterToTrim", "type", "text", "placeholder", "What character to trim"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["formArrayName", "editableSearchArray"], [3, "formGroupName"], ["matInput", "", "formControlName", "searchValue", "type", "text"], ["mat-button", "", "color", "warn", 3, "click"], ["formArrayName", "searchArray"], [1, "d-flex", "col-12", "p-0"], [1, "border-top", "border-bottom", "mb-2", "d-flex", "align-items-center", "col-12", "p-0"], [1, "col-3"], ["class", "d-flex col-12 p-0", 4, "ngFor", "ngForOf"], [1, "border-top", "border-bottom", "mb-2", "d-flex", "align-items-center", "col-12", "p-0", 3, "ngClass"], [1, "col-3", 2, "padding", "10px"], ["target", "_blank", 1, "col-3", 3, "href"], [1, "col-3", "d-flex"], ["mat-raised-button", "", "color", "accent", 1, "mr-1", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "mt-3", "pt-3"]], template: function YoutubeMp3DownloaderPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, YoutubeMp3DownloaderPanelComponent_ng_container_2_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, YoutubeMp3DownloaderPanelComponent_div_5_Template, 14, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_Template_button_click_6_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, YoutubeMp3DownloaderPanelComponent_ng_container_13_Template, 4, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, YoutubeMp3DownloaderPanelComponent_tr_14_Template, 9, 2, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, YoutubeMp3DownloaderPanelComponent_div_16_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, YoutubeMp3DownloaderPanelComponent_ng_container_17_Template, 16, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, YoutubeMp3DownloaderPanelComponent_div_18_Template, 5, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, YoutubeMp3DownloaderPanelComponent_div_19_Template, 5, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.foundVideosArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editableSearchArray.controls.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editableSearchArray.controls.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.editableSearchArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.value.searchArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.foundVideosArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.succesfullDownloads.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.erroredDownloads.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: [".downloading[_ngcontent-%COMP%] {\n  background-color: #ffeb3b;\n}\n\n.downloaded[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n\n.error[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n\n.notStarted[_ngcontent-%COMP%] {\n  background-color: #cddc39;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3lvdXR1YmUtbXAzLWRvd25sb2FkZXItcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5QkFBQTtBQUNEOztBQUVBO0VBQ0MseUJBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx5QkFBQTtBQUNEIiwiZmlsZSI6InlvdXR1YmUtbXAzLWRvd25sb2FkZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG93bmxvYWRpbmcge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiO1xufVxuXG4uZG93bmxvYWRlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG59XG5cbi5lcnJvciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5ub3RTdGFydGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2NkZGMzOTtcbn1cbiJdfQ== */"] });
YoutubeMp3DownloaderPanelComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: YoutubeMp3DownloaderPanelComponent, factory: YoutubeMp3DownloaderPanelComponent.ɵfac, providedIn: "root" });


/***/ }),

/***/ "FpXt":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = "youtube-mp3-downloader";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "content-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/shared/shared.module */ "FpXt");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modules_youtube_mp3_downloader_panel_pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/youtube-mp3-downloader-panel/pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component */ "Dadq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        { provide: _modules_youtube_mp3_downloader_panel_pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_5__["googleApiWindow"], useValue: window },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"],
            useValue: "/" + (window.location.href.includes("localhost") ? "" : "youtube-mp3-downloader/")
        }
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: "",
        loadChildren: () => __webpack_require__.e(/*! import() | modules-youtube-mp3-downloader-panel-youtube-mp3-downloader-panel-module */ "modules-youtube-mp3-downloader-panel-youtube-mp3-downloader-panel-module").then(__webpack_require__.bind(null, /*! ./modules/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.module */ "ykjJ")).then((m) => m.YoutubeMp3DownloaderPanel),
        data: {
            title: "Form page"
        }
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: "legacy" })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map