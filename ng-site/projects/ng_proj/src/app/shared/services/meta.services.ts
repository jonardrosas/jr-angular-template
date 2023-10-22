import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import { Observable } from 'rxjs';
import { DrfResponseState } from './../models/meta'

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private apiService: ApiService) { }

  getMeta(): Observable<DrfResponseState> {
    return this.apiService.get('base/meta/')
  }

  getFooter(): Observable<DrfResponseState> {
    return this.apiService.get('base/footer/')
  }

}
