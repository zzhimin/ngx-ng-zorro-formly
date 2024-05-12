import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { FormlyFieldCascader } from './cascader.type';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { CascaderFormly } from '.';

@NgModule({
  declarations: [FormlyFieldCascader],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    NzCascaderModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'cascader',
          component: FormlyFieldCascader,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              placeholder: '请选择',
              cascader: {
                allowClear: true,
                backdrop: false,
                changeOnSelect: false,
                expandTrigger: 'click',
                labelProperty: 'label',
                showArrow: true,
                showInput: true,
                showSearch: false,
                valueProperty: 'value',
              } as CascaderFormly,
            },
          },
        },
      ],
    }),
  ],
  exports: [],
})
export class FormlyNzCascaderModule {}
