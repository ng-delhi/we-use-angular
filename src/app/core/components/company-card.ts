import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Company } from '../types/company';
import { ThemeService } from '../services/theme';
import { TECH_ICON_CLASSES } from '../types/techiconmapping';

@Component({
  selector: 'company-card',
  template: `
    <article
      class="flex flex-col gap-6 justify-between items-start p-6 mx-auto my-0 h-full w-full rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out max-w-[360px] sm:min-w-[360px] flex-shrink-0 shadow-md hover:shadow-lg dark:bg-[#151b23]"
    >
      <header class="flex flex-col gap-6 w-full">
        <h2 class="text-xl font-semibold">{{ company().name }}</h2>

        <div class="w-full">
          <h3 class="text-sm font-medium text-gray-600 dark:text-gray-400">Tech Stack</h3>
          <div class="flex flex-wrap gap-2 mt-2">
            @for (tech of company().techStack; track tech) {
              <span
                class="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-xl dark:bg-gray-800 dark:text-gray-200"
              >
                <i [class]="getIconsClass(tech)"></i>
                {{ tech }}
              </span>
            }
          </div>
        </div>
      </header>

      <section class="w-full flex flex-col gap-4">
        <div class="w-full">
          <h3 class="text-sm font-medium text-gray-600 dark:text-gray-400">Work Mode</h3>
          <p class="mt-1 text-gray-800 dark:text-gray-200">{{ company().workMode }}</p>
        </div>

        <div class="flex flex-col gap-3 pt-4 w-full md:flex-row">
          <a
            class="py-3 text-base font-medium text-center text-white no-underline bg-[#dd0031] hover:bg-[#c3002f] rounded-md transition-colors duration-200 w-full md:w-1/2"
            target="_blank"
            rel="noopener noreferrer"
            [href]="company().careerSite"
          >
            Careers
          </a>
          <a
            class="py-3 text-base font-medium text-center text-white no-underline rounded-md transition-colors bg-[#3a3a3a] hover:bg-[#2a2a2a] duration-200 w-full md:w-1/2"
            target="_blank"
            rel="noopener noreferrer"
            [href]="company().companySite"
          >
            Company Site
          </a>
        </div>
      </section>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyCardComponent {
  company = input.required<Company>();
  readonly themeService = inject(ThemeService);

  getIconsClass(tech: string): string {
    return TECH_ICON_CLASSES[tech.toLowerCase()] || '';
  }
}
