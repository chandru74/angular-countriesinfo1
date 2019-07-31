import { Component } from '@angular/core';
import {CountriesAPIService} from './countries-api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public countries;
  searchText="";
  sortKey="name";

  constructor(private _countriesAPIService:CountriesAPIService){ }

  ngOnInit(){
    this.getCountries()
  }

  getCountries() {
  this._countriesAPIService.getCountries().subscribe(
     data => { this.countries = data},
     err => console.error(err),
     () => console.log('done loading countries')
   );
 }

 
}


