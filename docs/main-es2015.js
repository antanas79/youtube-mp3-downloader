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
/* harmony import */ var _youtube_mp3_downloader_panel_pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../youtube-mp3-downloader-panel/pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component */ "Dadq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class GetVideoInfoService {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.projects = _youtube_mp3_downloader_panel_pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_0__["defaultProjects"];
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
GetVideoInfoService.ɵfac = function GetVideoInfoService_Factory(t) { return new (t || GetVideoInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
GetVideoInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GetVideoInfoService, factory: GetVideoInfoService.ɵfac });


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
/*! exports provided: googleApiWindow, defaultProjects, YoutubeMp3DownloaderPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleApiWindow", function() { return googleApiWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProjects", function() { return defaultProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeMp3DownloaderPanelComponent", function() { return YoutubeMp3DownloaderPanelComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_getVideoInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/getVideoInfo */ "4HhO");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/loader/loader.component */ "V4+E");















function YoutubeMp3DownloaderPanelComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_11_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.trimStart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Trim");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_11_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.trimCharacter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Trim character");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " EDITABLE SEARCHES: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function YoutubeMp3DownloaderPanelComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_tr_12_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.deleteEditableSearchItem(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r9, " -- ");
} }
function YoutubeMp3DownloaderPanelComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.addToSearchArray(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Add to search array ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function YoutubeMp3DownloaderPanelComponent_div_15_div_2_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_15_div_2_tr_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const i_r17 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r18.deleteSearchItem(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");
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
function YoutubeMp3DownloaderPanelComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, YoutubeMp3DownloaderPanelComponent_div_15_div_2_tr_1_Template, 9, 2, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_div_15_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r20.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.searchArray.controls);
} }
function YoutubeMp3DownloaderPanelComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " EDITED SEARCHES: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, YoutubeMp3DownloaderPanelComponent_div_15_div_2_Template, 6, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.form.value.searchArray.length > 0);
} }
function YoutubeMp3DownloaderPanelComponent_ng_container_16_div_13_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "iframe", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r26.foundVideosArray[i_r25].githubIframeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeResourceUrl"]);
} }
function YoutubeMp3DownloaderPanelComponent_ng_container_16_div_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-loader", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " >");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("passedUrl", ctx_r27.foundVideosArray[i_r25].iframeUrl)("shouldStartDownload", ctx_r27.shouldStartDownload);
} }
function YoutubeMp3DownloaderPanelComponent_ng_container_16_div_13_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "iframe", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r28.foundVideosArray[i_r25].localIframeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeResourceUrl"]);
} }
function YoutubeMp3DownloaderPanelComponent_ng_container_16_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, YoutubeMp3DownloaderPanelComponent_ng_container_16_div_13_ng_container_3_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, YoutubeMp3DownloaderPanelComponent_ng_container_16_div_13_ng_container_4_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, YoutubeMp3DownloaderPanelComponent_ng_container_16_div_13_ng_container_5_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_ng_container_16_div_13_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const i_r25 = ctx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r32.moveToIncorrectList(i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Move To Incorrect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_ng_container_16_div_13_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const i_r25 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r34.deleteFound(i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r22.env === "github" && ctx_r22.mode !== "instant-download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r22.env === "local" && ctx_r22.mode !== "instant-download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r22.env === "local" && ctx_r22.mode === "instant-download");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("href", "", ctx_r22.youtubeLinkFirstPart, "", ctx_r22.foundVideosArray[i_r25].videoId, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r22.foundVideosArray[i_r25].searchedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r22.foundVideosArray[i_r25].title);
} }
function YoutubeMp3DownloaderPanelComponent_ng_container_16_div_14_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r37 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r37);
} }
function YoutubeMp3DownloaderPanelComponent_ng_container_16_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " INCORRECT SEARCHES: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, YoutubeMp3DownloaderPanelComponent_ng_container_16_div_14_tr_2_Template, 4, 1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r23.form.value.incorrectArray);
} }
function YoutubeMp3DownloaderPanelComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " FOUND VIDEOS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Searched item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Found youtube item title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Move/delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, YoutubeMp3DownloaderPanelComponent_ng_container_16_div_13_Template, 15, 7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, YoutubeMp3DownloaderPanelComponent_ng_container_16_div_14_Template, 5, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.foundVideosArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.form.value.incorrectArray.length > 0);
} }
class googleApiWindow extends Window {
}
window.gapi = window.gapi || {};
const defaultProjects = [
    { name: "youtube-mp3-downloader-392415", apiKey: "AIzaSyBTqkGKqxG1HWRPf7E7c4FSdWjBlIaWVZw" },
    { name: "youtube-downloader-310313", apiKey: "AIzaSyCVFuPYF1DCVTKf3GydrbcG7bY0Ws15DBw" },
    { name: "youtube-mp3-downloader-3", apiKey: "AIzaSyDvYrlBR551TYemye4-l1crGmjoFW-Tk6I" }
];
class YoutubeMp3DownloaderPanelComponent {
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
        this.projects = defaultProjects;
        this.shouldStartDownload = false;
        this.env = localStorage.getItem("env");
        //@ts-ignore
        this.mode = localStorage.getItem("mode");
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
            numberToTrimFromStart: [0],
            whatCharacterToTrim: [""],
            searchArray: this._formBuilder.array([]),
            incorrectArray: this._formBuilder.array([])
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
        var _a, _b, _c;
        console.log({
            apiKey: (_a = this.projects.find((p) => p.name === localStorage.getItem("project"))) === null || _a === void 0 ? void 0 : _a.apiKey
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (_c = (_b = this.window.gapi.auth2) === null || _b === void 0 ? void 0 : _b.getAuthInstance()) === null || _c === void 0 ? void 0 : _c.signIn({
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
                            searchedValue: this.form.value.searchArray[i].searchValue
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
        let incorrectArray = this.form.get("incorrectArray");
        incorrectArray.push(this._formBuilder.group({
            searchValue: [this.form.value.searchArray[i].searchValue]
        }));
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
        ])], decls: 17, vars: 6, consts: [[1, "col-12", "p-0", "d-flex", "flex-wrap", 3, "formGroup"], [1, "col-6", "p-0"], [2, "height", "50px", "margin-top", "15px", 3, "click"], [2, "height", "500px"], ["matInput", "", "formControlName", "search", 2, "height", "500px !important"], ["mat-button", "", "type", "submit", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["class", "col-6 p-0", 4, "ngIf"], ["matInput", "", "formControlName", "numberToTrimFromStart", "type", "number", "placeholder", "How many chars to trim from start"], ["mat-button", "", 3, "click"], ["matInput", "", "formControlName", "whatCharacterToTrim", "type", "text", "placeholder", "What character to trim"], ["formArrayName", "editableSearchArray"], [3, "formGroupName"], ["matInput", "", "formControlName", "searchValue", "type", "text"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", 3, "click"], ["formArrayName", "searchArray"], [1, "d-flex", "col-12", "p-0"], [1, "border-top", "border-bottom", "mb-2", "d-flex", "align-items-center", "col-12", "p-0"], [1, "col-3"], ["class", "d-flex col-12 p-0", 4, "ngFor", "ngForOf"], ["class", "mt-3 pt-3", 4, "ngIf"], ["target", "_blank", 1, "col-3", 3, "href"], [1, "col-3", "d-flex"], ["mat-raised-button", "", "color", "accent", 1, "mr-1", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["width", "100%", "height", "100%", "allowtransparency", "true", "scrolling", "no", 2, "border", "none", 3, "src"], [3, "passedUrl", "shouldStartDownload"], [3, "src"], [1, "mt-3", "pt-3"], ["formArrayName", "incorrectArray"], ["formControlName", "searchValue"]], template: function YoutubeMp3DownloaderPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_Template_button_click_3_listener() { return ctx.downloadAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "DOWNLOAD ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function YoutubeMp3DownloaderPanelComponent_Template_button_click_8_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, YoutubeMp3DownloaderPanelComponent_div_11_Template, 15, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, YoutubeMp3DownloaderPanelComponent_tr_12_Template, 9, 2, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, YoutubeMp3DownloaderPanelComponent_button_14_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, YoutubeMp3DownloaderPanelComponent_div_15_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, YoutubeMp3DownloaderPanelComponent_ng_container_16_Template, 15, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editableSearchArray.controls.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.editableSearchArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.value.editableSearchArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.value.searchArray.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.foundVideosArray.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5b3V0dWJlLW1wMy1kb3dubG9hZGVyLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"] });
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

/***/ "V4+E":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/youtube-mp3-downloader-panel/components/loader/loader.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function LoaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Downloaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx_r0.youtubeVideoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.downloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class LoaderComponent {
    constructor() {
        this.shouldStartDownload = false;
        this.downloadUrl = "";
    }
    onMessage(event) {
        console.log({ event });
        if (event.data.shouldStartDownload) {
            this.download();
        }
    }
    // constructor() {
    // 	if (window.addEventListener) {
    // 		window.addEventListener("message", this.download.bind(this), false);
    // 	} else {
    // 		(<any>window).attachEvent("onmessage", this.download.bind(this));
    // 	}
    // }
    ngOnInit() {
        //@ts-ignore
        this.link_now = new URL(this.passedUrl.changingThisBreaksApplicationSecurity);
        this.youtubeVideoId = this.link_now.searchParams.get("youtubeVideoId");
        this.format = this.link_now.searchParams.get("f");
        this.buttonTitle = JSON.stringify(this.link_now);
        console.log({ shouldStartDownload: this.shouldStartDownload });
    }
    ngOnChanges(changes) {
        if (changes.shouldStartDownload.currentValue && !changes.shouldStartDownload.previousValue) {
            this.download();
        }
    }
    download() {
        fetch("https://loader.to/ajax/download.php?button=1&start=1&end=1&format=" +
            this.format +
            "&url=" +
            //@ts-ignore
            encodeURIComponent(this.link_now), {
            headers: {
                Accept: "application/json"
            }
        })
            .then((response) => response.json())
            .then((response) => {
            this.showProgressAndSetDownloadUrl(response.id);
        });
    }
    showProgressAndSetDownloadUrl(i) {
        fetch("https://loader.to/ajax/progress.php?id=" + i, {
            headers: {
                Accept: "application/json"
            }
        })
            .then((response) => response.json())
            .then((response) => {
            this.progress = response.progress / 10;
            if (response.download_url != null && response.success == 1) {
                window.parent.postMessage({
                    youtubeVideoId: this.youtubeVideoId,
                    downloaded: true
                }, "*");
                this.downloadUrl = response.download_url;
                return;
            }
            //@ts-ignore
            setTimeout(this.showProgressAndSetDownloadUrl(i), 750);
        })
            .catch((e //@ts-ignore
        ) => setTimeout(this.showProgressAndSetDownloadUrl(i), 750));
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], hostBindings: function LoaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("message", function LoaderComponent_message_HostBindingHandler($event) { return ctx.onMessage($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { passedUrl: "passedUrl", shouldStartDownload: "shouldStartDownload" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [["id", "downloadButton", 2, "color", "red"], [4, "ngIf"], ["id", "download", 2, "margin", "0 auto", "display", "flex", "align-self", "center", 3, "id", "href"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoaderComponent_ng_container_3_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Download progress ", ctx.progress || 0, " / 100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.downloadUrl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: black;\n  font-size: 24px;\n}\n\n@media (max-height: 150px) and (max-width: 400px) {\n  body[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n@media (max-width: 200px) {\n  body[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  svg[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 1em;\n  border-radius: 2px;\n  border: 0;\n  font-family: \"Open Sans\", sans-serif;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.progress-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1em;\n  color: #fff !important;\n  text-decoration: none !important;\n  line-height: 1;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 1px 1px #ccc;\n  border-radius: 2px;\n  cursor: pointer;\n  background-color: #64c896;\n}\n\n#downloadButton[_ngcontent-%COMP%]:hover   .progress-button[_ngcontent-%COMP%] {\n  filter: brightness(95%);\n}\n\n.progress-button.in-progress[_ngcontent-%COMP%], .progress-button.finished[_ngcontent-%COMP%] {\n  color: transparent !important;\n}\n\n.progress-button.in-progress[_ngcontent-%COMP%]:after, .progress-button.finished[_ngcontent-%COMP%]:after {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  top: 0;\n  padding-top: inherit;\n  color: #fff !important;\n  left: 0;\n}\n\n.progress-button.in-progress[_ngcontent-%COMP%]:after {\n  content: attr(data-loading);\n}\n\n.progress-button.finished[_ngcontent-%COMP%]:after {\n  content: attr(data-finished);\n}\n\n.progress-button[_ngcontent-%COMP%]   .tz-bar[_ngcontent-%COMP%] {\n  background-color: #4e9672;\n  height: 3px;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  position: absolute;\n  z-index: 1;\n  border-radius: 0 0 2px 2px;\n  transition: width 0.5s, height 0.5s;\n}\n\n.progress-button[_ngcontent-%COMP%]   .tz-bar.background-horizontal[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n}\n\n.progress-button[_ngcontent-%COMP%]   .tz-bar.background-vertical[_ngcontent-%COMP%] {\n  height: 0;\n  top: 0;\n  width: 100%;\n  border-radius: 2px;\n}\n\n.buttonTitle[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n  margin-top: 4px;\n}\n\n#container[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: center;\n}\n\n#container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: inline-block;\n  vertical-align: middle;\n  height: 100%;\n}\n\n#percentageText[_ngcontent-%COMP%] {\n  width: 95%;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  z-index: 3;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  background-color: #f1f1f1;\n}\n\n.progress-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background: #ccc;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #4caf50;\n  width: 0%;\n}\n\n.grecaptcha-badge[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFQyxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNEOztBQUVBO0VBQ0Msb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUVBO0VBQ0M7SUFDQyxlQUFBO0VBQ0E7QUFDRjs7QUFFQTtFQUNDO0lBQ0MsZUFBQTtFQUFBOztFQUdEO0lBQ0MsYUFBQTtFQUFBO0FBQ0Y7O0FBR0E7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUREOztBQUlBO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFERDs7QUFJQTtFQUNDLHVCQUFBO0FBREQ7O0FBSUE7O0VBRUMsNkJBQUE7QUFERDs7QUFJQTs7RUFFQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0FBREQ7O0FBSUE7RUFDQywyQkFBQTtBQUREOztBQUlBO0VBQ0MsNEJBQUE7QUFERDs7QUFJQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBR0EsbUNBQUE7QUFERDs7QUFJQTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtBQUREOztBQUlBO0VBQ0MsU0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFERDs7QUFJQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQUREOztBQUlBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FBREQ7O0FBSUE7RUFDQyxXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFERDs7QUFJQTtFQUNDLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBREQ7O0FBSUE7RUFDQyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFERDs7QUFJQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFERDs7QUFJQTtFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFERDs7QUFJQTtFQUNDLGtCQUFBO0FBREQiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbmJvZHkge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYm9keSB7XG5cdGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMjRweDtcbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxNTBweCkgYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG5cdGJvZHkge1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMjAwcHgpIHtcblx0Ym9keSB7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHR9XG5cblx0c3ZnIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbmJ1dHRvbiB7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZ3Jlc3MtYnV0dG9uIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmb250LXNpemU6IDFlbTtcblx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG5cdGxpbmUtaGVpZ2h0OiAxO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0Ym94LXNoYWRvdzogMCAxcHggMXB4ICNjY2M7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjRjODk2O1xufVxuXG4jZG93bmxvYWRCdXR0b246aG92ZXIgLnByb2dyZXNzLWJ1dHRvbiB7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcyg5NSUpO1xufVxuXG4ucHJvZ3Jlc3MtYnV0dG9uLmluLXByb2dyZXNzLFxuLnByb2dyZXNzLWJ1dHRvbi5maW5pc2hlZCB7XG5cdGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZ3Jlc3MtYnV0dG9uLmluLXByb2dyZXNzOmFmdGVyLFxuLnByb2dyZXNzLWJ1dHRvbi5maW5pc2hlZDphZnRlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogMjtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0b3A6IDA7XG5cdHBhZGRpbmctdG9wOiBpbmhlcml0O1xuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHRsZWZ0OiAwO1xufVxuXG4ucHJvZ3Jlc3MtYnV0dG9uLmluLXByb2dyZXNzOmFmdGVyIHtcblx0Y29udGVudDogYXR0cihkYXRhLWxvYWRpbmcpO1xufVxuXG4ucHJvZ3Jlc3MtYnV0dG9uLmZpbmlzaGVkOmFmdGVyIHtcblx0Y29udGVudDogYXR0cihkYXRhLWZpbmlzaGVkKTtcbn1cblxuLnByb2dyZXNzLWJ1dHRvbiAudHotYmFyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRlOTY3Mjtcblx0aGVpZ2h0OiAzcHg7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogMTtcblx0Ym9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC41cywgaGVpZ2h0IDAuNXM7XG5cdC1tb3otdHJhbnNpdGlvbjogd2lkdGggMC41cywgaGVpZ2h0IDAuNXM7XG5cdHRyYW5zaXRpb246IHdpZHRoIDAuNXMsIGhlaWdodCAwLjVzO1xufVxuXG4ucHJvZ3Jlc3MtYnV0dG9uIC50ei1iYXIuYmFja2dyb3VuZC1ob3Jpem9udGFsIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5wcm9ncmVzcy1idXR0b24gLnR6LWJhci5iYWNrZ3JvdW5kLXZlcnRpY2FsIHtcblx0aGVpZ2h0OiAwO1xuXHR0b3A6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5idXR0b25UaXRsZSB7XG5cdGZvbnQtc2l6ZTogMC41ZW07XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cblxuI2NvbnRhaW5lciB7XG5cdGhlaWdodDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGFpbmVyOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4jcGVyY2VudGFnZVRleHQge1xuXHR3aWR0aDogOTUlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0ei1pbmRleDogMztcbn1cblxuLmhlYWRlciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwO1xuXHR6LWluZGV4OiAxO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLnByb2dyZXNzLWNvbnRhaW5lciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDRweDtcblx0YmFja2dyb3VuZDogI2NjYztcbn1cblxuLnByb2dyZXNzLWJhciB7XG5cdGhlaWdodDogNHB4O1xuXHRiYWNrZ3JvdW5kOiAjNGNhZjUwO1xuXHR3aWR0aDogMCU7XG59XG5cbi5ncmVjYXB0Y2hhLWJhZGdlIHtcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xufVxuIl19 */"] });


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