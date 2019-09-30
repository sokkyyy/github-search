import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any) {
    const dateToday = new Date();
    const todayWithNoMinutes: any = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());
    console.log();
    const diff = Math.abs(todayWithNoMinutes - value);
    const diffInSeconds = diff / 1000;
    const diffInDays = diffInSeconds / 86400;

    if (diffInDays > 1 && value < todayWithNoMinutes) {
      return diffInDays + ' days';
    } else {
      return 0;
    }
  }

}
