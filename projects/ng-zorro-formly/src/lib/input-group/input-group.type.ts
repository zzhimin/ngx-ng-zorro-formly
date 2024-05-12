import {
  Component,
  ChangeDetectionStrategy,
  Optional,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { FieldArrayType, FieldType, FieldWrapper } from '@ngx-formly/core';
import { NzFormDirective, NzFormItemComponent } from 'ng-zorro-antd/form';

@Component({
  selector: 'formly-field-input-group',
  template: `
    <nz-form-item [fixed-label]="to!.spanLabelFixed!">
      <ng-container *ngIf="to.label && to.hideLabel !== true">
        <nz-form-label
          [nzSpan]="to.grid?.label?.span"
          [nzRequired]="to.required && to.hideRequiredMarker !== true"
          [nzFor]="id"
        >
          <span class="formly-label-text">
            {{ to.label }}
          </span>
        </nz-form-label>
      </ng-container>
      <nz-form-control
        #control
        [nzSpan]="to.grid?.control?.span"
        [nzValidateStatus]="errorState"
        [nzErrorTip]="errorTpl"
      >
        <nz-input-group>
          <formly-field *ngFor="let f of group" [field]="f"></formly-field>
        </nz-input-group>

        <ng-template #errorTpl let-control>
          <formly-validation-message
            [field]="field"
          ></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldInputGroup extends FieldWrapper {
  private el: HTMLDivElement;
  /**
   *
   */
  constructor(
    er: ElementRef,
    private render: Renderer2,
    @Optional() private nzForm: NzFormDirective
  ) {
    super();
    // console.log(this);
    this.el = er.nativeElement as HTMLDivElement;
  }
  get errorState() {
    if (this.key) {
      return this.showError ? 'error' : 'success';
    } else {
      return this.group.filter(
        (x) =>
          x.formControl?.invalid &&
          (x.formControl?.touched ||
            x.options.parentForm?.submitted ||
            !!this.field.validation?.show)
      ).length
        ? 'error'
        : 'success';
    }
  }

  get group() {
    return this.field.fieldGroup;
  }

  ngAfterViewInit(): void {
    // vertical 布局去掉 ant-col-xxx 列样式
    // nzForm 有时候可能拿不到，所以还是保留 parentNode 判断
    if (
      this.nzForm?.nzLayout === 'vertical' ||
      (this.el.parentNode.parentNode.parentNode as any)?.classList.contains(
        'ant-form-vertical'
      )
    ) {
      // 拿到 label
      const label = this.el.children[0].querySelector('nz-form-label');
      if (label) {
        const labelClass = label.classList.value;
        /ant-col-\d+/g
          .exec(labelClass)
          ?.forEach((x) => label.classList.remove(x));
      }

      // 拿到 control
      const control = this.el.children[0].querySelector('nz-form-control');
      if (control) {
        const controlClass = control.classList.value;
        /ant-col-\d+/g
          .exec(controlClass)
          ?.forEach((x) => control.classList.remove(x));
      }
    }

    // 设置 gutter
    const attribute = (this.el.parentNode?.parentNode as any)?.attributes;
    const gutter = attribute && attribute['ng-reflect-nz-gutter'];
    if (gutter) {
      const padding = (gutter.value - 0) / 2;
      this.render.setStyle(this.el.parentNode, 'padding-left', `${padding}px`);
      this.render.setStyle(this.el.parentNode, 'padding-right', `${padding}px`);
    }
  }

  getFlexStyle() {
    if (this.to?.spanLabelFixed) {
      // prettier-ignore
      return { 'flex': '0 0 100px','flex-basis': '100'}
      // return { 'flex': `0 0 ${this.to.spanLabelFixed}px` };
    }
    return null;
  }

  getMaxWidh() {
    if (this.to?.spanLabelFixed) {
      return { 'max-width': `calc(100% - ${this.to?.spanLabelFixed}px)` };
    }
    return null;
  }
}
