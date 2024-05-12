import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { FormlyFieldSelect } from './select.type';
import { SelectFormly } from '.';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [FormlyFieldSelect],
  imports: [
    CommonModule,
    NzSelectModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlySelectModule,
    NzToolTipModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: FormlyFieldSelect,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              select: {
                compareWith: (o1: any, o2: any) => o1 === o2,
                autoClearSearchValue: true,
                allowClear: false,
                backdrop: false,
                open: false,
                dropdownMatchSelectWidth: true,
                serverSearch: false,
                maxMultipleCount: Infinity,
                mode: 'default',
                showSearch: false,
                tokenSeparators: [],
                loading: false,
                optionHeightPx: 32,
                optionOverflowSize: 8,
              } as SelectFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzSelectModule {}
