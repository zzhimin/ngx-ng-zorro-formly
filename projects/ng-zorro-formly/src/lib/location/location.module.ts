
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { FormlyFieldLocation } from './location.type';
import { LocationFormly } from '.';
import { LocationComponent } from './location.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [FormlyFieldLocation, LocationComponent],
  exports: [LocationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'location',
          component: FormlyFieldLocation,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              transfer: {
              } as LocationFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyLocationModule {}
