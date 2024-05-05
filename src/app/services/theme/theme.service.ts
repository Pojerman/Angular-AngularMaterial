import {Injectable} from "@angular/core";
import {PREFERS_COLOR_SCHEME, THEME_KEY} from "../consts/consts";
import {ThemeEnum} from "../enums/theme.enum";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class ThemeService {
  private selectedThemeSubject: BehaviorSubject<string>;
  selectedTheme$: Observable<string>;

  constructor() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    this.selectedThemeSubject = new BehaviorSubject<string>(savedTheme || this.getSystemTheme());
    this.selectedTheme$ = this.selectedThemeSubject.asObservable();
    this.applyTheme(this.selectedThemeSubject.value);
  }

  private getSystemTheme(): string {
    return window.matchMedia(PREFERS_COLOR_SCHEME).matches ? ThemeEnum.Light : ThemeEnum.Dark;
  }

  private applyTheme(theme: string) {
    document.body.setAttribute('class', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  toggleTheme() {
    const currentTheme = this.selectedThemeSubject.value === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light;
    this.selectedThemeSubject.next(currentTheme);
    this.applyTheme(currentTheme);
  }
}
