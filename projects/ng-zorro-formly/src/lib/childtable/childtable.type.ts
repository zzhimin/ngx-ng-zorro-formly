import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { isMobile } from '../utils';
import { FieldArrayType } from '@ngx-formly/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'formly-field-childtable',
  templateUrl: './childtable.component.html',
  styleUrls: ['./childtable.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldChildtable extends FieldArrayType implements OnInit, OnDestroy {
  private rxSubscriptions: Subscription = null;

  isMobileTerminal: boolean = isMobile();
  getTitle(i: number): string {
    return `第 ${i + 1} 项`
  }
  ngOnInit(): void {
    // console.log(' this.field >>:', this.field);
    this.rxSubscriptions = this.field.formControl.valueChanges.pipe(debounceTime(300)).subscribe(values => {
      this.to.valueChanges && this.to.valueChanges(values, this.field);
    })
  }
  ngOnDestroy(): void {
    this.rxSubscriptions && this.rxSubscriptions.unsubscribe();
  }

  get computedScroll() {
    // @ts-ignore
    const len = this.field.fieldArray.fieldGroup.length;
    return { x: `${len * 200}px` };
  }

  get optWidth() {
    const baseWidth = 80;
    let titleLen = this.to?.moreAction?.reduce((prev, item) => prev += item.title.length, 0);
    if (this.to?.isDrag) {
      titleLen += 1
    }
    if (titleLen && titleLen > 0) {
      return `${baseWidth + 15 * titleLen}px`;
    } else {
      return `${baseWidth}px`;
    }
  }

  // 子表项排序
  get subTableSortFieldId() { 
    return this.to.subTableSortId;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.field.model, event.previousIndex, event.currentIndex);
    this.field.model.forEach((item, i) => {
      item[this.subTableSortFieldId] = i;
    })
    moveItemInArray(this.field.fieldGroup, event.previousIndex, event.currentIndex);
  }

  setTrue(g){
    g.hideExpression = false;
    g.childhide = true;
    return g;
  }
}
