import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainer {

  constructor() { }

}
