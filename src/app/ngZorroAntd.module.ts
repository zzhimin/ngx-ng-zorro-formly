import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NzMessageService } from "ng-zorro-antd/message";
import { NzMentionModule } from "ng-zorro-antd/mention";

import { NzButtonModule } from "ng-zorro-antd/button";
import { IconDefinition } from "@ant-design/icons-angular";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzProgressModule } from "ng-zorro-antd/progress";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzPaginationModule } from "ng-zorro-antd/pagination";
import * as AllIcons from "@ant-design/icons-angular/icons";
import { NzStepsModule } from "ng-zorro-antd/steps";
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
export const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzTreeModule } from "ng-zorro-antd/tree";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzUploadModule } from "ng-zorro-antd/upload";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzTimelineModule } from "ng-zorro-antd/timeline";
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { NzImageModule } from "ng-zorro-antd/image";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzMessageModule } from "ng-zorro-antd/message";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzTransferModule } from "ng-zorro-antd/transfer";
import { NzEmptyModule } from "ng-zorro-antd/empty";
import { NzAutocompleteModule } from "ng-zorro-antd/auto-complete";
import { NzTreeSelectModule } from "ng-zorro-antd/tree-select";
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';

const ngZorroAntdModule: any = [
  NzButtonModule,
  NzMenuModule,
  NzIconModule.forRoot(icons),
  NzToolTipModule,
  NzInputModule,
  NzSliderModule,
  NzDropDownModule,
  NzProgressModule,
  NzLayoutModule,
  NzModalModule,
  NzFormModule,
  NzSelectModule,
  NzGridModule,
  NzDatePickerModule,
  NzTreeModule,
  NzTableModule,
  NzTabsModule,
  NzPaginationModule,
  NzDrawerModule,
  NzInputNumberModule,
  NzSwitchModule,
  NzDividerModule,
  NzUploadModule,
  NzPopconfirmModule,
  NzSpinModule,
  NzTypographyModule,
  NzRadioModule,
  NzSpaceModule,
  NzCollapseModule,
  NzTagModule,
  NzStepsModule,
  NzPopoverModule,
  NzTimelineModule,
  NzCarouselModule,
  NzImageModule,
  NzCardModule,
  NzAvatarModule,
  NzDescriptionsModule,
  NzMessageModule,
  NzMentionModule,
  NzCheckboxModule,
  NzTransferModule,
  NzEmptyModule,
  NzAutocompleteModule,
  NzTreeSelectModule,
  NzAlertModule,
  NzPageHeaderModule,
  NzBadgeModule,
  NzCascaderModule,
  NzListModule,
  NzResultModule,
  NzTreeViewModule,
  NzPaginationModule,
];

@NgModule({
  providers: [NzMessageService],
  declarations: [],
  imports: [
    CommonModule,
    // @ts-ignore
    ...ngZorroAntdModule,
  ],
  exports: [...ngZorroAntdModule],
})
export class NgZorroAntdModule { }
