import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

/**
 * Custom validator
 * @param nameRe
 */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appForbiddenName]'
})
/**
 * Forbidden name directive
 */
export class ForbiddenNameDirective {
  /**
   * constructor
   */
  constructor() { }
}
