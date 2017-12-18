import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

/**
 * @title Table with sorting
 */
export class GridComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'John', weight: 1.0079, symbol: '8'},
  {position: 2, name: 'Jerry', weight: 4.0026, symbol: '3'},
  {position: 3, name: 'Jason', weight: 6.941, symbol: '2'},
  {position: 4, name: 'Julie', weight: 9.0122, symbol: '5'},
  {position: 5, name: 'Jack', weight: 10.811, symbol: '4'},
  {position: 6, name: 'Johnny', weight: 12.0107, symbol: '1'},
  {position: 7, name: 'James', weight: 14.0067, symbol: '2'},
  {position: 8, name: 'Jesus', weight: 15.9994, symbol: '3'},
  {position: 9, name: 'Jill', weight: 18.9984, symbol: '9'},
  {position: 10, name: 'Jeremy', weight: 20.1797, symbol: '7'},
  {position: 11, name: 'Jeff', weight: 22.9897, symbol: '6'},
  {position: 12, name: 'Jessie', weight: 24.305, symbol: '3'},
  {position: 13, name: 'Jacob', weight: 26.9815, symbol: '3'},
  {position: 14, name: 'Jarod', weight: 28.0855, symbol: '5'},
  {position: 15, name: 'Judah', weight: 30.9738, symbol: '6'},
  {position: 16, name: 'Josh', weight: 32.065, symbol: '7'},
  {position: 17, name: 'Juan', weight: 35.453, symbol: '8'},
  {position: 18, name: 'Jones', weight: 39.948, symbol: '9'},
  {position: 19, name: 'Joel', weight: 39.0983, symbol: '11'},
  {position: 20, name: 'Julian', weight: 40.078, symbol: '12'},
];

