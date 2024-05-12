import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-rate',
  template: `
    <nz-rate
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAllowClear]="to.rate?.allowClear"
      [nzAllowHalf]="to.rate?.allowHalf"
      [nzCharacter]="to.rate?.character"
      [nzCount]="to.rate?.count"
      [nzTooltips]="to.rate?.tooltips"
      (ngModelChange)="to.rate?.ngModelChange && to.rate?.ngModelChange($event)"
      (nzOnBlur)="to.rate?.onBlur && to.rate?.onBlur($event)"
      (nzOnFocus)="to.rate?.onFocus && to.rate?.onFocus($event)"
      (nzOnHoverChange)="
        to.rate?.onHoverChange && to.rate?.onHoverChange($event)
      "
      (nzOnKeyDown)="to.rate?.onKyeDown && to.rate?.onKyeDown($event)"
    ></nz-rate>
    <span *ngIf="formControl.value" class="ant-rate-text">{{ formControl.value ?? '' }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRate extends FieldType {}
