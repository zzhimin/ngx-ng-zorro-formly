import { guid } from "projects/ng-zorro-formly/src/lib/utils";

export const input = {
  name: '输入框',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '输入框',
        placeholder: '请输入姓名',
        required: true,
        grid: {
          label: {
            span: 4
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
    {
      className: 'width100',
      template: '<hr /><div><strong>提示</strong></div>'
    },
    {
      key: guid(),
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '输入框',
        placeholder: '请输入姓名',
        required: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        input: {
          addOnAfter: 'question-circle',
          tipsContent: '这是一条提示'
        } ,
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>密码输入</strong></div>'
    },
    {
      key: guid(),
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'password',
        label: '密码框',
        placeholder: '请输入密码',
        required: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        input: {
          addOnAfter: '?',
          tipsContent: '密码由字母和数字组合且不少于8位'
        } ,
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>颜色选择</strong></div>'
    },
    {
      key: guid(),
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'color',
        label: '颜色选择',
        placeholder: '请选择颜色',
        required: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        color: {
          width: '100px'
        } ,
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>数字输入</strong></div>'
    },
    {
      key: guid(),
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'number',
        label: '数字输入',
        placeholder: '请输入数字',
        required: true,
        max: 1000,
        min: 0,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          },
        },
        number: {
          width: '100%',
          precision: 1,
          step: 1,
          formatter: (val) => val,
          parser: (val) => val,
        } ,
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>数字范围输入</strong></div>'
    },
    {
      key: guid(),
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'range-number',
        label: '数字范围输入',
        placeholder: ['最小值', '最大值'],
        required: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>文本域输入</strong></div>'
    },
    {
      key: guid(),
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'textarea',
        label: '文本域输入',
        placeholder: '请输入',
        required: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        textarea: {
          rows: 6,
          borderless: false,
          maxCharacterCount: 100
        }
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>自动完成</strong></div>'
    },
    {
      key: guid(),
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        type: 'autoComplete',
        label: '输入',
        placeholder: '请输入',
        required: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        autoComplete: {
          dataSource: [
            {label: '苹果', value: 'apple'},
            {label: '香蕉', value: 'banana'}
          ],
          compareWith: (a, b) => a == b
        }
      },
    },
  ]
}