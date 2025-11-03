import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TabPanel} from '../tab-panel/tab-panel';

@Component({
  selector: 'app-tab-group',
  imports: [],
  templateUrl: './tab-group.html',
  standalone: true,
  styleUrl: './tab-group.css'
})
export class TabGroup {
  tabPanelList: TabPanel[] = [];
  @Input() activeIndex = 0;
  @Output() onActiveChange: EventEmitter<number> = new EventEmitter<number>();
  selectItem(index: number) {
    this.activeIndex = index;
    this.onActiveChange.emit(this.activeIndex);
  }
  removeItem(tab: TabPanel) {
    let index = -1;
    const newList: TabPanel[] = [];
    this.tabPanelList.forEach((tabPanel: TabPanel, idx) => {
      if(tab===tabPanel){
        index = idx;
        return
      }
      newList.push(tabPanel);
    })
    this.tabPanelList = newList;
    if(index !== -1) {
      this.selectItem(0);
    }
  }
  addTabPanel(tab: TabPanel) {
    this.tabPanelList.push(tab);
  }
}
