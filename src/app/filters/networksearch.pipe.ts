import { Injectable,Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'networksearch'
})
@Injectable()
export class NetworksearchPipe implements PipeTransform {
  transform(items: any[], searchText: any): any[] {
    if(!items) return [];
    if(!searchText) return items;
    if( !(searchText['saccessDate']|| searchText['ssourceIp'])) return items;
    let addZeroToLoneFigure = (n) => n.toString().length === 1 ? '0' + n : n.toString();
    let year=searchText['saccessDate'].year;
    let month=searchText['saccessDate'].month;
    let day=searchText['saccessDate'].day;
    let searchDate="";
    let searchIp=searchText['ssourceIp']?searchText['ssourceIp']:"";
    if(year)
        searchDate= year+"-"+addZeroToLoneFigure(month)+"-"+addZeroToLoneFigure(day);//moment(mydate).format('YYYY-MM-DD');
return items.filter( it => {
	   if(searchDate.trim().length>1 && searchIp.trim().length>=1 ){
      			return it._source.sourceIp.includes(searchText['ssourceIp']) && it._source.accessDate.includes(searchDate);
      		}
      	else  if(searchIp.trim().length==0 && searchDate.trim().length>1 ){
      		return it._source.accessDate.includes(searchDate)
      	}else if(searchDate.trim().length==0 && searchIp.trim().length>=3 ){
      		return it._source.sourceIp.includes(searchText['ssourceIp'])
      	}	
    });
   }
}