import { NgModule } from '@angular/core';

import { NzFormModule } from 'ng-zorro-antd/form';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormlyNzCardModule } from './card/card.module';
import { FormlyNzCascaderModule } from './cascader/cascader.module';
import { FormlyNzCheckboxModule } from './checkbox/checkbox.module';
import { FormlyNzDateModule } from './date/date.module';
import { FormlyNzFormFieldModule } from './form-field/form-field.module';
import { FormlyNzChildtableFormFieldModule } from "./childtable-form-field/childtable-form-field.module";
import { FormlyNzInputGroupModule } from './input-group/input-group.module';
import { FormlyNzInputModule } from './input/input.module';
import { FormlyNzRadioModule } from './radio/radio.module';
import { FormlyNzRateModule } from './rate/rate.module';
import { FormlyNzSelectModule } from './select/select.module';
import { FormlyNzSliderModule } from './slider/slider.module';
import { FormlyNzSwitchModule } from './switch/switch.module';
import { FormlyNzTabsModule } from './tabs/tabs.module';
import { FormlyNzTimeModule } from './time/time.module';
import { FormlyNzTransferModule } from './transfer/transfer.module';
import { FormlyNzTreeSelectModule } from './tree-select/tree-select.module';
import { FormlyNzUploadModule } from './upload/upload.module';
import { FormlyNzChildtableModule } from "./childtable/childtable.module";
import { FormlyRichModule } from "./rich/rich.module";
// import { FormlyNzStepsModule } from "./steps/steps.module";
import { FormlyNzCollapseModule } from "./collapse/collapse.module";
import { FormlyNzButtonModule } from './button/button.module';

import { FormlyFormTemplateComponent } from "./formly-form-template.component";

@NgModule({
  declarations: [FormlyFormTemplateComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyModule,
    FormlyNzInputModule,
    FormlyNzFormFieldModule,
    FormlyNzChildtableFormFieldModule,
    FormlyNzCascaderModule,
    FormlyNzCheckboxModule,
    FormlyNzRadioModule,
    FormlyNzRateModule,
    FormlyNzSelectModule,
    FormlyNzSliderModule,
    FormlyNzSwitchModule,
    FormlyNzDateModule,
    FormlyNzTimeModule,
    FormlyNzTransferModule,
    FormlyNzTreeSelectModule,
    FormlyNzUploadModule,
    FormlyNzCardModule,
    FormlyNzTabsModule,
    FormlyNzInputGroupModule,
    FormlyNzChildtableModule,
    FormlyRichModule,
    // FormlyNzStepsModule,
    FormlyNzCollapseModule,
    FormlyNzButtonModule,
  ],
  exports: [
    FormlyFormTemplateComponent,
  ],
})
export class FormlyNgZorroModule {}
