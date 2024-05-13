import { guid } from "projects/ng-zorro-formly/src/lib/utils";

export const layoutCard = {
  name: '布局-卡片',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      className: 'ant-col  ant-col-24',
      fieldGroupClassName: 'ant-row',
      templateOptions: {
        card: {
          title: '卡片布局标题',
          size: 'small', // default
        },
      },
      wrappers: ['card'],
      fieldGroup: [
        {
          key: guid(),
          type: 'radio',
          className: 'ant-col  ant-col-12',
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
          key: guid(),
          type: 'input',
          className: 'ant-col  ant-col-12',
          templateOptions: {
            label: '输入框',
            placeholder: '请输入姓名',
            required: true,
            grid: {
              label: {
                span: 6
              },
              control: {
                span: 18
              }
            },
            input: {
              modelChange: (v: any) => {console.log('v >>:', v);},
            } ,
          },
        },
      ]
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>无边框配合对titile自定义TemplateRef<void> ：输入组合</strong></div>'
    },
    {
      className: 'ant-col  ant-col-24',
      fieldGroupClassName: 'ant-row',
      templateOptions: {
        card: {
          title: '卡片布局标题',
          size: 'small', // default
          borderless: true,
        },
      },
      wrappers: ['card'],
      fieldGroup: [
        {
          key: guid(),
          type: 'radio',
          className: 'ant-col  ant-col-12',
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
          key: guid(),
          type: 'input',
          className: 'ant-col  ant-col-12',
          templateOptions: {
            label: '输入框',
            placeholder: '请输入姓名',
            required: true,
            grid: {
              label: {
                span: 6
              },
              control: {
                span: 18
              }
            },
            input: {
              modelChange: (v: any) => {console.log('v >>:', v);},
            } ,
          },
        },
      ]
    },
  ]
}