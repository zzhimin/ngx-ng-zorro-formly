import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { FormlyFieldRate } from './rate.type';
import { RateFormly } from '.';

@NgModule({
  declarations: [FormlyFieldRate],
  imports: [
    CommonModule,
    NzRateModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'rate',
          component: FormlyFieldRate,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              rate: {
                allowClear: true,
                allowHalf: false,
                count: 5,
                tooltips: [],
              } as RateFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzRateModule {}
