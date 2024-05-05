import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SelectedItemService {
  private selectedItem: string | undefined;

  setSelectedItem(item: string) {
    this.selectedItem = item;
  }

  getSelectedItem(): string | undefined {
    return this.selectedItem;
  }
}
