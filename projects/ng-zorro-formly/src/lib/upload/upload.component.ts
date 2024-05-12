import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { isArray, isNull } from 'lodash';
import { OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import {
  NzUploadChangeParam,
  NzUploadComponent,
  NzUploadFile,
} from 'ng-zorro-antd/upload';

@Component({
  selector: 'formly-upload',
  templateUrl: './upload.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UploadComponent,
      multi: true,
    },
  ],
})
export class UploadComponent
  extends NzUploadComponent
  implements OnInit, ControlValueAccessor {
  @ViewChild('upload', { static: true }) transfer: NzUploadComponent;

  /**
   * 按钮文本
   * @default 点击上传
   */
  @Input() text: string = '点击上传';
  @Input() resultMap: (items: NzUploadFile[]) => any[];

  onChange: OnChangeType = () => { };
  onTouched: OnTouchedType = () => { };
  writeValue(obj: any): void {
    if (typeof obj === 'string') {
      obj = JSON.parse(obj);
      const objArr = Array.isArray(obj) ? obj : [obj];
      this.nzFileList = objArr;
    } 
    else if (isArray(obj)) {
      this.nzFileList = obj;
    }
   }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.nzDisabled = isDisabled;
  }

  fileListChange(list: NzUploadFile[]) {
    this.nzFileListChange.emit(list);
  }

  change(value: NzUploadChangeParam) {
    this.nzChange.emit(value);

    if (value.type === 'removed') {
      const fileList = this.nzFileList.filter(item => item.name !== value.file.name);
      // console.log("🚀 ~ fileList:", fileList)
      this.nzFileList = fileList;
      this.onChange(fileList);
      // @ts-ignore
      this.cdr.detectChanges();
    }
  }

  ngOnChanges() { }

  ngOnInit(): void { }
}
