import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {

  public active : boolean = false

  setActive() : void{
    this.active = !this.active
  }

}

