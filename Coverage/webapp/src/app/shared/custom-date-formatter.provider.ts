import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';

import { getISOWeek } from 'date-fns';

export class CustomDateFormatter extends CalendarDateFormatter {

  public weekViewTitle({date, locale}: DateFormatterParams): string {
    const year: string = new Intl.DateTimeFormat(locale, {year: 'numeric'}).format(date);
    const weekNumber: number = getISOWeek(date);
    return `Settimana ${weekNumber} del ${year}`;
  }

  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
    return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date).replace(/\b(\w)/g, s => s.toUpperCase());
  }

}
