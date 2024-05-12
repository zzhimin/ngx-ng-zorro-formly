import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzTreeNode } from 'ng-zorro-antd/tree';
import { FormlyNzFormFieldModule } from '../form-field/form-field.module';
import { FormlyFieldUpload } from './upload.type';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UploadComponent } from './upload.component';
import { UploadFormly } from '.';
@NgModule({
  declarations: [FormlyFieldUpload, UploadComponent],
  imports: [
    CommonModule,
    NzUploadModule,
    NzButtonModule,
    NzIconModule,
    ReactiveFormsModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'upload',
          component: FormlyFieldUpload,
          wrappers: ['form-field'],
          defaultOptions: {
            className: 'ant-col  ant-col-12',
            templateOptions: {
              type: 'select',
              upload: {
                listType: 'text',
                name: 'file',
                showUploadList: true,
                showButton: true,
                openFileDialogOnClick: true,
                limit: 0,
                filter: [],
                text: '点击上传',
              } as UploadFormly,
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzUploadModule {}
