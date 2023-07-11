import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { defaultProjects } from "../../youtube-mp3-downloader-panel/pages/youtube-mp3-downloader-panel/youtube-mp3-downloader-panel.component";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class GetVideoInfoService implements OnInit {
	constructor(private route: ActivatedRoute, private http: HttpClient) {}
	projects: Array<{ name: string; apiKey: string }> = defaultProjects;

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			if (params["projects"] && JSON.parse(params["projects"])) {
				this.projects = JSON.parse(params["projects"]);
			}
		});
	}

	getVideoId(q: string) {
		return this.http.get(
			"https://youtube.googleapis.com/youtube/v3/search?maxResults=1&q=" +
				q +
				"&key=" +
				this.projects.find((p) => p.name === localStorage.getItem("project"))?.apiKey
		);
	}

	getVideoTitleById(id: string) {
		return this.http.get(
			"https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
				id +
				"&key=" +
				this.projects.find((p) => p.name === localStorage.getItem("project"))?.apiKey
		);
	}
}
