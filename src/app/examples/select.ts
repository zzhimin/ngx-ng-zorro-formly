import { FormlyFieldConfig } from "@ngx-formly/core";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";
import { of } from "rxjs";
import { delay, tap } from "rxjs/operators";

export const select = {
  name: '选择框',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '选择框',
        required: true,
        placeholder: '请选择',
        multople: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        options: [
          { label: 'Apple', value: 'Apple', disabled: true },
          { label: 'Apple2', value: 'Apple2' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' },
        ],
        select: {
          loading: false,
          showSearch: true,
          allowClear: true,
        },
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>异步获取options</strong></div>'
    },
    {
      key: guid(),
      type: 'select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '选择框',
        required: true,
        placeholder: '请选择',
        multople: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        select: {
          mode: 'default',
          loading: false,
          showSearch: true,
          allowClear: true,
        },
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          field.templateOptions.options = [];
          field.templateOptions.select.loading = true;
          field.templateOptions.options = of([
            { label: 'Apple', value: 'Apple' },
            { label: 'Apple2', value: 'Apple2' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange', disabled: true },
          ]).pipe(
            delay(1000),
            tap(() => field.templateOptions.select.loading = false)
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
      type: 'select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '选择框',
        required: true,
        placeholder: '请选择',
        multople: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        select: {
          mode: 'multiple',
          loading: false,
          showSearch: true,
          allowClear: true,
        },
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          field.templateOptions.options = [];
          field.templateOptions.select.loading = true;
          field.templateOptions.options = of([
            { label: 'Apple', value: 'Apple' },
            { label: 'Apple2', value: 'Apple2' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange', disabled: true },
          ]).pipe(
            delay(1000),
            tap(() => field.templateOptions.select.loading = false)
          )
        }
      }
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>tags</strong></div>'
    },
    {
      key: guid(),
      type: 'select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '选择框',
        required: true,
        placeholder: '请选择',
        multople: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        select: {
          mode: 'tags',
          loading: false,
          showSearch: true,
          allowClear: true,
        },
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          field.templateOptions.options = [];
          field.templateOptions.select.loading = true;
          field.templateOptions.options = of([
            { label: 'Apple', value: 'Apple' },
            { label: 'Apple2', value: 'Apple2' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange', disabled: true },
          ]).pipe(
            delay(1000),
            tap(() => field.templateOptions.select.loading = false)
          )
        }
      }
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>自定义options</strong></div>'
    },
    {
      key: guid(),
      type: 'select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '选择框',
        required: true,
        placeholder: '请选择',
        multople: true,
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        options: [
          { label: {label: '狮子', customContent: '草原之王', color: 'red'}, value: 'lion' },
          { label: {label: '老虎', customContent: '动物之王'}, value: 'tiger' },
          { label: {label: '小兔子', customContent: '小可爱', color: 'pink'}, value: 'rabbit' },
        ],
        select: {
          mode: 'default',
          loading: false,
          showSearch: true,
          allowClear: true,
        },
      }
    },
  ] as FormlyFieldConfig
}