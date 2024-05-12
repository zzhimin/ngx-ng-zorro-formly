import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldSwitch } from './switch.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { SwitchFormly } from '.';
@NgModule({
  declarations: [FormlyFieldSwitch],
  imports: [
    CommonModule,
    NzSwitchModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'switch',
          component: FormlyFieldSwitch,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              switch: {} as SwitchFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzSwitchModule {}
