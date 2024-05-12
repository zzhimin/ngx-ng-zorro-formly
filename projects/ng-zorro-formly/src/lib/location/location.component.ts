import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { MapContainerComponent } from '../map-container/map-container.component';
import { isMobile } from '@app/core/public-api';

@Component({
  selector: 'formly-location',
  styleUrls: ['./location.component.less'],
  template: `
      <div>
        <button [disabled]="disabled" class="btn-position" *ngIf="!mapaddress.address" nz-button nzType="dashed" (click)='clickMap()' ><img src="/gridvo-ui/assets/gridvo/smd-image/xuanzeweizhi.png" width="16" height="16" /> {{ '点击选择定位点' }}</button>
        <button [disabled]="disabled" class="btn-position" *ngIf="mapaddress.address && mapaddress.qyaddress" nz-button nzType="dashed" (click)='clickMap()' > <img src="/gridvo-ui/assets/gridvo/smd-image/dingwei.png" width="16" height="16" /> {{ mapaddress.qyaddress+'('+mapaddress.address+')' }}</button>
        <button [disabled]="disabled" class="btn-position" *ngIf="mapaddress.address && !mapaddress.qyaddress" nz-button nzType="dashed" (click)='clickMap()' > <img src="/gridvo-ui/assets/gridvo/smd-image/dingwei.png" width="16" height="16" /> {{ mapaddress.address }}</button>
      </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LocationComponent,
      multi: true,
    },
  ],
})
export class LocationComponent implements OnInit, ControlValueAccessor {

  mapaddress = {
    lng:'',//经度
    lat:'',//维度
    address: '',//详细地址
    qyaddress:'',//区域地址
  };
  title = {};
  isMobileTerminal: boolean = isMobile();

  @Output() onRichChange = new EventEmitter<string>();
  @Input() loaction: string;
  @Input() disabled: Boolean;

  constructor(
      private viewContainerRef: ViewContainerRef,
      private nzModalService: NzModalService
      ) {
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    // this.map?.destroy();
  }

  onChange: OnChangeType = () => { };
  onTouched: OnTouchedType = () => { };

  writeValue(obj: any): void {
     if(Array.isArray(obj) && obj.length > 0) {
      this.mapaddress.qyaddress = obj[0];
      this.mapaddress.address = obj[1];
      this.mapaddress.lng = obj[2];
      this.mapaddress.lat = obj[3]
     } else {
      this.mapaddress = {
        lng:'',//经度
        lat:'',//维度
        address: '',//详细地址
        qyaddress:'',//区域地址
      }
     }
     console.log('详细地址和经纬度：',obj)
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  geolocation(obj: any) {
  }

  clickMap() {
      const modal = this.nzModalService.create({
        nzTitle: '地图定位选择',
        nzMaskClosable: false,
        nzCentered: true,
        nzWidth: this.isMobileTerminal ? '95%' : '50%',
        nzContent: MapContainerComponent,
        nzViewContainerRef: this.viewContainerRef,
        nzComponentParams: {
          center: [this.mapaddress.lng !== '' && this.mapaddress.lng !== undefined ? this.mapaddress.lng : '119.3',this.mapaddress.lat !== '' && 
          this.mapaddress.lat !== undefined ? this.mapaddress.lat : '26.08'],
          loaction: this.mapaddress.address
        },
        nzFooter: [
          {
            label: '取消',
            type: 'default',
            onClick: () => {
              modal.destroy();
            }
          },
          {
            label: '确定',
            type: 'primary',
            onClick: () => {
              this.mapaddress = modal.componentInstance.mapaddress;
              const valueData = JSON.stringify(this.mapaddress);
              this.change(valueData)//写入值
              this.onRichChange.emit(JSON.parse(JSON.stringify(modal.componentInstance.mapaddress)));
              modal.destroy();
            }
          }
        ]
      })
      setTimeout(() => {
        if ( this.mapaddress.lng && this.mapaddress.lat) {
          modal.componentInstance.addMarksx(this.mapaddress.lng,this.mapaddress.lat);
        } else {
          modal.componentInstance.searchAdress(this.mapaddress.address+this.mapaddress.qyaddress);
        }
      }, 800);
  }

  handleCancel() {
  }

  handleFn(modal: any) {
    console.log(modal)
  }

  handleOk() { 
  }

  change(value: any) {
    this.onChange(value);
  }
  
}
