import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, LayoutComponent, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo-text.png" alt="logo" aria-hidden="true" height="60px"/>
          <button class="secondary" type="button">Home</button>
          <button class="secondary" type="button">Templates</button>
          <button class="secondary" type="button">Pages</button>
        </header>
      </a>
      <section class="content">
        <app-layout></app-layout>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}