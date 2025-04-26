import { ChangeDetectionStrategy, Component, computed, resource, signal } from '@angular/core';
import { CompanyCardComponent } from '../../core/components/company-card';
import { Company } from '../../core/types/company';
import { SearchCompany } from '../../core/components/search-company';
@Component({
  selector: 'home',
  template: `
    <search-company (searchQueryChange)="onSearchQueryChange($event)" />
    <section class="grid gap-8 grid-cols-3 max-lg:grid-cols-2 max-sm:!grid-cols-1">
    @for (company of filteredCompanies(); track company.name) {
      <company-card [company]="company" />
    } 
    </section>
  `,
  imports: [CompanyCardComponent, SearchCompany],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Home {
  companies = resource<Company[], unknown>({
    loader: async () => {
      const response = await fetch('/data/companies.json');
      return response.json();
    },
    defaultValue: [],
  });
  filteredCompanies = computed(() => {
    return this.companies.value().filter((company) => {
      return company.name.toLowerCase().includes(this.searchQuery().toLowerCase());
    });
  });
  searchQuery = signal('');

  onSearchQueryChange(searchQuery: string) {
    this.searchQuery.set(searchQuery);
  }
}
