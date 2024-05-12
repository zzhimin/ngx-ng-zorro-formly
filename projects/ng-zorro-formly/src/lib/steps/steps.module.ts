import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldSteps } from './steps.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { MatStepperModule } from '@angular/material/stepper';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { StepsFormly } from './index';
@NgModule({
  declarations: [FormlyFieldSteps],
  imports: [
    CommonModule,
    MatStepperModule,
    NzButtonModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'steps',
          component: FormlyFieldSteps,
          defaultOptions: {
            className: 'ant-col  ant-col-24',
            templateOptions: {
              steps: {
                size: 'small'
              } as StepsFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzStepsModule { }
