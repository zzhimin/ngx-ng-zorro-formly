import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormlyFieldCard } from './card.type';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldCascader } from '../cascader/cascader.type';

@NgModule({
  declarations: [FormlyFieldCard],
  imports: [
    CommonModule,
    NzCardModule,
    FormlyModule.forChild({
      wrappers: [{ name: 'card', component: FormlyFieldCard, types: ['card'] }],
    }),
  ],
})
export class FormlyNzCardModule {}
