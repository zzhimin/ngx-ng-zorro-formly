# Ngx-Ng-Zorro-Formly  

Este es el tema UI [ng-zorro](https://ng.ant.design/docs/introduce/zh) para [ngx-formly](https://github.com/ngx-formly/ngx-formly).  

Plantillas de configuración [ngx-ng-zorro-formly](https://zzhimin.github.io/ngx-ng-zorro-formly/). Puedes copiar directamente las configuraciones de los campos relevantes a tu proyecto y luego modificarlas según tus necesidades.  

[Prueba en línea](https://stackblitz.com/edit/stackblitz-starters-cam7js?file=src%2Fmain.ts) con Angular 17  

## Método de uso  
   Soporta versiones de Angular 13 y posteriores  

1. Instalar ng-zorro  
    ```
    ng add ng-zorro-antd
    ```
2. Instalar ngx-formly  
    ```
    yarn add @ngx-formly/core
    ```
3. Instalar ng-zorro-formly e instalar la biblioteca de texto enriquecido quill  
   ```
    yarn add ng-zorro-formly quill
   ```

4. Configuración inicial  
   Importa `FormlyNgZorroModule` en el archivo `app.module.ts` de tu proyecto.  
    ```
    import { FormlyModule } from '@ngx-formly/core';
    import { NzFormModule } from 'ng-zorro-antd/form';
    import { FormlyNgZorroModule } from 'ng-zorro-formly';

    function requiredValidationMessage(err: any, field: any) {
      return `${field.templateOptions.label} es un campo obligatorio`;
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

  5. Importar componentes  
    En el lugar donde necesites construir un formulario, importa los componentes de plantilla. Si no se pasan `form`, `model` o `options`, se utilizarán valores por defecto; si necesitas usarlos, puedes obtener las instancias a través de los componentes.  

    ```
    <formly-form-template 
      #formlyFormTemplate
      [configs]="configs"
    ></formly-form-template>
    ```

  6. Pasar las configuraciones  
    Usa las plantillas de configuración de componentes proporcionadas por [ngx-ng-zorro-formly](https://zzhimin.github.io/ngx-ng-zorro-formly/) para configurar `configs`.  

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
        ...configuraciones de controles
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
