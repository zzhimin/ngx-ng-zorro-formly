import { FormlyFieldConfig } from "@ngx-formly/core";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";

export const rich = {
  name: '富文本',
  config: [
    {
      template: `<div><strong>配置参考:</strong></div>
      <div>https://blog.51cto.com/u_15127574/3377752</div>
      <div>https://www.kancloud.cn/liuwave/quill/1409423</div>
      `
    },
    {
      key: guid(),
      type: 'rich',
      className: 'ant-col  ant-col-24',
      defaultValue: '',
      templateOptions: {
        label: '富文本编辑器',
        required: false,
        placeholder: '请输入...',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        rich: {
          readonly: false,
          toolbar: [
            // 默认的
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['image']
          ]
        },
      },
    },
  ] as FormlyFieldConfig
}