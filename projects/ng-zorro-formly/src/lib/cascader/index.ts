import { TemplateRef } from '@angular/core';
import { NzCascaderOption, NzShowSearchOptions } from 'ng-zorro-antd/cascader';

export interface CascaderFormly {
  /**
   * 是否支持清除
   */
  allowClear?: boolean;

  /**
   * 是否自动聚焦，当存在输入框时
   */
  autoFocus?: boolean;

  /**
   * 浮层是否应带有背景板
   */
  backdrop?: boolean;

  /**
   * 点击父级菜单选项时，可通过该函数判断是否允许值的变化
   */
  changeOn?: (option: any, index: number) => boolean;

  /**
   * 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示
   */
  changeOnSelect?: boolean;

  /**
   * 自定义浮层列类名
   */
  columnClassName?: string;

  /**
   * 自定义次级菜单展开图标
   */
  expandIcon?: string | TemplateRef<void>;

  /**
   * 次级菜单的展开方式，可选 'click' 和 'hover'
   */
  expandTrigger?: 'click' | 'hover';

  /**
   * 选项的显示值的属性名
   */
  labelProperty?: string;

  /**
   * 选择后展示的渲染模板
   */
  labelRender?: TemplateRef<any>;

  /**
   * 用于动态加载选项。如果提供了ngModel初始值，且未提供nzOptions值，则会立即触发动态加载。
   */
  loadData?: (option: any, index?: number) => PromiseLike<any>;

  /**
   * 自定义浮层类名
   */
  menuClassName?: string;

  /**
   * 自定义浮层样式
   */
  menuStyle?: object;

  /**
   * 当下拉列表为空时显示的内容
   */
  notFoundContent?: string | TemplateRef<void>;

  /**
   * 选项的渲染模板
   */
  optionRender?: TemplateRef<{ $implicit: NzCascaderOption; index: number }>;

  /**
   * 是否显示箭头
   */
  showArrow?: boolean;

  /**
   * 显示输入框
   */
  showInput?: boolean;

  /**
   * 是否支持搜索，默认情况下对 label 进行全匹配搜索，不能和 [nzLoadData] 同时使用
   */
  showSearch?: boolean | NzShowSearchOptions;

  /**
   * 自定义的选择框后缀图标
   */
  suffixIcon?: string | TemplateRef<void>;

  /**
   * 选项的实际值的属性名
   */
  valueProperty?: string;

  /**
   * 值发生变化时触发
   */
  modelChange?: (value: any[]) => void;

  /**
   * 清除值时触发
   */
  clear?: () => void;
  /**
   * 菜单浮层的显示/隐藏
   */
  visibleChange?: (visible: boolean) => void;

  /**
   * 值发生变化时触发
   */
  selectionChange?: (value: NzCascaderOption[]) => void;
}
