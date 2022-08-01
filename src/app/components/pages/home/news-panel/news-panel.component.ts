import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from "../../../../services/news-service.service";
import {ITweet} from "../../../../interfaces/itweet";

@Component({
  selector: 'app-news-panel',
  templateUrl: './news-panel.component.html',
  styleUrls: ['./news-panel.component.scss']
})
export class NewsPanelComponent implements OnInit {
  latestTweet: ITweet | null = null

  constructor(private newsService: NewsServiceService) {
  }

  ngOnInit(): void {
    this.newsService.getNews(1).subscribe((data) => {
      this.latestTweet = data.data[0]
    })
  }
}
