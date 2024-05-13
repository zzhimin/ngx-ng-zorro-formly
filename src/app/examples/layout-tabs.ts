import { guid } from "projects/ng-zorro-formly/src/lib/utils";

export const layoutTabs = {
  name: '布局-标签页',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      type: 'tabs',
      templateOptions: {
        tabs: {
          tabPosition: 'top',
          animated: true,
          type: 'line', // card editable-card line
          hideAll: false,
          linkRouter: false,
          centered: false,
          size: 'small', // default
        },
      },
      fieldGroup: [
        {
          fieldGroupClassName: 'ant-row',
          templateOptions: {
            label: '标题页1'
          },
          fieldGroup: [
            {
              key: guid(),
              type: 'radio',
              className: 'ant-col  ant-col-12',
              templateOptions: {
                required: true,
                label: '单选框',
                type: 'radio', // radio 单选框  button 按钮风格单选框
                grid: {
                  label: {
                    span: 6
                  },
                  control: {
                    span: 18
                  }
                },
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
          ],
        },
        {
          templateOptions: {
            label: '标题页2'
          },
          fieldGroup: [
            {
              key: guid(),
              type: 'radio',
              className: 'ant-col  ant-col-12',
              templateOptions: {
                required: true,
                label: '单选框',
                type: 'radio', // radio 单选框  button 按钮风格单选框
                grid: {
                  label: {
                    span: 6
                  },
                  control: {
                    span: 18
                  }
                },
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
          ],
        },
      ]
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>card样式</strong></div>'
    },
    {
      type: 'tabs',
      templateOptions: {
        tabs: {
          tabPosition: 'top',
          animated: true,
          type: 'card', // card editable-card line
          hideAll: false,
          linkRouter: false,
          centered: false,
          size: 'small', // default
        },
      },
      fieldGroup: [
        {
          fieldGroupClassName: 'ant-row',
          templateOptions: {
            label: '标题页1'
          },
          fieldGroup: [
            {
              key: guid(),
              type: 'radio',
              className: 'ant-col  ant-col-12',
              templateOptions: {
                required: true,
                label: '单选框11',
                type: 'radio', // radio 单选框  button 按钮风格单选框
                grid: {
                  label: {
                    span: 6
                  },
                  control: {
                    span: 18
                  }
                },
                radio: {
                  buttonStyle: 'solid',
                  name: 'test',
                  ngModelChange: (value: any) => {
                    // console.log(value);
                  },
                },
                options: [
                  { label: 'Apple11', value: 'Apple', disabled: false },
                  { label: 'Pear11', value: 'Pear', disabled: false },
                  { label: 'Orange11', value: 'Orange', disabled: true },
                ],
              },
            },
            {
              key: guid(),
              type: 'input',
              className: 'ant-col  ant-col-12',
              templateOptions: {
                label: '输入框22',
                placeholder: '请输入姓名22',
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
          ],
        },
        {
          templateOptions: {
            label: '标题页2'
          },
          fieldGroup: [
            {
              key: guid(),
              type: 'radio',
              className: 'ant-col  ant-col-12',
              templateOptions: {
                required: true,
                label: '单选框',
                type: 'radio', // radio 单选框  button 按钮风格单选框
                grid: {
                  label: {
                    span: 6
                  },
                  control: {
                    span: 18
                  }
                },
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
          ],
        },
      ]
    },
  ]
}