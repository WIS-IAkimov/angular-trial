import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'card flex-row align-items-center px-5',
  },
})
export class HeaderComponent {

  constructor() { }

}
