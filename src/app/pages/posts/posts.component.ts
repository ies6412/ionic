import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
mensajes:any;
  constructor(private dataservice: DataService) { 

  }

  ngOnInit () {

   this.mensajes =this.dataservice.getPosts();
   //.subscribe(
   //  (posts:any[])=>{
   //    console.log(posts);
   //    this.mensajes=posts;
  //});

  }

  Escuchaclik(id: number){
    console.log('click en',id);
  }



}
