import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '@feature/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy {

  public lists$: Observable<IList[]>;
  public filterByName: string = null;

  private destroyStream$ = new Subject<void>();

  constructor(
    private readonly apiService: ApiService,
  ) { }

  public ngOnInit(): void {
    this.lists$ = this.apiService.get<IList[]>('assets/list.mock.json');
  }

  public ngOnDestroy(): void {
    // add feature for destroy stream
    this.destroyStream$.next();
  }

  public sort(fieldName: string): void {
    this.filterByName = fieldName;
  }

  public trackByFn(index: number, item: IList): string {
    return index + item.name;
  }
}
