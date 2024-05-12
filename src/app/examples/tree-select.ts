import { FormlyFieldConfig } from "@ngx-formly/core";
import { NzMarks } from "ng-zorro-antd/slider";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

const nodes = [
  {
    title: 'parent 1',
    key: '100',
    children: [
      {
        title: 'parent 1-0',
        key: '1001',
        children: [
          { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
          { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
        ]
      },
      {
        title: 'parent 1-1',
        key: '1002',
        children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
      }
    ]
  }
]

export const treeSelect = {
  name: '树选择',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'tree-select',
      className: 'ant-col  ant-col-24',
      defaultValue: false,
      templateOptions: {
        label: '树选择',
        placeholder: '请选择',
        required: false,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        treeSelect: {
          nodes: nodes,
          asyncData: false,
          hideUnMatched: true,
          showSearch: true,
        }
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>异步数据</strong></div>'
    },
    {
      key: guid(),
      type: 'tree-select',
      className: 'ant-col  ant-col-24',
      defaultValue: false,
      templateOptions: {
        label: '树选择',
        placeholder: '请选择',
        required: false,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        treeSelect: {
          asyncData: true,
          hideUnMatched: true
        }
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          field.templateOptions.treeSelect.nodes = [];
          field.templateOptions.treeSelect.nodes = of(nodes).pipe(
            delay(5000),
          )
        }
      }
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>多选</strong></div>'
    },
    {
      key: guid(),
      type: 'tree-select',
      className: 'ant-col  ant-col-24',
      defaultValue: false,
      templateOptions: {
        label: '树选择',
        placeholder: '请选择',
        required: false,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        treeSelect: {
          nodes: nodes,
          asyncData: false,
          hideUnMatched: true,
          multiple: true,
        }
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>可勾选</strong></div>'
    },
    {
      key: guid(),
      type: 'tree-select',
      className: 'ant-col  ant-col-24',
      defaultValue: false,
      templateOptions: {
        label: '树选择',
        placeholder: '请选择',
        required: false,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        treeSelect: {
          nodes: nodes,
          asyncData: false,
          hideUnMatched: true,
          multiple: true,
          checkable: true,
        }
      },
    },
  ] as FormlyFieldConfig
}