import { FormlyFieldConfig } from "@ngx-formly/core";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";


export const date = {
  name: '日期',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '日期选择',
        type: 'date', // 日期选择  // range 日期范围选择
        required: true,
        placeholder: '请选择',
        date: {
          mode: 'date',
          onOpenChange: (value: boolean) => {
            // console.log(value);
          },
          onOk: (value: Date) => {
            // console.log(value);
          },
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>日期时间</strong></div>'
    },
    {
      key: guid(),
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '日期时间',
        type: 'date', // 日期选择  // range 日期范围选择
        required: true,
        placeholder: '请选择',
        date: {
          mode: 'date',
          showTime: true,
          showToday: true,
          onOpenChange: (value: boolean) => {
            // console.log(value);
          },
          onOk: (value: Date) => {
            // console.log(value);
          },
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>周选择</strong></div>'
    },
    {
      key: guid(),
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '周选择',
        type: 'date', // 日期选择  // range 日期范围选择
        required: true,
        placeholder: '请选择',
        date: {
          mode: 'week',
          onOpenChange: (value: boolean) => {
            // console.log(value);
          },
          onOk: (value: Date) => {
            // console.log(value);
          },
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>月选择</strong></div>'
    },
    {
      key: guid(),
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '月选择',
        type: 'date', // 日期选择  // range 日期范围选择
        required: true,
        placeholder: '请选择',
        date: {
          mode: 'month',
          onOpenChange: (value: boolean) => {
            // console.log(value);
          },
          onOk: (value: Date) => {
            // console.log(value);
          },
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>年选择</strong></div>'
    },
    {
      key: guid(),
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '年选择',
        type: 'date', // 日期选择  // range 日期范围选择
        required: true,
        placeholder: '请选择',
        date: {
          mode: 'year',
          onOpenChange: (value: boolean) => {
            // console.log(value);
          },
          onOk: (value: Date) => {
            // console.log(value);
          },
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>日期范围选择</strong></div>'
    },
    {
      key: guid(),
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '范围选择',
        type: 'range', // 日期选择  // range 日期范围选择
        required: true,
        placeholder: ['开始日期', '结束日期'],
        range: {
          mode: 'date',
          onOpenChange: (value: boolean) => {
            // console.log(value);
          },
          onOk: (value: Date) => {
            // console.log(value);
          },
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>日期时间范围选择</strong></div>'
    },
    {
      key: guid(),
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '日期时间范围选择',
        type: 'range', // 日期选择  // range 日期范围选择
        required: true,
        placeholder: ['开始日期', '结束日期'],
        range: {
          mode: 'date',
          showTime: true,
          onOpenChange: (value: boolean) => {
            // console.log(value);
          },
          onOk: (value: Date) => {
            // console.log(value);
          },
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>周范围选择</strong></div>'
    },
    {
      key: guid(),
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '周范围选择',
        type: 'range', // 日期选择  // range 日期范围选择
        required: true,
        placeholder: ['开始日期', '结束日期'],
        range: {
          mode: 'week',
          onOpenChange: (value: boolean) => {
            // console.log(value);
          },
          onOk: (value: Date) => {
            // console.log(value);
          },
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>月范围选择</strong></div>'
    },
    {
      key: guid(),
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '月范围选择',
        type: 'range', // 日期选择  // range 日期范围选择
        required: true,
        placeholder: ['开始日期', '结束日期'],
        range: {
          mode: 'month',
          onOpenChange: (value: boolean) => {
            // console.log(value);
          },
          onOk: (value: Date) => {
            // console.log(value);
          },
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>年范围选择</strong></div>'
    },
    {
      key: guid(),
      type: 'date',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '年范围选择',
        type: 'range', // 日期选择  // range 日期范围选择
        required: true,
        placeholder: ['开始日期', '结束日期'],
        range: {
          mode: 'year',
          onOpenChange: (value: boolean) => {
            // console.log(value);
          },
          onOk: (value: Date) => {
            // console.log(value);
          },
        },
      },
    },
  ] as FormlyFieldConfig[]
}
