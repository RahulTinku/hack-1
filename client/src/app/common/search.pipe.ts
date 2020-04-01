import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})

export class SearchPipe implements PipeTransform {
	transform(items: any[], searchText: any, arg: any, totalItems: any[]) : any[] {
		if(!items) return [];
		if(!searchText || searchText === '' || searchText === 'ALL') return items;

		searchText = searchText.toLowerCase();

		return totalItems.filter( it => {
			return it[arg].toLowerCase().includes(searchText);
		});
	}
}