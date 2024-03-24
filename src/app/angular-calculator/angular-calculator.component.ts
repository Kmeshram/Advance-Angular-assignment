import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-angular-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular-calculator.component.html',
  styleUrl: './angular-calculator.component.scss'
})
export class AngularCalculatorComponent {

  display: any = '';

  appendToDisplay(value: string): void {
    this.display += value;
  }

  clear(): void {
    this.display = '';
  }

  calculate(): void {
    try {
      this.display =  this.evaluateExpression(this.display);
      if (!isFinite(this.display) || isNaN(this.display)) {
        throw new Error('Invalid operation');
      }
    } catch (error:any) {
      alert(error.message);
    }
  }

  evaluateExpression(expression: string): number {
  const operators = /[+\-*/]/g;
  const parts = expression.split(operators);
  const operator = expression.match(operators);

  if (!operator || parts.length !== 2) {
    throw new Error('Invalid expression');
  }

  const [left, right] = parts.map(parseFloat);
  const op = operator[0];

  switch (op) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      if (right === 0) {
        throw new Error('Division by zero');
      }
      return left / right;
    default:
      throw new Error('Invalid operator');
  }
}
}


