import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SidenavToggleService} from "../../services/sidenav-toggle/sidenav-toggle.service";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  imports: [
    MatToolbarModule, MatButtonModule, MatIconModule
  ]
})

export class ToolbarComponent {
  constructor(private sidenavToggleService: SidenavToggleService) {}

  toggleSidenav() {
    this.sidenavToggleService.toggle();
  }
}
