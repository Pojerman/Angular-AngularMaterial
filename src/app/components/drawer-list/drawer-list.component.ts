import { Component, OnInit, ViewChild } from '@angular/core';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { ListItemsEnum } from '../../services/enums/list-items.enum';
import { SelectedItemService } from '../../services/selected-item/selected-item.service';
import { SidenavToggleService } from '../../services/sidenav-toggle/sidenav-toggle.service';

@Component({
  selector: 'app-drawer-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './drawer-list.component.html',
  styleUrl: './drawer-list.component.scss',
})
export class DrawerListComponent implements OnInit {
  @ViewChild('drawerList') selectionList!: MatSelectionList;
  listItems: Array<string> = Array.from(Object.values(ListItemsEnum));
  selectionItem: string | undefined;

  constructor(
    private selectedItemService: SelectedItemService,
    private sidenavToggleService: SidenavToggleService
  ) {}

  ngOnInit() {
    this.selectionItem = this.selectedItemService.getSelectedItem();
  }

  onSelectionChange() {
    this.selectedItemService.setSelectedItem(
      this.selectionList.selectedOptions.selected[0].value
    );
    this.sidenavToggleService.toggle();
  }
}
