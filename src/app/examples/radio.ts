import { guid } from "projects/ng-zorro-formly/src/lib/utils";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

export const radio = {
  name: '单选框',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'radio',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        required: true,
        label: '单选框',
        type: 'radio', // radio 单选框  button 按钮风格单选框
        radio: {
          buttonStyle: 'solid',
          name: 'test',
          ngModelChange: (value: any) => {
            // console.log(value);
          },
        },
        options: [
          { label: 'Apple', value: 'Apple', disabled: false },
          { label: 'Pear', value: 'Pear', disabled: false },
          { label: 'Orange', value: 'Orange', disabled: true },
        ],
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>按钮风格单选框</strong></div>'
    },
    {
      key: guid(),
      type: 'radio',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        required: true,
        label: '按钮风格单选框',
        type: 'button', // radio 单选框  button 按钮风格单选框
        radio: {
          buttonStyle: 'solid',
          name: 'test',
          ngModelChange: (value: any) => {
            // console.log(value);
          },
        },
        options: [
          { label: 'Apple', value: 'Apple', disabled: false },
          { label: 'Pear', value: 'Pear', disabled: false },
          { label: 'Orange', value: 'Orange' },
        ],
      },
    },
  ]
}