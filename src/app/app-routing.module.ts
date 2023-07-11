import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		loadChildren: () =>
			import("./modules/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.module").then(
				(m) => m.YoutubeMp3DownloaderPanel
			),
		data: {
			title: "Form page"
		}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
