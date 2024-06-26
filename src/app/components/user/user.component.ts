import { Component } from '@angular/core';
import { PeriodicElement, TableComponent } from '../table/table.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  columnsToDisplay = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  ];
}
