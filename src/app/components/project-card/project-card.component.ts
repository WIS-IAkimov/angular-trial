import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IProject } from '../../interfaces/project.interface';


@Component({
  selector: 'app-project',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'd-flex',
  },
})
export class ProjectCardComponent {

  @Input()
  public project: IProject;

  constructor() { }

}
