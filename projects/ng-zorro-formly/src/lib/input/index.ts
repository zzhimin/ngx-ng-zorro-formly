import { EventEmitter, TemplateRef } from '@angular/core';
import { AutocompleteDataSource } from 'ng-zorro-antd/auto-complete';

export interface InputFormly {
  /**
   * 带标签的 input，设置后置标签，可以与 nzAddOnBefore 配合使用
   */
  addOnAfter?: string | TemplateRef<void>;
  /**
   * 带标签的 input，设置前置标签，可以与 nzAddOnAfter 配合使用
   */
  addOnBefore?: string | TemplateRef<void>;
  /**
   * 带有前缀图标的 input，可以与 nzSuffix 配合使用
   */
  prefix?: string | TemplateRef<void>;
  /**
   * 带有后缀图标的 input，可以与 nzPrefix 配合使用
   */
  suffix?: string | TemplateRef<void>;

  /**
   * 是否显示边框
   */
  borderless?: boolean;

  /**
   * 带标签的 input，设置后置标签，可以与 addOnBeforeIcon 配合使用
   */
  addOnAfterIcon?: string;

  /**
   * 带标签的 input，设置后置标签，可以与 addOnAfterIcon 配合使用
   */
  addOnBeforeIcon?: string;
  /**
   * 带有后缀图标的 input，可以与 prefixIcon 配合使用
   */
  suffixIcon?: string;

  /**
   * 带有后缀图标的 input，可以与 suffixIcon 配合使用
   */
  prefixIcon?: string;
}

export interface InputGroupFormly extends InputFormly {
  /**
   * 带标签的 input，设置后置标签，可以与 nzAddOnBefore 配合使用
   */
  addOnAfter?: string | TemplateRef<void>;
  /**
   * 带标签的 input，设置前置标签，可以与 nzAddOnAfter 配合使用
   */
  addOnBefore?: string | TemplateRef<void>;
  /**
   * 带有前缀图标的 input，可以与 nzSuffix 配合使用
   */
  prefix?: string | TemplateRef<void>;
  /**
   * 带有后缀图标的 input，可以与 nzPrefix 配合使用
   */
  suffix?: string | TemplateRef<void>;
  //   /**
  //    * 是否用紧凑模式
  //    */
  //   nzCompact?: boolean;
}

export interface NumberFormly {
  /**
   * 指定输入框展示值的格式
   */
  formatter?: (value: number | string) => string | number;

  /**
   * 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用
   *  @default
   *  (value: string) => value.trim().replace(/。/g, '.').replace(/[^\w\.-]+/g, '')
   */
  parser?: (value: string) => string | number;

  /**
   * 数值精度
   */
  precision?: number;

  /**
   * 数值精度的取值方式
   * @default
   * 'toFixed'
   */
  precisionMode?:
    | 'cut'
    | 'toFixed'
    | ((value: number | string, precision?: number) => number);

  /**
   * 每次改变步数，可以为小数
   * @default
   * 1
   */
  step?: number | string;

  /**
   * 提供了用户在编辑元素或其内容时可能输入的数据类型的提示，详见MDN
   * @default
   * decimal
   */
  inputMode?: string;

  /**
   * 数值改变时回调
   */
  modelChange?: (value: number) => {};

  /**
   *  指定宽度(支持百分比)
   *@example
    width: '200px'
    width: '50%'
   */
  width?: string;
}

export interface AutocompleteFormly extends InputFormly {
  /**
   * 自动完成的数据源
   */
  dataSource?: AutocompleteDataSource;

  /**
   * 使用键盘选择选项的时候，会把当前高亮项的值即时回填到输入框中
   */
  backfill?: boolean;

  /**
   * 是否默认高亮第一个选项
   */
  defaultActiveFirstOption?: boolean;

  /**
   * 自定义宽度单位 px
   */
  width?: number;

  /**
   * 下拉根元素的类名称
   */
  overlayClassName?: string;

  /**
   * 下拉根元素的样式
   */
  overlayStyle?: object;

  /**
   * 与 SelectControlValueAccessor 相同
   */
  compareWith?: (o1: any, o2: any) => boolean;
}

export interface TextAreaFormly extends InputFormly {
  /**
   * 自适应内容高度，可设置为 boolean 或对象：{ minRows: 2, maxRows: 6 }
   */
  autosize?: boolean | { minRows: number; maxRows: number };
  /**
   * 行数
   * @default 4
   */
  rows?: number;

  maxCharacterCount?: number;
}

export interface FormlyJson {
  label?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  fillHeight?: boolean;
  editorStyle?: { [klass: string]: any };
  sort?: (key: string, value: any) => any;
}
