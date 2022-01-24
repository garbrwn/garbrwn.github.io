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
    {titleText: "Placeholder", postContent: "This is currently a placeholder page for Blender projects."},
    
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
