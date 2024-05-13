import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { NzButtonModule } from "ng-zorro-antd/button";
import { IconDefinition } from "@ant-design/icons-angular";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzFormModule } from "ng-zorro-antd/form";
import * as AllIcons from "@ant-design/icons-angular/icons";
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
export const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzSliderModule } from "ng-zorro-antd/slider";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzDrawerModule } from "ng-zorro-antd/drawer";

const ngZorroAntdModule: any = [
  NzButtonModule,
  NzIconModule.forRoot(icons),
  NzSliderModule,
  NzLayoutModule,
  NzModalModule,
  NzFormModule,
  NzTabsModule,
  NzDrawerModule,
];

@NgModule({
  providers: [],
  declarations: [],
  imports: [
    CommonModule,
    // @ts-ignore
    ...ngZorroAntdModule,
  ],
  exports: [...ngZorroAntdModule],
})
export class NgZorroAntdModule { }
