import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';


@Component({
  selector: 'formly-form-template',
  template: `
    <form [formGroup]="form" nzLayout="horizontal" nz-form>

      <formly-form
        [form]="form"
        [model]="model"
        [fields]="configs"
        [options]="options"
        nz-row
        [nzGutter]="24"
      ></formly-form>

    </form>
  `,
  styleUrls: []
})
export class FormlyFormTemplateComponent {
  @Input() form = new FormGroup({});
  @Input() model: any = { };
  @Input() configs: FormlyFieldConfig[] = [];
  @Input() options: FormlyFormOptions = {};
}
