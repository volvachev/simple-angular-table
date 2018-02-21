import { ApiService } from '@feature/services/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  public lists: IList[] = [];

  private destroyStream = new Subject<void>();

  constructor(private readonly apiService: ApiService) { }

  public ngOnInit(): void {
    this.apiService.get<IList[]>('assets/list.mock.json')
      .pipe(
        takeUntil(this.destroyStream)
      )
      .subscribe(item => {
        this.lists = item;
      });
  }

  public ngOnDestroy(): void {
    this.destroyStream.next();
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
