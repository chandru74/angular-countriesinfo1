import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CountriesAPIService } from './countries-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
@NgModule({
  imports:      [HttpClientModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SearchPipe, SortPipe ],
  bootstrap:    [ AppComponent ],
  providers: [CountriesAPIService]
})
export class AppModule { }
