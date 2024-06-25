import { Component, Input } from '@angular/core';
import { AngularMaterialModule } from '../../modules/material.module';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() columnsToDisplay: string[] = [];
  @Input() dataSource: PeriodicElement[] = [];
}
