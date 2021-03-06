import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowDataService } from './service/show-data.service';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { HttpClientModule } from '@angular/common/http'
import { ShowDetailsComponent } from './components/show-details/show-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ShowListComponent, ShowFormComponent, ShowDetailsComponent],
  bootstrap: [AppComponent],
  providers: [ShowDataService]
})
export class AppModule {}
