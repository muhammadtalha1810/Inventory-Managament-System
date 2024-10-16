import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgClass],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  messageTypes = { error: 'error', success: 'success' };
  messageText: string = '';
  messageType: string = this.messageTypes.success;



  setDetails(message:string, type:string):void
  {
    this.messageText = message;
    this.messageType = type;
  }
}
