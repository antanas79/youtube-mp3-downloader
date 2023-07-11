import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./modules/shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { googleApiWindow } from "./modules/youtube-mp3-downloader-panel/pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component";
import { APP_BASE_HREF } from "@angular/common";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule],
	providers: [
		{ provide: googleApiWindow, useValue: window },
		{
			provide: APP_BASE_HREF,
			useValue: "/" + (window.location.href.includes("localhost") ? "" : "youtube-mp3-downloader/")
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
