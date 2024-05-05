import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {Subscription} from "rxjs";
import {SidenavToggleService} from "../../services/sidenav-toggle/sidenav-toggle.service";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  imports: [
    MatSidenavModule
  ]
})

export class SidenavComponent implements OnInit{
  @ViewChild('drawer') sidenav!: MatSidenav;
  private toggleSubscription!: Subscription;

  constructor(private sidenavToggleService: SidenavToggleService) {}

  ngOnInit() {
    this.toggleSubscription = this.sidenavToggleService.getToggleSubject().subscribe(() => {
      this.sidenav.toggle();
    });
  }


}
