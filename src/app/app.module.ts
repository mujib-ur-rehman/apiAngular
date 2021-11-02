import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostdataComponent } from './postdata/postdata.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetdataComponent } from './getdata/getdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, PostdataComponent, GetdataComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
