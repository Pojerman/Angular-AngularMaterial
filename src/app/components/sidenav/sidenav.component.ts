import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {Subscription} from "rxjs";
import {SidenavToggleService} from "../../services/sidenav-toggle/sidenav-toggle.service";
import {DrawerListComponent} from "../drawer-list/drawer-list.component";
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {DialogsComponent} from "../dialogs/dialogs.component";
import {SelectedItemService} from "../../services/selected-item/selected-item.service";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  imports: [
    MatSidenavModule,
    DrawerListComponent,
    NgSwitch,
    DialogsComponent,
    NgSwitchCase,
    NgSwitchDefault
  ]
})

export class SidenavComponent implements OnInit{
  @ViewChild('drawer') sidenav!: MatSidenav;
  private toggleSubscription!: Subscription;

  constructor(private sidenavToggleService: SidenavToggleService, protected selectedItemService: SelectedItemService) {}

  ngOnInit() {
    this.toggleSubscription = this.sidenavToggleService.getToggleSubject().subscribe(() => {
      this.sidenav.toggle();
    });
  }


}
