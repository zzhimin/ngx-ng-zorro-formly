import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
@Component({
  selector: 'formly-field-customButton',
  template: `
    <ng-container *ngIf="to?.shape == 'circle'; else defaultButton;">
      <button
        nz-button 
        [nzType]="to.type" 
        [disabled]="to.disabled" 
        [nzShape]="to?.shape"
        [nzSize]="to?.size"
        [nzGhost]="to?.ghost"
        [nzDanger]="to?.danger"
        [nzBlock]="to?.block"
        (click)="to.button && to.button?.click($event)"
      >
        <i nz-icon [nzType]="to.icon"></i>
      </button>

      </ng-container>
      <ng-template #defaultButton>
        <button
          nz-button 
          [nzType]="to.type" 
          [disabled]="to.disabled" 
          [nzShape]="to?.shape"
          [nzSize]="to?.size"
          [nzGhost]="to?.ghost"
          [nzDanger]="to?.danger"
          [nzBlock]="to?.block"
          (click)="to.button && to.button?.click($event)"
        >
          <i *ngIf="to?.icon" nz-icon [nzType]="to.icon"></i>
          {{ to.title }}
      </button>
      </ng-template>
  `,
})
export class FormlyFieldButton extends FieldType {
  ngOnInit(): void {
  }
}
