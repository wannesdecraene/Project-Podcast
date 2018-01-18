import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit, OnDestroy {

  messages = [];
  connection: any;
  message: any;
  username: any;
  user: any;

  constructor(private chatService:ChatService) {}

  sendMessage(){
    let json = JSON.parse(localStorage.user)
    this.username = json.username
    var d = new Date();
    var hour= '';
    var minutes = '';
    if( d.getHours() < 10 ) {
      hour = "0" + d.getHours();
    }
    else {
      hour = d.getHours().toString();
    }
    if(d.getMinutes() < 10) {
      minutes = "0" + d.getMinutes();
    } else {
      minutes = d.getMinutes().toString();
    }
    this.chatService.sendMessage(this.username, this.message, hour + ':' + minutes);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
    this.user = localStorage.user;
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}