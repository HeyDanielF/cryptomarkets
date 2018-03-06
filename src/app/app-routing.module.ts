import { CurrencyComponent } from './currency/currency.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CurrencytableComponent } from './currencytable/currencytable.component';



const ROUTES:Routes =[
  { path:'' , component: CurrencytableComponent  },
  { path:'currency/:symbol' , component: CurrencyComponent  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports:[
    RouterModule,
  ],
  declarations: [],
  providers: []
})
export class AppRoutingModule {}
