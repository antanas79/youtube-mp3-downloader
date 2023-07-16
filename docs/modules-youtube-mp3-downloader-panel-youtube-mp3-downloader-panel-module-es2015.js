(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-youtube-mp3-downloader-panel-youtube-mp3-downloader-panel-module"],{

/***/ "8v/1":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: YoutubeMp3DownloaderPanelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeMp3DownloaderPanelRoutingModule", function() { return YoutubeMp3DownloaderPanelRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component */ "Dadq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: "",
        component: _pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_1__["YoutubeMp3DownloaderPanelComponent"]
    }
];
class YoutubeMp3DownloaderPanelRoutingModule {
}
YoutubeMp3DownloaderPanelRoutingModule.ɵfac = function YoutubeMp3DownloaderPanelRoutingModule_Factory(t) { return new (t || YoutubeMp3DownloaderPanelRoutingModule)(); };
YoutubeMp3DownloaderPanelRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: YoutubeMp3DownloaderPanelRoutingModule });
YoutubeMp3DownloaderPanelRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](YoutubeMp3DownloaderPanelRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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

/***/ "ykjJ":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: YoutubeMp3DownloaderPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeMp3DownloaderPanel", function() { return YoutubeMp3DownloaderPanel; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _youtube_mp3_downloader_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube-mp3-downloader-panel.routing.module */ "8v/1");
/* harmony import */ var _pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component */ "Dadq");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "FpXt");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loader/loader.component */ "V4+E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class YoutubeMp3DownloaderPanel {
}
YoutubeMp3DownloaderPanel.ɵfac = function YoutubeMp3DownloaderPanel_Factory(t) { return new (t || YoutubeMp3DownloaderPanel)(); };
YoutubeMp3DownloaderPanel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: YoutubeMp3DownloaderPanel });
YoutubeMp3DownloaderPanel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [{ provide: _pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_2__["googleApiWindow"], useValue: window }], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _youtube_mp3_downloader_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__["YoutubeMp3DownloaderPanelRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](YoutubeMp3DownloaderPanel, { declarations: [_pages_youtube_mp3_downloader_panel_youtube_mp3_downloader_panel_component__WEBPACK_IMPORTED_MODULE_2__["YoutubeMp3DownloaderPanelComponent"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _youtube_mp3_downloader_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__["YoutubeMp3DownloaderPanelRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-youtube-mp3-downloader-panel-youtube-mp3-downloader-panel-module-es2015.js.map