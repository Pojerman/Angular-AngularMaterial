import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormField,
  MatLabel,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { profileForm } from '../../../../services/interfaces/dialogs';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-textarea-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatDivider,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  templateUrl: './textarea-dialog.component.html',
  styleUrl: './textarea-dialog.component.scss',
})
export class TextareaDialogComponent {
  constructor(public dialogRef: MatDialogRef<TextareaDialogComponent>) {}

  profileForm = new FormGroup(<profileForm>{
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  onSave() {
    this.dialogRef.close();
  }
}
