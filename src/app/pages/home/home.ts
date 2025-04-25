import { ChangeDetectionStrategy, Component, computed, resource, signal } from "@angular/core";
import { CompanyCardComponent } from "../../core/components/company-card";
import { Company } from "../../core/types/company";
import { SearchCompany } from "../../core/components/search-company";
@Component({
  selector: 'home',
  template: `
    <search-company (searchQueryChange)="onSearchQueryChange($event)" />
    <section class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
    defaultValue: []
  })
  filteredCompanies = computed(() => {
    return this.companies.value().filter(company => {
      return company.name.toLowerCase().includes(this.searchQuery().toLowerCase());
    });
  })
  searchQuery = signal('');

  onSearchQueryChange(searchQuery: string) {
    this.searchQuery.set(searchQuery);
  }
}
