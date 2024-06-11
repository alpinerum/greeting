import { Component, OnInit} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  
@Component ({
  templateUrl: './app/app.component.html',
  selector: 'app-component'
})
/* export class Student {
  studentName: string;
  title: string;
  constructor(studentName:string, title:string) {
    this.studentName = studentName;
    this.title = title;
  }
} */

export class Student {
  studentName = 'John Smith';
}