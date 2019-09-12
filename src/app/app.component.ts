import { Component } from '@angular/core';

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

  constructor(){
    this.courseName = "Angular 8";
    console.log(`This is my component's TS file. My name is ${this.name}`);
  }
}



