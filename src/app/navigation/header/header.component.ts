import { MarketCapService } from './../../services/marketcap.service';
import { MarketCap } from './../../services/models/marketcap.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  marketCap:MarketCap;

  constructor(private marketCapService: MarketCapService) { }

  ngOnInit() {
    this.marketCapService
        .getMarketCap()
        .subscribe( (data) => {
          console.log(data);
        } )


  }

}
