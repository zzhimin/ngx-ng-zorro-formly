import { guid } from "projects/ng-zorro-formly/src/lib/utils";

export const rate = {
  name: '评分',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'rate',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        required: true,
        label: '评分',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        rate: {
          count: 6, // 总数
          allowHalf: true, // 是否允许半选
          allowClear: true, // 是否允许再次点击后清除
          // character: this.characterZhLetter,
        },
      },
    },
  ]
}