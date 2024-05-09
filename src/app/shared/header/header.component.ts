import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public active: boolean = false

  setActiveNav() : void {
    this.active = !this.active
  }
}
