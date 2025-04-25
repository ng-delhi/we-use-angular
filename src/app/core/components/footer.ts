import { Component, inject, signal } from "@angular/core";
import { ThemeService } from "../services/theme";

@Component({
  selector: "cua-footer",
  template: `
    <footer class="footer">
      <p class="text-sm text-black dark:text-[#dbdbdb]">
        © {{ currentYear() }} Angular Companies. All rights reserved.
      </p>
    </footer>
  `,
})
export class Footer {
  readonly currentYear = signal(new Date().getFullYear());
  readonly themeService = inject(ThemeService);
}
