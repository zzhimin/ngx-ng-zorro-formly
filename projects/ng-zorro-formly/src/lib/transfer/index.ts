import { TemplateRef } from '@angular/core';
import {
  NzTransferSearchComponent,
  TransferCanMove,
  TransferChange,
  TransferItem,
  TransferSearchChange,
  TransferSelectChange,
} from 'ng-zorro-antd/transfer';
import { Observable } from 'rxjs';

export interface TransferFormly {
  /**
   * 数据源，其中若数据属性 direction: 'right' 将会被渲染到右边一栏中或使用 nzTargetKeys
   * @default []
   */
  dataSource?: TransferItem[];

  /**
   * 标题集合，顺序从左至右
   * @default ['', '']
   */
  titles?: string[];

  /**
   * 操作文案集合，顺序从下至上
   * @default ['', '']
   */
  operations?: string[];

  /**
   * 两个穿梭框的自定义样式，等同 ngStyle
   */
  listStyle?: object;

  /**
   * 单数单位
   * @default 项目
   */
  itemUnit?: string;

  /**
   * 复数单位
   * @default 项目
   */
  itemsUnit?: string;

  /**
   * 自定义渲染列表，见示例
   * @default [null, null]
   */
  renderList?: Array<TemplateRef<void> | null>;

  /**
   * 每行数据渲染模板，见示例
   */
  render?: TemplateRef<void>;

  /**
   * 底部渲染模板，见示例
   */
  footer?: TemplateRef<void>;

  /**
   * 是否显示搜索框
   * @default false
   */
  showSearch?: boolean;

  /**
   * 接收 inputValueoption 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。
   */
  filterOption?: (inputValue: string, item: TransferItem) => boolean;

  /**
   * 搜索框的默认值
   * @default 请输入搜索内容
   */
  searchPlaceholder?: string;

  /**
   * 当列表为空时显示的内容
   * @default 列表为空
   */
  notFoundContent?: string;

  /**
   * 穿梭时二次校验。注意： 穿梭组件内部始终只保留一份数据，二次校验过程中需取消穿梭项则直接删除该项；具体用法见示例。
   */
  canMove?: (arg: TransferCanMove) => Observable<TransferItem[]>;

  /**
   * 设置被选中的 key 集合
   */
  selectedKeys?: string[];

  /**
   * 显示在右侧框数据的 key 集合
   */
  targetKeys?: string[];

  /**
   * 选项在两栏之间转移时的回调函数
   */
  onChange?: (value: TransferChange) => void;

  /**
   * 搜索框内容时改变时的回调函数
   */
  onSearchChange?: (value: TransferSearchChange) => void;

  /**
   * 选中项发生改变时的回调函数
   */
  onSelectChange?: (value: TransferSelectChange) => void;

  /**
   * 返回结果格式映射
   * @returns
   * 默认返回 TransferItem[] 格式
   */
  resultMap?: (items: TransferItem[]) => any[];
}
