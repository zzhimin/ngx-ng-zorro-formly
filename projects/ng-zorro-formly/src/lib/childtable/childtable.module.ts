import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormlyFieldChildtable } from './childtable.type';
import { FormlyModule } from '@ngx-formly/core';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [FormlyFieldChildtable],
  imports: [
    CommonModule,
    NzTableModule,
    NzDescriptionsModule,
    NzEmptyModule,
    DragDropModule,
    NzDropDownModule,
    NzButtonModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {name: 'childtable', component: FormlyFieldChildtable},
      ]
    }),
  ],
})
export class FormlyNzChildtableModule {}
