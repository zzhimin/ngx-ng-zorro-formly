import { FormlyFieldConfig } from "@ngx-formly/core";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";
import { Observable } from "rxjs";

export const upload = {
  name: '上传',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'upload',
      className: 'ant-col  ant-col-24',
      defaultValue: [],
      templateOptions: {
        label: '文件上传',
        type: 'upload',
        required: true,
        upload: {
          action: 'https://localhost:4888/upload',
          fileList: [],
          showUploadList: {
            showPreviewIcon: true,
            showRemoveIcon: true,
            showDownloadIcon: true
          },
          text: '点击上传',
          listType: 'text', // 'text' | 'picture-card'
          showButton: true, // 上传按钮是否显示
          preview: (file: NzUploadFile) => {},
          change: (info: { file: NzUploadFile, type: string, fileList: NzUploadFile[] }, field: FormlyFieldConfig) => {
            // 自定义处理，如上传成功 提示上传成功。上传失败，提示上传失败
          },
          data: (file: NzUploadFile) => {}, // 上传所需参数或返回上传参数的方法；注意：务必使用 => 定义处理方法。
          limit: 10, // 限制单次最多上传数量，nzMultiple 打开时有效；0 表示不限
          headers: (file: NzUploadFile): Object | Observable<{}> => {return {}}
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>图片上传</strong></div>'
    },
    {
      key: guid(),
      type: 'upload',
      className: 'ant-col  ant-col-24',
      defaultValue: [],
      templateOptions: {
        label: '文件上传',
        type: 'upload',
        required: true,
        upload: {
          action: 'https://localhost:4888/upload',
          fileList: [],
          showUploadList: {
            showPreviewIcon: true,
            showRemoveIcon: true,
            showDownloadIcon: true
          },
          text: '点击上传图片',
          listType: 'picture-card', // 'text' | 'picture-card'
          showButton: true, // 上传按钮是否显示
          fileType: 'image/png', // 文件类型，例如：image/png,image/jpeg,image/gif,image/bmp
          preview: (file: NzUploadFile) => {},
          change: (info: { file: NzUploadFile, type: string, fileList: NzUploadFile[] }, field: FormlyFieldConfig) => {}
        },
      },
    },
  ] as FormlyFieldConfig
}