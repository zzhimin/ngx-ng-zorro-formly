import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldCollapse } from './collapse.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { CollapseFormly } from './index';
@NgModule({
  declarations: [FormlyFieldCollapse],
  imports: [
    CommonModule,
    NzCollapseModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'collapse',
          component: FormlyFieldCollapse,
          defaultOptions: {
            className: 'ant-col  ant-col-24',
            templateOptions: {
              collapse: {
                accordion: true,
                ghost: false,
              } as CollapseFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzCollapseModule { }
