import {Pipe, PipeTransform} from "@angular/core"

@Pipe({
    name:'search',
    pure: false
})

export class SearchPipe implements PipeTransform{
    transform(values: any[], searchString: string): any[]{
        var invalidInput = !values || !searchString;

        if( invalidInput){
            return values;
        }
        var filteredSet = values.filter((item) => this.contains(item, searchString) );
        return filteredSet;
    }

    private contains(item:any, searchString:string) {
        return item.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0;
    }
}