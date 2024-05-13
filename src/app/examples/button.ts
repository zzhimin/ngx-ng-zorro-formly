import { guid } from "projects/ng-zorro-formly/src/lib/utils";

export const button = {
  name: '按钮',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      type: 'button',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'primary', // default dashed text link
        title: '自定义按钮',
        disabled: false,
        button: {
          click: ($event) => console.log($event)
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>圆形按钮</strong></div>'
    },
    {
      type: 'button',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'primary', // default dashed text link
        title: '自定义按钮',
        icon: 'search', // 原型按钮输入icon
        shape: 'circle', // round
        disabled: false,
        button: {
          click: ($event) => console.log($event)
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>icon + 按钮</strong></div>'
    },
    {
      type: 'button',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'primary', // default dashed text link
        title: '按钮禁用了',
        disabled: true,
        icon: 'search',
        button: {
          click: ($event) => console.log($event)
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>小按钮</strong></div>'
    },
    {
      type: 'button',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'primary', // default dashed text link
        title: '小按钮',
        disabled: false,
        size: 'small', // default large
        button: {
          click: ($event) => console.log($event)
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>幽灵按钮</strong></div>'
    },
    {
      type: 'button',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'primary', // default dashed text link
        title: '幽灵按钮',
        disabled: false,
        ghost: true,
        button: {
          click: ($event) => console.log($event)
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>危险按钮</strong></div>'
    },
    {
      type: 'button',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'primary', // default dashed text link
        title: '危险按钮',
        disabled: false,
        danger: true,
        button: {
          click: ($event) => console.log($event)
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>Block 按钮</strong></div>'
    },
    {
      type: 'button',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'primary', // default dashed text link
        title: 'block 属性将使按钮适合其父宽度',
        disabled: false,
        block: true, // block 属性将使按钮适合其父宽度。
        button: {
          click: ($event) => console.log($event)
        },
      },
    },
  ]
}