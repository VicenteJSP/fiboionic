import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  resultados: Array<Resultado>;

  constructor() { this.borrarResultados() }

  generarFibonacci(numero: number) {
    this.resultados.push({ numero, resultado: this.fibonacci(numero), tipo: 'Fibonacci' })
  }
  generarFactorial(numero: number) {
    this.resultados.push({ numero, resultado: this.factorial(numero), tipo: 'Factorial' })
  }

  fibonacci(n: number): number {
    n = Number(n);
    if (n < 2) {
      return n
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2)
    }
  }

  factorial(n: number): number {
    if (n == 0) {
      return 1
    } else {
      return Number(n) * this.factorial(n - 1)
    }
  }

  borrarResultados() { this.resultados = [] }

}

interface Resultado {
  numero: number;
  resultado: number;
  tipo: 'Fibonacci' | 'Factorial';
}