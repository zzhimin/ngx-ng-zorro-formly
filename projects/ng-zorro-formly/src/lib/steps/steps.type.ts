import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-steps',
  template: `
    <mat-horizontal-stepper>
      <mat-step
        *ngFor="let step of field.fieldGroup; let index = index; let last = last;">
        <ng-template matStepLabel>{{ step.templateOptions.label }}</ng-template>
        <formly-field [field]="step"></formly-field>

        <div style="display: flex; justify-content: flex-end;">
          <button matStepperPrevious *ngIf="index !== 0"
            nz-button nzType="default">
            上一步
          </button>

          <button matStepperNext *ngIf="!last"
            nz-button nzType="default"
            [disabled]="!isValid(step)">
            下一步
          </button>


          <button *ngIf="last" nz-button nzType="primary"
            [disabled]="!form.valid"
            type="submit">
            完成
          </button>
        </div>
      </mat-step>
    </mat-horizontal-stepper>
  `,
  styles: [`
    button {
      margin-right: 8px;
    }
  `]
})
export class FormlyFieldSteps extends FieldType {
  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup
      ? field.fieldGroup.every((f) => this.isValid(f))
      : true;
  }
}
