export interface RadioFormly {
  /**
   * nz-radio-group 下所有 input[type="radio"] 的 name 属性
   */
  name?: string;

  /**
   * RadioButton 的风格样式，目前有描边和填色两种风格
   */
  buttonStyle?: 'outline' | 'solid';

  /**
   * 选中变化时回调
   */
  ngModelChange?: (value: any) => void;
}
