import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldInputGroup } from './input-group.type';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { DirectiveModule } from '../directive/directive.module';

@NgModule({
  declarations: [FormlyFieldInputGroup],
  imports: [
    CommonModule,
    NzInputModule,
    NzFormModule,
    DirectiveModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'input-group',
          component: FormlyFieldInputGroup,
          defaultOptions: {
            templateOptions: {},
          },
          wrappers: ['form-field'],
        },
      ],
      wrappers: [
        {
          name: 'input-group',
          component: FormlyFieldInputGroup,
        },
      ],
    }),
  ],
})
export class FormlyNzInputGroupModule {}
