import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-group',
  template: `
    <div class="group-wrapper">
      <span class="group-before"></span>
      <span>{{ to.label }}</span>
    </div>
    <ng-container #fieldComponent></ng-container>
  `,
  styles: [`
    .group-wrapper {
      padding: 5px 25px;
      color: rgba(26, 121, 255, 1);
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .group-before {
      width: 3px;
      height: 16px;
      background-color: rgba(26, 121, 255, 1);
      margin-right: 10px;
    }
  `]
})
export class GroupWrapperComponent extends FieldWrapper {
}