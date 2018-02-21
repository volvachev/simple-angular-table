import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListItemButtonComponent } from './list-item-button/list-item-button.component';

const component = [
  ListComponent,
  ListItemComponent,
  ListItemButtonComponent
];

@NgModule({
  declarations: [
    ...component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...component
  ]
})
export class ListModule { }
