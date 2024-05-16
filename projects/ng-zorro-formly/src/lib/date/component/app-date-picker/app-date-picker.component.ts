import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent } from "rxjs";
import { map, switchMap, takeUntil } from "rxjs/operators";
import * as moment_ from 'moment';
import { deepClone, generateArr } from '../../../utils';
import { isArray, isNumber } from 'lodash';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
const moment = moment_;
type NumberArray = number[];
type StringArray = string[];
@Component({
  selector: 'tb-app-date-picker',
  templateUrl: './app-date-picker.component.html',
  styleUrls: ['./app-date-picker.component.less']
})
export class AppDatePickerComponent implements OnInit, AfterViewInit {
  @ViewChildren("TimeSelect",) TimeSelect: QueryList<any>;
  @Input() field;
  @Input() to;

  title: string = '请选择日期';

  defaultValue: StringArray = [];

  // 选中日期
  currentCheckDate: NumberArray = this.timeSwitchTimeArr("");

  // 所选值存储
  timeRanges: NumberArray[];

  // 渲染可选日期
  renders: NumberArray[] = [
    generateArr(201, Number(moment().format("YYYY")) - 100),
    generateArr(12),
    generateArr(new Date(this.currentCheckDate[0], this.currentCheckDate[1], 0).getDate()),
    generateArr(24, 0),
    generateArr(60, 0),
    generateArr(60, 0)
  ]

  // 日期单位
  dateUnit: StringArray = ["年", "月", "日"];

  // 居中值
  centerDate: NumberArray = [];

  // 当前日期模式
  mode = 0;

  // 日期类型
  formatCount: StringArray;

  // 是否是范围选
  isRange = true;

  constructor(
    private cdr: ChangeDetectorRef,
    private drawerRef: NzDrawerRef
  ) { }

  ngOnInit(): void {
    /**
     * 理论上数据联调只需要在 Init 中做就可以了
     */

    // 1- 解析 smd 设置的 format 类型
    this.formatCount = this.to.range?.format.split(/[- :]/);
    // let format = ["yyyy", "mm", "dd", "hh", "mm", "ss"]; 如果需要具体解析，在这里做
    /** 代码调试 **/
    // this.formatCount.length = Math.floor(Math.random() * 6) + 1;

    const formatLength = this.formatCount.length;
    this.renders = this.renders.slice(0, formatLength);

    // 2- 默认值处理
    const value = this.field.formControl.value
    if (value || value === 0) {
      if (isArray(value)) {
        this.timeRanges = value.map(this.timeSwitchTimeArr);
      } else {
        this.timeRanges = [this.timeSwitchTimeArr(value)];
      }
    } else {
      this.timeRanges = [this.currentCheckDate, deepClone(this.currentCheckDate)];
      this.title += '范围';

    }
    this.defaultValue = value;
    // 3-如果是单选类型 ( 仅处理到时分秒的 )
    if (this.to.type === "date") {
      this.isRange = false;
      this.timeRanges.length = 1;
    }

    this.timeRanges.forEach((dates, i, arr) => {
      arr[i] = dates.map((time, key) => key + 1 > this.formatCount.length ? 0 : time);
    });
    this.currentCheckDate = this.timeRanges[0];
    this.cdr.detectChanges();

  }

  ngAfterViewInit(): void {
    this.computedCenter();
    this.scrollLogic();
  }

  // 滚动监听
  scrollLogic() {
    this.TimeSelect.forEach((ele, key, arr) => {

      const element = ele.nativeElement;
      const distance = this.currentCheckDate[key] - this.centerDate[key];
      element.style.transform = `translateY( ${distance * -60}px )`;

      let yValue = 0; //
      fromEvent(element, "touchstart", { capture: false })
        .pipe(
          map((event: any) => {
            const target = event.currentTarget;
            const computedStyle = getComputedStyle(target);
            const transformValue =
              computedStyle.getPropertyValue("transform");
            if (transformValue !== "none") {
              const matrixValues = transformValue
                .match(/matrix.*\((.*)\)/)[1]
                .split(", ");
              yValue = parseFloat(matrixValues[5]);
            } else {
              yValue = 0;
            }
            return {
              docuy: event.touches[0].clientY,
            };
          }),
          switchMap(({ docuy }) =>
            fromEvent(document, "touchmove").pipe(
              map((event: any) => {
                event.preventDefault();
                return {
                  y: (event.touches[0].clientY - docuy) * 1.2,
                };
              }),
              takeUntil(
                fromEvent(document, "touchend").pipe(
                  map((event: any) => {
                    event.preventDefault();
                    const stepOf =
                      (event.changedTouches[0].clientY - docuy) * 1.2;

                    // muchMore
                    const more = stepOf % 60; // 多了的
                    const spendSlide = stepOf - more; // 可预算滑动距离
                    let slideCount = -Math.trunc(spendSlide / 60); // 记录最终(实际)滑动个数


                    // slideCount 是正数代表向上滑动, 反之向下滑动

                    // 允许滑动边距
                    if (more > 30) {
                      slideCount = slideCount - 1;
                    } else if (more < -30) {
                      slideCount = slideCount + 1;
                    }


                    // 当前顶部剩余可滑动块数
                    const topResidueCount = -Math.abs(this.currentCheckDate[key] - this.renders[key][0]);
                    // 当前底部剩余可滑动块数
                    const bottomResidueCount = Math.abs(this.renders[key][this.renders[key].length - 1] - this.currentCheckDate[key]);


                    /**
                     *  如果滑动块数大于顶部剩余块数, 则最终等于顶部剩余块数, 底部原理相同
                     * 滑到上面的是 负值, 滑到下面的是正值
                     */
                    if (slideCount !== 0) {
                      if (slideCount <= topResidueCount) {
                        slideCount = topResidueCount;
                      }
                      if (slideCount >= bottomResidueCount) {
                        slideCount = bottomResidueCount
                      }

                      const front = this.currentCheckDate[2];

                      // 记录当前滑动到的值
                      this.currentCheckDate[key] += slideCount;

                      // 处理 不同月份年份时 的 不同天数
                      if ((key === 0 || key === 1) && this.formatCount.length >= 3) {
                        const currentDay = this.computedFebDay();
                        // 重新计算当前的中间值
                        this.computedCenter();

                        let distance;
                        // 所选年月对应天数或等于当前天数则不动, 否则跳到 1 号
                        if (currentDay >= front) {
                          distance = this.currentCheckDate[2] - this.centerDate[2];
                        } else {
                          distance = -(this.centerDate[2] - 1);
                          this.currentCheckDate[2] = 1;
                        }

                        const target = arr[2]?.nativeElement.style;
                        // 设置天数变化后 translateY 的默认距离，动画过于生硬
                        target.transition = "unset";
                        target.transform = `translateY( ${distance * -60}px )`;
                        setTimeout(() => {
                          target.transition = "transform 0.05s ease-in-out";
                        }, 100)
                        this.cdr.detectChanges();

                      }

                    };

                    console.log("%c 记录当前滚动日期 >> 🍌", "color:#ea7e5c", this.currentCheckDate);

                    // 实际滑动距离
                    let setYvalue = yValue - slideCount * 60;
                    element.style.transform = `translateY( ${setYvalue}px )`;

                  })
                )
              )
            )
          )
        )
        .subscribe(({ y }) => {
          element.style.transform = `translateY( ${yValue + y}px )`;
        });
    })
  }

  // 计算中间数
  computedCenter() {
    this.centerDate = this.renders.map((item, key) => {
      // 第 0 个取当前年
      if (key === 0) {
        return moment().year();
      } else if (key >= 3) {
        // 时分秒取中间数
        return this.center(item[item.length - 1]) - 1;
      } else {
        return this.center(item[item.length - 1]);
      }
    });
  }

  center(number) {
    if (number % 2 === 0) {
      return number / 2;
    } else {
      return Math.ceil(number / 2)
    }
  }

  generateArr(length, value = 1): number[] {
    return Array.from({ length }, (_, k) => k + value)
  }

  // 根据年月获取对应天数
  computedFebDay() {
    if (!this.renders[2]) return undefined;
    this.renders[2].splice(0, this.renders[2].length);
    const currentDay = new Date(this.currentCheckDate[0], this.currentCheckDate[1], 0).getDate();
    this.renders[2].push(...generateArr(currentDay));
    this.cdr.detectChanges();
    return currentDay;
  }

  // 切换模式
  changeMode(mode) {
    this.mode = mode;
    this.currentCheckDate = this.timeRanges[mode];

    // 年月对应天数 和 重新计算当前的中间值   ** 顺序不能变 **
    this.computedFebDay();
    this.computedCenter();

    this.TimeSelect.forEach((ele, key) => {
      // 对变化后的日期设置对应位置
      const element = ele.nativeElement;
      const distance = this.currentCheckDate[key] - this.centerDate[key];
      element.style.transform = `translateY( ${distance * -60}px )`;
    });
  }

  // 位数转换
  dac(num) {
    return `${num}`.padStart(2, '0');
  }

  // 时间转为需要的数组格式
  timeSwitchTimeArr(date) {
    const regex = /[- :]/;
    if (date || date === 0) {
      if (isNumber(date) || date instanceof Date) {
        return moment(date).format("YYYY-MM-DD HH:mm:ss").split(regex).map(Number);
      }
      if (regex.test(date)) {
        return date.split(regex).map(Number);
      }
    }
    return moment().format("YYYY-MM-DD HH:mm:ss").split(regex).map(Number);
  }

  // 年月日计算
  computedDate(dateArr) {
    const formatLength = this.formatCount.length;
    const year = dateArr[0];
    const month = dateArr[1];
    const day = dateArr[2];
    if (formatLength >= 3) {
      return `${year}年${month}月${day}日`;
    } else if (formatLength >= 2) {
      return `${year}年${month}月`;
    } else if (formatLength >= 1) {
      return `${year}年`;
    }
    return ''
  }

  // 时分秒计算
  computedTime(timeArr) {
    const formatLength = this.formatCount.length;
    const hh = this.dac(timeArr[3]);
    const mm = this.dac(timeArr[4]);
    const ss = this.dac(timeArr[5]);
    if (formatLength >= 6) {
      return `${hh}: ${mm}: ${ss}`;
    } else if (formatLength >= 5) {
      return `${hh}: ${mm}`;
    } else if (formatLength >= 4) {
      return `${hh} 时`;
    }
    return ''
  }

  closeDrawer(is) {
    if (!is) {
      this.field.formControl.setValue(this.defaultValue);
    } else {
      // 设值
      let start = moment(this.timeRanges[0], 'YYYY-MM-DD HH:mm:ss').valueOf();
      let end = moment(this.timeRanges[1], 'YYYY-MM-DD HH:mm:ss').valueOf();

      if (this.isRange) {
        if (start > end) {
          [start, end] = [end, start];
        }
        this.field.formControl.setValue([start, end]);
      } else {
        this.field.formControl.setValue(start);
      }
      this.to.date?.onOpenChange && this.to.date?.onOpenChange(false, this.field);
    }

    this.drawerRef.close();
  }

}
