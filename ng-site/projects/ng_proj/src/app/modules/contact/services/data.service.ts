import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services';
import { Observable } from 'rxjs';
import { DrfResponseState } from './../models'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }

  getObject(): Observable<DrfResponseState> {
    return this.apiService.get('contacts/index/')
  }
}
