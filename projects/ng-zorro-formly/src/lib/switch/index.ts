import { TemplateRef } from '@angular/core';

export interface SwitchFormly {
  /**
   * 选中时的内容
   */
  checkedChildren?: string | TemplateRef<void>;

  /**
   * 非选中时的内容
   */
  unCheckedChildren?: string | TemplateRef<void>;

  /**
   * 加载中的开关
   * @default false
   */
  loading?: boolean;

  /**
   * 是否完全由用户控制状态
   * @default false
   */
  control?: boolean;

  /**
   * 当前是否选中的回调
   */
  ngModelChange?: (value: boolean) => void;
}
