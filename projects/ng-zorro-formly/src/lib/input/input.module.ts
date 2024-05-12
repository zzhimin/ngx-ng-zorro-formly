import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { FormlyFieldInput } from './input.type';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import {
  AutocompleteFormly,
  FormlyJson,
  InputFormly,
  NumberFormly,
  TextAreaFormly,
} from '.';
import { FormlyFieldRangeNumber } from './range-number/range-number.type';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [FormlyFieldInput, FormlyFieldRangeNumber],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    NzAutocompleteModule,
    FormlyNzFormFieldModule,
    NzIconModule,
    NzToolTipModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',

          component: FormlyFieldInput,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'input',
              input: {} as InputFormly,
            },
          },
        },
        {
          name: 'range-number',
          extends: 'input',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'range-number',
            },
          },
        },
        { name: 'string', extends: 'input' },

        {
          name: 'autoComplete',
          extends: 'input',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'autoComplete',
              autoComplete: {
                backfill: false,
                defaultActiveFirstOption: true,
                compareWith: (o1: any, o2: any) => o1 === o2,
              } as AutocompleteFormly,
            },
          },
        },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              className: 'ant-col  ant-col-12',
              type: 'number',
              number: {
                max: Infinity,
                min: -Infinity,
                parser: (value: string) =>
                  value
                    .trim()
                    .replace(/。/g, '.')
                    .replace(/[^\w\.-]+/g, ''),
                precisionMode: 'toFixed',
                step: 1,
                inputMode: 'decimal',
                formatter: (value: number) => value,
              } as NumberFormly,
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'inputGroup',
          extends: 'input',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'inputGroup',
            },
          },
        },
        {
          name: 'textarea',
          extends: 'input',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'textarea',
              textarea: {
                rows: 4,
                autosize: false,
              } as TextAreaFormly,
            },
          },
        },
        {
          name: 'color',
          extends: 'input',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'color',
            },
          },
        },
        {
          name: 'json',
          // extends: 'input',
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'json',
              json: {
                label: '标题',
                disabled: false,
                required: false,
                readonly: false,
                fillHeight: false,
                editorStyle: { minHeight: '50px' },
                sort: null
              } as FormlyJson
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzInputModule {}
