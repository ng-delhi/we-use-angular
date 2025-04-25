import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ThemeService } from "../services/theme";

@Component({
  selector: "cua-header",
  standalone: true,
  template: `
    <header class="header">
      <div class="flex gap-3 items-center">
        <img alt="Angular Logo" src="/cua.webp" class="object-cover overflow-hidden w-10 h-10 aspect-square" />
        <h1 class="text-2xl font-semibold dark:text-white">Angular Companies</h1>
      </div>

      <button (click)="themeService.toggleTheme()" class="theme-btn">
        <i class="fa-solid {{themeService.isDarkMode() ? 'fa-moon' : 'fa-sun'}}"></i>
      </button>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly themeService = inject(ThemeService);
}
