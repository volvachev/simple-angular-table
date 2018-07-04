import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListModule } from './list';
import { ApiService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  imports: [
    ListModule,
    HttpClientModule,
    PipeModule
  ],
  providers: [ApiService],
  exports: [ListModule]
})
export class FeatureModule { }
