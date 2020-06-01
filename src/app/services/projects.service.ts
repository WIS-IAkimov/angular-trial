import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { PROJECTS } from '../mock-api/projects';
import { IProject } from '../interfaces/project.interface';


@Injectable()
export class ProjectsService {

  constructor() { }

  public getProjects(): Observable<IProject[]> {
    return of(PROJECTS);
  }
}
