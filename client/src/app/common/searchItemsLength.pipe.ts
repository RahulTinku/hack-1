import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
	name: 'SearchItemsLength', 
	pure: false 
})

export class SearchItemsLengthPipe implements PipeTransform {
    transform(value: Array<any>, args: any[] = null): any {
        
        return value.map(t=> {
            return {
                item: t,
                parent: value
            }
        });
    }
} 