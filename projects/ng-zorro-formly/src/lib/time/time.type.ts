import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzTimePickerComponent } from 'ng-zorro-antd/time-picker';

@Component({
  selector: 'formly-field-time',
  template: `
    <nz-time-picker
      #time
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAddOn]="to.time?.addOn"
      [nzAllowEmpty]="to.time?.allowEmpty"
      [nzBackdrop]="to.time?.backdrop"
      [nzClearText]="to.time?.clearText"
      [nzNowText]="to.time?.nowText"
      [nzOkText]="to.time?.okText"
      [nzDefaultOpenValue]="to.time?.defaultOpenValue"
      [nzDisabledHours]="to.time?.disabledHours"
      [nzDisabledMinutes]="to.time?.disabledMinutes"
      [nzDisabledSeconds]="to.time?.disabledSeconds"
      [nzFormat]="to.time?.format"
      [nzHideDisabledOptions]="to.time?.hideDisabledOptions"
      [nzHourStep]="to.time?.hourStep"
      [nzMinuteStep]="to.time?.minuteStep"
      [nzSecondStep]="to.time?.secondStep"
      ([nzOpen])="(to.time?.open)"
      [nzPopupClassName]="to.time?.popupClassName"
      [nzUse12Hours]="to.time?.use12Hours"
      (ngModelChange)="to.time?.ngModelChange && to.time?.ngModelChange($event)"
      (nzOpenChange)="to.time?.openChange && to.time?.openChange($event)"
      [nzPlaceHolder]="to.placeholder"
      [ngStyle]="width"
      [nzAllowEmpty]="to.time.allowEmpty"
    ></nz-time-picker>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTime extends FieldType implements OnInit {
  get width() {
    return { width: this.to.time.width };
  }

  @ViewChild('time', { static: true }) time: NzTimePickerComponent;
  ngOnInit(): void {
    if (
      this.to.time?.suffixIcon !== null &&
      this.to.time?.suffixIcon !== undefined
    ) {
      this.time.nzSuffixIcon = this.to.time.suffixIcon;
    }
  }
}
