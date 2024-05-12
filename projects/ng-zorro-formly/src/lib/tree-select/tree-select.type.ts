import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { isMobile } from '../utils';
import { FieldType } from '@ngx-formly/core';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { Observable, Subscription, isObservable } from 'rxjs';
@Component({
  selector: 'formly-field-select',
  templateUrl: './tree-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTreeSelect extends FieldType implements OnInit {
  get width() {
    return { width: this.to.treeSelect.width };
  }
  nodes: NzTreeNodeOptions[] = [];
  nodes$: Subscription;

  isMobileTerminal: boolean = isMobile();

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }
  ngOnInit(): void {
    const nodes: Observable<NzTreeNodeOptions[]> = this.to.treeSelect.nodes;
    isObservable(nodes) ? 
    this.nodes$ = nodes?.subscribe((nodes) => {
      this.nodes = nodes;
      this.cdr.detectChanges();
    }) :
    this.nodes = nodes;
  }
  ngOnDestroy(): void {
    this.nodes$ && this.nodes$.unsubscribe();
  }
}
