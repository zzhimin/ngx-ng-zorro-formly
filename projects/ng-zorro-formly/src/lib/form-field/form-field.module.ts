import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormlyWrapperFormField } from './form-field.wrapper';
import { GroupWrapperComponent } from "./form-group-field.wrapper";

@NgModule({
  declarations: [FormlyWrapperFormField, GroupWrapperComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field',
          component: FormlyWrapperFormField,
        },
        {
          name: 'form-group-field',
          component: GroupWrapperComponent,
        },
      ],
    }),
  ],
})
export class FormlyNzFormFieldModule {}
