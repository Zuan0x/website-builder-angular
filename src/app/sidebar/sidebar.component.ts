import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="sidebar-background">
    <h3 style='padding: 14px'>Components</h3>
    <button class="sidebar-button" type="button">Text</button>
    <button class="sidebar-button" type="button">Images</button>
    <button class="sidebar-button" type="button">Card</button>
    </div>
    
  `,
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

}
