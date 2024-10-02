import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chats-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './chats-page.component.html',
  styleUrl: './chats-page.component.css'
})
export class ChatsPageComponent {
    chats: any[] = ["Talha Naeem", "CureMD", "Sample Chat", "Test Chat", "Talha Naeem", "CureMD", "Sample Chat", "Test Chat", "Talha Naeem", "CureMD", "Sample Chat", "Test Chat"];
}
