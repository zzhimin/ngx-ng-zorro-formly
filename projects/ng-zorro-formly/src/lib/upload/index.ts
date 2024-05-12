import { TemplateRef } from '@angular/core';
import {
  NzUploadChangeParam,
  NzUploadFile,
  NzUploadTransformFileType,
  UploadFilter,
} from 'ng-zorro-antd/upload';
import { Observable, Subscription } from 'rxjs';

export interface UploadFormly {
  /**
   * 接受上传的文件类型, 详见 input accept Attribute
   */
  accept?: string;

  /**
   * 必选参数, 上传的地址
   */
  action?: string | ((file: NzUploadFile) => string | Observable<string>);

  /**
   * 支持上传文件夹（caniuse）
   * @default false
   */
  directory?: boolean;

  /**
   * 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。注意：IE9 不支持该方法；注意：务必使用 => 定义处理方法。
   */
  beforeUpload?: (
    file: NzUploadFile,
    fileList: NzUploadFile[]
  ) => boolean | Observable<boolean>;

  /**
   * 通过覆盖默认的上传行为，可以自定义自己的上传实现；注意：务必使用 => 定义处理方法。
   */
  customRequest?: (item) => Subscription;

  /**
   * 上传所需参数或返回上传参数的方法；注意：务必使用 => 定义处理方法。
   */
  data?: Object | ((file: NzUploadFile) => Object | Observable<{}>);

  /**
   * 文件列表，双向绑定
   */
  fileList?: NzUploadFile[];

  /**
   * 限制单次最多上传数量，nzMultiple 打开时有效；0 表示不限
   * @default 0
   */
  limit: number;

  /**
   * 制文件类型，例如：image/png,image/jpeg,image/gif,image/bmp
   */
  fileType?: string;

  /**
   * 自定义过滤器
   */
  filter?: UploadFilter[];

  /**
   * 设置上传的请求头部，IE10 以上有效；注意：务必使用 => 定义处理方法。
   */
  headers?: Object | ((file: NzUploadFile) => Object | Observable<{}>);

  /**
   * 上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card
   * @default text
   */
  listType?: 'text' | 'picture' | 'picture-card';

  /**
   * 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。
   * @default false;
   */
  multiple?: boolean;

  /**
   * 发到后台的文件参数名
   * @default file
   */
  name?: string;

  /**
   * 是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon，showRemoveIcon 和 showDownloadIcon
   * @default true
   */
  showUploadList?:
    | boolean
    | {
        showPreviewIcon?: boolean;
        showRemoveIcon?: boolean;
        showDownloadIcon?: boolean;
      };

  /**
   * 是否展示上传按钮
   * @default true
   */
  showButton?: boolean;

  /**
   * 上传请求时是否携带 cookie
   * @default false
   */
  withCredentials?: boolean;

  /**
   * 点击打开文件对话框
   * @default true
   */
  openFileDialogOnClick?: boolean;

  /**
   * 点击文件链接或预览图标时的回调；注意：务必使用 => 定义处理方法。
   */
  preview?: (file: NzUploadFile) => void;

  /**
   * 自定义文件预览逻辑；注意：务必使用 => 定义处理方法。
   */
  previewFile?: (file: NzUploadFile) => Observable<string>;

  /**
   * 自定义预览文件是否有效图像，一般用于图像URL为非标准格式；注意：务必使用 => 定义处理方法。
   */
  previewIsImage?: (file: NzUploadFile) => boolean;

  /**
   * 点击移除文件时的回调，返回值为 false 时不移除。支持返回 Observable 对象；注意：务必使用 => 定义处理方法。
   */
  remove?: (file: NzUploadFile) => boolean | Observable<boolean>;

  /**
   * 上传文件改变时的状态
   */
  onChange?: (value: NzUploadChangeParam) => void;

  /**
   * 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页
   */
  download?: (file: NzUploadFile) => void;

  /**
   * 在上传之前转换文件。支持返回一个 Observable 对象
   */
  transformFile?: (file: NzUploadFile) => NzUploadTransformFileType;

  /**
   * 自定义显示 icon
   */
  iconRender?: TemplateRef<{ $implicit: NzUploadFile }>;

  /**
   * 自定义显示整个列表
   */
  fileListRender?: TemplateRef<{ $implicit: NzUploadFile[] }>;

  /**
   * 按钮文本
   * @default 点击上传
   */
  text?: string;

  /**
   * 文件列表改变事件
   */
  fileListChange?: (list: NzUploadFile[]) => void;

  /**
   * 返回结果格式映射
   * @returns
   * 默认返回 TransferItem[] 格式
   */
  resultMap?: (items: NzUploadFile[]) => any[];
}
