import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { NzTransferModule } from 'ng-zorro-antd/transfer';

import { FormlyFieldTransfer } from './transfer.type';
import { TransferFormly } from '.';
import { TransferComponent } from './transfer.component';

@NgModule({
  declarations: [FormlyFieldTransfer, TransferComponent],
  exports: [TransferComponent],
  imports: [
    CommonModule,
    NzTransferModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'transfer',
          component: FormlyFieldTransfer,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              transfer: {
                dataSource: [],
                titles: ['', ''],
                operations: ['', ''],
                renderList: [null, null],
                listStyle: {},
              } as TransferFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzTransferModule {}
