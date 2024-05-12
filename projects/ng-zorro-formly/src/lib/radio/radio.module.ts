import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldRadio } from './radio.type';
import { FormlyModule } from '@ngx-formly/core';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { RadioFormly } from '.';
import { FormlySelectModule } from '@ngx-formly/core/select';

@NgModule({
  declarations: [FormlyFieldRadio],
  imports: [
    CommonModule,
    NzRadioModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'radio',
          component: FormlyFieldRadio,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              radio: {
                buttonStyle: 'outline',
              } as RadioFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzRadioModule {}
