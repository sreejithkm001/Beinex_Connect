import { Component } from '@angular/core';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss']
})
export class OfferingsComponent {
industry=[
  { icon: '../../../../assets/images/section2/Group.svg',label: 'Information Technology', arrow:'../../../../assets/images/section2/arrow.svg'},
  { icon: '../../../../assets/images/section2/Group-1.svg',label: 'Human Resources', arrow:'../../../../assets/images/section2/arrow.svg'},
  { icon: '../../../../assets/images/section2/Group-2.svg',label: 'Procurement', arrow:'../../../../assets/images/section2/arrow.svg'},
  { icon: '../../../../assets/images/section2/Group-3.svg',label: 'Finance', arrow:'../../../../assets/images/section2/arrow.svg'},
  { icon: '../../../../assets/images/section2/Group-4.svg',label: 'Banking', arrow:'../../../../assets/images/section2/arrow.svg'}
];
offerings=[
  {label:'Ticket response',arrow:'../../../../assets/images/section2/arrow.svg'},
  {label:'Sentiment Analysis',arrow:'../../../../assets/images/section2/arrow.svg'},
  {label:'Project Capabilities',arrow:'../../../../assets/images/section2/arrow.svg'},
  {label:'Error Reduction',arrow:'../../../../assets/images/section2/arrow.svg'}
]
}
