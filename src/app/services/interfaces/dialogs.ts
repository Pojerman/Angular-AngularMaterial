import { FormControl } from '@angular/forms';

export interface profileForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  about?: FormControl<string>;
  phone?: FormControl<string>;
  description?: FormControl<string>;
}
