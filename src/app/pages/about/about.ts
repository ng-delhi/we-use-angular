import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'about',
  template: `<h1>About</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
}
