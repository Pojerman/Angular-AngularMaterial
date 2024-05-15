import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { BasicDialogComponent } from './dialogs/basic-dialog/basic-dialog.component';

@Component({
  selector: 'app-dialogs-list',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './dialogs-list.component.html',
  styleUrl: './dialogs-list.component.scss',
})
export class DialogsListComponent {
  constructor(public dialog: MatDialog) {}

  openBasicDialog() {
    this.dialog.open(BasicDialogComponent, {
      width: '100%',
      autoFocus: 'dialog',
    });
  }
}