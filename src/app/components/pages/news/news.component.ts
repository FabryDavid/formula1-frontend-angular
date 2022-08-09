import {Component, OnInit, ViewChild} from '@angular/core';
import {NewsServiceService} from '../../../services/news-service/news-service.service';
import {ITweet} from '../../../interfaces/itweet';
import {NgxMasonryComponent, NgxMasonryOptions} from 'ngx-masonry';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: Array<ITweet> = [];
  nextToken: null | string = null;
  tweetLimit = 6;
  masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };
  isLoading = false;
  loadingNews: Array<string> = [];

  @ViewChild(NgxMasonryComponent) masonry!: NgxMasonryComponent;

  constructor(private newsService: NewsServiceService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews() {
    this.newsService
      .getNews(this.tweetLimit, this.nextToken)
      .subscribe((response) => {
        this.nextToken = response.meta.nextToken;

        const newsIds = response.data.map((n) => n.id);
        this.loadingNews = this.loadingNews.concat(newsIds);

        this.news = this.news.concat(response.data);
      });
  }

  tweetLoaded(id: string) {
    const index = this.loadingNews.indexOf(id);

    if (index > -1) {
      this.loadingNews.splice(index, 1);
    }

    this.masonry.layout();
  }
}
