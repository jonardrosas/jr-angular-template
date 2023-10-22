import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services';
import { DrfResponseState } from './../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }

  getObject(): Observable<DrfResponseState> {
    return this.apiService.get('about/index/')
  }

}
