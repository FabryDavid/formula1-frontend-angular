import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from "../../../services/news-service/news-service.service";
import {ITweet} from "../../../interfaces/itweet";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: Array<ITweet> = []
  nextToken: null | string = null
  tweetLimit = 10

  masonryOptions = {
    gutter: 10
  }

  constructor(private newsService: NewsServiceService) {
  }

  ngOnInit(): void {
    this.loadNews()
  }

  loadNews() {
    this.newsService.getNews(this.tweetLimit, this.nextToken).subscribe((response) => {
      console.log(response)

      this.nextToken = response.meta.next_token
      this.news = response.data
    })
  }
}
