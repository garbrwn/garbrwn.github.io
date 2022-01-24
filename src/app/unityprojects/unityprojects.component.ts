import { Component, OnInit } from '@angular/core';
interface Post
{
  titleText: string;
  postContent: string;
}

@Component({
  selector: 'app-unityprojects',
  templateUrl: './unityprojects.component.html',
  styleUrls: ['./unityprojects.component.css']
})
export class UnityprojectsComponent implements OnInit {

  Posts: Post[] =
  [
    {
      titleText: 
        "New Year Project: 8 Ball Pool", 
      postContent: 
        "        To start off the year I wanted to take on a small project that I could push to completion\
         \t in a short amount of time. I'd been playing a fair of pool in the weeks before, so that seemed like\
         \t an obvious choice.        "}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
