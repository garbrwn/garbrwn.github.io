import { Component, OnInit } from '@angular/core';

interface Post
{
  titleText: string;
  postContent: string;
}

@Component({
  selector: 'app-blenderprojects',
  templateUrl: './blenderprojects.component.html',
  styleUrls: ['./blenderprojects.component.css']
})
export class BlenderprojectsComponent implements OnInit {

  Posts: Post[] =
  [
    {titleText: "Title", postContent: "content text<br><br>WORDS"},
    {titleText: "Title2", postContent: "more text"}
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
