import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { RichComponent } from "./rich.component";

@Component({
  selector: 'formly-field-rich',
  template: `
    <formly-rich
      #rich
      [formControl]="formControl"
      [toolbar]="to.rich?.toolbar"
      [placeholder]="to.placeholder"
      [formlyAttributes]="field"
      (onRichChange)="to.rich?.onChange && to.rich?.onChange($event)"
      [readOnly]="to.rich?.readOnly"
    ></formly-rich>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldRich extends FieldType implements OnInit {
  @ViewChild('rich', { static: true }) rich: RichComponent;
  ngOnInit(): void { }
}
