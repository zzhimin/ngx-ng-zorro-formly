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
} from './examples/public-api';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyFormTemplateComponent } from 'projects/ng-zorro-formly/src/lib/formly-form-template.component';
import { FormGroup } from '@angular/forms';
import { deepClone } from 'projects/ng-zorro-formly/src/lib/utils';
import { objectFunctionsToString } from "./utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
    const config2 = objectFunctionsToString(config);
    const configJson = JSON.parse(JSON.stringify(config2.config));
    const configText = JSON.stringify(configJson, null, 4);
    setTimeout(() => {
      this.fieldConfig = configText;
    }, 0);
  }
}
