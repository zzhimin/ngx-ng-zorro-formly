import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';


@Component({
  selector: 'formly-form-template',
  template: `
    <form [formGroup]="form" nzLayout="horizontal" nz-form (ngSubmit)="submit()">

      <formly-form
        [form]="form"
        [model]="model"
        [fields]="configs"
        [options]="options"
        nz-row
        [nzGutter]="24"
      ></formly-form>
      <button #submitBtn type="submit" style="display: none;">Submit</button>
    </form>
  `,
  styleUrls: []
})
export class FormlyFormTemplateComponent {
  @ViewChild("submitBtn", { static: false  }) submitBtn: ElementRef;
  @Input() form = new UntypedFormGroup({});
  @Input() model: any = { };
  @Input() configs: FormlyFieldConfig[] = [];
  @Input() options: FormlyFormOptions = {};

  submit() {return this.model}

  public validForm(): boolean {
    this.submitBtn.nativeElement.click();

    return this.form.valid;
  }
}
