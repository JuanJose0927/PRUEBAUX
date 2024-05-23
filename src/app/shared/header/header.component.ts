import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public active: boolean = false

  setActiveNav(): void {
    console.log('setActiveNav() ejecutado');
    this.active = !this.active;
  }

   
  // changeLanguage(event: Event) {
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   if (selectedValue) {
  //     this.translate.use(selectedValue);
  //   }
  // }
}
