import { DatePipe } from '@angular/common';
import { TemplateRef } from '@angular/core';

export interface TimeFormly {
  /**
   * 组件内部 input 的 id 值
   */
  id?: string;

  /**
   * 选择框底部显示自定义的内容
   */
  addOn?: TemplateRef<void>;

  /**
   * 是否展示清除按钮
   * @default true
   */
  allowEmpty?: boolean;

  /**
   * 浮层是否应带有背景板
   * @default false
   */
  backdrop?: boolean;

  /**
   * 清除按钮的提示文案
   * @default clear
   */
  clearText?: string;

  /**
   * 此刻按钮文本
   * @default 此刻
   */
  nowText?: string;

  /**
   * 确认按钮文本
   * @default 确定
   */
  okText?: string;

  /**
   * 当 [ngModel] 不存在时，可以设置面板打开时默认选中的值
   * @default new Date()
   */
  defaultOpenValue?: Date;

  /**
   * 	禁止选择部分小时选项
   */
  disabledHours?: () => number[];

  /**
   * 禁止选择部分分钟选项
   */
  disabledMinutes?: (hour: number) => number[];

  /**
   * 禁止选择部分秒选项
   */
  disabledSeconds?: (hour: number, minute: number) => number[];

  /**
   * 展示的时间格式
   * @default "HH:mm:ss"
   */
  format?: DatePipe;

  /**
   * 隐藏禁止选择的选项
   * @default false
   */
  hideDisabledOptions?: boolean;

  /**
   * 小时选项间隔
   * @default 1
   */
  hourStep?: number;

  /**
   * 分钟选项间隔
   * @default 1
   */
  minuteStep?: number;

  /**
   * 秒选项间隔
   * @default 1
   */
  secondStep?: number;

  /**
   * 面板是否打开，可双向绑定
   * @default false
   */
  open?: boolean;

  /**
   * 弹出层类名
   * @default '''
   */
  popupClassName?: string;

  /**
   * 使用12小时制，为true时format默认为h:mm:ss a
   * @default false
   */
  use12Hours?: boolean;

  /**
   * 自定义的后缀图标
   *
   */
  suffixIcon?: string | TemplateRef<void>;

  /**
   * 时间发生变化的回调
   */
  ngModelChange?: (value: Date) => void;

  /**
   * 面板打开/关闭时的回调
   */
  nzOpenChange?: (value: boolean) => void;
}
