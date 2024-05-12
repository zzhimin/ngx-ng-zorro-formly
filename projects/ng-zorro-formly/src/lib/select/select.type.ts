import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
  AfterViewInit,
  TemplateRef,
  ChangeDetectorRef,
} from '@angular/core';
import { isMobile, isObject } from '../utils';
import { FieldType } from '@ngx-formly/core';

import { NzSelectComponent } from 'ng-zorro-antd/select';

@Component({
  selector: 'formly-field-select',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSelect extends FieldType implements OnInit {
  get width() {
    return { width: this.to.select.width };
  }
  @ViewChild('select', { static: true }) select: NzSelectComponent;

  isObject = isObject;

  isMobileTerminal: boolean = isMobile();
  ngOnInit(): void {
    if (this.to.select?.filterOption instanceof Function) {
      this.select.nzFilterOption = this.to.select?.filterOption;
    }
  }
}
