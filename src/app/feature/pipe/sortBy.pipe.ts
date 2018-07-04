import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from '../../utils/utils-func';

@Pipe({
    name: 'sortBy',
    pure: false
})
export class SortByPipe implements PipeTransform {
    public transform(items: any[] = [], fieldName: string, direction = true): any[] {
        const data = items || []; // conditions for null
        return sortBy(data, fieldName, direction);
    }
}
