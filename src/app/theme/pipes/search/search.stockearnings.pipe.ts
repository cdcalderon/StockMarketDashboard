import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'SearchStockEarningPipe' })
export class SearchStockEarningPipe implements PipeTransform {
    transform(value, args?): Array<any> {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(earning => {
                if (earning.symbol) {
                    return earning.symbol.search(searchText) !== -1;
                }
            });
        }
    }
}