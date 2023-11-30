import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: 'layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {

}
