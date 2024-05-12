import { TemplateRef } from '@angular/core';
import {
  NzTabComponent,
  NzTabsCanDeactivateFn,
  TabTemplateContext,
} from 'ng-zorro-antd/tabs';

export interface TabsFormly {
  /**
   * 当前激活 tab 面板的 序列号，可双向绑定
   */
  selectedIndex?: number;

  /**
   * 是否使用动画切换 Tabs，在 nzTabPosition=top\bottom 时有效
   * @default true
   */
  animated?: boolean | { inkBar: boolean; tabPane: boolean };

  /**
   * 大小，提供 largedefault 和 small 三种大小
   * @default default
   */
  size?: 'large' | 'small' | 'default';

  /**
   * tab bar 上额外的元素
   */
  tabBarExtraContent?: TemplateRef<void>;

  /**
   * tab bar 的样式对象
   */
  tabBarStyle?: object;

  /**
   * 页签位置
   * @default  top
   */
  tabPosition?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * 页签的基本样式
   * @default line
   */
  type?: 'line' | 'card' | 'editable-card';

  /**
   * tabs 之间的间隙
   */
  tabBarGutter?: number;

  /**
   * 是否隐藏所有tab内容
   * @default false
   */
  hideAll?: boolean;

  /**
   * 与 Angular 路由联动
   * @default false
   */
  linkRouter?: boolean;

  /**
   * 以严格匹配模式确定联动的路由
   * @default true
   */
  linkExact?: boolean;

  /**
   * 决定一个 tab 是否可以被切换
   */
  canDeactivate?: NzTabsCanDeactivateFn;

  /**
   * 标签居中展示
   * @default false
   */
  centered?: boolean;

  /**
   * 当前激活 tab 面板的 序列号变更回调函数
   */
  selectedIndexChange?: (index: number) => void;

  /**
   * 当前激活 tab 面板变更回调函数
   */
  selectChange?: (index: number, tab: NzTabComponent) => void;
}

export interface TabFormly {
  /**
   * 选项卡头显示文字
   */
  title?: string | TemplateRef<TabTemplateContext>;

  /**
   * 被隐藏时是否渲染 DOM 结构
   * @default false
   */
  forceRender?: boolean;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 单击 title 的回调函数
   */
  click?: () => void;

  /**
   * 右键 title 的回调函数
   */
  contextmenu?: (event: MouseEvent) => void;

  /**
   * tab 被选中的回调函数
   */
  select?: () => void;

  /**
   * tab 被取消选中的回调函数
   */
  deselect?: () => void;
}
