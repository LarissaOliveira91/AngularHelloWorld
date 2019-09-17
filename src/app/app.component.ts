import { Component } from '@angular/core';
import { timingSafeEqual } from 'crypto';

/** 
 * @author Larissa Oliveira
 * @exercise HelloWorld
 * @date 09-12-2019
 **/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World from WMAD Class 2020';
  name = 'Larissa';
  courseName = 'Alt Web - Angular';
  myCollection = [3, 4, 5, 6, 7, 8, 9, 10];
  count = '';
  students = ['Camille', 'Kevin', 'Roman'];

  constructor() {
    this.courseName = "Angular 8";
    console.log(`This is my component's TS file. My name is ${this.name}`);
    this.loopCount();
  }

  loopCount() {
    for (let i = 0; i < this.myCollection.length; i++) {
      this.count += this.myCollection[i] + ' ';
    }

    this.myCollection.forEach(n => { this.count = this.count + ' ' + n });
  }
}



