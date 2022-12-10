import { Component, OnInit } from '@angular/core';
import RiveScript from 'rivescript';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements  OnInit{
  constructor(private http: HttpClient){}
  bot = new RiveScript({debug: true});
  userReply = new FormControl('');
  ngOnInit(): void {
    this.bot.loadFile('assets/ai.rive').then(this.loading_done).catch(this.loading_error);
//     this.bot.loadFile()
//   this.http.get('assets/ai.rive', {responseType: 'text'}).subscribe(
//     data => {  
//        console.log(this.bot);    

//         this.bot.sortReplies();
//         this.bot.reply('local-user', 'hello bot').then(function(reply) {
//           console.log("The bot says: " + reply);
//         });
//     },
//     error => {
//         console.log(error+'asdda');
//     }
// );
   }
   loading_done():void {
    console.log("Bot has finished loading!");

    // Now the replies must be sorted!
    this.bot.sortReplies();
  
    // And now we're free to get a reply from the brain!
  
    // RiveScript remembers user data by their username and can tell
    // multiple users apart.
    let username = "local-user";
  
    // NOTE: the API has changed in v2.0.0 and returns a Promise now.
    this.bot.reply(username, "Hello, bot!").then(function(reply) {
      console.log("The bot says: " + reply);
    });
   }
   loading_error(error:string): void{
    console.log("Error when loading files: " + error);
   }

  updateReply() {
    this.userReply.setValue('Nancy');
  }

}
