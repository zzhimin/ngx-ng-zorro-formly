import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormlyWrapperChildtableFormField } from './childtable-form-field.wrapper';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [FormlyWrapperChildtableFormField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzToolTipModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'childtable-form-field',
          component: FormlyWrapperChildtableFormField,
        },
      ],
    }),
  ],
})
export class FormlyNzChildtableFormFieldModule {}
