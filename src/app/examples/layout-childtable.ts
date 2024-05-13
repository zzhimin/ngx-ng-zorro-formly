import { FormArray } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";
import { of } from "rxjs";
import { distinctUntilChanged, map, startWith, switchMap, tap } from "rxjs/operators";

export const layoutChildtable = {
  name: '布局-子表',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: 'childtable',
      type: 'childtable',
      className: 'ant-col  ant-col-24',
      wrappers: ['childtable-form-field'],
      templateOptions: {
        childtableTitle: '这是子表标题',
        serialNumber: true, // 序号
        isDisabled: false, // 查看详情的时候置为true
        addText: '添加',
        addButton: true,
        addChange: (field: FormlyFieldConfig) => { },
        required: true,
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'sport',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'A',
              width: '25%',
              options: [
                { value: '1', label: 'A' },
                { value: '2', label: 'B' },
              ],
            },
          },
          {
            key: 'team',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'Team',
              options: [],
            },
          },
          {
            key: 'player',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'Player',
              options: [],
            },
          },
          {
            key: 'input',
            type: 'input',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: '年龄',
            },
          },
        ]
      },
    },
    {
      template: '<div><strong>支持子表项拖动</strong></div>'
    },
    {
      key: 'childtable2',
      type: 'childtable',
      className: 'ant-col  ant-col-24',
      wrappers: ['childtable-form-field'],
      templateOptions: {
        childtableTitle: '这是子表标题',
        serialNumber: true, // 序号
        isDisabled: false, // 查看详情的时候置为true
        addText: '添加',
        addButton: true,
        addChange: (field: FormlyFieldConfig) => { },
        required: true,
        isDrag: true,
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'sport',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'A',
              width: '25%',
              options: [
                { value: '1', label: 'A' },
                { value: '2', label: 'B' },
              ],
            },
          },
          {
            key: 'team',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'Team',
              options: [],
            },
          },
          {
            key: 'player',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'Player',
              options: [],
            },
          },
          {
            key: 'input',
            type: 'input',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: '年龄',
            },
          },
        ]
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>支持子表项更多操作</strong></div>'
    },
    {
      key: 'childtable3',
      type: 'childtable',
      className: 'ant-col  ant-col-24',
      wrappers: ['childtable-form-field'],
      templateOptions: {
        childtableTitle: '这是子表标题',
        serialNumber: true, // 序号
        isDisabled: false, // 查看详情的时候置为true
        addText: '添加',
        addButton: true,
        addChange: (field: FormlyFieldConfig) => { },
        required: true,
        isDrag: true,
        moreAction: [
          {
            title: '详细',
            action: (field: FormlyFieldConfig, btnInfo) => { console.log('field >>:', field); console.log('btnInfo >>:', btnInfo); }
          },
          {
            title: '编辑',
            action: (field: FormlyFieldConfig, btnInfo) => { console.log('field >>:', field); console.log('btnInfo >>:', btnInfo); }
          },
        ]
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'sport',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'A',
              width: '25%',
              options: [
                { value: '1', label: 'A' },
                { value: '2', label: 'B' },
              ],
            },
          },
          {
            key: 'team',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'Team',
              options: [],
            },
          },
          {
            key: 'player',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'Player',
              options: [],
            },
          },
          {
            key: 'input',
            type: 'input',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: '年龄',
            },
          },
        ]
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>支持添加按钮更多操作</strong></div>'
    },
    {
      key: 'childtable4',
      type: 'childtable',
      className: 'ant-col  ant-col-24',
      wrappers: ['childtable-form-field'],
      templateOptions: {
        childtableTitle: '这是子表标题',
        serialNumber: true, // 序号
        isDisabled: false, // 查看详情的时候置为true
        addText: '添加',
        addButton: true,
        addChange: (field: FormlyFieldConfig) => { },
        required: true,
        addMore: [ // 支持添加按钮更多操作
          {
            text: '下载模版',
            action: (field: FormlyFieldConfig) => { }
          },
          {
            text: '上传模板',
            action: (field: FormlyFieldConfig) => { }
          }
        ]
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'sport',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'A',
              width: '25%',
              options: [
                { value: '1', label: 'A' },
                { value: '2', label: 'B' },
              ],
            },
          },
          {
            key: 'team',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'Team',
              options: [],
            },
          },
          {
            key: 'player',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'Player',
              options: [],
            },
          },
          {
            key: 'input',
            type: 'input',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: '年龄',
            },
          },
        ]
      },
    },
    {
      className: 'width100',
      template: '<hr /><div><strong>子表数据联动</strong></div>'
    },
    {
      key: 'childtable5',
      type: 'childtable',
      className: 'ant-col  ant-col-24',
      wrappers: ['childtable-form-field'],
      templateOptions: {
        childtableTitle: '这是子表标题',
        serialNumber: true, // 序号
        isDisabled: false, // 查看详情的时候置为true
        addText: '添加',
        addButton: true,
        addChange: (field: FormlyFieldConfig) => { },
        required: true,
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'sport',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'A',
              options: [
                { value: '1', label: 'A' },
                { value: '2', label: 'B' },
              ],
            },
          },
          {
            key: 'team',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'Team',
              options: [],
            },
            hooks: {
              onInit: (field) => {
                console.log("🚀 ~ field:", field)
                const teams = [
                  { value: '1', label: 'A-1', sportId: '1' },
                  { value: '2', label: 'A-2', sportId: '1' },
                  { value: '3', label: 'B-1', sportId: '2' },
                  { value: '4', label: 'B-2', sportId: '2' },
                ];

                const sportControl = field.parent.formControl.get('sport');
                field.templateOptions.options = sportControl.valueChanges.pipe(
                  startWith(sportControl.value),
                  distinctUntilChanged(),
                  switchMap(() => {
                    // 这里远程获取options
                    const sportId = sportControl.value;
                    return of(teams.filter(t => t.sportId === sportId))
                  }),
                  map((options: any) => {
                    const sportId = sportControl.value;
                    if (!options.find((option) => sportId === option.value)) {
                      field.formControl.setValue(null);
                    }

                    return options;
                  }),
                );
              },
            },
          },
          {
            key: 'player',
            type: 'select',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            templateOptions: {
              label: 'Player',
              options: [],
            },
            hooks: {
              onInit: (field) => {
                const players = [
                  { value: '1', label: 'A-1-1', teamId: '1' },
                  { value: '2', label: 'A-1-2', teamId: '1' },
                  { value: '3', label: 'A-2-1', teamId: '2' },
                  { value: '4', label: 'A-2-2', teamId: '2' },
                  { value: '5', label: 'B-1-1', teamId: '3' },
                  { value: '6', label: 'B-1-2', teamId: '3' },
                  { value: '7', label: 'B-2-1', teamId: '4' },
                  { value: '8', label: 'B-2-2', teamId: '4' },
                ];

                const teamControl = field.parent.formControl.get('team');
                field.templateOptions.options = teamControl.valueChanges.pipe(
                  startWith(teamControl.value),
                  distinctUntilChanged(),
                  map(() => {
                    const teamId = teamControl.value;
                    const options = players.filter((team) => team.teamId === teamId);
                    if (!options.find((option) => teamId === option.value)) {
                      field.formControl.setValue(null);
                    }

                    return options;
                  }),
                );
              },
            },
          },
          {
            key: 'input',
            type: 'input',
            className: 'ant-col  ant-col-24',
            wrappers: ['childtable-form-field'],
            hooks: {
              onInit: (f) => {
                const age1 = '18';
                const age2 = '20';

                const sportControl = f.parent.formControl.get('sport');
                sportControl.valueChanges.pipe(
                  startWith(sportControl.value),
                  distinctUntilChanged(),
                  switchMap(() => {
                    // 这里远程获取options
                    if (!sportControl.value) return of(null);
                    return sportControl.value === '1' ? of(age1) : of(age2);
                  }),
                  tap(val => {
                    f.formControl.setValue(val);
                  })
                ).subscribe();
              }
            },
            templateOptions: {
              label: '年龄',
            },
          },
        ]
      },
      hooks: {
        onInit: (field) => {
          const childtableControl = field.form.get('childtable5') as FormArray;
          childtableControl.valueChanges.subscribe((vals) => {
            console.log('vals >>:', vals);
          })
        }
      }
    },
  ]
}