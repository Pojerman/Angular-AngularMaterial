import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MatDatepicker,
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { APP_DATE_FORMATS, AppDateAdapter } from './date-adapter';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    provideNativeDateAdapter(),
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
})
export class DatepickerComponent {
  @Output() public changeEvent = new EventEmitter();
  @ViewChild('dateInput') dateInput!: ElementRef;
  public value!: string;
  public parseFailed: boolean = false;

  emitChange(type: string, event: MatDatepickerInputEvent<Date>) {
    this.changeEvent.emit(this.value);
  }

  onInput(event: any) {
    const input = event.target.value;
    const regex = /^[0-9.]*$/;

    if (!regex.test(input)) {
      event.target.value = input.replace(/[^0-9.]/g, '');
    }
  }

  isValidDateFormat(input: string): boolean {
    const parts = input.split('.');
    if (parts.length !== 3) return false;
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);

    return !(day < 1 || day > 31 || month < 1 || month > 12);
  }

  onBlur() {
    const input = this.dateInput.nativeElement.value;
    this.parseFailed = !this.isValidDateFormat(input);
  }
}
