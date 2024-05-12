import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldCheckbox } from './checkbox.type';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';

@NgModule({
  declarations: [FormlyFieldCheckbox],
  imports: [
    CommonModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,

    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: FormlyFieldCheckbox,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {},
          },
        },
        {
          name: 'boolean',
          extends: 'checkbox',
        },
      ],
    }),
  ],
})
export class FormlyNzCheckboxModule {}
