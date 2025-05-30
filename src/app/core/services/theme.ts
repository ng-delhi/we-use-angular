
import { Injectable, computed, effect, inject, signal, DOCUMENT } from '@angular/core';
import { CUA_THEME_KEY } from '../../app.constants';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private darkMode = signal<boolean>(this.initializeTheme());
  readonly isDarkMode = computed(() => this.darkMode());

  constructor() {
    effect(() => {
      this.setTheme(this.darkMode() ? 'dark' : 'light');
    });
  }

  private initializeTheme(): boolean {
    const savedTheme = localStorage.getItem(CUA_THEME_KEY);
    if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }

    return savedTheme === 'dark';
  }

  private setTheme(theme: Theme): void {
    const { classList } = this.document.documentElement;

    if (theme === 'dark') {
      classList.add('dark');
      localStorage.setItem(CUA_THEME_KEY, 'dark');
    } else {
      classList.remove('dark');
      localStorage.setItem(CUA_THEME_KEY, 'light');
    }
  }

  toggleTheme(): void {
    this.darkMode.update((current) => !current);
  }
}
