import { guid } from "projects/ng-zorro-formly/src/lib/utils";

export const checkbox = {
  name: '复选框',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'checkbox',
      className: 'ant-col  ant-col-24',
      defaultValue: true,
      templateOptions: {
        label: '复选框',
        type: 'group', // label 只有一个选项，group 多个选项
        required: true,
        placeholder: '复选框',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        options: [
          { label: 'Apple', value: 'Apple', disabled: true, checked: true },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' },
        ],
        checkbox: {
          ngModelChange: (array) => {
            // console.log(array);
          },
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>只有一个选项</strong></div>'
    },
    {
      key: guid(),
      type: 'checkbox',
      className: 'ant-col  ant-col-24',
      defaultValue: true,
      templateOptions: {
        label: '复选框',
        type: 'label', // label 只有一个选项，group 多个选项
        required: true,
        placeholder: '是否同意?',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        options: [],
        checkbox: {
          ngModelChange: (array) => {
            // console.log(array);
          },
        },
      },
    },
  ]
}