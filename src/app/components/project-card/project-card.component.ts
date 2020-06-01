import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
export class ProjectCardComponent implements OnInit {

  @Input()
  public project: IProject;

  constructor() { }

  ngOnInit(): void {
  }

}
