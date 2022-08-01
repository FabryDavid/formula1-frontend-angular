import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from "../../../../services/news-service.service";

@Component({
  selector: 'app-news-panel',
  templateUrl: './news-panel.component.html',
  styleUrls: ['./news-panel.component.scss']
})
export class NewsPanelComponent implements OnInit {

  constructor(private newsService: NewsServiceService) {
  }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      console.log(data)
    })
  }

}
