import { UntypedFormArray } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";
import { of } from "rxjs";
import { delay, distinctUntilChanged, startWith, switchMap, tap } from "rxjs/operators";

export const fieldLinkage = {
  name: '控件联动',
  config: [
    {
      template: '<div><strong>取值、赋值</strong></div>'
    },
    {
      key: 'name',
      type: 'select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '姓名',
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
          { label: '小明', value: 'xiaoming' },
          { label: '小丽', value: 'xiaoli' },
        ],
        select: {
          loading: false,
          showSearch: true,
          allowClear: true,
        },
      },
    },
    {
      key: 'myname',
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '我的名字',
        placeholder: '请输入我的名字',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        input: {
          modelChange: (v: any) => { console.log('v >>:', v); },
        },
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          const nameControl = field.form.get('name');
          nameControl.valueChanges.pipe(
            startWith(nameControl.value),
            distinctUntilChanged(),
          ).subscribe(val => {
            field.formControl.setValue(val);
          });
        }
      }
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>隐藏、显示</strong></div>'
    },
    {
      key: 'name2',
      type: 'select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '隐藏显示示例',
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
          { label: '隐藏', value: true },
          { label: '显示', value: false },
        ],
        select: {
          loading: false,
          showSearch: true,
          allowClear: true,
        },
      },
    },
    {
      key: 'myname2',
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '我的名字',
        placeholder: '请输入我的名字',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        input: {
          modelChange: (v: any) => { console.log('v >>:', v); },
        },
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          // 这里可以做更多隐藏逻辑控制
          const nameControl = field.form.get('name2');
          nameControl.valueChanges.pipe(
            startWith(nameControl.value),
            distinctUntilChanged(),
          ).subscribe(val => {
            if (val) {
              field.formControl.reset();
              field.hide = true;
            } else {
              field.hide = false;
            }
          });
        }
      }
    },

    {
      className: 'width100',
      template: '<hr /><div><strong>禁用、启用</strong></div>'
    },
    {
      key: 'name3',
      type: 'select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '姓名',
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
          { label: '禁用', value: true },
          { label: '启用', value: false },
        ],
        select: {
          loading: false,
          showSearch: true,
          allowClear: true,
        },
      },
    },
    {
      key: 'myname3',
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '我的名字',
        placeholder: '请输入我的名字',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        input: {
          modelChange: (v: any) => { console.log('v >>:', v); },
        },
      },
      hooks: {
        // 这种方式可以做更多控制
        onInit: (field: FormlyFieldConfig) => {
          const nameControl = field.form.get('name3');
          nameControl.valueChanges.pipe(
            startWith(nameControl.value),
            distinctUntilChanged(),
          ).subscribe(val => {
            if (val) {
              field.formControl.disable();
            } else {
              field.formControl.enable();
            }
          });
        }
      }
    },

    {
      className: 'width100',
      template: '<hr /><div><strong>必填、不必填</strong></div>'
    },
    {
      key: 'name4',
      type: 'select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '姓名',
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
          { label: '必填', value: true },
          { label: '不必填', value: false },
        ],
        select: {
          loading: false,
          showSearch: true,
          allowClear: true,
        },
      },
    },
    {
      key: 'myname4',
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '我的名字',
        placeholder: '请输入我的名字',
        grid: {
          label: {
            span: 4
          },
          control: {
            span: 18
          }
        },
        input: {
          modelChange: (v: any) => { console.log('v >>:', v); },
        },
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          const nameControl = field.form.get('name4');
          nameControl.valueChanges.pipe(
            startWith(nameControl.value),
            distinctUntilChanged(),
          ).subscribe(val => {
            if (val) {
              field.props.required = true;
            } else {
              field.props.required = false;
            }
          });
        }
      }
    },

    {
      className: 'width100',
      template: '<hr /><div><strong>列取值</strong></div>'
    },
    {
      key: 'total',
      type: 'input',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '报销费用合计',
        placeholder: '请输入',
        require: true,
        disabled: true,
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
      key: 'detail',
      type: 'childtable',
      className: 'ant-col  ant-col-24',
      wrappers: ['childtable-form-field'],
      templateOptions: {
        childtableTitle: '报销详情',
        serialNumber: true, // 序号
        isDisabled: false, // 查看详情的时候置为true
        addText: '添加一项',
        addButton: true,
        addChange: (field: FormlyFieldConfig) => { },
        required: true,
        valueChanges: (values: any[], field: FormlyFieldConfig) => {
          const sum = values.reduce((prev, item) => prev += +item.money, 0);
          const totalControl = field.form.get('total');
          totalControl.setValue(sum);
        }
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'trip',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: '行程选择',
              options: [
                { value: 120, label: '福州到厦门' },
                { value: 180, label: '福州到龙岩' },
              ],
            },
          },
          {
            key: 'money',
            type: 'input',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              type: 'number',
              label: '报销金额',
              placeholder: '请输入需要报销的金额',
              required: true,
              max: 10000000,
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
                formatter: (value: number): string => {
                  return `${value ? (+value).toFixed(2) : 0} 元`
                },
                parser: (value: string): string => value.replace(` 元`, '').replace(`元`, ''),
              },
            },
          },
        ]
      },
    },

    {
      className: 'width100',
      template: '<hr /><div><strong>列启用、禁用</strong></div>'
    },
    {
      key: 'clodisable',
      type: 'select',
      className: 'ant-col  ant-col-24',
      templateOptions: {
        label: '列启用、禁用',
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
          { label: '启用', value: true },
          { label: '禁用', value: false },
        ],
        select: {
          loading: false,
          showSearch: true,
          allowClear: true,
        },
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          const clodisabletable = field.form.get('clodisabletable') as UntypedFormArray;
          field.formControl.valueChanges.subscribe(res => {
            for (let i = 0; i < clodisabletable.length; i++) {
              if (!res) {
                clodisabletable.at(i).get('money')?.disable();
              } else {
                clodisabletable.at(i).get('money')?.enable();
              }
            }

            // 或者你只想禁用金额大于200的列
            // for (let i = 0; i < clodisabletable.length; i++) {
            //   if (clodisabletable.at(i).value.money > 200 && !res) {
            //     clodisabletable.at(i).get('money')?.disable();
            //   } else {
            //     clodisabletable.at(i).get('money')?.enable();
            //   }
            // }
          })
        }
      }
    },
    {
      key: 'clodisabletable',
      type: 'childtable',
      className: 'ant-col  ant-col-24',
      wrappers: ['childtable-form-field'],
      templateOptions: {
        childtableTitle: '报销详情',
        serialNumber: true, // 序号
        isDisabled: false, // 查看详情的时候置为true
        addText: '添加一项',
        addButton: true,
        addChange: (field: FormlyFieldConfig) => { },
        required: true,
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'trip',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: '行程选择',
              options: [
                { value: 120, label: '福州到厦门' },
                { value: 180, label: '福州到龙岩' },
              ],
            },
          },
          {
            key: 'money',
            type: 'input',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              type: 'number',
              label: '报销金额',
              placeholder: '请输入需要报销的金额',
              required: true,
              max: 10000000,
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
                formatter: (value: number): string => {
                  return `${value ? (+value).toFixed(2) : 0} 元`
                },
                parser: (value: string): string => value.replace(` 元`, '').replace(`元`, ''),
              },
            },
          },
        ]
      },
    },


  ] as FormlyFieldConfig
}