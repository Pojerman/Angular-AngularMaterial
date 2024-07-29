import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogContent } from '@angular/material/dialog';
import { BasicDialogComponent } from './dialogs/basic-dialog/basic-dialog.component';
import { TemplateDialogComponent } from './dialogs/template-dialog/template-dialog.component';
import { TextareaDialogComponent } from './dialogs/textarea-dialog/textarea-dialog.component';
import { ScrollDialogComponent } from './dialogs/scroll-dialog/scroll-dialog.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'app-dialogs-list',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DatepickerComponent,
    MatDialogContent,
  ],
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

  openTemplateDialog() {
    this.dialog.open(TemplateDialogComponent, {
      width: '100%',
      autoFocus: 'dialog',
    });
  }

  openTextAreaDialog() {
    this.dialog.open(TextareaDialogComponent, {
      width: '100%',
      autoFocus: 'dialog',
    });
  }

  openScrollDialog() {
    this.dialog.open(ScrollDialogComponent, {
      width: '100%',
      autoFocus: 'dialog',
    });
  }
}
