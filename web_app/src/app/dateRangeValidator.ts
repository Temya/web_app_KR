import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateRangeValidator(startDateControlName: string, endDateControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const startDateControl = formGroup.get(startDateControlName);
      const endDateControl = formGroup.get(endDateControlName);
  
      if (startDateControl?.value && endDateControl?.value) {
        const startDate = tuiDayToDate(startDateControl.value);
        const endDate = tuiDayToDate(endDateControl.value);
  
        if (!isNaN(startDate.valueOf()) && !isNaN(endDate.valueOf())) {
          return startDate <= endDate ? null : { dateRangeInvalid: true };
        }
      }
      return null;
    };
  }

function tuiDayToDate(tuiDay: { year: number; month: number; day: number }): Date {
    return new Date(tuiDay.year, tuiDay.month - 1, tuiDay.day);
}