import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any) {
    const dateToday = new Date();
    const todayWithNoMinutes: any = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());

    const valueArray = value.split('-');
    const valueYear = valueArray[0];
    const valueMonth = valueArray[1] - 1;
    const valueDate = valueArray[2][0] + valueArray[2][1];
    const actualValueDate: any = new Date(valueYear, valueMonth, valueDate);

    const diff = Math.abs(todayWithNoMinutes - actualValueDate);
    const diffInSeconds = diff / 1000;
    const diffInDays = diffInSeconds / 86400;

    if (diffInDays > 1 && actualValueDate < todayWithNoMinutes) {
      return diffInDays + ' days';
    } else {
      return 0;
    }
  }

}
