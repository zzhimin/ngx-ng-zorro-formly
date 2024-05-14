import { Component, OnInit, ViewChild } from '@angular/core';
import {
  checkbox,
  input,
  date,
  radio,
  rate,
  select,
  cascader,
  slider,
  switchs,
  time,
  treeSelect,
  upload,
  rich,
  button,

  layoutCard,
  layoutTabs,
  layoutTransfer,
  layoutCollapse,
  layoutChildtable,
  fieldLinkage,
} from './examples/public-api';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyFormTemplateComponent } from 'projects/ng-zorro-formly/src/lib/formly-form-template.component';
import { FormGroup } from '@angular/forms';
import { deepClone } from 'projects/ng-zorro-formly/src/lib/utils';
import { objectToString, replaceRxjsFunction } from "./utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  @ViewChild('formlyFormTemplate') formlyFormTemplateComponent: FormlyFormTemplateComponent;

  rawFieldConfig = [
    input,
    checkbox,
    date,
    radio,
    rate,
    select,
    cascader,
    slider,
    switchs,
    time,
    treeSelect,
    upload,
    rich,
    button,
    
    layoutCard,
    layoutTabs,
    layoutTransfer,
    layoutCollapse,
    layoutChildtable,
    fieldLinkage,
  ];

  tabs: Array<any> = [];

  fieldConfig = '[]';

  constructor() { }

  ngOnInit(): void {
    const cloneFieldConfig = deepClone(this.rawFieldConfig);
    this.tabs.push(...cloneFieldConfig);
    
    this.handleSelect(input);
  }
   
  handleSelect($event: any) {
    const config = this.rawFieldConfig.find(tab => tab.name == $event.name);

    setTimeout(() => {
      this.fieldConfig = objectToString(config);
    }, 0);
  }
}
