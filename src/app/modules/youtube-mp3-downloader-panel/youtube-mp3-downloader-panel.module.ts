import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YoutubeMp3DownloaderPanelRoutingModule } from "./youtube-mp3-downloader-panel.routing.module";
import {
	googleApiWindow,
	YoutubeMp3DownloaderPanelComponent
} from "./pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component";
import { SharedModule } from "../shared/shared.module";
import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
	declarations: [YoutubeMp3DownloaderPanelComponent, LoaderComponent],
	imports: [CommonModule, SharedModule, YoutubeMp3DownloaderPanelRoutingModule],
	providers: [{ provide: googleApiWindow, useValue: window }]
})
export class YoutubeMp3DownloaderPanel {}
