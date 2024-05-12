import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzAutocompleteComponent } from 'ng-zorro-antd/auto-complete';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'formly-field-input',
  template: `
    <ng-container [ngSwitch]="to.type">
      <nz-input-group
        *ngSwitchCase="'input'"
        [nzPrefixIcon]="to.input?.prefixIcon"
        [nzSuffixIcon]="to.input?.suffixIcon"
        [nzAddOnAfterIcon]="to.input?.addOnAfterIcon"
        [nzAddOnBeforeIcon]="to.input?.addOnBeforeIcon"
        [nzAddOnBefore]="to.input?.addOnBefore"
        [nzAddOnAfter]="to.input?.addOnAfter === 'question-circle' ? suffixTemplateQuestionCircle : to.input?.addOnAfter == undefined ? '' : suffixTemplateInput"
        [nzPrefix]="to.input?.prefix"
        [nzSuffix]="to.input?.suffix"
        [ngStyle]="width"
      >
        <input
          nz-input
          [autofocus]="false"
          [placeholder]="to.placeholder"
          [formControl]="formControl"
          [readonly]="to.input?.readonly"
          [nzBorderless]="to.input?.borderless"
          [formlyAttributes]="field"
          (ngModelChange)="to.input && to.input.modelChange && to.input.modelChange(field)"
        />
      </nz-input-group>

      <ng-template #suffixTemplateQuestionCircle>
        <i nz-icon nz-tooltip [nzTooltipTitle]="to.input?.tipsContent" nzType="question-circle"></i>
      </ng-template>

      <ng-template #suffixTemplateInput>
        <span nz-tooltip [nzTooltipTitle]="to.input?.tipsContent">{{ to.input?.addOnAfter }}</span>
      </ng-template>

      <nz-input-group
        *ngSwitchCase="'password'"
        [nzPrefixIcon]="to.input?.prefixIcon"
        [nzSuffixIcon]="to.input?.suffixIcon"
        [nzAddOnAfterIcon]="to.input?.addOnAfterIcon"
        [nzAddOnBeforeIcon]="to.input?.addOnBeforeIcon"
        [nzAddOnBefore]="to.input?.addOnBefore"
        [nzAddOnAfter]="suffixTemplateInput"
        [nzPrefix]="to.input?.prefix"
        [nzSuffix]="to.input?.suffix"
        [ngStyle]="width"
      >
        <input
          type="password"
          nz-input
          [autofocus]="false"
          [placeholder]="to.placeholder"
          [formControl]="formControl"
          [nzBorderless]="to.input?.borderless"
          [formlyAttributes]="field"
        />
      </nz-input-group>

      <nz-input-group
        *ngSwitchCase="'color'"
        [nzPrefixIcon]="to.input?.prefixIcon"
        [nzSuffixIcon]="to.input?.suffixIcon"
        [nzAddOnAfterIcon]="to.input?.addOnAfterIcon"
        [nzAddOnBeforeIcon]="to.input?.addOnBeforeIcon"
        [nzAddOnBefore]="to.input?.addOnBefore"
        [nzAddOnAfter]="to.input?.addOnAfter"
        [nzPrefix]="to.input?.prefix"
        [nzSuffix]="to.input?.suffix"
        [ngStyle]="width"
      >
        <input
          type="color"
          nz-input
          [autofocus]="false"
          [placeholder]="to.placeholder"
          [formControl]="formControl"
          [nzBorderless]="to.input?.borderless"
          [formlyAttributes]="field"
        />
      </nz-input-group>

      <nz-input-number
        #inputNumber
        *ngSwitchCase="'number'"
        [nzPlaceHolder]="to.placeholder"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [nzMax]="to.max"
        [nzMin]="to.min"
        [nzPrecision]="to.number?.precision"
        [nzPrecisionMode]="to.number?.precisionMode"
        [nzStep]="to.number?.step"
        [nzInputMode]="to.number?.inputMode"
        (ngModelChange)="to.number && to.number.modelChange && to.number.modelChange(field)"
        (nzBlur)="to.number && to.number.blur && to.number.blur(field)"
        [ngStyle]="width"
        [nzParser]="to.number?.parser"
        [nzFormatter]="to?.number?.formatter"
      ></nz-input-number>

      <range-number 
        *ngSwitchCase="'range-number'"
        [placeHolder]="to.placeholder"
        [formControl]="formControl"  
        [to]="to"
        (onRangeChange)="to.number && to.number.modelChange && to.number.modelChange($event)"
      >
      </range-number>

      <ng-container *ngSwitchCase="'textarea'">
        <nz-textarea-count
          *ngIf="to.textarea?.maxCharacterCount; else textarea"
          [nzMaxCharacterCount]="to.textarea?.maxCharacterCount"
          [ngStyle]="width"
          style="display: block;"
        >
          <textarea
            [rows]="to.textarea?.rows"
            nz-input
            [autofocus]="false"
            [placeholder]="to.placeholder"
            [formControl]="formControl"
            [nzBorderless]="to.textarea?.borderless"
            [formlyAttributes]="field"
            (ngModelChange)="to.textarea && to.textarea.modelChange && to.textarea.modelChange(field)"
          ></textarea>
        </nz-textarea-count>

        <ng-template #textarea>
          <textarea
            [ngStyle]="width"
            [rows]="to.textarea?.rows"
            nz-input
            [autofocus]="false"
            [placeholder]="to.placeholder"
            [formControl]="formControl"
            [nzBorderless]="to.textarea?.borderless"
            [formlyAttributes]="field"
            (ngModelChange)="to.textarea && to.textarea.modelChange && to.textarea.modelChange(field)"
          ></textarea>
        </ng-template>
      </ng-container>

      <nz-input-group
        *ngSwitchCase="'autoComplete'"
        [nzPrefixIcon]="to.autoComplete?.prefixIcon"
        [nzSuffixIcon]="to.autoComplete?.suffixIcon"
        [nzAddOnAfterIcon]="to.autoComplete?.addOnAfterIcon"
        [nzAddOnBeforeIcon]="to.autoComplete?.addOnBeforeIcon"
        [nzAddOnBefore]="to.autoComplete?.addOnBefore"
        [nzAddOnAfter]="to.autoComplete?.addOnAfter"
        [nzPrefix]="to.autoComplete?.prefix"
        [nzSuffix]="to.autoComplete?.suffix"
      >
        <input
          nz-input
          [autofocus]="false"
          [placeholder]="to.placeholder"
          [formControl]="formControl"
          [nzBorderless]="to.autoComplete?.borderless"
          [formlyAttributes]="field"
          [nzAutocomplete]="auto"
        />
        <nz-autocomplete
          [nzBackfill]="to.autoComplete?.backfill"
          [nzDefaultActiveFirstOption]="
            to.autoComplete?.defaultActiveFirstOption
          "
          [nzWidth]="to.autoComplete?.width"
          [nzOverlayClassName]="to.autoComplete?.overlayClassName"
          [nzOverlayStyle]="to.autoComplete?.overlayStyle"
          [compareWith]="to.autoComplete?.compareWith"
          #auto
        >
          <nz-auto-option
            *ngFor="let option of to.autoComplete.dataSource"
            [nzLabel]="option.label"
            [nzValue]="option.value"
          >
            {{ option.label }}
          </nz-auto-option>
        </nz-autocomplete>
      </nz-input-group>
      
    </ng-container>
  `,
  styleUrls: ['./index.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInput extends FieldType {
  get width() {
    switch (this.to.type){
      case 'input':
      case 'password':
        return { width: this.to.input.width };
      case 'number':
        return { width: this.to.number.width };
      case 'textarea':
        return { width: this.to.textarea.width };
      case 'color':
        return { width: this.to.color.width || '50px'};
      default:
        return {width: 'inherit'}
      }
  }
}
