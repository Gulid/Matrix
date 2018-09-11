import {Component, OnInit, OnChanges} from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {$MINUS} from 'codelyzer/angular/styles/chars';
import {BrowserModule} from '@angular/platform-browser';
// import {index} from '@angular/cli/lib/cli';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [BrowserModule, FormsModule]
})


export class AppComponent implements OnInit, OnChanges {
  arr;
  arr2;
  arr3;
  mass;
  mass2;
  minStolb;
  minStrok;
  sel;

  model: any = [[]];
  model2: any = [[]];
  model3 = [];
  a = 1;
  b = 1;
  c = 1;
  d = 1;

  constructor() {
  }

  ngOnInit() {
    this.createMatrix(1, 1);  // загрузка страницы. Сразу после запуск функции.
    this.createMatrix2(1, 1);
  }

  ngOnChanges() {
  }

  // создание первой матрицы

  createMatrix(a, b) {  // создание двумерного массива с "а"(кол-во массивов внутри) и "в" (кол-во элементов внутри каждого внутреннего массива)
    this.arr = new Array(a);
    for (let i = 0; i < a; i++) {
      this.arr[i] = new Array(b);
    }
    console.log(this.arr);
  }

  bClick() {
    this.a += 1;
    this.createMatrix(this.a, this.b);
    this.model.push([]);

  }

  rClick() {
    this.b += 1;
    this.createMatrix(this.a, this.b);
  }

  //создание второй матрицы

  createMatrix2(c, d) {  // создание двумерного массива с "а"(кол-во массивов внутри) и "в" (кол-во элементов внутри каждого внутреннего массива)
    this.arr2 = new Array(c);
    for (let i = 0; i < c; i++) {
      this.arr2[i] = new Array(d);
    }
    console.log(this.arr2);

  }

  bClick2() {
    this.c += 1;
    this.createMatrix2(this.c, this.d);
    this.model2.push([]);

  }

  rClick2() {
    this.d += 1;
    this.createMatrix2(this.c, this.d);
  }

  test() {

  }

  createMatrix3() {
    this.minStrok = Math.min.apply(null, [this.arr.length, this.arr2.length]);
    this.minStolb = Math.min.apply(null, [this.arr[0].length, this.arr2[0].length]);

    console.log(this.minStrok, this.minStolb);
    this.arr3 = new Array(this.minStrok);
    for (let i = 0; i < this.minStrok; i++) {
      this.arr3[i] = new Array(this.minStolb);

    }


  }


  onSelect() {
    switch (this.sel) {
      case 'sum':

        this.createMatrix3();
        console.log('sum');
        //
        for (let i = 0; i < this.minStrok; i++) {
          console.log(this.minStolb, 'ta1.length')
          this.model3.push([]);
          for (let j = 0; j < this.minStolb; j++) {
            this.model3[i].push(parseInt(this.model[i][j]) + parseInt(this.model2[i][j]));
          }
        }
        break;
      case 'minus':
        this.createMatrix3();
        for (let i = 0; i < this.minStrok; i++) {
          console.log(this.minStolb, 'ta1.length')
          this.model3.push([]);
          for (let j = 0; j < this.minStolb; j++) {
            this.model3[i].push(parseInt(this.model[i][j]) - parseInt(this.model2[i][j]));
          }
          console.log('minus');

        }
        break;

      case 'multy':
        this.createMatrix3();
        for (let i = 0; i < this.minStrok; i++) {
          console.log(this.minStolb, 'ta1.length')
          this.model3.push([]);
          for (let j = 0; j < this.minStolb; j++) {
            this.model3[i].push(parseInt(this.model[i][j]) * parseInt(this.model2[i][j]));
          }
          console.log('multy');
        }
        break;


      case 'del':
        this.createMatrix3();
        for (let i = 0; i < this.minStrok; i++) {
          console.log(this.minStolb, 'ta1.length')
          this.model3.push([]);
          for (let j = 0; j < this.minStolb; j++) {
            this.model3[i].push(parseInt(this.model[i][j]) / parseInt(this.model2[i][j]));
          }
          console.log('del');
        }
        break;
    }
  }
}






