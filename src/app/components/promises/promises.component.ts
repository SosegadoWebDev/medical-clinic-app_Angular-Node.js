import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const promise = new Promise((resolve, reject) => {
      resolve('promise works');
    });

    promise.then((resp) => console.log(resp))
    promise.catch((err) => console.log(err));

    this.getUsers().then((response) => console.log(response));
  }

  public getUsers(): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    });
  }
}
