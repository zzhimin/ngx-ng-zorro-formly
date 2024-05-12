import {
  Component,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'range-number',
  template: `
    <nz-input-group nzCompact [formGroup]="validateForm">
      <nz-input-number    
        nzBorderless       
        nz-input 
        [nzPlaceHolder]="to.placeholder[0]" 
        id="input-left"
        formControlName="minValue" 
      ></nz-input-number>
      <input
        type="text"
        disabled
        nz-input
        placeholder="~"
        id="input-split"
      />
      <nz-input-number
        nzBorderless 
        nz-input
        [nzPlaceHolder]="to.placeholder[1]" 
        id="input-right" 
        formControlName="maxValue" 
      ></nz-input-number>
    </nz-input-group>
  `,
  styleUrls: ['./range-number.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormlyFieldRangeNumber),
      multi: true
    }
  ]
})
export class FormlyFieldRangeNumber {
  @Output() onRangeChange = new EventEmitter<any>();
  validateForm!: FormGroup;

  @Input() placeholder = ['请输入开始值', '请输入结束值'];
  @Input() to;

  ngOnInit() {
    this.validateForm = this.fb.group({
      minValue: [null],
      maxValue: [null]
    });

    this.validateForm.valueChanges.subscribe(formData => {
      const changeValue = Object.values(formData);
      this.onChange(changeValue);
      this.onRangeChange.emit(changeValue);
    })
  }

  constructor(
    private cdr: ChangeDetectorRef,
     private fb: FormBuilder
  ) {}

  onChange: OnChangeType = () => { };
  onTouched: OnTouchedType = () => { };
  writeValue(data: any): void {
    if(data == null){
      this.validateForm.reset();
    }
    this.cdr.detectChanges();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
