import { Component } from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-dialogs',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './dialogs.component.html',
  styleUrl: './dialogs.component.scss'
})
export class DialogsComponent {

}
