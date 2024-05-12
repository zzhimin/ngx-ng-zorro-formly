import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedDirective } from './fixed.directive';

@NgModule({
  declarations: [FixedDirective],
  imports: [CommonModule],
  exports: [FixedDirective],
})
export class DirectiveModule {}
