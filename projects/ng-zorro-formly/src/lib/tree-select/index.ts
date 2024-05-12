import { EventEmitter, TemplateRef } from '@angular/core';
import {
  NzFormatEmitEvent,
  NzTreeNode,
  NzTreeNodeOptions,
} from 'ng-zorro-antd/tree';
import { Observable } from 'rxjs';

export interface TreeSelectFormly {
  /**
   * 显示清除按钮
   * @default false
   */
  allowClear?: boolean;

  /**
   * 是否展示 TreeNode title 前的图标，没有默认样式
   * @default false
   */
  showIcon?: boolean;

  /**
   * 显示搜索框
   * @default false
   */
  showSearch?: boolean;

  /**
   * 当下拉列表为空时显示的内容
   */
  notFoundContent?: string;

  /**
   * 下拉菜单和选择器同宽
   * @default true
   */
  dropdownMatchSelectWidth?: boolean;

  /**
   * 下拉菜单的样式
   */
  dropdownStyle?: { [key: string]: string };

  /**
   * 下拉菜单的 className 属性
   */
  dropdownClassName?: string;

  /**
   * 支持多选（当设置 nzCheckable 时自动变为true）
   * @default false
   */
  multiple?: boolean;

  /**
   * 搜索隐藏未匹配的节点
   * @default false
   */
  hideUnMatched?: boolean;

  /**
   * 节点前添加 Checkbox 复选框
   * @default false
   */
  checkable?: boolean;

  /**
   * checkable 状态下节点选择完全受控（父子节点选中状态不再关联）
   * @default false
   */
  checkStrictly?: boolean;

  /**
   * 节点前添加展开图标
   * @default true
   */
  showExpand?: boolean;

  /**
   * 	是否展示连接线
   * @default false
   */
  showLine?: boolean;

  /**
   * 是否异步加载(显示加载状态)
   * @default false
   */
  asyncData?: boolean;

  /**
   * treeNodes 数据
   * @default []
   */
  nodes?: NzTreeNodeOptions[] | Observable<NzTreeNodeOptions[]>;

  /**
   * 默认展开所有树节点
   * @default false
   */
  defaultExpandAll?: boolean;

  /**
   * 默认展开指定的树节点
   */
  expandedKeys?: string[];

  /**
   * 	如何在输入框显示所选的节点值的方法
   * @default (node: NzTreeNode) => node.title
   */
  displayWith?: (node: NzTreeNode) => string;

  /**
   * 最多显示多少个 tag
   *
   */
  maxTagCount?: number;

  /**
   * 隐藏 tag 时显示的内容
   */
  maxTagPlaceholder?: TemplateRef<{ $implicit: NzTreeNode[] }>;

  /**
   * 自定义节点
   */
  treeTemplate?: TemplateRef<{ $implicit: NzTreeNode }>;

  /**
   * 虚拟滚动的总高度
   */
  virtualHeight?: string;

  /**
   * 虚拟滚动时每一列的高度，与 cdk itemSize 相同
   * @default 28
   */
  virtualItemSize?: number;

  /**
   * 缓冲区最大像素高度，与 cdk maxBufferPx 相同
   * @default 500
   */
  virtualMaxBufferPx?: number;

  /**
   * 缓冲区最小像素高度，低于该值时将加载新结构，与 cdk minBufferPx 相同
   * @default 28
   */
  virtualMinBufferPx?: number;

  /**
   * 浮层是否应带有背景板
   * @default false
   */
  backdrop?: boolean;

  /**
   * 点击展开树节点图标调用
   */
  expandChange?: (value: NzFormatEmitEvent) => void;
}
