import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldAppearance, MatFormFieldModule} from "@angular/material/form-field";
import {MatDividerModule} from "@angular/material/divider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {profileForm} from "../../../../services/interfaces/dialogs";

@Component({
  selector: 'app-basic-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, MatSlideToggleModule, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './basic-dialog.component.html',
  styleUrl: './basic-dialog.component.scss'
})
export class BasicDialogComponent {
  isDisabledDivider: boolean = false;
  selectedAppearance: MatFormFieldAppearance = 'outline';

  constructor(public dialogRef: MatDialogRef<BasicDialogComponent>) {
  }

  profileForm = new FormGroup(<profileForm>{
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  })

  updateAppearance(value: boolean) {
    this.selectedAppearance = value ? 'fill' : 'outline';
  }

  onSave() {
    console.log(this.profileForm.value);
    this.dialogRef.close();
  }
}
