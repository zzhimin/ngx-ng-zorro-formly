import {
  Component,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  AfterViewInit,
  Optional,
  Host,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FieldWrapper, FormlyForm } from '@ngx-formly/core';
import {
  NzFormControlComponent,
  NzFormDirective,
  NzFormLabelComponent,
} from 'ng-zorro-antd/form';

@Component({
  selector: 'formly-wrapper-childtable-nz-form-field',
  styleUrls: ['./childtable-form-field.wrapper.less'],
  template: `
    <nz-form-item style="margin-bottom: 0;">
      <nz-form-control
        [nzSpan]="24"
      >
        <ng-container #fieldComponent></ng-container>
      </nz-form-control>
    </nz-form-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyWrapperChildtableFormField
  extends FieldWrapper
  implements AfterViewInit {
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
    return this.showError ? 'error' : 'success';
  }

  ngAfterViewInit(): void {
    // vertical 布局去掉 ant-col-xxx 列样式
    // nzForm 有时候可能拿不到，所以还是保留 parentNode 判断
    if (
      this.nzForm?.nzLayout === 'vertical' ||
      (this.el.parentNode.parentNode?.parentNode as any)?.classList.contains(
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
    const attribute = (this.el.parentNode.parentNode as any)?.attributes;
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
      return { 'flex': '0 0 100px', 'flex-basis': '100' }
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
