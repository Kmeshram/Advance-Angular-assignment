import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-angularmaterialtable',
  standalone: true,
  imports: [[MatTableModule, CurrencyPipe]],
  templateUrl: './angularmaterialtable.component.html',
  styleUrl: './angularmaterialtable.component.scss'
})
export class AngularmaterialtableComponent {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
