import { News } from './../../services/models/newsdata.interface';
import { Component, OnInit, Input } from '@angular/core';
import { CurrencyDataService } from '../../services/currencydata.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input()
  symbol:string

  newsData:News[];

  panelOpenState: boolean = false;

  //published, source, img

  constructor(
    private dataService:CurrencyDataService
  ) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(){
    this.dataService.getCurrencyNews(this.symbol)
                    .subscribe( (data:News[]) => this.newsData = data)
  }

}
