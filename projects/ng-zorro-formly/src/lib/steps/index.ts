import { TemplateRef } from '@angular/core';

export interface StepsFormly {
  size: 'small'
}

export interface StepFormly {
  /**
   * 标题
   */
  title?: string | TemplateRef<void>;
}
