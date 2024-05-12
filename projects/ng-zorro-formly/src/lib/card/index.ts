import { TemplateRef } from '@angular/core';

export interface CardFormly {
  /**
   * 卡片操作组，位置在卡片底部
   */
  actions?: Array<TemplateRef<void>>;

  /**
   * 内容区域自定义样式
   */
  bodyStyle?: { [key: string]: string };

  /**
   * 	是否移除边框
   * @default false
   */
  borderless?: boolean;

  /**
   * 卡片封面
   */
  cover?: TemplateRef<void>;

  /**
   * 卡片右上角的操作区域
   */
  extra?: string | TemplateRef<void>;

  /**
   * 	鼠标移过时可浮起
   * @default false
   */
  hoverable?: boolean;

  /**
   * 当卡片内容还在加载中时，可以用 loading 展示一个占位
   */
  loading?: boolean;

  /**
   * 	卡片标题
   */
  title?: string | TemplateRef<void>;

  /**
   * 卡片类型，可设置为 inner 或 不设置
   */
  type?: 'inner';
}
