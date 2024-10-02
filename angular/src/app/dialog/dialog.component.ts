import { Component } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() className: string = 'hidden';
  @Input() title: string = "Title";
  @Input() message: string = "This is a sample dialog message";
  @Input() primaryButtonText: string = "Approve";
  @Input() cancelButtonText: string = "Cancel";
  @Output() dialogresult: EventEmitter<string> = new EventEmitter<string>();
  primary_click(){
    this.dialogresult.emit("primary");
    this.className = 'hidden';
  }
  secondary_click(){
    this.dialogresult.emit("secondary");
    this.className = 'hidden';
  }
}
