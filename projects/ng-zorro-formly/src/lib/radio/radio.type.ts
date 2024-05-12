import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
@Component({
  selector: 'formly-field-radio',
  template: `
    <nz-radio-group
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzName]="to.radio?.name"
      [nzButtonStyle]="to.radio?.buttonStyle"
      (ngModelChange)="
        to.radio?.ngModelChange && to.radio?.ngModelChange(field)
      "
    >
      <ng-container *ngIf="to.type !== 'button'; else button">
        <label
          nz-radio
          [nzValue]="option.value"
          *ngFor="let option of to.options | formlySelectOptions: field | async"
          [nzDisabled]="option.disabled === true"
          >{{ option.label }}</label
        >
      </ng-container>

      <ng-template #button>
        <label
          nz-radio-button
          [nzValue]="option.value"
          *ngFor="let option of to.options | formlySelectOptions: field | async"
          [nzDisabled]="option.disabled === true"
          >{{ option.label }}</label
        >
      </ng-template>
    </nz-radio-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRadio extends FieldType {
  
}
