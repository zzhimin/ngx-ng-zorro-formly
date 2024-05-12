import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';

import { FormlyFieldRich } from './rich.type';
import { RichFormly } from '.';
import { RichComponent } from './rich.component';

@NgModule({
  declarations: [FormlyFieldRich, RichComponent],
  exports: [RichComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'rich',
          component: FormlyFieldRich,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              transfer: {
              } as RichFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyRichModule {}
