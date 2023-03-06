import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: { id: number; name: string; module: string; note: string; }[] = [];
  
  ngOnInit(): void {
    this.notes=[
    {id:1,name:"Salma",module:"Forensic",note:"20"},
    {id:2,name:"Yassin",module:"Forensic",note:"20"},
    {id:3,name:"Othman",module:"Forensic",note:"20"},
    {id:4,name:"Mohamed",module:"Forensic",note:"20"},
    {id:5,name:"Sara",module:"Forensic",note:"20"}
  
  ]
    throw new Error('Method not implemented.');
  }

}
