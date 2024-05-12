import { FormlyFieldConfig } from "@ngx-formly/core";
import { NzMarks } from "ng-zorro-antd/slider";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";

export const switchs = {
  name: '开关',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'switch',
      className: 'ant-col  ant-col-24',
      defaultValue: false,
      templateOptions: {
        label: '开关',
        required: false,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        switch: {
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>自定义内容</strong></div>'
    },
    {
      key: guid(),
      type: 'switch',
      className: 'ant-col  ant-col-24',
      defaultValue: false,
      templateOptions: {
        label: '开关',
        required: false,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        switch: {
          checkedChildren: '开啦',
          unCheckedChildren: '关啦'
        },
      },
    },
  ] as FormlyFieldConfig
}