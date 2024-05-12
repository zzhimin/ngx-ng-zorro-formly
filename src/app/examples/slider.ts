import { FormlyFieldConfig } from "@ngx-formly/core";
import { NzMarks } from "ng-zorro-antd/slider";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";

export const slider = {
  name: '滑动输入',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'slider',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '滑动输入',
        required: false,
        placeholder: '滑动输入',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        slider: {
          min: 0,
          max: 100,
          step: 1,
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>刻度标记</strong></div>'
    },
    {
      key: guid(),
      type: 'slider',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '滑动输入',
        required: false,
        placeholder: '滑动输入',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        slider: {
          dots: true, 
          min: 0,
          max: 100,
          step: 1,
          marks: {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
              style: {
                color: '#f50'
              },
              label: '<strong>100°C</strong>'
            }
          }
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>范围</strong></div>'
    },
    {
      key: guid(),
      type: 'slider',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '滑动输入',
        required: false,
        placeholder: '滑动输入',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        slider: {
          range: true,
          min: 0,
          max: 100,
          step: 1
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>垂直</strong></div>'
    },
    {
      key: guid(),
      type: 'slider',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '滑动输入',
        required: false,
        placeholder: '滑动输入',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        slider: {
          range: true,
          min: 0,
          max: 100,
          step: 1,
          vertical: true,
          height: '300px', // 垂直的时候需指定高度
        },
      },
    },
  ] as FormlyFieldConfig
}