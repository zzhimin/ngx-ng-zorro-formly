import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldTabs } from './tabs.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { TabsFormly } from '.';
@NgModule({
  declarations: [FormlyFieldTabs],
  imports: [
    CommonModule,
    NzTabsModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tabs',
          component: FormlyFieldTabs,
          defaultOptions: {
            className: 'ant-col  ant-col-24',
            templateOptions: {
              tabs: {
                animated: true,
                size: 'default',
                type: 'line',
                hideAll: false,
                linkRouter: false,
                linkExact: true,
                centered: false,
              } as TabsFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzTabsModule {}
