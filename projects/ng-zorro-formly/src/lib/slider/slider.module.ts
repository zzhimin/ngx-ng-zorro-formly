import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { SelectFormly } from '../select';
import { FormlyFieldSlider } from './slider.type';
import { SliderFormly } from '.';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  declarations: [FormlyFieldSlider],
  imports: [
    CommonModule,
    NzSliderModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    NzProgressModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'slider',
          component: FormlyFieldSlider,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              slider: {
                dots: false,
                included: false,
                max: 100,
                min: 0,
                range: false,
                step: 1,
                vertical: false,
                reverse: false,
                tooltipVisible: 'default',
              } as SliderFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzSliderModule {}
