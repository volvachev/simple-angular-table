import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByPipe } from './sortBy.pipe';

const pipes = [
    SortByPipe
];

@NgModule({
  imports: [
    CommonModule,
    ],
    declarations: pipes,
    exports: pipes
})
export class PipeModule { }
