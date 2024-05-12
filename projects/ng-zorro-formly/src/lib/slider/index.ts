export interface SliderFormly {
  /**
   * 是否只能拖拽到刻度上
   * @default false
   */
  dots?: boolean;

  /**
   * marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列
   * @default true
   */
  included?: boolean;

  /**
   * 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式
   * @default
   * { number: string/HTML } or { number: { style: object, label: string/HTML } }
   */
  marks?: object;

  /**
   * 最大值
   * @default 100
   */
  max?: number;

  /**
   * 最小值
   * @default 0
   */
  min?: number;

  /**
   * 双滑块模式
   * @default false
   */
  range?: boolean;

  /**
   * 步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分。
   * @default 1
   */
  step?: number | null;

  /**
   * Slider 会把当前值传给 nzTipFormatter，并在 Tooltip 中显示 nzTipFormatter 的返回值，若为 null，则隐藏 Tooltip。
   */
  tipFormatter?: (value: number) => string;

  /**
   * 值为 true 时，Slider 为垂直方向
   * @default false
   */
  vertical?: boolean;

  /**
   * 反向坐标轴
   * @default false
   */
  reverse?: boolean;

  /**
   * 值为 always 时总是显示，值为 never 时在任何情况下都不显示
   * @default default
   */
  tooltipVisible?: 'default' | 'always' | 'never';

  /**
   * 设置 Tooltip 的默认位置。
   */
  tooltipPlacement?: string;

  /**
   * 与 onmouseup 触发时机一致，把当前值作为参数传入。
   */
  onAfterChange?: (value: number[] | number) => void;

  /**
   * 当 Slider 的值发生改变时，会触发 ngModelChange 事件，并把改变后的值作为参数传入
   */
  ngModelChange?: (value: number[] | number) => void;
}
