import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { isMobile } from '../utils';
// import { AppDatePickerComponent } from './component/app-date-picker/app-date-picker.component';
import { FieldType } from '@ngx-formly/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { endOfMonth,startOfMonth,endOfToday, startOfToday,endOfWeek,startOfWeek,format,addMonths} from 'date-fns';
@Component({
  selector: 'formly-field-date',
  template: `
    <ng-container [ngSwitch]="to.type">
      <nz-date-picker
        *ngSwitchCase="'date'"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [nzAllowClear]="to.date?.allowClear"
        [nzBackdrop]="to.date?.backdrop"
        [nzDefaultPickerValue]="to.date?.defaultPickerValue"
        [nzDisabledTime]="to.range?.disabledDate"
        [nzDropdownClassName]="to.date?.dropdownClassName"
        [nzFormat]="to.date?.format"
        [nzInputReadOnly]="to.date?.inputReadOnly"
        [nzMode]="to.date?.mode"
        [nzPlaceHolder]="to.placeholder"
        [nzPopupStyle]="to.date?.popupStyle"
        [nzRenderExtraFooter]="to.date?.renderExtraFooter"
        [nzSuffixIcon]="to.date?.suffixIcon"
        [nzBorderless]="to.date?.borderless"
        [nzInline]="to.date?.inline"
        [nzDateRender]="to.date?.dateRender"
        [nzDisabledTime]="to.date?.disabledTime"
        [nzShowTime]="to.date?.showTime"
        [nzShowToday]="to.date?.showToday"
        [nzShowNow]="to.date?.showNow"
        (nzOnOpenChange)="
          to.date?.onOpenChange && to.date?.onOpenChange($event, field)
        "
        (nzOnOk)="to.date?.onOk && to.date?.onOk($event)"
        [ngStyle]="width"
        [nzInputReadOnly]="isMobileTerminal"
        #RangePicker
        ></nz-date-picker>

      <nz-range-picker
        *ngSwitchCase="'range'"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [nzAllowClear]="to.range?.allowClear"
        [nzBackdrop]="to.range?.backdrop"
        [nzDefaultPickerValue]="to.range?.defaultPickerValue"
        [nzDisabledDate]="to.range?.disabledDate"
        [nzDropdownClassName]="to.range?.dropdownClassName"
        [nzFormat]="to.range?.format"
        [nzInputReadOnly]="to.range?.inputReadOnly"
        [nzMode]="to.range?.mode"
        [nzPlaceHolder]="to.placeholder"
        [nzPopupStyle]="to.range?.popupStyle"
        [nzRenderExtraFooter]="to.range?.renderExtraFooter"
        [nzSuffixIcon]="to.range?.suffixIcon"
        [nzBorderless]="to.range?.borderless"
        [nzInline]="to.range?.inline"
        [nzDateRender]="to.range?.dateRender"
        [nzDisabledTime]="to.range?.disabledTime"
        [nzShowTime]="to.range?.showTime"
        [nzShowToday]="to.range?.showToday"
        [nzShowNow]="to.range?.showNow"
        [nzRanges]="to.range?.ranges"
        [nzSeparator]="to.range?.separator"
        [ngStyle]="width"
        (nzOnOpenChange)="
          to.range?.onOpenChange && to.range?.onOpenChange($event, field)
        "
        (nzOnOk)="to.range?.onOk && to.range?.onOk($event)"
        (nzOnCalendarChange)="
          to.range?.onCalendarChange && to.range?.onCalendarChange($event)
        "
        [nzInputReadOnly]="isMobileTerminal"
        #RangePicker
      >

      </nz-range-picker>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldDate extends FieldType {
  @ViewChild("RangePicker") RangePicker: any;
  isMobileTerminal: boolean = isMobile();
  drawerRef: NzDrawerRef<any>;
  constructor(private drawerService: NzDrawerService) {
    super();
  }
  get width() {
    switch (this.to.type) {
      case 'date':
        return { width: this.to.date.width };
      case 'range':
        return { width: this.to.date.width };
      default:
        return ''
    }
  }
  ngOnInit() {
    if (this.to.type == 'range') {
      if (this.to.range) {
        this.to.range.ranges = { 
         '今日': [startOfToday(), endOfToday()],
         '本周': [startOfWeek(new Date()),endOfWeek(new Date())], 
         '本月': [startOfMonth(new Date()), endOfMonth(new Date())],
         '下个月': [startOfMonth(addMonths(new Date(),1)), endOfMonth(addMonths(new Date(),1))]
        };
      }
    }
  }

  ngAfterViewInit() {
    if (!this.isMobileTerminal || this.to.disabled || this.options.formState.isDetail) return;
    this.RangePicker.nzOpen = false; // 移动端不要打开默认日历选择弹窗
    this.appGainFocus();
  }

  // 手机端添加时间框焦点事件打开弹窗
  appGainFocus() {
    const nativeElement = this.RangePicker?.elementRef.nativeElement;

    let startX, startY;
    let hasMoved = false;
    nativeElement.addEventListener('touchstart', (event) => {
      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      hasMoved = false;
    });

    nativeElement.addEventListener('touchmove', (event) => {
      const touch = event.touches[0];
      const { clientX, clientY } = touch;
      const deltaX = Math.abs(clientX - startX);
      const deltaY = Math.abs(clientY - startY);
      if (deltaX > 10 || deltaY > 10) hasMoved = true;
    });

    nativeElement.addEventListener('touchend',  (event) => {
      event.preventDefault();
      if (!hasMoved)  this.openAppTime();
    });

  }

  // 移动端时间抽屉
  openAppTime() {
    // this.drawerRef = this.drawerService.create({
    //   nzTitle: null,
    //   nzContent: AppDatePickerComponent,
    //   nzFooter: null,
    //   nzPlacement: "bottom",
    //   nzWidth: "100%",
    //   nzHeight: "auto",
    //   nzClosable: false,
    //   nzBodyStyle: {
    //     padding: 0
    //   },
    //   nzContentParams: {
    //     to: this.to,
    //     field: this.field
    //   }
    // });
  }
}
