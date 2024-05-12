import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { FormlyFieldButton } from './button.type';
import { FormlyModule } from '@ngx-formly/core';
import { CustomButtonFormly } from '.';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from "ng-zorro-antd/icon";

@NgModule({
  declarations: [FormlyFieldButton],
  imports: [
    CommonModule,
    NzButtonModule,
    FormlyNzFormFieldModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'button',
          component: FormlyFieldButton,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              button: {
                buttonStyle: 'outline',
                type: 'primary',
                title: '自定义按钮',
                disabled: false,
              } as CustomButtonFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzButtonModule {}
