import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-steps',
  template: `
    <nz-collapse 
      [nzAccordion]="field.templateOptions.collapse.accordion"
      [nzBordered]="field.templateOptions.collapse.bordered"
      [nzExpandIconPosition]="field.templateOptions.collapse.expandIconPosition"
      [nzGhost]="field.templateOptions.collapse.ghost"
    >
      <nz-collapse-panel
        *ngFor="let panel of field.fieldGroup"
        [nzHeader]="panel.templateOptions.label"
        [nzExpandedIcon]="panel.templateOptions.expandedIcon"
        [nzExtra]="panel.templateOptions.extra"
        [nzShowArrow]="panel.templateOptions.showArrow || true"
        (nzActiveChange)="panel.templateOptions?.activeChange($event)"
      >
        <formly-field [field]="panel"></formly-field>
      </nz-collapse-panel>
    </nz-collapse>
  `,
  styles: [`
    button {
      margin-right: 8px;
    }
  `]
})
export class FormlyFieldCollapse extends FieldType {
}
