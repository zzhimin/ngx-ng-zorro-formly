# Ngx-Ng-Zorro-Formly

这是[ngx-formly](https://github.com/ngx-formly/ngx-formly)的[ng-zorro](https://ng.ant.design/docs/introduce/zh)主题UI。

配置模板 [ngx-ng-zorro-formly](https://zzhimin.github.io/ngx-ng-zorro-formly/)。

## 使用方法
  支持Angular 13 及以上版本

1. 安装ng-zorro
    ```
    ng add ng-zorro-antd
    ```
2. 安装 ngx-formly
    ```
    yarn add @ngx-formly/core
    ```
3. 安装 ng-zorro-formly，安装富文本库quill
   ```
    yarn add ng-zorro-formly quill
   ```


4. 配置初始化
   在项目的 app.module.ts 导入 `FormlyNgZorroModule`;
    ```
    import { FormlyModule } from '@ngx-formly/core';
    import { NzFormModule } from 'ng-zorro-antd/form';
    import { FormlyNgZorroModule } from 'ng-zorro-formly';

    function requiredValidationMessage(err: any, field: any) {
      return `${field.templateOptions.label} 为必填项`;
    }

    @NgModule({
        imports: [
            ...
            NzFormModule,
            FormlyModule.forRoot({ 
              extras: { lazyRender: true },
              validationMessages: [
                {name: 'required', message: requiredValidationMessage}
              ]
            }),
            FormlyNgZorroModule,
        ],
    })
    export class AppModule { }
    ```

  5. 引入组件
    在需要构建表单的地方引入模板组件。form、model、options不传，将会使用默认，如果要用的话可以通过组件实例拿到。

    ```
    <formly-form-template 
      #formlyFormTemplate
      [configs]="configs"
    ></formly-form-template>
    ```

  6. 传入配置项
    使用[ngx-ng-zorro-formly](https://zzhimin.github.io/ngx-ng-zorro-formly/)提供的组件配置模板 配置configs。

    ```
    import { Component, OnInit } from '@angular/core';
    import { FormlyFieldConfig } from '@ngx-formly/core';
    import { FormlyFormTemplateComponent } from 'ng-zorro-formly';

    @Component({
      selector: 'app-root',
      template: `
        <formly-form-template 
          #formlyFormTemplate
          [configs]="configs"
        ></formly-form-template>
      `,
      styleUrls: ['./app.component.less']
    })
    export class AppComponent implements OnInit {
      @ViewChild('formlyFormTemplate') formlyFormTemplate: FormlyFormTemplateComponent;
      configs: FormlyFieldConfig[] = []

      ngOnInit(): void {
        this.configs = [
        ...控件配置
        ]

      }

      submit() {
        const valid = this.formlyFormTemplate.validForm();
        if (valid) {
          const model = this.formlyFormTemplate.submit();
          console.log('model >>:', model);
        }
      }
    }
    ```

