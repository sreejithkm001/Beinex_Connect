import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
@Input () icon:string="";
@Input () text:string="";
@Input () backgroundColor:string="";
@Input () textColor:string="";
@Input () width:string="";
}
