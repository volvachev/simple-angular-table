import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() public orderNumber = 0;
  @Input() public list: IList;
}
