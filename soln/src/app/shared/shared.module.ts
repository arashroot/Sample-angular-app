import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenNameDirective } from './custom-validators/forbidden-name.directive';

/**
 * @todo Write the documentation.
 */
@NgModule({
  declarations: [ForbiddenNameDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
