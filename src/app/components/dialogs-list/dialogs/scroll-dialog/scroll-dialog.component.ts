import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-scroll-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatDivider,
    MatButton
  ],
  templateUrl: './scroll-dialog.component.html',
  styleUrl: './scroll-dialog.component.scss'
})
export class ScrollDialogComponent {
  constructor(public dialogRef: MatDialogRef<ScrollDialogComponent>) {}

  onSave() {
    this.dialogRef.close();
  }
}
