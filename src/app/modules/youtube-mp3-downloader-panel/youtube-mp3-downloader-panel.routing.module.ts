import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { YoutubeMp3DownloaderPanelComponent } from "./pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component";

const routes: Routes = [
	{
		path: "",
		component: YoutubeMp3DownloaderPanelComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class YoutubeMp3DownloaderPanelRoutingModule {}
