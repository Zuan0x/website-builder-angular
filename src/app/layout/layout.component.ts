

import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem
} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from '../sidebar/sidebar.component';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css'],
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatGridListModule, CdkDropListGroup, CdkDropList, CdkDrag, SidebarComponent, CommonModule],
})
export class LayoutComponent {
  components = ['text', 'image', 'card'];

  design = [];

  drop(event: CdkDragDrop<string[]>) {
    if(event.container.id !== "components"){
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
    }
  }
}
