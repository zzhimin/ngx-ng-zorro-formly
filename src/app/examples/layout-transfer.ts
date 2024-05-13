import { TransferItem } from "ng-zorro-antd/transfer";
import { guid } from "projects/ng-zorro-formly/src/lib/utils";

export const layoutTransfer = {
  name: '布局-穿梭框',
  config: [
    {
      template: '<div><strong>基本使用</strong></div>'
    },
    {
      key: guid(),
      type: 'transfer',
      className: 'ant-col  ant-col-24',
      defaultValue: ['1', '2', '3'],
      templateOptions: {
        label: '穿梭框',
        required: true,
        grid: {
          label: {
            span: 6
          },
          control: {
            span: 18
          }
        },
        transfer: {
          dataSource: (() => {
            let list = [];
            for (let i = 0; i < 20; i++) {
              list.push({
                key: i.toString(),
                title: `content${i + 1}`,
                disabled: i % 3 < 1
              });
            }
            return list;
          })(),
          targetKeys: ['4', '5'],
          resutlMap: (items: TransferItem[]) => {
            return items.map((x) => x.key);
          },
        },
      },
    },
  ]
}