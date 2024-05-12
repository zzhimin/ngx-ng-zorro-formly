import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-card',
  template: `
    <nz-card
      [nzActions]="to.card?.actions || []"
      [nzBodyStyle]="to.card?.bodyStyle"
      [nzBorderless]="to.card?.borderless === true"
      [nzCover]="to.card?.cover"
      [nzExtra]="to.card?.extra"
      [nzHoverable]="!!to.card?.hoverable"
      [nzTitle]="to.card?.title"
      [nzType]="to.card?.type"
      [nzLoading]="to.card?.loading"
    >
      <ng-container #fieldComponent></ng-container>
    </nz-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldCard extends FieldWrapper {}
