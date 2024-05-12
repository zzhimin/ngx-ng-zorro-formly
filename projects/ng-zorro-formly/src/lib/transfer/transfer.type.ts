import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzTimePickerComponent } from 'ng-zorro-antd/time-picker';
import { NzTransferComponent } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'formly-field-transfer',
  template: `
    <formly-transfer
      #transfer
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzDataSource]="to.transfer?.dataSource"
      [nzTitles]="to.transfer?.titles"
      [nzSelectedKeys]="to.transfer?.selectedKeys"
      [nzOperations]="to.transfer?.operations"
      [nzListStyle]="to.transfer?.listStyle"
      [nzItemsUnit]="to.transfer?.itemsUnit"
      [nzItemUnit]="to.transfer?.itemUnit"
      [nzRenderList]="to.transfer?.renderList"
      [nzRender]="to.transfer?.render"
      [nzFooter]="to.transfer?.footer"
      [nzShowSearch]="to.transfer?.showSearch"
      [nzFilterOption]="to.transfer?.filterOption"
      [nzSearchPlaceholder]="to.transfer?.searchPlaceholder"
      [nzNotFoundContent]="to.transfer?.notFoundContent"
      [nzTargetKeys]="to.transfer?.targetKeys"
      [resultMap]="to.transfer?.resultMap"
      (nzSearchChange)="
        to.transfer?.onSearchChange && to.transfer?.onSearchChange($event)
      "
      (nzSelectChange)="
        to.transfer?.onSelectChange && to.transfer?.onSelectChange($event)
      "
      (nzChange)="to.transfer?.onChange && to.transfer?.onChange($event)"
    ></formly-transfer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTransfer extends FieldType implements OnInit {
  @ViewChild('transfer', { static: true }) transfer: NzTransferComponent;
  ngOnInit(): void {
    if (
      this.to.transfer?.canMove !== null &&
      this.to.transfer?.canMove !== undefined
    ) {
      this.transfer.nzCanMove = this.to.transfer.canMove;
    }
  }
}
