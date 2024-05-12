import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { LocationComponent } from "./location.component";

@Component({
  selector: 'formly-field-location',
  template: `
    <formly-location
      #location
      [formControl]="formControl"
      [formlyAttributes]="field"
      [disabled]="to.disabled"
      (onRichChange)="to.location?.onChange && to.location?.onChange($event)"
      (mapaddress)="to.location?.mapaddress"
    ></formly-location>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldLocation extends FieldType implements OnInit {
  @ViewChild('location', { static: true }) location: LocationComponent;
  ngOnInit(): void {
    
  }

}
