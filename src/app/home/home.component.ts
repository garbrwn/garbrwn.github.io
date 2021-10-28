import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  tiles: Tile[] = [
    {text: "An online diary", cols: 3, rows: 1, color: 'lightblue', img: ''},
    {text: 'Two', cols: 1, rows: 2, color: '#cdcdcd', img: ''},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', img: ''},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', img: './assets/img/BrokenRobot.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
