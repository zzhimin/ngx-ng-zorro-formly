import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import AMapLoader from '@amap/amap-jsapi-loader';
import { debounceTime, map, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { deepClone } from '@core/utils';

@Component({
  selector: 'map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.less']
})
export class MapContainerComponent implements OnInit, OnDestroy {
  @Input() loaction: string;
  @Input() center: any[] = null;
  @Input() zoom: number = 14;
  @Input()
  get addressLocation() {
    return this._addressLocation;
  };
  set addressLocation(newValue) {
    if (newValue && newValue?.lng && newValue?.lat && this.MyMap) {
      this.addMarks(newValue.lng, newValue.lat);
    }
  }
  _addressLocation: { lng: string | number; lat: string | number } = null;

  @Output() address = new EventEmitter();
  @Output() geolocation = new EventEmitter();

  kayArr = [
    '7331c5188b57773d8dd58bfe18fdb0f1',
    '04d0b983fc55f2d2bac58b2239e0ff36',
    '11e478bb205325543cd755fe9d3189f0',
    '3a30ec0b455647b5eecfbd06649dd4c7',
    '724dac95996247c51404d52c78e02829'
 ];
 secretKeyArr = [
   '24b790b1b9b66bd20dbf4159adb1940d',
   '67fb5635d1ddaeafbbed29e59d38c9c8',
   '687ed162700a2cc22a9f4b4abdb0c367',
   '82f41298245a1752267e71c59b391e42',
   'c395f43f3d0d31fa2aaaba5c36fb6846'
 ]
  
  searchText = '';
  mapaddress = {
    lng: '',//经度
    lat: '',//维度
    address: '',//详细地址
    qyaddress: '',//区域地址
  };

  geocoder = null;
  MyMap = null;
  map = null;
  marks = [];
  numberx = this.getRandomNumber();
  mapKey = this.kayArr[0];
  mapSecretKey = this.secretKeyArr[0];
  city = '0591';
  placeSearch: any;

  getRandomNumber() {
    return Math.floor(Math.random() * 5); // 生成0-4的随机整数
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    (window as any)._AMapSecurityConfig = {  // 配置地图加载时所需要的安全配置信息
      securityJsCode: this.mapSecretKey
    }
    this.initMap();
    /**
     * 列表点击后回填数据
     */
    $('body').on('click', '.address-item-container', (e) => {
      const lng = parseFloat($(e.currentTarget).attr('data-location').split(',')[0]);
      const lat = parseFloat($(e.currentTarget).attr('data-location').split(',')[1]);
      const address = $(e.currentTarget).attr('data-address');
      const qyaddress = $(e.currentTarget).attr('data-qyaddress');
      this.mapaddress.lng = $(e.currentTarget).attr('data-location').split(',')[0];
      this.mapaddress.lat = $(e.currentTarget).attr('data-location').split(',')[1];
      this.mapaddress.address = address;
      this.mapaddress.qyaddress = qyaddress;
      if (lat && lng) {
        this.addMarksx(lng , lat);
      }
      let childElement = e.currentTarget.querySelector('.address-text');
      let childElement2 = e.currentTarget.querySelector('.address-detail-text');
      $('.address-item-container .address-text').removeClass('address-text-checked');
      $('.address-item-container .address-detail-text').removeClass('address-text-checked');
      $(childElement).addClass('address-text-checked');
      $(childElement2).addClass('address-text-checked');
    });
    
  }
  ngOnDestroy(): void {
    // this.map.destroy();
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchAdress(input.value);
  }


  initMap() {
    try {
      AMapLoader.load({
        key: this.mapKey, // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.PlaceSearch', 'AMap.Geocoder'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.MyMap = AMap
          this.map = new AMap.Map("gd_map_d", {
            // 设置地图容器id
            viewMode: "3D", // 是否为3D地图模式
            zoom: this.zoom, // 初始化地图级别
            center: this.center, // 初始化地图中心点位置
          });
          this.geocoder = new AMap.Geocoder();  // 创建地址解析器
          const { lng, lat } = this.addressLocation || {};
          if (lat && lng) {
            this.map.remove(this.marks)
            this.addMarks(lng, lat);
            // this.getNewLocation(lng , lat)
          }
          // 点击事件
          this.map.on('click', (result) => {
            this.map.remove(this.marks);
            const { lnglat } = result
            this.geolocation.emit({
              longitude: lnglat.lng,//经度
              latitude: lnglat.lat//维度
            })
            this.addMarks(lnglat.lng, lnglat.lat);
            const rel = this.getNewLocation(lnglat.lng , lnglat.lat);
            rel.subscribe((res: any) => {
                if ("1" === res.status && "OK" === res.info && res.regeocode) {
                  var listdiv = document.getElementById('list');
                  var regeocode = deepClone(res.regeocode) || {}
                  const detailAddress =  regeocode.addressComponent.province+regeocode.addressComponent.city+regeocode.addressComponent.district+regeocode.addressComponent.township
                  const tempArr = res.regeocode.pois;
                  if (tempArr) {
                    listdiv.innerHTML = '';//清空location
                    tempArr.forEach((item , index) => {
                      var docuElement
                      if (index == 0) {
                        docuElement = `
                          <div class='address-item-container' data-address = `+detailAddress + item.address+` data-location = `+item.location+` data-name = `+item.name+` data-qyaddress = `+item.name+`>
                            <div class='address-text-container'>
                                <div class='address-text address-text-checked'>
                                  `+ item.name +`
                                </div>`+
                                `<div class="address-detail-text address-text-checked">`+ detailAddress + item.address + `</div>`+
                            `</div>
                          </div>
                        `
                        //点击地图后第一次赋值
                        this.mapaddress.lng = item.location.split(',')[0];
                        this.mapaddress.lat = item.location.split(',')[1];
                        this.mapaddress.address = detailAddress + item.address;
                        this.mapaddress.qyaddress = item.name;
                      } else {
                        docuElement = `
                          <div class='address-item-container' data-address = `+detailAddress + item.address+` data-location = `+item.location+` data-name = `+item.name+` data-qyaddress = `+item.name+`>
                            <div class='address-text-container'>
                                <div class='address-text'>
                                  `+ item.name +`
                                </div>`+
                                `<div class="address-detail-text">`+ detailAddress + item.address + `</div>`+
                            `</div>
                          </div>
                        `
                      }
                      listdiv.innerHTML += docuElement;
                    })
                  }

                }
            })
          })
          this.placeSearch = new this.MyMap.PlaceSearch({
            pageSize: 5, // 单页显示结果条数
            pageIndex: 1, // 页码
            city: this.city, // 兴趣点城市
            citylimit: false,  //是否强制限制在设置的城市内搜索
            map: this.map, // 展现结果的地图实例
            panel: 'list', // 结果列表将在此容器中进行展示。
            autoFitView: false // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
          })
          this.placeSearch.on('selectChanged', (result) => {
            // 处理选中的搜索结果
            const { data } = result.selected
            const address = data.pname + data.cityname + data.adname + data.address + '-' + data.name;
            this.mapaddress.qyaddress = data.name;//区域地址
            this.address.emit(address);
            this.mapaddress.lng = data.entr_location?.lng;//经度
            this.mapaddress.lat = data.entr_location?.lat;//维度
            this.mapaddress.address = address;//详细地址
            this.geolocation.emit({
              longitude: data.entr_location?.lng,
              latitude: data.entr_location?.lat
            });
            // this.map.setFitView();
          })
        })
        .catch((e) => {
          console.log('e', e);
        });
    } catch (error) {
      console.log('error', error);

    }

  }

  addMarksx(lng, lat) {
    this.map.remove(this.marks)
    const marker = new this.MyMap.Marker({
      position: [lng, lat],   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    });
    this.marks.push(marker);
    if (this.map) {
      this.map.add(marker);
    }
    // this.map.setFitView();
  }

  addMarks(lng, lat) {
    this.map.remove(this.marks)
    const marker = new this.MyMap.Marker({
      position: [lng, lat],   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    });
    this.marks.push(marker);
    this.map.add(marker)
    this.getAddress(lng, lat)
    return this.marks
  }
  /**
   * 根据条件搜索查询
   * @param obj 
   */
  locationSearch(obj: any) {
    this.searchAdress(obj);
  }

  searchAdress = (address) => {
    this.placeSearch.search(address, (status, result) => {
      // 将视角定位到搜索的位置
      // this.searchResult = result.info
    });
  }

  // 通过经纬获取地址信息
  getAddress = (lng, lat) => {
    this.geocoder.getAddress([lng, lat], (status, result) => {
      this.mapaddress.lng = lng;//经度
      this.mapaddress.lat = lat;//维度
      this.mapaddress.address = result.regeocode?.formattedAddress;//详细地址
      this.searchAdress(this.mapaddress.address);
      this.address.emit(result.regeocode?.formattedAddress ?? '')
    })
  }

  getNewLocation(lng , lat) {
    const code = lng+','+lat;
    return this.http.get('https://restapi.amap.com/v3/geocode/regeo?key=71857d55f5d821fa77f7ef31c23327d2&extensions=all&location='+code);
  }

  ngAfterViewInit() {
    
  }

}
