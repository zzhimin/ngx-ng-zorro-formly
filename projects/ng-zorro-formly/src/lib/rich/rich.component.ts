import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import Quill from 'quill';

@Component({
  selector: 'formly-rich',
  template: `
    <div id="richAnchor" #richAnchor></div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RichComponent,
      multi: true,
    },
  ],
})
export class RichComponent implements AfterViewInit, ControlValueAccessor {
  @ViewChild('richAnchor') richAnchor: ElementRef;

  @Input() placeholder = '输入...';
  @Input() toolbar = [
    // 默认的
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean'],
    ['image']
  ];
  @Input() readOnly = false;
  @Output() onRichChange = new EventEmitter<string>();

  // https://blog.51cto.com/u_15127574/3377752
  // https://www.kancloud.cn/liuwave/quill/1409423
  quill: any;

  ngAfterViewInit(): void {
      
    this.quill = new Quill(this.richAnchor.nativeElement, {
      theme: 'snow', // 不要改
      placeholder: this.placeholder,
      readOnly: this.readOnly,
      modules: {
        toolbar: this.toolbar
      }
    });

    // 可以监听编辑器的内容变化
    this.quill.on('text-change', () => {
      var delta = this.quill.getContents();
      const valueData = JSON.stringify(delta);
      this.change(valueData);
      this.onRichChange.emit(valueData);
    });

  }


  onChange: OnChangeType = () => { };
  onTouched: OnTouchedType = () => { };
  // private cdr: ChangeDetectorRef
  writeValue(delta: string): void {
    setTimeout(() => {
      // 初始化时写入
      if (delta) {
        try {
          const content = JSON.parse(delta)
          this.quill.setContents(content.ops);
        } catch (error) {
          console.log("🚀 ~ error:", error)
          // this.quill.setContents(delta);
          this.quill.clipboard.dangerouslyPasteHTML(0, delta);
        }
      }
    }, 100);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  change(value: any) {
    this.onChange(value);
  }

}
