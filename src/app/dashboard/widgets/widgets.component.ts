

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {GridsterItem} from '../../lib';
import {GridsterConfigS} from '../../lib/gridsterConfigS.interface';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetsComponent implements OnInit {
  options: GridsterConfigS;
  dashboard: Array<GridsterItem>;
  remove: boolean;

  static eventStop(item, itemComponent, event) {
    console.info('eventStop', item, itemComponent, event);
  }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  static itemInit(item, itemComponent) {
    console.info('itemInitialized', item, itemComponent);
  }

  static itemRemoved(item, itemComponent) {
    console.info('itemRemoved', item, itemComponent);
  }

  static gridInit(grid) {
    console.info('gridInit', grid);
  }

  static gridDestroy(grid) {
    console.info('gridDestroy', grid);
  }

  emptyCellClick(event, item) {
    console.info('empty cell click', event, item);
    this.dashboard.push(item);
  }

  ngOnInit() {
    this.options = {
      gridType: 'fit',
      compactType: 'none',
      initCallback: WidgetsComponent.gridInit,
      destroyCallback: WidgetsComponent.gridDestroy,
      itemChangeCallback: WidgetsComponent.itemChange,
      itemResizeCallback: WidgetsComponent.itemResize,
      itemInitCallback: WidgetsComponent.itemInit,
      itemRemovedCallback: WidgetsComponent.itemRemoved,
      margin: 5,
      outerMargin: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellClickCallback: this.emptyCellClick.bind(this),
      emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
      emptyCellDropCallback: this.emptyCellClick.bind(this),
      emptyCellDragCallback: this.emptyCellClick.bind(this),
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: WidgetsComponent.eventStop
      },
      resizable: {
        delayStart: 0,
        enabled: true,
        stop: WidgetsComponent.eventStop,
        handles: {
          s: true,
          e: true,
          n: true,
          w: true,
          se: true,
          ne: true,
          sw: true,
          nw: true
        }
      },
      api: {
        resize: WidgetsComponent.eventStop,
        optionsChanged: WidgetsComponent.eventStop,
        getNextPossiblePosition: WidgetsComponent.eventStop,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid: 'onDrag&Resize',
      disableWindowResize: false,
      disableWarnings: false,
    };

    this.dashboard = [
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: false, label: 'CUSTOMER', content: '3+/-'},
      {cols: 1, rows: 1, y: 0, x: 1, hasContent: false, label: 'DELIVERIES', content: '12'},
      {cols: 1, rows: 1, y: 0, x: 2, hasContent: false, label: 'COLLECTED', content: '$120,345'},
      {cols: 1, rows: 1, y: 1, x: 0, hasContent: false, label: 'AOR',  content: '356'},
      {cols: 1, rows: 1, y: 1, x: 1, hasContent: false, label: 'SMRR', content: '444'},
      {cols: 1, rows: 1, y: 1, x: 2, hasContent: false, label: 'LATE',  content: '18%'},
      /*{cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, hasContent: true, label: 'Min rows & cols = 2'},
      {cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, hasContent: true, label: 'Max rows & cols = 2'},
      {cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, hasContent: true, label: 'Test'},
      {cols: 1, rows: 1, y: 2, x: 4, dragEnabled: true, resizeEnabled: false, label: 'Deliveries'},
      {cols: 1, rows: 1, y: 2, x: 6, initCallback: WidgetsComponent.itemInit, hasContent: true, hasContent: true, label: 'Min rows & cols = 2'}*/
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }

  destroy() {
    this.remove = !this.remove;
  }
}
