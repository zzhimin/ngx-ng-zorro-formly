import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class AreaProvinceService {
  constructor(private http: HttpClient) { }

  // 获取地址
  public getAreaProvince() {
    return this.http.get('/gapi/smdx/area/queryProvince');
  }

  // 获取行政区
  public getAreaByParent(parentId?) {
    return this.http.get('/gapi/smdx/area/queryByParent?parentId=' + parentId);
  }
}

