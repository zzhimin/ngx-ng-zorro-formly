import { TemplateRef } from '@angular/core';

export interface RateFormly {
  /**
   * 是否允许再次点击后清除
   */
  allowClear?: boolean;

  /**
   * 是否允许半选
   */
  allowHalf?: boolean;

  /**
   * 自定义字符
   * @default
   * <i nz-icon nzType="star"></i>
   */
  character?: TemplateRef<void>;

  /**
   * star 总数
   * @default
   * 5
   */
  count?: number;

  /**
   * 自定义每项的提示信息
   * @default []
   */
  tooltips?: string[];

  /**
   * 选中变化时回调
   */
  ngModelChange?: (value: number) => void;

  /**
   * 失去焦点时的回调
   */
  onBlur?: (event: FocusEvent) => void;

  /**
   * 获取焦点时的回调
   */
  onFocus?: (event: FocusEvent) => void;

  /**
   * 鼠标经过时数值变化的回调
   */
  onHoverChange?: (value: number) => void;

  /**
   * 按键回调
   */
  onKeyDown?: (evet: KeyboardEvent) => void;
}
