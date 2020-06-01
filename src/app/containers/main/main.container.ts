import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ProjectsService } from '../../services/projects.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProjectsService],
})
export class MainContainer {

  constructor() { }

}
