import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { FormlyFieldLocation } from './location.type';

@NgModule({
  declarations: [FormlyFieldLocation],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    NzInputModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'location',
          component: FormlyFieldLocation,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {},
          }
        },
      ],
    }),
  ],
  exports: [ ]
})
export class FormlyLocationModule {}