import { CurrencyDataService } from './../../services/currencydata.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  @Input() symbol: string;

  constructor(
    private dataService:CurrencyDataService
  ) { }

  ngOnInit() {
    this.dataService.getCurrencyMarkets(this.symbol).subscribe(data => console.log(data))
  }

}
