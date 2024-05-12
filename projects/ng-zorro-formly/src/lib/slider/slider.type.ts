import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
  AfterViewInit,
  TemplateRef,
  ChangeDetectorRef,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

import { NzSelectComponent } from 'ng-zorro-antd/select';
import { NzSliderComponent } from 'ng-zorro-antd/slider';
import { Observable } from 'rxjs';

@Component({
  selector: 'formly-field-slider',
  template: `
    <ng-container [ngSwitch]="to.disabled">

      <nz-slider
        #slider
        *ngSwitchCase="false"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [nzDots]="to.slider?.dots"
        [nzIncluded]="to.slider?.included"
        [nzMax]="to.slider?.max"
        [nzMin]="to.slider?.min"
        [nzRange]="to.slider?.range"
        [nzStep]="to.slider?.step"
        [nzMarks]="to.slider?.marks"
        [nzTipFormatter]="to.slider?.tipFormatter"
        [nzVertical]="to.slider?.vertical"
        [nzReverse]="to.slider?.reverse"
        [nzTooltipVisible]="to.slider?.tooltipVisible"
        (ngModelChange)="
          to.slider?.ngModelChange && to.slider?.ngModelChange($event)
        "
        (nzOnAfterChange)="
          to.slider?.onAfterChange && to.slider?.onAfterChange($event)
        "
        [ngStyle]="width"
        style="display: block;"
        [style.height]="to.slider?.vertical ? to.slider?.height : ''"
      ></nz-slider>

      <nz-progress 
        *ngSwitchCase="true" 
        [nzPercent]="formControl.value" 
        nzStrokeColor="#5182e4" 
        nzSize="small"
      ></nz-progress>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldSlider extends FieldType implements AfterViewInit {
  get width() {
    return { width: this.to.slider.width };
  }
  @ViewChild('slider', { static: false }) slider: NzSliderComponent;

  ngAfterViewInit(): void {
    if (this.to.slider?.marks) {
      this.slider.nzMarks = this.to.slider?.marks;
    } else {
      this.slider.nzMarks = {};
    }
  }
}
