import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProjectsService } from '../../services/projects.service';
import { IProject } from '../../interfaces/project.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProjectsService],
  host: {
    class: 'd-block container',
  }
})
export class MainContainer implements OnInit {

  public projects$: Observable<IProject[]>;

  constructor(
    private readonly _projectsService: ProjectsService,
  ) { }

  public ngOnInit() {
    this.projects$ = this._projectsService.getProjects();
  }

}
