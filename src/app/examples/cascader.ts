import { FormlyFieldConfig } from "@ngx-formly/core";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";
import { of } from "rxjs";
import { delay, tap } from "rxjs/operators";

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true,
          },
        ],
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true,
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true,
          },
        ],
      },
    ],
  },
];

export const cascader = {
  name: '级联选择',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'cascader',
      className: 'ant-col  ant-col-24',
      defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
      templateOptions: {
        label: '级联选择',
        type: 'cascader',
        required: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                    isLeaf: true,
                  },
                ],
              },
              {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true,
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
        cascader: {
          expandTrigger: 'hover',
          expandIcon: '', // 自定义展开图标
          changeOnSelect: true,
          showSearch: true,
          modelChange: (value: any[]) => {
            // console.log(value);
          },
          visibleChange: (visible) => {
            // console.log(visible);
          },
          selectionChange: (value) => {
            // console.log(value);
          },
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>异步获取options</strong></div>'
    },
    {
      key: guid(),
      type: 'cascader',
      className: 'ant-col  ant-col-24',
      defaultValue: [],
      templateOptions: {
        label: '级联选择',
        type: 'cascader',
        required: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        options: [],
        cascader: {
          expandTrigger: 'hover',
          expandIcon: 'user',
          changeOnSelect: true,
          showSearch: true,
        },
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          of(options).pipe(delay(1000)).subscribe(options => {
            field.templateOptions.options = options;
          })
        }
      }
    },
  ] as FormlyFieldConfig
}