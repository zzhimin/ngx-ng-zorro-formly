import { FormlyFieldConfig } from "@ngx-formly/core";
import { NzMarks } from "ng-zorro-antd/slider";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";

export const time = {
  name: '时间选择',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'time',
      className: 'ant-col  ant-col-24',
      defaultValue: false,
      templateOptions: {
        label: '时间选择',
        required: false,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        time: {
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>选择时分</strong></div>'
    },
    {
      key: guid(),
      type: 'time',
      className: 'ant-col  ant-col-24',
      defaultValue: false,
      templateOptions: {
        label: '时间选择',
        required: false,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        time: {
          format: 'HH:mm'
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>12小时制</strong></div>'
    },
    {
      key: guid(),
      type: 'time',
      className: 'ant-col  ant-col-24',
      defaultValue: false,
      templateOptions: {
        label: '时间选择',
        required: false,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        time: {
          use12Hours: true,
        },
      },
    },
  ] as FormlyFieldConfig
}