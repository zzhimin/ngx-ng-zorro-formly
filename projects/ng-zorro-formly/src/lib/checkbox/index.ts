export interface CheckboxFormly {
  /**
*  指定宽度(支持百分比)
*@example
width: '200px'
width: '50%'
*/
  width?: string;
  /**
   * 选中变化时回调
   */
  ngModelChange?: (
    value: boolean | Array<{ label: string; value: string; checked?: boolean }>
  ) => void;
}
