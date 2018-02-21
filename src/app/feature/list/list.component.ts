import { ApiService } from '@feature/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public lists: IList[] = [];

  constructor(private readonly apiService: ApiService) { }

  public ngOnInit(): void {
    this.apiService.get<IList[]>('assets/list.mock.json')
      .subscribe(item => {
        this.lists = item;
      });
  }

  public sort(fieldName: string): void {
    this.lists = this.lists.sort((a, b) => {
      if (a[fieldName] === b[fieldName]) {
        return 0;
      }

      if (a[fieldName] == null) {
        return 1;
      }

      if (b[fieldName] == null) {
        return -1;
      }

      return a[fieldName] > b[fieldName] ? 1 : -1;
    });
  }
}
