import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { TransferFormly } from '../transfer';
import { FormlyFieldTreeSelect } from './tree-select.type';
import { TreeSelectFormly } from '.';
import { NzTreeNode } from 'ng-zorro-antd/tree';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [FormlyFieldTreeSelect],
  imports: [
    CommonModule,
    NzTreeSelectModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    NzToolTipModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tree-select',
          component: FormlyFieldTreeSelect,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              treeSelect: {
                dropdownMatchSelectWidth: true,
                showExpand: true,
                nodes: [],
                displayWith: (node: NzTreeNode) => node.title,
                virtualItemSize: 28,
                virtualMaxBufferPx: 500,
                virtualMinBufferPx: 28,
              } as TreeSelectFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzTreeSelectModule {}
