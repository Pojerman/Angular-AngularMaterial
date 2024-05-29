import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { profileForm } from '../../../../services/interfaces/dialogs';

@Component({
  selector: 'app-template-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatDivider,
    MatFormField,
    MatInput,
    MatLabel,
    MatSlideToggle,
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './template-dialog.component.html',
  styleUrl: './template-dialog.component.scss',
})
export class TemplateDialogComponent {
  constructor(public dialogRef: MatDialogRef<TemplateDialogComponent>) {}

  profileForm = new FormGroup(<profileForm>{
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  onSave() {
    console.log(this.profileForm.value);
    this.dialogRef.close();
  }
}
