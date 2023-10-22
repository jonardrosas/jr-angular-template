import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services';
import { Observable, map } from 'rxjs';
import { ProjectState, PageQuery, DrfResponseState } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private apiService: ApiService) { }

  getProjectIndex(): Observable<PageQuery> {
    return this.apiService.get('pages/?type=projects.ProjectIndexPage&fields=*')
  }

}
