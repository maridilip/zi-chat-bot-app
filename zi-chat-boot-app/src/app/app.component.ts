import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{

  constructor(public dialog: MatDialog,
    ) {}
  

  title = 'zoom-chat-bot';
  
  ngOnInit(): void {
    // this.bot.loadFile("/assets/ai.rive", function(){
    //   console.log('chatbot ready')
    // }, function(){
    //   console.log('chatbot error')
    // });
    
    
  }

  
  openDialog() {
    
    const dialogRef = this.dialog.open(ChatDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
