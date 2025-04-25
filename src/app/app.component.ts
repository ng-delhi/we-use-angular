import { Component } from '@angular/core';
import { Header } from "./core/components/header";
import { Footer } from "./core/components/footer";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <cua-header />
    <main class="main">
      <router-outlet />
    </main>
    <cua-footer />
  `,
  host: {
    class: 'cua-ui'
  }
})
export class AppComponent {
}
