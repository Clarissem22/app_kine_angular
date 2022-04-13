import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { formatDate } from '@fullcalendar/angular';




@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.scss']
})
export class BilanComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false
  };
  
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
  
  constructor() {
   }
  
  ngOnInit(): void {
  }
  
  str = formatDate(new Date(), {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  });
 
  
}
