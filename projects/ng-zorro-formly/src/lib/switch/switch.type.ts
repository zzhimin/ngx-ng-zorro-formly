import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-switch',
  template: `
    <nz-switch
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzCheckedChildren]="to.switch?.checkedChildren"
      [nzUnCheckedChildren]="to.switch?.unCheckedChildren"
      [nzLoading]="to.switch?.loading"
      [nzControl]="to.switch?.control"
      (ngModelChange)="
        to.switch?.ngModelChange && to.switch.ngModelChange($event)
      "
    ></nz-switch>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSwitch extends FieldType {}
