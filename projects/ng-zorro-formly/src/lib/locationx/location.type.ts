import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnInit,
} from "@angular/core";
import { FieldType } from "@ngx-formly/core";
import { AreaProvinceService } from "./location.service";
import { NzFormatEmitEvent, NzTreeNode } from "ng-zorro-antd/tree";

interface IAddress {
  children: null | any[];
  code: string;
  create_by: string;
  create_date: string;
  del_flag: string;
  id: string;
  municipalityFlag: true;
  name: string;
  parent_idZ: string;
  parent_ids: string;
  sort: number;
  type: string;
  update_by: string;
  update_date: string;
}

@Component({
  selector: "formly-field-location",
  template: `
    <input
      nz-input
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldLocation extends FieldType implements OnInit {
  nodes = [];

  constructor(private areaProvinceService: AreaProvinceService) {
    super();
  }

  ngOnInit(): void {
    console.log('this', this);
    this.areaProvinceService.getAreaProvince().subscribe({
      next: (x: Array<IAddress>) => {
        this.nodes = x.map((item) => {
          return {
            title: item.name,
            value: item.id,
            key: item.id,
            isLeaf: item.type === "4",
            selectable: item.type === "4",
          };
        });
      },
      error: (err) => {},
    });
  }

  onExpandChange(e: NzFormatEmitEvent): void {
    const node = e.node;
    if (node && node.getChildren().length === 0 && node.isExpanded) {
      this.areaProvinceService.getAreaByParent(node.key).subscribe({
        next: (x: Array<IAddress>) => {
          node.addChildren(
            x.map((item) => {
              return {
                title: item.name,
                value: item.id,
                key: item.id,
                isLeaf: item.type === "4",
                selectable: item.type === "4",
              };
            })
          );
        },
        error: (err) => {},
      });
    }
  }

  getChooseText(e: NzTreeNode) {
    let str = '';
    str += e.parentNode.parentNode.origin.title + ' / ' + e.parentNode.origin.title + ' / ' + e.origin.title;
    return str;
  }
}