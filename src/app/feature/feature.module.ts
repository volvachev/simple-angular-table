import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListModule } from './list';
import { ApiService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ListModule,
    HttpClientModule
  ],
  providers: [ApiService],
  exports: [ListModule]
})
export class FeatureModule { }
