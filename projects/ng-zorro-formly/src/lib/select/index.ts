import { TemplateRef } from '@angular/core';
import { NzOptionComponent } from 'ng-zorro-antd/select';

export interface SelectFormly {
  /**
   * 	与 SelectControlValueAccessor 相同
   * @default
   * (o1: any, o2: any) => o1===o2
   */
  compareWith?: (o1: any, o2: any) => boolean;

  /**
   * 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效。
   * @default true
   */
  autoClearSearchValue?: boolean;

  /**
   * 支持清除
   * @default false
   */
  allowClear?: boolean;

  /**
   * 	浮层是否应带有背景板
   * @default false
   */
  backdrop?: boolean;

  /**
   * 是否无边框
   * @default false
   */
  borderless?: boolean;

  /**
   * 下拉菜单是否打开，可双向绑定
   * @default false
   */
  open?: boolean;

  /**
   * 下拉菜单的 className 属性
   */
  dropdownClassName?: string;

  /**
   * 下拉菜单和选择器同宽
   * @default true
   */
  dropdownMatchSelectWidth?: boolean;

  /**
   * 下拉菜单的 style 属性
   *
   */
  dropdownStyle?: object;

  /**
   * 自定义选择框的Template内容
   */
  customTemplate?: TemplateRef<{ $implicit: NzOptionComponent }>;

  /**
   * 是否使用服务端搜索，当为 true 时，将不再在前端对 nz-option 进行过滤
   * @default false
   */
  serverSearch?: boolean;

  /**
   * 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValueoption 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。
   *
   */
  filterOption?: (input?: string, option?: NzOptionComponent) => boolean;

  /**
   * 最多选中多少个标签
   * @default Infinity
   */
  maxMultipleCount?: number;

  /**
   * 	设置 nz-select 的模式
   */
  mode?: 'multiple' | 'tags' | 'default';

  /**
   * 当下拉列表为空时显示的内容
   */
  notFoundContent?: string | TemplateRef<void>;

  /**
   * 是否显示下拉小箭头
   * @default
   * 单选为 true，多选为 false
   */
  showArrow?: boolean;

  /**
   * 使单选模式可搜索
   * @default false
   */
  showSearch?: boolean;

  /**
   * 自定义的选择框后缀图标
   */
  suffixIcon?: TemplateRef<any> | string;

  /**
   * 自定义的多选框清除图标
   */
  removeIcon?: TemplateRef<any>;

  /**
   * 自定义的多选框清空图标
   */
  clearIcon?: TemplateRef<any>;

  /**
   * 自定义当前选中的条目图标
   */
  menuItemSelectedIcon?: TemplateRef<any>;

  /**
   * 	在 tags 和 multiple 模式下自动分词的分隔符
   * @default []
   */
  tokenSeparators?: string[];

  /**
   * 加载中状态
   * @default false
   */
  loading?: boolean;

  /**
   * 最多显示多少个 tag
   */
  maxTagCount?: number;

  /**
   * 隐藏 tag 时显示的内容
   */
  maxTagPlaceholder?: TemplateRef<{ $implicit: any[] }>;

  /**
   * 	下拉菜单中每个 Option 的高度
   * @default 32
   */
  optionHeightPx?: number;

  /**
   * 下拉菜单中最多展示的 Option 个数，超出部分滚动
   * @default 8
   */
  optionOverflowSize?: number;

  /**
   * 选中变化时回调
   */
  ngModelChange?: (value: any[]) => void;

  /**
   * 失去焦点时的回调
   */
  blur?: (event: any) => void;

  /**
   * 获取焦点时的回调
   */
  focus?: (event: any) => void;

  /**
   * 下拉菜单打开状态变化回调
   */
  openChange?: (event: boolean) => void;

  /**
   * 下拉列表滚动到底部的回调
   */
  scrollToBottom?: (event: any) => void;

  /**
   * 文本框值变化时回调
   */
  onSearch?: (event: string) => void;

  /**
  *  指定宽度(支持百分比)
  *@example
  width: '200px'
  width: '50%'
 */
  width?: string;
}
