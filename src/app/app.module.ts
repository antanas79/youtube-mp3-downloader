import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./modules/shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { googleApiWindow } from "./modules/youtube-mp3-downloader-panel/pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule],
	providers: [{ provide: googleApiWindow, useValue: window }],
	bootstrap: [AppComponent]
})
export class AppModule {}
