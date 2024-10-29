import { EventEmitter, Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable({ providedIn: 'root' })
export class AppDateAdapter extends NativeDateAdapter {
  override parse(value: any): Date | null {
    if (typeof value === 'string' && value.indexOf('/') > -1) {
      const str = value.split('/');
      const date = Number(str[0]);
      const month = Number(str[1]);
      const year = Number(str[2]);
      return new Date(year, month, date);
    }

    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  override format(date: Date, displayFormat: string): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${this.to2digit(day)}.${this.to2digit(month)}.${this.to2digit(year)}`;
    } else {
      return date.toDateString();
    }
  }

  private to2digit(n: number): string {
    return ('00' + n).slice(-2);
  }

  override getFirstDayOfWeek(): number {
    return 1;
  }
}

export const APP_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
};

// override getFirstDayOfWeek(): number {
//   return 1;
// }
//
// override parse(value: any): Date | null {
//   if (!value) {
//     this.onParseDone.emit(true);
//     return null;
//   }
//
//   let d: Date | null = this.checkByRegexpAndConvertToDate(
//     value,
//     /^(\d{1,2})\.(\d{1,2})\.(\d{2,4})$/
//   );
//   if (d) {
//     this.onParseDone.emit(true);
//     return d;
//   }
//   d = this.checkByRegexpAndConvertToDate(value, /^(\d{2})(\d{2})(\d{2,4})$/);
//   if (d) {
//     this.onParseDone.emit(true);
//     return d;
//   }
//
//   const standardDate: Date | null = new Date(value);
//   this.onParseDone.emit(!!standardDate && !!standardDate.getDate());
//   return standardDate;
// }
//
// checkByRegexpAndConvertToDate(str: any, regex: any) {
//   const m = str.match(regex);
//   const lastYearToChange = 50;
//   const date: Date | null = m
//     ? new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]))
//     : null;
//
//   if (date && m[3] < lastYearToChange) {
//     date.setFullYear(date.getFullYear() + 100);
//   }
//   return date;
// }
