import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filterByType',
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        if (value==='all'){
            return items;
        }
        return items.filter(singleItem =>
            singleItem[field] === value
        );
    }
}
