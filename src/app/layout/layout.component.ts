import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MatGridListModule, SidebarComponent],
  templateUrl: 'layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {

}
