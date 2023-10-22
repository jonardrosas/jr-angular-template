import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from '../../../core/services';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public offset = new Subject();

  constructor(public apiService: ApiService) {}

  getObject(): Observable<any> {
    return this.apiService.get('pages/3/')
  }

}
