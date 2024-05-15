import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavToggleService } from '../../services/sidenav-toggle/sidenav-toggle.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
})
export class ToolbarComponent {
  constructor(
    private sidenavToggleService: SidenavToggleService,
    private themeService: ThemeService
  ) {}

  toggleSidenav() {
    this.sidenavToggleService.toggle();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
