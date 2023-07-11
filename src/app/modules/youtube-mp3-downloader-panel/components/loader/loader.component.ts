import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-loader",
	templateUrl: "./loader.component.html",
	styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
	@Input() passedUrl: string;
	@Input() shouldStartDownload: boolean;
	buttonTitle: string;
	link_now: URL;
	format: string;
	youtubeVideoId: string;
	progress: number;
	downloadUrl = "";
	constructor() {}

	ngOnInit(): void {
		console.log({
			//@ts-ignore
			url: this.passedUrl.changingThisBreaksApplicationSecurity
		});
		//@ts-ignore
		this.link_now = new URL(this.passedUrl.changingThisBreaksApplicationSecurity);
		this.youtubeVideoId = this.link_now.searchParams.get("youtubeVideoId");
		this.format = this.link_now.searchParams.get("f");
		this.buttonTitle = JSON.stringify(this.link_now);
		this.download();
	}

	download() {
		fetch(
			"https://loader.to/ajax/download.php?button=1&start=1&end=1&format=" +
				this.format +
				"&url=" +
				//@ts-ignore
				encodeURIComponent(this.link_now),
			{
				headers: {
					Accept: "application/json"
				}
			}
		)
			.then((response) => response.json())
			.then((response) => {
				this.showProgressAndSetDownloadUrl(response.id);
			});
	}

	showProgressAndSetDownloadUrl(i: number | string) {
		fetch("https://loader.to/ajax/progress.php?id=" + i, {
			headers: {
				Accept: "application/json"
			}
		})
			.then((response) => response.json())
			.then((response) => {
				this.progress = response.progress / 10;
				if (response.download_url != null && response.success == 1) {
					window.parent.postMessage(
						{
							youtubeVideoId: this.youtubeVideoId,
							downloaded: true
						},
						"*"
					);
					this.downloadUrl = response.download_url;
					return;
				}
				//@ts-ignore
				setTimeout(this.showProgressAndSetDownloadUrl(i), 750);
			})
			.catch((
				e //@ts-ignore
			) => setTimeout(this.showProgressAndSetDownloadUrl(i), 750));
	}
}
